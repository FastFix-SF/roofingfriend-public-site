export interface RebateProgram {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  amount: string;
  whoQualifies: string;
  howToApply: string;
  highlights: string[];
  link?: string;
}

export const rebatePrograms: RebateProgram[] = [
  {
    slug: "tech-clean-california",
    name: "TECH Clean California",
    tagline: "Up to $3,000+ for heat pump water heaters",
    description:
      "TECH Clean California is a statewide incentive program that offers rebates for installing energy-efficient heat pump water heaters. The program is funded by California ratepayers and administered by the California Public Utilities Commission (CPUC). Income-qualified households can receive even higher rebates — up to $5,350 or more.",
    amount: "Up to $3,000 (standard) · Up to $5,350+ (income-qualified)",
    whoQualifies:
      "California homeowners replacing an existing gas, propane, or electric resistance water heater with an eligible heat pump water heater. Must be installed by a licensed contractor.",
    howToApply:
      "Work with a participating contractor who submits the application on your behalf. West Peak handles the entire rebate process for you — we file the paperwork and make sure you get every dollar.",
    highlights: [
      "Covers heat pump water heater upgrades",
      "Higher rebates for low-income households",
      "Stackable with federal tax credits",
      "No out-of-pocket cost for many homeowners",
      "West Peak handles all paperwork",
      "Available statewide in California",
    ],
    link: "https://techcleanca.com",
  },
  {
    slug: "federal-tax-credit-25c",
    name: "Federal Tax Credit (25C)",
    tagline: "30% of cost, up to $2,000 per year",
    description:
      "The federal Energy Efficient Home Improvement Credit (Section 25C) allows homeowners to claim 30% of the cost of qualifying energy-efficient improvements — including heat pump water heaters — as a tax credit. This credit was expanded by the Inflation Reduction Act and is available through at least 2032.",
    amount: "30% of project cost, up to $2,000 per year",
    whoQualifies:
      "Any U.S. homeowner who installs a qualifying heat pump water heater in their primary residence. The equipment must meet ENERGY STAR requirements and have a Uniform Energy Factor (UEF) of at least 2.2.",
    howToApply:
      "Claim the credit when filing your federal tax return using IRS Form 5695. Keep receipts and the manufacturer's certification statement. Your tax professional can help.",
    highlights: [
      "30% of total installed cost",
      "Up to $2,000 credit per year",
      "Available through at least 2032",
      "Stackable with state and utility rebates",
      "Applies to heat pump water heaters",
      "No income limits",
    ],
    link: "https://www.energystar.gov/about/federal-tax-credits",
  },
  {
    slug: "heehra",
    name: "Home Electrification Rebates (HEEHRA)",
    tagline: "Up to $8,000 for low/moderate income households",
    description:
      "The High-Efficiency Electric Home Rebate Act (HEEHRA), part of the federal Inflation Reduction Act, provides point-of-sale rebates for electrification upgrades including heat pump water heaters, heat pump HVAC, and electrical panel upgrades. Rebate amounts depend on household income relative to Area Median Income (AMI).",
    amount: "Up to $1,750 (heat pump water heater) · Up to $8,000 (heat pump HVAC)",
    whoQualifies:
      "Households earning less than 150% of Area Median Income (AMI) qualify for partial rebates. Households under 80% AMI qualify for full rebates covering up to 100% of costs.",
    howToApply:
      "Applied as a point-of-sale discount through participating contractors and retailers. West Peak is a participating contractor — we apply the discount directly to your invoice.",
    highlights: [
      "Point-of-sale discount — no waiting",
      "Up to 100% of costs for low-income households",
      "Covers water heaters, HVAC, and panel upgrades",
      "Stackable with 25C tax credit",
      "Income-based — larger savings for those who need it",
      "Administered at the state level",
    ],
  },
  {
    slug: "golden-state-rebates",
    name: "Golden State Rebates (Utility Programs)",
    tagline: "Utility-funded rebates from PG&E, EBMUD & more",
    description:
      "California's major utilities — including PG&E, East Bay MUD (EBMUD), and SFPUC — offer their own rebate programs for water-efficient and energy-efficient upgrades. These include rebates for high-efficiency water heaters, low-flow fixtures, and water-saving appliances. Programs vary by utility.",
    amount: "Varies by utility — typically $50–$1,000+ per upgrade",
    whoQualifies:
      "Customers of participating utilities in the Bay Area and across California. Eligibility depends on your utility provider and the specific upgrade.",
    howToApply:
      "Check your utility's website or contact West Peak. We know every program available in your service area and can stack multiple rebates for maximum savings.",
    highlights: [
      "PG&E rebates for heat pump water heaters",
      "EBMUD rebates for water-efficient fixtures",
      "SFPUC water conservation rebates",
      "Stackable with TECH and federal credits",
      "Programs change — we track them so you don't have to",
      "Commercial and residential programs available",
    ],
  },
  {
    slug: "peninsula-clean-energy",
    name: "Peninsula Clean Energy",
    tagline: "Up to $2,500 for heat pump upgrades",
    description:
      "Peninsula Clean Energy (PCE) offers additional rebates for San Mateo County residents who switch from gas to electric heat pump water heaters and HVAC systems. These rebates stack on top of TECH Clean California and federal tax credits for even bigger savings.",
    amount: "Up to $2,500 for heat pump water heaters and HVAC",
    whoQualifies:
      "Residential customers in San Mateo County served by Peninsula Clean Energy. Must be replacing a gas appliance with a qualifying heat pump.",
    howToApply:
      "Apply through Peninsula Clean Energy's website or let West Peak handle the application as part of your installation project.",
    highlights: [
      "Exclusive to San Mateo County residents",
      "Stackable with TECH and federal credits",
      "Covers heat pump water heaters and HVAC",
      "Additional low-income bonuses available",
      "Quick application turnaround",
      "West Peak handles paperwork",
    ],
    link: "https://www.peninsulacleanenergy.com",
  },
  {
    slug: "bay-area-local",
    name: "Bay Area Local Programs",
    tagline: "City and county rebates across the Bay Area",
    description:
      "Many Bay Area cities and counties offer their own rebate and incentive programs for plumbing upgrades, water conservation, and electrification. Programs from BayREN (Bay Area Regional Energy Network), Silicon Valley Clean Energy, and individual cities can provide additional savings on top of state and federal programs.",
    amount: "Varies — $100 to $3,000+ depending on program and project",
    whoQualifies:
      "Bay Area homeowners and property owners. Eligibility varies by city, county, and program. Multi-family and commercial properties often qualify for larger incentives.",
    howToApply:
      "Contact West Peak for a free consultation. We identify every rebate you qualify for based on your location, property type, and planned upgrades — then handle the applications.",
    highlights: [
      "BayREN energy efficiency rebates",
      "Silicon Valley Clean Energy incentives",
      "City-specific water conservation programs",
      "Multi-family and commercial incentives",
      "Can be stacked with state and federal programs",
      "West Peak identifies all available rebates for you",
    ],
  },
];

