import { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateFAQSchema, FAQItem } from "@/lib/schema/faq";
import { generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About Junk Mail",
  description:
    "Get answers to common questions about EDDM, USPS junk mail, opt-out options, and what you can do to reduce unwanted advertising mail.",
  keywords: [
    "junk mail FAQ",
    "EDDM questions",
    "stop junk mail",
    "mail opt out",
    "USPS advertising mail",
    "postal customer mail",
  ],
};

const faqsByCategory: { category: string; faqs: FAQItem[] }[] = [
  {
    category: "Understanding EDDM",
    faqs: [
      {
        question: "What is EDDM (Every Door Direct Mail)?",
        answer:
          "EDDM is a USPS program that allows businesses to send advertising mail to every address in a postal carrier route without needing names or individual addresses. It's the mail marked 'ECRWSS' or addressed to 'Postal Customer' that you receive regularly.",
      },
      {
        question: "What does ECRWSS mean on my mail?",
        answer:
          "ECRWSS stands for 'Enhanced Carrier Route Walking Sequence Saturation.' It indicates that the mail piece is being delivered to every address on a postal route—it's the technical designation for EDDM saturation mail.",
      },
      {
        question: "Why is my mail addressed to 'Postal Customer'?",
        answer:
          "Mail addressed to 'Postal Customer,' 'Resident,' or 'Current Occupant' is saturation mail. Advertisers pay to reach every address without needing individual names. This generic addressing is why you cannot refuse or return this mail.",
      },
      {
        question: "How much junk mail does the average American receive?",
        answer:
          "The average American household receives approximately 800+ pieces of junk mail per year, totaling around 41 pounds of paper. Nationally, the USPS delivers over 80 billion pieces of advertising mail annually.",
      },
    ],
  },
  {
    category: "Opt-Out Options",
    faqs: [
      {
        question: "Can I opt out of EDDM mail?",
        answer:
          "No. There is currently no legal mechanism to opt out of EDDM or saturation mail in the United States. Unlike spam email or robocalls, postal advertising has no federal opt-out registry.",
      },
      {
        question: "Can I put a 'No Junk Mail' sign on my mailbox?",
        answer:
          "You can, but it has no legal effect. USPS carriers are instructed to deliver EDDM mail to every address regardless of any signs, stickers, or requests from residents.",
      },
      {
        question: "Can I refuse EDDM mail and return it?",
        answer:
          "No. You can only refuse mail that is addressed to you personally. Since EDDM mail is addressed to 'Postal Customer' rather than your name, the USPS does not accept refusals.",
      },
      {
        question: "Does DMAchoice or CatalogChoice stop EDDM?",
        answer:
          "No. These services only affect addressed mail from participating companies. They have zero effect on EDDM, saturation mail, or any mail addressed to 'Postal Customer' or 'Resident.'",
      },
      {
        question: "What mail CAN I stop?",
        answer:
          "You can reduce some addressed junk mail using: OptOutPrescreen.com (credit/insurance offers), DMAchoice.org (participating company mail), and direct opt-out requests to individual companies. None of these affect EDDM.",
      },
    ],
  },
  {
    category: "Legal and Policy",
    faqs: [
      {
        question: "Why is there a Do Not Call registry but no Do Not Mail registry?",
        answer:
          "The Do Not Call registry was created by the FTC under specific telemarketing regulations. No equivalent law exists for postal advertising. The USPS, which profits from advertising mail, has no incentive to create one, and direct mail industry lobbying has blocked legislative attempts.",
      },
      {
        question: "Who controls my mailbox?",
        answer:
          "Legally, your mailbox is reserved for exclusive use by the USPS under federal law (18 U.S.C. § 1725). While you own the physical mailbox, only postal carriers may place items inside it, and you cannot restrict what the USPS delivers.",
      },
      {
        question: "Has anyone tried to create a Do Not Mail registry?",
        answer:
          "Yes. Several bills have been introduced in Congress over the years, but none have passed due to opposition from the direct mail industry and lack of political priority. The USPS itself has never supported such legislation.",
      },
      {
        question: "Do other countries allow people to opt out of junk mail?",
        answer:
          "Yes. The Netherlands uses an opt-in system where you only receive advertising mail if you display a 'JA/JA' sticker. Germany's 'Keine Werbung' (No Advertising) stickers are legally binding. The UK's Mail Preference Service covers most unaddressed mail.",
      },
    ],
  },
  {
    category: "Environmental Impact",
    faqs: [
      {
        question: "How many trees are cut down for junk mail?",
        answer:
          "Approximately 80-100 million trees are harvested annually to produce junk mail in the United States, according to the Center for Development of Recycling.",
      },
      {
        question: "What is the carbon footprint of junk mail?",
        answer:
          "Junk mail production and disposal generates approximately 51.5 million metric tons of CO2 equivalent emissions per year—equivalent to the annual emissions of about 11 million cars.",
      },
      {
        question: "How much junk mail goes directly to the trash?",
        answer:
          "Studies indicate that approximately 44% of junk mail is thrown away without ever being opened. The remainder is typically discarded shortly after minimal review.",
      },
      {
        question: "Is recycling junk mail a solution?",
        answer:
          "Recycling helps reduce landfill waste but doesn't address the upstream environmental damage: trees cut, water consumed, and emissions produced. Prevention is far more effective than recycling.",
      },
    ],
  },
  {
    category: "Taking Action",
    faqs: [
      {
        question: "What can I do about junk mail?",
        answer:
          "The most impactful actions are: 1) Sign and share the petition for a Do Not Mail registry, 2) Contact your congressional representatives, 3) Use available opt-out services for addressed mail, and 4) Raise awareness about this issue in your community.",
      },
      {
        question: "Where can I sign the petition?",
        answer:
          "You can sign the petition calling for USPS to create a Do Not Mail registry on Change.org. The petition link is available on our Take Action page.",
      },
      {
        question: "Who should I contact in Congress?",
        answer:
          "Contact both your House Representative and your two Senators. You can find their contact information at house.gov and senate.gov. Let them know you support legislation for a federal Do Not Mail registry.",
      },
    ],
  },
];

const allFaqs = faqsByCategory.flatMap((category) => category.faqs);

export default function FAQPage() {
  const faqSchema = generateFAQSchema(allFaqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "FAQ", url: `${SITE_CONFIG.url}/faq` },
  ]);

  return (
    <>
      <SchemaMarkup schema={[faqSchema, breadcrumbSchema]} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">FAQ</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>

        <p className="text-lg text-gray-600 mb-12">
          Find answers to common questions about EDDM, junk mail, opt-out
          options, and what you can do to help change the system.
        </p>

        {/* FAQ Categories */}
        {faqsByCategory.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            <FAQAccordion items={category.faqs} />
          </div>
        ))}

        {/* Still have questions */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Didn&apos;t find your answer?
          </h3>
          <p className="text-gray-600 mb-4">
            Check out our detailed pages for more information:
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/what-is-eddm"
                className="text-red-600 hover:text-red-700"
              >
                What is EDDM? →
              </Link>
            </li>
            <li>
              <Link
                href="/why-you-cant-opt-out"
                className="text-red-600 hover:text-red-700"
              >
                Why You Can&apos;t Opt Out →
              </Link>
            </li>
            <li>
              <Link
                href="/environmental-impact"
                className="text-red-600 hover:text-red-700"
              >
                Environmental Impact →
              </Link>
            </li>
            <li>
              <Link
                href="/take-action"
                className="text-red-600 hover:text-red-700"
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
