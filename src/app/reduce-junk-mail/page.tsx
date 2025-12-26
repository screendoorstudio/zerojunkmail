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
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "How to Reduce Junk Mail: Complete Opt-Out Guide",
  description:
    "Step-by-step guide to reducing junk mail. Opt out of credit offers, catalogs, coupon mailers, and charity requests. While EDDM mail cannot be stopped, these tips can significantly reduce your mailbox clutter.",
  keywords: [
    "reduce junk mail",
    "stop junk mail",
    "opt out mail",
    "DMAchoice",
    "OptOutPrescreen",
    "CatalogChoice",
    "stop catalogs",
    "stop credit card offers",
    "junk mail opt out",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "How long does it take for junk mail to stop after opting out?",
    answer:
      "Most opt-out services take 30-90 days to fully take effect. Some mailings prepared in advance may continue arriving during this period. Credit card offers from OptOutPrescreen typically stop within a few weeks.",
  },
  {
    question: "Will these services stop all my junk mail?",
    answer:
      "No. These services can reduce addressed junk mail by 80-90%, but they cannot stop EDDM (Every Door Direct Mail) addressed to 'Postal Customer' or 'Resident.' There is currently no way to opt out of EDDM.",
  },
  {
    question: "Is DMAchoice worth the fee?",
    answer:
      "For most people, yes. The $4-6 fee covers 10 years of opt-out service and can significantly reduce catalogs, credit offers, and marketing mail from DMA member companies. However, it does not affect EDDM or non-member mailers.",
  },
  {
    question: "Can I opt out of political mail?",
    answer:
      "Political mail is largely exempt from opt-out services. Political campaigns and advocacy groups are not required to honor DMAchoice or other opt-out requests. You can try contacting campaigns directly, but compliance is voluntary.",
  },
  {
    question: "What about mail for previous residents?",
    answer:
      "Write 'Return to Sender - No Longer at This Address' on first-class mail and place it back in your mailbox. For standard mail, you can mark it 'Refused' but the USPS may not return it. Register the previous resident's name at DMAchoice if possible.",
  },
];

