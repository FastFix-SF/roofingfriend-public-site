export interface PlumbingService {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const plumbingServices: PlumbingService[] = [
  {
    slug: "plumbing-services",
    name: "Plumbing Services",
    tagline: "Get it right the first time — built for new construction",
    description:
      "New construction is the one chance to get your plumbing perfect. We handle everything from layout and rough-in to fixtures and final inspection. Doing it right now saves you tens of thousands in repairs later.",
    highlights: [
      "Complete rough-in: supply lines, drain lines, and venting done to code",
      "Layout planning that maximizes efficiency and minimizes future issues",
      "Fixture installation — sinks, toilets, showers, tubs, dishwashers",
      "Full code compliance and permit coordination",
      "Pressure testing before walls close up — catch problems early",
      "We work with your GC and schedule around your build timeline",
    ],
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    tagline: "Find hidden leaks before they become big damage",
    description:
      "A small leak behind a wall or under a slab can cause thousands in damage before you even notice it. We use electronic leak detection equipment to find the exact location — no guessing, no unnecessary demolition.",
    highlights: [
      "Non-invasive electronic detection — we find leaks without tearing up your home",
      "Slab leak detection — pinpoint leaks under concrete foundations",
      "Hidden pipe leaks behind walls, ceilings, and floors",
      "Water meter analysis to confirm if you have an active leak",
      "Thermal imaging for hard-to-find moisture problems",
      "Same-day detection and repair options available",
    ],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    tagline: "Clear, fast, and done right — residential & commercial",
    description:
      "Slow drains and backups don't fix themselves. We clear clogs professionally using the right tool for the job — from simple snaking to full hydro jetting. We also offer maintenance plans so clogs don't come back.",
    highlights: [
      "Kitchen, bathroom, and floor drain clearing",
      "Main sewer line cleaning and camera inspection",
      "Grease trap cleaning for restaurants and commercial kitchens",
      "Maintenance plans to prevent recurring clogs",
      "Same-day emergency service for backups and overflows",
      "Residential and commercial — apartments, offices, restaurants",
    ],
  },
];

export const plumbingFaqs = [
  {
    question: "Why is new construction the best time to get plumbing right?",
    answer:
      "Because the walls are open. Once drywall goes up, fixing plumbing mistakes costs 5–10x more. Getting the layout, pipe sizing, and drainage right during construction means fewer problems for decades.",
  },
  {
    question: "What does a plumbing rough-in include?",
    answer:
      "A rough-in is all the pipes that go inside your walls and floors before they're covered up — supply lines (hot and cold water), drain lines, and vent pipes. It's the skeleton of your plumbing system.",
  },
  {
    question: "How do you detect a leak without tearing up my home?",
    answer:
      "We use electronic listening devices and thermal cameras to pinpoint the exact location of a leak. This means we only need to open up the specific spot where the problem is — not your whole wall or floor.",
  },
  {
    question: "How do I know if I have a hidden leak?",
    answer:
      "Common signs: unexplained high water bills, the sound of running water when nothing is on, warm spots on floors, musty smells, or damp/discolored walls. If you notice any of these, call us for a detection.",
  },
  {
    question: "How often should I get my drains cleaned?",
    answer:
      "For most homes, once a year is enough to prevent buildup. If you have older pipes, lots of trees near your sewer line, or a commercial kitchen, every 6 months is better.",
  },
  {
    question: "Do you handle permits for new construction plumbing?",
    answer:
      "Yes. We coordinate all permits and inspections required by your local building department. Your plumbing will be fully code-compliant and pass inspection the first time.",
  },
];
