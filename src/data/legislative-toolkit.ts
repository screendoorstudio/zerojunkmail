/**
 * Legislative Toolkit Data
 *
 * Centralized data for the /legislators page, extracted from Policy-Regulatory markdown files.
 */

// ============================================================================
// Bill Section Summaries
// ============================================================================

export interface BillSection {
  number: number;
  title: string;
  summary: string;
  keyProvisions: string[];
  legalBasis?: string;
}

export const billSections: BillSection[] = [
  {
    number: 1,
    title: "Short Title",
    summary: "Establishes the bill's name as the \"EDDM Consumer Choice Act of 2026\" or \"Every Door Delivers Only to the Willing Act.\"",
    keyProvisions: [
      "\"Consumer Choice\" framing emphasizes empowerment over restriction",
      "Alternative title creates memorable acronym (EDDOW)"
    ],
    legalBasis: "Strategic framing shift from failed 2007 \"Do Not Mail Act\" negative framing"
  },
  {
    number: 2,
    title: "Congressional Findings",
    summary: "Nine findings establishing the factual and legal basis for the legislation, including EDDM volume, regulatory gaps, environmental impact, and Supreme Court precedent.",
    keyProvisions: [
      "3 billion EDDM pieces delivered annually",
      "100 million trees cut annually",
      "44% thrown away unopened",
      "$320 million taxpayer disposal cost",
      "Cites Rowan v. USPS (1970) Supreme Court precedent",
      "References Netherlands JA-sticker 81% success rate"
    ],
    legalBasis: "Congressional findings establish legislative record for court review and support constitutional defense under Central Hudson"
  },
  {
    number: 3,
    title: "Definitions",
    summary: "Defines nine key terms including \"saturation mail\" - advertising delivered to 90%+ of addresses on a route, not addressed to specific individuals.",
    keyProvisions: [
      "\"Saturation mail\" requires: advertising nature, 90%+ route coverage, generic addressing",
      "90% threshold matches USPS's own definition",
      "Distinguishes from personalized direct mail (not covered)",
      "FTC designated as administering agency"
    ],
    legalBasis: "Definition structure parallels TCPA definitions for constitutional consistency"
  },
  {
    number: 4,
    title: "Opt-In Registry",
    summary: "Establishes the Saturation Mail Opt-In Registry at FTC with default NO delivery unless consumer affirmatively opts in.",
    keyProvisions: [
      "Default: No saturation mail unless opted in",
      "Three registration methods: internet, phone, mail",
      "Physical sticker option (Netherlands JA-sticker model)",
      "5-year registration period with renewal notices",
      "FTC administration avoids USPS conflict of interest"
    ],
    legalBasis: "Opt-in model follows Netherlands precedent; FTC administration follows Do Not Call Registry model"
  },
  {
    number: 5,
    title: "Fees",
    summary: "Establishes fee structure for commercial senders accessing the registry, with nonprofit discounts.",
    keyProvisions: [
      "$100 per ZIP code per year",
      "$5,000 per state per year",
      "$25,000 nationwide per year",
      "50% discount for nonprofits",
      "Annual inflation adjustment",
      "Fees fund registry administration and enforcement"
    ],
    legalBasis: "Fee structure parallels Do Not Call Registry ($20,700/year nationwide) with lower rates to preempt \"prohibitive cost\" arguments"
  },
  {
    number: 6,
    title: "Enforcement",
    summary: "Four-tiered enforcement: FTC penalties ($50K-$500K), USPS OIG investigation, State AG enforcement, and private right of action ($500-$1,500/piece).",
    keyProvisions: [
      "FTC civil penalties: $50,000-$500,000 per violation",
      "Pattern or practice violations: minimum $100,000",
      "State AG authority: $1,000 per violation",
      "PRIVATE RIGHT OF ACTION: $500/piece, $1,500 if willful",
      "Class action expressly authorized under Rule 23",
      "4-year statute of limitations"
    ],
    legalBasis: "Private right of action modeled on TCPA (47 USC 227) which has generated $200M+ in settlements. This is the bill's most powerful enforcement mechanism."
  },
  {
    number: 7,
    title: "Postal Service Cooperation",
    summary: "Requires USPS to not deliver saturation mail to non-opted-in addresses, provide address lists, train carriers, and report quarterly.",
    keyProvisions: [
      "USPS delivery prohibition to non-opted-in addresses",
      "Monthly delivery address lists to FTC",
      "Carrier training on sticker identification",
      "Quarterly compliance reporting"
    ],
    legalBasis: "Places policy control with FTC (independent) while operational execution remains with USPS, separating conflict of interest from decision-making"
  },
  {
    number: 8,
    title: "Consumer Education",
    summary: "Mandates FTC consumer education campaign including materials, multilingual resources, and post office notices.",
    keyProvisions: [
      "Public awareness campaign required",
      "Informational brochures and dedicated website",
      "Multilingual materials for non-English speakers",
      "Post office notices at all locations"
    ],
    legalBasis: "Addresses weakness of Do Not Call rollout where many consumers remained unaware of the registry"
  },
  {
    number: 9,
    title: "Annual Reports",
    summary: "Requires annual FTC reports to Congress and GAO studies at 3 years and every 5 years thereafter.",
    keyProvisions: [
      "Annual FTC report on registration rates, enforcement, and environmental impact",
      "GAO study at 3 years: compliance, consumer satisfaction, economic impact, environmental benefits",
      "Follow-up GAO studies every 5 years"
    ],
    legalBasis: "Congressional oversight ensures program effectiveness is measured and problems identified early"
  },
  {
    number: 10,
    title: "Implementation Timeline",
    summary: "24-month phased implementation: 12 months planning, 6 months education, then enforcement begins with small sender delay.",
    keyProvisions: [
      "Months 1-12: FTC regulations, database development, sticker design",
      "Months 13-18: Consumer education, registration begins",
      "Month 19: Enforcement begins for large senders",
      "Month 24: Small sender (<100K pieces) enforcement begins"
    ],
    legalBasis: "Addresses criticism of previous bills' unrealistic timelines; matches Do Not Call rollout timeline"
  },
  {
    number: 11,
    title: "Authorization of Appropriations",
    summary: "$15 million for first two years, then fees supplement appropriations.",
    keyProvisions: [
      "$15 million initial appropriation",
      "Fee revenue supplements ongoing costs",
      "Self-funding model similar to Do Not Call Registry"
    ],
    legalBasis: "Modest startup funding comparable to Do Not Call Registry"
  },
  {
    number: 12,
    title: "Exemptions",
    summary: "Minimal exemptions: government notices, first-class mail to named individuals, and periodicals. Political mail is NOT exempt.",
    keyProvisions: [
      "EXEMPT: Official government communications (taxes, elections, safety)",
      "EXEMPT: First-class mail to named individuals",
      "EXEMPT: Newspapers and periodicals",
      "NOT EXEMPT: Political campaign advertising",
      "NOT EXEMPT: Charitable solicitations (except 60-day disaster relief)",
      "NOT EXEMPT: Religious organization advertising"
    ],
    legalBasis: "Minimal exemptions address criticism that previous bills were too porous; political mail inclusion addresses fairness concerns"
  },
  {
    number: 13,
    title: "Effective Date",
    summary: "Act takes effect on enactment; delivery prohibition begins 19 months after enactment.",
    keyProvisions: [
      "Standard effective date provision",
      "Enforcement tied to Section 10 timeline"
    ]
  },
  {
    number: 14,
    title: "Severability",
    summary: "If any provision is struck down, the rest remains in effect.",
    keyProvisions: [
      "Core registry survives even if specific provisions fall",
      "Essential because constitutional challenges are likely"
    ],
    legalBasis: "Standard severability clause protects core program from partial court invalidation"
  },
  {
    number: 15,
    title: "Preemption",
    summary: "\"Floor, not ceiling\" - establishes minimum federal protection; states may go further.",
    keyProvisions: [
      "States may adopt stronger protections",
      "States may NOT provide weaker protections",
      "Differs from CAN-SPAM which preempted stronger state laws"
    ],
    legalBasis: "Floor approach allows state experimentation and avoids federalism objections"
  }
];

