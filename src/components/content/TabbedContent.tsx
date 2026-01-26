"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabbedContentProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function TabbedContent({ tabs, defaultTab }: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div>
      {/* Tab Buttons */}
      <div
        className="flex flex-wrap gap-2 border-b border-gray-200 pb-2 mb-6"
        role="tablist"
        aria-label="Audience tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "shadow-sm"
                : ""
            }`}
            style={{
              backgroundColor: activeTab === tab.id ? "#2563eb" : "#f3f4f6",
              color: activeTab === tab.id ? "#ffffff" : "#374151",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="min-h-[200px]"
      >
        {activeContent}
      </div>
    </div>
  );
}
