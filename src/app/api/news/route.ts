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
    // Search for USPS, postal service, junk mail, direct mail news
    // Using "everything" endpoint for broader results
    const query = encodeURIComponent(
      '(USPS OR "postal service" OR "direct mail" OR "junk mail") AND (business OR revenue OR environmental OR waste OR fraud OR decline)'
    );

    const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`;

    const response = await fetch(url, {
      next: { revalidate: 21600 }, // 6 hours
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("NewsAPI error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch news", articles: [], details: errorData },
        { status: response.status }
      );
    }

    const data: NewsAPIResponse = await response.json();

    // Filter out articles without required fields and clean up data
    const cleanedArticles: NewsArticle[] = data.articles
      .filter(
        (article) =>
          article.title &&
          article.title !== "[Removed]" &&
          article.url &&
          article.source?.name
      )
      .slice(0, 5) // Return top 5 articles
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
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news", articles: [] },
      { status: 500 }
    );
  }
}
