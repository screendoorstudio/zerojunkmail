import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";
import newsArchiveData from "@/data/news-archive.json";
import { ArchivedArticle } from "@/lib/types/news";
import { ArchiveFilters } from "@/components/content/ArchiveFilters";
import { ArchiveArticleList } from "@/components/content/ArchiveArticleList";

export const metadata: Metadata = {
  title: "Junk Mail News Archive (1970-2025) | Zero Junk Mail",
  description:
    "Complete historical archive of junk mail, EDDM, and USPS direct mail news spanning 55 years. Major events, legislation, environmental studies, and industry milestones.",
  keywords: [
    "junk mail history",
    "EDDM history",
    "USPS direct mail history",
    "Do Not Mail registry history",
    "postal service advertising history",
  ],
  openGraph: {
    title: "Junk Mail News Archive (1970-2025) | Zero Junk Mail",
    description:
      "Complete historical archive spanning 55 years of junk mail news, legislation, and industry milestones.",
    url: `${SITE_CONFIG.url}/news/archive`,
  },
};

export default function NewsArchivePage() {
  const articles = newsArchiveData.articles as ArchivedArticle[];

  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "News", url: `${SITE_CONFIG.url}/news` },
    { name: "Archive", url: `${SITE_CONFIG.url}/news/archive` },
  ];

  // Count articles by category
  const categoryCounts: Record<string, number> = {};
  articles.forEach((a) => {
    categoryCounts[a.category] = (categoryCounts[a.category] || 0) + 1;
  });

  return (
    <>
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />

      <article
        className="min-h-screen bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Breadcrumb */}
        <nav
          className="bg-gray-50 border-b border-gray-200"
          style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: "#9ca3af" }}>/</li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  style={{ color: "#6b7280" }}
                >
                  News
                </Link>
              </li>
              <li style={{ color: "#9ca3af" }}>/</li>
              <li
                className="text-gray-900 font-medium"
                style={{ color: "#111827" }}
              >
                Archive
              </li>
            </ol>
          </div>
        </nav>

        {/* Header */}
        <header
          className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12"
          style={{
            background: "linear-gradient(to bottom right, #1f2937, #111827)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-10 h-10 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "#facc15" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <h1
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#ffffff" }}
              >
                Junk Mail News Archive
              </h1>
            </div>
            <p
              className="text-lg text-gray-300 max-w-3xl"
              style={{ color: "#d1d5db" }}
            >
              A comprehensive historical record of junk mail, EDDM, and USPS
              direct mail news spanning 55 years. From the 1970 Supreme Court
              decision to today&apos;s EDDM controversy.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div>
                <p
                  className="text-3xl font-bold text-yellow-400"
                  style={{ color: "#facc15" }}
                >
                  {articles.length}
                </p>
                <p className="text-sm text-gray-400" style={{ color: "#9ca3af" }}>
                  Articles
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold text-yellow-400"
                  style={{ color: "#facc15" }}
                >
                  55
                </p>
                <p className="text-sm text-gray-400" style={{ color: "#9ca3af" }}>
                  Years Covered
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold text-yellow-400"
                  style={{ color: "#facc15" }}
                >
                  {Object.keys(categoryCounts).length}
                </p>
                <p className="text-sm text-gray-400" style={{ color: "#9ca3af" }}>
                  Categories
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Category Filters - Client Component */}
        <Suspense
          fallback={
            <div className="bg-gray-50 py-6" style={{ backgroundColor: "#f9fafb" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-pulse flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-gray-200 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <ArchiveFilters categoryCounts={categoryCounts} />
        </Suspense>

        {/* Article List with Navigation - Client Component */}
        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="animate-pulse space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-32 bg-gray-100 rounded-lg"
                  />
                ))}
              </div>
            </div>
          }
        >
          <ArchiveArticleList articles={articles} />
        </Suspense>

        {/* Back to News */}
        <section
          className="bg-gray-50 py-8"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Latest News
            </Link>
            <p
              className="mt-4 text-sm text-gray-500"
              style={{ color: "#6b7280" }}
            >
              Last updated: {newsArchiveData.metadata.lastUpdated}
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
