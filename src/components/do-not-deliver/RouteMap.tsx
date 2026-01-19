"use client";

import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";

interface MapLocation {
  lat: number;
  lng: number;
}

interface RouteMapProps {
  userLocation?: MapLocation;
  optOutLocations?: MapLocation[];
}

export function RouteMap({ userLocation, optOutLocations = [] }: RouteMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const userMarkerRef = useRef<LeafletMarker | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import Leaflet (client-side only)
    import("leaflet").then((L) => {
      // Fix default icon issue with webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Default center (center of continental US)
      const defaultCenter: [number, number] = [39.8283, -98.5795];
      const defaultZoom = 4;

      try {
        const map = L.map(mapRef.current!, {
          center: defaultCenter,
          zoom: defaultZoom,
          scrollWheelZoom: false,
        });

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        mapInstanceRef.current = map;
        setIsLoaded(true);
      } catch (e) {
        console.error("Failed to initialize map:", e);
        setError("Failed to load map");
      }
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update map when user location changes
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded) return;

    import("leaflet").then((L) => {
      const map = mapInstanceRef.current!;

      // Remove existing user marker
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }

      if (userLocation) {
        // Create custom icon for user location
        const userIcon = L.divIcon({
          className: "custom-user-marker",
          html: `
            <div style="
              background-color: #dc2626;
              width: 24px;
              height: 24px;
              border-radius: 50%;
              border: 3px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                width: 8px;
                height: 8px;
                background-color: white;
                border-radius: 50%;
              "></div>
            </div>
          `,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        // Add user marker
        userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], {
          icon: userIcon,
        })
          .addTo(map)
          .bindPopup("Your location");

        // Center map on user location
        map.setView([userLocation.lat, userLocation.lng], 14);
      }
    });
  }, [userLocation, isLoaded]);

  // Add opt-out location markers (clustered for privacy)
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded || optOutLocations.length === 0)
      return;

    import("leaflet").then((L) => {
      const map = mapInstanceRef.current!;

      // Group nearby locations (simple clustering)
      const clusters = clusterLocations(optOutLocations);

      clusters.forEach((cluster) => {
        const clusterIcon = L.divIcon({
          className: "custom-cluster-marker",
          html: `
            <div style="
              background-color: #2563eb;
              color: white;
              min-width: 28px;
              height: 28px;
              border-radius: 14px;
              border: 2px solid white;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 12px;
              padding: 0 6px;
            ">
              ${cluster.count}
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        L.marker([cluster.lat, cluster.lng], { icon: clusterIcon })
          .addTo(map)
          .bindPopup(
            `${cluster.count} household${cluster.count > 1 ? "s" : ""} opted out nearby`
          );
      });
    });
  }, [optOutLocations, isLoaded]);

  if (error) {
    return (
      <div
        className="bg-gray-100 rounded-xl h-[300px] flex items-center justify-center"
        style={{ backgroundColor: "#f3f4f6" }}
      >
        <p className="text-gray-500" style={{ color: "#6b7280" }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="p-4 border-b border-gray-200">
        <h3
          className="font-bold text-gray-900 flex items-center gap-2"
          style={{ color: "#111827" }}
        >
          <span>🗺️</span> Map
        </h3>
        {!userLocation && (
          <p className="text-sm text-gray-500 mt-1" style={{ color: "#6b7280" }}>
            Enter your address above to see your location
          </p>
        )}
      </div>

      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <div
        ref={mapRef}
        className="h-[300px] w-full"
        style={{ minHeight: "300px" }}
      >
        {!isLoaded && (
          <div
            className="h-full flex items-center justify-center bg-gray-100"
            style={{ backgroundColor: "#f3f4f6" }}
          >
            <div className="animate-pulse text-gray-500">Loading map...</div>
          </div>
        )}
      </div>

      {optOutLocations.length > 0 && (
        <div className="p-3 bg-gray-50 text-sm" style={{ backgroundColor: "#f9fafb" }}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow"
                style={{ backgroundColor: "#dc2626" }}
              />
              <span className="text-gray-600" style={{ color: "#4b5563" }}>
                Your location
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow"
                style={{ backgroundColor: "#2563eb" }}
              />
              <span className="text-gray-600" style={{ color: "#4b5563" }}>
                Opted-out households (approximate)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple clustering function for privacy-respecting location display
interface LocationCluster {
  lat: number;
  lng: number;
  count: number;
}

function clusterLocations(locations: MapLocation[]): LocationCluster[] {
  if (locations.length === 0) return [];

  // Group locations within ~200m of each other
  const clusterRadius = 0.002; // ~200m
  const clusters: LocationCluster[] = [];
  const used = new Set<number>();

  for (let i = 0; i < locations.length; i++) {
    if (used.has(i)) continue;

    const cluster: MapLocation[] = [locations[i]];
    used.add(i);

    for (let j = i + 1; j < locations.length; j++) {
      if (used.has(j)) continue;

      const dist = Math.sqrt(
        Math.pow(locations[i].lat - locations[j].lat, 2) +
          Math.pow(locations[i].lng - locations[j].lng, 2)
      );

      if (dist < clusterRadius) {
        cluster.push(locations[j]);
        used.add(j);
      }
    }

    // Calculate cluster centroid
    const avgLat =
      cluster.reduce((sum, loc) => sum + loc.lat, 0) / cluster.length;
    const avgLng =
      cluster.reduce((sum, loc) => sum + loc.lng, 0) / cluster.length;

    clusters.push({
      lat: avgLat,
      lng: avgLng,
      count: cluster.length,
    });
  }

  return clusters;
}
