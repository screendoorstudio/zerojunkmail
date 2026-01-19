import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { approximateLocation } from "@/lib/geocodio";
import { estimateHouseholds } from "@/lib/census";
import crypto from "crypto";

export interface DoNotDeliverRequest {
  address: string;
  carrierRoute: string;
  zipCode: string;
  city: string;
  state: string;
  lat: number;
  lng: number;
  email?: string;
}

export interface DoNotDeliverResponse {
  success: boolean;
  error?: string;
  data?: {
    zipRoute: string;
    optOutCount: number;
    estimatedHouseholds: number;
    percentOptedOut: number;
    isNewOptOut: boolean;
    milestoneReached?: number;
  };
}

// Hash address for privacy (can't reverse to original address)
function hashAddress(address: string): string {
  // Normalize address: lowercase, remove extra spaces, standardize format
  const normalized = address
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[.,#]/g, "")
    .trim();

  return crypto.createHash("sha256").update(normalized).digest("hex");
}

// Check if a milestone threshold was just crossed
function checkMilestone(
  previousPercent: number,
  newPercent: number
): number | null {
  const milestones = [25, 50, 75, 90];

  for (const milestone of milestones) {
    if (previousPercent < milestone && newPercent >= milestone) {
      return milestone;
    }
  }
  return null;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<DoNotDeliverResponse>> {
  try {
    const body: DoNotDeliverRequest = await request.json();

    const { address, carrierRoute, zipCode, city, state, lat, lng, email } =
      body;

    // Validate required fields
    if (!address || !carrierRoute || !zipCode || !lat || !lng) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const zipRoute = `${zipCode}-${carrierRoute}`;
    const addressHash = hashAddress(address);

    // Get approximate location for map display (privacy-respecting)
    const approxLocation = approximateLocation(lat, lng);

    // Check if this address has already opted out
    const { data: existingOptOut } = await supabase
      .from("opt_outs")
      .select("id")
      .eq("address_hash", addressHash)
      .single();

    if (existingOptOut) {
      // Already opted out - get current stats
      const { data: statsData } = await supabase
        .from("route_stats")
        .select("opt_out_count, estimated_households")
        .eq("zip_route", zipRoute)
        .single();

      const optOutCount = statsData?.opt_out_count || 1;
      const estimatedHouseholds =
        statsData?.estimated_households ||
        estimateHouseholds(carrierRoute, state, zipCode).estimate;
      const percentOptedOut =
        Math.round((optOutCount / estimatedHouseholds) * 1000) / 10;

      return NextResponse.json({
        success: true,
        data: {
          zipRoute,
          optOutCount,
          estimatedHouseholds,
          percentOptedOut,
          isNewOptOut: false,
        },
      });
    }

    // Get current stats before the new opt-out
    const { data: currentStats } = await supabase
      .from("route_stats")
      .select("opt_out_count, estimated_households")
      .eq("zip_route", zipRoute)
      .single();

    const previousOptOutCount = currentStats?.opt_out_count || 0;
    const householdEstimate = estimateHouseholds(carrierRoute, state, zipCode);
    const estimatedHouseholds =
      currentStats?.estimated_households || householdEstimate.estimate;
    const previousPercent =
      estimatedHouseholds > 0
        ? (previousOptOutCount / estimatedHouseholds) * 100
        : 0;

    // Insert the new opt-out
    const { error: insertError } = await supabase.from("opt_outs").insert({
      address_hash: addressHash,
      zip_code: zipCode,
      carrier_route: carrierRoute,
      city: city || null,
      state: state || null,
      email: email || null,
      lat_approx: approxLocation.lat,
      lng_approx: approxLocation.lng,
    });

    if (insertError) {
      console.error("Failed to insert opt-out:", insertError);
      return NextResponse.json(
        { success: false, error: "Failed to register opt-out" },
        { status: 500 }
      );
    }

    // Update or insert route stats
    const newOptOutCount = previousOptOutCount + 1;

    const { error: upsertError } = await supabase.from("route_stats").upsert(
      {
        zip_route: zipRoute,
        zip_code: zipCode,
        carrier_route: carrierRoute,
        city: city || null,
        state: state || null,
        opt_out_count: newOptOutCount,
        estimated_households: estimatedHouseholds,
        last_updated: new Date().toISOString(),
      },
      { onConflict: "zip_route" }
    );

    if (upsertError) {
      console.error("Failed to update route stats:", upsertError);
      // Don't fail the request - opt-out was recorded
    }

    // Calculate new percentage
    const newPercent =
      estimatedHouseholds > 0
        ? (newOptOutCount / estimatedHouseholds) * 100
        : 0;
    const percentOptedOut = Math.round(newPercent * 10) / 10;

    // Check for milestone
    const milestoneReached = checkMilestone(previousPercent, newPercent);

    if (milestoneReached) {
      // Record the milestone
      await supabase.from("route_milestones").insert({
        zip_route: zipRoute,
        milestone_percent: milestoneReached,
        escalation_sent: false,
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        zipRoute,
        optOutCount: newOptOutCount,
        estimatedHouseholds,
        percentOptedOut,
        isNewOptOut: true,
        milestoneReached: milestoneReached || undefined,
      },
    });
  } catch (error) {
    console.error("Do not deliver error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process opt-out request" },
      { status: 500 }
    );
  }
}
