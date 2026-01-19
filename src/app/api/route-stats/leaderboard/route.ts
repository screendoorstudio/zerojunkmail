import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export interface LeaderboardEntry {
  zipRoute: string;
  city: string | null;
  state: string | null;
  optOutCount: number;
  estimatedHouseholds: number;
  percentOptedOut: number;
}

export interface LeaderboardResponse {
  success: boolean;
  error?: string;
  data?: {
    routes: LeaderboardEntry[];
    totalOptOuts: number;
    totalRoutes: number;
  };
}

// Cache for 5 minutes
export const revalidate = 300;

export async function GET(
  request: NextRequest
): Promise<NextResponse<LeaderboardResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get("limit") || "10"), 50);
    const sortBy = searchParams.get("sortBy") || "percent"; // "percent" or "count"

    // Get top routes by opt-out percentage or count
    const orderColumn =
      sortBy === "count" ? "opt_out_count" : "opt_out_count"; // We'll calculate percent in JS
    const { data: routesData, error: routesError } = await supabase
      .from("route_stats")
      .select("*")
      .gt("opt_out_count", 0)
      .order(orderColumn, { ascending: false })
      .limit(100); // Get more than needed to sort by percent

    if (routesError) {
      console.error("Leaderboard query error:", routesError);
      return NextResponse.json(
        { success: false, error: "Failed to fetch leaderboard" },
        { status: 500 }
      );
    }

    // Calculate percentages and sort
    const routesWithPercent =
      routesData
        ?.map((route) => ({
          zipRoute: route.zip_route,
          city: route.city,
          state: route.state,
          optOutCount: route.opt_out_count,
          estimatedHouseholds: route.estimated_households || 500, // Default if not set
          percentOptedOut:
            route.estimated_households && route.estimated_households > 0
              ? Math.round(
                  (route.opt_out_count / route.estimated_households) * 1000
                ) / 10
              : 0,
        }))
        .sort((a, b) => {
          if (sortBy === "count") {
            return b.optOutCount - a.optOutCount;
          }
          return b.percentOptedOut - a.percentOptedOut;
        })
        .slice(0, limit) || [];

    // Get totals
    const { count: totalRoutes } = await supabase
      .from("route_stats")
      .select("*", { count: "exact", head: true })
      .gt("opt_out_count", 0);

    const { data: sumData } = await supabase.rpc("sum_opt_outs");

    return NextResponse.json({
      success: true,
      data: {
        routes: routesWithPercent,
        totalOptOuts: sumData || 0,
        totalRoutes: totalRoutes || 0,
      },
    });
  } catch (error) {
    console.error("Leaderboard error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leaderboard" },
      { status: 500 }
    );
  }
}
