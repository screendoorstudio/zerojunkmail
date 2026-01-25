import { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/content/FAQAccordion";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateFAQSchema, FAQItem } from "@/lib/schema/faq";
import { generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Junk Mail FAQ: How to Stop Unwanted Mail | Common Questions Answered",
  description:
    "Get answers to common questions: How do I stop junk mail? What is ECRWSS? Can I opt out of EDDM? Why is there no Do Not Mail registry? Learn what works and what doesn't.",
  keywords: [
    "junk mail FAQ",
    "how to stop junk mail",
    "EDDM questions",
    "what is ECRWSS",
    "stop junk mail",
    "mail opt out",
    "USPS advertising mail",
    "postal customer mail",
    "do not mail registry",
    "optoutprescreen",
    "dmachoice",
    "can I refuse junk mail",
    "why do I get so much junk mail",
    "is junk mail legal",
    "stop credit card offers",
    "return to sender junk mail",
  ],
};

const faqsByCategory: { category: string; faqs: FAQItem[] }[] = [
  {
    category: "Understanding Junk Mail",
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
      {
        question: "Why do I get so much junk mail?",
        answer:
          "Companies get your address from public records, phone directories, credit applications, store purchases, sweepstakes entries, and data brokers who collect and sell personal information. Additionally, EDDM mail requires no personal data at all—if you have a mailbox, you receive it.",
      },
      {
        question: "What is saturation mail?",
        answer:
          "Saturation mail (also called saturation mailing) is advertising mail delivered to every address on a postal carrier route. EDDM is a type of saturation mail. The '90/75 rule' requires mailers to target at least 90% of residential addresses or 75% of all addresses to qualify for discounted saturation rates.",
      },
      {
        question: "What is USPS Marketing Mail?",
        answer:
          "USPS Marketing Mail (formerly called Standard Mail) is advertising mail that takes 3-10 days to deliver and qualifies for discounted postage rates. This includes catalogs, flyers, circulars, and promotional materials. It's the official postal term for most junk mail.",
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
      {
        question: "How do I stop junk mail permanently?",
        answer:
          "You can permanently reduce addressed junk mail by: 1) Visiting OptOutPrescreen.com and selecting 'Permanent Opt-Out' for credit offers, 2) Registering at DMAchoice.org ($4-6, lasts 10 years), 3) Opting out of data brokers. However, EDDM mail addressed to 'Postal Customer' cannot be permanently stopped—there is no legal mechanism to do so.",
      },
      {
        question: "Can I return junk mail to sender?",
        answer:
          "Only if it's addressed to you personally and unopened. Write 'Refused' or 'Return to Sender' and place it back in your mailbox. However, bulk mail (Standard Mail/Marketing Mail) is typically discarded rather than returned. Mail addressed to 'Postal Customer' or 'Resident' cannot be returned.",
      },
      {
        question: "Is OptOutPrescreen legitimate?",
        answer:
          "Yes. OptOutPrescreen.com is the official website run by Equifax, Experian, TransUnion, and Innovis—the major consumer credit bureaus. It's the only authorized way to opt out of prescreened credit and insurance offers. The phone number 1-888-5-OPTOUT (1-888-567-8688) is also legitimate.",
      },
      {
        question: "Is DMAchoice worth the fee?",
        answer:
          "For most people, yes. The $4-6 fee covers 10 years of registration and can reduce catalogs, credit offers, and marketing mail from DMA member companies. However, it doesn't stop EDDM mail, political mail, or mail from companies you've done business with.",
      },
    ],
  },
  {
    category: "Credit Card Offers",
    faqs: [
      {
        question: "How do I stop credit card offers in the mail?",
        answer:
          "Visit OptOutPrescreen.com or call 1-888-5-OPTOUT (1-888-567-8688). This free service stops Equifax, Experian, TransUnion, and Innovis from selling your data to credit card and insurance companies. You can opt out for 5 years online or permanently by mail.",
      },
      {
        question: "What are prescreened or pre-approved credit offers?",
        answer:
          "Prescreened (or pre-approved) offers are credit card and insurance solicitations based on your credit report. Credit bureaus sell lists of consumers who meet certain criteria to lenders, who then send 'pre-approved' offers. You can stop these at OptOutPrescreen.com.",
      },
      {
        question: "Why do I keep getting credit card offers after opting out?",
        answer:
          "It takes about 5 days for opt-out requests to process, but mailings prepared in advance may continue for several weeks. Also, OptOutPrescreen only stops prescreened offers from credit bureaus—you may still receive offers from companies you do business with or from lists obtained elsewhere.",
      },
      {
        question: "Does opting out of credit offers affect my credit score?",
        answer:
          "No. Opting out at OptOutPrescreen.com does not affect your credit score or credit history in any way. It also doesn't prevent you from applying for credit—it only stops unsolicited offers.",
      },
    ],
  },
  {
    category: "Catalogs and Coupon Mailers",
    faqs: [
      {
        question: "How do I stop catalogs from coming in the mail?",
        answer:
          "Use CatalogChoice.org (free) to opt out of specific catalogs—they have nearly 10,000 catalogs in their database. You can also register at DMAchoice.org ($4-6) to reduce catalogs from DMA member companies. For persistent catalogs, contact the company directly.",
      },
      {
        question: "How do I stop Valpak coupons?",
        answer:
          "Visit valpak.com and scroll to the bottom to find 'Address Removal' or go directly to valpak.com/remove-address. Note that Valpak opt-outs must be renewed every 3 years. It takes 6-12 weeks to stop receiving mailings.",
      },
      {
        question: "How do I stop RedPlum or Save mailers?",
        answer:
          "RedPlum is now called RetailMeNot Everyday. Visit save.com/mailing/delivery-options to opt out of their coupon mailers. It can take up to 6 weeks for mailings to stop.",
      },
      {
        question: "How do I stop phone book delivery?",
        answer:
          "Visit yellowpagesoptout.com to stop delivery from 158+ publishers nationwide. You can also call Yellowbook at 1-877-607-0775 or YP at 1-866-329-7118. It may take up to 12 weeks for delivery to stop.",
      },
    ],
  },
  {
    category: "Previous Residents and Deceased",
    faqs: [
      {
        question: "How do I stop mail for previous residents?",
        answer:
          "For first-class mail, write 'Return to Sender - No Longer at This Address' and place it back in your mailbox. For standard mail, mark it 'Refused.' Register the previous resident's name at DMAchoice.org if possible. Put a note for your carrier listing only the names that should receive mail at your address.",
      },
      {
        question: "How do I stop mail for a deceased person?",
        answer:
          "Register the deceased at the DMA Deceased Do Not Contact List (ims-dm.com/cgi/ddnc.php). Write 'Deceased - Return to Sender' on first-class mail. Contact individual senders directly, especially for credit cards and financial institutions. It may take 90+ days for mailings to fully stop.",
      },
      {
        question: "Can I forward a deceased person's mail?",
        answer:
          "Yes, you can file a Change of Address form at USPS.com or your local post office. However, USPS only forwards mail for one year. After that, you'll need to contact senders directly to stop receiving mail.",
      },
    ],
  },
  {
    category: "Political and Charity Mail",
    faqs: [
      {
        question: "How do I stop political mail?",
        answer:
          "Political mail is largely exempt from opt-out services due to First Amendment protections. You can try voting early (campaigns often stop mailing once they see you've voted), contacting campaigns directly, or checking if your voter registration has an opt-out option. Unfortunately, there's no guaranteed method.",
      },
      {
        question: "How do I stop charity mail and donation requests?",
        answer:
          "Contact charities directly to request removal from their mailing lists. When donating, specify 'Do not share my information.' Use DMAchoice.org to opt out of the charity category. Be aware that charities often share donor lists, so one donation can lead to many solicitations.",
      },
      {
        question: "Can charities still send mail even if I opt out?",
        answer:
          "Yes. Charitable organizations are not required to honor DMAchoice opt-outs, though many do voluntarily. Your most effective option is to contact each charity directly and request removal. Note that solicitations may continue for 6+ months due to pre-planned mailings.",
      },
    ],
  },
  {
    category: "Data Brokers and Privacy",
    faqs: [
      {
        question: "What are data brokers and how do they cause junk mail?",
        answer:
          "Data brokers are companies that collect, aggregate, and sell personal information. They gather data from public records, purchases, surveys, and online activity, then sell it to marketers. Opting out of major data brokers like Acxiom, Epsilon, and Oracle can reduce junk mail at the source.",
      },
      {
        question: "How do I opt out of data brokers?",
        answer:
          "Visit each broker's opt-out page: Acxiom (acxiom.com/optout), Epsilon (optout@epsilon.com), Oracle (email privacy@oracle.com), and LexisNexis (consumer.risk.lexisnexis.com). For comprehensive coverage, services like DeleteMe or Incogni will submit requests on your behalf for a fee.",
      },
      {
        question: "Do data removal services like DeleteMe help with junk mail?",
        answer:
          "Yes, partially. Services like DeleteMe, Incogni, and Kanary remove your information from data broker databases, which can reduce targeted junk mail over time. However, they cannot stop EDDM mail, and results take several months to materialize.",
      },
    ],
  },
  {
    category: "Legal and Policy",
    faqs: [
      {
        question: "Is junk mail legal in the United States?",
        answer:
          "Yes. Direct mail advertising is legal and regulated primarily by the Deceptive Mail Prevention and Enforcement Act (DMPEA). Unlike email spam (regulated by CAN-SPAM), postal advertising has no required opt-out mechanism except for prescreened credit offers.",
      },
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
          "Yes. Since 2007, at least 19 state legislatures have introduced Do Not Mail legislation, and several federal bills have been proposed. None have passed due to opposition from the direct mail industry and lack of political priority. The USPS itself has never supported such legislation.",
      },
      {
        question: "Do other countries allow people to opt out of junk mail?",
        answer:
          "Yes. The Netherlands uses an opt-in system where you only receive advertising mail if you display a 'JA/JA' sticker. Germany's 'Keine Werbung' (No Advertising) stickers are legally binding. The UK's Mail Preference Service covers most unaddressed mail.",
      },
    ],
  },
  {
    category: "Apps and Services",
    faqs: [
      {
        question: "What is PaperKarma and does it work?",
        answer:
          "PaperKarma is a mobile app ($3.99/month) that lets you photograph junk mail and they submit opt-out requests on your behalf. They report 90% effectiveness for addressed mail. However, like all services, PaperKarma cannot stop EDDM mail addressed to 'Postal Customer.'",
      },
      {
        question: "Is there a free alternative to PaperKarma?",
        answer:
          "Yes. CatalogChoice.org is a free nonprofit service that helps you opt out of catalogs. You can also use OptOutPrescreen.com (free), DMAchoice.org ($4-6 for 10 years), and DirectMail.com (free) to cover most of what PaperKarma does.",
      },
      {
        question: "What is the best junk mail app?",
        answer:
          "For convenience, PaperKarma is popular but costs $3.99/month. For free options, combine CatalogChoice.org, OptOutPrescreen.com, and DMAchoice.org. No app can stop EDDM mail, so manage expectations accordingly.",
      },
    ],
  },
  {
    category: "Environmental Impact",
    faqs: [
      {
        question: "How many trees are cut down for junk mail?",
        answer:
          "Approximately 80-100 million trees are harvested annually to produce junk mail in the United States, according to the Center for Development of Recycling. These trees, if left standing, would absorb approximately 1.7 million tons of CO2 per year.",
      },
      {
        question: "What is the carbon footprint of junk mail?",
        answer:
          "Junk mail production and disposal generates approximately 51.5 million metric tons of CO2 equivalent emissions per year—equivalent to the annual emissions of about 11 million cars. This includes manufacturing, printing, transportation, and disposal.",
      },
      {
        question: "How much water does junk mail production use?",
        answer:
          "Junk mail production consumes approximately 28 billion gallons of water annually in the United States, according to ForestEthics. This includes water used in paper manufacturing and printing processes.",
      },
      {
        question: "How much junk mail goes directly to the trash?",
        answer:
          "Studies indicate that approximately 44% of junk mail is thrown away without ever being opened. The EPA estimates that 4 million tons of junk mail end up in landfills each year, with 60% of unsolicited mail never being recycled.",
      },
      {
        question: "Is recycling junk mail a solution?",
        answer:
          "Recycling helps reduce landfill waste but doesn't address the upstream environmental damage: trees cut, water consumed, and emissions produced. Prevention is far more effective than recycling. Additionally, junk mail inks often contain heavy metals that complicate recycling.",
      },
      {
        question: "How much do taxpayers pay to dispose of junk mail?",
        answer:
          "Local governments spend approximately $320 million per year disposing of junk mail that ends up in municipal waste streams. Transporting junk mail costs an additional $550 million annually. These costs are borne by taxpayers, not mailers.",
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
      {
        question: "Why should I care about junk mail?",
        answer:
          "Beyond personal inconvenience, junk mail destroys 100 million trees annually, generates 51.5 million metric tons of CO2, costs taxpayers $320 million in disposal, and enables $4.8 billion in elder fraud. It's a systemic problem that affects everyone.",
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

      <article className="max-w-4xl mx-auto px-4 py-12 bg-white" style={{ backgroundColor: '#ffffff' }}>
        {/* Breadcrumb */}
        <nav className="text-sm mb-8" style={{ color: '#6b7280' }}>
          <Link href="/" className="hover:text-blue-600" style={{ color: '#6b7280' }}>
            Home
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#111827' }}>FAQ</span>
        </nav>

        <h1 className="text-4xl font-bold mb-6" style={{ color: '#111827' }}>
          Frequently Asked Questions
        </h1>

        <p className="text-lg mb-12" style={{ color: '#4b5563' }}>
          Find answers to common questions about EDDM, junk mail, opt-out
          options, and what you can do to help change the system.
        </p>

        {/* FAQ Categories */}
        {faqsByCategory.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#111827' }}>
              {category.category}
            </h2>
            <FAQAccordion items={category.faqs} />
          </div>
        ))}

        {/* Still have questions */}
        <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: '#f3f4f6' }}>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#111827' }}>
            Didn&apos;t find your answer?
          </h3>
          <p className="mb-4" style={{ color: '#4b5563' }}>
            Check out our detailed pages for more information:
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/what-is-eddm"
                className="hover:text-blue-700"
                style={{ color: '#2563eb' }}
              >
                What is EDDM? →
              </Link>
            </li>
            <li>
              <Link
                href="/why-you-cant-opt-out"
                className="hover:text-blue-700"
                style={{ color: '#2563eb' }}
              >
                Why You Can&apos;t Opt Out →
              </Link>
            </li>
            <li>
              <Link
                href="/environmental-impact"
                className="hover:text-blue-700"
                style={{ color: '#2563eb' }}
              >
                Environmental Impact →
              </Link>
            </li>
            <li>
              <Link
                href="/take-action"
                className="hover:text-blue-700"
                style={{ color: '#2563eb' }}
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