// ============================================================================
// Key Statistics
// ============================================================================

export interface KeyStat {
  value: string;
  label: string;
  source: string;
  category: 'environmental' | 'consumer' | 'economic' | 'fraud' | 'international';
}

export const keyStats: KeyStat[] = [
  // Environmental
  { value: "100 million", label: "Trees cut annually for junk mail", source: "Center for Development of Recycling", category: "environmental" },
  { value: "51.5 million", label: "Metric tons of CO2 emissions annually", source: "VoLo Foundation", category: "environmental" },
  { value: "28 billion", label: "Gallons of water consumed annually", source: "ForestEthics/Stand.earth", category: "environmental" },

  // Consumer
  { value: "44%", label: "Of junk mail thrown away unopened", source: "EPA", category: "consumer" },
  { value: "848", label: "Junk mail pieces per household annually", source: "VoLo Foundation", category: "consumer" },
  { value: "89%", label: "Of Americans support a Do Not Mail registry", source: "Zogby International (2007)", category: "consumer" },

  // Economic
  { value: "$320 million", label: "Annual taxpayer cost to dispose of junk mail", source: "Municipal studies", category: "economic" },
  { value: "$118 billion", label: "USPS cumulative losses since 2007", source: "USPS/GAO", category: "economic" },
  { value: "3 billion", label: "EDDM pieces delivered annually", source: "USPS", category: "economic" },

  // Fraud
  { value: "$4.9 billion", label: "In mail-based fraud losses (2024)", source: "FBI IC3", category: "fraud" },
  { value: "$3.4 billion", label: "Annual elder fraud losses (all channels)", source: "FBI IC3", category: "fraud" },

  // International
  { value: "81%", label: "Of Dutch households opted OUT when given choice", source: "Netherlands municipal data", category: "international" },
  { value: "62", label: "Dutch municipalities using JA-sticker (of 342)", source: "March 2024 data", category: "international" },
  { value: "6,000+", label: "Metric tons of paper saved annually (Netherlands)", source: "Amsterdam city reports", category: "international" }
];

