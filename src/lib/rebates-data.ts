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
    slug: "title-24-compliance",
    name: "California Title 24 Cool Roof Compliance",
    tagline: "Code-compliant cool roofs unlock every other rebate",
    description:
      "California's Title 24 Part 6 energy code requires most new and re-roofed homes and commercial buildings to meet minimum solar reflectance and thermal emittance values. Every metal roof system Roofing Friend installs is CRRC-rated (Cool Roof Rating Council) and exceeds Title 24 requirements — which keeps your permit clean and qualifies you for utility cool-roof rebates that pure asphalt re-roofs simply can't access.",
    amount: "Compliance unlocks $200–$400+ in stackable utility rebates",
    whoQualifies:
      "Any California homeowner or commercial property owner re-roofing or building new. Steep-slope (residential) and low-slope (commercial) requirements differ slightly — we handle the spec.",
    howToApply:
      "No application — Roofing Friend selects CRRC-listed metal panels and submits the cool-roof certificate with your building permit. You get the documentation you need for utility rebates and resale disclosures.",
    highlights: [
      "Every Roofing Friend metal roof is CRRC-rated",
      "Avoids permit failures and re-inspections",
      "Required for steep- and low-slope re-roofs in most CA climate zones",
      "Unlocks PG&E / SMUD / SDG&E rebates",
      "Improves attic temperatures and HVAC efficiency",
      "We file the cool-roof certificate with your permit",
    ],
    link: "https://coolroofs.org",
  },
  {
    slug: "utility-cool-roof-rebates",
    name: "Utility Cool Roof Rebates (PG&E, SMUD, SDG&E)",
    tagline: "$0.10–$0.20 per sq ft for CRRC-rated metal roofs",
    description:
      "California's investor-owned and municipal utilities — PG&E, SMUD, SDG&E, LADWP, and others — offer per-square-foot rebates for installing qualifying CRRC-listed cool roofs. Programs vary by utility and change year to year, but a typical 2,000 sq ft residential metal roof returns $200–$400 in direct utility rebates, with larger amounts for low-slope commercial projects.",
    amount: "$0.10–$0.20 per sq ft (residential) · $0.20+ per sq ft (commercial low-slope)",
    whoQualifies:
      "Customers of participating California utilities installing a CRRC-listed cool roof on an existing structure. Both steep-slope (residential metal) and low-slope (commercial standing seam, TPO) products qualify.",
    howToApply:
      "Roofing Friend confirms the current rebate amount for your utility at quote time, includes the CRRC product number on your invoice, and submits the rebate paperwork on your behalf after installation.",
    highlights: [
      "Stackable with §179D and insurance discounts",
      "PG&E, SMUD, SDG&E, LADWP, Burbank Water & Power",
      "Typical home: $200–$400 cash back",
      "Larger rebates for commercial low-slope roofs",
      "Roofing Friend confirms current amounts at quote",
      "We file the paperwork — you cash the check",
    ],
    link: "https://www.energystar.gov/products/cool_roof_rebate_finder",
  },
  {
    slug: "section-179d-commercial",
    name: "Federal §179D — Commercial Buildings Energy Deduction",
    tagline: "Up to $5.81 per sq ft tax deduction",
    description:
      "Section 179D of the Internal Revenue Code lets owners of commercial buildings (and designers of government buildings) deduct the cost of energy-efficient roof, HVAC, and lighting upgrades. Cool metal and TPO roof systems that improve the building envelope by qualifying percentages can claim a deduction of up to $5.81 per square foot in 2025 — turning a major roof replacement into a substantial tax reduction.",
    amount: "Up to $5.81 per sq ft (2025 rates, indexed annually)",
    whoQualifies:
      "Owners of commercial, industrial, multi-family (4+ stories), and certain leased buildings. Architects, engineers, and contractors who design qualifying roofs on government, tribal, or non-profit buildings can also claim the deduction.",
    howToApply:
      "Requires a third-party energy modeling certification. Roofing Friend coordinates with qualified §179D certifiers and provides all installation documentation your CPA needs to claim the deduction on your federal return.",
    highlights: [
      "Up to $5.81 per sq ft — massive on warehouses",
      "Stackable with utility rebates",
      "Available for retrofits and new construction",
      "Government building designers also qualify",
      "Roofing Friend coordinates the energy modeling",
      "Indexed annually for inflation",
    ],
    link: "https://www.irs.gov/credits-deductions/businesses/energy-efficient-commercial-buildings-deduction",
  },
  {
    slug: "fair-plan-wildfire-discount",
    name: "California FAIR Plan — Wildfire Hardening Discount",
    tagline: "Up to 13.8% off your wildfire premium",
    description:
      "Under California's Safer from Wildfires regulation, the FAIR Plan and admitted insurers must offer premium discounts to property owners who harden their homes against wildfire. A Class A fire-rated roof — which every metal roof Roofing Friend installs qualifies as automatically — is the single highest-impact mitigation, worth up to 13.8% off the wildfire portion of your annual premium.",
    amount: "Up to 13.8% off the wildfire portion of premium",
    whoQualifies:
      "California property owners insured through the FAIR Plan or admitted carriers, especially those in high or very-high Fire Hazard Severity Zones (Wildland-Urban Interface).",
    howToApply:
      "After installation, Roofing Friend provides a roofing certificate and Class A documentation. Submit to your insurer or FAIR Plan agent to apply the discount at your next renewal — or earlier if your carrier allows.",
    highlights: [
      "Metal roofs are automatically Class A rated",
      "Mandated by CA Dept of Insurance regulation",
      "Largest single mitigation discount available",
      "Stacks with ember-resistant vents & defensible space",
      "Required documentation provided by Roofing Friend",
      "Especially valuable in WUI fire zones",
    ],
    link: "https://www.insurance.ca.gov/01-consumers/200-wrr/saferfromwildfires.cfm",
  },
  {
    slug: "insurance-wildfire-mitigation",
    name: "Standard Insurer Wildfire Mitigation Discounts",
    tagline: "5–25% off premiums from State Farm, Allstate, USAA & more",
    description:
      "Beyond the FAIR Plan, every admitted homeowners insurer in California — State Farm, Allstate, USAA, Mercury, Farmers, Nationwide, and others — is required to offer wildfire mitigation discounts under the Safer from Wildfires framework. A Class A metal roof typically earns 5–25% off your total premium, often paying for a meaningful chunk of the roof itself over the life of the system.",
    amount: "5–25% off annual premium (varies by insurer & zone)",
    whoQualifies:
      "California homeowners with admitted-carrier policies. Discount size depends on your insurer, Fire Hazard Severity Zone, and which other mitigation measures (vents, defensible space, deck, gutters) you've completed.",
    howToApply:
      "Notify your insurance agent that you've installed a Class A metal roof and request a wildfire mitigation re-rate. Roofing Friend provides the Class A certification and installation documentation your carrier requires.",
    highlights: [
      "All admitted CA carriers must offer the discount",
      "Class A roof is the #1 weighted mitigation",
      "Compounds year after year for life of policy",
      "Often the difference between renewal and non-renewal",
      "Stack with vent, deck, and defensible-space measures",
      "We supply every doc your carrier asks for",
    ],
    link: "https://www.insurance.ca.gov/01-consumers/200-wrr/saferfromwildfires.cfm",
  },
  {
    slug: "gogreen-financing",
    name: "GoGreen Home Energy Financing",
    tagline: "Low-interest loans up to $50,000",
    description:
      "GoGreen Home is a California state-backed financing program (administered by CAEATFA) that offers low-interest, unsecured loans for energy-efficient home improvements — including cool roof installations bundled with attic insulation and air-sealing. Loans go up to $50,000 with terms up to 15 years, often at rates well below traditional home improvement loans.",
    amount: "Up to $50,000 · terms up to 15 years · below-market rates",
    whoQualifies:
      "California homeowners with participating utilities (PG&E, SCE, SoCalGas, SDG&E). Cool roofs paired with attic insulation, air sealing, or HVAC upgrades qualify. Credit-based with flexible underwriting.",
    howToApply:
      "Apply through a GoGreen-approved lender — Roofing Friend can refer you to participating lenders and structure the project so the cool-roof + insulation bundle qualifies cleanly.",
    highlights: [
      "Below-market interest rates",
      "No home equity required (unsecured)",
      "Up to 15-year terms keep payments low",
      "Bundle roof + attic insulation for max savings",
      "Stackable with utility rebates and FAIR Plan discount",
      "Statewide California program",
    ],
    link: "https://gogreenfinancing.com/",
  },
];

