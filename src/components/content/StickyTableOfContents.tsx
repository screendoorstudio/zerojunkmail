"use client";

import { useState, useEffect } from "react";
import { TOCSection } from "@/data/legislative-toolkit";

interface StickyTableOfContentsProps {
  sections: TOCSection[];
}

export default function StickyTableOfContents({ sections }: StickyTableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const activeTitle = sections.find((s) => s.id === activeSection)?.shortTitle || sections[0]?.shortTitle || "Navigate";

  return (
    <>
      {/* Desktop: Fixed Sidebar */}
      <nav
        className="hidden lg:block fixed left-4 top-24 w-52 z-40"
        style={{ backgroundColor: "#ffffff", color: "#111827" }}
        aria-label="Table of contents"
      >
        <div
          className="p-4 rounded-lg shadow-lg border border-gray-200"
          style={{ backgroundColor: "#ffffff" }}
        >
          <h2
            className="text-sm font-semibold uppercase tracking-wide mb-4"
            style={{ color: "#374151" }}
          >
            Contents
          </h2>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    activeSection === section.id
                      ? "font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                  style={{
                    backgroundColor: activeSection === section.id ? "#eff6ff" : "transparent",
                    color: activeSection === section.id ? "#2563eb" : "#374151",
                  }}
                >
                  {section.shortTitle || section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile: Sticky Dropdown */}
      <div
        className="lg:hidden sticky top-0 z-50 border-b border-gray-200"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="px-4 py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-full px-4 py-2 rounded-lg border border-gray-300"
            style={{ backgroundColor: "#f9fafb", color: "#111827" }}
            aria-expanded={isOpen}
            aria-controls="mobile-toc"
          >
            <span className="text-sm font-medium">
              Jump to: <span style={{ color: "#2563eb" }}>{activeTitle}</span>
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#6b7280" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              id="mobile-toc"
              className="absolute left-4 right-4 mt-2 rounded-lg shadow-lg border border-gray-200 max-h-[60vh] overflow-y-auto"
              style={{ backgroundColor: "#ffffff" }}
            >
              <ul className="py-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        activeSection === section.id
                          ? "font-semibold"
                          : ""
                      }`}
                      style={{
                        backgroundColor: activeSection === section.id ? "#eff6ff" : "transparent",
                        color: activeSection === section.id ? "#2563eb" : "#374151",
                      }}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
