import { Metadata } from "next";
import Link from "next/link";
import { TLDRBox } from "@/components/content/TLDRBox";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { NewsFeed } from "@/components/content/NewsFeed";
import { generateFAQSchema } from "@/lib/schema/faq";
import { generateNewsPageSchema } from "@/lib/schema/news";
import { generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG, STATISTICS } from "@/lib/constants/statistics";
import { FALLBACK_ARTICLES } from "@/lib/constants/news";

export const metadata: Metadata = {
  title: "Junk Mail & EDDM News | Zero Junk Mail",
  description:
    "Latest news about junk mail, EDDM, and USPS direct mail programs. Environmental impact, consumer complaints, industry trends, and legislative updates.",
  keywords: [
    "junk mail news",
    "EDDM news",
    "USPS news",
    "direct mail news",
    "postal service news",
  ],
  openGraph: {
    title: "Junk Mail & EDDM News | Zero Junk Mail",
    description:
      "Latest news about junk mail, EDDM, and USPS direct mail programs.",
    url: `${SITE_CONFIG.url}/news`,
  },
};

const faqs = [
  {
    question: "Why is junk mail in the news?",
    answer:
      "Junk mail remains newsworthy due to its significant environmental impact (100 million trees destroyed annually), the USPS financial crisis ($109 billion in losses since 2007), ongoing consumer frustration with unwanted mail, and the billions lost to elder fraud perpetrated through mail. Legislative efforts to reform direct mail continue to generate coverage.",
  },
  {
    question: "What are the biggest junk mail controversies?",
    answer:
      "The major controversies include: EDDM (Every Door Direct Mail) having no opt-out mechanism, the environmental destruction from paper production, the USPS's reliance on advertising mail revenue despite declining volumes, political mail flooding mailboxes (2.3 billion pieces in 2024), and the role of junk mail in elder fraud ($5 billion in losses in 2024).",
  },
  {
    question: "Is EDDM being discontinued?",
    answer:
      "No, EDDM is not being discontinued. Despite criticism, EDDM remains a profitable program for the USPS. The program was made permanent by Federal Register 2012-25059. Consumer advocates continue to push for an opt-out mechanism, but no legislation requiring one has passed.",
  },
  {
    question: "Where can I find more information about junk mail issues?",
    answer:
      "This site (ZeroJunkMail.org) provides comprehensive information about EDDM, opt-out options for other types of junk mail, environmental impact data, and legal background. Additional resources include the Sierra Club, Eco-Cycle, VoLo Foundation, and the FTC Consumer Advice pages.",
  },
];

