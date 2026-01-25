"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/types/news";

interface ArchiveFiltersProps {
  categoryCounts: Record<string, number>;
}

export function ArchiveFilters({ categoryCounts }: ArchiveFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      // Clear filter if clicking the same category
      router.push("/news/archive", { scroll: false });
    } else {
      router.push(`/news/archive?category=${category}`, { scroll: false });
    }
  };

  const clearFilter = () => {
    router.push("/news/archive", { scroll: false });
  };

  return (
    <section
      className="bg-gray-50 py-6"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-3">
          <h2
            className="text-sm font-semibold text-gray-600"
            style={{ color: "#4b5563" }}
          >
            Filter by Category
          </h2>
          {selectedCategory && (
            <button
              onClick={clearFilter}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
              style={{ color: "#2563eb" }}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Clear filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
            const isSelected = selectedCategory === key;
            return (
              <button
                key={key}
                onClick={() => handleCategoryClick(key)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  isSelected
                    ? "ring-2 ring-offset-1 ring-blue-500 scale-105"
                    : "hover:scale-105 hover:shadow-md"
                }`}
                style={{
                  backgroundColor: CATEGORY_COLORS[key].bg,
                  color: CATEGORY_COLORS[key].text,
                }}
              >
                {label}
                <span className="opacity-60">({categoryCounts[key] || 0})</span>
                {isSelected && (
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
        {selectedCategory && (
          <p
            className="mt-3 text-sm text-gray-600"
            style={{ color: "#4b5563" }}
          >
            Showing {categoryCounts[selectedCategory] || 0} articles in{" "}
            <span className="font-medium">
              {CATEGORY_LABELS[selectedCategory]}
            </span>
          </p>
        )}
      </div>
    </section>
  );
}
