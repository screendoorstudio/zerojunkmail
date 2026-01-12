// Fallback articles to display when NewsAPI is unavailable or returns no results
// These are "evergreen" articles that remain relevant over time

export interface FallbackArticle {
  title: string;
  description: string;
  url: string;
  source: string;
  category: "environmental" | "usps" | "consumer" | "fraud" | "policy";
}

export const FALLBACK_ARTICLES: FallbackArticle[] = [
  {
    title: "Let's Ban Junk Mail Already",
    description:
      "More than 100 million trees are destroyed each year to produce junk mail. One modest environmental reform that would require little investment but would help avoid millions of tons of greenhouse gas emissions.",
    url: "https://www.sierraclub.org/sierra/let-s-ban-junk-mail-already",
    source: "Sierra Club",
    category: "environmental",
  },
  {
    title: "U.S. Postal Service is Losing Money. What Can Be Done to Help It?",
    description:
      "USPS has lost money almost every fiscal year since 2007, with net losses totaling approximately $109 billion from fiscal years 2007 through 2024.",
    url: "https://www.gao.gov/blog/u.s.-postal-service-losing-money.-what-can-be-done-help-it",
    source: "U.S. GAO",
    category: "usps",
  },
  {
    title: "How Does Junk Mail Affect the Environment?",
    description:
      "60% of junk mail ends up in landfills, spewing enormous quantities of methane—a greenhouse gas 23 times more potent than carbon dioxide.",
    url: "https://greenly.earth/en-us/blog/ecology-news/how-does-junk-mail-affect-the-environment",
    source: "Greenly",
    category: "environmental",
  },
  {
    title: "FBI Highlights Growing Number of Reported Elder Fraud Cases",
    description:
      "In 2024, the FBI received over 147,000 complaints of elder fraud—a 46% increase from the previous year—with victims losing nearly $5 billion.",
    url: "https://www.fbi.gov/contact-us/field-offices/boston/news/fbi-highlights-growing-number-of-reported-elder-fraud-cases-ahead-of-world-elder-abuse-awareness-day",
    source: "FBI",
    category: "fraud",
  },
  {
    title: "How To Stop Junk Mail",
    description:
      "If it's not scammers spamming your phone with texts or filling up your inbox with emails, it's your mailbox crammed with ads and other mail you didn't ask for.",
    url: "https://consumer.ftc.gov/articles/how-stop-junk-mail",
    source: "FTC Consumer Advice",
    category: "consumer",
  },
  {
    title: "Ernst, Cortez Masto Stop Subsidies for Political Junk Mail",
    description:
      "After 2.3 billion pieces of political mail flooded America's mailboxes in 2024, bipartisan legislation introduced to end 40-60% discounts for political junk mail.",
    url: "https://www.ernst.senate.gov/news/press-releases/ernst-cortez-masto-stop-subsidies-for-political-junk-mail",
    source: "U.S. Senate",
    category: "policy",
  },
];

// News configuration
export const NEWS_CONFIG = {
  // How many articles to show on homepage
  homepageCount: 3,
  // How many articles to show on news archive page
  archiveCount: 10,
  // Refresh interval in milliseconds (6 hours)
  refreshInterval: 6 * 60 * 60 * 1000,
  // Categories for filtering
  categories: [
    { id: "all", label: "All News" },
    { id: "environmental", label: "Environmental" },
    { id: "usps", label: "USPS Business" },
    { id: "consumer", label: "Consumer Issues" },
    { id: "fraud", label: "Fraud & Scams" },
    { id: "policy", label: "Policy & Legislation" },
  ],
};

// Helper function to format date for display
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}
