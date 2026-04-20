"use client";

import { useEffect, useState } from "react";
import { PETITION_FALLBACK } from "@/lib/constants/petition";

interface PetitionData {
  count: number;
  goal: number;
  fetchedAt: string;
  source: string;
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export function PetitionCounter() {
  const [data, setData] = useState<PetitionData>({
    count: PETITION_FALLBACK.count,
    goal: PETITION_FALLBACK.goal,
    fetchedAt: PETITION_FALLBACK.verifiedAt,
    source: "fallback",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch("/api/petition-count", { cache: "no-store" });
        if (!res.ok) return;
        const json = (await res.json()) as PetitionData;
        if (!cancelled && json && typeof json.count === "number") {
          setData(json);
        }
      } catch {
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const pct = Math.min(100, Math.round((data.count / data.goal) * 100));
  const remaining = Math.max(0, data.goal - data.count);

  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8"
      style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "#dcfce7", color: "#166534" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
            style={{ backgroundColor: "#22c55e" }}
          />
          Live signature count
        </span>
      </div>

      <div className="flex items-baseline gap-3 flex-wrap">
        <span
          className="text-4xl md:text-5xl font-bold text-gray-900 tabular-nums"
          style={{ color: "#111827" }}
          aria-live="polite"
        >
          {loading ? formatNumber(data.count) : formatNumber(data.count)}
        </span>
        <span
          className="text-lg font-medium text-gray-500"
          style={{ color: "#6b7280" }}
        >
          of {formatNumber(data.goal)} goal
        </span>
      </div>

      <p className="mt-1 text-sm text-gray-600" style={{ color: "#4b5563" }}>
        Americans have signed the Change.org petition demanding USPS offer an
        EDDM opt-out.
      </p>

      <div
        className="mt-4 w-full h-3 bg-gray-200 rounded-full overflow-hidden"
        style={{ backgroundColor: "#e5e7eb" }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={data.goal}
        aria-valuenow={data.count}
      >
        <div
          className="h-full bg-blue-600 transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: "#2563eb" }}
        />
      </div>

      <p className="mt-2 text-xs text-gray-500" style={{ color: "#6b7280" }}>
        {remaining > 0
          ? `${formatNumber(remaining)} more needed to reach the next goal.`
          : "Goal reached. Help push the count even higher."}
      </p>
    </div>
  );
}
