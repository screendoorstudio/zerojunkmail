import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { StatCard, StatGrid } from "@/components/content/StatCard";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateFAQSchema, FAQItem } from "@/lib/schema/faq";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG, STATISTICS } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Environmental Impact of Junk Mail | 100 Million Trees Destroyed",
  description:
    "Junk mail destroys 100 million trees annually, produces 51.5 million metric tons of CO2, and consumes 28 billion gallons of water. 44% is thrown away unopened. Learn the full environmental cost.",
  keywords: [
    "junk mail environmental impact",
    "how many trees for junk mail",
    "junk mail trees",
    "100 million trees junk mail",
    "junk mail carbon footprint",
    "junk mail waste statistics",
    "junk mail landfill",
    "paper waste junk mail",
    "junk mail pollution",
    "advertising mail waste",
    "mail recycling",
    "sustainability",
    "junk mail water consumption",
    "taxpayer disposal cost junk mail",
  ],
};

const faqs: FAQItem[] = [
  {
    question: "How many trees are cut down for junk mail each year?",
    answer:
      "Approximately 80-100 million trees are cut down annually to produce junk mail in the United States, according to the Center for Development of Recycling. If these trees were left standing, they would absorb approximately 1.7 million tons of CO2 per year.",
  },
  {
    question: "What is the carbon footprint of junk mail?",
    answer:
      "Junk mail production, transportation, and disposal generates approximately 51.5 million metric tons of CO2 equivalent greenhouse gases per year—equivalent to the annual emissions of about 11 million cars, according to VoLo Foundation research.",
  },
  {
    question: "How much water does junk mail production use?",
    answer:
      "Junk mail production consumes approximately 28 billion gallons of water annually in the United States, according to ForestEthics. This water is used in paper manufacturing, pulping, and printing processes.",
  },
  {
    question: "How much junk mail ends up in landfills?",
    answer:
      "Approximately 44% of junk mail is thrown away without ever being opened. The EPA estimates that 4 million tons of junk mail end up in landfills each year, with 60% of unsolicited mail never being recycled.",
  },
  {
    question: "How much do taxpayers pay to dispose of junk mail?",
    answer:
      "Local governments spend approximately $320 million per year disposing of junk mail that ends up in municipal waste streams. Transporting junk mail costs an additional $550 million annually. These costs are borne by taxpayers, not the companies sending the mail.",
  },
  {
    question: "Is recycling junk mail a solution?",
    answer:
      "Recycling helps reduce landfill waste, but it doesn't address the upstream environmental damage: trees cut, water consumed, and emissions produced in manufacturing. Additionally, junk mail inks often contain heavy metals that complicate recycling. Prevention is far more effective than recycling.",
  },
];

