import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // All pages with their priorities and change frequencies
  const pages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/what-is-eddm", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/why-you-cant-opt-out", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/environmental-impact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/legal-background", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/news", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/news/archive", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/take-action", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/legislators", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/eddm-do-not-deliver", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/reduce-junk-mail", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/opt-out-credit-offers", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/stop-catalog-mail", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/stop-mail-deceased", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/data-broker-opt-out", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
