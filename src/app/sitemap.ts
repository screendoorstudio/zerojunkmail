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
    { path: "/take-action", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/reduce-junk-mail", priority: 0.9, changeFrequency: "monthly" as const },
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