export default function EnvironmentalImpactPage() {
  const articleSchema = generateArticleSchema({
    title: "Environmental Impact of Junk Mail",
    description: metadata.description as string,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/environmental-impact`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Environmental Impact", url: `${SITE_CONFIG.url}/environmental-impact` },
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
          <span className="text-gray-900">Environmental Impact</span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox
          summary="Junk mail is an environmental catastrophe: 100 million trees destroyed, 51.5 million metric tons of CO2 emissions, and 28 billion gallons of water consumed—every year. 44% is thrown away without being opened, and taxpayers spend $320 million annually to dispose of it."
          keyStatistic={{
            value: STATISTICS.trees.shortValue,
            label: "trees/year",
          }}
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          The Environmental Impact of Junk Mail
        </h1>

        <div className="prose max-w-none">
          <p>
            Every year, the junk mail industry leaves an enormous environmental
            footprint that most Americans never see. The average American household receives <strong>848 pieces of junk mail annually</strong>—equivalent to 1.5 trees per household. Globally, <strong>33% of all delivered mail is junk mail</strong>. From the forests cleared to
            produce paper, to the fuel burned transporting billions of mail
            pieces, to the energy consumed disposing of unwanted advertisements—
            the true cost of unsolicited mail extends far beyond your mailbox.
          </p>
          <p>
            Perhaps most absurdly, Americans spend an estimated <strong>8 months of their lives</strong> sorting through junk mail. That&apos;s time stolen from families, hobbies, and meaningful work—all so companies can send advertisements most people don&apos;t want.
          </p>
        </div>

        {/* Image Grid: Environmental impact visuals */}
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Image
                src="/images/mail-carrier-junk.jpg"
                alt="Mail carrier delivering a bag full of junk mail"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/junk-mail-pile-large.jpg"
                alt="Large pile of discarded junk mail and advertising"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
            <div className="relative">
              <Image
                src="/images/junk-mail-landfill.png"
                alt="Junk mail piling up at a landfill facility"
                width={400}
                height={300}
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center" style={{ color: "#6b7280" }}>
            From delivery to landfill: the lifecycle of unwanted advertising mail
          </p>
        </div>

        {/* Statistics Grid */}
        <StatGrid>
          <StatCard
            value={STATISTICS.trees.shortValue}
            label={STATISTICS.trees.label}
            description={STATISTICS.trees.description}
            source={STATISTICS.trees.source}
            color="green"
          />
          <StatCard
            value={STATISTICS.co2.shortValue}
            label={STATISTICS.co2.label}
            description={STATISTICS.co2.description}
            source={STATISTICS.co2.source}
            color="blue"
          />
          <StatCard
            value={STATISTICS.water.shortValue}
            label={STATISTICS.water.label}
            description={STATISTICS.water.description}
            source={STATISTICS.water.source}
            color="blue"
          />
          <StatCard
            value={STATISTICS.thrownAway.shortValue}
            label={STATISTICS.thrownAway.label}
            description={STATISTICS.thrownAway.description}
            source={STATISTICS.thrownAway.source}
            color="red"
          />
          <StatCard
            value={STATISTICS.disposalCost.shortValue}
            label={STATISTICS.disposalCost.label}
            description={STATISTICS.disposalCost.description}
            source={STATISTICS.disposalCost.source}
            color="amber"
          />
          <StatCard
            value="5.6M"
            label="tons of landfill waste"
            description="Annual junk mail ending up in landfills"
            source="EPA"
            color="red"
          />
        </StatGrid>

        <div className="prose max-w-none mt-12">
          <h2>Forest Destruction</h2>
          <p>
            The paper industry&apos;s demand for wood pulp drives significant
            deforestation. To produce the approximately 80-100 billion pieces of
            junk mail sent each year in the US:
          </p>
          <ul>
            <li>
              <strong>80-100 million trees</strong> are harvested annually
            </li>
            <li>
              Old-growth and biodiverse forests are replaced with tree
              plantations
            </li>
            <li>
              Forest ecosystems that took centuries to develop are destroyed in
              days
            </li>
            <li>Wildlife habitat is permanently altered or eliminated</li>
          </ul>
          <p>
            This deforestation occurs despite the fact that nearly half of all
            junk mail is thrown away without ever being opened.
          </p>

          <h2>Carbon Emissions</h2>
          <p>
            The junk mail lifecycle produces approximately{" "}
            <strong>51.5 million metric tons of CO2 equivalent</strong> emissions
            annually. This comes from:
          </p>
          <ul>
            <li>
              <strong>Paper manufacturing:</strong> Energy-intensive pulping,
              bleaching, and processing
            </li>
            <li>
              <strong>Printing:</strong> Ink production, printing presses, and
              facility operations
            </li>
            <li>
              <strong>Transportation:</strong> Moving materials between
              suppliers, printers, post offices, and homes
            </li>
            <li>
              <strong>Disposal:</strong> Collection, sorting, and either
              landfilling or recycling
            </li>
          </ul>
          <p>
            To put this in perspective, 51.5 million metric tons of CO2 is
            equivalent to the annual emissions of approximately{" "}
            <strong>11 million passenger vehicles</strong>.
          </p>

          <h2>Water Consumption</h2>
          <p>
            Paper production is extraordinarily water-intensive. The junk mail
            industry consumes approximately{" "}
            <strong>28 billion gallons of water</strong> annually—enough to fill over <strong>42,000 Olympic swimming pools</strong>. This water is used for:
          </p>
          <ul>
            <li>Pulping and fiber processing</li>
            <li>Washing and bleaching paper</li>
            <li>Cooling manufacturing equipment</li>
            <li>Printing and finishing</li>
          </ul>
          <p>
            In an era of increasing water scarcity and drought, this consumption
            for unwanted advertisements is difficult to justify.
          </p>

          {/* Inline image */}
          <div className="not-prose my-8 float-right ml-6 mb-4 w-full md:w-1/2">
            <Image
              src="/images/junk-mail/eddm-pile-2.jpg"
              alt="Stack of unread EDDM advertising mail"
              width={400}
              height={300}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <h2>Waste Stream Impact</h2>
          <p>
            Despite recycling programs, junk mail creates a massive waste
            management burden:
          </p>
          <ul>
            <li>
              <strong>44% is thrown away unopened</strong>—never even glanced at
            </li>
            <li>
              Much of the remainder is discarded after minimal review
            </li>
            <li>
              Municipalities spend an estimated <strong>$320 million</strong>{" "}
              annually on collection and processing
            </li>
            <li>
              Approximately <strong>5.6 million tons</strong> still end up in
              landfills
            </li>
          </ul>

          <h2>The Hidden Chemical Burden</h2>
          <p>
            Beyond trees, water, and carbon, junk mail production involves
            numerous chemicals:
          </p>
          <ul>
            <li>
              <strong>Chlorine compounds</strong> for bleaching paper
            </li>
            <li>
              <strong>Petroleum-based inks</strong> containing volatile organic
              compounds (VOCs)
            </li>
            <li>
              <strong>Plastics</strong> in window envelopes and protective
              coatings
            </li>
            <li>
              <strong>Adhesives</strong> that complicate recycling
            </li>
          </ul>
          <p>
            These materials can contaminate waterways and complicate waste
            processing.
          </p>

          <h2>Recycling Is Not the Solution</h2>
          <p>
            While recycling junk mail is better than landfilling it, recycling
            alone cannot solve the problem:
          </p>
          <ul>
            <li>
              Recycling still requires energy, water, and transportation
            </li>
            <li>
              Paper can only be recycled 5-7 times before fibers become too
              degraded
            </li>
            <li>
              Many junk mail pieces contain materials that cannot be recycled
              (plastic windows, glossy coatings)
            </li>
            <li>
              Recycling rates for mail remain far below 100%
            </li>
          </ul>
          <p>
            The environmental hierarchy is clear:{" "}
            <strong>prevention beats recycling</strong>. Not creating the waste
            in the first place is always more effective than managing it
            afterward.
          </p>

          <h2>What Would Opt-Out Mean for the Environment?</h2>
          <p>
            If Americans could opt out of unwanted advertising mail, even
            conservative estimates suggest:
          </p>
          <ul>
            <li>
              <strong>30-50 million fewer trees</strong> cut annually
            </li>
            <li>
              <strong>25+ million metric tons less CO2</strong> emitted
            </li>
            <li>
              <strong>14+ billion gallons of water</strong> saved
            </li>
            <li>
              <strong>$150+ million</strong> in taxpayer disposal costs avoided
            </li>
          </ul>
          <p>
            Other countries have demonstrated that opt-out systems work.
            Amsterdam&apos;s opt-in system reduced advertising mail volume by over
            30%, with corresponding environmental benefits.
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
                href="/reduce-junk-mail"
                className="text-blue-600 hover:text-blue-700"
              >
                How to Stop Junk Mail →
              </Link>
            </li>
            <li>
              <Link
                href="/take-action"
                className="text-blue-600 hover:text-blue-700"
              >
                Take Action →
              </Link>
            </li>
            <li>
              <Link
                href="/why-you-cant-opt-out"
                className="text-blue-600 hover:text-blue-700"
              >
                Why You Can&apos;t Opt Out →
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
