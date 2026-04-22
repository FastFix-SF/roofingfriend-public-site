import { cities } from "@/lib/cities-data";

export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

const cityItems: SearchItem[] = cities.map((c) => ({
  title: c.name,
  description: c.tagline,
  href: `/locations/${c.slug}`,
  category: "Locations",
  keywords: [c.name.toLowerCase(), c.region.toLowerCase(), "roofing", "metal roof", c.slug],
}));

export const searchIndex: SearchItem[] = [
  // Pages
  { title: "Home", description: "The Roofing Friend — Premium metal roofing across the SF Bay Area", href: "/", category: "Pages", keywords: ["home", "main", "landing"] },
  { title: "About Us", description: "Veteran-owned California roofing contractor — our story and values", href: "/about", category: "Pages", keywords: ["about", "team", "company", "veteran", "mission"] },
  { title: "Contact Us", description: "Get a free roof assessment from The Roofing Friend", href: "/contact", category: "Pages", keywords: ["contact", "call", "phone", "email", "quote", "estimate"] },
  { title: "Reviews", description: "Read customer reviews and 5-star testimonials", href: "/reviews", category: "Pages", keywords: ["reviews", "testimonials", "ratings", "feedback", "stars"] },

  // Roofing Systems
  { title: "Commercial Roofing", description: "Standing seam, R-Panel, Multi-V & TPO metal roofing for Bay Area businesses", href: "/commercial-roofing", category: "Roofing", keywords: ["commercial", "metal roof", "tpo", "standing seam", "warehouse", "retail"] },
  { title: "Standing Seam", description: "Premium architectural metal roof — 50+ year lifespan, Class A fire rating", href: "/commercial-roofing", category: "Roofing", keywords: ["standing seam", "metal", "architectural", "premium", "kynar", "pvdf"] },
  { title: "R-Panel System", description: "Affordable, durable metal panels for homes, barns and ag buildings", href: "/commercial-roofing", category: "Roofing", keywords: ["r-panel", "agricultural", "barn", "shed", "metal panel", "affordable"] },
  { title: "Multi-V Panel", description: "Architectural style metal roofing for luxury residential homes", href: "/commercial-roofing", category: "Roofing", keywords: ["multi-v", "luxury", "residential", "architectural", "estate"] },
  { title: "TPO Commercial", description: "Energy-efficient single-ply membrane for flat commercial roofs", href: "/commercial-roofing", category: "Roofing", keywords: ["tpo", "flat roof", "membrane", "commercial", "energy efficient"] },

  // Warranty
  { title: "Warranty Overview", description: "Industry-leading metal roof warranties — up to 50 years", href: "/warranty", category: "Warranty", keywords: ["warranty", "guarantee", "coverage", "protection", "50 year"] },
  { title: "Residential Warranty", description: "Up to 50-year manufacturer paint & substrate coverage", href: "/warranty/residential", category: "Warranty", keywords: ["residential", "home", "transferable", "50 year"] },
  { title: "Commercial Warranty", description: "25-year system warranty for retail, restaurants & warehouses", href: "/warranty/commercial", category: "Warranty", keywords: ["commercial", "25 year", "business", "office"] },
  { title: "Industrial / Government Warranty", description: "Spec-grade coverage for federal and municipal projects", href: "/warranty/industrial", category: "Warranty", keywords: ["industrial", "government", "federal", "gsa", "spec-grade"] },

  // Rebates
  { title: "Rebates & Incentives", description: "California cool-roof rebates, FAIR Plan discounts & §179D deductions", href: "/rebates", category: "Rebates", keywords: ["rebates", "incentives", "savings", "california", "cool roof"] },
  { title: "Title 24 Cool Roof", description: "California-mandated cool-roof reflectance for energy savings", href: "/rebates", category: "Rebates", keywords: ["title 24", "cool roof", "reflectance", "energy"] },
  { title: "FAIR Plan Discount", description: "Up to 13.8% wildfire insurance discount with Class A metal roofs", href: "/rebates", category: "Rebates", keywords: ["fair plan", "wildfire", "insurance", "discount", "wui"] },
  { title: "Federal §179D Deduction", description: "Up to $5.94/sq ft for energy-efficient commercial roofs", href: "/rebates", category: "Rebates", keywords: ["179d", "federal", "tax deduction", "commercial"] },

  // Referral
  { title: "Referral Program", description: "Refer a friend to The Roofing Friend and earn commission on every install", href: "/referral", category: "Referral", keywords: ["referral", "commission", "earn", "refer", "payout"] },

  // Locations
  ...cityItems,
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
