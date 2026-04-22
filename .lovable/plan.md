

## Goal

Make every city in the Footer's "Service Areas" row a clickable link to a real, dedicated city landing page (13 cities total). Use the same one-line taglines roofingfriend.com uses on its homepage map, plus a full local SEO page body underneath.

## Why one dynamic route, not 13 files

Roofingfriend.com's own city pages 404 — they only show city *labels* on the homepage. So we're going *beyond* what they have, but we'll keep their copy style. 13 near-identical pages = one `<Route path="/locations/:city">` + one `cities-data.ts` file. Adding a city later = one entry in the data array, no new file.

## Source taglines (verbatim from roofingfriend.com homepage)

| City | Tagline |
|---|---|
| San Francisco | Premium metal roofing in the heart of the Bay Area |
| Santa Clara | Residential and commercial roofing solutions |
| Walnut Creek | Expert roofing services in Contra Costa County |
| Tiburon | Luxury roofing for Marin County homes |
| San Anselmo | Custom metal roofing installations |
| Santa Cruz | Coastal roofing specialists |
| Modesto | Central Valley roofing experts |
| Kentfield | Premium roofing in Marin County |
| Santa Rosa | North Bay roofing professionals |
| Alameda County | Comprehensive roofing throughout Alameda County |
| Contra Costa County | Full-service roofing across Contra Costa County |
| Petaluma | Quality roofing in Sonoma County |
| Los Gatos | High-end roofing solutions |

## Implementation — 3 files

### 1. New: `src/lib/cities-data.ts`

Export `cities: CityData[]` with for each entry:
- `slug` (e.g. `"san-francisco"`, `"alameda-county"`)
- `name` (display)
- `tagline` (the verbatim one-liner above)
- `region` ("Marin County" / "Contra Costa County" / "Sonoma County" / "Bay Area" / "Central Valley")
- `intro` (2-sentence local paragraph — climate, common roof types, why metal fits)
- `localFacts` (array of 3 bullets: e.g. SF → "Coastal fog & salt air", "Earthquake-rated installs", "Strict permit timelines we handle")
- `nearbyAreas` (array of 3 nearby city slugs for cross-linking)

Helper: `getCityBySlug(slug)`.

### 2. New: `src/pages/CityPage.tsx`

Reads `:city` param, looks up city data, renders:
- `<Helmet>` with city-specific `<title>`, meta description, canonical, and `LocalBusiness` JSON-LD with `areaServed` set to that city.
- `Navbar`
- `ServiceHero` — title `"Metal Roofing in {city}"`, tagline = the verbatim roofingfriend.com one-liner, background = `heroCommercialRoofing` (existing asset, no new uploads).
- **Local intro section** — the 2-sentence intro paragraph + 3 local facts as `CheckCircle2` bullets.
- **Services in {city}** — 4 cards reusing roofing services from existing pages: Standing Seam, R-Panel, Multi-V, TPO. Link each to `/commercial-roofing` (existing).
- **Why local matters** — 3-stat block: "Free Bay Area Delivery", "Local crews, no subs", "{city} permits handled" using existing icons.
- **CTA band** — phone (510) 999-7663 + "Get a Free {city} Quote" button → existing ServiceTitan URL.
- **Nearby areas** — 3 chip-style links to other `/locations/{slug}` pages for SEO interlinking.
- `Footer` + `BottomBar`.
- 404 fallback if slug not found → `<Navigate to="/404">` (uses existing NotFound page via catch-all).

### 3. Edit: `src/App.tsx`

Add lazy import + route **above** the `*` catch-all:
```tsx
const CityPage = React.lazy(() => import("./pages/CityPage"));
<Route path="/locations/:city" element={<CityPage />} />
```

### 4. Edit: `src/components/Footer.tsx` (lines 4–18 + 103–112)

- Replace the string array `serviceAreas` with `import { cities } from "@/lib/cities-data"`.
- In the Service Areas `<p>` (line ~106), wrap each city name in `<a href={`/locations/${city.slug}`}>` so each is now a real link with the existing hover-gold style. Dot separator stays. No layout change.

## Routing & SEO notes

- URL pattern: `/locations/san-francisco`, `/locations/alameda-county`, etc. Matches the convention roofingfriend.com *intended* (the 404'd `/locations/...` URLs).
- Each page = unique `<title>`, meta description, H1, and JSON-LD → 13 net-new indexable pages for local search.
- Nearby-areas cross-links create the internal link graph Google rewards for local SEO.

## Files

- **NEW** `src/lib/cities-data.ts` (~80 lines, 13 entries)
- **NEW** `src/pages/CityPage.tsx` (~140 lines)
- **EDIT** `src/App.tsx` (+2 lines)
- **EDIT** `src/components/Footer.tsx` (~10 lines: swap array + wrap names in `<a>`)

## Out of scope

- Adding a new "Locations" hub page (`/locations`) listing all 13 — Footer + nearby-area links already cover discovery; can add later if you want a dedicated index page.
- Per-city hero photography — using shared `heroCommercialRoofing` asset for all 13 to avoid 13 image generation passes. Easy to swap later by adding a `heroImage` field to `cities-data.ts`.
- Per-city customer reviews/testimonials — would need real data; flagged as future.
- Updating Navbar to surface a "Locations" link — current Navbar (Services / Roofing / About / Reviews / Contact) is full; Footer remains the discovery point.

