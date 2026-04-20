export type LatestNewsCategory =
  | "usps-crisis"
  | "eddm"
  | "environmental"
  | "consumer"
  | "fraud"
  | "policy"
  | "industry";

export interface LatestNewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  date: string;
  category: LatestNewsCategory;
}

export const CATEGORY_STYLE: Record<
  LatestNewsCategory,
  { label: string; bg: string; fg: string }
> = {
  "usps-crisis": { label: "USPS Crisis", bg: "#fee2e2", fg: "#991b1b" },
  eddm: { label: "EDDM", bg: "#fef3c7", fg: "#92400e" },
  environmental: { label: "Environmental", bg: "#dcfce7", fg: "#166534" },
  consumer: { label: "Consumer", bg: "#e0e7ff", fg: "#3730a3" },
  fraud: { label: "Fraud & Scams", bg: "#ffe4e6", fg: "#9f1239" },
  policy: { label: "Policy", bg: "#f3e8ff", fg: "#6b21a8" },
  industry: { label: "Industry", bg: "#e5e7eb", fg: "#1f2937" },
};

export const LATEST_NEWS: LatestNewsItem[] = [
  {
    title:
      "The Postal Service Is in Trouble. Here's How It Could Affect Your Mail.",
    description:
      "The New York Times examines how a USPS cash shortfall could force service cuts, from delayed delivery to higher stamp prices, as Postmaster General David Steiner warns the agency could be unable to fund operations within a year.",
    url: "https://www.nytimes.com/2026/04/11/us/politics/postal-service-finances-mail.html",
    source: "The New York Times",
    date: "2026-04-11",
    category: "usps-crisis",
  },
  {
    title:
      "What to Know About the U.S. Postal Service's 'Severe Financial Crisis'",
    description:
      "TIME summarizes the cash crisis, pension suspensions, and looming stamp price hikes, highlighting why advertising mail revenue has not been enough to stabilize the agency even as billions of pieces ship each year.",
    url: "https://time.com/article/2026/04/10/usps-pension-contributions-mail-stamp-prices/",
    source: "TIME",
    date: "2026-04-10",
    category: "usps-crisis",
  },
  {
    title:
      "Cash-Strapped US Postal Service Suspends Contributions to Pension Plan",
    description:
      "USPS suspended employer pension contributions effective April 10, pausing roughly $200 million every two weeks to free $2.5 billion in cash this fiscal year as the agency tries to avoid insolvency.",
    url: "https://www.reuters.com/world/cash-strapped-us-postal-service-suspends-contributions-pension-plan-2026-04-09/",
    source: "Reuters",
    date: "2026-04-09",
    category: "usps-crisis",
  },
  {
    title:
      "USPS Suspends Contributions to Pension Plan to Delay Running Out of Cash",
    description:
      "Federal News Network details the FERS contribution suspension and its impact on postal employees, coming weeks after leadership told Congress the agency could run out of cash within the year.",
    url: "https://federalnewsnetwork.com/management/2026/04/usps-suspends-contributions-to-pension-plan-to-delay-running-out-of-cash/",
    source: "Federal News Network",
    date: "2026-04-09",
    category: "usps-crisis",
  },
  {
    title: "Stamp Prices Set to Increase Again",
    description:
      "Another round of stamp price hikes is on the horizon as USPS leadership weighs raising first-class postage from 78 cents to a dollar or more to offset billions in operating losses.",
    url: "https://www.al.com/news/2026/04/stamp-prices-set-to-increaseagain.html",
    source: "AL.com",
    date: "2026-04-05",
    category: "usps-crisis",
  },
  {
    title: "The Plight of the U.S. Postal Service",
    description:
      "NPR's 1A devotes an episode to the USPS crisis, exploring the structural reasons behind declining mail volume, the agency's reliance on advertising mail revenue, and the tradeoffs in possible reforms.",
    url: "https://www.npr.org/2026/03/25/nx-s1-5760859/the-plight-of-the-u-s-postal-service",
    source: "NPR / 1A",
    date: "2026-03-25",
    category: "usps-crisis",
  },
  {
    title:
      "USPS Cutting Delivery Days 'On the Table' as Agency Runs Out of Cash",
    description:
      "Postmaster General David Steiner told House lawmakers that reducing six-day delivery is now on the table, along with higher postage and expanded borrowing authority, as USPS approaches insolvency.",
    url: "https://federalnewsnetwork.com/agency-oversight/2026/03/usps-cutting-delivery-days-on-the-table-as-agency-runs-out-of-cash-postmaster-general-tells-lawmakers/",
    source: "Federal News Network",
    date: "2026-03-20",
    category: "usps-crisis",
  },
  {
    title:
      "USPS Already Lost $1.3 Billion This Year, Cash Shortages Might Halt Mail Delivery in 2027",
    description:
      "The New York Post reports USPS posted its fourth straight quarterly loss and warns mail delivery could halt in February 2027 absent congressional action.",
    url: "https://nypost.com/2026/03/20/lifestyle/usps-cash-crisis-could-halt-mail-delivery-by-2027/",
    source: "New York Post",
    date: "2026-03-20",
    category: "usps-crisis",
  },
  {
    title: "Postmaster General Says Illinois Is USPS' 'Biggest Problem' Area",
    description:
      "Postmaster General David Steiner identified Illinois as the worst-performing USPS region during House testimony, citing service complaints and operational issues that have drawn congressional attention.",
    url: "https://postaltimes.com/postmaster-general-says-illinois-is-usps-biggest-problem-area/",
    source: "State Journal-Register (via PostalTimes)",
    date: "2026-03-20",
    category: "usps-crisis",
  },
  {
    title: "USPS Is Running Out of Money, Postmaster General Says",
    description:
      "Postmaster General David Steiner told Congress the agency is on track to run out of cash for paying workers and vendors within a year and may have to stop deliveries without legislative intervention.",
    url: "https://www.npr.org/2026/03/17/nx-s1-5750419/usps-running-out-of-money-postal-service-david-steiner",
    source: "NPR",
    date: "2026-03-17",
    category: "usps-crisis",
  },
  {
    title:
      "USPS Posts Worrying $9 Billion Deficit for Fiscal Year 2025",
    description:
      "The Postal Service closed FY2025 with a $9 billion net loss, citing higher workers' comp, retiree health benefits, and operating costs. The result deepens the structural crisis even as marketing mail revenue climbed 2.3% on strategic rate hikes.",
    url: "https://rollingout.com/2025/11/15/usps-9-billion-fiscal-2025-financial/",
    source: "Rolling Out",
    date: "2025-11-15",
    category: "usps-crisis",
  },
  {
    title: "U.S. Postal Service Reports Fiscal Year 2025 Results",
    description:
      "USPS reported a $9 billion net loss for FY2025. Marketing Mail revenue grew $350 million (2.3%) despite a 1.3% volume decline (764 million fewer pieces), as the agency leans harder on rate increases to offset falling volume.",
    url: "https://about.usps.com/newsroom/national-releases/2025/1114-usps-reports-fiscal-year-2025-results.htm",
    source: "USPS Newsroom",
    date: "2025-11-14",
    category: "industry",
  },
  {
    title:
      "USPS Confirms EDDM Has Generated Over $5 Billion in Revenue Since 2011",
    description:
      "USPS Postal Facts reports that Every Door Direct Mail has delivered more than 33 billion pieces and generated more than $5 billion since 2011, underscoring why the agency resists any opt-out mechanism even as households drown in unwanted ads.",
    url: "https://facts.usps.com/every-door-direct-mail/",
    source: "USPS Postal Facts",
    date: "2026-01-01",
    category: "eddm",
  },
  {
    title:
      "Ernst, Cortez Masto Move to Stop Subsidies for Political Junk Mail",
    description:
      "After 2.3 billion pieces of political mail flooded mailboxes in 2024, bipartisan legislation was introduced to end the 40% to 60% discounts taxpayers effectively subsidize for political direct mail.",
    url: "https://www.ernst.senate.gov/news/press-releases/ernst-cortez-masto-stop-subsidies-for-political-junk-mail",
    source: "U.S. Senate",
    date: "2025-03-12",
    category: "policy",
  },
  {
    title:
      "FBI Highlights Growing Number of Reported Elder Fraud Cases",
    description:
      "In 2024 the FBI received over 147,000 elder fraud complaints, a 46% increase year over year, with victim losses near $5 billion. Mail-delivered scams remain a primary attack vector targeting older adults.",
    url: "https://www.fbi.gov/contact-us/field-offices/boston/news/fbi-highlights-growing-number-of-reported-elder-fraud-cases-ahead-of-world-elder-abuse-awareness-day",
    source: "FBI",
    date: "2025-06-14",
    category: "fraud",
  },
  {
    title: "Let's Ban Junk Mail Already",
    description:
      "Sierra Club makes the case for a federal junk mail ban, noting that 100+ million trees are destroyed each year to produce direct mail. Modest reform, huge avoided emissions.",
    url: "https://www.sierraclub.org/sierra/let-s-ban-junk-mail-already",
    source: "Sierra Club",
    date: "2023-10-26",
    category: "environmental",
  },
  {
    title:
      "Projecting Mail Volume: Future Trends and Implications for the Postal Service",
    description:
      "USPS OIG projects a further 14% to 41% decline in First-Class and Marketing Mail volume from 2025 to 2035 depending on the economy and electronic diversion. Baseline scenario: a 29% drop.",
    url: "https://www.uspsoig.gov/reports/white-papers/projecting-mail-volume-future-trends-and-implications-postal-service",
    source: "USPS Office of Inspector General",
    date: "2025-08-01",
    category: "industry",
  },
  {
    title: "How To Stop Junk Mail",
    description:
      "The FTC's consumer guide lays out the opt-out services that cover addressed mail, including OptOutPrescreen and DMAchoice, and acknowledges that no federal opt-out exists for EDDM or 'Postal Customer' saturation mail.",
    url: "https://consumer.ftc.gov/articles/how-stop-junk-mail",
    source: "FTC Consumer Advice",
    date: "2024-09-01",
    category: "consumer",
  },
  {
    title:
      "U.S. Postal Service is Losing Money. What Can Be Done to Help It?",
    description:
      "GAO documents that USPS lost money almost every fiscal year since 2007, with net losses totaling roughly $109 billion through FY2024, framing why 'advertising mail revenue' has become a structural dependency.",
    url: "https://www.gao.gov/blog/u.s.-postal-service-losing-money.-what-can-be-done-help-it",
    source: "U.S. GAO",
    date: "2024-07-16",
    category: "industry",
  },
];

export function sortedLatestNews(limit?: number): LatestNewsItem[] {
  const sorted = [...LATEST_NEWS].sort((a, b) =>
    b.date.localeCompare(a.date)
  );
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export function formatArticleDate(iso: string): string {
  const d = new Date(iso + (iso.length === 10 ? "T00:00:00Z" : ""));
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
