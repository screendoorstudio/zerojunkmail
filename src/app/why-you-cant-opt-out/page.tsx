import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateFAQSchema, FAQItem } from "@/lib/schema/faq";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Why You Can't Opt Out of USPS Junk Mail",
  description:
    "Learn why federal law prevents you from opting out of EDDM and USPS advertising mail. Understand the legal framework, mailbox monopoly, and why there's no 'Do Not Mail' registry.",
  keywords: [
    "opt out junk mail",
    "stop EDDM mail",
    "USPS advertising opt out",
    "mailbox monopoly",
    "18 USC 1725",
    "Do Not Mail registry",
    "refuse junk mail",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "Can I refuse EDDM mail at my mailbox?",
    answer:
      "No. EDDM mail is addressed to 'Postal Customer' rather than you personally, so you cannot legally refuse it. Postal carriers are instructed to deliver it regardless of any refusal attempts.",
  },
  {
    question: "Does the DMAchoice mail preference service stop EDDM?",
    answer:
      "No. DMAchoice only affects addressed mail from companies that voluntarily participate. It has zero effect on EDDM or any saturation mail programs.",
  },
  {
    question: "Can I put a 'No Junk Mail' sticker on my mailbox?",
    answer:
      "You can, but it has no legal effect. USPS carriers are required to deliver EDDM mail to every address and will ignore such stickers.",
  },
  {
    question: "Why is there a Do Not Call registry but no Do Not Mail registry?",
    answer:
      "The Do Not Call registry was created by the FTC under the Telemarketing Sales Rule. No equivalent law exists for postal advertising, and the USPS—which profits from advertising mail—has no incentive to create one.",
  },
];

