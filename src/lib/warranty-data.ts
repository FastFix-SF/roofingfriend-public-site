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
    slug: "commercial",
    name: "Commercial",
    years: 3,
    yearLabel: "3-Year Warranty",
    tagline: "Built for business continuity",
    description:
      "West Peak provides a comprehensive 3-year warranty on all commercial plumbing and trenchless repairs. This covers CIPP liners, pipe bursting, repiping, and water heater installations in offices, retail spaces, restaurants, and multi-unit commercial properties across the Bay Area. California's Contractors State License Board (CSLB) requires a minimum 1-year warranty on contractor work — West Peak triples that standard.",
    whatsCovered: [
      "All trenchless pipe repairs (CIPP, brush coating, spray coating, pipe bursting)",
      "Commercial water heater installations and replacements",
      "Repiping and sewer line repairs",
      "Materials and labor for the full warranty period",
      "Emergency callbacks related to warranted work at no extra charge",
      "Fixture installations (toilets, sinks, faucets) in commercial spaces",
    ],
    limitations: [
      "Does not cover damage caused by third-party construction or excavation",
      "Does not cover pre-existing conditions not disclosed during inspection",
      "Natural disasters and acts of God are excluded",
      "Warranty is non-transferable unless agreed in writing",
    ],
    californiaLaw:
      "Under California law, the Contractors State License Board (CSLB) requires licensed contractors to warrant their work for a minimum of one year. West Peak exceeds this by providing a full 3-year warranty on all commercial plumbing services. California Business and Professions Code §7159 also requires contractors to include warranty terms in written contracts for projects over $500.",
    lemonInfo:
      "California's \"lemon law\" (Song-Beverly Consumer Warranty Act) primarily covers consumer goods, but the principles extend to contractor work. If a commercial plumbing repair fails repeatedly within the warranty period, West Peak will either re-repair the issue at no cost or provide a full refund for the affected service. Under CSLB regulations, contractors who fail to honor warranties can face license suspension or revocation.",
    claimSteps: [
      { title: "Contact Us", description: "Call or submit a warranty claim through our website. Include your original service date and description of the issue." },
      { title: "Inspection", description: "We'll schedule a free inspection within 48 hours to assess the issue and determine if it's covered under warranty." },
      { title: "Resolution", description: "If covered, we'll complete the repair at no additional cost. Most warranty repairs are completed within 1–2 business days." },
      { title: "Documentation", description: "You'll receive a written report of the repair and an updated warranty certificate for your records." },
    ],
    faqs: [
      { question: "What does the 3-year commercial warranty cover?", answer: "Our commercial warranty covers all materials and labor for trenchless repairs, repiping, water heater installations, and fixture work performed by West Peak. If any warranted work fails within 3 years, we'll fix it at no cost." },
      { question: "Why is the commercial warranty 3 years instead of longer?", answer: "Commercial plumbing systems face heavier use, harsher chemicals, and more complex regulatory requirements than residential systems. California's CSLB requires a minimum 1-year warranty — we triple that. We're actively working with industry partners to extend commercial warranties as regulations and material certifications evolve." },
      { question: "Is the warranty transferable if I sell my business?", answer: "Commercial warranties are non-transferable by default, but we can arrange a transfer with written agreement. Contact us before the sale to discuss options." },
      { question: "What happens if a repair fails during the warranty period?", answer: "We'll re-inspect and repair the issue at no charge. If the same repair fails three times, we'll provide an alternative solution or full refund for the affected service, consistent with California's consumer protection standards." },
      { question: "Does the warranty cover damage from other contractors?", answer: "No. If another contractor damages our work during their own project, the warranty does not cover that damage. However, we can help document the issue for your insurance or legal claim against the responsible party." },
      { question: "What California laws protect me regarding contractor warranties?", answer: "California Business and Professions Code §7159 requires written warranty terms in contracts over $500. The CSLB mandates a minimum 1-year warranty, and contractors who refuse to honor warranties face disciplinary action including license revocation. West Peak exceeds all minimum requirements." },
    ],
    metaTitle: "Commercial Plumbing Warranty — 3-Year Coverage | West Peak",
    metaDescription: "West Peak offers a 3-year warranty on all commercial plumbing and trenchless repairs in the Bay Area. Triple the California CSLB minimum. Materials + labor included.",
  },
  {
    slug: "industrial",
    name: "Industrial",
    years: 3,
    yearLabel: "3-Year Warranty",
    tagline: "Heavy-duty pipe solutions",
    description:
      "Industrial plumbing systems operate under extreme conditions — high pressure, corrosive materials, and constant use. West Peak provides a 3-year warranty on all industrial trenchless repairs and pipe installations. We're actively working to extend industrial warranty terms as material certifications and regulatory frameworks evolve, but current California regulations and manufacturer specifications set the standard at 3 years for industrial applications.",
    whatsCovered: [
      "Industrial-grade CIPP liners and pipe bursting installations",
      "High-capacity water heater systems and boiler connections",
      "Large-diameter sewer and drain line repairs",
      "Materials and labor for the full 3-year warranty period",
      "Emergency service calls for warranted work at no extra charge",
      "Directional boring and underground pipe installations",
    ],
    limitations: [
      "Does not cover damage from chemical exposure beyond manufacturer specifications",
      "Excludes damage from unauthorized modifications or third-party work",
      "Natural disasters, seismic events, and acts of God are excluded",
      "Systems operating beyond manufacturer-rated capacity are excluded",
      "Warranty is non-transferable unless agreed in writing",
    ],
    californiaLaw:
      "California's CSLB requires a minimum 1-year warranty on all contractor work, including industrial projects. For industrial plumbing, additional regulations under CalOSHA and local building codes may apply. West Peak triples the CSLB minimum with a 3-year warranty and complies with all applicable industrial safety and building standards.",
    lemonInfo:
      "While California's Song-Beverly Act focuses on consumer goods, industrial clients are protected under California Commercial Code and the CSLB's enforcement mechanisms. If warranted industrial work fails repeatedly, West Peak will provide re-repair at no cost or a refund. Contractors who fail to honor warranty obligations on industrial projects face CSLB disciplinary action and potential civil liability.",
    claimSteps: [
      { title: "Report the Issue", description: "Contact our industrial services team directly. Provide your project ID, service date, and a description of the failure." },
      { title: "Priority Inspection", description: "We prioritize industrial warranty claims due to operational impact. Inspection is typically scheduled within 24 hours." },
      { title: "Repair or Replace", description: "Covered repairs are completed on an expedited timeline to minimize downtime. We coordinate with facility management for access scheduling." },
      { title: "Compliance Documentation", description: "Receive full documentation of the repair for your compliance records, including updated warranty certificates and inspection reports." },
    ],
    faqs: [
      { question: "Why is the industrial warranty limited to 3 years?", answer: "Industrial systems face extreme conditions — high pressure, chemical exposure, and constant throughput. Current material certifications and California regulatory frameworks set practical limits on warranty terms for industrial applications. We're working with manufacturers and industry groups to extend these terms as technology improves." },
      { question: "What industrial plumbing work does the warranty cover?", answer: "All trenchless repairs (CIPP, pipe bursting, directional boring), large-diameter pipe installations, industrial water heater systems, and sewer/drain line repairs performed by West Peak are covered for 3 years." },
      { question: "How fast do you respond to industrial warranty claims?", answer: "We prioritize industrial claims due to the operational and financial impact of downtime. Inspections are typically scheduled within 24 hours, and most warranty repairs are completed within 1–3 business days." },
      { question: "Are we protected if the same repair fails multiple times?", answer: "Yes. If the same warranted repair fails three or more times, we'll provide an alternative engineered solution or a full refund for that service. This exceeds California's minimum contractor warranty requirements." },
      { question: "Does the warranty transfer if the facility changes ownership?", answer: "Industrial warranties are non-transferable by default. Contact us before any ownership change to discuss transfer options — we can often accommodate transfers with written agreement." },
      { question: "What regulations govern industrial plumbing warranties in California?", answer: "CSLB licensing requirements (min 1-year warranty), CalOSHA safety standards, and local building/plumbing codes all apply. West Peak complies with all regulations and exceeds the minimum warranty requirement by 3x." },
    ],
    metaTitle: "Industrial Plumbing Warranty — 3-Year Coverage | West Peak",
    metaDescription: "West Peak provides a 3-year warranty on industrial trenchless repairs and pipe installations. Heavy-duty coverage for Bay Area facilities. Materials + labor included.",
  },
  {
    slug: "residential",
    name: "Residential",
    years: 40,
    yearLabel: "40-Year Warranty",
    tagline: "Lifetime protection for your home",
    description:
      "West Peak offers an industry-leading 40-year warranty on residential plumbing and trenchless repairs — the longest in the Bay Area. This exceptional coverage is backed by both West Peak and our material manufacturers. California's SB 800 (Right to Repair Act) provides additional protections for homeowners, covering construction defects for up to 10 years on certain plumbing systems. West Peak goes far beyond these minimums with four decades of guaranteed protection.",
    whatsCovered: [
      "All residential trenchless repairs (CIPP liners, pipe bursting, brush & spray coating)",
      "Whole-home repiping (copper, PEX, CPVC)",
      "Water heater installations and replacements",
      "Sewer and drain line repairs",
      "Materials and labor for the full 40-year warranty period",
      "Emergency callbacks related to warranted work at no extra charge",
      "Fixture installations performed as part of a larger plumbing project",
    ],
    limitations: [
      "Does not cover damage caused by homeowner modifications or third-party work",
      "Natural disasters, earthquakes, and acts of God are excluded",
      "Pre-existing conditions not identified during initial inspection are excluded",
      "Cosmetic damage to finishes unrelated to plumbing function is excluded",
    ],
    californiaLaw:
      "California provides robust protections for residential property owners. SB 800 (the Right to Repair Act) establishes warranty standards for new construction, covering plumbing system defects for up to 10 years. The CSLB requires a minimum 1-year contractor warranty. California Civil Code §896 defines specific performance standards for plumbing systems in residential construction. West Peak's 40-year warranty dramatically exceeds all of these minimums.",
    lemonInfo:
      "California's Song-Beverly Consumer Warranty Act (the \"Lemon Law\") protects consumers when products fail to meet warranty standards after a reasonable number of repair attempts. While originally designed for vehicles, the principles apply broadly. For residential plumbing, if a warranted repair fails repeatedly, homeowners have the right to demand a replacement solution or refund. SB 800 adds another layer: homeowners must give contractors the \"right to repair\" before filing a lawsuit, which means West Peak gets the opportunity to fix the issue first — and we always do. Under our 40-year warranty, you're protected for decades beyond what the law requires.",
    claimSteps: [
      { title: "Call or Submit Online", description: "Contact us by phone or submit a warranty claim on our website. Include your address, original service date, and a description of the issue." },
      { title: "Free Home Inspection", description: "We'll schedule a free inspection at your convenience — typically within 48 hours. We'll assess the issue and confirm warranty coverage." },
      { title: "No-Cost Repair", description: "If the issue is covered, we'll complete the repair at absolutely no cost to you. Most residential warranty repairs are done in a single visit." },
      { title: "Updated Documentation", description: "You'll receive an updated warranty certificate and a written report of the work performed for your home records." },
    ],
    faqs: [
      { question: "Is the 40-year residential warranty really free?", answer: "Yes. The 40-year warranty is included with every residential plumbing project at no additional cost. It covers both materials and labor. There are no hidden fees, deductibles, or service charges for warranty claims." },
      { question: "What makes a 40-year warranty possible?", answer: "Modern trenchless materials like epoxy-cured CIPP liners and HDPE pipes are rated for 50–100+ years of service life. Combined with West Peak's installation expertise and quality control, we're confident enough in the work to back it for 40 years." },
      { question: "Does the warranty transfer if I sell my home?", answer: "Yes! Our residential warranty transfers to the new homeowner automatically. This adds significant value to your property and gives buyers peace of mind." },
      { question: "What is SB 800 and how does it protect me?", answer: "SB 800 (the Right to Repair Act) is a California law that establishes warranty standards for residential construction. It requires contractors to fix defects before homeowners can file lawsuits, and it covers plumbing system defects for up to 10 years on new construction. West Peak's 40-year warranty goes far beyond SB 800's requirements." },
      { question: "What if the same repair fails more than once?", answer: "If a warranted repair fails after two attempts, we'll provide an upgraded or alternative solution at no cost. Under California's consumer protection laws, you're also entitled to seek a refund if a contractor can't resolve a warranty issue after reasonable attempts." },
      { question: "Does the warranty cover earthquake damage?", answer: "Natural disasters including earthquakes are excluded from warranty coverage. However, we offer post-disaster inspection and repair services, and many homeowners' insurance policies cover earthquake-related plumbing damage." },
      { question: "How does this compare to other plumbing companies' warranties?", answer: "Most Bay Area plumbers offer 1–5 year warranties. Our 40-year residential warranty is the longest in the region and one of the longest in California. The CSLB minimum is just 1 year." },
    ],
    metaTitle: "40-Year Residential Plumbing Warranty | Bay Area's Best | West Peak",
    metaDescription: "West Peak offers an industry-leading 40-year warranty on residential plumbing and trenchless repairs in the Bay Area. Transferable. Materials + labor included. Exceeds California SB 800.",
  },
];

