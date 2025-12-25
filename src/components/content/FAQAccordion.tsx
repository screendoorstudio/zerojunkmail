"use client";

import { useState } from "react";
import type { FAQItem } from "@/lib/schema/faq";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 my-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
          style={{ borderColor: '#e5e7eb' }}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            style={{ backgroundColor: '#ffffff' }}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold pr-4" style={{ color: '#111827' }}>
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              style={{ color: '#6b7280' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 border-t" style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}>
              <p className="leading-relaxed" style={{ color: '#374151' }}>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
