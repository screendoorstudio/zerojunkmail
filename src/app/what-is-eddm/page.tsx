import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateFAQSchema, FAQItem } from "@/lib/schema/faq";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema/article";
import { SITE_CONFIG, STATISTICS } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "What is EDDM (Every Door Direct Mail)? | ECRWSS Explained",
  description:
    "EDDM (Every Door Direct Mail) is a USPS program that delivers advertising mail to every address. Learn what ECRWSS means, why mail says 'Postal Customer,' and why you can't opt out of saturation mail.",
  keywords: [
    "EDDM",
    "what is EDDM",
    "Every Door Direct Mail",
    "ECRWSS",
    "what does ECRWSS mean",
    "ECRWSS meaning",
    "Postal Customer mail",
    "Current Resident mail",
    "USPS saturation mail",
    "bulk mail",
    "carrier route mail",
    "EDDM opt out",
    "can I stop EDDM",
    "saturation mailing",
    "USPS marketing mail",
    "junk mail addressed to postal customer",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "What does ECRWSS mean on my mail?",
    answer:
      "ECRWSS stands for 'Enhanced Carrier Route Walking Sequence Saturation.' It means the mail piece is being delivered to every address on a postal carrier's route. This is the technical designation for EDDM saturation mail. You may also see variations like ECRWSS EDDM, ECRLOT (Line of Travel), or ECRWSH (High-Density).",
  },
  {
    question: "Why does my mail say 'Postal Customer' instead of my name?",
    answer:
      "Mail addressed to 'Postal Customer,' 'Resident,' 'Current Resident,' or 'Current Occupant' is EDDM saturation mail. Advertisers don't need your name or address, they simply pay to have mail delivered to every home in a zip code or carrier route. This generic addressing is why you cannot refuse or return this mail.",
  },
  {
    question: "How much does EDDM cost advertisers?",
    answer:
      "EDDM postage rates are heavily discounted, typically around $0.20-0.25 per piece, far less than regular first-class mail. This low cost incentivizes mass mailings and makes saturation advertising economically attractive for local businesses.",
  },
  {
    question: "Can I opt out of EDDM mail?",
    answer:
      "No. There is currently no legal mechanism to opt out of EDDM or saturation mail in the United States. Unlike spam email or robocalls, postal advertising has no federal opt-out registry. Services like DMAchoice and CatalogChoice only work for addressed mail, not EDDM.",
  },
  {
    question: "Can I refuse EDDM mail or return it to sender?",
    answer:
      "No. You can only refuse mail addressed to you personally. Since EDDM mail is addressed to 'Postal Customer' rather than your name, the USPS does not accept refusals. Writing 'Refused' or 'Return to Sender' will have no effect.",
  },
  {
    question: "What is the difference between EDDM and regular junk mail?",
    answer:
      "Regular addressed junk mail uses your name and address from mailing lists, you can opt out by removing yourself from these lists. EDDM requires no mailing list at all, it's delivered to every address on a route. There's no list to remove yourself from, which is why EDDM cannot be stopped.",
  },
  {
    question: "How many EDDM pieces are sent each year?",
    answer:
      "The USPS processes approximately 3 billion EDDM mail pieces annually. When combined with other advertising mail programs, Americans receive over 80 billion pieces of marketing mail each year, the majority of which goes directly to recycling or trash.",
  },
  {
    question: "Does EDDM revenue save the USPS from its financial crisis?",
    answer:
      "No. USPS Postal Facts reports EDDM has generated more than $5 billion since 2011, which averages to roughly $360 million a year. That is about 0.45% of the USPS's $80 billion in annual operating revenue and only 4% of the $9 billion net loss in fiscal year 2025. When Postmaster General David Steiner outlined fixes to Congress in March 2026, he cited reducing delivery days, raising first-class postage, and expanding borrowing authority. He did not mention EDDM. The program is too small to meaningfully affect USPS solvency, which undercuts the claim that consumers cannot opt out because the Postal Service needs the revenue.",
  },
];

