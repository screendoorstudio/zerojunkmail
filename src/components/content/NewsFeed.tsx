"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FALLBACK_ARTICLES,
  formatNewsDate,
  NEWS_CONFIG,
} from "@/lib/constants/news";
import type { NewsArticle } from "@/app/api/news/route";

interface NewsFeedProps {
  maxArticles?: number;
  showViewAll?: boolean;
  compact?: boolean;
}

interface DisplayArticle {
  title: string;
  description: string | null;
  url: string;
  source: string;
  publishedAt?: string;
}

export function NewsFeed({
  maxArticles = NEWS_CONFIG.homepageCount,
  showViewAll = true,
  compact = false,
}: NewsFeedProps) {
  const [articles, setArticles] = useState<DisplayArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          const mappedArticles: DisplayArticle[] = data.articles
            .slice(0, maxArticles)
            .map((article: NewsArticle) => ({
              title: article.title,
              description: article.description,
              url: article.url,
              source: article.source.name,
              publishedAt: article.publishedAt,
            }));
          setArticles(mappedArticles);
        } else {
          // Use fallback articles if API returns empty
          setArticles(
            FALLBACK_ARTICLES.slice(0, maxArticles).map((a) => ({
              title: a.title,
              description: a.description,
              url: a.url,
              source: a.source,
            }))
          );
        }
      } catch {
        // Use fallback articles on error
        setArticles(
          FALLBACK_ARTICLES.slice(0, maxArticles).map((a) => ({
            title: a.title,
            description: a.description,
            url: a.url,
            source: a.source,
          }))
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [maxArticles]);

  if (loading) {
    return (
      <section
        className="py-16 bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{ color: "#111827" }}
          >
            Latest USPS & Direct Mail News
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ color: "#4b5563" }}
          >
            Stay informed about postal service news, junk mail issues, and
            consumer advocacy updates.
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            compact
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
              style={{ backgroundColor: "#f9fafb", borderColor: "#f3f4f6" }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#dbeafe" }}
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#2563eb" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs text-gray-500 mb-1"
                    style={{ color: "#6b7280" }}
                  >
                    {article.source}
                    {article.publishedAt && (
                      <span> &bull; {formatNewsDate(article.publishedAt)}</span>
                    )}
                  </p>
                  <h3
                    className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2"
                    style={{ color: "#111827" }}
                  >
                    {article.title}
                  </h3>
                </div>
              </div>

              {article.description && !compact && (
                <p
                  className="text-gray-600 text-sm line-clamp-2 mb-3"
                  style={{ color: "#4b5563" }}
                >
                  {article.description}
                </p>
              )}

              <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                <span style={{ color: "#2563eb" }}>Read article</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#2563eb" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-10">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            >
              View All News
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}

        {error && (
          <p
            className="text-center text-sm text-gray-400 mt-4"
            style={{ color: "#9ca3af" }}
          >
            Showing curated articles. Live news feed temporarily unavailable.
          </p>
        )}
      </div>
    </section>
  );
}
