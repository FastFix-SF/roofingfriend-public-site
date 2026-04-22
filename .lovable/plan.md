

## Goal

Turn the 13 city pages into deep, SEO + AEO-optimized hubs, and add **3 affluent neighborhood sub-pages per city** (39 new pages) framed around premium / award-winning architecture and historic homes — the kind of properties where homeowners actively pay for top-tier metal roofing.

## What you'll get

### 1. Beefed-up city pages (all 13)

Each existing `/locations/:city` page gets new SEO + AEO sections:

- **Local FAQ** (5–6 Q&As per city, e.g. "Do you handle [city] permits?", "How long does a metal reroof take in [city]?", "What roof is best for [city] microclimate?") — rendered with `FAQPage` JSON-LD schema for AI Overviews / Google AEO.
- **"Neighborhoods we serve in [city]"** section — 3 cards linking to the new neighborhood sub-pages.
- **Expanded local copy** — a second long-form paragraph per city covering climate, common roof types, and permit specifics (boosts content depth for SEO).
- **BreadcrumbList JSON-LD** — Home › Locations › [City].
- **Service-area expansion** in `RoofingContractor` schema — list each neighborhood as an `areaServed`.

### 2. New neighborhood sub-pages (39 total)

New route: `/locations/:city/:neighborhood` (e.g. `/locations/san-francisco/pacific-heights`).

Each page contains:

- **Hero** — "Metal Roofing in [Neighborhood], [City]" + tagline.
- **Architecture & history** section — what makes the neighborhood notable (Victorian, Craftsman, Mid-Century Modern, AIA-honored homes, historic-district designations, landmark status).
- **Why metal works here** — tied to the architectural style (e.g. standing seam complements modernist lines; copper accents on Victorians).
- **Premium materials section** — copper, zinc, custom-color PVDF, integrated solar — the products that actually sell in affluent zip codes.
- **Local trust signals** — permits, HOA / design-review handling, historic-district approvals.
- **FAQ** (4 Q&As, neighborhood-specific) with FAQPage JSON-LD.
- **CTA band + nearby neighborhoods** (links to the other 2 in the same city).
- **Schema**: `RoofingContractor` + `BreadcrumbList` + `FAQPage`.

### 3. Neighborhood selection (top 3 affluent + architecturally notable per city)

```text
San Francisco        Pacific Heights · Sea Cliff · Presidio Heights
Santa Clara          Old Quad · Rivermark · Killarney Farms
Walnut Creek         Northgate · Saranap · Rudgear Estates
Tiburon              Belveron · Paradise Cay · Old Tiburon
San Anselmo          Sleepy Hollow · Seminary · Winship Park
Santa Cruz           Pleasure Point · Seabright · Westside
Modesto              College Area · Sherwood Forest · La Loma
Kentfield            Kent Woodlands · Murray Park · Greenbrae Boardwalk
Santa Rosa           Fountaingrove · Skyhawk · McDonald Historic
Alameda County       Piedmont Avenue · Claremont · Mission San Jose
Contra Costa County  Blackhawk · Alamo · Diablo
Petaluma             West Side · McNear Hill · Oakhill-Brewster
Los Gatos            Almaden Valley · Monte Sereno · Los Gatos Hills
```

### 4. Footer + navigation updates

- Footer service-area list keeps city links (unchanged).
- Each city page's "Neighborhoods we serve" cards become the discovery path to the 39 sub-pages.
- Search index (`src/lib/search-data.ts`) gets all 39 neighborhoods added so site search finds them.

## Technical details

### New / changed files

**Data**
- `src/lib/cities-data.ts` — extend `CityData` with: `longIntro: string`, `faqs: {q, a}[]`, `neighborhoodSlugs: string[]`. Populate for all 13 cities.
- `src/lib/neighborhoods-data.ts` (NEW) — `NeighborhoodData` interface + 39 entries:
  ```ts
  interface NeighborhoodData {
    slug: string;            // e.g. "pacific-heights"
    citySlug: string;        // e.g. "san-francisco"
    name: string;
    tagline: string;
    architectureEra: string; // "Victorian & Edwardian, 1880s–1910s"
    notableHomes: string;    // "Spreckels Mansion, Haas-Lilienthal House (NRHP)"
    intro: string;
    whyMetalWorks: string;
    premiumMaterials: string[]; // ["Copper standing seam", "Custom PVDF"...]
    faqs: { q: string; a: string }[];
  }
  ```

**Pages**
- `src/pages/CityPage.tsx` — add Local FAQ section, Neighborhoods section, expanded copy block, BreadcrumbList + FAQPage JSON-LD.
- `src/pages/NeighborhoodPage.tsx` (NEW) — full template with all sections + schema.

**Routing**
- `src/App.tsx` — add `<Route path="/locations/:city/:neighborhood" element={<NeighborhoodPage />} />` above the catch-all. Lazy-load.

**Search**
- `src/lib/search-data.ts` — append a `neighborhoods.map(...)` block producing entries with `href: /locations/${citySlug}/${slug}`.

**Sitemap**
- `public/sitemap.xml` — add 39 neighborhood URLs + ensure all 13 city URLs are present.

### Schema strategy (AEO)

Per neighborhood page:
- `RoofingContractor` (areaServed = neighborhood)
- `BreadcrumbList` (Home › Locations › City › Neighborhood)
- `FAQPage` (the 4 page FAQs)

Per city page:
- `RoofingContractor` (existing, expanded with neighborhoods in `areaServed`)
- `BreadcrumbList` (Home › Locations › City)
- `FAQPage` (the 5–6 city FAQs)

This is the schema combo Google currently rewards for local-service AI Overviews.

### Visual / UX

- Reuse existing `ServiceHero`, card patterns, color tokens — neighborhood pages will look and feel like the current city pages, just one level deeper.
- Reuse the existing `hero-commercial-roofing` background for neighborhood heroes (no new image generation in this plan — keeps scope tight).
- All copy hand-written per neighborhood (no boilerplate-feeling thin pages).

## Out of scope (for this plan)

- Per-neighborhood hero photography (would 39× the asset work — can be a follow-up).
- Lead-capture forms beyond existing CTA buttons.
- Blog / article content per neighborhood.
- Backend / CMS — all content stays in TypeScript data files (fast, free, version-controlled).