export default function WhyYouCantOptOutPage() {
  const articleSchema = generateArticleSchema({
    title: "Why You Can't Opt Out of USPS Junk Mail",
    description: metadata.description as string,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/why-you-cant-opt-out`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Why You Can't Opt Out", url: `${SITE_CONFIG.url}/why-you-cant-opt-out` },
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
          <span className="text-gray-900">Why You Can&apos;t Opt Out</span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox
          summary="You cannot opt out of EDDM mail because: (1) federal law gives USPS exclusive access to your mailbox, (2) the mail is addressed to 'Postal Customer' not you personally, and (3) there is no Do Not Mail registry. The USPS has no incentive to create one because advertising mail generates billions in revenue."
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Why You Can&apos;t Opt Out of USPS Junk Mail
        </h1>

        <div className="prose max-w-none">
          <p>
            Unlike spam email, robocalls, or text message marketing—all of which
            have federal opt-out mechanisms—<strong>there is no legal way to stop
            USPS advertising mail from arriving in your mailbox</strong>. This
            isn&apos;t an oversight; it&apos;s by design.
          </p>

          {/* Image: EDDM sample showing addressing */}
          <div className="not-prose my-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Image
                  src="/images/junk-mail/eddm-sample-1.jpg"
                  alt="EDDM mail addressed to Postal Customer"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
                <p className="text-sm text-gray-500 mt-2" style={{ color: "#6b7280" }}>
                  EDDM mail addressed to &quot;Postal Customer&quot;—not you personally
                </p>
              </div>
              <div>
                <Image
                  src="/images/junk-mail/eddm-sample-2.jpg"
                  alt="Example of ECRWSS saturation mail"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
                <p className="text-sm text-gray-500 mt-2" style={{ color: "#6b7280" }}>
                  The ECRWSS label indicates saturation mail delivery
                </p>
              </div>
            </div>
          </div>

          <h2>The Federal Mailbox Monopoly</h2>
          <p>
            Under federal law (<strong>18 U.S.C. § 1725</strong>), your mailbox is
            legally reserved for the exclusive use of the United States Postal
            Service. While you own the physical mailbox, only the USPS and its
            carriers are legally permitted to place items inside it.
          </p>
          <p>
            This &quot;mailbox monopoly&quot; means:
          </p>
          <ul>
            <li>
              Only USPS can use your mailbox (violating this is a federal
              offense)
            </li>
            <li>
              The USPS has complete discretion over what gets delivered
            </li>
            <li>
              You cannot legally prevent any mail the USPS chooses to deliver
            </li>
          </ul>
          <p>
            The mailbox monopoly was originally intended to protect mail security
            and postal revenue. However, it now means you have no control over
            the advertising that fills your mailbox daily.
          </p>

          <h2>The &quot;Postal Customer&quot; Loophole</h2>
          <p>
            Traditional mail can be refused: you can write &quot;REFUSED&quot; on an
            envelope and return it to your carrier. However, this only works for
            mail that is <strong>addressed to you personally</strong>.
          </p>
          <p>
            EDDM mail exploits a critical loophole:
          </p>
          <ul>
            <li>
              It&apos;s addressed to &quot;Postal Customer,&quot; &quot;Resident,&quot; or &quot;Current
              Occupant&quot;
            </li>
            <li>Since it&apos;s not addressed to you, it&apos;s not legally &quot;your&quot; mail</li>
            <li>You cannot refuse mail that isn&apos;t addressed to you</li>
            <li>Carriers are instructed to deliver it regardless of objections</li>
          </ul>
          <p>
            This is not an accidental loophole—it&apos;s an intentional feature of
            the EDDM program design.
          </p>

          <h2>No Do Not Mail Registry Exists</h2>
          <p>
            The federal government has created consumer protection registries for
            other marketing channels:
          </p>
          <ul>
            <li>
              <strong>Do Not Call Registry (2003):</strong> Covers phone
              marketing
            </li>
            <li>
              <strong>CAN-SPAM Act (2003):</strong> Requires email opt-out
              mechanisms
            </li>
            <li>
              <strong>TCPA (1991):</strong> Restricts text message marketing
            </li>
          </ul>
          <p>
            Yet <strong>no equivalent protection exists for postal mail</strong>.
            Several &quot;Do Not Mail&quot; bills have been proposed in Congress over the
            years, but none have passed. Why?
          </p>

          <h2>Follow the Money: USPS Revenue Dependency</h2>
          <p>
            The USPS is not taxpayer-funded—it must generate its own revenue
            primarily through postage. As first-class mail volume has declined
            due to email and digital payments, advertising mail has become
            increasingly important:
          </p>
          <ul>
            <li>
              Marketing mail generates <strong>billions in annual revenue</strong>{" "}
              for USPS
            </li>
            <li>
              EDDM specifically is promoted as a growth product for the Postal
              Service
            </li>
            <li>
              Any opt-out mechanism would directly reduce this revenue stream
            </li>
          </ul>
          <p>
            The USPS has a fundamental conflict of interest: it is both the
            regulator of mail delivery and a direct beneficiary of advertising
            mail volume. Creating an opt-out would hurt its own bottom line.
          </p>

          <h2>Industry Lobbying</h2>
          <p>
            The direct mail industry is a powerful lobbying force. Organizations
            like the Data & Marketing Association (DMA) actively oppose Do Not
            Mail legislation, arguing that:
          </p>
          <ul>
            <li>Direct mail supports jobs in printing and postal industries</li>
            <li>Small businesses depend on EDDM for local advertising</li>
            <li>Consumers can simply &quot;throw away&quot; unwanted mail</li>
          </ul>
          <p>
            This lobbying has successfully blocked every Do Not Mail bill
            introduced in Congress.
          </p>

          <h2>What About Rowan v. Post Office?</h2>
          <p>
            You may have heard of the 1970 Supreme Court case{" "}
            <em>Rowan v. United States Post Office Department</em>, which allows
            individuals to block mail from specific senders. However, this law:
          </p>
          <ul>
            <li>
              Only applies to mail you personally find &quot;erotically arousing or
              sexually provocative&quot;
            </li>
            <li>Requires you to file paperwork for each individual sender</li>
            <li>Has been interpreted narrowly by the USPS</li>
            <li>Does not apply to EDDM or general advertising mail</li>
          </ul>
          <p>
            Rowan is occasionally cited as a solution, but it is not a practical
            mechanism for stopping unwanted advertising.
          </p>

          <h2>The DMAchoice Myth</h2>
          <p>
            The direct mail industry offers a service called{" "}
            <strong>DMAchoice</strong> that allows you to opt out of addressed
            mail from participating companies. However:
          </p>
          <ul>
            <li>
              It <strong>only affects addressed mail</strong> from companies that
              voluntarily participate
            </li>
            <li>
              It has <strong>zero effect on EDDM</strong> or any saturation mail
            </li>
            <li>Many major mailers do not participate</li>
            <li>It requires you to register and renew periodically</li>
          </ul>
          <p>
            DMAchoice is often promoted as a solution when it demonstrably is
            not. It does nothing to address the core problem of saturation
            advertising mail.
          </p>

          <h2>Other Countries Have Solved This</h2>
          <p>
            The inability to opt out is not inevitable. Other countries have
            implemented effective systems:
          </p>
          <ul>
            <li>
              <strong>Netherlands:</strong> Opt-in system with &quot;JA/JA&quot; stickers—
              you only receive advertising mail if you request it
            </li>
            <li>
              <strong>Germany:</strong> &quot;Keine Werbung&quot; (No Advertising) stickers
              are legally binding
            </li>
            <li>
              <strong>United Kingdom:</strong> Mail Preference Service covers most
              unaddressed mail
            </li>
          </ul>
          <p>
            These models prove that consumer choice and postal services can
            coexist. The US simply hasn&apos;t chosen to implement similar
            protections.
          </p>
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
                href="/what-is-eddm"
                className="text-blue-600 hover:text-blue-700"
              >
                What is EDDM? →
              </Link>
            </li>
            <li>
              <Link
                href="/legal-background"
                className="text-blue-600 hover:text-blue-700"
              >
                Legal Background and Regulations →
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className="text-blue-600 hover:text-blue-700"
              >
                Proposed Solutions →
              </Link>
            </li>
          </ul>
        </div>

        <PetitionCTA className="mt-12" />
      </article>
    </>
  );
}
