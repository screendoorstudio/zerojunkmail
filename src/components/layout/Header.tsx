"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PETITION_URL } from "@/lib/constants/statistics";

const navLinks = [
  { href: "/what-is-eddm", label: "What is EDDM?" },
  { href: "/why-you-cant-opt-out", label: "Why No Opt-Out?" },
  { href: "/environmental-impact", label: "Environmental Impact" },
  { href: "/take-action", label: "Take Action" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                style={{ color: "#4b5563" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
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
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                  style={{ color: "#4b5563" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={PETITION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
              >
                Sign Petition
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
