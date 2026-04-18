

## Goal
Swap the commercial roofing hero image to the new "Roofing Friend crew on the L.A.Z. Boy roof" photo, and beef up `/commercial-roofing` so it matches the depth of the top West Peak pages (HydroJetting, WaterHeater).

## Changes

**1. Asset**
- Copy `user-uploads://image-6.png` → `src/assets/hero-commercial-roofing.jpg` (overwrites current hero)
- Used in two places automatically: the homepage hero slide and the `/commercial-roofing` page hero/CTA banner — both already import this file, no other wiring needed.

**2. `src/pages/CommercialRoofing.tsx` — expand to "flagship page" depth**

Keep what's already there (Hero, "Why", Solutions, Standing Seam Systems grid, CTA, FAQ, JSON-LD) and add the two sections that the top pages have:

- **Service Cards Slider** (right under hero, mirrors HydroJetting/WaterHeater pattern): horizontal-scroll cards for Retail Centers, Restaurants & QSR, Warehouses & Distribution, Office Parks, Big-Box Retail, Auto Dealerships — each with title, blurb, "Get a Quote" link.
- **Promo Grid** (2-column): 
  - Tile A: "Veteran-Owned, Government-Trusted" → links to relevant slide context
  - Tile B: "PG&E Energy Rebates Available" → highlights cool-roof Title 24 credits

Also add a third trust block:
- **"What's Included with Every Commercial Roof"** — 4-up checklist (Drone roof survey, Engineered uplift calcs, Phased install w/ zero tenant disruption, 30-yr paint + 40-yr weathertightness warranty)

Final page section order:
1. Hero
2. Service Cards Slider (NEW)
3. Why Commercial Properties Choose Metal Roofing
4. Promo Grid (NEW)
5. Solutions for Every Commercial Property
6. Standing Seam Systems We Install
7. What's Included (NEW)
8. CTA banner
9. FAQ

**3. Navbar discoverability**
- Add a `Roofing` link to the desktop + mobile nav in `src/components/Navbar.tsx` pointing to `/commercial-roofing`, so the new page is reachable from anywhere on the site (currently only reachable from the homepage hero).

## Files touched
- `src/assets/hero-commercial-roofing.jpg` (overwrite)
- `src/pages/CommercialRoofing.tsx` (add 3 new sections, keep existing)
- `src/components/Navbar.tsx` (add `Roofing` link)

## Out of scope
- Not touching the Index hero slide content — the existing "Metal Roofing for Commercial" slide already uses `hero-commercial-roofing.jpg`, so swapping the asset updates it automatically.
- Not rebranding the whole site to "The Roofing Friend" — the photo's banner is just visual content, navbar stays "West Peak".

