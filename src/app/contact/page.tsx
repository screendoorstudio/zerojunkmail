import { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema/article";
import { SITE_CONFIG, PETITION_URL } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Contact Zero Junk Mail",
  description:
    "Get in touch with ZeroJunkMail.org. Report issues, share your junk mail stories, or learn how to get involved in the fight against unwanted EDDM mail.",
  keywords: [
    "contact zero junk mail",
    "junk mail complaints",
    "EDDM feedback",
    "report junk mail",
  ],
};

export default function ContactPage() {
  const articleSchema = generateArticleSchema({
    title: "Contact Zero Junk Mail",
    description: metadata.description as string,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/contact`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
  ]);

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema]} />

      <article
        className="max-w-4xl mx-auto px-4 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link
            href="/"
            className="hover:text-blue-600"
            style={{ color: "#6b7280" }}
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900" style={{ color: "#111827" }}>
            Contact
          </span>
        </nav>

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ color: "#111827" }}
        >
          Contact Us
        </h1>

        <p
          className="text-xl text-gray-700 mb-8"
          style={{ color: "#374151" }}
        >
          Have a question, want to share your junk mail story, or interested in
          getting involved? We&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Get Involved */}
          <div
            className="bg-blue-50 p-6 rounded-xl border border-blue-100"
            style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#2563eb" }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h2
                className="text-xl font-bold text-gray-900"
                style={{ color: "#111827" }}
              >
                Take Action
              </h2>
            </div>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              The most impactful thing you can do is sign and share the
              petition. Every signature adds pressure for change.
            </p>
            <a
              href={PETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            >
              Sign the Petition
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
            </a>
          </div>

          {/* Share Your Story */}
          <div
            className="bg-green-50 p-6 rounded-xl border border-green-100"
            style={{ backgroundColor: "#f0fdf4", borderColor: "#dcfce7" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#16a34a" }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2
                className="text-xl font-bold text-gray-900"
                style={{ color: "#111827" }}
              >
                Share Your Story
              </h2>
            </div>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Received particularly egregious junk mail? Had a frustrating
              experience trying to opt out? Share your story on the petition
              page.
            </p>
            <a
              href={PETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
              style={{ color: "#15803d" }}
            >
              Leave a Comment on the Petition
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Other Ways to Help */}
        <div
          className="bg-gray-50 p-8 rounded-xl mb-12"
          style={{ backgroundColor: "#f9fafb" }}
        >
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ color: "#111827" }}
          >
            Other Ways to Help
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "#dbeafe" }}
              >
                <span
                  className="text-blue-600 font-bold text-sm"
                  style={{ color: "#2563eb" }}
                >
                  1
                </span>
              </div>
              <div>
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  style={{ color: "#111827" }}
                >
                  Share the Petition
                </h3>
                <p style={{ color: "#4b5563" }}>
                  Post the petition link on social media, email it to friends
                  and family, or share it in community groups. The more
                  signatures, the more pressure on Congress to act.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "#dbeafe" }}
              >
                <span
                  className="text-blue-600 font-bold text-sm"
                  style={{ color: "#2563eb" }}
                >
                  2
                </span>
              </div>
              <div>
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  style={{ color: "#111827" }}
                >
                  Contact Your Representatives
                </h3>
                <p style={{ color: "#4b5563" }}>
                  Write to your Congressional representatives and ask them to
                  support Do Not Mail legislation. Visit our{" "}
                  <Link
                    href="/take-action"
                    className="text-blue-600 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    Take Action page
                  </Link>{" "}
                  for tips and templates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div
                className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: "#dbeafe" }}
              >
                <span
                  className="text-blue-600 font-bold text-sm"
                  style={{ color: "#2563eb" }}
                >
                  3
                </span>
              </div>
              <div>
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  style={{ color: "#111827" }}
                >
                  Spread the Word
                </h3>
                <p style={{ color: "#4b5563" }}>
                  Most people don&apos;t realize there&apos;s no way to opt out
                  of EDDM mail. Share our educational resources to raise
                  awareness about this issue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Website Info */}
        <div
          className="bg-gray-100 p-6 rounded-lg"
          style={{ backgroundColor: "#f3f4f6" }}
        >
          <h3
            className="text-lg font-semibold text-gray-900 mb-4"
            style={{ color: "#111827" }}
          >
            About This Website
          </h3>
          <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
            ZeroJunkMail.org is an advocacy and educational resource created by{" "}
            <a
              href="https://screendoorstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
              style={{ color: "#2563eb" }}
            >
              Screendoor Studio Inc.
            </a>{" "}
            We compile publicly available information about junk mail, EDDM, and
            consumer rights to help Americans understand why they receive
            unwanted mail and what can be done about it.
          </p>
          <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
            This website is not affiliated with the USPS, DMA, or any direct
            mail companies.
          </p>
        </div>

        {/* Related Links */}
        <div
          className="mt-12 bg-gray-100 p-6 rounded-lg"
          style={{ backgroundColor: "#f3f4f6" }}
        >
          <h3
            className="text-lg font-semibold text-gray-900 mb-4"
            style={{ color: "#111827" }}
          >
            Learn More
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                About Zero Junk Mail →
              </Link>
            </li>
            <li>
              <Link
                href="/take-action"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                How to Help →
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Frequently Asked Questions →
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
