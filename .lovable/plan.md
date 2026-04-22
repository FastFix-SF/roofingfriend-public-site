

## What's wrong

The site started as "West Peak Trenchless & Plumbing" and was only partially rebranded to **The Roofing Friend**. Footer, CityPage, ChargingSection, and the Index hero/Helmet are converted — but ~25 files still leak West Peak branding, plumbing services, plumbing routes, plumbing search results, and the wrong contact info / phone / address.

Concrete leftovers I confirmed:

- **`index.html`** — `<title>` and OG/Twitter meta still say "West Peak Trenchless & Plumbing | Bay Area 24/7 Plumbing"
- **`public/sitemap.xml`** — entire sitemap is `westpeakplumbing.com/trenchless/...`, `/hydro-jetting`, `/water-heater`, `/pipes`, `/plumbing` (zero roofing/locations URLs)
- **`src/components/Navbar.tsx`** — `alt="West Peak Trenchless & Plumbing"`, "Services" link → `/trenchless`
- **`src/App.tsx`** — 8 plumbing routes still wired (`/trenchless`, `/trenchless/commercial`, `/trenchless/industrial`, `/trenchless/:method`, `/water-heater`, `/pipes`, `/hydro-jetting`, `/plumbing`)
- **`src/components/PromoGrid.tsx`** — "Refer a friend to West Peak…", "limited-time offers on our vehicles"
- **`src/components/VehicleSlider.tsx`** — links to `/standing-seam`, `/r-panel`, `/multi-v`, `/tpo-commercial` (none of which exist as routes)
- **`src/components/ComparisonTable.tsx`** — `Trenchless (West Peak)` column header
- **`src/components/SearchDialog.tsx`** — "Search West Peak"
- **`src/lib/search-data.ts`** — 25+ plumbing search entries (trenchless, hydro jetting, pipe bursting, water heater, drain, etc.)
- **`src/pages/About.tsx`**, **`src/pages/Contact.tsx`** — Helmet titles, JSON-LD schema, phone `(650) 379-8166`, email `servicerequests@westpeak.biz`, address `1030 Duane Ave, Santa Clara`, plumbing service list
- **`src/pages/AgingPipes.tsx`, `HydroJetting.tsx`, `Plumbing.tsx`, `WaterHeater.tsx`, `TrenchlessOverview.tsx`, `TrenchlessCommercial.tsx`, `TrenchlessIndustrial.tsx`, `TrenchlessMethod.tsx`** — entire pages are plumbing
- **`src/lib/`** — `hydro-jetting-data.ts`, `pipes-data.ts`, `plumbing-data.ts`, `trenchless-data.ts`, `water-heater-data.ts` — all plumbing data files
- **`src/pages/Reviews.tsx`, `Rebates.tsx`, `Referral.tsx`, `WarrantyOverview.tsx`, `WarrantyDetail.tsx`** — likely contain West Peak branding (Rebates is plumbing-rebate themed)
- **Logo asset** — still `west-peak-logo.png` (kept; no replacement uploaded — was flagged out-of-scope earlier and stays so)

## Fix — full Roofing Friend purge in one pass

### 1. Delete plumbing pages + data (12 files)

Pages: `src/pages/AgingPipes.tsx`, `HydroJetting.tsx`, `Plumbing.tsx`, `WaterHeater.tsx`, `TrenchlessOverview.tsx`, `TrenchlessCommercial.tsx`, `TrenchlessIndustrial.tsx`, `TrenchlessMethod.tsx`

Data: `src/lib/hydro-jetting-data.ts`, `pipes-data.ts`, `plumbing-data.ts`, `trenchless-data.ts`, `water-heater-data.ts`

Component: `src/components/PipeStatsSection.tsx` (plumbing-specific, unused on home page)

### 2. `src/App.tsx` — strip plumbing routes

Remove the 8 lazy imports + 8 `<Route>` lines for trenchless / water-heater / pipes / hydro-jetting / plumbing. Keep: `/`, `/commercial-roofing`, `/about`, `/contact`, `/reviews`, `/rebates`, `/referral`, `/warranty`, `/warranty/:category`, `/locations/:city`, `*`.

### 3. `src/components/Navbar.tsx`

- `alt="The Roofing Friend"` (not West Peak)
- Change "Services" link from `/trenchless` → `/commercial-roofing` (or just rename label "Services" → "Roofing" and merge into one link). Final nav: **Roofing · Warranty · About · Reviews · Contact**.

### 4. `src/components/PromoGrid.tsx`

- "Explore limited-time offers on our vehicles" → "Explore current promotions on metal roofing"
- "Refer a friend to West Peak…" → "Refer a friend to The Roofing Friend and earn a commission on every completed install."

### 5. `src/components/VehicleSlider.tsx`

Fix dead links. Each "Learn More" currently goes to `/standing-seam`, `/r-panel`, `/multi-v`, `/tpo-commercial` — none exist. Point all four to `/commercial-roofing` (single existing roofing-system page). Out of scope: building 4 separate panel-detail pages.

### 6. `src/components/ComparisonTable.tsx`

`Trenchless (West Peak)` → `Metal Roof (The Roofing Friend)`. Verify the table row copy still makes sense for roofing — if not, remove the component from wherever it's used (likely on a deleted plumbing page, so it may end up unused and gets deleted too).

### 7. `src/components/SearchDialog.tsx`

