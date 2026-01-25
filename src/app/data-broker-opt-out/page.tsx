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
  title: "Data Broker Opt-Out Guide | Stop Junk Mail at the Source",
  description:
    "Stop junk mail by opting out of data brokers. Complete guide to removing your information from Acxiom, Epsilon, Oracle, LexisNexis, and other data brokers who sell mailing lists.",
  keywords: [
    "data broker opt out",
    "data broker removal",
    "how to opt out of data brokers",
    "acxiom opt out",
    "epsilon opt out",
    "oracle data opt out",
    "lexisnexis opt out",
    "data removal junk mail",
    "mailing list removal",
    "personal data removal",
    "stop junk mail source",
    "data broker junk mail",
    "remove personal information",
    "deleteme alternative",
    "incogni alternative",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "What are data brokers?",
    answer:
      "Data brokers are companies that collect, aggregate, and sell personal information. They gather data from public records, purchases, surveys, social media, and online activity. This data is sold to marketers who use it to send you targeted advertising mail.",
  },
  {
    question: "How do data brokers cause junk mail?",
    answer:
      "Marketers buy mailing lists from data brokers containing names, addresses, and demographic information. When you receive catalogs, credit offers, or marketing mail addressed to your name, it's often because a data broker sold your information to the sender.",
  },
  {
    question: "Will opting out of data brokers stop all junk mail?",
    answer:
      "No. Opting out of data brokers reduces addressed junk mail that uses your personal information. It does NOT stop EDDM (Every Door Direct Mail) addressed to 'Postal Customer' or 'Resident'—there is no mailing list to remove yourself from for EDDM.",
  },
  {
    question: "How long does it take for data broker opt-outs to work?",
    answer:
      "Most data broker opt-outs take 30-90 days to process. However, since marketers may have already purchased your data before you opted out, you may continue receiving some mail for several months after opting out.",
  },
  {
    question: "Are data removal services like DeleteMe worth it?",
    answer:
      "Services like DeleteMe, Incogni, and Kanary can save significant time by automating opt-out requests across dozens of data brokers. They typically cost $100-200/year. Whether they're worth it depends on how much you value your time—manual opt-outs can take 300+ hours.",
  },
  {
    question: "Do I need to opt out of data brokers repeatedly?",
    answer:
      "Yes. Data brokers continuously collect new information, so your data may reappear after you've opted out. Many people opt out annually, or use paid services that monitor and re-submit requests automatically.",
  },
];

const howToSteps = [
  {
    name: "Opt out of Acxiom",
    text: "Visit acxiom.com/optout or call 1-877-774-2094 to remove your information from one of the largest consumer data brokers.",
    url: "https://www.acxiom.com/optout/",
  },
  {
    name: "Opt out of Epsilon",
    text: "Email optout@epsilon.com with your full name and address, or call 1-866-267-3861 to request removal from their marketing databases.",
    url: `${SITE_CONFIG.url}/data-broker-opt-out#epsilon`,
  },
  {
    name: "Opt out of Oracle Data Cloud",
    text: "Visit Oracle's privacy page and submit a data deletion request. Processing typically takes 30 days.",
    url: "https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html",
  },
  {
    name: "Opt out of LexisNexis",
    text: "Visit consumer.risk.lexisnexis.com to access their opt-out portal for consumer data.",
    url: "https://consumer.risk.lexisnexis.com/",
  },
  {
    name: "Opt out of Abacus (catalog data)",
    text: "Email abacusoptout@epsilon.com or mail a request to P.O. Box 1478, Broomfield, CO 80038 to remove yourself from catalog mailing lists.",
    url: `${SITE_CONFIG.url}/data-broker-opt-out#abacus`,
  },
];

