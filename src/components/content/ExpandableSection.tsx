"use client";

import { useState } from "react";

interface ExpandableSectionProps {
  title: string;
  defaultOpen?: boolean;
  badge?: string;
  children: React.ReactNode;
}

export default function ExpandableSection({
  title,
  defaultOpen = false,
  badge,
  children,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="border border-gray-200 rounded-lg overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
        style={{ backgroundColor: isOpen ? "#f9fafb" : "#ffffff" }}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-medium"
            style={{ color: "#111827" }}
          >
            {title}
          </span>
          {badge && (
            <span
              className="px-2 py-0.5 text-xs font-medium rounded"
              style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}
            >
              {badge}
            </span>
          )}
        </div>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{ color: "#6b7280" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="px-4 py-4 border-t border-gray-200"
          style={{ backgroundColor: "#ffffff", color: "#374151" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
