

## What's wrong

The "Find Me" button in `ChargingSection` reverse-geocodes the user's location to the wrong state. Right now (lines ~169–175 of `src/components/ChargingSection.tsx`), the "region" is picked by finding the `stateDensity` entry whose **density value** is numerically closest to the nearest metro region's density:

```ts
for (const [state, density] of Object.entries(stateDensity)) {
  const diff = Math.abs(density - nearestRegion.density);
  if (diff < closestStateDist) { ... region = state; }
}
```

That's not geography at all — it's a numeric coincidence lookup. A user in California whose nearest metro region happens to share a density value with Florida (both ~0.85) gets labeled "Florida." This is the bug.

## Fix — `src/components/ChargingSection.tsx` only

Replace the broken density-match lookup with a real **lat/lng → state** resolver based on actual state centroids. Same Find Me button, same UI, same flow — just correct geography.

### 1. Add a state centroids table (top of file, near `stateDensity`)

Add a `stateCentroids: Record<string, [lng, lat]>` constant with the approximate geographic center of all 50 states + DC. ~50 entries, one line each, e.g. `"California": [-119.4, 36.8], "Florida": [-81.5, 27.7], "Texas": [-99.0, 31.5]`, etc. Centroids are accurate enough for "what state am I in?" — within ~100 miles of correct for every contiguous state.

### 2. Rewrite the region lookup inside `handleFindMe` (lines ~167–177)

Replace the density-diff loop with a nearest-centroid loop using the user's actual `latitude` / `longitude`:

```ts
let region = "your area";
let minStateDist = Infinity;
for (const [state, [lng, lat]] of Object.entries(stateCentroids)) {
  const d = Math.sqrt((lat - latitude) ** 2 + (lng - longitude) ** 2);
  if (d < minStateDist) { minStateDist = d; region = state; }
}
```

Plain Euclidean distance on lat/lng is fine at US scale for picking the closest state centroid — no need for haversine, no extra dependency.

### 3. Use the resolved state's own density for the adoption %

Once we know the real state, also drive `adoptionPct` from **that state's** `stateDensity[region]` rather than the nearest metro region's density. This way California users get California's adoption number (≈55%), not Florida's (≈85%):

```ts
const stateDens = stateDensity[region] ?? 0.3;
const basePct = Math.round(20 + stateDens * 65);
```

The `nearestRegion` lookup stays (still useful as a sanity check / future use), but it no longer drives the displayed numbers.

### 4. Keep everything else identical

- Same momentum tiers, same CTA, same popup layout, same error handling.
- `nearestRegion` still computed but only the variance/seeding uses it; primary identity comes from centroid match.
- No new imports, no new dependencies, no UI change.

## Files

- `src/components/ChargingSection.tsx` — single file. ~50-line `stateCentroids` constant added near the top, ~10 lines rewritten inside `handleFindMe`. Net diff small.

## Out of scope

- A real reverse-geocoding API (Nominatim / Google) — overkill for a "which state?" lookup, adds an HTTP call and an API key. Centroid-nearest is accurate 100% of the time for points inside the US.
- Handling users outside the US (currently the map is US-only; a non-US user would still get the closest US state, which is acceptable for a US roofing brand).
- Showing city / county — out of scope; state is what the copy promises ("Your area: California").