export const rebateFaqs = [
  {
    question: "Can I combine multiple roofing rebates?",
    answer:
      "Yes — that's the whole point. A typical Bay Area homeowner can stack a utility cool-roof rebate, a 5–25% wildfire mitigation insurance discount, and (if applicable) GoGreen financing on the same project. Commercial owners add §179D on top. Roofing Friend identifies every program you qualify for and files the paperwork so nothing slips through.",
  },
  {
    question: "Does a metal roof always qualify for the FAIR Plan discount?",
    answer:
      "Yes. Every metal roof system Roofing Friend installs carries a Class A fire rating — the highest rating available — which automatically satisfies the roofing requirement of California's Safer from Wildfires regulation. We provide the Class A documentation your insurer or FAIR Plan agent needs to apply the discount.",
  },
  {
    question: "How much can I actually save on insurance premiums?",
    answer:
      "It depends on your insurer, your Fire Hazard Severity Zone, and what other mitigation steps you've taken — but most California homeowners see 5–25% off their annual premium after installing a Class A metal roof. In high-risk WUI zones, the savings often exceed $1,000–$2,500 per year and compound over the life of the policy.",
  },
  {
    question: "Do I need a CRRC-rated product to get the utility rebate?",
    answer:
      "Yes. Utility cool-roof rebates require a Cool Roof Rating Council (CRRC) listed product number on the invoice. Every standing-seam, R-panel, and stone-coated metal product Roofing Friend installs is CRRC-rated, so your project qualifies automatically.",
  },
  {
    question: "What's the difference between Title 24 compliance and a cool roof rebate?",
    answer:
      "Title 24 is California's energy code — it sets the minimum reflectance and emittance your roof must meet to pass inspection. The utility rebate is a separate cash-back program for installing a CRRC-rated cool roof. Compliance is the floor; the rebate is the bonus. We handle both at the same time.",
  },
  {
    question: "Are commercial properties eligible for §179D?",
    answer:
      "Absolutely. Section 179D was designed for commercial, industrial, and multi-family (4+ stories) buildings. Warehouses, office buildings, retail centers, and apartment complexes can deduct up to $5.81 per square foot in 2025 for qualifying energy-efficient roof systems. Roofing Friend coordinates the required third-party energy modeling certification.",
  },
  {
    question: "Does Roofing Friend handle the rebate paperwork?",
    answer:
      "Yes — for every program except the federal §179D deduction (which requires your CPA). We file the Title 24 cool-roof certificate, submit utility rebate applications, provide Class A documentation for FAIR Plan and admitted-carrier insurance discounts, and coordinate with §179D energy modelers on commercial projects. You sign the paperwork; we do the work.",
  },
];
