import { Metadata } from "next";
import Link from "next/link";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema/article";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for ZeroJunkMail.org. This website is for informational purposes only. Read our disclaimers, limitation of liability, and other legal terms.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const articleSchema = generateArticleSchema({
    title: "Terms and Conditions",
    description: metadata.description as string,
    datePublished: "2025-01-11",
    dateModified: "2025-01-11",
    url: `${SITE_CONFIG.url}/terms`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Terms and Conditions", url: `${SITE_CONFIG.url}/terms` },
  ]);

  return (
    <>
      <SchemaMarkup schema={[articleSchema, breadcrumbSchema]} />

      <article
        className="max-w-4xl mx-auto px-4 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          <Link
            href="/"
            className="hover:text-blue-600"
            style={{ color: "#6b7280" }}
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900" style={{ color: "#111827" }}>
            Terms and Conditions
          </span>
        </nav>

        <h1
          className="text-4xl font-bold text-gray-900 mb-2"
          style={{ color: "#111827" }}
        >
          Terms and Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-8" style={{ color: "#6b7280" }}>
          Last updated: January 11, 2025
        </p>

        <div className="prose max-w-none">
          {/* Important Notice Box */}
          <div
            className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8"
            style={{ backgroundColor: "#fffbeb", borderColor: "#fde68a" }}
          >
            <p
              className="text-amber-800 font-semibold mb-2"
              style={{ color: "#92400e" }}
            >
              Please Read Carefully
            </p>
            <p className="text-amber-700" style={{ color: "#b45309" }}>
              By accessing or using ZeroJunkMail.org, you agree to be bound by these
              Terms and Conditions. If you do not agree with any part of these terms,
              please do not use this website.
            </p>
          </div>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              1. Website Operator
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              ZeroJunkMail.org is built and operated by Screendoor Studio Inc. as a
              public service to raise awareness about United States Postal Service
              (USPS) advertising mail practices, specifically the Every Door Direct
              Mail (EDDM) program.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              This website serves as a companion to the petition hosted on Change.org
              titled &quot;Do Not Deliver: U.S. Postal Service EDDM &apos;junk mail&apos;&quot; and
              provides educational information to support that advocacy effort.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              2. Informational Purposes Only
            </h2>
            <div
              className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"
              style={{ backgroundColor: "#eff6ff", borderColor: "#3b82f6" }}
            >
              <p className="text-blue-800" style={{ color: "#1e40af" }}>
                <strong>
                  The information on this website is provided for general informational
                  and educational purposes only.
                </strong>
              </p>
            </div>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Nothing on this website constitutes, or is intended to constitute:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>Professional advice of any kind</li>
              <li>A solicitation or offer</li>
            </ul>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              You should consult with qualified professionals before taking any action
              based on information found on this website. The use or reliance on any
              information on this website is solely at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              3. No Affiliation
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              <strong>
                ZeroJunkMail.org is not affiliated with, endorsed by, sponsored by, or
                associated with:
              </strong>
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>United States Postal Service (USPS)</li>
              <li>Direct Marketing Association (DMA)</li>
              <li>Taradel LLC</li>
              <li>IMS (Intelligent Mail Solutions)</li>
              <li>DirectMail.com</li>
              <li>Any other direct mail, printing, or marketing companies</li>
              <li>Change.org or any petition platform</li>
              <li>
                Any companies, brands, organizations, or individuals depicted in
                images on this website
              </li>
              <li>
                Any companies, brands, or organizations mentioned or referenced in
                the content of this website
              </li>
            </ul>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Any reference to these entities is for informational and educational
              purposes only.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              4. Image and Content Disclaimer
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Images on this website may depict mail pieces, company logos, branded
              materials, or third-party products for illustrative and educational
              purposes only. Such depiction does not imply:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>Endorsement by or of any depicted entity</li>
              <li>Affiliation with any depicted entity</li>
              <li>Sponsorship by any depicted entity</li>
              <li>Any business relationship with any depicted entity</li>
            </ul>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              All trademarks, service marks, and logos displayed on this website are
              the property of their respective owners. Every Door Direct Mail&reg; and
              EDDM&reg; are registered trademarks of the United States Postal Service.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              5. Petition Disclaimer
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              This website promotes a petition hosted on Change.org. We are not
              affiliated with Change.org, Inc. or any of its subsidiaries.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              If you choose to sign the petition, your interaction is governed by{" "}
              <a
                href="https://www.change.org/policies/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Change.org&apos;s Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="https://www.change.org/policies/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Privacy Policy
              </a>
              , not by this website&apos;s terms. We are not responsible for any data
              collected by Change.org or actions taken on their platform.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              6. Disclaimer of Warranties
            </h2>
            <div
              className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <p className="text-gray-800" style={{ color: "#1f2937" }}>
                THIS WEBSITE AND ALL CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
                WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
              </p>
            </div>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              We do not warrant or guarantee that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>The information on this website is accurate, complete, or current</li>
              <li>The website will be available at all times without interruption</li>
              <li>The website is free of errors, viruses, or other harmful components</li>
              <li>Any results or outcomes will be achieved from using this information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              7. Limitation of Liability
            </h2>
            <div
              className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <p className="text-gray-800" style={{ color: "#1f2937" }}>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SCREENDOOR STUDIO
                INC., ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AFFILIATES, AND
                LICENSORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT
                NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, DATA, OR OTHER
                INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO
                OR USE OF (OR INABILITY TO ACCESS OR USE) THIS WEBSITE OR ANY CONTENT
                THEREON, REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF WE HAVE
                BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Some jurisdictions do not allow the exclusion or limitation of certain
              damages. In such jurisdictions, our liability shall be limited to the
              greatest extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              8. Indemnification
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              You agree to indemnify, defend, and hold harmless Screendoor Studio Inc.,
              its directors, officers, employees, agents, and affiliates from and
              against any and all claims, liabilities, damages, losses, costs, and
              expenses (including reasonable attorneys&apos; fees) arising out of or
              relating to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>Your use of or access to this website</li>
              <li>Your violation of these Terms and Conditions</li>
              <li>Your violation of any third-party rights</li>
              <li>
                Any claim that your use of this website caused damage to a third party
              </li>
            </ul>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              This indemnification obligation shall survive the termination of these
              Terms and Conditions and your use of this website.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              9. Third-Party Links
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              This website contains links to third-party websites and resources. These
              links are provided for your convenience and informational purposes only.
              We do not control, endorse, or assume responsibility for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4" style={{ color: "#374151" }}>
              <li>The content, accuracy, or opinions expressed on linked websites</li>
              <li>The privacy practices or security of linked websites</li>
              <li>Any products, services, or information offered by linked websites</li>
              <li>Any damages or losses arising from your use of linked websites</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              10. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              The content on this website, including text, graphics, and compilation of
              information, is compiled from publicly available sources and is provided
              for educational and informational purposes.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              All third-party trademarks, service marks, logos, and copyrighted
              materials appearing on this website are the property of their respective
              owners. Their use on this website does not imply any affiliation with or
              endorsement by those owners.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              11. Governing Law
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the State of Alabama, United States, without
              regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Any disputes arising under or in connection with these Terms and
              Conditions shall be subject to the exclusive jurisdiction of the courts
              located in the State of Alabama.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              12. Severability
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              If any provision of these Terms and Conditions is found to be
              unenforceable or invalid, that provision shall be limited or eliminated
              to the minimum extent necessary, and the remaining provisions shall
              continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              13. Changes to These Terms
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              We reserve the right to modify or replace these Terms and Conditions at
              any time at our sole discretion. Any changes will be posted on this page
              with an updated &quot;Last updated&quot; date.
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              Your continued use of this website after any changes constitutes your
              acceptance of the new Terms and Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2
              className="text-2xl font-semibold text-gray-900 mb-4"
              style={{ color: "#111827" }}
            >
              14. Contact Information
            </h2>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="text-gray-700 mb-4" style={{ color: "#374151" }}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:legal@screendoorstudio.com"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                legal@screendoorstudio.com
              </a>
            </p>
            <p className="text-gray-700" style={{ color: "#374151" }}>
              <strong>Website Operator:</strong> Screendoor Studio Inc.
            </p>
          </section>
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
            Related
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Privacy Policy &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                Contact Us &rarr;
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-blue-600 hover:text-blue-700"
                style={{ color: "#2563eb" }}
              >
                About This Site &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