// ============================================================================
// Legislator FAQs
// ============================================================================

export interface LegislatorFAQ {
  question: string;
  answer: string;
  category: 'constitutional' | 'economic' | 'operational' | 'political' | 'precedent';
}

export const legislatorFaqs: LegislatorFAQ[] = [
  // Constitutional
  {
    question: "Is this bill constitutional? Won't it face First Amendment challenges?",
    answer: "Yes, the bill is constitutionally defensible. The Supreme Court ruled in Rowan v. USPS (1970) that \"a mailer's right to communicate must stop at the mailbox of an unreceptive addressee.\" The Do Not Call Registry faced identical First Amendment challenges and won in Mainstream Marketing v. FTC (2004). This bill follows the same constitutional framework—it doesn't ban commercial speech, it requires consent.",
    category: "constitutional"
  },
  {
    question: "Why isn't political mail exempt?",
    answer: "Previous bills that exempted political mail were criticized as self-serving—politicians exempting themselves. If consumers have the right to refuse commercial advertising, they should have the same right to refuse political advertising. The bill only exempts official election materials (voter registration, ballot info), not campaign advertising. This principled consistency strengthens the bill's constitutional foundation.",
    category: "constitutional"
  },

  // Economic
  {
    question: "Won't this hurt small businesses?",
    answer: "The bill actually protects small senders with a 6-month delayed enforcement for those sending fewer than 100,000 pieces annually. Additionally, small local businesses increasingly prefer digital advertising—it's cheaper and more targeted. The industry's \"small business\" framing is strategic PR; the top EDDM users are large national chains and franchises.",
    category: "economic"
  },
  {
    question: "What about the claimed 460,000 jobs?",
    answer: "This figure is inflated and outdated. It includes all printing, paper manufacturing, and postal jobs—not just advertising mail jobs. It counts some jobs in multiple categories and is based on 2007 data when the industry was much larger. The Netherlands' experience shows businesses adapt: 81% opted out, yet no documented wave of bankruptcies occurred.",
    category: "economic"
  },
  {
    question: "Will this bankrupt the Postal Service?",
    answer: "No. USPS has lost $118 billion since 2007 despite advertising mail revenue—junk mail hasn't saved it. The primary cause was the PAEA pre-funding mandate (partially fixed in 2022). Mail volume has declined 50% since 2001 regardless. The future of USPS is packages and priority services, not forcing unwanted advertising on consumers.",
    category: "economic"
  },

  // Operational
  {
    question: "Is a national opt-in registry even feasible?",
    answer: "Yes. We already run the Do Not Call Registry with 246+ million phone numbers. The Netherlands implements the JA-sticker system with simple physical stickers—no complex database needed for basic operation. Technology has advanced dramatically since 2007. This is not a hard technical problem.",
    category: "operational"
  },
  {
    question: "Why FTC administration instead of USPS?",
    answer: "USPS has a fundamental conflict of interest: its revenue depends on advertising mail volume, its Board includes industry representatives, and it has lobbied against previous Do Not Mail bills. The FTC is the appropriate agency because it already runs the successful Do Not Call Registry, is independent of postal operations, and has a consumer protection mission aligned with the bill's goals.",
    category: "operational"
  },
  {
    question: "What about the physical sticker option?",
    answer: "The physical sticker (modeled on Netherlands' JA-sticker) is simple and self-enforcing: visible to neighbors, requires no technology, and accommodates those without internet access. It creates community awareness and allows easy compliance verification. The bill allows both digital registration AND physical stickers as equivalent consent mechanisms.",
    category: "operational"
  },

  // Political
  {
    question: "Why has previous Do Not Mail legislation failed?",
    answer: "Previous bills (H.R. 3319 in 2007) failed due to structural weaknesses: opt-out models that placed burden on consumers, weak penalties ($10,000 max), no private right of action, broad exemptions including all political mail, and USPS administration despite its conflict of interest. This bill addresses every one of those weaknesses with an opt-in model, strong penalties, private enforcement, minimal exemptions, and FTC administration.",
    category: "political"
  },
  {
    question: "How do we overcome industry lobbying?",
    answer: "Industry spent $5-10 million lobbying against previous bills. This bill is designed to build a broader coalition: conservatives (property rights, end USPS subsidy), progressives (environment, 100M trees), seniors (fraud protection), and even some businesses (ROI improves when reaching willing recipients only). The 89% public support crosses party lines.",
    category: "political"
  },

  // Precedent
  {
    question: "What does the Netherlands experience prove?",
    answer: "The Netherlands JA-sticker system demonstrates that opt-in is legally permissible (Dutch Supreme Court upheld it in 2021), operationally feasible (62 municipalities implemented successfully), and popular (81% opted out, 92% satisfaction). Businesses adapted without collapse. This real-world evidence directly refutes industry predictions of economic disaster.",
    category: "precedent"
  },
  {
    question: "How does this compare to the Do Not Call Registry?",
    answer: "The Do Not Call Registry provides the direct model: FTC administration, national registry, fee-based industry access, and (via TCPA) private right of action. Our bill improves on this by using opt-in rather than opt-out, and adding a physical sticker option. The Do Not Call Registry has 246+ million registrations, proving Americans want protection from unwanted solicitation.",
    category: "precedent"
  }
];

