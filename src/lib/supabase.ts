import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Supabase client for server-side operations
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Create a mock client for when Supabase is not configured
const createMockClient = () => {
  const mockResponse = {
    data: null,
    error: { message: "Supabase not configured" },
    count: null,
  };

  const mockQueryBuilder = {
    select: () => mockQueryBuilder,
    insert: () => Promise.resolve(mockResponse),
    update: () => mockQueryBuilder,
    upsert: () => Promise.resolve(mockResponse),
    delete: () => mockQueryBuilder,
    eq: () => mockQueryBuilder,
    neq: () => mockQueryBuilder,
    gt: () => mockQueryBuilder,
    gte: () => mockQueryBuilder,
    lt: () => mockQueryBuilder,
    lte: () => mockQueryBuilder,
    like: () => mockQueryBuilder,
    ilike: () => mockQueryBuilder,
    is: () => mockQueryBuilder,
    in: () => mockQueryBuilder,
    not: () => mockQueryBuilder,
    order: () => mockQueryBuilder,
    limit: () => mockQueryBuilder,
    single: () => Promise.resolve(mockResponse),
    then: (resolve: (value: typeof mockResponse) => void) =>
      Promise.resolve(resolve(mockResponse)),
  };

  return {
    from: () => mockQueryBuilder,
    rpc: () => Promise.resolve({ data: 0, error: null }),
  } as unknown as SupabaseClient;
};

// Only create real client if credentials are provided
let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    "Supabase environment variables not configured. Database features will be disabled."
  );
  supabase = createMockClient();
}

export { supabase };

// Database types for the EDDM Do Not Deliver tool
export interface OptOut {
  id: string;
  created_at: string;
  address_hash: string;
  zip_code: string;
  carrier_route: string;
  city: string | null;
  state: string | null;
  email: string | null;
  opted_out_at: string;
  verified: boolean;
  // For map display (approximate, privacy-respecting)
  lat_approx: number | null;
  lng_approx: number | null;
}

export interface RouteStats {
  zip_route: string;
  zip_code: string;
  carrier_route: string;
  city: string | null;
  state: string | null;
  opt_out_count: number;
  estimated_households: number | null;
  last_updated: string;
}

export interface RouteMilestone {
  id: string;
  zip_route: string;
  milestone_percent: number;
  reached_at: string;
  escalation_sent: boolean;
}
