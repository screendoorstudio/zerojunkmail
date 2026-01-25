import { NextResponse } from "next/server";

export interface NewsArticle {
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  source: {
    name: string;
  };
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
}

// Keywords that must appear in title or description to be considered relevant
const RELEVANCE_KEYWORDS = [
  "usps",
  "postal service",
  "post office",
  "postmaster",
  "mail delivery",
  "mail carrier",
  "junk mail",
  "direct mail",
  "advertising mail",
  "marketing mail",
  "mailbox",
  "postal worker",
  "mail fraud",
  "postal",
  "postage",
  "mail volume",
  "deliveries",
];

// Check if article is relevant to USPS/mail topics
function isRelevantArticle(article: NewsArticle): boolean {
  const titleLower = (article.title || "").toLowerCase();
  const descLower = (article.description || "").toLowerCase();
  const combined = `${titleLower} ${descLower}`;

  return RELEVANCE_KEYWORDS.some((keyword) => combined.includes(keyword));
}

// Cache duration: 6 hours (in seconds)
export const revalidate = 21600;

export async function GET() {
  const apiKey = process.env.NEWSAPI_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "NewsAPI key not configured", articles: [] },
      { status: 500 }
    );
  }

  try {
    // More focused search query for USPS and postal service news
    const query = encodeURIComponent(
      '"USPS" OR "U.S. Postal Service" OR "postal service" OR "post office" OR "postmaster general"'
    );

    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=30&apiKey=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 21600 }, // 6 hours
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("NewsAPI error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch news", articles: [] },
        { status: response.status }
      );
    }

    const data: NewsAPIResponse = await response.json();

    // Filter for relevant articles and clean up data
    const cleanedArticles: NewsArticle[] = data.articles
      .filter(
        (article) =>
          article.title &&
          article.title !== "[Removed]" &&
          article.url &&
          article.source?.name &&
          isRelevantArticle(article) // Only include relevant articles
      )
      .slice(0, 5) // Return top 5 relevant articles
      .map((article) => ({
        title: article.title,
        description: article.description || null,
        url: article.url,
        urlToImage: article.urlToImage || null,
        publishedAt: article.publishedAt,
        source: {
          name: article.source.name,
        },
      }));

    return NextResponse.json({
      articles: cleanedArticles,
      lastUpdated: new Date().toISOString(),
      totalResults: data.totalResults,
      filteredCount: cleanedArticles.length,
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news", articles: [] },
      { status: 500 }
    );
  }
}
