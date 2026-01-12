import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateFAQSchema, FAQItem } from "@/lib/schema/faq";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG, STATISTICS } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "What is EDDM (Every Door Direct Mail)?",
  description:
    "EDDM (Every Door Direct Mail) is a USPS program that delivers advertising mail to every address in a postal route. Learn how EDDM works, what ECRWSS means, and why you receive junk mail marked 'Postal Customer.'",
  keywords: [
    "EDDM",
    "Every Door Direct Mail",
    "ECRWSS",
    "Postal Customer mail",
    "USPS saturation mail",
    "bulk mail",
    "carrier route mail",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "What does ECRWSS mean on my mail?",
    answer:
      "ECRWSS stands for 'Enhanced Carrier Route Walking Sequence Saturation.' It means the mail piece is being delivered to every address on a postal carrier's route. This is the technical term for EDDM mail.",
  },
  {
    question: "Why does my mail say 'Postal Customer' instead of my name?",
    answer:
      "Mail addressed to 'Postal Customer' or 'Resident' is EDDM saturation mail. Advertisers don't need your name or address—they simply pay to have mail delivered to every home in a zip code or carrier route.",
  },
  {
    question: "How much does EDDM cost advertisers?",
    answer:
      "EDDM postage rates are heavily discounted, typically around $0.20-0.23 per piece—far less than regular mail. This low cost incentivizes mass mailings and makes saturation advertising economically attractive.",
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
          summary="EDDM (Every Door Direct Mail) is a USPS program that lets businesses send advertising mail to every address in a zip code or carrier route—without needing names or individual addresses. It's the mail marked 'ECRWSS' or 'Postal Customer' that you cannot opt out of."
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
            send advertising mail to every residential and business address along
            specific postal carrier routes. The program was designed to make
            direct mail advertising more accessible and affordable for small
            businesses.
          </p>

          <h2>How Does EDDM Work?</h2>
          <p>
            Unlike traditional direct mail, EDDM doesn&apos;t require advertisers to
            purchase mailing lists or know individual recipient names. <strong>This is the critical difference: there is no mailing list to opt out of.</strong> If you have a mailbox, you receive EDDM mail. Period. Businesses simply:
          </p>
          <ul>
            <li>Select zip codes or carrier routes they want to target</li>
            <li>
              Print mail pieces that meet USPS size requirements (typically
              larger than standard letters)
            </li>
            <li>Bundle the pieces and deliver them to their local post office</li>
            <li>
              Pay discounted postage rates (approximately $0.20-0.23 per piece)—far cheaper than regular postage
            </li>
          </ul>
          <p>
            The USPS then delivers one piece to every address on the selected
            routes—whether the resident wants it or not. At under 25 cents per piece, EDDM is incredibly affordable for advertisers, which explains why billions of pieces flood American mailboxes each year.
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
            When you see &quot;ECRWSS&quot; or &quot;ECRWSS EDDM&quot; printed on mail, it confirms
            that the piece was sent through the EDDM program to every address in
            your area.
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
            This generic addressing is the key reason you cannot refuse or return
            EDDM mail. Since it&apos;s not technically addressed to you as an
            individual, the USPS considers it &quot;unaddressed mail&quot; and will not
            accept a refusal.
          </p>

          <h2>The Scale of the Problem</h2>
          <p>
            The USPS processes approximately{" "}
            <strong>{STATISTICS.eddmPieces.value} EDDM mail pieces</strong>{" "}
            annually. When combined with other bulk mail programs, Americans
            receive over 80 billion pieces of advertising mail each year—the
            majority of which goes directly into the recycling bin or trash.
          </p>

          <h2>Why Was EDDM Created?</h2>
          <p>
            The USPS launched EDDM in 2011 primarily for two reasons:
          </p>
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
              <strong>Time cost:</strong> Sorting through unwanted mail takes time
              from busy households
            </li>
          </ul>

          <h2>Examples of Problematic EDDM Content</h2>
          <p>
            EDDM allows virtually any content to be delivered to every home on a
            postal route, including materials many recipients find objectionable:
          </p>
        </div>

        {/* Problem content examples */}
        <div className="my-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg" style={{ backgroundColor: "#f9fafb" }}>
            <Image
              src="/images/junk-mail/cigarette-ad.png"
              alt="Cigarette advertisement delivered via EDDM"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full mb-3"
            />
            <p className="text-sm text-gray-600" style={{ color: "#4b5563" }}>
              <strong>Tobacco advertising</strong> delivered to every home—including families with children
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg" style={{ backgroundColor: "#f9fafb" }}>
            <Image
              src="/images/junk-mail/religious-tract.jpg"
              alt="Religious tract delivered via EDDM"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full mb-3"
            />
            <p className="text-sm text-gray-600" style={{ color: "#4b5563" }}>
              <strong>Religious materials</strong> delivered to all addresses regardless of recipient beliefs
            </p>
          </div>
        </div>

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
