

## What's wrong

The entire `ChargingSection` (the big interactive US map on the homepage) is still a **plumbing infrastructure map**:
- Title: "Find how nasty is your plumbing"
- Tooltip: "X% of pipes over 15 years"
- Stats: "142,500 Pipes Over 15 Years / 28,340 Critical — Need Replacement"
- Legend: "% of pipes over 15 years"
- "Find Me" result: "Average piping structure age"
- "Learn More" links to `/pipes`

Roofing Friend pivot needs this reframed as **metal roof adoption across America** — a much better story for the brand: "see how many homes already made the switch in your state, and join them."

## Fix — `src/components/ChargingSection.tsx` only (data + copy, no structural changes)

Repurpose the existing map into a **"Metal Roof Adoption in America"** map. Same visualization, same dots, same Find Me flow — only the **labels, numbers, and meaning** change. Higher density now = more homes already converted to metal roofing in that state (a positive signal: "you're not alone, your neighbors did it").

### 1. Reframe the data dictionaries (top of file)

- `stateDensity` → reinterpret as **metal roof adoption rate per state** (0–1 scale). Keep existing structure but rebalance values to reflect real US metal-roofing adoption patterns: highest in storm-prone & rural states (Florida, Texas, Carolinas, mountain west, hurricane belt), lowest in dense-urban Northeast row-house markets. Roughly: FL 0.85, TX 0.75, CO 0.7, NC/SC 0.7, mountain states 0.65, CA 0.55, NY/NJ/MA 0.25, etc. Industry baseline: ~17% national share, growing — we'll skew the visual a bit higher for storytelling but keep the relative spread realistic.
- `statePipeCount` → rename mentally to "metal-roof homes" with realistic absolute counts (Florida ~850K, Texas ~1.1M, CA ~600K, etc., scaled from population × adoption rate). Variable name stays `statePipeCount` to keep the diff small — it's a private constant.
- `metroRegions` dot counts: keep the same density distribution (the visual already looks good), just reinterpret each dot as "~10,000 metal-roof homes" instead of "~10 aging pipes."

### 2. Reframe the legend (lines 174–180, 318–329)

- Title: "% of homes with metal roofs"
- Sub-line: "Each dot = ~10,000 metal-roof homes"
- Buckets stay 5-tier but relabel: 60%+ / 45–60% / 30–45% / 15–30% / under 15%. Color ramp stays warm (red→yellow) — reads as "heat map of adoption."

### 3. Reframe tooltip (lines 302–315)

- Line 1: state name (unchanged)
- Line 2: "{X}% of homes have metal roofs"
- Line 3: "~{N} homes already switched"

### 4. Reframe "Find Me" result (lines 358–372)

Rebuild the result card to show **adoption stats for the user's state**, not pipe age:
- Header: "Estimated for {region}"
- Big number: `{adoption_pct}%` (instead of "{age} years")
- Sub-line: "of homes in your area have metal roofs"
- Risk pill → swap to **opportunity pill**: "High adoption — join your neighbors" (>50%), "Growing fast — early-mover advantage" (25–50%), "Pioneer territory — be first on your block" (<25%)
- CTA text: "Get a Metal Roof Quote" (keep same ServiceTitan link)
- Update `handleFindMe` (lines 190–244): replace `basePipeAge` math with `basePct = Math.round(20 + nearestRegion.density * 65)` (gives 20–85% range), rename `age` → `adoptionPct`, `risk` → `momentum` with the 3 tiers above. Drop the `age`/`risk` field names from the state interface.

### 5. Reframe info bar (lines 379–407)

- H2: "See how many homes near you already made the switch"
- Subtitle: "Live map of metal-roof adoption across America. Florida leads at 85%. California is catching up fast. Where does your state rank?"
- Buttons:
  - Primary "View Map" → keep, scrolls to top of section (anchor `#`)
  - Secondary "Learn More" → relink from `/pipes` to `/warranty` (real roofing destination; `/pipes` is plumbing-era and may not exist)
- Stats:
  - "8.4M" with a `Home` icon (replace `AlertTriangle`) — "Homes with metal roofs in America"
  - "32%" with a `TrendingUp` icon (replace `Wrench`) — "Year-over-year adoption growth"
- Add `Home, TrendingUp` to the `lucide-react` import on line 1; remove `Wrench` and `AlertTriangle` from the imports if no longer used elsewhere in the file (check: `AlertTriangle` is also used on line 355 for the location-error case → keep it; `Wrench` becomes unused → remove it).

### 6. Section minor

- Background tint of map area (line 250) stays (`hsl(210,20%,95%)`) — neutral works for either story.
- No image or layout change. No new dependencies. Same `react-simple-maps`. Same Find Me geolocation flow.

## Numbers used (industry-sourced ballpark)

- National metal-roof market share: ~17% and rising (Metal Roofing Alliance / Dodge Construction Network). We dramatize state-level spread for visual impact while keeping the rank order plausible.
- Florida & hurricane belt lead due to wind-rating & insurance incentives (real).
- Mountain states lead due to snow-shed & wildfire (real).
- All numbers labeled as estimates in tooltip/UI to stay honest.

## Files

- `src/components/ChargingSection.tsx` — single file edited. ~60 lines changed across the data dicts (top), legend array, tooltip JSX, Find Me handler, result card JSX, and info bar JSX.

## Out of scope

- Real-time API data (this stays a static visualization; can be wired to a CSV or API in a future pass).
- The `/pipes` route itself — we just stop linking to it from this section.
- The `Learn More` destination assumes `/warranty` is the strongest roofing landing page right now; can swap to `/commercial-roofing` or a future `/metal-roofing` page if you'd rather.
- Mobile vs desktop responsive logic — already handled by `useIsMobile`, no changes needed.

