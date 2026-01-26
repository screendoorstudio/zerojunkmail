import { Metadata } from "next";
import { Suspense } from "react";
import StickyTableOfContents from "@/components/content/StickyTableOfContents";
import TabbedContent from "@/components/content/TabbedContent";
import ExpandableSection from "@/components/content/ExpandableSection";
import { TLDRBox } from "@/components/content/TLDRBox";
import { StatCard } from "@/components/content/StatCard";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import {
  tableOfContents,
  billSections,
  keyStats,
  legislatorFaqs,
  talkingPointsTabs,
  counterarguments,
  regulatoryComparisons,
  keyInnovations,
  constitutionalBasis,
} from "@/data/legislative-toolkit";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { generateFAQSchema } from "@/lib/schema/faq";

export const metadata: Metadata = {
  title: "Legislative Toolkit: EDDM Consumer Choice Act of 2026 | Zero Junk Mail",
  description:
    "Complete legislative toolkit for the EDDM Consumer Choice Act of 2026. Model bill text, section-by-section analysis, talking points, FAQ, and counterargument responses for legislators and staff.",
  keywords: [
    "EDDM Consumer Choice Act",
    "Do Not Mail legislation",
    "junk mail law",
    "model bill",
    "EDDM opt-out",
    "legislative toolkit",
    "postal reform",
  ],
};