export const warrantyOverviewFaqs: { question: string; answer: string }[] = [
  { question: "What warranty does West Peak offer on plumbing work?", answer: "West Peak offers a 40-year warranty on residential plumbing, and a 3-year warranty on both commercial and industrial projects. All warranties cover materials and labor and exceed California's CSLB minimum of 1 year." },
  { question: "Why are commercial and industrial warranties shorter than residential?", answer: "Commercial and industrial systems face heavier use, harsher chemicals, and more complex regulatory environments. Current material certifications and California regulations set practical limits for these applications. We're actively working to extend these terms as technology and regulations evolve." },
  { question: "Are West Peak warranties transferable?", answer: "Residential warranties transfer automatically to new homeowners. Commercial and industrial warranties are non-transferable by default but can be transferred with written agreement." },
  { question: "What California laws protect me regarding plumbing warranties?", answer: "The CSLB requires a minimum 1-year contractor warranty. SB 800 (Right to Repair Act) covers residential construction defects for up to 10 years. The Song-Beverly Act protects consumers when products fail to meet warranty standards. West Peak exceeds all of these minimums." },
  { question: "How do I file a warranty claim?", answer: "Call us or submit a claim online. We'll schedule a free inspection within 48 hours and complete any covered repairs at no cost. Most warranty repairs are done in 1–2 days." },
  { question: "What is not covered under warranty?", answer: "Warranties do not cover damage from third-party work, natural disasters, pre-existing conditions not disclosed during inspection, or systems operated beyond manufacturer specifications." },
];
