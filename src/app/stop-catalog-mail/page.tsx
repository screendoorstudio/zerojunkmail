import { Metadata } from "next";
import Link from "next/link";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateFAQSchema, FAQItem } from "@/lib/schema/faq";
import { generateHowToSchema } from "@/lib/schema/howto";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "How to Stop Catalogs in the Mail | CatalogChoice & DMAchoice Guide 2025",
  description:
    "Stop unwanted catalogs with CatalogChoice.org (free), DMAchoice.org, and direct contact methods. Step-by-step guide to reduce catalog mail by 70-90%.",
  keywords: [
    "stop catalogs",
    "how to stop catalogs",
    "unsubscribe from catalogs",
    "catalog choice",
    "catalogchoice",
    "stop catalog mail",
    "cancel catalog mailings",
    "remove from catalog list",
    "opt out of catalogs",
    "stop unwanted catalogs",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "How do I stop all catalogs at once?",
    answer:
      "Unfortunately, there's no single service that stops all catalogs immediately. Register with DMAchoice.org (stops many at once for $4), then use CatalogChoice.org to target specific remaining catalogs. Most people see significant reduction within 2-3 months.",
  },
  {
    question: "Is CatalogChoice really free?",
    answer:
      "Yes, CatalogChoice.org is completely free for basic use. They're a nonprofit organization (part of The Story of Stuff Project). They offer a premium MailStop Shield service for data broker opt-outs, but the catalog opt-out is free.",
  },
  {
    question: "Why do I still get catalogs after opting out?",
    answer:
      "Catalogs may continue arriving for several reasons: some companies aren't in the database, your name may be on multiple lists under different spellings, or the company hasn't processed your request yet. Keep submitting opt-out requests as new catalogs arrive.",
  },
  {
    question: "What's the Abacus database and should I opt out?",
    answer:
      "Abacus (owned by Epsilon) is a data cooperative where catalog companies share customer information. Opting out of Abacus can significantly reduce catalogs from companies you've never ordered from. Email abacusoptout@epsilon.com to opt out.",
  },
  {
    question: "Can I stop catalogs from companies I've ordered from?",
    answer:
      "Yes, but you'll need to contact them directly. Your purchase history creates a direct relationship, which DMAchoice and CatalogChoice may not cover. Call the customer service number in the catalog or email their support.",
  },
  {
    question: "How long does it take for catalogs to stop?",
    answer:
      "Most catalog opt-outs take 4-8 weeks to process. Catalog companies print and mail in batches, so catalogs already in the pipeline may still arrive. Be patient and keep opting out of new catalogs as they appear.",
  },
];

const howToSteps = [
  {
    name: "Register with DMAchoice",
    text: "Sign up at DMAchoice.org ($4 for 10 years) and select the 'Catalogs' category. This single registration notifies thousands of catalog companies to remove you from their lists.",
    url: `${SITE_CONFIG.url}/stop-catalog-mail#step-1`,
  },
  {
    name: "Use CatalogChoice for Specific Catalogs",
    text: "Create a free account at CatalogChoice.org and search for catalogs you want to stop. They have nearly 10,000 catalogs in their database and will submit opt-out requests on your behalf.",
    url: `${SITE_CONFIG.url}/stop-catalog-mail#step-2`,
  },
  {
    name: "Opt Out of Abacus Database",
    text: "Email abacusoptout@epsilon.com with your name and address to opt out of the Abacus catalog data cooperative, reducing catalogs from companies you've never ordered from.",
    url: `${SITE_CONFIG.url}/stop-catalog-mail#step-3`,
  },
  {
    name: "Contact Catalog Companies Directly",
    text: "For persistent catalogs, call the customer service number on the catalog and request removal. When ordering online, uncheck 'Send me catalogs' and add 'No catalog' to the order notes.",
    url: `${SITE_CONFIG.url}/stop-catalog-mail#step-4`,
  },
];

