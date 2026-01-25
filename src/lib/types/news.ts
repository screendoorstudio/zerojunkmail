export interface ArchivedArticle {
  id: string;
  title: string;
  date: string;
  year: number;
  decade: string;
  source: string;
  url: string;
  description: string;
  category:
    | "legal"
    | "environmental"
    | "usps-business"
    | "consumer"
    | "fraud"
    | "legislative"
    | "eddm"
    | "industry";
  significance: "high" | "medium" | "low";
  keyQuote?: string;
}

export interface ArchiveMetadata {
  lastUpdated: string;
  totalArticles: number;
  dateRange: {
    earliest: string;
    latest: string;
  };
  categories: string[];
  decades: string[];
}

export interface NewsArchive {
  metadata: ArchiveMetadata;
  articles: ArchivedArticle[];
}

export const CATEGORY_LABELS: Record<string, string> = {
  legal: "Legal & Court Cases",
  environmental: "Environmental Impact",
  "usps-business": "USPS Business",
  consumer: "Consumer Issues",
  fraud: "Fraud & Scams",
  legislative: "Legislation & Policy",
  eddm: "EDDM Program",
  industry: "Industry Trends",
};

export const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  legal: { bg: "#fef3c7", text: "#92400e" },
  environmental: { bg: "#d1fae5", text: "#065f46" },
  "usps-business": { bg: "#dbeafe", text: "#1e40af" },
  consumer: { bg: "#fce7f3", text: "#9d174d" },
  fraud: { bg: "#fee2e2", text: "#991b1b" },
  legislative: { bg: "#e9d5ff", text: "#6b21a8" },
  eddm: { bg: "#ffedd5", text: "#9a3412" },
  industry: { bg: "#e5e7eb", text: "#374151" },
};
