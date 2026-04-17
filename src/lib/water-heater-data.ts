export interface WaterHeaterService {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const waterHeaterServices: WaterHeaterService[] = [
  {
    slug: "maintenance",
    name: "Annual Maintenance",
    tagline: "Prevent $3,000+ Emergency Repairs With a $199 Checkup",
    description:
      "Most water heaters fail because nobody ever maintained them. Sediment builds up at the bottom of your tank, the anode rod corrodes, and pressure relief valves get stuck. By the time you notice — it's an emergency. Our annual maintenance flush removes sediment, tests the anode rod and relief valve, checks gas connections and venting, and inspects for early signs of corrosion. A 45-minute visit that adds 5–10 years to your water heater's life.",
    highlights: [
      "Full tank flush to remove sediment buildup",
      "Anode rod inspection — the #1 reason tanks fail early",
      "Pressure relief valve test for safety",
      "Gas line and venting inspection",
      "Temperature calibration for efficiency",
      "Written report with photos of your unit's condition",
    ],
  },
  {
    slug: "repair",
    name: "Repair First",
    tagline: "We Fix Water Heaters — We Don't Just Sell You a New One",
    description:
      "Here's what most plumbers won't tell you: 80% of water heater problems can be fixed for $200–$600. A bad thermocouple, a faulty gas valve, a leaking drain valve, a worn-out heating element — these are all repairs, not replacements. But many plumbers don't make money on repairs. They make money selling you a $3,000–$5,000 new unit. At West Peak, we diagnose the actual problem first and always recommend repairing if the fix will give you 5+ more years of reliable service. We only recommend replacement when it's truly the smarter financial decision.",
    highlights: [
      "Honest diagnosis — we show you exactly what's wrong",
      "Most repairs cost $200–$600 vs. $3,000–$5,000 for replacement",
      "We repair all brands: Rheem, Bradford White, AO Smith, Rinnai, Noritz",
      "Same-day repair service available in the Bay Area",
      "Thermocouple, gas valve, heating element, and pilot assembly repairs",
      "90-day warranty on all repair work",
    ],
  },
  {
    slug: "replace",
    name: "Replacement",
    tagline: "When Repair Isn't Worth It, We'll Tell You Honestly",
    description:
      "Sometimes replacement is the right call. If your tank is 15+ years old and leaking from the bottom, or if the repair cost exceeds 50% of a new unit, we'll recommend replacement — and explain exactly why. We install tank and tankless units from top manufacturers, handle all permits, and dispose of your old unit. No pressure, no upselling. Just the right water heater for your building's hot water demand.",
    highlights: [
      "We only recommend replacement when repair isn't cost-effective",
      "Free assessment: repair vs. replace cost comparison",
      "Tank and tankless options for every building size",
      "Same-day or next-day installation available",
      "Full permit handling and code-compliant installation",
      "10-year manufacturer warranty + 2-year labor warranty",
    ],
  },
  {
    slug: "upgrade",
    name: "Upgrade",
    tagline: "Go Tankless, Heat Pump, or Commercial-Grade",
    description:
      "If your building is growing or your hot water demand has changed, an upgrade can slash your energy bills by 20–50%. Tankless water heaters provide unlimited hot water on demand and last 20+ years. Heat pump water heaters use 60% less energy than standard tanks. Commercial-grade systems handle high-demand buildings with recirculation loops and multi-unit manifolds. We size the system to your actual usage — not a guess.",
    highlights: [
      "Tankless: unlimited hot water, 20+ year lifespan, wall-mounted",
      "Heat pump: uses 60% less energy, qualifies for California rebates",
      "Commercial-grade: high-capacity systems for multi-family and industrial",
      "Recirculation systems for instant hot water at every tap",
      "Energy bill analysis to calculate your actual savings",
      "Professional sizing based on fixture count and peak demand",
    ],
  },
  {
    slug: "rebate",
    name: "Golden State Rebate",
    tagline: "Get Up to $3,500+ Back From California for Going Energy-Efficient",
    description:
      "California wants you to switch to energy-efficient water heaters — and they'll pay you to do it. The TECH Clean California program offers up to $1,000 for heat pump water heaters. The Self-Generation Incentive Program (SGIP) adds more for qualifying systems. Bay Area local utilities (PG&E, EBMUD) stack additional rebates on top. Total savings can exceed $3,500. West Peak handles all the paperwork — we file the applications, track the approvals, and make sure you get every dollar you're entitled to.",
    highlights: [
      "TECH Clean California: up to $1,000 for heat pump water heaters",
      "SGIP (Self-Generation Incentive Program): additional rebates for qualifying systems",
      "PG&E and local utility rebates stack on top of state programs",
      "Total rebates can exceed $3,500 depending on your system",
      "We handle 100% of the paperwork and applications",
      "Income-qualified households may get even higher rebates",
    ],
  },
];

export const waterHeaterFaqs = [
  {
    question: "How much does water heater repair cost in the Bay Area?",
    answer:
      "Most water heater repairs cost between $200–$600 depending on the part and labor involved. Common repairs include thermocouples ($150–$300), gas valves ($300–$500), and heating elements ($200–$400). Compare that to $3,000–$5,000 for a full replacement. We always diagnose first and recommend repair when it makes financial sense.",
  },
  {
    question: "Should I repair or replace my water heater?",
    answer:
      "Our rule of thumb: if the repair costs less than 50% of a new unit and your water heater is under 12 years old, repair it. If the tank is leaking from the bottom (not a valve — the actual tank), replacement is the only option. We'll give you an honest assessment with a cost comparison so you can decide.",
  },
  {
    question: "How often should I maintain my water heater?",
    answer:
      "Annually. A yearly flush and inspection prevents sediment buildup (which kills efficiency and causes premature failure), checks the anode rod (which protects the tank from rusting out), and verifies safety devices are working. Most water heaters that fail prematurely were never maintained.",
  },
  {
    question: "What is the TECH Clean California water heater rebate?",
    answer:
      "TECH Clean California is a statewide program that pays homeowners and building owners up to $1,000 to switch from gas tank water heaters to energy-efficient heat pump water heaters. Combined with PG&E utility rebates and the federal tax credit, total incentives can exceed $3,500. West Peak handles all the paperwork for you.",
  },
  {
    question: "How much can I save with a tankless water heater?",
    answer:
      "Tankless water heaters use 20–35% less energy than standard tank heaters because they only heat water when you need it. For a typical commercial building, that's $300–$800 per year in energy savings. Plus, tankless units last 20+ years vs. 10–12 for tanks, so the lifetime savings are significant.",
  },
  {
    question: "Do you install water heaters in commercial buildings and apartments?",
    answer:
      "Yes. We specialize in commercial, multi-family, and industrial water heater services across the Bay Area. From a single unit in a restaurant to a 50-unit apartment building with central hot water, we size, install, and maintain systems for every building type.",
  },
];
