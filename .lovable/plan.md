

## Goal
Create a `/commercial-roofing` page modeled after `/trenchless/commercial`, and connect the homepage commercial roofing slide + sitemap to it. Use the uploaded image (image-4) as the hero.

## Structure (mirrors TrenchlessCommercial)

**New page**: `src/pages/CommercialRoofing.tsx`
- Hero (70vh) with uploaded image, title "Commercial Metal Roofing", subtitle "Standing Seam Roofs for Retail · Restaurants · Big-Box · Warehouses"
- "Why Commercial Properties Choose Metal Roofing" — 3 benefit cards (Longevity 40–70 yrs, Energy Savings 25–40%, Storm/Fire Resistant)
- "Solutions for Every Commercial Property" — 3 panels (Retail Centers & Shopping Plazas, Restaurants & QSR, Warehouses & Distribution)
- "Standing Seam Systems We Install" — 6 cards (Snap-Lock, Mechanical Seam, Tapered, Curved/Radius, Insulated Metal Panels, Retrofit Over-Existing) — each a styled tile (no sub-routes)
- CTA banner with overlay image
- FAQ accordion (6 Qs about cost per sq ft, lifespan, install over existing roof, warranty, energy savings, downtime)
- Full SEO: Helmet + JSON-LD (FAQPage, Service, HowTo)

## Wiring

1. **Asset**: copy `user-uploads://image-4.png` → `src/assets/hero-commercial-roofing.jpg` (overwrites existing unused file)
2. **Route**: add `/commercial-roofing` to `src/App.tsx` (lazy import)
3. **Homepage hero** (`src/pages/Index.tsx`): add a new commercial roofing slide (image-4) between the existing roof video slide and the veteran/government slide, with primary CTA "Get a Commercial Quote" (booking link) and secondary CTA "Learn More" → `/commercial-roofing`. Also point the existing veteran slide's "Learn More" to `/commercial-roofing` (instead of `/trenchless/commercial`).
4. **Sitemap**: add `/commercial-roofing` entry to `public/sitemap.xml`

## Files touched
- `src/assets/hero-commercial-roofing.jpg` (overwrite)
- `src/pages/CommercialRoofing.tsx` (new)
- `src/App.tsx` (route)
- `src/pages/Index.tsx` (new slide + fix veteran slide link)
- `public/sitemap.xml` (entry)

## Note
Navbar still says "West Peak Trenchless & Plumbing" — not changing it in this pass since the user hasn't approved a full rebrand. Page will live alongside existing plumbing pages.

