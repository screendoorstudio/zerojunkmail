"use client";

import { useSearchParams } from "next/navigation";
import {
  ArchivedArticle,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
} from "@/lib/types/news";

interface ArchiveArticleListProps {
  articles: ArchivedArticle[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getDecadeArticles(
  articles: ArchivedArticle[],
  decade: string,
  categoryFilter?: string | null
): ArchivedArticle[] {
  return articles
    .filter((a) => {
      const matchesDecade = a.decade === decade;
      const matchesCategory = !categoryFilter || a.category === categoryFilter;
      return matchesDecade && matchesCategory;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function ArchiveArticleList({ articles }: ArchiveArticleListProps) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const decades = ["2020s", "2010s", "2000s", "1990s", "1980s", "1970s"];

  // Calculate filtered counts
  const filteredArticles = selectedCategory
    ? articles.filter((a) => a.category === selectedCategory)
    : articles;

  const decadeCounts: Record<string, number> = {};
  decades.forEach((d) => {
    decadeCounts[d] = getDecadeArticles(articles, d, selectedCategory).length;
  });

  return (
    <>
      {/* Navigation - Updated counts based on filter */}
      <div
        className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm"
        style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            <span
              className="text-sm font-medium text-gray-500 whitespace-nowrap"
              style={{ color: "#6b7280" }}
            >
              Jump to:
            </span>
            {decades.map((decade) => {
              const count = decadeCounts[decade];
              if (count === 0 && selectedCategory) return null;
              return (
                <a
                  key={decade}
                  href={`#${decade}`}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors whitespace-nowrap"
                  style={{ backgroundColor: "#f3f4f6", color: "#374151" }}
                >
                  {decade}{" "}
                  <span className="text-gray-400" style={{ color: "#9ca3af" }}>
                    ({count})
                  </span>
                </a>
              );
            })}
            {selectedCategory && (
              <span
                className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded"
                style={{ backgroundColor: "#dbeafe", color: "#1d4ed8" }}
              >
                {filteredArticles.length} total
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {decades.map((decade) => {
          const decadeArticles = getDecadeArticles(
            articles,
            decade,
            selectedCategory
          );
          if (decadeArticles.length === 0) return null;

          return (
            <section key={decade} id={decade} className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-4 mb-6">
                <h2
                  className="text-2xl font-bold text-gray-900"
                  style={{ color: "#111827" }}
                >
                  {decade}
                </h2>
                <div
                  className="flex-1 h-px bg-gray-200"
                  style={{ backgroundColor: "#e5e7eb" }}
                />
                <span
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  {decadeArticles.length} article
                  {decadeArticles.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="space-y-4">
                {decadeArticles.map((article) => (
                  <a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-300 transition-all group"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: "#e5e7eb",
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-3">
                      <div className="flex-shrink-0 flex items-center gap-2">
                        <span
                          className="text-sm font-medium text-gray-500"
                          style={{ color: "#6b7280" }}
                        >
                          {formatDate(article.date)}
                        </span>
                        {article.significance === "high" && (
                          <span
                            className="inline-block w-2 h-2 rounded-full bg-yellow-400"
                            style={{ backgroundColor: "#facc15" }}
                            title="High significance"
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-1">
                          <span
                            className="inline-block px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0"
                            style={{
                              backgroundColor:
                                CATEGORY_COLORS[article.category].bg,
                              color: CATEGORY_COLORS[article.category].text,
                            }}
                          >
                            {CATEGORY_LABELS[article.category]}
                          </span>
                          <span
                            className="text-xs text-gray-400"
                            style={{ color: "#9ca3af" }}
                          >
                            {article.source}
                          </span>
                        </div>

                        <h3
                          className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1"
                          style={{ color: "#111827" }}
                        >
                          {article.title}
                        </h3>

                        <p
                          className="text-sm text-gray-600 line-clamp-2"
                          style={{ color: "#4b5563" }}
                        >
                          {article.description}
                        </p>

                        {article.keyQuote && (
                          <p
                            className="mt-2 text-sm italic text-gray-500 border-l-2 border-gray-300 pl-3"
                            style={{
                              color: "#6b7280",
                              borderColor: "#d1d5db",
                            }}
                          >
                            &ldquo;{article.keyQuote}&rdquo;
                          </p>
                        )}
                      </div>

                      <div className="flex-shrink-0">
                        <span
                          className="inline-flex items-center text-blue-600 text-sm"
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
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500" style={{ color: "#6b7280" }}>
              No articles found for this category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
