"use client";

import { PETITION_URL } from "@/lib/constants/statistics";
import { ReactNode } from "react";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

function trackPetitionClick(label: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "petition_click", {
      event_category: "conversion",
      event_label: label,
      page_location: window.location.pathname,
    });
  }
}

interface TrackedPetitionLinkProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export function TrackedPetitionLink({
  label,
  className = "",
  style,
  children,
}: TrackedPetitionLinkProps) {
  return (
    <a
      href={PETITION_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackPetitionClick(label)}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