// Helper component for talking points tab content
function TalkingPointsTabContent({
  tab,
}: {
  tab: (typeof talkingPointsTabs)[0];
}) {
  return (
    <div className="space-y-6">
      <div
        className="p-4 rounded-lg"
        style={{ backgroundColor: "#eff6ff", color: "#1e40af" }}
      >
        <p className="font-semibold">Frame: {tab.frame}</p>
      </div>

      <div>
        <h4 className="font-semibold mb-3" style={{ color: "#111827" }}>
          Primary Messages
        </h4>
        <ul className="space-y-3">
          {tab.primaryMessages.map((message, idx) => (
            <li
              key={idx}
              className="pl-4 border-l-4 border-blue-500"
              style={{ color: "#374151" }}
            >
              {message}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3" style={{ color: "#111827" }}>
          Specific Talking Points
        </h4>
        <ul className="list-disc list-inside space-y-2">
          {tab.specificPoints.map((point, idx) => (
            <li key={idx} style={{ color: "#374151" }}>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-3" style={{ color: "#111827" }}>
          Addressing Concerns
        </h4>
        <div className="space-y-2">
          {tab.concerns.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded border border-gray-200"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <p className="font-medium" style={{ color: "#111827" }}>
                {item.concern}
              </p>
              <p className="mt-1 text-sm" style={{ color: "#374151" }}>
                → {item.response}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LegislativePage() {
  // Generate schema
  const articleSchema = generateArticleSchema({
    title: "EDDM Consumer Choice Act of 2026: Legislative Toolkit",
    description:
      "Complete legislative toolkit including model bill text, section-by-section analysis, talking points, and counterargument responses.",
    url: "https://zerojunkmail.org/legislators",
    datePublished: "2025-01-25",
    dateModified: "2025-01-25",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://zerojunkmail.org" },
    { name: "Legislative Toolkit", url: "https://zerojunkmail.org/legislators" },
  ]);

  const faqSchema = generateFAQSchema(
    legislatorFaqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  // Prepare FAQ data for FAQAccordion component
  const faqItems = legislatorFaqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  // Prepare tabs for TabbedContent
  const tabs = talkingPointsTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    content: <TalkingPointsTabContent tab={tab} />,
  }));

  return (
    <>
      <SchemaMarkup schema={articleSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Sticky Table of Contents (Mobile = dropdown, Desktop = sidebar) */}
      <Suspense fallback={null}>
        <StickyTableOfContents sections={tableOfContents} />
      </Suspense>

      {/* Main Content - offset for desktop sidebar */}
      <article
        className="lg:ml-60 max-w-4xl mx-auto px-4 py-8"
        style={{ backgroundColor: "#ffffff", color: "#111827" }}
      >
        {/* Hero/Title Section */}
        <header className="mb-12 text-center">
          <p
            className="text-sm font-semibold uppercase tracking-wide mb-2"
            style={{ color: "#2563eb" }}
          >
            Legislative Toolkit
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#111827" }}
          >
            EDDM Consumer Choice Act of 2026
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Model federal legislation to establish an opt-in system for saturation
            advertising mail delivery
          </p>
          <p className="mt-4 text-sm" style={{ color: "#9ca3af" }}>
            Prepared by ZeroJunkMail.org | January 2025
          </p>
        </header>

        {/* Section 1: Executive Summary */}
        <section id="executive-summary" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Executive Summary
          </h2>

          <TLDRBox
            summary="Americans can opt out of telemarketing calls, unsubscribe from emails, block spam texts, and refuse junk faxes. But they cannot opt out of advertising mail delivered by their own government. The EDDM Consumer Choice Act closes this regulatory gap by requiring consent before saturation mail is delivered."
          />

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <StatCard value="100M" label="Trees cut annually" />
            <StatCard value="$320M" label="Taxpayer disposal cost" />
            <StatCard value="81%" label="Netherlands opt-out rate" />
          </div>

          <div
            className="mt-8 p-4 rounded-lg border border-gray-200"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <h3 className="font-semibold mb-3" style={{ color: "#111827" }}>
              Quick Downloads
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Model Bill Text", file: "01_EDDM_Consumer_Choice_Act_Model_Bill.pdf" },
                { name: "Executive Summary", file: "02_Executive_Summary.pdf" },
                { name: "One-Page Fact Sheet", file: "04_One_Pager_Fact_Sheet.pdf" },
                { name: "Section Analysis", file: "03_Section_by_Section_Analysis.pdf" },
              ].map((doc) => (
                <a
                  key={doc.file}
                  href={`/downloads/${doc.file}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors hover:bg-blue-700"
                  style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
                  download
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  {doc.name}
                </a>
              ))}
            </div>
            <p className="mt-3 text-sm" style={{ color: "#6b7280" }}>
              PDF documents available for printing and distribution
            </p>
          </div>
        </section>

        {/* Section 2: The Problem */}
        <section id="the-problem" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            The Problem: The Regulatory Gap
          </h2>

          <p className="mb-6" style={{ color: "#374151" }}>
            Every major marketing channel has federal consumer opt-out protection—except
            postal advertising mail:
          </p>

          <div className="overflow-x-auto">
            <table
              className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"
              style={{ backgroundColor: "#ffffff" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6" }}>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Channel
                  </th>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Opt-Out Mechanism
                  </th>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Law
                  </th>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Private Action
                  </th>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Penalty
                  </th>
                </tr>
              </thead>
              <tbody>
                {regulatoryComparisons.map((row, idx) => (
                  <tr
                    key={row.channel}
                    className={idx === regulatoryComparisons.length - 1 ? "" : ""}
                    style={{
                      backgroundColor:
                        row.channel === "Postal Mail (EDDM)" ? "#fef2f2" : "#ffffff",
                    }}
                  >
                    <td
                      className="px-4 py-3 font-medium"
                      style={{
                        color:
                          row.channel === "Postal Mail (EDDM)" ? "#b91c1c" : "#111827",
                      }}
                    >
                      {row.channel}
                    </td>
                    <td
                      className="px-4 py-3"
                      style={{
                        color:
                          row.optOutMechanism === "NONE" ? "#b91c1c" : "#374151",
                        fontWeight: row.optOutMechanism === "NONE" ? 600 : 400,
                      }}
                    >
                      {row.optOutMechanism}
                    </td>
                    <td className="px-4 py-3" style={{ color: "#374151" }}>
                      {row.governingLaw}
                    </td>
                    <td className="px-4 py-3">
                      {row.privateAction ? (
                        <span style={{ color: "#059669" }}>Yes</span>
                      ) : (
                        <span style={{ color: "#b91c1c" }}>No</span>
                      )}
                    </td>
                    <td
                      className="px-4 py-3"
                      style={{
                        color: row.penalty === "$0" ? "#b91c1c" : "#374151",
                        fontWeight: row.penalty === "$0" ? 600 : 400,
                      }}
                    >
                      {row.penalty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="mt-6 p-4 rounded-lg"
            style={{ backgroundColor: "#fef2f2", color: "#991b1b" }}
          >
            <p className="font-semibold">
              Postal mail is the ONLY major marketing channel with no federal
              consumer opt-out protection.
            </p>
          </div>
        </section>

        {/* Section 3: The Solution */}
        <section id="the-solution" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            The Solution: Opt-In, Not Opt-Out
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#fef2f2" }}
            >
              <h3 className="font-semibold mb-2" style={{ color: "#b91c1c" }}>
                Current System
              </h3>
              <p style={{ color: "#7f1d1d" }}>
                You receive advertising unless you opt out—
                <strong>but you cannot opt out</strong>
              </p>
            </div>
            <div
              className="p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f0fdf4" }}
            >
              <h3 className="font-semibold mb-2" style={{ color: "#15803d" }}>
                Proposed System
              </h3>
              <p style={{ color: "#14532d" }}>
                You receive advertising <strong>only if you opt in</strong>
              </p>
            </div>
          </div>

          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "#eff6ff", color: "#1e40af" }}
          >
            <h3 className="font-semibold mb-3">The Netherlands JA-Sticker Model</h3>
            <p className="mb-4">
              The Netherlands has successfully implemented an opt-in system for
              advertising mail. Households must display a &ldquo;JA&rdquo; (Yes) sticker to
              receive advertising. The result:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>81%</strong> of households chose NOT to receive advertising
              </li>
              <li>Dutch Supreme Court upheld the system in June 2021</li>
              <li>62 of 342 municipalities have adopted it (~40% of population)</li>
              <li>No documented wave of business bankruptcies</li>
              <li>Consumer satisfaction: 92% among those who opted out</li>
            </ul>
          </div>
        </section>

        {/* Section 4: Bill Summary */}
        <section id="bill-summary" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Model Bill Summary
          </h2>

          <p className="mb-6" style={{ color: "#374151" }}>
            The <strong>EDDM Consumer Choice Act of 2026</strong> establishes an
            opt-in system for saturation advertising mail, modeled on the proven
            Do Not Call Registry and Netherlands JA-sticker systems.
          </p>

          <h3 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>
            Key Innovations
          </h3>

          <div className="space-y-4 mb-8">
            {keyInnovations.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-lg border border-gray-200"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
                >
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: "#111827" }}>
                    {item.innovation}
                  </h4>
                  <p className="text-sm mt-1" style={{ color: "#374151" }}>
                    {item.description}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>
                    Precedent: {item.precedent}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>
            Bill Structure: 15 Sections
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {billSections.map((section) => (
              <div
                key={section.number}
                className="p-3 rounded border border-gray-200 text-sm"
                style={{ backgroundColor: "#f9fafb" }}
              >
                <span className="font-semibold" style={{ color: "#2563eb" }}>
                  §{section.number}
                </span>{" "}
                <span style={{ color: "#374151" }}>{section.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Section-by-Section Analysis */}
        <section id="section-analysis" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Section-by-Section Analysis
          </h2>

          <p className="mb-6" style={{ color: "#374151" }}>
            Click each section to expand detailed analysis, key provisions, and
            legal basis.
          </p>

          <div className="space-y-3">
            {billSections.map((section) => (
              <ExpandableSection
                key={section.number}
                title={`Section ${section.number}: ${section.title}`}
                badge={section.number === 6 ? "Key Section" : undefined}
              >
                <div className="space-y-4">
                  <p style={{ color: "#374151" }}>{section.summary}</p>

                  <div>
                    <h4
                      className="font-semibold text-sm mb-2"
                      style={{ color: "#111827" }}
                    >
                      Key Provisions:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {section.keyProvisions.map((provision, idx) => (
                        <li key={idx} style={{ color: "#374151" }}>
                          {provision}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {section.legalBasis && (
                    <div
                      className="p-3 rounded text-sm"
                      style={{ backgroundColor: "#fefce8", color: "#713f12" }}
                    >
                      <strong>Legal Basis:</strong> {section.legalBasis}
                    </div>
                  )}
                </div>
              </ExpandableSection>
            ))}
          </div>
        </section>

        {/* Section 6: Key Statistics */}
        <section id="key-statistics" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Key Statistics
          </h2>

          {/* Environmental */}
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>
            Environmental Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {keyStats
              .filter((s) => s.category === "environmental")
              .map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-gray-200"
                  style={{ backgroundColor: "#f0fdf4" }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#15803d" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "#166534" }}>
                    {stat.label}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#6b7280" }}>
                    Source: {stat.source}
                  </p>
                </div>
              ))}
          </div>

          {/* Consumer */}
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>
            Consumer Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {keyStats
              .filter((s) => s.category === "consumer")
              .map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-gray-200"
                  style={{ backgroundColor: "#eff6ff" }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#1d4ed8" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "#1e40af" }}>
                    {stat.label}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#6b7280" }}>
                    Source: {stat.source}
                  </p>
                </div>
              ))}
          </div>

          {/* Economic & Fraud */}
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>
            Economic &amp; Fraud Statistics
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {keyStats
              .filter((s) => s.category === "economic" || s.category === "fraud")
              .map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-gray-200"
                  style={{
                    backgroundColor:
                      stat.category === "fraud" ? "#fef2f2" : "#f9fafb",
                  }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{
                      color: stat.category === "fraud" ? "#b91c1c" : "#111827",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm"
                    style={{
                      color: stat.category === "fraud" ? "#991b1b" : "#374151",
                    }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#6b7280" }}>
                    Source: {stat.source}
                  </p>
                </div>
              ))}
          </div>

          {/* International */}
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>
            International Comparison (Netherlands)
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {keyStats
              .filter((s) => s.category === "international")
              .map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-gray-200"
                  style={{ backgroundColor: "#fefce8" }}
                >
                  <p
                    className="text-2xl font-bold"
                    style={{ color: "#a16207" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "#854d0e" }}>
                    {stat.label}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#6b7280" }}>
                    Source: {stat.source}
                  </p>
                </div>
              ))}
          </div>
        </section>

        {/* Section 7: Constitutional Basis */}
        <section id="constitutional-basis" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Constitutional Basis
          </h2>

          <p className="mb-6" style={{ color: "#374151" }}>
            This bill is designed to withstand First Amendment challenges based on
            established Supreme Court precedent.
          </p>

          {/* Rowan */}
          <div
            className="p-6 rounded-lg border border-gray-200 mb-6"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: "#111827" }}>
              {constitutionalBasis.rowanCase.name}
            </h3>
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
              {constitutionalBasis.rowanCase.citation}
            </p>
            <blockquote
              className="border-l-4 border-blue-500 pl-4 italic"
              style={{ color: "#374151" }}
            >
              &ldquo;We therefore categorically reject the argument that a vendor has
              a right under the Constitution or otherwise to send unwanted
              material into the home of another.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm" style={{ color: "#374151" }}>
              <strong>Significance:</strong>{" "}
              {constitutionalBasis.rowanCase.significance}
            </p>
          </div>

          {/* Central Hudson */}
          <div
            className="p-6 rounded-lg border border-gray-200 mb-6"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: "#111827" }}>
              {constitutionalBasis.centralHudson.name}
            </h3>
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
              {constitutionalBasis.centralHudson.citation}
            </p>
            <p className="mb-3" style={{ color: "#374151" }}>
              The four-part test for commercial speech restrictions:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              {constitutionalBasis.centralHudson.test.map((item, idx) => (
                <li key={idx} style={{ color: "#374151" }}>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-sm" style={{ color: "#374151" }}>
              <strong>Significance:</strong>{" "}
              {constitutionalBasis.centralHudson.significance}
            </p>
          </div>

          {/* Mainstream Marketing */}
          <div
            className="p-6 rounded-lg border border-gray-200"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: "#111827" }}>
              {constitutionalBasis.mainstreamMarketing.name}
            </h3>
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
              {constitutionalBasis.mainstreamMarketing.citation}
            </p>
            <blockquote
              className="border-l-4 border-blue-500 pl-4 italic"
              style={{ color: "#374151" }}
            >
              &ldquo;The national do-not-call registry is a reasonable fit with the
              government&apos;s interest in protecting the privacy of
              individuals.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm" style={{ color: "#374151" }}>
              <strong>Significance:</strong>{" "}
              {constitutionalBasis.mainstreamMarketing.significance}
            </p>
          </div>
        </section>

        {/* Section 8: Legislator FAQ */}
        <section id="legislator-faq" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Frequently Asked Questions for Legislators
          </h2>

          <FAQAccordion items={faqItems} />
        </section>

        {/* Section 9: Talking Points */}
        <section id="talking-points" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Talking Points by Audience
          </h2>

          <p className="mb-6" style={{ color: "#374151" }}>
            Select the tab that matches your audience for tailored messaging:
          </p>

          <TabbedContent tabs={tabs} defaultTab="conservative" />
        </section>

        {/* Section 10: Industry Opposition & Responses */}
        <section id="counterarguments" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Industry Opposition &amp; Responses
          </h2>

          <p className="mb-6" style={{ color: "#374151" }}>
            The direct mail industry has developed sophisticated arguments against
            Do Not Mail legislation. Here are the key arguments and how to
            respond:
          </p>

          {/* Quick Reference Table */}
          <div className="overflow-x-auto mb-8">
            <table
              className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden"
              style={{ backgroundColor: "#ffffff" }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f3f4f6" }}>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Industry Argument
                  </th>
                  <th
                    className="px-4 py-3 text-left font-semibold"
                    style={{ color: "#111827" }}
                  >
                    One-Line Response
                  </th>
                </tr>
              </thead>
              <tbody>
                {counterarguments.map((item, idx) => (
                  <tr
                    key={item.id}
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f9fafb",
                    }}
                  >
                    <td className="px-4 py-3" style={{ color: "#374151" }}>
                      {item.argument}
                    </td>
                    <td
                      className="px-4 py-3 font-medium"
                      style={{ color: "#1d4ed8" }}
                    >
                      {item.oneLineResponse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Detailed Rebuttals */}
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#111827" }}>
            Detailed Rebuttals
          </h3>

          <div className="space-y-3">
            {counterarguments.map((item) => (
              <ExpandableSection key={item.id} title={item.argument}>
                <div className="space-y-4">
                  <div>
                    <h4
                      className="font-semibold text-sm mb-2"
                      style={{ color: "#111827" }}
                    >
                      Industry Position:
                    </h4>
                    <p
                      className="text-sm italic"
                      style={{ color: "#6b7280" }}
                    >
                      &ldquo;{item.industryPosition}&rdquo;
                    </p>
                  </div>

                  <div>
                    <h4
                      className="font-semibold text-sm mb-2"
                      style={{ color: "#111827" }}
                    >
                      Response:
                    </h4>
                    <p className="text-sm" style={{ color: "#374151" }}>
                      {item.response}
                    </p>
                  </div>

                  <div
                    className="p-3 rounded text-sm"
                    style={{ backgroundColor: "#eff6ff", color: "#1d4ed8" }}
                  >
                    <strong>Sound bite:</strong> &ldquo;{item.oneLineResponse}&rdquo;
                  </div>
                </div>
              </ExpandableSection>
            ))}
          </div>
        </section>

        {/* Section 11: Take Action */}
        <section id="take-action" className="mb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#111827" }}>
            Take Action
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              className="p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h3 className="font-semibold mb-3" style={{ color: "#111827" }}>
                Sign the Petition
              </h3>
              <p className="text-sm mb-4" style={{ color: "#374151" }}>
                Join thousands of Americans demanding consumer choice for
                advertising mail.
              </p>
              <PetitionCTA variant="compact" />
            </div>

            <div
              className="p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h3 className="font-semibold mb-3" style={{ color: "#111827" }}>
                Share This Toolkit
              </h3>
              <p className="text-sm mb-4" style={{ color: "#374151" }}>
                Copy the link to share with colleagues, constituents, or staff:
              </p>
              <div
                className="flex items-center gap-2 p-3 rounded border border-gray-300 text-sm"
                style={{ backgroundColor: "#ffffff" }}
              >
                <code style={{ color: "#374151" }}>
                  zerojunkmail.org/legislators
                </code>
              </div>
            </div>
          </div>

          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: "#eff6ff" }}
          >
            <h3 className="font-semibold mb-3" style={{ color: "#1e40af" }}>
              Download All Materials
            </h3>
            <div className="grid md:grid-cols-4 gap-3">
              {[
                { name: "Model Bill", file: "01_EDDM_Consumer_Choice_Act_Model_Bill.pdf" },
                { name: "Executive Summary", file: "02_Executive_Summary.pdf" },
                { name: "Section Analysis", file: "03_Section_by_Section_Analysis.pdf" },
                { name: "One-Pager", file: "04_One_Pager_Fact_Sheet.pdf" },
                { name: "Talking Points", file: "05_Talking_Points.pdf" },
                { name: "FAQ", file: "06_FAQ_for_Legislators.pdf" },
                { name: "Counterarguments", file: "07_Industry_Counterarguments.pdf" },
                { name: "Comparison Tables", file: "08_Comparison_Tables.pdf" },
              ].map((doc) => (
                <a
                  key={doc.file}
                  href={`/downloads/${doc.file}`}
                  className="flex items-center gap-2 px-3 py-2 rounded text-sm font-medium border border-blue-300 hover:bg-blue-100 transition-colors"
                  style={{ backgroundColor: "#ffffff", color: "#1d4ed8" }}
                  download
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {doc.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="pt-8 border-t border-gray-200 text-center text-sm"
          style={{ color: "#6b7280" }}
        >
          <p>
            Prepared by{" "}
            <a
              href="https://zerojunkmail.org"
              className="underline"
              style={{ color: "#2563eb" }}
            >
              ZeroJunkMail.org
            </a>{" "}
            | January 2025
          </p>
          <p className="mt-2">
            This toolkit is provided for educational purposes. ZeroJunkMail.org is
            not a law firm and this does not constitute legal advice.
          </p>
        </footer>
      </article>
    </>
  );
}
