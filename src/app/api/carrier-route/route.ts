import { NextRequest, NextResponse } from "next/server";
import { lookupCarrierRoute } from "@/lib/geocodio";
import { estimateHouseholds, getRouteTypeLabel } from "@/lib/census";
import { supabase } from "@/lib/supabase";

export interface CarrierRouteResponse {
  success: boolean;
  error?: string;
  data?: {
    carrierRoute: string;
    routeLabel: string;
    zipCode: string;
    zipRoute: string;
    city: string;
    state: string;
    formattedAddress: string;
    lat: number;
    lng: number;
    stats: {
      optOutCount: number;
      estimatedHouseholds: number;
      percentOptedOut: number;
      confidence: "low" | "medium" | "high";
    };
  };
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<CarrierRouteResponse>> {
  try {
    const body = await request.json();
    const { address } = body;

    if (!address || typeof address !== "string") {
      return NextResponse.json(
        { success: false, error: "Address is required" },
        { status: 400 }
      );
    }

    // Look up carrier route via Geocodio
    const geocodeResult = await lookupCarrierRoute(address);

    if (!geocodeResult.success || !geocodeResult.carrierRoute) {
      return NextResponse.json(
        {
          success: false,
          error: geocodeResult.error || "Could not determine carrier route",
        },
        { status: 400 }
      );
    }

    const {
      carrierRoute,
      zipCode,
      city,
      state,
      formattedAddress,
      lat,
      lng,
    } = geocodeResult;

    const zipRoute = `${zipCode}-${carrierRoute}`;
    const routeLabel = getRouteTypeLabel(carrierRoute);

    // Get household estimate
    const householdEstimate = estimateHouseholds(
      carrierRoute,
      state || "",
      zipCode || ""
    );

    // Look up current opt-out stats from database
    let optOutCount = 0;

    try {
      const { data: statsData, error: statsError } = await supabase
        .from("route_stats")
        .select("opt_out_count, estimated_households")
        .eq("zip_route", zipRoute)
        .single();

      if (!statsError && statsData) {
        optOutCount = statsData.opt_out_count || 0;
        // If we have a verified household count, use it
        if (statsData.estimated_households) {
          householdEstimate.estimate = statsData.estimated_households;
          householdEstimate.confidence = "high";
        }
      }
    } catch {
      // Database not configured or route not found - use estimates
      console.log("Using estimated stats for route:", zipRoute);
    }

    // Calculate percentage
    const percentOptedOut =
      householdEstimate.estimate > 0
        ? Math.round((optOutCount / householdEstimate.estimate) * 1000) / 10
        : 0;

    return NextResponse.json({
      success: true,
      data: {
        carrierRoute: carrierRoute!,
        routeLabel,
        zipCode: zipCode!,
        zipRoute,
        city: city || "",
        state: state || "",
        formattedAddress: formattedAddress || address,
        lat: lat!,
        lng: lng!,
        stats: {
          optOutCount,
          estimatedHouseholds: householdEstimate.estimate,
          percentOptedOut,
          confidence: householdEstimate.confidence,
        },
      },
    });
  } catch (error) {
    console.error("Carrier route lookup error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to look up carrier route" },
      { status: 500 }
    );
  }
}
