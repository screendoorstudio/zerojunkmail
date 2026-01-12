import { Metadata } from "next";
import Link from "next/link";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Resources: Junk Mail Opt-Out Services & Organizations",
  description:
    "Directory of junk mail opt-out services, advocacy organizations, and government resources. Find tools to reduce your mail and learn about organizations fighting for consumer choice.",
  keywords: [
    "junk mail resources",
    "stop junk mail organizations",
    "opt out services",
    "junk mail advocacy",
    "DMAchoice",
    "OptOutPrescreen",
    "CatalogChoice",
    "PaperKarma",
    "Eco-Cycle",
    "junk mail nonprofits",
  ],
};

export default function ResourcesPage() {
  const articleSchema = generateArticleSchema({
    title: "Resources: Junk Mail Opt-Out Services & Organizations",
    description: metadata.description as string,
    datePublished: "2025-01-11",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/resources`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Resources", url: `${SITE_CONFIG.url}/resources` },
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
            Resources
          </span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox summary="This page acknowledges the organizations, services, and advocates working to give consumers control over their mailboxes. While none of these can stop EDDM mail, they're doing important work to reduce junk mail and advocate for change." />

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ color: "#111827" }}
        >
          Resources
        </h1>

        <p className="text-lg text-gray-600 mb-8" style={{ color: "#4b5563" }}>
          These organizations, services, and government agencies are working to reduce junk mail and advocate for consumer choice. We encourage you to support their efforts.
        </p>

        {/* Section 1: Opt-Out Services */}
        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ color: "#111827" }}
          >
            Opt-Out Services
          </h2>
          <p className="text-gray-600 mb-6" style={{ color: "#4b5563" }}>
            These services can help reduce addressed junk mail. None can stop EDDM mail addressed to &quot;Postal Customer.&quot;
          </p>

          <div className="space-y-4">
            <div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.optoutprescreen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  OptOutPrescreen.com
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Official service from the major credit bureaus (Equifax, Experian, Innovis, TransUnion). Stops pre-approved credit and insurance offers. Free, with 5-year or permanent options.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Recommended by:</strong> FTC Consumer Advice
              </p>
            </div>

            <div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.dmachoice.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  DMAchoice.org
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Industry opt-out service from the Association of National Advertisers. Covers catalogs, magazine offers, and marketing mail from 3,600+ member companies. $4-6 fee, lasts 10 years.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                Also offers: Deceased Do Not Contact List, Caretaker opt-out
              </p>
            </div>

            <div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.catalogchoice.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  CatalogChoice.org
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Free nonprofit service from The Story of Stuff Project. Opt out of specific catalogs from 10,000+ mailers. Has helped over 2 million users reduce junk mail and saved half a million trees.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Nonprofit:</strong> 501(c)(3) organization
              </p>
            </div>

            <div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.paperkarma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  PaperKarma
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Mobile app for iOS and Android. Snap a photo of unwanted mail and they contact the sender. Largest Do Not Mail registry in USA with 100,000+ mailers. Over 10.3 million opt-out requests processed.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Model:</strong> Subscription-based after free trial
              </p>
            </div>

            <div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.41pounds.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  41pounds.org
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Contacts 20-35 direct mail companies on your behalf. Claims 80-95% reduction in junk mail. Donates portion of $41 fee to environmental nonprofits including American Forests and Trees for the Future.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Name origin:</strong> Average American receives 41 pounds of junk mail/year
              </p>
            </div>

            <div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.directmail.com/mail_preference/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  DirectMail.com
                </a>
              </h3>
              <p className="text-gray-600" style={{ color: "#4b5563" }}>
                Free supplemental registry. Marketing agency that created their own Do Not Mail list. May overlap with DMAchoice but provides additional coverage.
              </p>
            </div>

            <div
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://digitaldomi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  Digital Domi
                </a>
              </h3>
              <p className="text-gray-600" style={{ color: "#4b5563" }}>
                Emerging platform working to replace physical junk mail with secure digital delivery. Users get paid for viewing ads instead of receiving paper. Building coalition of 10 million households for junk mail reform.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Advocacy Organizations */}
        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ color: "#111827" }}
          >
            Advocacy &amp; Educational Organizations
          </h2>
          <p className="text-gray-600 mb-6" style={{ color: "#4b5563" }}>
            These organizations research, educate, and advocate on junk mail&apos;s environmental and social impacts.
          </p>

          <div className="space-y-4">
            <div
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://ecocycle.org/eco-living/refuse-and-reduce/stop-junk-mail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  Eco-Cycle
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Boulder, Colorado-based nonprofit advancing zero waste solutions. Their comprehensive &quot;How to Stop Junk Mail&quot; guide is one of the best resources available. Key source for junk mail environmental statistics.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Focus:</strong> Zero waste advocacy, recycling education
              </p>
            </div>

            <div
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://stand.earth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  Stand.earth
                </a>{" "}
                <span className="text-sm font-normal text-gray-500" style={{ color: "#6b7280" }}>
                  (formerly ForestEthics)
                </span>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Environmental organization that ran the influential &quot;Do Not Mail&quot; campaign in the 2000s, advocating for a national opt-out registry. Changed policies at Staples, Victoria&apos;s Secret, and other major catalog companies. Now focused on broader climate campaigns.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Impact:</strong> Protected 65 million acres, shifted billions in corporate purchasing
              </p>
            </div>

            <div
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://volofoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  VoLo Foundation
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Private foundation researching climate change and sustainability issues. Key source for junk mail statistics: 51.5 million metric tons of CO2 emissions, 848 pieces per household annually, 33% of global mail is junk.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Grants issued:</strong> $48 million (as of 2024)
              </p>
            </div>

            <div
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.sierraclub.org/sierra/let-s-ban-junk-mail-already"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  Sierra Club
                </a>
              </h3>
              <p className="text-gray-600" style={{ color: "#4b5563" }}>
                Published &quot;Let&apos;s Ban Junk Mail Already&quot; calling for a national opt-out registry. Describes it as &quot;one modest environmental reform that would require little investment but would help avoid millions of tons of greenhouse gas emissions.&quot;
              </p>
            </div>

            <div
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://privacyrights.org/consumer-guides/opt-out-resources-unwanted-junk-mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  Privacy Rights Clearinghouse
                </a>
              </h3>
              <p className="text-gray-600 mb-2" style={{ color: "#4b5563" }}>
                Nonprofit consumer advocacy organization (founded 1992). Maintains comprehensive junk mail opt-out guides and privacy resources.
              </p>
              <p className="text-sm text-gray-500" style={{ color: "#6b7280" }}>
                <strong>Focus:</strong> Consumer privacy education and advocacy
              </p>
            </div>

            <div
              className="bg-blue-50 p-6 rounded-lg border border-blue-100"
              style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.storyofstuff.org/catalog-choice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  The Story of Stuff Project
                </a>
              </h3>
              <p className="text-gray-600" style={{ color: "#4b5563" }}>
                Environmental nonprofit that acquired and operates Catalog Choice. Works to change the way we make, use, and throw away stuff, including reducing paper waste from junk mail.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Government Resources */}
        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ color: "#111827" }}
          >
            Government Resources
          </h2>

          <div className="space-y-4">
            <div
              className="bg-green-50 p-6 rounded-lg border border-green-100"
              style={{ backgroundColor: "#f0fdf4", borderColor: "#dcfce7" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://consumer.ftc.gov/how-stop-junk-mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  FTC Consumer Advice
                </a>
              </h3>
              <p className="text-gray-600" style={{ color: "#4b5563" }}>
                Official Federal Trade Commission guide on stopping junk mail. Recommends OptOutPrescreen and DMAchoice as primary solutions.
              </p>
            </div>

            <div
              className="bg-green-50 p-6 rounded-lg border border-green-100"
              style={{ backgroundColor: "#f0fdf4", borderColor: "#dcfce7" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.seattle.gov/utilities/protecting-our-environment/sustainability-tips/waste-prevention/at-home/stop-junk-mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  Seattle.gov Stop Junk Mail Program
                </a>
              </h3>
              <p className="text-gray-600" style={{ color: "#4b5563" }}>
                Free city-run opt-out service partnered with Catalog Choice. One of the few municipal governments offering direct junk mail reduction assistance.
              </p>
            </div>

            <div
              className="bg-green-50 p-6 rounded-lg border border-green-100"
              style={{ backgroundColor: "#f0fdf4", borderColor: "#dcfce7" }}
            >
              <h3
                className="text-lg font-semibold text-gray-900 mb-2"
                style={{ color: "#111827" }}
              >
                <a
                  href="https://www.mass.gov/guides/consumer-guide-to-stopping-junk-mail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  Massachusetts Consumer Guide
                </a>
              </h3>
              <p className="text-gray-600" style={{ color: "#4b5563" }}>
                Comprehensive state-level consumer protection guide with opt-out resources and tips.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Research Sources */}
        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ color: "#111827" }}
          >
            Research &amp; Data Sources
          </h2>
          <p className="text-gray-600 mb-6" style={{ color: "#4b5563" }}>
            The statistics cited throughout this website come from these organizations.
          </p>

          <div className="space-y-4">
            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900"
                style={{ color: "#111827" }}
              >
                Center for Development of Recycling (San Jose State University)
              </h4>
              <p className="text-gray-600 text-sm" style={{ color: "#4b5563" }}>
                Source for: 80-100 million trees cut annually, 41 pounds of junk mail per American adult per year
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900"
                style={{ color: "#111827" }}
              >
                VoLo Foundation
              </h4>
              <p className="text-gray-600 text-sm" style={{ color: "#4b5563" }}>
                Source for: 51.5 million metric tons CO2 emissions, 848 pieces per household, 33% of mail is junk globally, 9 million cars equivalent
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900"
                style={{ color: "#111827" }}
              >
                ForestEthics / Stand.earth
              </h4>
              <p className="text-gray-600 text-sm" style={{ color: "#4b5563" }}>
                Source for: 28 billion gallons of water consumed, 96.7 billion gallons water (alternate estimate)
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900"
                style={{ color: "#111827" }}
              >
                Environmental Protection Agency (EPA)
              </h4>
              <p className="text-gray-600 text-sm" style={{ color: "#4b5563" }}>
                Source for: 44% thrown away unopened, 5+ million tons landfill waste annually
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900"
                style={{ color: "#111827" }}
              >
                USPS
              </h4>
              <p className="text-gray-600 text-sm" style={{ color: "#4b5563" }}>
                Source for: ~3 billion EDDM pieces annually, EDDM program details and pricing
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div
          className="mt-12 bg-gray-900 text-white p-8 rounded-xl"
          style={{ backgroundColor: "#111827" }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "#ffffff" }}
          >
            Join the Movement
          </h3>
          <p
            className="text-gray-300 mb-6"
            style={{ color: "#d1d5db" }}
          >
            These organizations are doing important work, but none can solve the core problem: there is no way to opt out of EDDM mail. Sign the petition to demand a Do Not Mail registry.
          </p>
          <Link
            href="/take-action"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
          >
            Take Action Now
          </Link>
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
                href="/reduce-junk-mail"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                How to Stop Junk Mail: Complete Guide →
              </Link>
            </li>
            <li>
              <Link
                href="/why-you-cant-opt-out"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Why You Can&apos;t Opt Out of EDDM →
              </Link>
            </li>
            <li>
              <Link
                href="/environmental-impact"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Environmental Impact of Junk Mail →
              </Link>
            </li>
          </ul>
        </div>

        <PetitionCTA className="mt-12" />
      </article>
    </>
  );
}
