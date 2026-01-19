"use client";

import { useEffect, useState } from "react";

interface LeaderboardEntry {
  zipRoute: string;
  city: string | null;
  state: string | null;
  optOutCount: number;
  estimatedHouseholds: number;
  percentOptedOut: number;
}

interface LeaderboardData {
  routes: LeaderboardEntry[];
  totalOptOuts: number;
  totalRoutes: number;
}

export function Leaderboard() {
  const [data, setData] = useState<LeaderboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const response = await fetch("/api/route-stats/leaderboard?limit=10");
        const result = await response.json();

        if (result.success) {
          setData(result.data);
        } else {
          setError(result.error || "Failed to load leaderboard");
        }
      } catch {
        setError("Failed to load leaderboard");
      } finally {
        setIsLoading(false);
      }
    }

    fetchLeaderboard();
  }, []);

  if (isLoading) {
    return (
      <div
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
        style={{ backgroundColor: "#ffffff" }}
      >
        <h3
          className="text-lg font-bold text-gray-900 mb-4"
          style={{ color: "#111827" }}
        >
          🏆 Top Routes Demanding Opt-Out
        </h3>
        <div className="animate-pulse space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    // Show placeholder when no data
    return (
      <div
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
        style={{ backgroundColor: "#ffffff" }}
      >
        <h3
          className="text-lg font-bold text-gray-900 mb-4"
          style={{ color: "#111827" }}
        >
          🏆 Top Routes Demanding Opt-Out
        </h3>
        <div
          className="text-center py-8 text-gray-500"
          style={{ color: "#6b7280" }}
        >
          <p className="mb-2">No routes have opted out yet.</p>
          <p className="text-sm">Be the first in your carrier route!</p>
        </div>
      </div>
    );
  }

  if (data.routes.length === 0) {
    return (
      <div
        className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
        style={{ backgroundColor: "#ffffff" }}
      >
        <h3
          className="text-lg font-bold text-gray-900 mb-4"
          style={{ color: "#111827" }}
        >
          🏆 Top Routes Demanding Opt-Out
        </h3>
        <div
          className="text-center py-8 text-gray-500"
          style={{ color: "#6b7280" }}
        >
          <p className="mb-2">No routes have opted out yet.</p>
          <p className="text-sm">Be the first in your carrier route!</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="flex items-center justify-between mb-4">
        <h3
          className="text-lg font-bold text-gray-900"
          style={{ color: "#111827" }}
        >
          🏆 Top Routes Demanding Opt-Out
        </h3>
        <span
          className="text-sm text-gray-500"
          style={{ color: "#6b7280" }}
        >
          {data.totalOptOuts.toLocaleString()} total opt-outs
        </span>
      </div>

      <div className="space-y-2">
        {data.routes.map((route, index) => (
          <div
            key={route.zipRoute}
            className={`flex items-center justify-between p-3 rounded-lg ${
              route.percentOptedOut >= 50
                ? "bg-green-50 border border-green-200"
                : "bg-gray-50"
            }`}
            style={{
              backgroundColor:
                route.percentOptedOut >= 50 ? "#f0fdf4" : "#f9fafb",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold ${
                  index < 3
                    ? "bg-yellow-400 text-yellow-900"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </span>
              <div>
                <span
                  className="font-semibold text-gray-900"
                  style={{ color: "#111827" }}
                >
                  {route.zipRoute}
                </span>
                {route.city && route.state && (
                  <span
                    className="text-sm text-gray-500 ml-2"
                    style={{ color: "#6b7280" }}
                  >
                    {route.city}, {route.state}
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <span
                className={`font-bold ${
                  route.percentOptedOut >= 50
                    ? "text-green-600"
                    : route.percentOptedOut >= 25
                    ? "text-yellow-600"
                    : "text-blue-600"
                }`}
                style={{
                  color:
                    route.percentOptedOut >= 50
                      ? "#16a34a"
                      : route.percentOptedOut >= 25
                      ? "#ca8a04"
                      : "#2563eb",
                }}
              >
                {route.percentOptedOut}%
              </span>
              <span
                className="text-xs text-gray-500 ml-1"
                style={{ color: "#6b7280" }}
              >
                ({route.optOutCount}/{route.estimatedHouseholds})
              </span>
            </div>
          </div>
        ))}
      </div>

      {data.totalRoutes > 10 && (
        <p
          className="text-center text-sm text-gray-500 mt-4"
          style={{ color: "#6b7280" }}
        >
          Showing top 10 of {data.totalRoutes} routes with opt-outs
        </p>
      )}
    </div>
  );
}
