// Key statistics about EDDM and junk mail environmental/social impact
// All statistics are sourced from reputable organizations

export const STATISTICS = {
  trees: {
    value: "100 Million",
    shortValue: "100M",
    label: "trees cut annually",
    description: "Trees destroyed each year to produce junk mail in the US",
    source: "Center for Development of Recycling",
  },
  co2: {
    value: "51.5 Million",
    shortValue: "51.5M",
    label: "metric tons of CO2",
    description: "Annual greenhouse gas emissions from junk mail production and disposal",
    source: "VoLo Foundation",
  },
  water: {
    value: "28 Billion",
    shortValue: "28B",
    label: "gallons of water",
    description: "Water consumed annually in junk mail production",
    source: "ForestEthics",
  },
  disposalCost: {
    value: "$320 Million",
    shortValue: "$320M",
    label: "taxpayer disposal cost",
    description: "Annual cost to taxpayers for disposing of junk mail",
    source: "Multiple municipal studies",
  },
  thrownAway: {
    value: "44%",
    shortValue: "44%",
    label: "thrown away unopened",
    description: "Percentage of junk mail discarded without being read",
    source: "EPA",
  },
  elderFraud: {
    value: "$2.9+ Billion",
    shortValue: "$2.9B+",
    label: "elder fraud losses",
    description: "Annual losses to seniors from mail-based fraud schemes",
    source: "FBI",
  },
  eddmPieces: {
    value: "~3 Billion",
    shortValue: "3B",
    label: "EDDM pieces annually",
    description: "Number of EDDM mail pieces delivered each year",
    source: "USPS",
  },
} as const;

export const PETITION_URL = "https://www.change.org/p/united-states-postal-service-do-not-deliver-u-s-postal-service-eddm-junk-mail";

export const SITE_CONFIG = {
  name: "Zero Junk Mail",
  tagline: "End Unwanted USPS Advertising Mail",
  description: "The authoritative resource on EDDM (Every Door Direct Mail) and why consumers cannot opt out of USPS junk mail. Learn about the environmental impact, taxpayer costs, and how to take action.",
  url: "https://zerojunkmail.org",
  twitter: "@zerojunkmail",
} as const;
