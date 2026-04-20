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
    title: "The Postal Service Is in Trouble. Here's How It Could Affect Your Mail.",
    description:
      "The New York Times examines how the USPS cash shortfall could force service cuts, from delayed delivery to higher stamp prices, as Postmaster General David Steiner warns the agency could be unable to fund operations within a year.",
    url: "https://www.nytimes.com/2026/04/11/us/politics/postal-service-finances-mail.html",
    source: "The New York Times",
    category: "usps",
  },
  {
    title: "Cash-Strapped US Postal Service Suspends Contributions to Pension Plan",
    description:
      "USPS suspended employer pension contributions effective April 10, 2026, pausing roughly $200 million every two weeks to free $2.5 billion in cash this fiscal year.",
    url: "https://www.reuters.com/world/cash-strapped-us-postal-service-suspends-contributions-pension-plan-2026-04-09/",
    source: "Reuters",
    category: "usps",
  },
  {
    title: "USPS Is Running Out of Money, Postmaster General Says",
    description:
      "Postmaster General David Steiner told Congress the agency is on track to run out of cash within a year and may have to stop deliveries absent legislative intervention.",
    url: "https://www.npr.org/2026/03/17/nx-s1-5750419/usps-running-out-of-money-postal-service-david-steiner",
    source: "NPR",
    category: "usps",
  },
  {
    title: "USPS Cutting Delivery Days 'On the Table' as Agency Runs Out of Cash",
    description:
      "Postmaster General David Steiner told House lawmakers that reducing six-day delivery is on the table, along with higher postage and expanded borrowing authority.",
    url: "https://federalnewsnetwork.com/agency-oversight/2026/03/usps-cutting-delivery-days-on-the-table-as-agency-runs-out-of-cash-postmaster-general-tells-lawmakers/",
    source: "Federal News Network",
    category: "usps",
  },
  {
    title: "What to Know About the U.S. Postal Service's 'Severe Financial Crisis'",
    description:
      "TIME summarizes the USPS cash crisis, pension suspensions, and looming stamp price hikes, highlighting why advertising mail revenue has not been enough to stabilize the agency.",
    url: "https://time.com/article/2026/04/10/usps-pension-contributions-mail-stamp-prices/",
    source: "TIME",
    category: "usps",
  },
  {
    title: "USPS Already Lost $1.3 Billion This Year, Cash Shortages Might Halt Mail Delivery in 2027",
    description:
      "The New York Post reports USPS posted its fourth straight quarterly loss and warns mail delivery could halt in February 2027 absent congressional action.",
    url: "https://nypost.com/2026/03/20/lifestyle/usps-cash-crisis-could-halt-mail-delivery-by-2027/",
    source: "New York Post",
    category: "usps",
  },
  {
    title: "Let's Ban Junk Mail Already",
    description:
      "More than 100 million trees are destroyed each year to produce junk mail. One modest environmental reform that would require little investment but would help avoid millions of tons of greenhouse gas emissions.",
    url: "https://www.sierraclub.org/sierra/let-s-ban-junk-mail-already",
    source: "Sierra Club",
    category: "environmental",
  },
  {
    title: "FBI Highlights Growing Number of Reported Elder Fraud Cases",
    description:
      "In 2024, the FBI received over 147,000 complaints of elder fraud, a 46% increase from the previous year, with victims losing nearly $5 billion.",
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
