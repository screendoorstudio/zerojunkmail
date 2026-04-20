import { NextResponse } from "next/server";
import {
  PETITION_FALLBACK,
  PETITION_SOURCE_URL,
} from "@/lib/constants/petition";

export const revalidate = 21600;

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

function extractNumber(html: string, pattern: RegExp): number | null {
  const match = html.match(pattern);
  if (!match) return null;
  const value = parseInt(match[1], 10);
  return Number.isFinite(value) && value > 0 ? value : null;
}

export async function GET() {
  try {
    const res = await fetch(PETITION_SOURCE_URL, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 21600 },
    });

    if (!res.ok) {
      throw new Error(`Change.org responded ${res.status}`);
    }

    const html = await res.text();

    const count =
      extractNumber(
        html,
        /"signatureState":\{"signatureCount":\{"total":(\d+)/
      ) ??
      extractNumber(html, /"signatureCount":\{"displayed":(\d+)/);

    const goal = extractNumber(html, /"signatureGoal":\{"displayed":(\d+)/);

    if (!count) {
      throw new Error("Could not locate signature count in page");
    }

    return NextResponse.json({
      count,
      goal: goal ?? PETITION_FALLBACK.goal,
      fetchedAt: new Date().toISOString(),
      source: "change.org",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        count: PETITION_FALLBACK.count,
        goal: PETITION_FALLBACK.goal,
        fetchedAt: PETITION_FALLBACK.verifiedAt,
        source: "fallback",
        error: message,
      },
      { status: 200 }
    );
  }
}
