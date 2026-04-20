import Link from "next/link";
import {
  sortedLatestNews,
  formatArticleDate,
  CATEGORY_STYLE,
  type LatestNewsItem,
} from "@/data/latest-news";

interface NewsFeedProps {
  maxArticles?: number;
  showViewAll?: boolean;
  compact?: boolean;
  heading?: string;
  subheading?: string;
}

export function NewsFeed({
  maxArticles = 6,
  showViewAll = true,
  compact = false,
  heading = "Latest USPS & Direct Mail News",
  subheading = "Stay informed about postal service news, junk mail issues, and consumer advocacy updates.",
}: NewsFeedProps) {
  const articles = sortedLatestNews(maxArticles);

  return (
    <section className="py-16 bg-white" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
            style={{ color: "#111827" }}
          >
            {heading}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ color: "#4b5563" }}
          >
            {subheading}
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            compact
              ? "grid-cols-1"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {articles.map((article) => (
            <NewsCard key={article.url} article={article} />
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
      </div>
    </section>
  );
}

export function NewsCard({ article }: { article: LatestNewsItem }) {
  const cat = CATEGORY_STYLE[article.category];
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all group"
      style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: cat.bg, color: cat.fg }}
        >
          {cat.label}
        </span>
        <span
          className="text-xs text-gray-500"
          style={{ color: "#6b7280" }}
        >
          {formatArticleDate(article.date)}
        </span>
      </div>

      <h3
        className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug"
        style={{ color: "#111827" }}
      >
        {article.title}
      </h3>

      <p
        className="text-sm text-gray-600 mb-4 flex-1"
        style={{ color: "#4b5563" }}
      >
        {article.description}
      </p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100" style={{ borderColor: "#f3f4f6" }}>
        <span
          className="text-xs font-medium text-gray-700"
          style={{ color: "#374151" }}
        >
          {article.source}
        </span>
        <span
          className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
          style={{ color: "#2563eb" }}
        >
          Read
          <svg
            className="w-3.5 h-3.5"
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
    </a>
  );
}
