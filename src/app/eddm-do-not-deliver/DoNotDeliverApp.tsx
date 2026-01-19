"use client";

import { useState, useCallback } from "react";
import { AddressForm } from "@/components/do-not-deliver/AddressForm";
import { RouteResult, type RouteInfo } from "@/components/do-not-deliver/RouteResult";
import { OptOutButton } from "@/components/do-not-deliver/OptOutButton";
import { RouteMap } from "@/components/do-not-deliver/RouteMap";
import { Leaderboard } from "@/components/do-not-deliver/Leaderboard";

interface MapLocation {
  lat: number;
  lng: number;
}

export function DoNotDeliverApp() {
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [isOptingOut, setIsOptingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [routeInfo, setRouteInfo] = useState<RouteInfo | null>(null);
  const [hasOptedOut, setHasOptedOut] = useState(false);
  const [milestoneReached, setMilestoneReached] = useState<number | undefined>();
  const [userLocation, setUserLocation] = useState<MapLocation | undefined>();
  const [optOutLocations, setOptOutLocations] = useState<MapLocation[]>([]);
  const [addressForOptOut, setAddressForOptOut] = useState<string>("");

  // Track petition_click event for GA4
  const trackEvent = useCallback((label: string) => {
    if (typeof window !== "undefined" && "gtag" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", "eddm_optout", {
        event_category: "engagement",
        event_label: label,
      });
    }
  }, []);

  const handleAddressSubmit = async (address: string) => {
    setIsLookingUp(true);
    setError(null);
    setRouteInfo(null);
    setHasOptedOut(false);
    setMilestoneReached(undefined);
    setAddressForOptOut(address);

    try {
      const response = await fetch("/api/carrier-route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || "Failed to look up address");
        return;
      }

      setRouteInfo(data.data);
      setUserLocation({ lat: data.data.lat, lng: data.data.lng });

      // Fetch opt-out locations for the map
      try {
        const statsResponse = await fetch(
          `/api/route-stats?zipRoute=${data.data.zipRoute}`
        );
        const statsData = await statsResponse.json();

        if (statsData.success && statsData.data?.optOutLocations) {
          setOptOutLocations(statsData.data.optOutLocations);
        }
      } catch {
        // Non-critical - map will just show user location
      }

      trackEvent("route_lookup");
    } catch {
      setError("Failed to look up address. Please try again.");
    } finally {
      setIsLookingUp(false);
    }
  };

  const handleOptOut = async (email?: string) => {
    if (!routeInfo) return;

    setIsOptingOut(true);
    setError(null);

    try {
      const response = await fetch("/api/do-not-deliver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: addressForOptOut,
          carrierRoute: routeInfo.carrierRoute,
          zipCode: routeInfo.zipCode,
          city: routeInfo.city,
          state: routeInfo.state,
          lat: routeInfo.lat,
          lng: routeInfo.lng,
          email,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || "Failed to register opt-out");
        return;
      }

      // Update stats
      setRouteInfo((prev) =>
        prev
          ? {
              ...prev,
              stats: {
                ...prev.stats,
                optOutCount: data.data.optOutCount,
                estimatedHouseholds: data.data.estimatedHouseholds,
                percentOptedOut: data.data.percentOptedOut,
              },
            }
          : null
      );

      setHasOptedOut(true);

      if (data.data.milestoneReached) {
        setMilestoneReached(data.data.milestoneReached);
      }

      // Track the opt-out
      trackEvent(data.data.isNewOptOut ? "optout_new" : "optout_existing");

      if (data.data.milestoneReached) {
        trackEvent(`milestone_${data.data.milestoneReached}`);
      }
    } catch {
      setError("Failed to register opt-out. Please try again.");
    } finally {
      setIsOptingOut(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Address Form */}
      <AddressForm onSubmit={handleAddressSubmit} isLoading={isLookingUp} />

      {/* Error Message */}
      {error && (
        <div
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
          style={{ backgroundColor: "#fef2f2", color: "#b91c1c" }}
        >
          {error}
        </div>
      )}

      {/* Route Result */}
      {routeInfo && (
        <>
          <RouteResult route={routeInfo} hasOptedOut={hasOptedOut} />

          {/* Opt Out Button */}
          <OptOutButton
            onOptOut={handleOptOut}
            isLoading={isOptingOut}
            hasOptedOut={hasOptedOut}
            milestoneReached={milestoneReached}
          />

          {/* Map */}
          <RouteMap
            userLocation={userLocation}
            optOutLocations={optOutLocations}
          />
        </>
      )}

      {/* Leaderboard - always visible */}
      <div className="mt-8">
        <Leaderboard />
      </div>
    </div>
  );
}