export const rebateFaqs = [
  {
    question: "Can I combine multiple rebate programs?",
    answer:
      "Yes! Most California rebate programs are designed to be stackable. For example, you can combine the TECH Clean California rebate with the federal 25C tax credit, HEEHRA point-of-sale rebates, and your local utility rebate. West Peak helps you maximize your total savings by identifying and applying for every program you qualify for.",
  },
  {
    question: "Do I qualify for income-based rebates?",
    answer:
      "Income-qualified rebates are available through TECH Clean California and HEEHRA for households earning below certain thresholds relative to Area Median Income (AMI). Even if you're not sure, we recommend applying — many Bay Area households qualify without realizing it. West Peak can help you determine eligibility.",
  },
  {
    question: "How long does it take to receive my rebate?",
    answer:
      "HEEHRA rebates are applied as a point-of-sale discount, so you save immediately. TECH Clean California rebates typically arrive within 4–8 weeks after installation. Federal tax credits are claimed on your annual tax return. Utility rebates vary but usually arrive within 6–12 weeks.",
  },
  {
    question: "Does West Peak handle the rebate paperwork?",
    answer:
      "Absolutely. We handle the entire rebate application process for TECH Clean California, HEEHRA, and utility programs. For the federal tax credit, we provide all the documentation you need — your tax professional handles the rest.",
  },
  {
    question: "What equipment qualifies for rebates?",
    answer:
      "Heat pump water heaters are the most common qualifying upgrade, but many programs also cover heat pump HVAC systems, electrical panel upgrades, low-flow fixtures, and water-efficient appliances. The equipment must meet ENERGY STAR or program-specific efficiency requirements.",
  },
  {
    question: "Are rebates available for commercial properties?",
    answer:
      "Yes. Many utility and state programs offer rebates for commercial and multi-family properties. In some cases, commercial incentives are even larger than residential ones. Contact West Peak for a free assessment of your commercial property.",
  },
  {
    question: "How much can I save in total?",
    answer:
      "By stacking programs, many Bay Area homeowners save $5,000–$10,000+ on a heat pump water heater installation. Income-qualified households can often get the entire project covered at no out-of-pocket cost. The exact amount depends on your location, income, utility provider, and the upgrades you choose.",
  },
];