// ============================================================================
// Talking Points by Audience
// ============================================================================

export interface TalkingPointsTab {
  id: string;
  label: string;
  frame: string;
  primaryMessages: string[];
  specificPoints: string[];
  concerns: { concern: string; response: string }[];
}

export const talkingPointsTabs: TalkingPointsTab[] = [
  {
    id: "conservative",
    label: "Conservative",
    frame: "Property Rights and Limited Government",
    primaryMessages: [
      "\"The government shouldn't force advertising into your home.\" Your mailbox is your property. You should decide what enters your home.",
      "\"End the USPS advertising subsidy.\" EDDM uses taxpayer infrastructure for private profit. Consumers bear disposal costs for mail they never requested.",
      "\"Protect Americans from fraud.\" $4.9 billion in mail-based fraud annually. Seniors disproportionately victimized. Opt-in gives families a protection tool."
    ],
    specificPoints: [
      "\"Why should the government decide what advertising you have to receive?\"",
      "\"Conservatives believe in property rights—that includes your mailbox.\"",
      "\"Free markets require informed consumers who can choose. Current law removes that choice.\"",
      "\"This isn't about banning speech—it's about requiring consent.\""
    ],
    concerns: [
      { concern: "\"This is regulation\"", response: "This is DEREGULATION—removing government-mandated delivery of advertising" },
      { concern: "\"It will hurt businesses\"", response: "Businesses adapted to Do Not Call; Netherlands had no economic collapse" },
      { concern: "\"First Amendment\"", response: "Even Scalia recognized speech doesn't include forcing messages into homes" },
      { concern: "\"USPS needs revenue\"", response: "USPS lost $118B since 2007—junk mail hasn't saved it" }
    ]
  },
  {
    id: "progressive",
    label: "Progressive",
    frame: "Environmental Justice and Consumer Protection",
    primaryMessages: [
      "\"100 million trees die every year for mail nobody asked for.\" Plus 51.5 million metric tons CO2 and 28 billion gallons of water. 44% thrown away unopened—pure waste.",
      "\"Low-income communities bear the brunt.\" Saturation mail targets specific ZIP codes. Predatory lenders concentrate in low-income areas. Environmental burden falls on communities with less political power.",
      "\"The polluter should pay—not taxpayers.\" $320 million annual disposal cost falls on local governments. That's money not spent on schools, parks, or services."
    ],
    specificPoints: [
      "\"The direct mail industry treats our communities like dumping grounds.\"",
      "\"If we can stop robocalls, we can stop junk mail.\"",
      "\"This is one of the easiest environmental wins available—just stop delivering what people don't want.\"",
      "\"The Netherlands cut advertising mail by 81% through opt-in. We can do the same.\""
    ],
    concerns: [
      { concern: "\"What about nonprofit fundraising?\"", response: "Nonprofits can still reach willing supporters; they pay 50% reduced fees" },
      { concern: "\"What about small businesses?\"", response: "Small senders get 6-month delay; targeted mail to named individuals unaffected" },
      { concern: "\"What about USPS jobs?\"", response: "Mail volume already declining; opt-in may improve mail quality and sustainability" },
      { concern: "\"What about political mail?\"", response: "Our bill does NOT exempt political mail—unlike previous failed bills" }
    ]
  },
  {
    id: "business",
    label: "Business",
    frame: "Quality Over Quantity, ROI",
    primaryMessages: [
      "\"Advertising works better when people want to see it.\" 44% of junk mail is thrown away unopened—a 44% waste rate before anyone sees the message. Opt-in means every recipient chose to receive advertising.",
      "\"Direct mail is already declining—adapt or die.\" Digital advertising has taken market share for 20 years. USPS mail volume down 50% since 2001. Clinging to saturation mail is not a growth strategy.",
      "\"The Netherlands model didn't destroy businesses.\" 81% opted out, but businesses adapted. Some found response rates improved. Digital channels filled the gap. No documented bankruptcies."
    ],
    specificPoints: [
      "\"Would you want to pay for advertising that goes straight to the trash?\"",
      "\"The best customers are those who want to hear from you.\"",
      "\"Saturation mail is the spam of the physical world—and spam doesn't work.\"",
      "\"Smart businesses have already moved to digital. This just accelerates the inevitable.\""
    ],
    concerns: [
      { concern: "\"Our customers expect our mailings\"", response: "Then they'll opt in—no problem" },
      { concern: "\"This will hurt small businesses\"", response: "Small local businesses increasingly prefer digital (lower cost, better targeting)" },
      { concern: "\"EDDM is affordable\"", response: "Affordable advertising that nobody sees isn't a bargain" },
      { concern: "\"What about existing customers?\"", response: "Targeted mail to named individuals is NOT affected—only saturation mail" }
    ]
  },
  {
    id: "seniors",
    label: "Seniors",
    frame: "Fraud Protection and Peace of Mind",
    primaryMessages: [
      "\"Protect yourself from mail fraud.\" $4.9 billion in mail-based fraud annually. Seniors disproportionately victimized. Saturation mail includes many fraudulent offers. Opt-in gives you control.",
      "\"Your family can help protect you.\" Family members can help seniors opt in or stay opted out. Clear default (no saturation mail) protects those who forget to act. Physical sticker option is simple and visible.",
      "\"Respect your time and your mailbox.\" Average household receives 848 pieces of junk mail per year. That's 8 months of life spent sorting junk mail over a lifetime. You deserve a mailbox free of unwanted clutter."
    ],
    specificPoints: [
      "\"You shouldn't have to worry about which mail is real and which is a scam.\"",
      "\"If you want the advertisements, you can sign up. If you don't, you're left alone.\"",
      "\"Your children and grandchildren can help you make this choice—and it stays made.\"",
      "\"The Netherlands has had this system for years. Seniors there love it.\""
    ],
    concerns: [
      { concern: "\"What if I want some ads?\"", response: "You can opt in—that's the whole point of consumer choice" },
      { concern: "\"Is this hard to set up?\"", response: "Three options: internet, phone, or simple mailbox sticker" },
      { concern: "\"Will I miss important mail?\"", response: "First-class mail, government notices, and newspapers are all exempt" },
      { concern: "\"What if I change my mind?\"", response: "You can opt in or out at any time through any method" }
    ]
  }
];

