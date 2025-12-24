import Link from "next/link";
import { PETITION_URL, SITE_CONFIG } from "@/lib/constants/statistics";

const footerLinks = [
  {
    title: "Learn",
    links: [
      { href: "/what-is-eddm", label: "What is EDDM?" },
      { href: "/why-you-cant-opt-out", label: "Why No Opt-Out?" },
      { href: "/environmental-impact", label: "Environmental Impact" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Take Action",
    links: [
      { href: "/take-action", label: "How to Help" },
      { href: PETITION_URL, label: "Sign Petition", external: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/legal-background", label: "Legal Background" },
      { href: "/solutions", label: "Proposed Solutions" },
      { href: "/about", label: "About Us" },
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
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-red-500">Zero</span>
              <span className="text-2xl font-bold text-white">Junk Mail</span>
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
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
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
          <p className="mt-2">
            This site is dedicated to protecting consumers from unwanted advertising mail.
          </p>
        </div>
      </div>
    </footer>
  );
}
