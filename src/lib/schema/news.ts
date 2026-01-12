import { SITE_CONFIG } from "../constants/statistics";

export interface NewsArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  image?: string;
  author?: string;
  publisher?: string;
}

// Generate schema for a single news article
export function generateNewsArticleSchema({
  headline,
  description,
  datePublished,
  url,
  image,
  author,
  publisher,
}: NewsArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: headline,
    description: description,
    datePublished: datePublished,
    url: url,
    image: image,
    author: author
      ? {
          "@type": "Organization",
          name: author,
        }
      : undefined,
    publisher: publisher
      ? {
          "@type": "Organization",
          name: publisher,
        }
      : {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
  };
}

// Generate CollectionPage schema for the news archive
export function generateCollectionPageSchema(
  articles: NewsArticleSchemaProps[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Junk Mail & EDDM News Archive",
    description:
      "Latest news about junk mail, EDDM, and USPS direct mail programs. Environmental impact, consumer complaints, industry trends, and legislative updates.",
    url: `${SITE_CONFIG.url}/news`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "NewsArticle",
          headline: article.headline,
          description: article.description,
          datePublished: article.datePublished,
          url: article.url,
        },
      })),
    },
  };
}

// Generate WebPage schema for the news page
export function generateNewsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Junk Mail & EDDM News | Zero Junk Mail",
    description:
      "Latest news about junk mail, EDDM, and USPS direct mail programs. Environmental impact, consumer complaints, industry trends, and legislative updates.",
    url: `${SITE_CONFIG.url}/news`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    about: {
      "@type": "Thing",
      name: "Junk Mail",
      description: "Unsolicited advertising mail delivered by postal services",
    },
    specialty: "Consumer Advocacy",
  };
}