export default function WhatIsEDDMPage() {
  const articleSchema = generateArticleSchema({
    title: "What is EDDM (Every Door Direct Mail)?",
    description: metadata.description as string,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/what-is-eddm`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "What is EDDM?", url: `${SITE_CONFIG.url}/what-is-eddm` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema, faqSchema]} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">What is EDDM?</span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox
          summary="EDDM (Every Door Direct Mail) is a USPS program that lets businesses send advertising mail to every address in a zip code or carrier route, without needing names or individual addresses. It's the mail marked 'ECRWSS' or 'Postal Customer' that you cannot opt out of."
          keyStatistic={{
            value: STATISTICS.eddmPieces.shortValue,
            label: "pieces/year",
          }}
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          What is EDDM (Every Door Direct Mail)?
        </h1>

        <div className="prose max-w-none">
          <p>
            <strong>Every Door Direct Mail (EDDM)</strong> is a United States
            Postal Service program launched in 2011 that allows businesses to
            send advertising mail to every residential and business address
            along specific postal carrier routes. The program was designed to
            make direct mail advertising more accessible and affordable for
            small businesses.
          </p>

          <h2>How Does EDDM Work?</h2>
          <p>
            Unlike traditional direct mail, EDDM doesn&apos;t require
            advertisers to purchase mailing lists or know individual recipient
            names.{" "}
            <strong>
              This is the critical difference: there is no mailing list to opt
              out of.
            </strong>{" "}
            If you have a mailbox, you receive EDDM mail. Period. Businesses
            simply:
          </p>
          <ul>
            <li>Select zip codes or carrier routes they want to target</li>
            <li>
              Print mail pieces that meet USPS size requirements (typically
              larger than standard letters)
            </li>
            <li>
              Bundle the pieces and deliver them to their local post office
            </li>
            <li>
              Pay discounted postage rates (approximately $0.20-0.23 per piece),
              far cheaper than regular postage
            </li>
          </ul>
          <p>
            The USPS then delivers one piece to every address on the selected
            routes, whether the resident wants it or not. At under 25 cents per
            piece, EDDM is incredibly affordable for advertisers, which explains
            why billions of pieces flood American mailboxes each year.
          </p>

          <h2>What Does ECRWSS Mean?</h2>
          <p>
            <strong>ECRWSS</strong> stands for{" "}
            <strong>Enhanced Carrier Route Walking Sequence Saturation</strong>.
            This postal code indicates that the mail piece is:
          </p>
          <ul>
            <li>
              Part of a saturation mailing (delivered to every address on a
              route)
            </li>
            <li>Pre-sorted in the order the carrier walks their route</li>
            <li>Eligible for the lowest bulk mail rates</li>
          </ul>
          <p>
            When you see &quot;ECRWSS&quot; or &quot;ECRWSS EDDM&quot; printed
            on mail, it confirms that the piece was sent through the EDDM
            program to every address in your area.
          </p>

          <h2>Why Does My Mail Say &quot;Postal Customer&quot;?</h2>
          <p>
            EDDM mail is typically addressed to generic terms rather than your
            name:
          </p>
          <ul>
            <li>&quot;Postal Customer&quot;</li>
            <li>&quot;Resident&quot;</li>
            <li>&quot;Current Resident&quot;</li>
            <li>&quot;Local Postal Customer&quot;</li>
          </ul>
          <p>
            This generic addressing is the key reason you cannot refuse or
            return EDDM mail. Since it&apos;s not technically addressed to you
            as an individual, the USPS considers it &quot;unaddressed mail&quot;
            and will not accept a refusal.
          </p>

          <h2>The Scale of the Problem</h2>
          <p>
            The USPS processes approximately{" "}
            <strong>{STATISTICS.eddmPieces.value} EDDM mail pieces</strong>{" "}
            annually. When combined with other bulk mail programs, Americans
            receive over 80 billion pieces of advertising mail each year, the
            majority of which goes directly into the recycling bin or trash.
          </p>

          <h2>Why Was EDDM Created?</h2>
          <p>The USPS launched EDDM in 2011 primarily for two reasons:</p>
          <ol>
            <li>
              <strong>Revenue generation:</strong> As first-class mail volume
              declined due to digital communication, the USPS needed new revenue
              streams. Advertising mail now represents a significant portion of
              postal revenue.
            </li>
            <li>
              <strong>Small business accessibility:</strong> Traditional direct
              mail required purchasing mailing lists and managing complex postal
              regulations. EDDM simplified this for local businesses like
              restaurants, dentists, and real estate agents.
            </li>
          </ol>

          <h2>The Consumer Perspective</h2>
          <p>
            While EDDM may benefit some small businesses, it creates significant
            problems for consumers:
          </p>
          <ul>
            <li>
              <strong>No consent required:</strong> Your address is included
              automatically; you have no say in whether you receive this mail
            </li>
            <li>
              <strong>No opt-out mechanism:</strong> Unlike email or phone
              marketing, there is no registry or preference service for EDDM
            </li>
            <li>
              <strong>Environmental waste:</strong> Most EDDM mail is discarded
              immediately, contributing to paper waste
            </li>
            <li>
              <strong>Time cost:</strong> Sorting through unwanted mail takes
              time from busy households
            </li>
          </ul>

          <h2>Examples of Problematic EDDM Content</h2>
          <p>
            EDDM allows virtually any content to be delivered to every home on a
            postal route, including materials many recipients find
            objectionable:
          </p>
        </div>

        {/* Problem content examples */}
        <div className="my-8 grid md:grid-cols-2 gap-6">
          <div
            className="bg-gray-50 p-4 rounded-lg"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <Image
              src="/images/junk-mail/cigarette-ad.png"
              alt="Cigarette advertisement delivered via EDDM"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full mb-3"
            />
            <p className="text-sm text-gray-600" style={{ color: "#4b5563" }}>
              <strong>Tobacco advertising</strong> delivered to every home,
              including families with children
            </p>
          </div>
          <div
            className="bg-gray-50 p-4 rounded-lg"
            style={{ backgroundColor: "#f9fafb" }}
          >
            <Image
              src="/images/junk-mail/religious-tract.jpg"
              alt="Religious tract delivered via EDDM"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full mb-3"
            />
            <p className="text-sm text-gray-600" style={{ color: "#4b5563" }}>
              <strong>Religious materials</strong> delivered to all addresses
              regardless of recipient beliefs
            </p>
          </div>
        </div>

        {/* Opinion: Does EDDM Keep the USPS Afloat? */}
        <section
          className="mt-12 border-t border-gray-200 pt-12"
          style={{ borderColor: "#e5e7eb" }}
        >
          <div
            className="bg-blue-50 border-l-4 border-blue-600 px-6 py-4 mb-6 rounded-r-lg"
            style={{ backgroundColor: "#eff6ff", borderColor: "#2563eb" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-1"
              style={{ color: "#1d4ed8" }}
            >
              Analysis
            </p>
            <h2
              className="text-3xl font-bold text-gray-900"
              style={{ color: "#111827" }}
            >
              Does EDDM Actually Keep the USPS Afloat?
            </h2>
          </div>

          <div className="prose max-w-none" style={{ color: "#374151" }}>
            <p style={{ color: "#374151" }}>
              The standard defense of Every Door Direct Mail goes like this:
              the Postal Service is losing billions, so it cannot afford to let
              households opt out of the program. The math does not support the
              claim.
            </p>

            <p style={{ color: "#374151" }}>
              USPS Postal Facts reports that EDDM has delivered more than 33
              billion pieces and generated more than $5 billion in revenue
              since launching in 2011. Averaged over fourteen years, that works
              out to roughly{" "}
              <strong style={{ color: "#111827" }}>$360 million a year</strong>.
            </p>

            <p style={{ color: "#374151" }}>
              Compare that to the rest of the USPS balance sheet. The agency
              closed fiscal year 2025 with a{" "}
              <strong style={{ color: "#111827" }}>$9 billion net loss</strong>{" "}
              and total operating revenue near{" "}
              <strong style={{ color: "#111827" }}>$80 billion</strong> (USPS
              Newsroom, November 2025). The U.S. GAO estimates cumulative USPS
              losses of about $109 billion since 2007. EDDM revenue is about
              four percent of a single year&apos;s loss and less than half a
              percent of total revenue.
            </p>

            <div
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6"
              style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
            >
              <p
                className="text-sm font-semibold uppercase tracking-wide mb-3"
                style={{ color: "#6b7280" }}
              >
                The math at a glance
              </p>
              <ul
                className="space-y-2 text-sm"
                style={{ color: "#374151" }}
              >
                <li>
                  EDDM revenue ≈{" "}
                  <strong style={{ color: "#111827" }}>$360M / year</strong>
                </li>
                <li>
                  USPS total operating revenue (FY2025) ≈{" "}
                  <strong style={{ color: "#111827" }}>$80B</strong>
                </li>
                <li>
                  USPS net loss (FY2025) ≈{" "}
                  <strong style={{ color: "#111827" }}>$9B</strong>
                </li>
                <li>
                  EDDM as share of total revenue: ~
                  <strong style={{ color: "#111827" }}>0.45%</strong>
                </li>
                <li>
                  EDDM as share of one year&apos;s loss: ~
                  <strong style={{ color: "#111827" }}>4%</strong>
                </li>
              </ul>
            </div>

            <p style={{ color: "#374151" }}>
              The bigger levers are obvious. When USPS suspended pension
              contributions for FY2026, it freed up{" "}
              <strong style={{ color: "#111827" }}>
                $2.5 billion in a single year
              </strong>{" "}
              (Reuters, April 2026), nearly seven times the annual EDDM take.
              Rate hikes on Marketing Mail in FY2025 alone produced $350
              million in new revenue, almost matching what EDDM brings in
              overall. When Postmaster General David Steiner told Congress the
              agency was running out of money (NPR, March 2026), the fixes he
              floated were reducing delivery days, raising first-class postage
              toward a dollar, and expanding borrowing authority. He did not
              mention EDDM. It is not large enough to matter at that scale.
            </p>

            <p style={{ color: "#374151" }}>
              EDDM&apos;s real function is not to save the Postal Service. It
              is a politically protected program that supports a small-business
              advertising industry and props up declining Marketing Mail volume
              statistics. That is a reasonable thing for USPS to do, but it is
              not a reason to deny 128 million American households a choice
              about what lands in their mailbox.
            </p>

            <p
              className="text-sm mt-6"
              style={{ color: "#6b7280" }}
            >
              <strong style={{ color: "#374151" }}>Sources:</strong>{" "}
              <a
                href="https://facts.usps.com/every-door-direct-mail/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                USPS Postal Facts
              </a>
              {", "}
              <a
                href="https://about.usps.com/newsroom/national-releases/2025/1114-usps-reports-fiscal-year-2025-results.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                USPS Newsroom FY2025
              </a>
              {", "}
              <a
                href="https://www.gao.gov/blog/u.s.-postal-service-losing-money.-what-can-be-done-help-it"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                U.S. GAO
              </a>
              {", "}
              <a
                href="https://www.reuters.com/world/cash-strapped-us-postal-service-suspends-contributions-pension-plan-2026-04-09/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                Reuters
              </a>
              {", "}
              <a
                href="https://www.npr.org/2026/03/17/nx-s1-5750419/usps-running-out-of-money-postal-service-david-steiner"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb" }}
              >
                NPR
              </a>
              . Last updated April 2026.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-12 border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Learn More
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/why-you-cant-opt-out"
                className="text-blue-600 hover:text-blue-700"
              >
                Why You Can&apos;t Opt Out of EDDM Mail →
              </Link>
            </li>
            <li>
              <Link
                href="/environmental-impact"
                className="text-blue-600 hover:text-blue-700"
              >
                Environmental Impact of Junk Mail →
              </Link>
            </li>
            <li>
              <Link
                href="/take-action"
                className="text-blue-600 hover:text-blue-700"
              >
                What You Can Do About It →
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-blue-600 hover:text-blue-700"
              >
                Resources &amp; Organizations →
              </Link>
            </li>
          </ul>
        </div>

        <PetitionCTA className="mt-12" />
      </article>
    </>
  );
}