export default function NewsPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "News", url: `${SITE_CONFIG.url}/news` },
  ];

  return (
    <>
      <SchemaMarkup schema={generateNewsPageSchema()} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbs)} />
      <SchemaMarkup schema={generateFAQSchema(faqs)} />

      <article
        className="min-h-screen bg-white"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Breadcrumb */}
        <nav
          className="bg-gray-50 border-b border-gray-200"
          style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
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
              <li
                className="text-gray-900 font-medium"
                style={{ color: "#111827" }}
              >
                News
              </li>
            </ol>
          </div>
        </nav>

        {/* Header */}
        <header
          className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16"
          style={{
            background: "linear-gradient(to bottom right, #2563eb, #1e40af)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#ffffff" }}
            >
              Junk Mail & EDDM News
            </h1>
            <p
              className="text-xl text-blue-100 max-w-2xl mx-auto"
              style={{ color: "#dbeafe" }}
            >
              Stay informed about postal service news, environmental impact,
              consumer advocacy, and policy updates related to unsolicited mail.
            </p>
          </div>
        </header>

        {/* TL;DR Box */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <TLDRBox
            summary="The junk mail industry destroys 100 million trees annually while the USPS has lost $109 billion since 2007. Elder fraud via mail costs Americans $5 billion per year. Despite widespread consumer frustration, EDDM mail has no opt-out mechanism."
            keyStatistic={{
              value: STATISTICS.trees.shortValue,
              label: "trees destroyed annually",
            }}
          />
        </div>

        {/* Live News Feed */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-2 text-center"
              style={{ color: "#111827" }}
            >
              Latest News
            </h2>
            <p
              className="text-gray-600 text-center mb-8"
              style={{ color: "#4b5563" }}
            >
              Automatically updated from news sources across the web
            </p>
            <NewsFeed maxArticles={6} showViewAll={false} />
          </div>
        </section>

        {/* Curated Archive Section */}
        <section
          className="py-12 bg-gray-50"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-2 text-center"
              style={{ color: "#111827" }}
            >
              Curated Resources
            </h2>
            <p
              className="text-gray-600 text-center mb-8"
              style={{ color: "#4b5563" }}
            >
              Essential articles and reports about junk mail issues
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FALLBACK_ARTICLES.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all group"
                  style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
                >
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded-full mb-3 ${
                      article.category === "environmental"
                        ? "bg-green-100 text-green-800"
                        : article.category === "usps"
                        ? "bg-blue-100 text-blue-800"
                        : article.category === "fraud"
                        ? "bg-red-100 text-red-800"
                        : article.category === "policy"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {article.category === "environmental"
                      ? "Environmental"
                      : article.category === "usps"
                      ? "USPS Business"
                      : article.category === "fraud"
                      ? "Fraud & Scams"
                      : article.category === "policy"
                      ? "Policy"
                      : "Consumer"}
                  </span>
                  <h3
                    className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2"
                    style={{ color: "#111827" }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm mb-3 line-clamp-2"
                    style={{ color: "#4b5563" }}
                  >
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs text-gray-500"
                      style={{ color: "#6b7280" }}
                    >
                      {article.source}
                    </span>
                    <span
                      className="text-blue-600 text-sm font-medium flex items-center gap-1"
                      style={{ color: "#2563eb" }}
                    >
                      Read
                      <svg
                        className="w-3 h-3"
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
              ))}
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-12" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              style={{ color: "#111827" }}
            >
              Key Statistics from News Coverage
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div
                className="bg-gray-50 p-6 rounded-lg"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <p
                  className="text-3xl font-bold text-blue-600 mb-2"
                  style={{ color: "#2563eb" }}
                >
                  {STATISTICS.trees.shortValue}
                </p>
                <p
                  className="text-gray-700 font-medium"
                  style={{ color: "#374151" }}
                >
                  Trees destroyed annually for junk mail
                </p>
                <p
                  className="text-sm text-gray-500 mt-1"
                  style={{ color: "#6b7280" }}
                >
                  Source: {STATISTICS.trees.source}
                </p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <p
                  className="text-3xl font-bold text-blue-600 mb-2"
                  style={{ color: "#2563eb" }}
                >
                  $109B
                </p>
                <p
                  className="text-gray-700 font-medium"
                  style={{ color: "#374151" }}
                >
                  USPS net losses (FY2007-2024)
                </p>
                <p
                  className="text-sm text-gray-500 mt-1"
                  style={{ color: "#6b7280" }}
                >
                  Source: U.S. GAO
                </p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <p
                  className="text-3xl font-bold text-blue-600 mb-2"
                  style={{ color: "#2563eb" }}
                >
                  {STATISTICS.elderFraud.shortValue}
                </p>
                <p
                  className="text-gray-700 font-medium"
                  style={{ color: "#374151" }}
                >
                  Elder fraud losses annually
                </p>
                <p
                  className="text-sm text-gray-500 mt-1"
                  style={{ color: "#6b7280" }}
                >
                  Source: {STATISTICS.elderFraud.source}
                </p>
              </div>

              <div
                className="bg-gray-50 p-6 rounded-lg"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <p
                  className="text-3xl font-bold text-blue-600 mb-2"
                  style={{ color: "#2563eb" }}
                >
                  2.3B
                </p>
                <p
                  className="text-gray-700 font-medium"
                  style={{ color: "#374151" }}
                >
                  Political mail pieces in 2024
                </p>
                <p
                  className="text-sm text-gray-500 mt-1"
                  style={{ color: "#6b7280" }}
                >
                  Source: Sen. Ernst Office
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          className="py-12 bg-gray-50"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
              style={{ color: "#111827" }}
            >
              Frequently Asked Questions
            </h2>

            <FAQAccordion items={faqs} />
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6 text-center"
              style={{ color: "#111827" }}
            >
              Learn More
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/environmental-impact"
                className="bg-green-50 p-4 rounded-lg border border-green-200 hover:border-green-400 transition-colors text-center"
                style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
              >
                <p
                  className="font-semibold text-green-800"
                  style={{ color: "#166534" }}
                >
                  Environmental Impact
                </p>
                <p
                  className="text-sm text-green-600 mt-1"
                  style={{ color: "#16a34a" }}
                >
                  Trees, CO2, water usage
                </p>
              </Link>

              <Link
                href="/what-is-eddm"
                className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:border-blue-400 transition-colors text-center"
                style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe" }}
              >
                <p
                  className="font-semibold text-blue-800"
                  style={{ color: "#1e40af" }}
                >
                  What is EDDM?
                </p>
                <p
                  className="text-sm text-blue-600 mt-1"
                  style={{ color: "#2563eb" }}
                >
                  Every Door Direct Mail explained
                </p>
              </Link>

              <Link
                href="/reduce-junk-mail"
                className="bg-purple-50 p-4 rounded-lg border border-purple-200 hover:border-purple-400 transition-colors text-center"
                style={{ backgroundColor: "#faf5ff", borderColor: "#e9d5ff" }}
              >
                <p
                  className="font-semibold text-purple-800"
                  style={{ color: "#6b21a8" }}
                >
                  Stop Junk Mail Guide
                </p>
                <p
                  className="text-sm text-purple-600 mt-1"
                  style={{ color: "#9333ea" }}
                >
                  Opt-out resources
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Petition CTA */}
        <PetitionCTA variant="inline" />
      </article>
    </>
  );
}
