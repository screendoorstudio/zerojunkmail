import { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ZeroJunkMail.org. Learn how we collect and use information, including our use of Google Analytics.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const articleSchema = generateArticleSchema({
    title: "Privacy Policy",
    description: metadata.description as string,
    datePublished: "2025-01-11",
    dateModified: "2025-01-11",
    url: `${SITE_CONFIG.url}/privacy`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Privacy Policy", url: `${SITE_CONFIG.url}/privacy` },
  ]);

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema]} />

      <article
        className="max-w-4xl mx-auto px-4 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          <Link
            href="/"
            className="hover:text-blue-600"
            style={{ color: "#6b7280" }}
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900" style={{ color: "#111827" }}>
            Privacy Policy
          </span>
        </nav>

        <h1
          className="text-4xl font-bold text-gray-900 mb-2"
          style={{ color: "#111827" }}
        >
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          Last updated: January 11, 2025
        </p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Introduction
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              ZeroJunkMail.org (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by
              Screendoor Studio Inc. This Privacy Policy explains how we collect, use,
              and protect information when you visit our website.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              We are committed to protecting your privacy. This website collects
              minimal information and does not require any personal data to use.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              <strong>We do not collect personal information directly.</strong> This
              website has no contact forms, user accounts, newsletters, or other
              mechanisms that collect your name, email address, or other personal
              details.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              However, we do use Google Analytics to understand how visitors use our
              site. Google Analytics collects:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website (how you found us)</li>
              <li>General geographic location (country/region, not specific address)</li>
              <li>Device type, browser, and operating system</li>
              <li>Interactions with site elements (such as button clicks)</li>
            </ul>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              This information is collected anonymously and aggregated. We cannot
              identify individual visitors from this data.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              How We Use Information
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              We use the anonymous analytics data to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>Understand which pages are most useful to visitors</li>
              <li>Improve website content and user experience</li>
              <li>Measure the effectiveness of our advocacy efforts</li>
              <li>Identify and fix technical issues</li>
            </ul>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              We do not sell, rent, or share any information with third parties for
              marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Cookies
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Google Analytics uses cookies to collect information about website usage.
              These cookies do not contain personal information and are used solely for
              analytics purposes.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              <strong>How to opt out:</strong> You can opt out of Google Analytics by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>
                Installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                  style={{ color: "#2563eb" }}
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>Adjusting your browser settings to block cookies</li>
              <li>Using browser privacy modes or extensions that block tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Third-Party Links
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              This website contains links to external websites, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>Change.org (petition platform)</li>
              <li>Government websites (USPS, Federal Register, etc.)</li>
              <li>News articles and research sources</li>
              <li>Opt-out services (OptOutPrescreen.com, DMAchoice.org, etc.)</li>
            </ul>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              We are not responsible for the privacy practices of these external
              websites. We encourage you to review their privacy policies before
              providing any personal information.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              When you sign the petition on Change.org, your information is collected
              and used according to{" "}
              <a
                href="https://www.change.org/policies/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Change.org&apos;s Privacy Policy
              </a>
              , not ours.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Your Rights
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Because we do not collect personal information directly, there is no
              personal data for us to access, correct, or delete.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              <strong>California Residents (CCPA):</strong> We do not sell personal
              information. The anonymous analytics data we collect through Google
              Analytics does not constitute &quot;personal information&quot; under the
              California Consumer Privacy Act.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              <strong>European Visitors (GDPR):</strong> If you are located in the
              European Union, please be aware that Google Analytics data may be
              transferred to servers in the United States. You may opt out of Google
              Analytics using the methods described above.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              This website is not directed at children under the age of 13. We do not
              knowingly collect any information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with an updated &quot;Last updated&quot; date. We encourage
              you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:privacy@screendoorstudio.com"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                privacy@screendoorstudio.com
              </a>
            </p>
            <p className="text-gray-700" style={{ color: "#374151" }}>
              <strong>Website Operator:</strong> Screendoor Studio Inc.
            </p>
          </section>
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
            Related
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Terms and Conditions &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Contact Us &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                About This Site &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
