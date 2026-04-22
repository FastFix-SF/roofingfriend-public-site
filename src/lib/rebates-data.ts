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
    slug: "title-24-cool-roof",
    name: "California Title 24 Cool Roof Compliance",
    tagline: "The 2025 standards (effective Jan 2, 2026) that unlock every other incentive",
    description:
      "California's 2025 Title 24 Part 6 energy code — taking effect January 2, 2026 — requires most reroofs that replace more than 50% of the roof in climate zones 2–15 to meet minimum aged solar reflectance and thermal emittance values. Every metal roof Roofing Friend installs is listed by the Cool Roof Rating Council (CRRC) and meets or exceeds those values. Compliance keeps your permit clean and is the gateway requirement for SMUD, LADWP, PG&E, and SDG&E cool-roof rebates.",
    amount: "Foundation — unlocks utility rebates, FAIR Plan discounts & §179D eligibility",
    whoQualifies:
      "Any California property owner reroofing >50% of an existing roof in climate zones 2–15, plus all new construction. Steep-slope (residential) and low-slope (commercial) thresholds differ — we spec the right CRRC product for your zone.",
    howToApply:
      "No homeowner application required. Roofing Friend selects a CRRC-listed metal system, submits the CF-1R cool-roof certificate with your building permit, and hands you the CRRC documentation utilities require for rebate payouts.",
    highlights: [
      "Every Roofing Friend system is CRRC product-listed",
      "Meets 2025 Title 24 Part 6 (effective Jan 2, 2026)",
      "Required for >50% reroofs in CA climate zones 2–15",
      "Required to claim utility cool-roof rebates",
      "Reduces attic temps & HVAC load",
      "We file the CF-1R certificate with your permit",
    ],
    link: "https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards",
  },
  {
    slug: "utility-cool-roof-rebates",
    name: "Utility Cool Roof Rebates (SMUD, LADWP, PG&E, SDG&E)",
    tagline: "Per-square-foot rebates from your local California utility",
    description:
      "California's major utilities run cool-roof rebate programs for customers who install CRRC-listed roofing on existing buildings. SMUD (Sacramento) and LADWP (Los Angeles) currently run the most active residential programs, with LADWP also offering a separate Attic Insulation rebate that pairs perfectly with a new metal roof. PG&E and SDG&E periodically open commercial cool-roof incentives. Amounts and funding cycles change quarterly — Roofing Friend confirms the active rebate for your service address before you sign.",
    amount: "Per-sq-ft rebates — verified at quote time based on your utility & funding cycle",
    whoQualifies:
      "Active residential or commercial customer of SMUD, LADWP, PG&E, or SDG&E installing a CRRC-listed cool roof on an existing building. Some programs require a pre-installation application.",
    howToApply:
      "Roofing Friend confirms current rebate availability for your utility, files the pre-approval (when required), submits the CRRC product listing + CF-1R certificate, and supplies the post-install documentation the utility needs to issue your check.",
    highlights: [
      "SMUD residential cool-roof rebate (Sacramento)",
      "LADWP Consumer Rebate Program — Cool Roof (LA)",
      "LADWP Attic Insulation rebate stacks with cool roof",
      "PG&E & SDG&E commercial programs (when open)",
      "Stackable with HVAC & insulation rebates",
      "We file every form for you",
    ],
    link: "https://www.ladwp.com/account/customer-service/rebates-and-programs",
  },
  {
    slug: "section-179d-commercial",
    name: "Federal §179D Energy-Efficient Commercial Buildings Deduction",
    tagline: "Up to $5.81/sq ft (2025) · $5.94/sq ft (2026) tax deduction",
    description:
      "IRC §179D is a federal tax deduction for energy-efficient improvements to commercial buildings, 4+ story multifamily, and government-building designers. Per IRS Rev. Proc. 2025-32, the maximum 2025 deduction is $5.81/sq ft and the maximum 2026 deduction (under prevailing-wage & apprenticeship rules) is $5.94/sq ft. A cool metal roof — typically paired with insulation upgrades — frequently qualifies a building's envelope improvements. Note: the One Big Beautiful Bill Act (signed July 4, 2025) revised certain §179D effective dates; flag with your CPA.",
    amount: "2025: up to $5.81/sq ft · 2026: up to $5.94/sq ft (PWA) — per IRS Rev. Proc. 2025-32",
    whoQualifies:
      "Owners of commercial buildings, 4+ story multifamily, or designers of government-owned buildings (schools, municipal facilities, etc.) in California. Requires third-party energy modeling certification.",
    howToApply:
      "Roofing Friend coordinates the third-party licensed engineer or contractor required to certify the energy savings, supplies CRRC + R-value documentation, and works directly with your CPA to file Form 3115 / Form 7205 with your tax return.",
    highlights: [
      "Up to $5.81/sq ft deduction (2025)",
      "Up to $5.94/sq ft deduction (2026, PWA)",
      "Commercial, 4+ story multifamily, public buildings",
      "Government designers eligible (schools, cities)",
      "Per IRS Rev. Proc. 2025-32",
      "We coordinate the energy modeler & your CPA",
    ],
    link: "https://www.energy.gov/eere/buildings/179d-commercial-buildings-energy-efficient-tax-deduction",
  },
  {
    slug: "fair-plan-wildfire-discount",
    name: "California FAIR Plan Wildfire Hardening Discount",
    tagline: "Up to 12 stackable discounts · up to 13.8% off the wildfire premium (commercial)",
    description:
      "Per the FAIR Plan's wildfire-mitigation one-pager updated November 15, 2025, policyholders who harden their property can stack up to 12 discrete discounts off the wildfire portion of their premium — totaling up to 13.8% on commercial policies when every mitigation is achieved. A Class A fire-rated roof is the highest-weighted single mitigation, and every metal roof Roofing Friend installs is Class A by assembly. Combined with ember-resistant vents and 5-foot defensible space, the Class A roof is the cornerstone of the discount stack.",
    amount: "Up to 12 stackable discounts · up to 13.8% off wildfire premium (commercial), per FAIR Plan 11/15/2025",
    whoQualifies:
      "Any California FAIR Plan residential or commercial policyholder. Discounts apply when documented wildfire-mitigation actions are completed and certified.",
    howToApply:
      "Roofing Friend supplies the Class A roof assembly certification, photo documentation, and product listings the FAIR Plan requires. You submit the package with your annual renewal — we provide a checklist of the other 11 mitigations to maximize your stack.",
    highlights: [
      "Class A roof = highest-weighted single mitigation",
      "Up to 12 stackable discounts",
      "Up to 13.8% off wildfire premium (commercial)",
      "Updated FAIR Plan one-pager (11/15/2025)",
      "Every Roofing Friend metal roof is Class A",
      "We supply the certification package for renewal",
    ],
    link: "https://www.cfpnet.com/",
  },
  {
    slug: "admitted-carrier-wildfire-discounts",
    name: "Safer from Wildfires — Admitted Carrier Discounts",
    tagline: "Mandatory premium discounts from State Farm, Allstate, USAA, Mercury, Farmers & more",
    description:
      "Under California's Safer from Wildfires regulation, every admitted homeowners insurance carrier must offer premium discounts when policyholders complete documented wildfire-mitigation actions. A Class A fire-rated roof is one of the eight mandated mitigations — and metal qualifies automatically. Discount sizes vary by carrier (typically 5–25% on the wildfire portion), and the CA Department of Insurance publishes the live list of carriers and their current discount structures.",
    amount: "Carrier-specific — typically 5–25% off the wildfire portion of premium",
    whoQualifies:
      "Any California homeowner with a policy from an admitted carrier (most major insurers — State Farm, Allstate, USAA, Mercury, Farmers, AAA, etc.). Required: documented Class A roof + supporting mitigations.",
    howToApply:
      "Roofing Friend issues your Class A roof assembly certification and product documentation. You forward it to your carrier (or we email it directly) and request the Safer from Wildfires discount review at next renewal.",
    highlights: [
      "Required of all admitted CA carriers",
      "Class A roof = 1 of 8 mandated mitigations",
      "Metal roofs are Class A by assembly",
      "5–25% typical discount on wildfire premium",
      "Stackable with hardened vents & defensible space",
      "CDI publishes live carrier discount list",
    ],
    link: "https://www.insurance.ca.gov/01-consumers/105-type/95-guides/03-res/Insurers-Currently-Offering-Discounts.cfm",
  },
  {
    slug: "gogreen-home-financing",
    name: "GoGreen Home Energy Financing (CAEATFA / CHEEF)",
    tagline: "State-backed unsecured loans up to ~$50K · terms to 15 years · below-market rates",
    description:
      "GoGreen Home is administered by the California Alternative Energy and Advanced Transportation Financing Authority (CAEATFA) through the CHEEF program. It provides credit-enhanced, unsecured loans for energy-efficient home upgrades — including cool roofs, when bundled with insulation or air sealing under the Building Envelope category of the Eligible Energy Measures list (updated January 2025). Loans up to roughly $50,000, terms up to 15 years, at below-market rates from participating CA credit unions and lenders.",
    amount: "Up to ~$50,000 · terms to 15 years · below-market unsecured rates",
    whoQualifies:
      "California single-family or 1–4 unit homeowners installing eligible energy upgrades. Cool-roof qualifies under Building Envelope EEM when bundled with attic insulation or air sealing.",
    howToApply:
      "Pick a participating GoGreen lender from gogreenfinancing.com, apply online, and Roofing Friend completes the contractor-side paperwork with the eligible measure documentation. Funds disburse on project completion.",
    highlights: [
      "CAEATFA-administered, state credit-enhanced",
      "Up to ~$50,000 unsecured",
      "Terms up to 15 years",
      "Below-market rates from CA credit unions",
      "Cool roof qualifies under Building Envelope EEM",
      "Bundle with insulation for full eligibility",
    ],
    link: "https://gogreenfinancing.com/",
  },
];

