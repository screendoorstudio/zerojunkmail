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
  title: "How to Stop Mail for a Deceased Person | Complete Guide 2025",
  description:
    "Stop junk mail for a deceased person with this step-by-step guide. Register with the DMA Deceased Do Not Contact List, forward mail through USPS, and contact organizations directly.",
  keywords: [
    "stop mail for deceased person",
    "deceased do not contact list",
    "stop junk mail deceased",
    "DMA deceased",
    "how to stop mail for dead person",
    "deceased mail opt out",
    "forward deceased mail",
    "stop catalogs deceased",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "How long does it take for mail to stop after registering with DMA Deceased Do Not Contact List?",
    answer:
      "It typically takes 2-3 months for most mail to stop. Some mailings prepared in advance may continue arriving during this period as companies update their databases.",
  },
  {
    question: "Can I stop all mail for a deceased person?",
    answer:
      "You can stop most addressed mail (catalogs, offers, etc.) but you cannot stop EDDM 'Postal Customer' mail, which is delivered to every address regardless of the resident. This mail is addressed to the location, not the person.",
  },
  {
    question: "Do I need to be an executor to stop a deceased person's mail?",
    answer:
      "For basic opt-outs like the DMA Deceased Do Not Contact List, you don't need to be the executor. However, for mail forwarding through USPS, you'll need proof of executorship or administrator status.",
  },
  {
    question: "What if I keep receiving mail for a deceased person after opting out?",
    answer:
      "Contact the sending organizations directly with a copy of the death certificate. Most companies will remove the name within 30 days. For persistent senders, contact the Better Business Bureau.",
  },
  {
    question: "Is the DMA Deceased Do Not Contact List free?",
    answer:
      "The basic registration is free. There's a small $1 authentication fee to help verify your identity. This one-time registration protects the deceased's name for the life of the database.",
  },
];

const howToSteps = [
  {
    name: "Register with DMA Deceased Do Not Contact List",
    text: "Visit dmachoice.org and register the deceased person's name and address. This free service (with $1 authentication fee) notifies marketing companies to remove the name from their lists.",
    url: `${SITE_CONFIG.url}/stop-mail-deceased#step-1`,
  },
  {
    name: "Forward or Return Mail",
    text: "For first-class mail, write 'Deceased - Return to Sender' and place in mailbox. For formal forwarding, visit your local post office with executor documentation.",
    url: `${SITE_CONFIG.url}/stop-mail-deceased#step-2`,
  },
  {
    name: "Contact Organizations Directly",
    text: "Contact banks, subscription services, charities, and other organizations directly with a copy of the death certificate to request removal from their mailing lists.",
    url: `${SITE_CONFIG.url}/stop-mail-deceased#step-3`,
  },
  {
    name: "Use Additional Opt-Out Services",
    text: "Register with OptOutPrescreen.com to stop credit offers, and CatalogChoice.org to stop specific catalogs. These free services work for deceased persons too.",
    url: `${SITE_CONFIG.url}/stop-mail-deceased#step-4`,
  },
];

