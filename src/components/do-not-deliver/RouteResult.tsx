"use client";

import { ProgressBar } from "./ProgressBar";

export interface RouteInfo {
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
}

interface RouteResultProps {
  route: RouteInfo;
  hasOptedOut: boolean;
}

export function RouteResult({ route, hasOptedOut }: RouteResultProps) {
  const { carrierRoute, routeLabel, zipCode, city, state, stats } = route;

  // Determine milestone status
  const getMilestoneStatus = () => {
    if (stats.percentOptedOut >= 50) {
      return {
        text: "Majority reached!",
        color: "text-green-600",
        bgColor: "bg-green-100",
        icon: "🎉",
      };
    }
    if (stats.percentOptedOut >= 25) {
      return {
        text: "Gaining momentum!",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        icon: "🔥",
      };
    }
    return null;
  };

  const milestone = getMilestoneStatus();

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Route info header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📬</span>
            <h3
              className="text-2xl font-bold text-gray-900"
              style={{ color: "#111827" }}
            >
              Route {carrierRoute}
            </h3>
          </div>
          <p className="text-gray-600 mt-1" style={{ color: "#4b5563" }}>
            {routeLabel} • ZIP {zipCode}
          </p>
          <p className="text-gray-500 text-sm" style={{ color: "#6b7280" }}>
            {city}, {state}
          </p>
        </div>

        {hasOptedOut && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            ✓ You&apos;re opted out
          </span>
        )}
      </div>

      {/* Milestone badge */}
      {milestone && (
        <div
          className={`${milestone.bgColor} rounded-lg p-3 mb-4 flex items-center gap-2`}
        >
          <span className="text-xl">{milestone.icon}</span>
          <span className={`font-semibold ${milestone.color}`}>
            {milestone.text}
          </span>
        </div>
      )}

      {/* Progress section */}
      <div className="mb-4">
        <ProgressBar
          current={stats.optOutCount}
          total={stats.estimatedHouseholds}
          percent={stats.percentOptedOut}
        />
      </div>

      {/* Stats explanation */}
      <div
        className="bg-gray-50 rounded-lg p-4 text-sm"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <p className="text-gray-700" style={{ color: "#374151" }}>
          <strong style={{ color: "#111827" }}>
            {stats.optOutCount.toLocaleString()} household
            {stats.optOutCount !== 1 ? "s" : ""}
          </strong>{" "}
          in this route have registered their opposition to EDDM junk mail.
        </p>
        {stats.percentOptedOut < 50 && (
          <p className="text-gray-600 mt-2" style={{ color: "#4b5563" }}>
            Need{" "}
            <strong>
              {Math.ceil(stats.estimatedHouseholds * 0.5 - stats.optOutCount)}{" "}
              more
            </strong>{" "}
            to reach majority (50%).
          </p>
        )}
        {stats.confidence !== "high" && (
          <p className="text-xs text-gray-500 mt-2" style={{ color: "#6b7280" }}>
            * Household estimate based on Census data. Actual count may vary.
          </p>
        )}
      </div>
    </div>
  );
}
