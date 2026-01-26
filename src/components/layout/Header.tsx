"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { PETITION_URL } from "@/lib/constants/statistics";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

function trackPetitionClick(location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "petition_click", {
      event_category: "conversion",
      event_label: location,
      page_location: window.location.pathname,
    });
  }
}

interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  {
    label: "Learn",
    children: [
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
    label: "Take Action",
    children: [
      // { href: "/eddm-do-not-deliver", label: "Do Not Deliver Tool" }, // Hidden until verification system added
      { href: "/take-action", label: "How to Help" },
      { href: PETITION_URL, label: "Sign Petition", external: true },
      { href: "/legislators", label: "Legislative Toolkit" },
      { href: "/reduce-junk-mail", label: "Stop Junk Mail Guide" },
      { href: "/opt-out-credit-offers", label: "Stop Credit Offers" },
      { href: "/stop-catalog-mail", label: "Stop Catalogs" },
      { href: "/data-broker-opt-out", label: "Data Broker Opt-Out" },
      { href: "/stop-mail-deceased", label: "Deceased Mail" },
    ],
  },
  {
    label: "About",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: PETITION_URL, label: "Sign the Petition", external: true },
    ],
  },
];

function DropdownMenu({
  item,
  isOpen,
  onToggle,
  onClose,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
        style={{ color: "#4b5563" }}
        aria-expanded={isOpen}
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && item.children && (
        <div
          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
        >
          {item.children.map((child) =>
            child.external ? (
              <a
                key={child.href}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                style={{ color: "#4b5563" }}
                onClick={() => {
                  trackPetitionClick("header-dropdown");
                  onClose();
                }}
              >
                {child.label}
                <svg
                  className="w-3 h-3 text-gray-400"
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
                key={child.href}
                href={child.href!}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                style={{ color: "#4b5563" }}
                onClick={onClose}
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedMenus, setMobileExpandedMenus] = useState<string[]>([]);

  const toggleMobileMenu = (label: string) => {
    setMobileExpandedMenus((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  return (
    <header
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
      style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Zero Junk Mail"
                width={180}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <DropdownMenu
                key={item.label}
                item={item}
                isOpen={openDropdown === item.label}
                onToggle={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label
                  )
                }
                onClose={() => setOpenDropdown(null)}
              />
            ))}
            <a
              href={PETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPetitionClick("header-button")}
              className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            >
              Sign Petition
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
              style={{ color: "#4b5563" }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-gray-200 py-4"
            style={{ backgroundColor: "#ffffff", borderColor: "#e5e7eb" }}
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleMobileMenu(item.label)}
                    className="flex items-center justify-between w-full text-left text-gray-700 font-medium py-2"
                    style={{ color: "#374151" }}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileExpandedMenus.includes(item.label)
                          ? "rotate-180"
                          : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileExpandedMenus.includes(item.label) && item.children && (
                    <div className="pl-4 space-y-2 mt-2 border-l-2 border-gray-200 ml-2">
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 py-1"
                            style={{ color: "#4b5563" }}
                            onClick={() => {
                              trackPetitionClick("mobile-dropdown");
                              setMobileMenuOpen(false);
                            }}
                          >
                            {child.label}
                            <svg
                              className="w-3 h-3 text-gray-400"
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
                            key={child.href}
                            href={child.href!}
                            className="block text-gray-600 hover:text-gray-900 py-1"
                            style={{ color: "#4b5563" }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href={PETITION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPetitionClick("mobile-button")}
                  className="block bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
                >
                  Sign Petition
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
