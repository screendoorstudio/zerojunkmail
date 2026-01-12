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
  title: "How to Stop Credit Card Offers in the Mail | OptOutPrescreen Guide 2025",
  description:
    "Stop pre-approved credit card and insurance offers with OptOutPrescreen.com. Free service from the credit bureaus. Choose 5-year or permanent opt-out. Results in 5 days.",
  keywords: [
    "stop credit card offers",
    "opt out prescreen",
    "optoutprescreen",
    "stop prescreened offers",
    "pre-approved credit offers",
    "stop insurance offers mail",
    "credit card mail opt out",
    "stop credit bureau mailings",
    "firm offer of credit",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "Is OptOutPrescreen.com legitimate?",
    answer:
      "Yes, OptOutPrescreen.com is the official, legally authorized website created by Equifax, Experian, Innovis, and TransUnion. It's the only service recognized by the credit bureaus for opting out of prescreened offers.",
  },
  {
    question: "What's the difference between 5-year and permanent opt-out?",
    answer:
      "The 5-year opt-out can be done entirely online and lasts 5 years before you need to renew. The permanent opt-out requires you to print, sign, and mail a form, but it never expires.",
  },
  {
    question: "Will opting out affect my credit score?",
    answer:
      "No. Opting out of prescreened offers has no effect on your credit score. It only stops companies from receiving your information for unsolicited offers. You can still apply for credit normally.",
  },
  {
    question: "Can I opt back in after opting out?",
    answer:
      "Yes, you can opt back in at any time through OptOutPrescreen.com. The process is the same as opting out, but you select the option to receive offers again.",
  },
  {
    question: "What information do I need to opt out?",
    answer:
      "You'll need your Social Security Number, date of birth, current address, and previous addresses from the past 5 years. This information is required to verify your identity and match your credit file.",
  },
  {
    question: "Why do I still get credit card offers after opting out?",
    answer:
      "Some offers come from companies you already have a relationship with, which are not covered by OptOutPrescreen. Also, if your name is on a purchased mailing list, those offers may continue. Register with DMAchoice.org for additional coverage.",
  },
];

const howToSteps = [
  {
    name: "Visit OptOutPrescreen.com",
    text: "Go to OptOutPrescreen.com, the official website operated by the consumer credit reporting industry. This is the only legitimate service for opting out of prescreened credit offers.",
    url: `${SITE_CONFIG.url}/opt-out-credit-offers#step-1`,
  },
  {
    name: "Choose Your Opt-Out Period",
    text: "Select either the 5-year opt-out (completed entirely online) or the permanent opt-out (requires mailing a signed form). Both options are free.",
    url: `${SITE_CONFIG.url}/opt-out-credit-offers#step-2`,
  },
  {
    name: "Enter Your Information",
    text: "Provide your Social Security Number, date of birth, name, and current address. This information is required to match your credit file and process your request.",
    url: `${SITE_CONFIG.url}/opt-out-credit-offers#step-3`,
  },
  {
    name: "Submit and Confirm",
    text: "Review your information and submit. For permanent opt-out, print the confirmation form, sign it, and mail it to the address provided. Processing takes 5 days.",
    url: `${SITE_CONFIG.url}/opt-out-credit-offers#step-4`,
  },
];