// ============================================================================
// Industry Counterarguments
// ============================================================================

export interface Counterargument {
  id: string;
  category: 'economic' | 'constitutional' | 'practical' | 'postal';
  argument: string;
  industryPosition: string;
  response: string;
  oneLineResponse: string;
}

export const counterarguments: Counterargument[] = [
  // Economic
  {
    id: "jobs",
    category: "economic",
    argument: "460,000 jobs depend on direct mail",
    industryPosition: "Direct mail supports 460,000 American jobs. This legislation would devastate the industry and cause massive unemployment.",
    response: "The 460,000 figure includes all printing, paper manufacturing, and postal jobs—not just advertising mail. It doesn't distinguish saturation mail from other mail, counts some jobs multiple times, and is based on outdated 2007 data. The Netherlands' 81% opt-out rate did not cause economic collapse; businesses adapted.",
    oneLineResponse: "That counts all mail jobs, not just junk mail—and the Netherlands didn't collapse"
  },
  {
    id: "small-business",
    category: "economic",
    argument: "This will devastate small businesses",
    industryPosition: "Small local businesses depend on affordable EDDM to compete. This bill will hurt those who can least afford it.",
    response: "EDDM primarily benefits large national mailers, not small businesses. Small businesses increasingly prefer digital advertising (cheaper, more targeted). The bill protects small senders with a 6-month delayed enforcement period. The \"small business\" framing is industry PR strategy.",
    oneLineResponse: "Small businesses prefer digital; the bill gives them extra time anyway"
  },
  {
    id: "economy",
    category: "economic",
    argument: "This will hurt the economy",
    industryPosition: "The direct mail industry contributes billions to GDP. Restricting it will harm economic growth.",
    response: "Producing unwanted goods that go straight to landfills is waste, not productivity. Resources would be reallocated, not destroyed. The $320 million in disposal costs are externalized to taxpayers. A full accounting would reduce the claimed economic benefit.",
    oneLineResponse: "Producing trash isn't economic productivity—it's waste"
  },

  // Constitutional
  {
    id: "first-amendment",
    category: "constitutional",
    argument: "This violates the First Amendment",
    industryPosition: "Commercial speech is protected. A Do Not Mail registry would unconstitutionally restrict advertisers' free speech rights.",
    response: "The Supreme Court rejected this argument in Rowan v. USPS (1970): \"We categorically reject the argument that a vendor has a right under the Constitution or otherwise to send unwanted material into the home of another.\" The Do Not Call Registry survived identical challenges in Mainstream Marketing v. FTC (2004).",
    oneLineResponse: "Supreme Court already ruled advertisers can't force mail into homes (Rowan)"
  },
  {
    id: "political-exemption",
    category: "constitutional",
    argument: "Political mail exemption is required by the First Amendment",
    industryPosition: "Political speech receives the highest protection. Exempting political mail is constitutionally required.",
    response: "Political campaign advertising is functionally commercial speech—it solicits money and votes. The bill is content-neutral, treating all saturation mail equally. Candidates have many other channels. Politicians shouldn't exempt themselves from consumer protection.",
    oneLineResponse: "Politicians shouldn't exempt themselves; the bill treats all ads equally"
  },

  // Practical
  {
    id: "unworkable",
    category: "practical",
    argument: "An opt-in registry is unworkable",
    industryPosition: "Managing a national opt-in registry would be operationally impossible. The logistics are too complex.",
    response: "We already run the Do Not Call Registry with 246+ million phone numbers. The Netherlands does it with simple physical stickers—no complex database needed. Technology has advanced dramatically since 2007. This is not a hard technical problem.",
    oneLineResponse: "We run a 246-million-number phone registry; this isn't harder"
  },
  {
    id: "consumer-confusion",
    category: "practical",
    argument: "Consumers will be confused",
    industryPosition: "An opt-in system will confuse consumers. They won't understand what they're signing up for.",
    response: "The current system is more confusing—consumers don't know what EDDM is or why they can't stop certain mail. Opt-in is simpler: no saturation mail by default; display sticker or register to receive. Netherlands consumers aren't confused (92% satisfaction). The bill mandates consumer education.",
    oneLineResponse: "Opt-in is simpler: no mail unless you want it"
  },
  {
    id: "dmachoice",
    category: "practical",
    argument: "DMAchoice already allows opt-out",
    industryPosition: "Industry self-regulation through DMAchoice gives consumers an opt-out option. Government intervention is unnecessary.",
    response: "DMAchoice does NOT stop EDDM. It only covers member companies' addressed mail—saturation mail is explicitly excluded. Less than 10% of consumers know it exists. Compliance is voluntary with no enforcement. If self-regulation worked, 89% of consumers wouldn't want a government registry.",
    oneLineResponse: "DMAchoice doesn't stop EDDM—that's the whole problem"
  },
  {
    id: "throw-away",
    category: "practical",
    argument: "Just throw it away",
    industryPosition: "If consumers don't want the mail, they can simply throw it away. This is a minor inconvenience.",
    response: "44% already do throw it away—that's the problem, not the solution. It shifts the burden to consumers (8 months of lifetime sorting). Environmental costs are real (100M trees, $320M disposal). Vulnerable populations are harmed (seniors sorting for scams).",
    oneLineResponse: "44% already do—that's the problem, not the solution"
  },

  // Postal
  {
    id: "usps-bankruptcy",
    category: "postal",
    argument: "This will bankrupt the Postal Service",
    industryPosition: "USPS depends on advertising mail revenue to survive. Reducing volume will force taxpayer bailouts or service cuts.",
    response: "USPS has lost $118 billion since 2007—advertising mail hasn't saved it. The PAEA pre-funding mandate was the real problem (partially fixed in 2022). Mail volume is already declining 50% since 2001. Saturation mail cannot reverse this trend. The future is packages, not junk mail.",
    oneLineResponse: "USPS lost $118B despite junk mail—it hasn't saved them"
  },
  {
    id: "mailbox-monopoly",
    category: "postal",
    argument: "The mailbox monopoly requires delivery",
    industryPosition: "18 USC 1725 establishes the mailbox monopoly. USPS has both the exclusive right AND obligation to deliver all legal mail.",
    response: "Congress created the mailbox monopoly and can modify it—that's what this bill does. USPS already exercises discretion (refusing hazardous materials, returning undeliverable mail). Consumer consent is a reasonable condition, as Rowan recognized homeowner privacy rights.",
    oneLineResponse: "Congress created the monopoly and can modify it"
  },
  {
    id: "consumers-want-ads",
    category: "practical",
    argument: "Consumers who want advertising will be harmed",
    industryPosition: "Many consumers appreciate advertising mail and use it to find deals. Opt-in will make it harder for them.",
    response: "Those consumers can opt in—that's the entire point of consumer choice. In the Netherlands, 19% did exactly that and continue receiving mail. The current system doesn't serve either group well; it just forces everyone to receive mail they may not want.",
    oneLineResponse: "Then they can opt in; 81% chose not to in Netherlands"
  }
];

