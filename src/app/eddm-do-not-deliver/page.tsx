import { Metadata } from "next";
import Link from "next/link";
import { TLDRBox } from "@/components/content/TLDRBox";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema/article";
import { generateFAQSchema, type FAQItem } from "@/lib/schema/faq";
import { SITE_CONFIG, PETITION_URL } from "@/lib/constants/statistics";
import { DoNotDeliverApp } from "./DoNotDeliverApp";

export const metadata: Metadata = {
  title: "EDDM Do Not Deliver Tool | Register Your Household",
  description:
    "Find your USPS carrier route and register your household's opt-out from EDDM junk mail. Track local progress toward majority opt-out in your area.",
  keywords: [
    "EDDM do not deliver",
    "opt out EDDM",
    "stop junk mail",
    "carrier route opt out",
    "USPS saturation mail",
    "every door direct mail opt out",
    "ECRWSS opt out",
    "junk mail registry",
  ],
  openGraph: {
    title: "EDDM Do Not Deliver Tool | Zero Junk Mail",
    description:
      "Register your household against EDDM junk mail and help your carrier route reach majority opt-out.",
    url: `${SITE_CONFIG.url}/eddm-do-not-deliver`,
    type: "website",
  },
};

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Does this actually stop EDDM mail?",
    answer:
      "No. This is a symbolic opt-out registry. USPS does not currently honor opt-out requests for EDDM mail. Our goal is to demonstrate consumer demand for an official opt-out method. When carrier routes show majority opposition, we'll use that data to advocate for policy change.",
  },
  {
    question: "How is my privacy protected?",
    answer:
      "Your exact address is never stored. We hash your address using SHA-256 encryption before saving it. This means we can detect duplicate opt-outs but cannot reverse the hash to reveal your address. Map locations are also approximated to protect privacy.",
  },
  {
    question: "What happens when 50% of a route opts out?",
    answer:
      "When a carrier route reaches majority opt-out, we document this milestone and use it to advocate for change. This data demonstrates clear consumer opposition to EDDM in specific areas, providing evidence for potential legislative action or USPS policy changes.",
  },
  {
    question: "What is a carrier route?",
    answer:
      "A carrier route is the specific path a mail carrier walks or drives to deliver mail. Each route has a unique code (like C045 for a city route or R012 for a rural route) and typically serves 300-800 households. EDDM mailers target specific routes, which is why we track opt-outs by route.",
  },
  {
    question: "How accurate are the household estimates?",
    answer:
      "Household counts are estimates based on Census data and average route sizes. City routes typically have 400-700 households, while rural routes have 300-500. Actual counts vary. When we verify a route with USPS data, the estimate becomes more accurate.",
  },
  {
    question: "Can I opt out multiple addresses?",
    answer:
      "Yes, you can register each address where you receive mail and want to opt out of EDDM. Each unique address is counted separately toward its carrier route's total.",
  },
];

export default function DoNotDeliverPage() {
  const articleSchema = generateArticleSchema({
    title: "EDDM Do Not Deliver Tool",
    description: metadata.description as string,
    datePublished: "2025-01-18",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/eddm-do-not-deliver`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Take Action", url: `${SITE_CONFIG.url}/take-action` },
    { name: "Do Not Deliver", url: `${SITE_CONFIG.url}/eddm-do-not-deliver` },
  ]);

  const faqSchema = generateFAQSchema(FAQ_ITEMS);

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema, faqSchema]} />

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
          <Link
            href="/take-action"
            className="hover:text-blue-600"
            style={{ color: "#6b7280" }}
          >
            Take Action
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900" style={{ color: "#111827" }}>
            Do Not Deliver
          </span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox
          summary="EDDM junk mail is unstoppable—but together we can prove demand for an opt-out exists. Enter your address below to register your household's opposition."
          keyStatistic={{
            value: "0%",
            label: "opt-out rate",
          }}
        />

        <h1
          className="text-4xl font-bold text-gray-900 mb-4"
          style={{ color: "#111827" }}
        >
          EDDM Do Not Deliver Registry
        </h1>

        <p
          className="text-xl text-gray-700 mb-8"
          style={{ color: "#374151" }}
        >
          USPS refuses to let consumers opt out of Every Door Direct Mail. This
          tool lets you register your household&apos;s opposition and track how
          many of your neighbors feel the same way.
        </p>

        {/* Main App Component */}
        <DoNotDeliverApp />

        {/* How This Works Section */}
        <div className="mt-12 mb-8">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ color: "#111827" }}
          >
            How This Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Enter Your Address",
                description: "We identify your USPS carrier route",
              },
              {
                step: "2",
                title: "See Your Route",
                description: "View how many neighbors have opted out",
              },
              {
                step: "3",
                title: "Opt Out",
                description: "Register your household's opposition",
              },
              {
                step: "4",
                title: "Reach Majority",
                description: "Help your route hit 50%+ to trigger escalation",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center p-4"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <div
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold"
                  style={{ backgroundColor: "#2563eb" }}
                >
                  {item.step}
                </div>
                <h3
                  className="font-semibold text-gray-900 mb-1"
                  style={{ color: "#111827" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-gray-600"
                  style={{ color: "#4b5563" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div
          className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg"
          style={{ backgroundColor: "#fef2f2" }}
        >
          <h3
            className="font-bold text-gray-900 mb-2"
            style={{ color: "#111827" }}
          >
            Why This Matters
          </h3>
          <p className="text-gray-700" style={{ color: "#374151" }}>
            USPS claims there&apos;s no demand for an EDDM opt-out. This registry
            creates documented evidence of consumer opposition. When routes
            demonstrate majority opt-out demand, we&apos;ll use that data to
            advocate for policy change through direct outreach to USPS
            leadership, congressional representatives, and media attention.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ color: "#111827" }}
          >
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>

        {/* Petition CTA */}
        <div
          className="mt-12 bg-gray-900 text-white p-8 rounded-xl"
          style={{ backgroundColor: "#111827" }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Also Sign the National Petition
          </h3>
          <p className="text-gray-300 mb-6" style={{ color: "#d1d5db" }}>
            While we build route-level evidence, add your voice to the Change.org
            petition demanding USPS create an official EDDM opt-out method.
          </p>
          <a
            href={PETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg transition-colors"
            style={{ backgroundColor: "#facc15", color: "#111827" }}
          >
            Sign the Petition →
          </a>
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
                href="/what-is-eddm"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                What is EDDM and ECRWSS?
              </Link>
            </li>
            <li>
              <Link
                href="/why-you-cant-opt-out"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Why You Can&apos;t Opt Out
              </Link>
            </li>
            <li>
              <Link
                href="/reduce-junk-mail"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Reduce Other Types of Junk Mail
              </Link>
            </li>
            <li>
              <Link
                href="/take-action"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Other Ways to Take Action
              </Link>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div
          className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500"
          style={{ borderColor: "#e5e7eb" }}
        >
          <p style={{ color: "#6b7280" }}>
            <strong>Disclaimer:</strong> This is a symbolic opt-out registry.
            USPS does not currently honor opt-out requests for EDDM mail. This
            tool collects opt-out registrations to demonstrate consumer demand
            for an official opt-out method. ZeroJunkMail.org is not affiliated
            with USPS, DMA, Taradel, IMS, DirectMail.com, or their customers.
          </p>
          <p className="mt-2" style={{ color: "#6b7280" }}>
            Every Door Direct Mail<sup>&reg;</sup> and EDDM<sup>&reg;</sup> are
            registered trademarks of the United States Postal Service.
          </p>
        </div>
      </article>
    </>
  );
}
