export interface HydroJettingService {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface HydroJettingFaq {
  question: string;
  answer: string;
}

export const hydroJettingServices: HydroJettingService[] = [
  {
    slug: "maintenance",
    name: "Preventive Maintenance",
    tagline: "Stop clogs before they start",
    description:
      "Think of it like an oil change for your pipes. Once a year, we blast high-pressure water through your drains to wash away grease, soap scum, and buildup — before it turns into a $2,000 emergency.",
    highlights: [
      "Annual jetting keeps drains flowing like new",
      "Removes grease, soap, and mineral buildup",
      "Prevents expensive emergency calls",
      "Takes about 1–2 hours for most homes",
      "Camera inspection included to check pipe health",
      "Ideal for older homes with cast iron or clay pipes",
    ],
  },
  {
    slug: "emergency",
    name: "Emergency Drain Clearing",
    tagline: "Backed up? We're on the way.",
    description:
      "When your toilet won't flush, your kitchen sink is filling up, or sewage is backing into your home — you need help now, not tomorrow. We offer same-day hydro jetting to blast through whatever is blocking your pipes and get your life back to normal.",
    highlights: [
      "Same-day emergency service available",
      "Clears complete blockages in minutes",
      "Works on kitchen, bathroom, and sewer lines",
      "No harsh chemicals — just pure water pressure",
      "We diagnose the cause so it doesn't happen again",
      "Available 7 days a week",
    ],
  },
  {
    slug: "roots",
    name: "Tree Root Removal",
    tagline: "Roots in your pipes? We cut them out.",
    description:
      "Tree roots are the #1 cause of sewer line blockages. They sneak into tiny cracks in your pipes and grow until they completely block the flow. Our hydro jetter cuts through roots like butter — no digging, no yard damage, no mess.",
    highlights: [
      "High-pressure water slices through roots instantly",
      "No digging or yard destruction required",
      "Camera inspection to find exactly where roots entered",
      "Prevents sewage backups and slow drains",
      "Can be paired with trenchless pipe lining for a permanent fix",
      "Safe for all pipe materials",
    ],
  },
  {
    slug: "commercial",
    name: "Commercial Jetting",
    tagline: "Restaurants, apartments, and businesses",
    description:
      "Commercial drains handle 10x more abuse than residential ones. Restaurants deal with grease, apartments deal with volume, and businesses can't afford downtime. We provide scheduled and emergency hydro jetting for commercial properties across the Bay Area.",
    highlights: [
      "Restaurant grease trap and drain line cleaning",
      "Apartment building main line maintenance",
      "Scheduled maintenance plans to avoid disruptions",
      "Compliant with health department requirements",
      "Minimal disruption — we work around your hours",
      "Fleet of equipment for any size job",
    ],
  },
];

export const hydroJettingFaqs: HydroJettingFaq[] = [
  {
    question: "What exactly is hydro jetting?",
    answer:
      "It's a high-pressure water hose that blasts grease, roots, and buildup out of your pipes. Think of it like a power washer, but for the inside of your plumbing. The water pressure is strong enough to cut through tree roots and dissolve years of grease buildup.",
  },
  {
    question: "Will hydro jetting damage my pipes?",
    answer:
      "No — when done by a professional, hydro jetting is safe for all pipe types including cast iron, PVC, clay, and copper. We always run a camera inspection first to check the condition of your pipes before we start. If your pipes are severely deteriorated, we'll recommend repair instead.",
  },
  {
    question: "How much does hydro jetting cost?",
    answer:
      "Most residential hydro jetting jobs run between $350–$600 depending on the severity of the blockage and which drain lines need clearing. Emergency and after-hours calls may cost more. We always give you a price before we start — no surprises.",
  },
  {
    question: "How often should I get my drains jetted?",
    answer:
      "For most homes, once a year is plenty. If you have large trees near your sewer line, every 6–12 months is smart. Restaurants and commercial kitchens should jet their grease lines every 3–6 months to stay compliant and avoid backups.",
  },
  {
    question: "Can hydro jetting remove tree roots?",
    answer:
      "Absolutely. The high-pressure water cuts through roots like a knife. However, if roots keep coming back, it means your pipe has cracks where they're getting in. In that case, we recommend pairing jetting with trenchless pipe lining for a permanent solution.",
  },
  {
    question: "What's the difference between snaking and hydro jetting?",
    answer:
      "A snake pokes a hole through the clog — hydro jetting removes the entire clog and cleans the pipe walls. Snaking is like poking a stick through mud; jetting is like power-washing it clean. Jetting lasts longer and prevents future clogs because nothing is left behind.",
  },
];