export default function StopCatalogMailPage() {
  const articleSchema = generateArticleSchema({
    title: "How to Stop Catalogs in the Mail",
    description: metadata.description as string,
    datePublished: "2025-01-01",
    dateModified: "2025-01-11",
    url: `${SITE_CONFIG.url}/stop-catalog-mail`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Stop Junk Mail", url: `${SITE_CONFIG.url}/reduce-junk-mail` },
    { name: "Catalogs", url: `${SITE_CONFIG.url}/stop-catalog-mail` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const howToSchema = generateHowToSchema({
    name: "How to Stop Catalogs in the Mail",
    description: "Step-by-step guide to opt out of unwanted catalog mailings using free and paid services.",
    totalTime: "PT20M",
    estimatedCost: { currency: "USD", value: "0-4" },
    steps: howToSteps,
  });

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema, faqSchema, howToSchema]} />

      <article
        className="max-w-4xl mx-auto px-4 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <Link
            href="/"
            className="hover:text-blue-600"
            style={{ color: "#6b7280" }}
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href="/reduce-junk-mail"
            className="hover:text-blue-600"
            style={{ color: "#6b7280" }}
          >
            Stop Junk Mail
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900" style={{ color: "#111827" }}>
            Catalogs
          </span>
        </nav>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          Last updated: January 2025
        </p>

        {/* TL;DR Box */}
        <TLDRBox
          summary="To stop catalogs: Register with DMAchoice.org ($4, stops many at once), use CatalogChoice.org (free, 10,000+ catalogs), and opt out of the Abacus database (email abacusoptout@epsilon.com). For stubborn catalogs, call the company directly. Expect 70-90% reduction within 2-3 months. Important: This won't stop EDDM 'Postal Customer' mail."
          keyStatistic={{
            value: "70-90%",
            label: "reduction possible",
          }}
        />

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ color: "#111827" }}
        >
          How to Stop Catalogs in the Mail
        </h1>

        <div className="prose max-w-none">
          <p style={{ color: "#374151" }}>
            Unwanted catalogs waste paper, clutter your mailbox, and often advertise products you&apos;ll never buy. The average American household receives dozens of catalogs each year. Here&apos;s how to stop them.
          </p>

          {/* Quick Answer Box */}
          <div
            className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6"
            style={{ backgroundColor: "#eff6ff", borderColor: "#3b82f6" }}
          >
            <p className="font-semibold" style={{ color: "#1e40af" }}>Quick Answer:</p>
            <p style={{ color: "#1e3a8a" }}>
              Use <strong><a href="https://www.catalogchoice.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">CatalogChoice.org</a></strong> (free) to stop specific catalogs. Register with <strong><a href="https://www.dmachoice.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">DMAchoice.org</a></strong> ($4) for broader coverage. Email <strong>abacusoptout@epsilon.com</strong> to stop catalogs from companies you&apos;ve never ordered from.
            </p>
          </div>

          {/* Quick Comparison Table */}
          <h2 style={{ color: "#111827" }}>Catalog Opt-Out Services Compared</h2>
        </div>

        <div className="overflow-x-auto my-6">
          <table
            className="min-w-full border border-gray-200"
            style={{ borderColor: "#e5e7eb" }}
          >
            <thead className="bg-gray-100" style={{ backgroundColor: "#f3f4f6" }}>
              <tr>
                <th
                  className="px-4 py-3 text-left text-gray-900 font-semibold border-b"
                  style={{ color: "#111827" }}
                >
                  Service
                </th>
                <th
                  className="px-4 py-3 text-left text-gray-900 font-semibold border-b"
                  style={{ color: "#111827" }}
                >
                  Cost
                </th>
                <th
                  className="px-4 py-3 text-left text-gray-900 font-semibold border-b"
                  style={{ color: "#111827" }}
                >
                  Coverage
                </th>
                <th
                  className="px-4 py-3 text-left text-gray-900 font-semibold border-b"
                  style={{ color: "#111827" }}
                >
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  <a href="https://www.catalogchoice.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold" style={{ color: "#2563eb" }}>CatalogChoice</a>
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  10,000+ catalogs
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Stopping specific catalogs
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  <a href="https://www.dmachoice.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold" style={{ color: "#2563eb" }}>DMAchoice</a>
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  $4 (10 years)
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  DMA members
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Broad reduction at once
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Abacus Opt-Out
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Shared catalog lists
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Catalogs you never ordered from
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3" style={{ color: "#374151" }}>
                  Direct Contact
                </td>
                <td className="px-4 py-3" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3" style={{ color: "#374151" }}>
                  Any catalog
                </td>
                <td className="px-4 py-3" style={{ color: "#374151" }}>
                  Companies you&apos;ve ordered from
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose max-w-none">
          {/* STEP 1 */}
          <div
            id="step-1"
            className="not-prose my-10 p-6 bg-blue-50 rounded-xl border border-blue-100"
            style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: "#2563eb" }}
              >
                1
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ color: "#111827" }}
                >
                  Register with DMAchoice
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  <strong>dmachoice.org</strong> — $4 for 10 years of coverage
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  Start with DMAchoice because a single registration notifies thousands of catalog companies at once. Select the &quot;Catalogs&quot; category when registering.
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    How to Register:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      Visit{" "}
                      <a
                        href="https://www.dmachoice.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        DMAchoice.org
                      </a>
                    </li>
                    <li>Create an account</li>
                    <li>Pay the $4 registration fee</li>
                    <li>Select &quot;Catalogs&quot; category (and others if desired)</li>
                    <li>Submit your registration</li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Time to take effect:</strong> 2-3 months
                  <br />
                  <strong>By mail:</strong> Send $6 to DMAchoice, P.O. Box 900, Cos Cob, CT 06807
                </p>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div
            id="step-2"
            className="not-prose my-10 p-6 bg-green-50 rounded-xl border border-green-100"
            style={{ backgroundColor: "#f0fdf4", borderColor: "#dcfce7" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: "#16a34a" }}
              >
                2
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ color: "#111827" }}
                >
                  Use CatalogChoice for Specific Catalogs
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  <strong>catalogchoice.org</strong> — Free, nonprofit service
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  CatalogChoice lets you target specific catalogs. They&apos;ve helped over <strong>2 million people</strong> stop unwanted catalogs and saved half a million trees in the process. They have nearly <strong>10,000 catalogs</strong> in their database.
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    How to Use:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      Visit{" "}
                      <a
                        href="https://www.catalogchoice.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        CatalogChoice.org
                      </a>
                    </li>
                    <li>Create a free account</li>
                    <li>Search for catalogs you want to stop</li>
                    <li>Submit opt-out requests for each catalog</li>
                    <li>Track your requests in your dashboard</li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Cost:</strong> Free
                  <br />
                  <strong>Bonus:</strong> Free iPhone app available
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div
            id="step-3"
            className="not-prose my-10 p-6 bg-purple-50 rounded-xl border border-purple-100"
            style={{ backgroundColor: "#faf5ff", borderColor: "#f3e8ff" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: "#9333ea" }}
              >
                3
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ color: "#111827" }}
                >
                  Opt Out of Abacus Database
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  Stop catalog data sharing at the source
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  Abacus (owned by Epsilon) is a <strong>data cooperative</strong> where catalog companies share customer information. If you ordered from one catalog, dozens of others may get your info. Opting out stops this sharing.
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    How to Opt Out:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:abacusoptout@epsilon.com"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        abacusoptout@epsilon.com
                      </a>
                    </li>
                    <li>Include your full name and complete mailing address</li>
                    <li>Request removal from the Abacus catalog database</li>
                  </ul>
                  <p className="mt-4 text-gray-700" style={{ color: "#374151" }}>
                    <strong>Or mail to:</strong><br />
                    Abacus Consumer Opt-Out<br />
                    P.O. Box 1478<br />
                    Broomfield, CO 80038
                  </p>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Time to take effect:</strong> 4-6 weeks
                  <br />
                  <strong>Cost:</strong> Free
                </p>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div
            id="step-4"
            className="not-prose my-10 p-6 bg-orange-50 rounded-xl border border-orange-100"
            style={{ backgroundColor: "#fff7ed", borderColor: "#ffedd5" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: "#ea580c" }}
              >
                4
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ color: "#111827" }}
                >
                  Contact Catalog Companies Directly
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  For persistent catalogs or companies you&apos;ve ordered from
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  Companies you&apos;ve ordered from have a direct relationship with you, which may not be covered by DMAchoice or CatalogChoice. Contact them directly for fastest results.
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    How to Contact:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li><strong>Phone:</strong> Call the customer service number on the catalog</li>
                    <li><strong>Website:</strong> Use the &quot;Contact Us&quot; or &quot;Mailing Preferences&quot; page</li>
                    <li><strong>Email:</strong> Many catalogs list an email for catalog removal</li>
                    <li><strong>When ordering:</strong> Uncheck &quot;Send me catalogs&quot; and add &quot;NO CATALOG&quot; to order notes</li>
                  </ul>
                </div>
                <div
                  className="bg-amber-50 p-3 rounded text-sm"
                  style={{ backgroundColor: "#fffbeb" }}
                >
                  <strong style={{ color: "#92400e" }}>Tip:</strong>{" "}
                  <span style={{ color: "#78350f" }}>
                    Also ask them not to share or sell your information to other companies.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div
            className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg"
            style={{ backgroundColor: "#fef2f2" }}
          >
            <h3
              className="text-lg font-bold text-red-800 mb-2"
              style={{ color: "#991b1b" }}
            >
              This Won&apos;t Stop EDDM Mail
            </h3>
            <p style={{ color: "#7f1d1d" }}>
              These services stop <strong>addressed catalogs</strong>—mail with your name on it. They do <strong>not</strong> stop EDDM &quot;Postal Customer&quot; mailers that look like catalogs. EDDM mail is delivered to every address regardless of who lives there, and there is currently no way to opt out.
            </p>
            <Link
              href="/what-is-eddm"
              className="inline-block mt-3 text-red-700 hover:text-red-800 font-semibold"
              style={{ color: "#b91c1c" }}
            >
              Learn why EDDM can&apos;t be stopped →
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className="mt-12 border-t border-gray-200 pt-12"
          style={{ borderColor: "#e5e7eb" }}
        >
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ color: "#111827" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <h3
                  className="text-lg font-semibold text-gray-900 mb-2"
                  style={{ color: "#111827" }}
                >
                  {faq.question}
                </h3>
                <p className="text-gray-600" style={{ color: "#4b5563" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
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
            Related Guides
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/reduce-junk-mail"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Complete Guide: How to Stop Junk Mail →
              </Link>
            </li>
            <li>
              <Link
                href="/opt-out-credit-offers"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Stop Credit Card Offers in the Mail →
              </Link>
            </li>
            <li>
              <Link
                href="/stop-mail-deceased"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Stop Mail for a Deceased Person →
              </Link>
            </li>
            <li>
              <Link
                href="/what-is-eddm"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                What is EDDM Mail? →
              </Link>
            </li>
          </ul>
        </div>

        <PetitionCTA className="mt-12" />
      </article>
    </>
  );
}