// ============================================================================
// Regulatory Comparison Table Data
// ============================================================================

export interface RegulatoryComparison {
  channel: string;
  optOutMechanism: string;
  governingLaw: string;
  enforcingAgency: string;
  yearEnacted: string;
  privateAction: boolean;
  penalty: string;
}

export const regulatoryComparisons: RegulatoryComparison[] = [
  {
    channel: "Telemarketing",
    optOutMechanism: "Do Not Call Registry",
    governingLaw: "TCPA / TSR",
    enforcingAgency: "FTC / FCC",
    yearEnacted: "1991 / 2003",
    privateAction: true,
    penalty: "$500-$1,500/call"
  },
  {
    channel: "Email",
    optOutMechanism: "Required unsubscribe link",
    governingLaw: "CAN-SPAM Act",
    enforcingAgency: "FTC",
    yearEnacted: "2003",
    privateAction: false,
    penalty: "$53,088/violation"
  },
  {
    channel: "Text Messages",
    optOutMechanism: "Prior express consent",
    governingLaw: "TCPA",
    enforcingAgency: "FCC",
    yearEnacted: "1991",
    privateAction: true,
    penalty: "$500-$1,500/text"
  },
  {
    channel: "Fax",
    optOutMechanism: "Prior relationship required",
    governingLaw: "Junk Fax Prevention Act",
    enforcingAgency: "FCC",
    yearEnacted: "2005",
    privateAction: true,
    penalty: "$500-$1,500/fax"
  },
  {
    channel: "Postal Mail (EDDM)",
    optOutMechanism: "NONE",
    governingLaw: "No applicable law",
    enforcingAgency: "N/A",
    yearEnacted: "N/A",
    privateAction: false,
    penalty: "$0"
  }
];

