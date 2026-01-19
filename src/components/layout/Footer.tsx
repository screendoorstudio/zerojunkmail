"use client";

import Link from "next/link";
import Image from "next/image";
import { PETITION_URL, SITE_CONFIG } from "@/lib/constants/statistics";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

function trackPetitionClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "petition_click", {
      event_category: "conversion",
      event_label: "footer",
      page_location: window.location.pathname,
    });
  }
}

const footerLinks = [
  {
    title: "Learn",
    links: [
      { href: "/what-is-eddm", label: "What is EDDM?" },
      { href: "/why-you-cant-opt-out", label: "Why No Opt-Out?" },
      { href: "/environmental-impact", label: "Environmental Impact" },
      { href: "/legal-background", label: "Legal Background" },
      { href: "/news", label: "News" },
      { href: "/faq", label: "FAQ" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Take Action",
    links: [
      { href: "/eddm-do-not-deliver", label: "Do Not Deliver Tool" },
      { href: "/take-action", label: "How to Help" },
      { href: PETITION_URL, label: "Sign Petition", external: true },
      { href: "/reduce-junk-mail", label: "Stop Junk Mail Guide" },
      { href: "/opt-out-credit-offers", label: "Stop Credit Offers" },
      { href: "/stop-catalog-mail", label: "Stop Catalogs" },
      { href: "/stop-mail-deceased", label: "Deceased Mail" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: PETITION_URL, label: "Sign the Petition", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Zero Junk Mail"
                width={160}
                height={44}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-xs text-gray-500">
              Advocating for consumer rights and environmental protection.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={trackPetitionClick}
                        className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="mt-3 text-xs">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms and Conditions
            </Link>
          </p>
          <p className="mt-4 text-xs text-gray-600 max-w-3xl mx-auto">
            ZeroJunkMail.org is for informational purposes only and is in no way
            associated or affiliated with the USPS, DMA, Taradel, IMS,
            DirectMail.com or their customers. Information compiled within this
            site is publicly available. Every Door Direct Mail® and EDDM® are
            registered trademarks of the United States Postal Service.
          </p>
          <p className="mt-4 text-xs text-gray-600">
            Made by{" "}
            <a
              href="https://screendoorstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Screendoor Studio Inc.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
