import { Metadata } from "next";
import Link from "next/link";
import { TLDRBox } from "@/components/content/TLDRBox";
import { PetitionCTA } from "@/components/cta/PetitionCTA";
import { TrackedPetitionLink } from "@/components/cta/TrackedPetitionLink";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Take Action to Stop Junk Mail",
  description:
    "Sign the petition for a Do Not Mail registry, contact your representatives, and join the movement to give Americans the right to opt out of USPS advertising mail.",
  keywords: [
    "stop junk mail",
    "do not mail petition",
    "contact representatives junk mail",
    "mail preference service",
    "reduce junk mail",
  ],
};

export default function TakeActionPage() {
  const articleSchema = generateArticleSchema({
    title: "Take Action to Stop Junk Mail",
    description: metadata.description as string,
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    url: `${SITE_CONFIG.url}/take-action`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Take Action", url: `${SITE_CONFIG.url}/take-action` },
  ]);

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema]} />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Take Action</span>
        </nav>

        {/* TL;DR Box */}
        <TLDRBox summary="The most impactful thing you can do is sign the petition demanding a Do Not Mail registry, then share it with others. You can also contact your representatives, use partial opt-out services for addressed mail, and spread awareness about this issue." />

        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Take Action to Stop Junk Mail
        </h1>

        <div className="prose max-w-none">
          <p>
            While there is currently no legal way to stop EDDM mail, your voice
            still matters. Collective action has changed laws before—and it can
            again. Here&apos;s what you can do to help end unwanted advertising
            mail.
          </p>
        </div>

        {/* Priority Action: Petition */}
        <div className="my-12">
          <PetitionCTA variant="hero" />
        </div>

        <div className="prose max-w-none">
          <h2>1. Sign and Share the Petition</h2>
          <p>
            The petition calling for a USPS Do Not Mail registry is the most
            direct way to show demand for change. Every signature adds pressure
            on Congress and the Postal Service.
          </p>
          <ul>
            <li>
              <TrackedPetitionLink
                label="take-action-inline"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Sign the petition on Change.org
              </TrackedPetitionLink>
            </li>
            <li>Share it on social media with your own story</li>
            <li>
              Email the link to friends and family who also receive unwanted
              mail
            </li>
            <li>
              Post about junk mail frustration in community forums and
              neighborhood groups
            </li>
          </ul>

          <h2>2. Contact Your Representatives</h2>
          <p>
            Congressional action is ultimately required to create a Do Not Mail
            registry. Your representatives need to hear that this matters to
            their constituents.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold text-gray-900 mb-4">
              Sample Message to Congress
            </h4>
            <p className="text-gray-600 text-sm italic">
              &quot;I am writing to request that you support legislation creating a
              federal Do Not Mail registry, similar to the Do Not Call registry.
              Americans deserve the right to opt out of unsolicited advertising
              delivered by our own Postal Service. EDDM junk mail wastes 100
              million trees annually and costs taxpayers $320 million in disposal
              fees. Please support consumer choice and environmental protection
              by backing a Do Not Mail registry.&quot;
            </p>
          </div>
          <p>Contact your representatives:</p>
          <ul>
            <li>
              <a
                href="https://www.house.gov/representatives/find-your-representative"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find your House Representative
              </a>
            </li>
            <li>
              <a
                href="https://www.senate.gov/senators/senators-contact.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find your Senators
              </a>
            </li>
          </ul>

          <h2>3. Reduce Addressed Junk Mail</h2>
          <p>
            While you cannot stop EDDM mail, you can reduce addressed junk mail
            through these services:
          </p>
          <ul>
            <li>
              <strong>
                <a
                  href="https://www.optoutprescreen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OptOutPrescreen.com
                </a>
              </strong>{" "}
              - Stop prescreened credit card and insurance offers (5 years or
              permanent)
            </li>
            <li>
              <strong>
                <a
                  href="https://www.dmachoice.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DMAchoice.org
                </a>
              </strong>{" "}
              - Reduce addressed mail from participating companies (does NOT
              affect EDDM)
            </li>
            <li>
              <strong>Catalog Choice</strong> - Request removal from catalog
              mailing lists
            </li>
          </ul>
          <p className="text-blue-600 font-semibold">
            Important: None of these services stop EDDM or saturation mail. They
            only affect mail addressed to you personally.
          </p>

          <h2>4. Document and Raise Awareness</h2>
          <p>Help build public awareness of the junk mail problem:</p>
          <ul>
            <li>
              Take photos of your weekly junk mail pile and share on social
              media
            </li>
            <li>
              Calculate how much mail you receive annually (average household
              receives 800+ pieces of junk mail per year)
            </li>
            <li>
              Write letters to the editor of your local newspaper
            </li>
            <li>
              Request that local environmental groups add junk mail to their
              advocacy priorities
            </li>
          </ul>

          <h2>5. Support Organizations Fighting Junk Mail</h2>
          <p>
            Several organizations advocate for reduced junk mail and consumer
            mail choice:
          </p>
          <ul>
            <li>Forest protection organizations</li>
            <li>Consumer privacy advocates</li>
            <li>Environmental sustainability groups</li>
            <li>Municipal waste reduction initiatives</li>
          </ul>

          <h2>6. Talk to Your Local Officials</h2>
          <p>
            Municipal governments bear the cost of junk mail disposal. Local
            officials may be receptive to:
          </p>
          <ul>
            <li>
              Passing resolutions supporting a federal Do Not Mail registry
            </li>
            <li>
              Calculating and publicizing local junk mail disposal costs
            </li>
            <li>
              Including junk mail reduction in sustainability plans
            </li>
          </ul>

          <h2>What Happens Next?</h2>
          <p>
            Change takes time, but it is possible. The Do Not Call registry was
            once considered impossible due to telemarketing industry opposition—
            yet public demand ultimately prevailed. The same can happen for
            postal advertising.
          </p>
          <p>Every action helps:</p>
          <ul>
            <li>Petition signatures demonstrate public demand</li>
            <li>Constituent contacts influence congressional priorities</li>
            <li>Media attention builds momentum</li>
            <li>Awareness changes the conversation</li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="mt-12 bg-gray-900 text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Start Now</h3>
          <p className="text-gray-300 mb-6">
            The most important step is the first one. Sign the petition today
            and add your voice to the growing demand for mail choice.
          </p>
          <TrackedPetitionLink
            label="take-action-final"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Sign the Petition Now
          </TrackedPetitionLink>
        </div>

        {/* Related Links */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Learn More
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/environmental-impact"
                className="text-blue-600 hover:text-blue-700"
              >
                Environmental Impact →
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
            <li>
              <Link
                href="/faq"
                className="text-blue-600 hover:text-blue-700"
              >
                Frequently Asked Questions →
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