// ============================================================================
// Key Bill Innovations
// ============================================================================

export const keyInnovations = [
  {
    innovation: "Opt-In Model (Not Opt-Out)",
    description: "Flips the default: no saturation mail unless consumers affirmatively consent. Previous bills used opt-out, placing burden on consumers.",
    precedent: "Netherlands JA-sticker system (81% chose not to receive)"
  },
  {
    innovation: "Private Right of Action",
    description: "Individuals can sue for $500-$1,500 per piece. This is the most powerful enforcement mechanism, creating market-based enforcement.",
    precedent: "TCPA (has generated $200M+ in settlements)"
  },
  {
    innovation: "Political Mail NOT Exempt",
    description: "Only official election materials exempt, not campaign advertising. Previous bills exempting political mail were criticized as self-serving.",
    precedent: "Principled consistency—politicians should not exempt themselves"
  },
  {
    innovation: "Physical Sticker Option",
    description: "Simple mailbox indicator as alternative to digital registration. Self-enforcing, requires no technology, accommodates all consumers.",
    precedent: "Netherlands JA-sticker (simple, effective, popular)"
  },
  {
    innovation: "FTC Administration",
    description: "Independent agency avoids USPS conflict of interest (USPS revenue depends on advertising mail volume).",
    precedent: "Do Not Call Registry (FTC-administered, 246M+ registrations)"
  }
];

