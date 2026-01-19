// Geocodio API wrapper for address geocoding and carrier route lookup
// API docs: https://www.geocod.io/docs/

export interface GeocodioResult {
  input: {
    address_components: {
      number: string;
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    formatted_address: string;
  };
  results: Array<{
    address_components: {
      number: string;
      street: string;
      city: string;
      county: string;
      state: string;
      zip: string;
    };
    formatted_address: string;
    location: {
      lat: number;
      lng: number;
    };
    accuracy: number;
    accuracy_type: string;
    source: string;
    fields?: {
      zip4?: {
        zip4: string;
        carrier_route: string;
        check_digit: number;
        record_type: {
          code: string;
          description: string;
        };
      };
    };
  }>;
}

export interface CarrierRouteInfo {
  success: boolean;
  error?: string;
  carrierRoute?: string;
  zipCode?: string;
  city?: string;
  state?: string;
  formattedAddress?: string;
  lat?: number;
  lng?: number;
}

const GEOCODIO_API_URL = "https://api.geocod.io/v1.7";

export async function lookupCarrierRoute(
  address: string
): Promise<CarrierRouteInfo> {
  const apiKey = process.env.GEOCODIO_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      error: "Geocodio API key not configured",
    };
  }

  try {
    // URL encode the address
    const encodedAddress = encodeURIComponent(address);

    // Request with zip4 field which includes carrier route
    const url = `${GEOCODIO_API_URL}/geocode?q=${encodedAddress}&fields=zip4&api_key=${apiKey}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Geocodio API error:", response.status, errorText);
      return {
        success: false,
        error: `Geocoding failed: ${response.status}`,
      };
    }

    const data: GeocodioResult = await response.json();

    if (!data.results || data.results.length === 0) {
      return {
        success: false,
        error: "Address not found. Please check the address and try again.",
      };
    }

    const result = data.results[0];

    // Check if carrier route is available
    const carrierRoute = result.fields?.zip4?.carrier_route;

    if (!carrierRoute) {
      return {
        success: false,
        error:
          "Carrier route information not available for this address. This may be a PO Box or business address.",
      };
    }

    return {
      success: true,
      carrierRoute,
      zipCode: result.address_components.zip,
      city: result.address_components.city,
      state: result.address_components.state,
      formattedAddress: result.formatted_address,
      lat: result.location.lat,
      lng: result.location.lng,
    };
  } catch (error) {
    console.error("Geocodio lookup error:", error);
    return {
      success: false,
      error: "Failed to look up address. Please try again.",
    };
  }
}

// Create a privacy-respecting approximate location
// Rounds to ~100m precision (2 decimal places is ~1.1km, 3 is ~110m)
export function approximateLocation(
  lat: number,
  lng: number
): { lat: number; lng: number } {
  // Round to 3 decimal places (~110m precision)
  // Then add a small random offset (up to 50m in any direction)
  const offset = 0.0005; // ~55m
  const latOffset = (Math.random() - 0.5) * 2 * offset;
  const lngOffset = (Math.random() - 0.5) * 2 * offset;

  return {
    lat: Math.round((lat + latOffset) * 1000) / 1000,
    lng: Math.round((lng + lngOffset) * 1000) / 1000,
  };
}