"Search West Peak" → "Search The Roofing Friend".

### 8. `src/lib/search-data.ts` — full rewrite

Remove all trenchless/hydro/water-heater/pipe entries. Replace with roofing-focused index:

- Pages: Home, About, Contact, Reviews, Rebates, Referral, Warranty (overview + 3 categories), Commercial Roofing
- Roofing systems: Standing Seam, R-Panel, Multi-V, TPO (all → `/commercial-roofing`)
- 13 City pages (`/locations/{slug}`)

### 9. `src/pages/About.tsx`

- Helmet title/description/canonical → "About | The Roofing Friend" / theroof.info
- JSON-LD: `name: "The Roofing Friend"`, `@type: "RoofingContractor"`, phone `(510) 999-7663`, email `info@theroof.info`, drop the Santa Clara street address (use `addressLocality: "San Francisco Bay Area"`), update `areaServed` to use the 13 cities from `cities-data.ts`
- Stats: keep generic ones, drop "5,000+ Projects" if unverifiable — or rephrase to "Hundreds of Bay Area Roofs"
- Services list → 6 roofing items: Standing Seam, R-Panel, Multi-V, TPO Commercial, Roof Repair, Veteran Government Projects (all link → `/commercial-roofing`)
- City list at bottom → import from `cities-data.ts`

### 10. `src/pages/Contact.tsx`

- Helmet → Roofing Friend, theroof.info
- JSON-LD → `RoofingContractor`, phone `(510) 999-7663`, email `info@theroof.info`, drop Duane Ave address, update geo if shown (or remove)
- Visible contact card: phone, email, "San Francisco Bay Area · Serving 13+ locations", "Mon–Fri 8 AM – 4 PM · 24/7 Emergency"

### 11. `src/pages/Reviews.tsx`, `Rebates.tsx`, `Referral.tsx`, `WarrantyOverview.tsx`, `WarrantyDetail.tsx`

Audit + scrub: replace any "West Peak" / "plumbing" / `(650) 379-8166` / `westpeak.biz` / `westpeakplumbing.com` references with Roofing Friend equivalents. Rebates page — if it's TECH Clean California / heat-pump rebates, repurpose it to roofing-specific rebates (cool-roof Title 24, energy.gov ENERGY STAR metal roof tax credit, PG&E cool-roof rebate). If repurpose is too involved, **delete the page + remove route + remove from sitemap** (flagged in "Out of scope" if user prefers deletion).

### 12. `index.html`

- `<title>` → "The Roofing Friend | Premium Metal Roofing in the SF Bay Area"
- meta description → "Standing seam, R-Panel, Multi-V & TPO metal roofing across the San Francisco Bay Area. Veteran-owned, licensed CA #1067709, 24/7 emergency service."
- author → "The Roofing Friend"
- OG/Twitter title + description → match
- (OG image URL is auto-generated by Lovable preview — leave it)

### 13. `public/sitemap.xml` — full rewrite

Replace all `westpeakplumbing.com/...` URLs with `theroof.info/...`. New entries:

- `/` (priority 1.0)
- `/commercial-roofing` (0.9)
- `/about`, `/contact`, `/reviews`, `/warranty`, `/warranty/{residential,commercial,industrial}`, `/rebates`, `/referral` (0.7–0.8)
- 13 × `/locations/{slug}` (0.8 each — important for local SEO)

### 14. `public/robots.txt`

Quick check + update Sitemap URL to `https://theroof.info/sitemap.xml` if it points to the old domain.

### 15. `src/pages/Index.tsx` Helmet — already partly converted

Currently still says "West Peak Trenchless & Plumbing | Bay Area 24/7 Plumbing Services" + JSON-LD with `(650) 379-8166` / Duane Ave / westpeakplumbing.com. Replace with Roofing Friend `RoofingContractor` schema (same as Footer/About).

## Files

**Delete (13)**: 8 plumbing page components + 5 plumbing data files + `PipeStatsSection.tsx`

**Edit (~14)**: `App.tsx`, `index.html`, `public/sitemap.xml`, `public/robots.txt`, `Navbar.tsx`, `PromoGrid.tsx`, `VehicleSlider.tsx`, `ComparisonTable.tsx`, `SearchDialog.tsx`, `search-data.ts`, `About.tsx`, `Contact.tsx`, `Reviews.tsx`, `Index.tsx` Helmet block

**Audit + likely edit (3)**: `Rebates.tsx`, `Referral.tsx`, `WarrantyOverview.tsx` / `WarrantyDetail.tsx`

## Out of scope

- **Replacing the `west-peak-logo.png` asset** — no Roofing Friend logo uploaded. The image filename stays; only the `alt` attribute changes. Once you upload a logo, swap the import in one line.
- **Building 4 dedicated panel-detail pages** (`/standing-seam`, `/r-panel`, etc.) — for now those CTAs all point to the existing `/commercial-roofing` page. Easy follow-up.
- **Repurposing `Rebates.tsx` to roofing rebates** if its content is heavily plumbing-specific — flagging that I may recommend deletion + sitemap removal during execution if rewrite is more than ~30 lines.
- **Updating any hardcoded `westpeakplumbing.com` canonical URLs** that I haven't already enumerated — I'll grep again during execution to catch stragglers.
- **Replacing the existing roof / hero JPG/PNG assets** — they're already roofing-themed; no changes needed.

