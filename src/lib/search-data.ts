export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // Pages
  { title: "Home", description: "West Peak Plumbing — Bay Area's trusted plumbing experts", href: "/", category: "Pages", keywords: ["home", "main", "landing"] },
  { title: "About Us", description: "Learn about West Peak Plumbing's team, mission, and values", href: "/about", category: "Pages", keywords: ["about", "team", "company", "who we are", "mission"] },
  { title: "Contact Us", description: "Get in touch with West Peak Plumbing for a free estimate", href: "/contact", category: "Pages", keywords: ["contact", "call", "phone", "email", "estimate", "quote"] },
  { title: "Reviews", description: "Read customer reviews and testimonials", href: "/reviews", category: "Pages", keywords: ["reviews", "testimonials", "ratings", "feedback", "stars"] },

  // Trenchless Services
  { title: "Trenchless Services", description: "5 trenchless pipe repair methods — no digging required", href: "/trenchless", category: "Trenchless", keywords: ["trenchless", "no dig", "pipe repair", "sewer", "underground"] },
  { title: "CIPP Pipe Lining", description: "Reline your pipes from the inside — no digging required. Lasts 50+ years.", href: "/trenchless/cipp", category: "Trenchless", keywords: ["cipp", "pipe lining", "reline", "epoxy", "liner", "cured in place"] },
  { title: "Brush Coating", description: "Seal every joint and crack with precision epoxy coating", href: "/trenchless/brush-coating", category: "Trenchless", keywords: ["brush", "coating", "epoxy", "seal", "joint", "crack"] },
  { title: "Spray Coating", description: "High-speed epoxy spray for complete pipe restoration", href: "/trenchless/spray-coating", category: "Trenchless", keywords: ["spray", "coating", "epoxy", "restoration", "polyurea"] },
  { title: "Pipe Bursting", description: "Replace your entire pipe without digging a trench", href: "/trenchless/pipe-bursting", category: "Trenchless", keywords: ["pipe bursting", "replace", "hdpe", "sewer line", "new pipe"] },
  { title: "Directional Boring", description: "Install new underground pipes without disturbing the surface", href: "/trenchless/directional-boring", category: "Trenchless", keywords: ["directional boring", "hdd", "horizontal", "drilling", "underground", "new pipe"] },
  { title: "Commercial Trenchless Plumbing", description: "Trenchless pipe repair for supermarkets, retail centers, and shopping plazas — zero downtime", href: "/trenchless/commercial", category: "Trenchless", keywords: ["commercial", "supermarket", "retail center", "shopping plaza", "no-dig", "commercial plumbing", "commercial sewer"] },
  { title: "Supermarket Pipe Repair", description: "No-dig sewer and drain repair for supermarkets and grocery stores in the Bay Area", href: "/trenchless/commercial", category: "Trenchless", keywords: ["supermarket", "grocery store", "no-dig", "sewer repair", "drain repair", "commercial"] },
  { title: "Industrial Trenchless Plumbing", description: "Trenchless pipe repair for factories, warehouses, and manufacturing plants — no production downtime", href: "/trenchless/industrial", category: "Trenchless", keywords: ["industrial", "factory", "warehouse", "manufacturing", "no-dig", "industrial plumbing", "industrial sewer"] },
  { title: "Factory Pipe Repair", description: "No-dig sewer and drain repair for factories and industrial facilities in the Bay Area", href: "/trenchless/industrial", category: "Trenchless", keywords: ["factory", "industrial facility", "no-dig", "sewer repair", "drain repair", "manufacturing plant"] },

  // Plumbing Services
  { title: "Plumbing Services", description: "New construction plumbing — get it right the first time", href: "/plumbing", category: "Plumbing", keywords: ["plumbing", "new construction", "rough-in", "fixtures", "installation"] },
  { title: "Leak Detection", description: "Find hidden leaks before they become big damage", href: "/plumbing", category: "Plumbing", keywords: ["leak", "detection", "hidden", "slab leak", "thermal", "water damage"] },
  { title: "Drain Cleaning", description: "Clear, fast, and done right — residential & commercial", href: "/plumbing", category: "Plumbing", keywords: ["drain", "cleaning", "clog", "backup", "sewer", "snake"] },

  // Water Heater
  { title: "Water Heater Services", description: "Repair, replace, or upgrade your water heater", href: "/water-heater", category: "Water Heater", keywords: ["water heater", "hot water", "tank", "tankless"] },
  { title: "Water Heater Maintenance", description: "Prevent $3,000+ emergency repairs with a $199 checkup", href: "/water-heater", category: "Water Heater", keywords: ["maintenance", "flush", "anode rod", "annual", "checkup"] },
  { title: "Water Heater Repair", description: "We fix water heaters — we don't just sell you a new one", href: "/water-heater", category: "Water Heater", keywords: ["repair", "fix", "thermocouple", "gas valve", "element"] },
  { title: "Water Heater Replacement", description: "When repair isn't worth it, we'll tell you honestly", href: "/water-heater", category: "Water Heater", keywords: ["replacement", "new", "install", "tank", "tankless"] },
  { title: "Water Heater Upgrade", description: "Go tankless, heat pump, or commercial-grade", href: "/water-heater", category: "Water Heater", keywords: ["upgrade", "tankless", "heat pump", "energy efficient"] },

  // Hydro Jetting
  { title: "Hydro Jetting", description: "High-pressure water jetting to clear drains and sewer lines", href: "/hydro-jetting", category: "Hydro Jetting", keywords: ["hydro jetting", "high pressure", "water", "clear", "drain"] },
  { title: "Preventive Drain Maintenance", description: "Stop clogs before they start with annual hydro jetting", href: "/hydro-jetting", category: "Hydro Jetting", keywords: ["preventive", "maintenance", "annual", "buildup"] },
  { title: "Emergency Drain Clearing", description: "Backed up? Same-day hydro jetting service available", href: "/hydro-jetting", category: "Hydro Jetting", keywords: ["emergency", "backup", "same day", "urgent", "clog"] },
  { title: "Tree Root Removal", description: "Roots in your pipes? We cut them out with hydro jetting", href: "/hydro-jetting", category: "Hydro Jetting", keywords: ["tree roots", "roots", "sewer", "blockage"] },
  { title: "Commercial Jetting", description: "Restaurant, apartment, and business drain cleaning", href: "/hydro-jetting", category: "Hydro Jetting", keywords: ["commercial", "restaurant", "grease", "business"] },

  // Pipes
  { title: "Aging Pipes", description: "Is your home's plumbing past its expiration date?", href: "/pipes", category: "Pipes", keywords: ["aging", "old pipes", "galvanized", "cast iron", "clay", "polybutylene", "repipe"] },

  // Warranty
  { title: "Warranty Overview", description: "Industry-leading warranties on all plumbing work", href: "/warranty", category: "Warranty", keywords: ["warranty", "guarantee", "coverage", "protection"] },
  { title: "Residential Warranty (40-Year)", description: "Lifetime protection for your home — the longest in the Bay Area", href: "/warranty/residential", category: "Warranty", keywords: ["residential", "40 year", "home", "transferable"] },
  { title: "Commercial Warranty (3-Year)", description: "Built for business continuity — triple the California minimum", href: "/warranty/commercial", category: "Warranty", keywords: ["commercial", "3 year", "business", "office"] },
  { title: "Industrial Warranty (3-Year)", description: "Heavy-duty pipe solutions for industrial facilities", href: "/warranty/industrial", category: "Warranty", keywords: ["industrial", "3 year", "factory", "facility", "heavy duty"] },

  // Rebates
  { title: "Rebates & Incentives", description: "Save thousands with California rebate programs", href: "/rebates", category: "Rebates", keywords: ["rebates", "incentives", "savings", "california", "money"] },
  { title: "TECH Clean California", description: "Up to $3,000+ for heat pump water heaters", href: "/rebates", category: "Rebates", keywords: ["tech clean", "heat pump", "rebate", "state"] },
  { title: "Federal Tax Credit (25C)", description: "30% of cost, up to $2,000 per year for energy-efficient upgrades", href: "/rebates", category: "Rebates", keywords: ["federal", "tax credit", "25c", "ira", "inflation reduction"] },
  { title: "HEEHRA Rebates", description: "Up to $8,000 for low/moderate income households", href: "/rebates", category: "Rebates", keywords: ["heehra", "electrification", "low income", "point of sale"] },
  { title: "Peninsula Clean Energy", description: "Up to $2,500 for San Mateo County heat pump upgrades", href: "/rebates", category: "Rebates", keywords: ["peninsula", "san mateo", "clean energy"] },

  // Referral
  { title: "Referral Program", description: "Earn 5–10% commission referring customers to West Peak", href: "/referral", category: "Referral", keywords: ["referral", "commission", "earn", "refer", "money", "payout"] },
];

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return searchIndex.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.some((k) => k.includes(q))
    );
  });
}