// ============================================================================
// Constitutional Basis
// ============================================================================

export const constitutionalBasis = {
  rowanCase: {
    name: "Rowan v. United States Post Office Department",
    citation: "397 U.S. 728 (1970)",
    holding: "The Supreme Court upheld consumer rights to refuse mail, stating: \"We therefore categorically reject the argument that a vendor has a right under the Constitution or otherwise to send unwanted material into the home of another.\"",
    significance: "Establishes that consumer privacy can override advertiser speech rights in the home context."
  },
  centralHudson: {
    name: "Central Hudson Gas & Electric v. Public Service Commission",
    citation: "447 U.S. 557 (1980)",
    test: [
      "Is the speech lawful and not misleading? (Yes)",
      "Is there a substantial government interest? (Yes: privacy per Rowan, environment, fraud prevention)",
      "Does the restriction directly advance that interest? (Yes: opt-in directly reduces unwanted mail)",
      "Is the restriction no more extensive than necessary? (Yes: only saturation mail affected, willing recipients still receive)"
    ],
    significance: "The four-part test for commercial speech restrictions. This bill satisfies all four prongs."
  },
  mainstreamMarketing: {
    name: "Mainstream Marketing Services v. FTC",
    citation: "358 F.3d 1228 (10th Cir. 2004)",
    holding: "The Tenth Circuit upheld the Do Not Call Registry against First Amendment challenge, finding it \"a reasonable fit with the government's interest in protecting the privacy of individuals.\"",
    significance: "Directly validates the registry model against identical constitutional arguments."
  }
};

// ============================================================================
// Table of Contents for Sticky Navigation
// ============================================================================

export interface TOCSection {
  id: string;
  title: string;
  shortTitle?: string;
}

export const tableOfContents: TOCSection[] = [
  { id: "executive-summary", title: "Executive Summary", shortTitle: "Summary" },
  { id: "the-problem", title: "The Problem", shortTitle: "Problem" },
  { id: "the-solution", title: "The Solution", shortTitle: "Solution" },
  { id: "bill-summary", title: "Model Bill Summary", shortTitle: "Bill Summary" },
  { id: "section-analysis", title: "Section-by-Section Analysis", shortTitle: "Analysis" },
  { id: "key-statistics", title: "Key Statistics", shortTitle: "Statistics" },
  { id: "constitutional-basis", title: "Constitutional Basis", shortTitle: "Constitutional" },
  { id: "legislator-faq", title: "Legislator FAQ", shortTitle: "FAQ" },
  { id: "talking-points", title: "Talking Points", shortTitle: "Talking Points" },
  { id: "counterarguments", title: "Industry Opposition", shortTitle: "Opposition" },
  { id: "take-action", title: "Take Action", shortTitle: "Action" }
];
