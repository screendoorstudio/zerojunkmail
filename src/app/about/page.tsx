import { Metadata } from "next";
import Link from "next/link";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG, PETITION_URL } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "About Zero Junk Mail",
  description:
    "ZeroJunkMail.org is an advocacy resource dedicated to giving Americans the right to opt out of EDDM junk mail delivered by the U.S. Postal Service.",
  keywords: [
    "about zero junk mail",
    "stop junk mail advocacy",
    "EDDM opt out petition",
    "junk mail consumer rights",
    "postal advertising reform",
  ],
};

export default function AboutPage() {
  const articleSchema = generateArticleSchema({
    title: "About Zero Junk Mail",
    description: metadata.description as string,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/about`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "About", url: `${SITE_CONFIG.url}/about` },
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
            About
          </span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox
          summary="ZeroJunkMail.org advocates for consumer choice in postal mail delivery. We have no control over EDDM junk mail from the U.S. Post Office—sign the petition to demand an opt-out method for EDDM and ECRWSS mail."
        />

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ color: "#111827" }}
        >
          Sign The Petition & End EDDM Junk Mail Forever
        </h1>

        <div className="prose max-w-none">
          <p
            className="text-xl text-gray-700 mb-8"
            style={{ color: "#374151" }}
          >
            We have no control over our delivery preference of this specific
            type of junk mail from the U.S. Post Office. We are forced to handle
            this rubbish placed onto our property by a government agency.
          </p>

          <div
            className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg"
            style={{ backgroundColor: "#eff6ff" }}
          >
            <p
              className="text-lg font-semibold text-gray-900 mb-2"
              style={{ color: "#111827" }}
            >
              Our Mission
            </p>
            <p style={{ color: "#374151" }}>
              Sign the petition to demand the Postal Service offer an{" "}
              <strong>OPT-OUT method</strong> so you can stop EDDM and ECRWSS
              junk mail deliveries to your address.
            </p>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="my-12">
          <PetitionCTA variant="hero" />
        </div>

        <div className="prose max-w-none">
          <h2
            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
            style={{ color: "#111827" }}
          >
            Why This Matters
          </h2>
          <p style={{ color: "#374151" }}>
            Every year, billions of pieces of unsolicited advertising mail are
            delivered to American homes through the USPS Every Door Direct Mail
            (EDDM) program. Unlike telemarketing calls, spam emails, or text
            messages, there is <strong>no federal opt-out mechanism</strong> for
            this type of mail.
          </p>
          <p style={{ color: "#374151" }}>
            This isn&apos;t just an inconvenience—it&apos;s a significant
            environmental and consumer rights issue:
          </p>
          <ul className="list-disc pl-6 my-4" style={{ color: "#374151" }}>
            <li>
              <strong>100 million trees</strong> are cut down annually for junk
              mail
            </li>
            <li>
              <strong>51.5 million metric tons</strong> of CO2 emissions
            </li>
            <li>
              <strong>$320 million</strong> in taxpayer-funded disposal costs
            </li>
            <li>
              <strong>44%</strong> is thrown away without being opened
            </li>
          </ul>

          <h2
            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
            style={{ color: "#111827" }}
          >
            What We Do
          </h2>
          <p style={{ color: "#374151" }}>
            ZeroJunkMail.org serves as an informational resource to:
          </p>
          <ul className="list-disc pl-6 my-4" style={{ color: "#374151" }}>
            <li>
              Educate consumers about EDDM, ECRWSS, and saturation mail programs
            </li>
            <li>
              Explain why current laws prevent consumers from opting out
            </li>
            <li>
              Document the environmental and social costs of unwanted mail
            </li>
            <li>
              Mobilize public support for a federal Do Not Mail registry
            </li>
            <li>
              Provide resources for contacting elected representatives
            </li>
          </ul>

          <h2
            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
            style={{ color: "#111827" }}
          >
            Join the Movement
          </h2>
          <p style={{ color: "#374151" }}>
            The Do Not Call registry was once considered impossible due to
            telemarketing industry opposition. Public demand prevailed. The same
            can happen for postal advertising mail—but only if enough Americans
            speak up.
          </p>
          <p style={{ color: "#374151" }}>
            Every signature on the petition demonstrates public support for
            change. Every conversation raises awareness. Every contact with an
            elected official puts pressure on Congress to act.
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="mt-12 bg-gray-900 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Take the First Step
          </h3>
          <p className="text-gray-300 mb-6" style={{ color: "#d1d5db" }}>
            Sign the petition today and add your voice to the growing demand for
            mail choice.
          </p>
          <a
            href={PETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
          >
            Sign the Petition Now
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
                What is EDDM?
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
                href="/environmental-impact"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Environmental Impact
              </Link>
            </li>
            <li>
              <Link
                href="/take-action"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Take Action
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
            ZeroJunkMail.org is for informational purposes only and is in no way
            associated or affiliated with the USPS, DMA, Taradel, IMS,
            DirectMail.com or their customers. Information compiled within this
            site is publicly available.
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