export default function OptOutCreditOffersPage() {
  const articleSchema = generateArticleSchema({
    title: "How to Stop Credit Card Offers in the Mail",
    description: metadata.description as string,
    datePublished: "2025-01-01",
    dateModified: "2025-01-11",
    url: `${SITE_CONFIG.url}/opt-out-credit-offers`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Stop Junk Mail", url: `${SITE_CONFIG.url}/reduce-junk-mail` },
    { name: "Credit Offers", url: `${SITE_CONFIG.url}/opt-out-credit-offers` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const howToSchema = generateHowToSchema({
    name: "How to Stop Credit Card Offers in the Mail",
    description: "Step-by-step guide to opt out of pre-approved credit card and insurance offers using OptOutPrescreen.com.",
    totalTime: "PT10M",
    estimatedCost: { currency: "USD", value: "0" },
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
            Credit Offers
          </span>
        </nav>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          Last updated: January 2025
        </p>

        {/* TL;DR Box */}
        <TLDRBox
          summary="To stop credit card and insurance offers, visit OptOutPrescreen.com (the official service from the credit bureaus) or call 1-888-567-8688. Choose a 5-year opt-out (online only) or permanent opt-out (requires mailed form). This free service stops Equifax, Experian, TransUnion, and Innovis from selling your data to marketers. Results appear within 5 days."
          keyStatistic={{
            value: "95%+",
            label: "effectiveness",
          }}
        />

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ color: "#111827" }}
        >
          How to Stop Credit Card Offers in the Mail
        </h1>

        <div className="prose max-w-none">
          <p style={{ color: "#374151" }}>
            Those &quot;pre-approved&quot; credit card and insurance offers flooding your mailbox aren&apos;t just annoying—they&apos;re a privacy and security risk. Every unsolicited offer is a potential identity theft vector if intercepted. The good news? You can stop almost all of them with one free service.
          </p>

          {/* Quick Answer Box */}
          <div
            className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6"
            style={{ backgroundColor: "#eff6ff", borderColor: "#3b82f6" }}
          >
            <p className="font-semibold" style={{ color: "#1e40af" }}>Quick Answer:</p>
            <p style={{ color: "#1e3a8a" }}>
              Visit <strong><a href="https://www.optoutprescreen.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">OptOutPrescreen.com</a></strong> or call <strong>1-888-567-8688</strong>. Choose 5-year (online) or permanent (mail form) opt-out. Free. Takes 5 days to process.
            </p>
          </div>

          {/* What is OptOutPrescreen */}
          <h2 style={{ color: "#111827" }}>What is OptOutPrescreen?</h2>
          <p style={{ color: "#374151" }}>
            OptOutPrescreen.com is the <strong>official, legally authorized</strong> website created by the four major credit bureaus (Equifax, Experian, Innovis, and TransUnion) under the Fair Credit Reporting Act (FCRA). When you opt out, these companies stop providing your credit file information to marketers who send &quot;firm offers of credit or insurance.&quot;
          </p>

          {/* 5-Year vs Permanent Comparison */}
          <h2 style={{ color: "#111827" }}>5-Year vs. Permanent Opt-Out</h2>
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
                  Feature
                </th>
                <th
                  className="px-4 py-3 text-left text-gray-900 font-semibold border-b"
                  style={{ color: "#111827" }}
                >
                  5-Year Opt-Out
                </th>
                <th
                  className="px-4 py-3 text-left text-gray-900 font-semibold border-b"
                  style={{ color: "#111827" }}
                >
                  Permanent Opt-Out
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b font-medium" style={{ color: "#374151" }}>
                  Process
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  100% online
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Online + mail signed form
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b font-medium" style={{ color: "#374151" }}>
                  Duration
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  5 years
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Forever (until you opt back in)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b font-medium" style={{ color: "#374151" }}>
                  Time to process
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  5 days
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  5 days (after form received)
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b font-medium" style={{ color: "#374151" }}>
                  Cost
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free (+ postage)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium" style={{ color: "#374151" }}>
                  Recommendation
                </td>
                <td className="px-4 py-3" style={{ color: "#374151" }}>
                  Good for testing
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800" style={{ backgroundColor: "#dcfce7", color: "#166534" }}>Best choice</span>
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
                  Visit OptOutPrescreen.com
                </h2>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  Go to{" "}
                  <a
                    href="https://www.optoutprescreen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-semibold"
                    style={{ color: "#2563eb" }}
                  >
                    OptOutPrescreen.com
                  </a>
                  . This is the <strong>only legitimate website</strong> for opting out of prescreened credit offers. Beware of imitation sites.
                </p>
                <div
                  className="bg-amber-50 p-3 rounded text-sm"
                  style={{ backgroundColor: "#fffbeb" }}
                >
                  <strong style={{ color: "#92400e" }}>Alternative:</strong>{" "}
                  <span style={{ color: "#78350f" }}>
                    Call <strong>1-888-567-8688</strong> (1-888-5-OPT-OUT) to opt out by phone.
                  </span>
                </div>
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
                  Choose Your Opt-Out Period
                </h2>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  Select one of the following options:
                </p>
                <div
                  className="bg-white p-4 rounded-lg"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <ul
                    className="list-disc pl-5 space-y-2 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      <strong>5-Year Opt-Out:</strong> Completed entirely online. You&apos;ll need to renew after 5 years.
                    </li>
                    <li>
                      <strong>Permanent Opt-Out:</strong> Start online, then print, sign, and mail the form. Never expires.
                    </li>
                  </ul>
                </div>
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
                  Enter Your Information
                </h2>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  You&apos;ll need to provide the following information to verify your identity:
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>Social Security Number</li>
                    <li>Date of birth</li>
                    <li>Current name and address</li>
                    <li>Previous addresses (last 5 years)</li>
                  </ul>
                </div>
                <div
                  className="bg-green-50 p-3 rounded text-sm"
                  style={{ backgroundColor: "#f0fdf4" }}
                >
                  <strong style={{ color: "#166534" }}>Is it safe?</strong>{" "}
                  <span style={{ color: "#14532d" }}>
                    Yes. OptOutPrescreen.com is operated by the credit bureaus themselves and uses secure encryption. Your SSN is required to match your credit file.
                  </span>
                </div>
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
                  Submit and Confirm
                </h2>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  Review your information and submit your request.
                </p>
                <div
                  className="bg-white p-4 rounded-lg"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    For Permanent Opt-Out:
                  </h4>
                  <ol
                    className="list-decimal pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>Print the confirmation form</li>
                    <li>Sign and date the form</li>
                    <li>Mail to the address provided on the form</li>
                    <li>Processing begins when they receive your signed form</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* What OptOutPrescreen Doesn't Stop */}
          <h2 style={{ color: "#111827" }}>What OptOutPrescreen Doesn&apos;t Stop</h2>
          <p style={{ color: "#374151" }}>
            Even after opting out, you may still receive some credit-related mail:
          </p>
          <ul style={{ color: "#374151" }}>
            <li><strong>Offers from companies you&apos;ve done business with</strong> — Banks and credit cards you already have</li>
            <li><strong>Non-prescreened offers</strong> — Offers based on purchased mailing lists, not your credit file</li>
            <li><strong>Local business offers</strong> — Sent via EDDM to every address in your area</li>
          </ul>
          <p style={{ color: "#374151" }}>
            To reduce these, register with{" "}
            <Link href="/reduce-junk-mail" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>
              DMAchoice.org and other opt-out services
            </Link>.
          </p>

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
              OptOutPrescreen only stops <strong>prescreened credit offers</strong>—mail that uses your credit bureau data. It does <strong>not</strong> stop EDDM &quot;Postal Customer&quot; mail, which is delivered to every address regardless of who lives there.
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
                href="/stop-catalog-mail"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                How to Stop Catalog Mail →
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