export default function DataBrokerOptOutPage() {
  const articleSchema = generateArticleSchema({
    title: "Data Broker Opt-Out Guide | Stop Junk Mail at the Source",
    description: metadata.description as string,
    datePublished: "2025-01-25",
    dateModified: "2025-01-25",
    url: `${SITE_CONFIG.url}/data-broker-opt-out`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Stop Junk Mail", url: `${SITE_CONFIG.url}/reduce-junk-mail` },
    { name: "Data Broker Opt-Out", url: `${SITE_CONFIG.url}/data-broker-opt-out` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const howToSchema = generateHowToSchema({
    name: "How to Opt Out of Data Brokers",
    description: "Step-by-step guide to removing your personal information from major data brokers to reduce junk mail.",
    totalTime: "PT2H",
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
          <Link href="/" className="hover:text-blue-600" style={{ color: "#6b7280" }}>
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/reduce-junk-mail" className="hover:text-blue-600" style={{ color: "#6b7280" }}>
            Stop Junk Mail
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#111827" }}>Data Broker Opt-Out</span>
        </nav>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          Last updated: January 2025
        </p>

        {/* TL;DR Box */}
        <TLDRBox summary="Data brokers collect and sell your personal information to marketers. Opting out of major brokers like Acxiom, Epsilon, Oracle, and LexisNexis can reduce targeted junk mail. Manual opt-outs are free but time-consuming (300+ hours); paid services like DeleteMe automate the process. Note: This won't stop EDDM mail addressed to 'Postal Customer.'" />

        <h1 className="text-4xl font-bold text-gray-900 mb-6" style={{ color: "#111827" }}>
          Data Broker Opt-Out Guide: Stop Junk Mail at the Source
        </h1>

        <div className="prose max-w-none">
          <p style={{ color: "#374151" }}>
            <strong>Want to stop junk mail before it starts?</strong> Much of the addressed junk mail you receive—catalogs, credit offers, marketing letters—exists because data brokers sold your personal information to advertisers. By opting out of these databases, you can reduce junk mail at the source.
          </p>

          {/* What Are Data Brokers */}
          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#111827" }}>
            What Are Data Brokers?
          </h2>
          <p style={{ color: "#374151" }}>
            Data brokers are companies that collect, aggregate, and sell personal information. They gather data from:
          </p>
          <ul style={{ color: "#374151" }}>
            <li><strong>Public records:</strong> Property records, voter registration, court records, birth/death records</li>
            <li><strong>Commercial sources:</strong> Purchase history, warranty registrations, loyalty programs</li>
            <li><strong>Online activity:</strong> Social media, browsing history, app usage</li>
            <li><strong>Surveys and contests:</strong> Sweepstakes entries, product registrations</li>
          </ul>
          <p style={{ color: "#374151" }}>
            This data is packaged into consumer profiles and sold to marketers, who use it to send targeted advertising mail. When you wonder &quot;how did they get my address?&quot;—a data broker is often the answer.
          </p>

          {/* Important Warning */}
          <div
            className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg"
            style={{ backgroundColor: "#fffbeb" }}
          >
            <h3 className="text-lg font-bold text-amber-800 mb-2" style={{ color: "#92400e" }}>
              Important: This Won&apos;t Stop EDDM Mail
            </h3>
            <p style={{ color: "#78350f" }}>
              Opting out of data brokers reduces <strong>addressed</strong> junk mail—mail with your name on it. It does NOT stop EDDM (Every Door Direct Mail) addressed to &quot;Postal Customer&quot; or &quot;Resident.&quot; EDDM doesn&apos;t use mailing lists at all—there&apos;s nothing to opt out of.
            </p>
          </div>

          {/* Major Data Brokers */}
          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#111827" }}>
            How to Opt Out of Major Data Brokers
          </h2>
        </div>

        {/* Data Broker Cards */}
        <div className="space-y-6 my-8">
          {/* Acxiom */}
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100" style={{ backgroundColor: "#eff6ff", borderColor: "#dbeafe" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>Acxiom</h3>
            <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
              One of the largest consumer data brokers, with data on over 2.5 billion consumers worldwide.
            </p>
            <div className="bg-white p-4 rounded-lg" style={{ backgroundColor: "#ffffff" }}>
              <ul className="space-y-2" style={{ color: "#374151" }}>
                <li><strong>Online:</strong> <a href="https://www.acxiom.com/optout/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>acxiom.com/optout</a></li>
                <li><strong>Phone:</strong> 1-877-774-2094</li>
                <li><strong>Time:</strong> 2-4 weeks to process</li>
              </ul>
            </div>
          </div>

          {/* Epsilon */}
          <div id="epsilon" className="bg-green-50 p-6 rounded-xl border border-green-100" style={{ backgroundColor: "#f0fdf4", borderColor: "#dcfce7" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>Epsilon</h3>
            <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
              Major data marketing company that also operates the Abacus catalog cooperative.
            </p>
            <div className="bg-white p-4 rounded-lg" style={{ backgroundColor: "#ffffff" }}>
              <ul className="space-y-2" style={{ color: "#374151" }}>
                <li><strong>Email:</strong> optout@epsilon.com (include full name and address)</li>
                <li><strong>Phone:</strong> 1-866-267-3861</li>
                <li><strong>Mail:</strong> Epsilon, P.O. Box 1478, Broomfield, CO 80038</li>
                <li><strong>Time:</strong> 4-6 weeks to process</li>
              </ul>
            </div>
          </div>

          {/* Oracle */}
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100" style={{ backgroundColor: "#faf5ff", borderColor: "#f3e8ff" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>Oracle Data Cloud</h3>
            <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
              Acquired BlueKai and Datalogix; maintains extensive consumer data for digital and direct marketing.
            </p>
            <div className="bg-white p-4 rounded-lg" style={{ backgroundColor: "#ffffff" }}>
              <ul className="space-y-2" style={{ color: "#374151" }}>
                <li><strong>Online:</strong> <a href="https://www.oracle.com/legal/privacy/marketing-cloud-data-cloud-privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>Oracle Privacy Page</a> (scroll to &quot;Your Choices&quot;)</li>
                <li><strong>Email:</strong> privacy@oracle.com</li>
                <li><strong>Time:</strong> 30 days to process</li>
              </ul>
            </div>
          </div>

          {/* LexisNexis */}
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100" style={{ backgroundColor: "#fff7ed", borderColor: "#ffedd5" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>LexisNexis</h3>
            <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
              Primarily known for legal research but also maintains consumer data for risk assessment and marketing.
            </p>
            <div className="bg-white p-4 rounded-lg" style={{ backgroundColor: "#ffffff" }}>
              <ul className="space-y-2" style={{ color: "#374151" }}>
                <li><strong>Online:</strong> <a href="https://consumer.risk.lexisnexis.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>consumer.risk.lexisnexis.com</a></li>
                <li><strong>Phone:</strong> 1-888-332-8244</li>
                <li><strong>Time:</strong> 5-7 business days</li>
              </ul>
            </div>
          </div>

          {/* Abacus */}
          <div id="abacus" className="bg-teal-50 p-6 rounded-xl border border-teal-100" style={{ backgroundColor: "#f0fdfa", borderColor: "#ccfbf1" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>Abacus (Catalog Data)</h3>
            <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
              Cooperative database operated by Epsilon specifically for catalog marketers. If you receive lots of catalogs, Abacus likely has your data.
            </p>
            <div className="bg-white p-4 rounded-lg" style={{ backgroundColor: "#ffffff" }}>
              <ul className="space-y-2" style={{ color: "#374151" }}>
                <li><strong>Email:</strong> abacusoptout@epsilon.com</li>
                <li><strong>Mail:</strong> Abacus, P.O. Box 1478, Broomfield, CO 80038</li>
                <li><strong>Time:</strong> 6-8 weeks to process</li>
              </ul>
            </div>
          </div>

          {/* Experian */}
          <div className="bg-red-50 p-6 rounded-xl border border-red-100" style={{ backgroundColor: "#fef2f2", borderColor: "#fee2e2" }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#111827" }}>Experian (Marketing)</h3>
            <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>
              In addition to credit reporting, Experian maintains marketing data and sells mailing lists.
            </p>
            <div className="bg-white p-4 rounded-lg" style={{ backgroundColor: "#ffffff" }}>
              <ul className="space-y-2" style={{ color: "#374151" }}>
                <li><strong>Online:</strong> <a href="https://www.experian.com/privacy/opting-out" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>experian.com/privacy/opting-out</a></li>
                <li><strong>Note:</strong> This is separate from OptOutPrescreen (credit offers)</li>
                <li><strong>Time:</strong> 4-6 weeks to process</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          {/* Paid Services */}
          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#111827" }}>
            Paid Data Removal Services
          </h2>
          <p style={{ color: "#374151" }}>
            Manually opting out of all data brokers can take <strong>300+ hours</strong>. Paid services automate the process:
          </p>
        </div>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200" style={{ borderColor: "#e5e7eb" }}>
            <thead className="bg-gray-100" style={{ backgroundColor: "#f3f4f6" }}>
              <tr>
                <th className="px-4 py-3 text-left font-semibold border-b" style={{ color: "#111827" }}>Service</th>
                <th className="px-4 py-3 text-left font-semibold border-b" style={{ color: "#111827" }}>Price</th>
                <th className="px-4 py-3 text-left font-semibold border-b" style={{ color: "#111827" }}>Brokers Covered</th>
                <th className="px-4 py-3 text-left font-semibold border-b" style={{ color: "#111827" }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b font-semibold" style={{ color: "#374151" }}>DeleteMe</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>$129/year</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>750+</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>Quarterly scans, family plans available</td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b font-semibold" style={{ color: "#374151" }}>Incogni</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>$77/year</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>180+</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>From Surfshark VPN, automated tracking</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b font-semibold" style={{ color: "#374151" }}>Kanary</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>$89/year</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>400+</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>Real-time monitoring, browser extension</td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b font-semibold" style={{ color: "#374151" }}>EasyOptOuts</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>$20/year</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>100+</td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>Budget option, searches every 4 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="prose max-w-none">
          <div className="bg-amber-50 p-4 rounded-lg my-6" style={{ backgroundColor: "#fffbeb" }}>
            <p style={{ color: "#78350f" }}>
              <strong>Note:</strong> These services reduce addressed junk mail but cannot stop EDDM (Every Door Direct Mail) addressed to &quot;Postal Customer&quot; or &quot;Resident.&quot; For EDDM, we need a federal Do Not Mail registry—<Link href="/take-action" className="underline font-semibold">sign the petition</Link>.
            </p>
          </div>

          {/* Additional Steps */}
          <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: "#111827" }}>
            Combine With Other Opt-Out Services
          </h2>
          <p style={{ color: "#374151" }}>
            For maximum junk mail reduction, combine data broker opt-outs with:
          </p>
          <ul style={{ color: "#374151" }}>
            <li><strong><Link href="/opt-out-credit-offers" style={{ color: "#2563eb" }}>OptOutPrescreen.com</Link>:</strong> Stop prescreened credit and insurance offers (free)</li>
            <li><strong><Link href="/reduce-junk-mail#step-2" style={{ color: "#2563eb" }}>DMAchoice.org</Link>:</strong> Opt out of catalogs and marketing mail ($4-6)</li>
            <li><strong><Link href="/stop-catalog-mail" style={{ color: "#2563eb" }}>CatalogChoice.org</Link>:</strong> Stop specific catalogs (free)</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 border-t border-gray-200 pt-12" style={{ borderColor: "#e5e7eb" }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ color: "#111827" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg" style={{ backgroundColor: "#f9fafb" }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" style={{ color: "#111827" }}>
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
        <div className="mt-12 bg-gray-100 p-6 rounded-lg" style={{ backgroundColor: "#f3f4f6" }}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ color: "#111827" }}>
            Related Guides
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/reduce-junk-mail" className="text-blue-600 hover:text-blue-700" style={{ color: "#2563eb" }}>
                Complete Junk Mail Opt-Out Guide →
              </Link>
            </li>
            <li>
              <Link href="/opt-out-credit-offers" className="text-blue-600 hover:text-blue-700" style={{ color: "#2563eb" }}>
                Stop Credit Card Offers →
              </Link>
            </li>
            <li>
              <Link href="/stop-catalog-mail" className="text-blue-600 hover:text-blue-700" style={{ color: "#2563eb" }}>
                Stop Catalogs →
              </Link>
            </li>
            <li>
              <Link href="/what-is-eddm" className="text-blue-600 hover:text-blue-700" style={{ color: "#2563eb" }}>
                What is EDDM? →
              </Link>
            </li>
          </ul>
        </div>

        <PetitionCTA className="mt-12" />
      </article>
    </>
  );
}
