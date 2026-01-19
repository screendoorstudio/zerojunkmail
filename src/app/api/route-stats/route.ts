import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export interface RouteStatsResponse {
  success: boolean;
  error?: string;
  data?: {
    zipRoute: string;
    zipCode: string;
    carrierRoute: string;
    city: string | null;
    state: string | null;
    optOutCount: number;
    estimatedHouseholds: number | null;
    percentOptedOut: number;
    lastUpdated: string;
    // Approximate locations for map display (clustered)
    optOutLocations?: Array<{ lat: number; lng: number }>;
  };
}

export async function GET(
  request: NextRequest
): Promise<NextResponse<RouteStatsResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    const zipRoute = searchParams.get("zipRoute");

    if (!zipRoute) {
      return NextResponse.json(
        { success: false, error: "zipRoute parameter is required" },
        { status: 400 }
      );
    }

    // Get route stats
    const { data: statsData, error: statsError } = await supabase
      .from("route_stats")
      .select("*")
      .eq("zip_route", zipRoute)
      .single();

    if (statsError || !statsData) {
      // Route not found - return zeros
      const [zipCode, carrierRoute] = zipRoute.split("-");
      return NextResponse.json({
        success: true,
        data: {
          zipRoute,
          zipCode: zipCode || "",
          carrierRoute: carrierRoute || "",
          city: null,
          state: null,
          optOutCount: 0,
          estimatedHouseholds: null,
          percentOptedOut: 0,
          lastUpdated: new Date().toISOString(),
          optOutLocations: [],
        },
      });
    }

    // Get opt-out locations for map display (approximate, for privacy)
    const { data: locationsData } = await supabase
      .from("opt_outs")
      .select("lat_approx, lng_approx")
      .eq("zip_code", statsData.zip_code)
      .eq("carrier_route", statsData.carrier_route)
      .not("lat_approx", "is", null);

    const optOutLocations =
      locationsData
        ?.filter((loc) => loc.lat_approx && loc.lng_approx)
        .map((loc) => ({
          lat: loc.lat_approx!,
          lng: loc.lng_approx!,
        })) || [];

    // Calculate percentage
    const percentOptedOut =
      statsData.estimated_households && statsData.estimated_households > 0
        ? Math.round(
            (statsData.opt_out_count / statsData.estimated_households) * 1000
          ) / 10
        : 0;

    return NextResponse.json({
      success: true,
      data: {
        zipRoute: statsData.zip_route,
        zipCode: statsData.zip_code,
        carrierRoute: statsData.carrier_route,
        city: statsData.city,
        state: statsData.state,
        optOutCount: statsData.opt_out_count,
        estimatedHouseholds: statsData.estimated_households,
        percentOptedOut,
        lastUpdated: statsData.last_updated,
        optOutLocations,
      },
    });
  } catch (error) {
    console.error("Route stats error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch route stats" },
      { status: 500 }
    );
  }
}
