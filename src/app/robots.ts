import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants/statistics";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