export default function StopMailDeceasedPage() {
  const articleSchema = generateArticleSchema({
    title: "How to Stop Mail for a Deceased Person",
    description: metadata.description as string,
    datePublished: "2025-01-01",
    dateModified: "2025-01-11",
    url: `${SITE_CONFIG.url}/stop-mail-deceased`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Stop Junk Mail", url: `${SITE_CONFIG.url}/reduce-junk-mail` },
    { name: "Deceased Mail", url: `${SITE_CONFIG.url}/stop-mail-deceased` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

  const howToSchema = generateHowToSchema({
    name: "How to Stop Mail for a Deceased Person",
    description: "Step-by-step guide to stop junk mail and unwanted mail for someone who has passed away.",
    totalTime: "PT20M",
    estimatedCost: { currency: "USD", value: "0-1" },
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
            Deceased Mail
          </span>
        </nav>

        {/* Last Updated */}
        <p className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          Last updated: January 2025
        </p>

        {/* TL;DR Box */}
        <TLDRBox summary="To stop mail for a deceased person, register their name with the DMA Deceased Do Not Contact List at dmachoice.org (free with $1 authentication). Write 'Deceased - Return to Sender' on first-class mail. Contact organizations directly with a copy of the death certificate. Most mail stops within 2-3 months. Note: EDDM 'Postal Customer' mail cannot be stopped as it's addressed to the location, not the person." />

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ color: "#111827" }}
        >
          How to Stop Mail for a Deceased Person
        </h1>

        <div className="prose max-w-none">
          <p style={{ color: "#374151" }}>
            Receiving mail addressed to a deceased loved one can be painful. Unfortunately, marketing databases often take months or even years to update. This guide will help you stop most unwanted mail for someone who has passed away.
          </p>

          {/* Quick Answer Box */}
          <div
            className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6"
            style={{ backgroundColor: "#eff6ff", borderColor: "#3b82f6" }}
          >
            <p className="font-semibold" style={{ color: "#1e40af" }}>Quick Answer:</p>
            <p style={{ color: "#1e3a8a" }}>
              Register with the <strong>DMA Deceased Do Not Contact List</strong> at dmachoice.org (free with $1 fee). This notifies participating companies to stop mailing to that name. Takes 2-3 months to take effect.
            </p>
          </div>

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
                  Register with DMA Deceased Do Not Contact List
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  <strong>dmachoice.org</strong> — Free registration with $1 authentication fee
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  The Direct Marketing Association (DMA) maintains a Deceased Do Not Contact List that notifies marketing companies to remove the deceased person&apos;s name from their mailing lists.
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
                    <li>Click on &quot;Register a Deceased Individual&quot;</li>
                    <li>Enter the deceased person&apos;s full name and last known address</li>
                    <li>Complete the $1 authentication process</li>
                    <li>Submit the registration</li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Time to take effect:</strong> 2-3 months
                  <br />
                  <strong>Cost:</strong> $1 (one-time fee)
                  <br />
                  <strong>Duration:</strong> Permanent
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
                  Forward or Return First-Class Mail
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  Handle important mail and return unwanted items
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    For First-Class Mail:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700 mb-4"
                    style={{ color: "#374151" }}
                  >
                    <li>Write &quot;Deceased - Return to Sender&quot; on the unopened envelope</li>
                    <li>Place it back in your mailbox</li>
                    <li>The sender will be notified and can update their records</li>
                  </ul>

                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    For Formal Mail Forwarding:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>Visit your local post office in person</li>
                    <li>Bring proof of executorship or administrator status</li>
                    <li>Bring a copy of the death certificate</li>
                    <li>Complete the mail forwarding form</li>
                  </ul>
                </div>
                <div
                  className="bg-amber-50 p-3 rounded text-sm"
                  style={{ backgroundColor: "#fffbeb" }}
                >
                  <strong style={{ color: "#92400e" }}>Note:</strong>{" "}
                  <span style={{ color: "#78350f" }}>
                    Standard mail and EDDM (addressed to &quot;Postal Customer&quot;) cannot be returned or forwarded. These are delivered to the address, not to a specific person.
                  </span>
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
                  Contact Organizations Directly
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  Request removal from mailing lists with documentation
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  For persistent mail from specific organizations, contact them directly with a copy of the death certificate. Most companies will remove the name within 30 days.
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    Priority Organizations to Contact:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li><strong>Banks and credit card companies</strong> — Call customer service</li>
                    <li><strong>Insurance companies</strong> — Contact policy services</li>
                    <li><strong>Subscription services</strong> — Cancel magazines, clubs</li>
                    <li><strong>Charities</strong> — Request removal from donor lists</li>
                    <li><strong>Catalog companies</strong> — Use CatalogChoice.org or call directly</li>
                    <li><strong>Professional associations</strong> — Cancel memberships</li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>What to include:</strong> Deceased&apos;s full name, address, account number (if known), and a copy of the death certificate (for financial institutions).
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
                  Use Additional Opt-Out Services
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  Register with other services to maximize coverage
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    Additional Services:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-2 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      <strong><a href="https://www.optoutprescreen.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>OptOutPrescreen.com</a></strong> — Stops pre-approved credit and insurance offers (free)
                    </li>
                    <li>
                      <strong><a href="https://www.catalogchoice.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>CatalogChoice.org</a></strong> — Stops specific catalogs (free)
                    </li>
                    <li>
                      <strong><a href="https://www.directmail.com/mail_preference/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" style={{ color: "#2563eb" }}>DirectMail.com</a></strong> — Marketing mail opt-out (free)
                    </li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  Register the deceased person&apos;s name and address with each service. Most accept registrations on behalf of deceased individuals.
                </p>
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
              What You Cannot Stop
            </h3>
            <p style={{ color: "#7f1d1d" }}>
              <strong>EDDM mail</strong> (Every Door Direct Mail) addressed to &quot;Postal Customer,&quot; &quot;Resident,&quot; or &quot;Current Occupant&quot; <strong>cannot be stopped</strong>. This mail is delivered to every address on a postal route, regardless of who lives there. There is currently no opt-out for EDDM mail.
            </p>
            <Link
              href="/what-is-eddm"
              className="inline-block mt-3 text-red-700 hover:text-red-800 font-semibold"
              style={{ color: "#b91c1c" }}
            >
              Learn more about EDDM mail →
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
                href="/stop-catalog-mail"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                How to Stop Catalog Mail →
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
