// Census-based household estimation for carrier routes
// This provides rough estimates when official USPS data is not available

// Average households per carrier route by type
// Source: USPS delivery point statistics and Census data
const AVERAGE_HOUSEHOLDS = {
  // City routes typically have 400-800 stops
  CITY: 550,
  // Rural routes can have 300-700 stops
  RURAL: 450,
  // Highway contract routes vary widely
  HIGHWAY: 400,
  // PO Box routes (not relevant for EDDM)
  PO_BOX: 0,
};

// State-level adjustment factors based on population density
// Higher density = more households per route
const STATE_DENSITY_FACTORS: Record<string, number> = {
  // High density states
  NJ: 1.3,
  RI: 1.25,
  MA: 1.2,
  CT: 1.2,
  MD: 1.15,
  DE: 1.1,
  NY: 1.1,
  FL: 1.05,
  CA: 1.05,
  PA: 1.0,
  OH: 1.0,
  IL: 1.0,
  // Medium density states
  VA: 0.95,
  NC: 0.95,
  GA: 0.95,
  MI: 0.95,
  TX: 0.9,
  WA: 0.9,
  OR: 0.9,
  CO: 0.9,
  AZ: 0.9,
  // Lower density states
  AL: 0.85,
  SC: 0.85,
  TN: 0.85,
  KY: 0.85,
  IN: 0.85,
  WI: 0.85,
  MN: 0.85,
  MO: 0.85,
  LA: 0.85,
  OK: 0.8,
  AR: 0.8,
  KS: 0.8,
  MS: 0.8,
  IA: 0.8,
  NE: 0.75,
  NM: 0.75,
  NV: 0.75,
  UT: 0.8,
  ID: 0.7,
  WV: 0.7,
  ME: 0.7,
  NH: 0.85,
  VT: 0.7,
  HI: 0.9,
  // Low density states
  MT: 0.6,
  ND: 0.6,
  SD: 0.6,
  WY: 0.55,
  AK: 0.5,
};

export interface HouseholdEstimate {
  estimate: number;
  confidence: "low" | "medium" | "high";
  source: string;
}

/**
 * Estimate the number of households in a carrier route
 * @param carrierRoute - The carrier route code (e.g., "C045", "R012")
 * @param state - Two-letter state code
 * @param zipCode - 5-digit ZIP code
 * @returns Estimated household count with confidence level
 */
export function estimateHouseholds(
  carrierRoute: string,
  state: string,
  _zipCode: string
): HouseholdEstimate {
  // Determine route type from first character
  const routeType = carrierRoute.charAt(0).toUpperCase();

  let baseHouseholds: number;
  let routeTypeName: string;

  switch (routeType) {
    case "C":
      baseHouseholds = AVERAGE_HOUSEHOLDS.CITY;
      routeTypeName = "city";
      break;
    case "R":
      baseHouseholds = AVERAGE_HOUSEHOLDS.RURAL;
      routeTypeName = "rural";
      break;
    case "H":
      baseHouseholds = AVERAGE_HOUSEHOLDS.HIGHWAY;
      routeTypeName = "highway";
      break;
    case "B":
    case "G":
      // PO Box and General Delivery - not applicable for EDDM
      return {
        estimate: 0,
        confidence: "high",
        source: "Not applicable - PO Box/General Delivery route",
      };
    default:
      // Unknown route type, use city average
      baseHouseholds = AVERAGE_HOUSEHOLDS.CITY;
      routeTypeName = "unknown";
  }

  // Apply state density factor
  const stateFactor = STATE_DENSITY_FACTORS[state.toUpperCase()] || 0.9;
  const adjustedHouseholds = Math.round(baseHouseholds * stateFactor);

  // Determine confidence level
  // Higher confidence for city routes in known states
  let confidence: "low" | "medium" | "high";
  if (routeType === "C" && STATE_DENSITY_FACTORS[state.toUpperCase()]) {
    confidence = "medium";
  } else if (routeTypeName === "unknown") {
    confidence = "low";
  } else {
    confidence = "low";
  }

  return {
    estimate: adjustedHouseholds,
    confidence,
    source: `Census-based estimate for ${routeTypeName} route in ${state}`,
  };
}

/**
 * Get a descriptive label for route type
 */
export function getRouteTypeLabel(carrierRoute: string): string {
  const routeType = carrierRoute.charAt(0).toUpperCase();

  switch (routeType) {
    case "C":
      return "City Delivery Route";
    case "R":
      return "Rural Route";
    case "H":
      return "Highway Contract Route";
    case "B":
      return "PO Box Section";
    case "G":
      return "General Delivery";
    default:
      return "Carrier Route";
  }
}