export const rebateFaqs = [
  {
    question: "Which California utilities currently offer cool roof rebates?",
    answer:
      "SMUD (Sacramento) and LADWP (Los Angeles) run the most active residential cool-roof programs in 2025. PG&E and SDG&E periodically open commercial cool-roof incentives. Programs change quarterly with funding cycles, so Roofing Friend verifies your specific utility's active rebate before you sign — and we file every form on your behalf.",
  },
  {
    question: "How much is the FAIR Plan wildfire discount really worth?",
    answer:
      "Per the FAIR Plan's mitigation one-pager updated November 15, 2025, you can stack up to 12 discrete discounts off the wildfire portion of your premium — totaling up to 13.8% on commercial policies when every mitigation is achieved. A Class A roof is the highest-weighted single item in the stack, and every metal roof we install qualifies automatically.",
  },
  {
    question: "Does my Class A metal roof qualify for the Safer from Wildfires discount automatically?",
    answer:
      "Yes. Class A is one of the eight mandated mitigation actions under California's Safer from Wildfires regulation, and every admitted carrier (State Farm, Allstate, USAA, Mercury, Farmers, AAA, etc.) must offer a discount when you submit documentation. Discount size varies by carrier — typically 5–25% off the wildfire portion of your premium.",
  },
  {
    question: "What's the §179D deduction for commercial roofs in 2025–2026?",
    answer:
      "Per IRS Rev. Proc. 2025-32, the maximum §179D deduction is $5.81 per square foot in 2025 and $5.94 per square foot in 2026 (with prevailing-wage and apprenticeship requirements met). It applies to commercial buildings, 4+ story multifamily, and designers of government buildings. Note: the One Big Beautiful Bill Act (July 4, 2025) revised some §179D effective dates — confirm with your CPA.",
  },
  {
    question: "Can I use PACE or GoGreen financing for a roof?",
    answer:
      "Yes — both work for cool-roof projects. PACE (Property Assessed Clean Energy, e.g. Ygrene) is repaid through your property tax bill and qualifies on home equity rather than credit score. GoGreen Home is a state-backed unsecured loan through participating CA credit unions, up to ~$50K with terms to 15 years. Cool roofs qualify when bundled with insulation/air sealing.",
  },
  {
    question: "Is Title 24 cool-roof compliance required for my reroof?",
    answer:
      "Yes, if you're replacing more than 50% of the existing roof in California climate zones 2–15. The 2025 Title 24 Part 6 standards take full effect January 2, 2026. Roofing Friend installs only CRRC product-listed systems, so your roof passes inspection and qualifies you for utility rebates that non-CRRC roofs can't access.",
  },
  {
    question: "Does Roofing Friend file the rebate paperwork for me?",
    answer:
      "Yes for utility cool-roof rebates and insurance Class A certifications — we handle pre-approvals, the CF-1R cool-roof certificate, CRRC product listings, and post-install documentation. For §179D commercial deductions, we coordinate the third-party energy modeler your CPA needs to certify the deduction at tax time.",
  },
];
