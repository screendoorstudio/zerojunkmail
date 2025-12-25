"use client";

import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/constants/testimonials";

export function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  // Shuffle testimonials on mount for variety
  const [shuffledTestimonials, setShuffledTestimonials] = useState(TESTIMONIALS);

  useEffect(() => {
    const shuffled = [...TESTIMONIALS].sort(() => Math.random() - 0.5);
    setShuffledTestimonials(shuffled);
  }, []);

  const displayedTestimonials = isExpanded
    ? shuffledTestimonials
    : shuffledTestimonials.slice(0, visibleCount);

  return (
    <section
      className="py-16 bg-gray-50"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{ color: "#111827" }}
          >
            What People Are Saying
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ color: "#4b5563" }}
          >
            Real comments from petition signers across America who are fed up
            with unwanted junk mail they cannot stop.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              style={{ backgroundColor: "#ffffff", borderColor: "#f3f4f6" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <svg
                  className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#60a5fa" }}
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className="text-gray-700 text-sm leading-relaxed"
                  style={{ color: "#374151" }}
                >
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <div
                  className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#dbeafe" }}
                >
                  <span
                    className="text-blue-600 font-semibold text-sm"
                    style={{ color: "#2563eb" }}
                  >
                    {testimonial.firstName.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p
                    className="font-medium text-gray-900 text-sm"
                    style={{ color: "#111827" }}
                  >
                    {testimonial.firstName}
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ color: "#6b7280" }}
                  >
                    {testimonial.city}, {testimonial.state}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isExpanded && shuffledTestimonials.length > visibleCount && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e5e7eb",
                color: "#374151",
              }}
            >
              Show All {shuffledTestimonials.length} Comments
              <svg
                className="w-4 h-4"
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
          </div>
        )}

        {isExpanded && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium"
              style={{ color: "#6b7280" }}
            >
              Show Less
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
