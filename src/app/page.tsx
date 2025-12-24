import Link from "next/link";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { StatCard, StatGrid } from "@/components/content/StatCard";
import { STATISTICS, PETITION_URL } from "@/lib/constants/statistics";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            You Cannot Unsubscribe from{" "}
            <span className="text-red-400">Your Own Government&apos;s</span>{" "}
            Advertising Mail
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The USPS delivers billions of pieces of unsolicited advertising
            directly to your mailbox every year—and federal law says you have
            no right to stop it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Sign the Petition
            </a>
            <Link
              href="/what-is-eddm"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What is EDDM Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What is EDDM?
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800">
              <strong>Every Door Direct Mail (EDDM)</strong> is a USPS program
              that allows businesses to send advertising mail to every address
              in a postal route—without needing names or addresses. You know it
              as the mail marked <strong>&quot;ECRWSS&quot;</strong> or{" "}
              <strong>&quot;Postal Customer.&quot;</strong>
            </p>
          </div>
          <p className="text-gray-600 mb-6">
            Unlike addressed mail, EDDM cannot be refused or returned. The USPS
            considers it &quot;unaddressed mail&quot; and delivers it regardless of your
            preferences. There is no Do Not Mail registry, no opt-out form, and
            no legal recourse.
          </p>
          <div className="text-center">
            <Link
              href="/what-is-eddm"
              className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-2"
            >
              Learn how EDDM works
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            The True Cost of Junk Mail
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every year, junk mail causes immense environmental damage, costs
            taxpayers millions, and enables billions in fraud against seniors.
          </p>
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
              value={STATISTICS.disposalCost.shortValue}
              label={STATISTICS.disposalCost.label}
              description={STATISTICS.disposalCost.description}
              source={STATISTICS.disposalCost.source}
              color="amber"
            />
            <StatCard
              value={STATISTICS.thrownAway.shortValue}
              label={STATISTICS.thrownAway.label}
              description={STATISTICS.thrownAway.description}
              source={STATISTICS.thrownAway.source}
              color="red"
            />
            <StatCard
              value={STATISTICS.elderFraud.shortValue}
              label={STATISTICS.elderFraud.label}
              description={STATISTICS.elderFraud.description}
              source={STATISTICS.elderFraud.source}
              color="red"
            />
            <StatCard
              value={STATISTICS.water.shortValue}
              label={STATISTICS.water.label}
              description={STATISTICS.water.description}
              source={STATISTICS.water.source}
              color="blue"
            />
          </StatGrid>
          <div className="text-center mt-8">
            <Link
              href="/environmental-impact"
              className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-2"
            >
              See the full environmental impact
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why No Opt-Out Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Can&apos;t You Opt Out?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Federal Mailbox Monopoly
              </h3>
              <p className="text-gray-600">
                Federal law (18 U.S.C. 1725) gives the USPS exclusive access to
                your mailbox. While you own the box, only the Postal Service can
                use it—and they can put anything they want inside.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                &quot;Postal Customer&quot; Loophole
              </h3>
              <p className="text-gray-600">
                EDDM mail isn&apos;t addressed to you by name—it&apos;s addressed to
                &quot;Postal Customer.&quot; Since it&apos;s not technically &quot;your&quot; mail, you
                can&apos;t refuse or return it.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                USPS Revenue Dependency
              </h3>
              <p className="text-gray-600">
                The USPS earns billions annually from advertising mail. Creating
                an opt-out would directly reduce their revenue—so they have no
                incentive to offer one.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No Consumer Protection Law
              </h3>
              <p className="text-gray-600">
                Unlike email (CAN-SPAM) and phone calls (Do Not Call), there is
                no federal law requiring postal advertisers to honor opt-out
                requests.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/why-you-cant-opt-out"
              className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-2"
            >
              Read the full legal explanation
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Petition CTA Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <PetitionCTA variant="hero" />
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I put a &quot;No Junk Mail&quot; sign on my mailbox?
              </h3>
              <p className="text-gray-600">
                You can, but it has no legal effect. USPS carriers are
                instructed to deliver EDDM mail regardless of any signs or
                stickers on the mailbox.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What about the DMAchoice mail preference service?
              </h3>
              <p className="text-gray-600">
                DMAchoice only works for addressed mail from participating
                companies. It has zero effect on EDDM or any other saturation
                mail programs.
              </p>
            </div>
            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do other countries allow people to opt out?
              </h3>
              <p className="text-gray-600">
                Yes. Many European countries, including the Netherlands and
                Germany, have opt-in systems where you only receive advertising
                mail if you explicitly request it.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-2"
            >
              View all FAQs
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
