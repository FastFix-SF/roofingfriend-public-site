export interface WarrantyCategory {
  slug: string;
  name: string;
  years: number;
  yearLabel: string;
  tagline: string;
  description: string;
  whatsCovered: string[];
  limitations: string[];
  californiaLaw: string;
  lemonInfo: string;
  claimSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const warrantyCategories: WarrantyCategory[] = [
  {
    slug: "residential",
    name: "Residential",
    years: 50,
    yearLabel: "Lifetime Metal Roof Warranty",
    tagline: "Standing seam built to outlast your mortgage",
    description:
      "Roofing Friend installs premium standing seam metal roofs backed by manufacturer paint and substrate warranties of up to 50 years, plus our own labor warranty on every installation. Standing seam systems are engineered for a 50+ year service life, and we back ours with the strongest residential coverage in California — paint film, substrate, and workmanship all in one package. California's Right to Repair Act (SB 800) covers roofing defects on new construction for up to 10 years; our coverage goes far beyond the legal minimum.",
    whatsCovered: [
      "Standing seam metal panels — substrate and paint film (manufacturer-backed)",
      "Underlayment, flashing, ridge caps, and trim installed by Roofing Friend",
      "Workmanship and labor on the full roof system",
      "Wind uplift performance to manufacturer-rated speeds",
      "Leak-free performance for the duration of the labor warranty",
      "Re-inspection and re-seal of penetrations as needed during coverage",
    ],
    limitations: [
      "Damage from third-party work (solar installers, satellite mounts, HVAC contractors) is excluded",
      "Hail, wildfire, earthquake, and other acts of God are excluded — covered by homeowner insurance",
      "Cosmetic fade outside manufacturer paint specs is excluded",
      "Foot traffic damage from non-Roofing-Friend personnel is excluded",
    ],
    californiaLaw:
      "California's SB 800 (Right to Repair Act, Civil Code §895–945.5) covers residential roofing defects on new construction for up to 10 years and gives contractors the right to repair before homeowners can sue. The CSLB requires a minimum 1-year contractor workmanship warranty. Roofing Friend exceeds both with manufacturer-backed paint and substrate coverage of up to 50 years and a long-term labor warranty on every install.",
    lemonInfo:
      "California's Song-Beverly Consumer Warranty Act protects consumers when warranted products fail to meet their warranty after reasonable repair attempts. For residential roofing, if a covered defect can't be resolved, you're entitled to a replacement system or refund for the affected portion. SB 800 requires homeowners to give the contractor the right to repair first — Roofing Friend always honors that, and most claims are resolved in a single visit.",
    claimSteps: [
      { title: "Call or Submit Online", description: "Contact Roofing Friend by phone or warranty form. Include your address, install date, and a description of the issue (or photos)." },
      { title: "Free Roof Inspection", description: "We schedule a free inspection — typically within 48 hours — to confirm coverage and assess what's needed." },
      { title: "No-Cost Repair", description: "If the issue is covered, we complete the repair at no charge, coordinating with the manufacturer if a panel or paint claim is involved." },
      { title: "Updated Documentation", description: "You receive a written report and updated warranty certificate for your home records — important for resale value." },
    ],
    faqs: [
      { question: "How long does Roofing Friend's residential roof warranty last?", answer: "Manufacturer paint and substrate warranties on standing seam metal panels run up to 50 years depending on the system you choose. Roofing Friend adds a long-term labor warranty on every install. Combined, you get the strongest residential roof coverage available in California." },
      { question: "Does the warranty transfer if I sell my home?", answer: "Yes — both the manufacturer warranty and Roofing Friend's labor warranty transfer to the new homeowner. A transferable lifetime metal roof is one of the highest-value upgrades you can make for resale." },
      { question: "What is SB 800 and how does it protect me?", answer: "SB 800 (the Right to Repair Act) is California's framework for residential construction defect claims. It covers roofing defects on new construction for up to 10 years and requires homeowners to give the contractor the right to repair before suing. Roofing Friend's coverage exceeds SB 800 by decades." },
      { question: "Are wildfire and hail damage covered?", answer: "No — natural disasters including wildfire, hail, and earthquake are excluded from any roof warranty (manufacturer or contractor) and are instead handled by your homeowner insurance. Standing seam metal roofs do qualify for FAIR Plan and admitted-carrier wildfire discounts in California." },
      { question: "What happens if the same issue keeps coming back?", answer: "If a warranted repair fails after a reasonable number of attempts, we'll provide an upgraded system or refund the affected portion — consistent with California's Song-Beverly consumer protections." },
      { question: "How does this compare to shingle roof warranties?", answer: "Most asphalt shingle warranties are 20–30 years and prorated heavily after year 10. Standing seam metal roofs from Roofing Friend offer non-prorated paint and substrate coverage of up to 50 years, plus longer real-world service life." },
    ],
    metaTitle: "Lifetime Metal Roof Warranty — Residential | Roofing Friend",
    metaDescription: "Roofing Friend offers up to 50-year manufacturer paint & substrate warranties plus a long-term labor warranty on standing seam metal roofs in California. Transferable. Exceeds SB 800.",
  },
  {
    slug: "commercial",
    name: "Commercial",
    years: 25,
    yearLabel: "25-Year System Warranty",
    tagline: "Standing seam & TPO for retail, restaurants & warehouses",
    description:
      "Roofing Friend provides a 25-year commercial roof system warranty covering standing seam metal and TPO membrane installations on retail centers, restaurants, warehouses, and big-box buildings. Coverage includes manufacturer system warranties (panels, membrane, fasteners, sealants) plus Roofing Friend's workmanship warranty. California's CSLB requires a 1-year minimum contractor warranty — our commercial coverage runs 25 years on the system and is built around business continuity: no leaks, no surprise reroofs, no downtime.",
    whatsCovered: [
      "Standing seam metal panels and TPO membrane — manufacturer system warranty",
      "Fasteners, sealants, flashing, edge metal, and curbs installed by Roofing Friend",
      "Workmanship and labor on the full roof system",
      "Wind uplift performance to manufacturer-rated speeds",
      "Leak-free performance for the system warranty term",
      "Priority response on warranted callbacks to minimize business disruption",
    ],
    limitations: [
      "Damage from third-party trades (HVAC, solar, signage, telecom) is excluded",
      "Ponding water from drainage issues outside the roof system is excluded",
      "Chemical exhaust exposure beyond manufacturer specs is excluded",
      "Natural disasters (wildfire, hail, earthquake, named storm) are excluded",
      "Warranty is non-transferable unless agreed in writing with the new owner",
    ],
    californiaLaw:
      "California's CSLB requires a minimum 1-year workmanship warranty on all licensed contractor work. California Business and Professions Code §7159 requires written warranty terms in any contract over $500. Title 24 governs commercial roof energy performance (cool roof requirements). Roofing Friend complies with all CSLB, Title 24, and local building code requirements and exceeds the workmanship warranty minimum by 25×.",
    lemonInfo:
      "While California's Song-Beverly Act is consumer-focused, commercial clients are protected under California Commercial Code and CSLB enforcement. If a warranted commercial roof issue can't be resolved after reasonable attempts, Roofing Friend will provide an alternative system solution or refund for the affected scope. Contractors who fail to honor warranties on commercial projects face CSLB disciplinary action and civil liability.",
    claimSteps: [
      { title: "Report the Issue", description: "Contact our commercial team with your project ID, install date, and description of the issue (photos or drone images help)." },
      { title: "Priority Inspection", description: "We schedule commercial inspections within 48 hours — sooner if there's an active leak threatening operations or inventory." },
      { title: "Coordinated Repair", description: "Repairs are scheduled around your operating hours to minimize disruption. We coordinate with facility management and tenants as needed." },
      { title: "Documentation Package", description: "You receive a full repair report, updated warranty certificate, and any manufacturer claim documentation for your records." },
    ],
    faqs: [
      { question: "What does the 25-year commercial warranty cover?", answer: "It covers the manufacturer system warranty on metal panels or TPO membrane (substrate, paint, fasteners, sealants) plus Roofing Friend's workmanship and labor on the full installation. Both are bundled into one 25-year system warranty." },
      { question: "Why 25 years and not lifetime like residential?", answer: "Commercial roofs face heavier mechanical traffic (HVAC servicing, telecom, solar), more penetrations, and harsher use than residential roofs. 25 years is the practical limit set by current commercial system manufacturers — and it's 25× the California CSLB minimum." },
      { question: "How fast does Roofing Friend respond to commercial warranty calls?", answer: "We prioritize commercial claims because of the operational impact. Inspections are typically scheduled within 48 hours, and active-leak emergencies get same-day or next-day response." },
      { question: "Is the warranty transferable if I sell the building?", answer: "Commercial system warranties are non-transferable by default but can be transferred with a written agreement and re-inspection. Contact us before closing to arrange the transfer." },
      { question: "Does the warranty cover damage from rooftop solar or HVAC contractors?", answer: "No. Damage caused by third-party trades is excluded, but we can document the damage and coordinate a paid repair so your roof returns to warranty-compliant condition." },
      { question: "What about Title 24 cool roof compliance?", answer: "All Roofing Friend commercial systems are installed to meet or exceed California Title 24 cool roof requirements where applicable. We use CRRC-listed products and document compliance for your permit and rebate filings." },
    ],
    metaTitle: "Commercial Roof Warranty — 25-Year System Coverage | Roofing Friend",
    metaDescription: "Roofing Friend offers a 25-year commercial roof system warranty on standing seam metal and TPO installations across California. Materials, labor, and priority response included.",
  },
  {
    slug: "industrial",
    name: "Government & Public Sector",
    years: 25,
    yearLabel: "Spec-Grade Coverage",
    tagline: "Veteran-owned, GSA-friendly metal roofing for federal & municipal projects",
    description:
      "Roofing Friend is a veteran-owned roofing contractor delivering spec-grade standing seam metal roof systems for federal facilities, military bases, municipal buildings, school districts, and public-sector projects. Our government & public sector coverage matches the system warranty terms required by federal and state procurement specs — typically 20-to-25-year non-prorated manufacturer system warranties — plus full workmanship coverage. We deliver every project to the spec, with the documentation package agencies expect.",
    whatsCovered: [
      "Standing seam metal panels — manufacturer system warranty per project spec",
      "Membrane, fasteners, sealants, flashing, and edge metal installed by Roofing Friend",
      "Workmanship and labor matched to the procurement specification",
      "Wind uplift, fire rating, and energy performance per spec requirements",
      "Submittal and close-out documentation packages for agency records",
      "Priority response on warranted callbacks for mission-critical facilities",
    ],
    limitations: [
      "Damage from third-party trades or unrelated capital projects is excluded",
      "Modifications or rooftop equipment additions outside Roofing Friend's scope are excluded",
      "Natural disasters (wildfire, seismic, named storm) are excluded — handled by agency risk programs",
      "Use beyond the design occupancy or load specification is excluded",
      "Warranty terms are governed by the controlling project specification",
    ],
    californiaLaw:
      "Public-sector roofing in California is governed by the controlling procurement specification (federal FAR, GSA, DGS, school district spec, etc.) layered on top of the CSLB licensing minimum (1-year workmanship), Title 24 energy performance, and local building code. Roofing Friend, as a veteran-owned licensed California contractor, delivers to whichever spec controls the project and provides the documentation package the agency requires.",
    lemonInfo:
      "Government and public-sector contracts include their own dispute resolution and warranty enforcement frameworks (FAR, contract-specific T&Cs, prompt-pay statutes, etc.) that supplement California Commercial Code and CSLB enforcement. Roofing Friend honors the warranty terms in each contract and works directly with the agency project officer to resolve any covered issue within the specified response window.",
    claimSteps: [
      { title: "Contact Project Officer", description: "Submit the warranty request through the contracting officer or facility manager with project number, install date, and issue description." },
      { title: "Priority Site Visit", description: "We schedule a site visit on a timeline matched to the contract spec — typically within 48 hours for mission-critical facilities." },
      { title: "Repair to Spec", description: "Repairs are completed to the original procurement specification, with manufacturer coordination and any required testing or inspection." },
      { title: "Close-Out Package", description: "You receive a full close-out documentation package — repair report, updated warranty certificate, and any manufacturer claim records — for the agency file." },
    ],
    faqs: [
      { question: "Is Roofing Friend qualified for federal and government roofing contracts?", answer: "Yes. Roofing Friend is a veteran-owned, California-licensed roofing contractor experienced with federal, military, municipal, and school district procurement specs. We deliver to the controlling spec and provide the documentation package agencies require." },
      { question: "What warranty terms apply on government projects?", answer: "Warranty terms are set by the controlling procurement specification — typically a 20-to-25-year non-prorated manufacturer system warranty plus workmanship coverage. We match the spec on every project and provide the certificates required for close-out." },
      { question: "Do you handle GSA, DGS, school district, and municipal projects?", answer: "Yes — we work across federal (GSA, DoD, VA), California state (DGS), county, municipal, and K-12/community college roofing projects. Each project is delivered to its controlling spec." },
      { question: "How does the veteran-owned status help on federal projects?", answer: "Veteran-owned status (SDVOSB / VOSB where applicable) supports federal small-business set-aside programs and is often a scoring factor on federal solicitations. We're proud to bring veteran-owned values to public-sector roofing." },
      { question: "How fast do you respond to government warranty claims?", answer: "We prioritize public-sector and mission-critical facility claims. Response timelines match the contract spec — typically 48 hours for inspections and same-day or next-day for active-leak emergencies on critical facilities." },
      { question: "What documentation do agencies receive at project close-out?", answer: "Full submittal binder, manufacturer system warranty certificates, Roofing Friend workmanship warranty, Title 24 / CRRC compliance documentation, fastener and uplift testing records, and any project-specific deliverables required by the spec." },
    ],
    metaTitle: "Government & Public Sector Roof Warranty | Veteran-Owned | Roofing Friend",
    metaDescription: "Roofing Friend is a veteran-owned California roofing contractor delivering spec-grade standing seam metal roofs for federal, military, school district, and municipal projects.",
  },
];

export const warrantyOverviewFaqs: { question: string; answer: string }[] = [
  { question: "What warranty does Roofing Friend offer on metal roofs?", answer: "Roofing Friend offers up to a 50-year manufacturer paint and substrate warranty plus a long-term labor warranty on residential standing seam metal roofs, a 25-year system warranty on commercial standing seam and TPO installations, and spec-grade coverage matched to the procurement specification on government and public-sector projects." },
  { question: "Why are commercial and government warranties shorter than residential?", answer: "Commercial and public-sector roofs face more rooftop traffic (HVAC, solar, telecom), more penetrations, and stricter spec requirements than residential. Manufacturer system warranties for these applications top out at 25 years today — still 25× the California CSLB minimum." },
  { question: "Are Roofing Friend warranties transferable?", answer: "Residential roof warranties transfer automatically to the new homeowner — a major resale advantage. Commercial and government system warranties are non-transferable by default but can be transferred with written agreement and re-inspection." },
  { question: "What California laws protect me on roofing warranties?", answer: "The CSLB requires a 1-year minimum workmanship warranty. SB 800 (Right to Repair Act) covers residential roofing defects on new construction for up to 10 years. Title 24 governs cool roof energy performance. The Song-Beverly Act adds consumer protections when warranted products repeatedly fail. Roofing Friend exceeds every minimum." },
  { question: "How do I file a warranty claim?", answer: "Call us or submit the warranty form online with your install date and a description of the issue. We'll schedule a free inspection — typically within 48 hours — and complete any covered work at no cost." },
  { question: "What is not covered under any roof warranty?", answer: "No roof warranty (manufacturer or contractor) covers natural disasters (wildfire, hail, earthquake, named storm), damage from third-party trades like solar or HVAC contractors, or use beyond the system's design specification. Those losses are handled by insurance — and metal roofs qualify for California FAIR Plan and admitted-carrier wildfire discounts." },
];