export default function ReduceJunkMailPage() {
  const articleSchema = generateArticleSchema({
    title: "How to Reduce Junk Mail: Complete Opt-Out Guide",
    description: metadata.description as string,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/reduce-junk-mail`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Reduce Junk Mail", url: `${SITE_CONFIG.url}/reduce-junk-mail` },
  ]);

  const faqSchema = generateFAQSchema(faqs);

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
          <span className="text-gray-900" style={{ color: "#111827" }}>
            Reduce Junk Mail
          </span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox summary="While you cannot stop EDDM mail addressed to 'Postal Customer,' you can significantly reduce other junk mail. Start with OptOutPrescreen.com (free, stops credit offers) and DMAchoice.org ($4-6, stops catalogs and marketing mail). Add CatalogChoice.org (free) for specific catalogs and contact coupon mailers directly. Expect 30-90 days for results." />

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ color: "#111827" }}
        >
          How to Reduce Junk Mail: A Complete Guide
        </h1>

        {/* Important Warning */}
        <div
          className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-lg"
          style={{ backgroundColor: "#fffbeb" }}
        >
          <h2
            className="text-lg font-bold text-amber-800 mb-2"
            style={{ color: "#92400e" }}
          >
            Important: These Tips Won&apos;t Stop EDDM Mail
          </h2>
          <p style={{ color: "#78350f" }}>
            The services listed below can reduce <strong>addressed</strong> junk
            mail—mail with your name on it. However,{" "}
            <strong>none of these services can stop EDDM</strong> (Every Door
            Direct Mail) addressed to &quot;Postal Customer,&quot;
            &quot;Resident,&quot; or &quot;Current Occupant.&quot; There is
            currently no legal way to opt out of EDDM. That&apos;s why we need a{" "}
            <Link href="/take-action" className="underline font-semibold">
              Do Not Mail registry
            </Link>
            .
          </p>
        </div>

        <div className="prose max-w-none">
          <p style={{ color: "#374151" }}>
            While we fight for a comprehensive Do Not Mail registry, you can
            take steps to reduce the junk mail you receive. Follow these steps
            in order for maximum effect.
          </p>

          {/* STEP 1 */}
          <div
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
                  Stop Credit Card &amp; Insurance Offers
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  <strong>OptOutPrescreen.com</strong> — Free, official service
                  from the credit bureaus
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  This is the{" "}
                  <strong>single most effective step</strong> you can take.
                  OptOutPrescreen stops Equifax, Experian, Innovis, and
                  TransUnion from selling your data to credit card and insurance
                  companies who send &quot;pre-approved&quot; offers.
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
                      <strong>Online:</strong> Visit{" "}
                      <a
                        href="https://www.optoutprescreen.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        OptOutPrescreen.com
                      </a>
                    </li>
                    <li>
                      <strong>Phone:</strong> Call 1-888-5-OPT-OUT
                      (1-888-567-8688)
                    </li>
                    <li>
                      <strong>Options:</strong> 5-year opt-out (online) or
                      permanent opt-out (requires mailed form)
                    </li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Time to take effect:</strong> 5 days to process; may
                  take several weeks for offers to stop
                  <br />
                  <strong>Cost:</strong> Free
                </p>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div
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
                  Reduce Marketing Mail &amp; Catalogs
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  <strong>DMAchoice.org</strong> — Industry opt-out service ($4-6
                  fee)
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  The Direct Marketing Association (now part of ANA) operates
                  DMAchoice, which allows you to opt out of mail from member
                  companies. While it&apos;s controversial that you must pay to
                  stop unsolicited mail, it does filter out a significant
                  amount.
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
                      <strong>Online:</strong> Visit{" "}
                      <a
                        href="https://www.dmachoice.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        DMAchoice.org
                      </a>{" "}
                      (costs $4 for 10 years)
                    </li>
                    <li>
                      <strong>By Mail:</strong> Send name, address, signature,
                      and $6 check to: DMAchoice, P.O. Box 900, Cos Cob, CT 06807
                    </li>
                    <li>
                      Choose to stop: Credit Offers, Catalogs, Magazine Offers,
                      Other Mail Offers, or all categories
                    </li>
                  </ul>
                </div>
                <div
                  className="bg-amber-50 p-3 rounded text-sm mb-4"
                  style={{ backgroundColor: "#fffbeb" }}
                >
                  <strong style={{ color: "#92400e" }}>Note:</strong>{" "}
                  <span style={{ color: "#78350f" }}>
                    DMAchoice also offers a free{" "}
                    <strong>Deceased Do Not Contact List</strong> and{" "}
                    <strong>Caretaker opt-out</strong> for stopping mail to
                    deceased persons or dependents.
                  </span>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Time to take effect:</strong> 2-3 months
                  <br />
                  <strong>Cost:</strong> $4 online / $6 by mail (lasts 10 years)
                  <br />
                  <strong>Limitation:</strong> Only affects DMA member companies;
                  does NOT stop EDDM
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div
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
                  Register with DirectMail.com
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  <strong>DirectMail.com/mail_preference</strong> — Free,
                  supplemental registry
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  DirectMail.com is a marketing agency that started their own Do
                  Not Mail engine. As a DMA member, their list may overlap with
                  DMAchoice, but registering with both provides additional
                  coverage.
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
                        href="https://www.directmail.com/mail_preference/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        DirectMail.com/mail_preference
                      </a>
                    </li>
                    <li>Enter your name and address</li>
                    <li>Submit the form</li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Cost:</strong> Free
                </p>
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div
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
                  Stop Specific Catalogs
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  <strong>CatalogChoice.org</strong> — Free nonprofit service
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  CatalogChoice is a free service from The Story of Stuff
                  Project that lets you opt out of specific catalogs one at a
                  time. They have nearly 10,000 mailers in their database.
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
                    <li>Submit opt-out requests for each</li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Cost:</strong> Free (premium MailStop Shield service
                  available for data broker opt-outs)
                  <br />
                  <strong>Bonus:</strong> Free iPhone app available
                </p>
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div
            className="not-prose my-10 p-6 bg-red-50 rounded-xl border border-red-100"
            style={{ backgroundColor: "#fef2f2", borderColor: "#fee2e2" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: "#dc2626" }}
              >
                5
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ color: "#111827" }}
                >
                  Stop Coupon Mailers
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  Opt out of Valpak, RedPlum/RetailMeNot, and other coupon
                  packets
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    Valpak (Blue Envelope Coupons):
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700 mb-4"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      <strong>Online:</strong>{" "}
                      <a
                        href="https://www.valpak.com/remove-address"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        Valpak.com/remove-address
                      </a>
                    </li>
                    <li>
                      <strong>Phone:</strong> 1-800-237-6266
                    </li>
                    <li>
                      <strong>Email:</strong> Customer_service@valpak.com
                    </li>
                  </ul>

                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    RedPlum / RetailMeNot Everyday / Save.com:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      Visit the Valassis/Vericast opt-out page (search for
                      &quot;Valassis opt out&quot;)
                    </li>
                    <li>
                      <strong>Phone:</strong> 1-844-940-7283
                    </li>
                    <li>Use the exact address shown on the mailer</li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Time to take effect:</strong> 6-12 weeks
                </p>
              </div>
            </div>
          </div>

          {/* STEP 6 */}
          <div
            className="not-prose my-10 p-6 bg-teal-50 rounded-xl border border-teal-100"
            style={{ backgroundColor: "#f0fdfa", borderColor: "#ccfbf1" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: "#0d9488" }}
              >
                6
              </div>
              <div className="flex-1">
                <h2
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ color: "#111827" }}
                >
                  Reduce Charity &amp; Nonprofit Mail
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{ color: "#4b5563" }}
                >
                  Contact charities directly or donate anonymously
                </p>
                <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
                  Charity mail is harder to stop because nonprofits often share
                  donor lists. Once you donate to one organization, your
                  information may be shared with dozens of others.
                </p>
                <div
                  className="bg-white p-4 rounded-lg mb-4"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-semibold text-gray-900 mb-2"
                    style={{ color: "#111827" }}
                  >
                    How to Reduce Charity Mail:
                  </h4>
                  <ul
                    className="list-disc pl-5 space-y-1 text-gray-700"
                    style={{ color: "#374151" }}
                  >
                    <li>
                      <strong>Contact charities directly:</strong> Call, email,
                      or write asking to be removed from their mailing list
                    </li>
                    <li>
                      <strong>Request no list sharing:</strong> When you donate,
                      include a note: &quot;Do not rent, sell, or trade my
                      information&quot;
                    </li>
                    <li>
                      <strong>Donate anonymously:</strong> Use a donor-advised
                      fund (DAF) to give without sharing your address
                    </li>
                    <li>
                      <strong>Use DMAchoice:</strong> Select the
                      &quot;Charity&quot; category when registering
                    </li>
                    <li>
                      <strong>File a complaint:</strong> Contact the{" "}
                      <a
                        href="https://give.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                        style={{ color: "#2563eb" }}
                      >
                        BBB Wise Giving Alliance
                      </a>{" "}
                      if a charity ignores your removal request
                    </li>
                  </ul>
                </div>
                <p
                  className="text-sm text-gray-500"
                  style={{ color: "#6b7280" }}
                >
                  <strong>Note:</strong> Charities you&apos;ve donated to in the
                  past 2 years are exempt from DMAchoice—contact them directly.
                </p>
              </div>
            </div>
          </div>

          {/* BONUS: Apps */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-12 mb-4"
            style={{ color: "#111827" }}
          >
            Bonus: Mobile Apps
          </h2>

          <div
            className="not-prose bg-gray-50 p-6 rounded-xl border border-gray-200 mb-8"
            style={{ backgroundColor: "#f9fafb", borderColor: "#e5e7eb" }}
          >
            <h3
              className="text-xl font-bold text-gray-900 mb-2"
              style={{ color: "#111827" }}
            >
              PaperKarma App
            </h3>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              PaperKarma is a mobile app that makes opting out easy: snap a
              photo of unwanted mail and they contact the sender on your behalf.
              Available for iOS and Android.
            </p>
            <ul
              className="list-disc pl-5 space-y-1 text-gray-700 mb-4"
              style={{ color: "#374151" }}
            >
              <li>Works with 100,000+ mailers</li>
              <li>4 free opt-out requests, then subscription required</li>
              <li>
                <strong>Cannot stop EDDM</strong> (&quot;Postal Customer&quot;
                mail)
              </li>
            </ul>
            <a
              href="https://www.paperkarma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
              style={{ color: "#2563eb" }}
            >
              Visit PaperKarma.com →
            </a>
          </div>

          {/* Additional Tips */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-12 mb-4"
            style={{ color: "#111827" }}
          >
            Additional Tips
          </h2>

          <div className="space-y-4">
            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900 mb-1"
                style={{ color: "#111827" }}
              >
                Return to Sender
              </h4>
              <p style={{ color: "#374151" }}>
                For first-class mail, write &quot;Refused - Return to
                Sender&quot; and place it back in your mailbox. This does{" "}
                <strong>not</strong> work for EDDM or standard mail.
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900 mb-1"
                style={{ color: "#111827" }}
              >
                Use USPS Informed Delivery
              </h4>
              <p style={{ color: "#374151" }}>
                Sign up for free at{" "}
                <a
                  href="https://informeddelivery.usps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  InformedDelivery.usps.com
                </a>{" "}
                to see scans of incoming mail before it arrives. While this
                doesn&apos;t stop junk mail, it helps you identify what&apos;s
                coming.
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900 mb-1"
                style={{ color: "#111827" }}
              >
                Hold Mail When Traveling
              </h4>
              <p style={{ color: "#374151" }}>
                Use{" "}
                <a
                  href="https://www.usps.com/manage/hold-mail.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: "#2563eb" }}
                >
                  USPS Hold Mail
                </a>{" "}
                (free, 3-30 days) to prevent your mailbox from overflowing with
                junk while you&apos;re away.
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900 mb-1"
                style={{ color: "#111827" }}
              >
                Opt Out of Data Brokers
              </h4>
              <p style={{ color: "#374151" }}>
                Data brokers like Acxiom, Epsilon, and CoreLogic sell your
                information to mailers. Opting out of their databases can reduce
                junk mail at the source. Services like DeleteMe can help
                automate this process.
              </p>
            </div>

            <div
              className="bg-gray-50 p-4 rounded-lg"
              style={{ backgroundColor: "#f9fafb" }}
            >
              <h4
                className="font-semibold text-gray-900 mb-1"
                style={{ color: "#111827" }}
              >
                Be Patient
              </h4>
              <p style={{ color: "#374151" }}>
                It typically takes <strong>30-90 days</strong> for opt-out
                requests to take full effect. Mailers prepare campaigns months
                in advance, so you may continue receiving mail for a while after
                opting out.
              </p>
            </div>
          </div>

          {/* Quick Reference Table */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-12 mb-4"
            style={{ color: "#111827" }}
          >
            Quick Reference: All Opt-Out Services
          </h2>
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
                  What It Stops
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
                  Website
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  OptOutPrescreen
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Credit/insurance offers
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3 border-b">
                  <a
                    href="https://www.optoutprescreen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    optoutprescreen.com
                  </a>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  DMAchoice
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Catalogs, marketing mail
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  $4-6
                </td>
                <td className="px-4 py-3 border-b">
                  <a
                    href="https://www.dmachoice.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    dmachoice.org
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  DirectMail.com
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Marketing mail
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3 border-b">
                  <a
                    href="https://www.directmail.com/mail_preference/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    directmail.com
                  </a>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  CatalogChoice
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Specific catalogs
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3 border-b">
                  <a
                    href="https://www.catalogchoice.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    catalogchoice.org
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Valpak Opt-Out
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Blue envelope coupons
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Free
                </td>
                <td className="px-4 py-3 border-b">
                  <a
                    href="https://www.valpak.com/remove-address"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    valpak.com
                  </a>
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f9fafb" }}>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  PaperKarma
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Various (photo-based)
                </td>
                <td className="px-4 py-3 border-b" style={{ color: "#374151" }}>
                  Subscription
                </td>
                <td className="px-4 py-3 border-b">
                  <a
                    href="https://www.paperkarma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    style={{ color: "#2563eb" }}
                  >
                    paperkarma.com
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  className="px-4 py-3 font-semibold bg-red-50"
                  style={{ color: "#991b1b", backgroundColor: "#fef2f2" }}
                >
                  EDDM Mail
                </td>
                <td
                  className="px-4 py-3 bg-red-50"
                  style={{ color: "#991b1b", backgroundColor: "#fef2f2" }}
                >
                  &quot;Postal Customer&quot; mail
                </td>
                <td
                  className="px-4 py-3 font-semibold bg-red-50"
                  style={{ color: "#991b1b", backgroundColor: "#fef2f2" }}
                >
                  —
                </td>
                <td
                  className="px-4 py-3 font-semibold bg-red-50"
                  style={{ color: "#991b1b", backgroundColor: "#fef2f2" }}
                >
                  No opt-out exists
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Final CTA */}
        <div
          className="mt-12 bg-gray-900 text-white p-8 rounded-xl"
          style={{ backgroundColor: "#111827" }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "#ffffff" }}
          >
            The Real Solution: A Do Not Mail Registry
          </h3>
          <p
            className="text-gray-300 mb-6"
            style={{ color: "#d1d5db" }}
          >
            These tips can reduce your junk mail, but they can&apos;t stop EDDM—
            the mail addressed to &quot;Postal Customer&quot; that makes up a
            huge portion of mailbox clutter. The only real solution is a federal
            Do Not Mail registry. Sign the petition to make it happen.
          </p>
          <Link
            href="/take-action"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
          >
            Take Action Now
          </Link>
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
            Learn More
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/what-is-eddm"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                What is EDDM? →
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
            <li>
              <Link
                href="/take-action"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Take Action →
              </Link>
            </li>
          </ul>
        </div>

        <PetitionCTA className="mt-12" />
      </article>
    </>
  );
}
