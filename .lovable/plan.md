

## Why the city-page hero loads slowly

Two real problems, not a caching illusion:

1. **`hero-commercial-roofing.jpg` is 2.7 MB** (and `hero-veteran-government-roofing.jpg` is 2.5 MB). For comparison, `hero-fsd.jpg` is only 172 KB. A 2.7 MB JPEG over a typical mobile connection takes seconds to paint — regardless of caching.

2. **The home page never actually loads this exact image at full size first.** On the home page it lives inside the `HeroSection` carousel (slide 2 of 3), which lazy-decodes non-active slides. Many users never trigger its full download before clicking a city link. So when they land on `/locations/san-francisco`, it's the *first* time the browser fetches those 2.7 MB.

3. Even when it *is* cached, Vite serves dev assets with cache-busting query strings (`?t=...`) on HMR, so the browser may refetch.

## Fix — compress + responsive + reuse

### 1. Compress the two giant hero JPEGs (biggest win, ~95% size cut)

Re-encode in place using `sharp`:

| File | Current | Target |
|---|---|---|
| `src/assets/hero-commercial-roofing.jpg` | 2.7 MB | ~150–200 KB |
| `src/assets/hero-veteran-government-roofing.jpg` | 2.5 MB | ~150–200 KB |

Method: resize to max 1920px wide, re-encode JPEG quality 80, mozjpeg. Also emit a `.webp` sibling at quality 75 (~80 KB) for modern browsers.

### 2. Update `ServiceHero.tsx` to serve responsive + WebP

Replace the single `<img>` with a `<picture>`:

```tsx
<picture>
  <source srcSet={backgroundImageWebp} type="image/webp" />
  <img src={backgroundImage} ... fetchPriority="high" />
</picture>
```

Add `fetchPriority="high"` (currently missing) so the browser prioritizes it over the lazy `ChargingSection`-style requests.

### 3. Preload the hero on city pages

In `CityPage.tsx`'s `<Helmet>`, add:
```tsx
<link rel="preload" as="image" href={heroCommercialRoofing} fetchPriority="high" />
```
This kicks off the image fetch in parallel with the JS bundle download instead of waiting for React to mount.

### 4. Audit other oversized assets

While in there, run `ls -lhS src/assets/` and compress any other JPEG/PNG over ~500 KB (warranty-*.jpg, slide-*.jpg, hero-industrial-*.jpg likely candidates) with the same sharp pipeline. Skip the logo PNG (already small).

## Files

- **Re-encode (in place)**: `src/assets/hero-commercial-roofing.jpg`, `src/assets/hero-veteran-government-roofing.jpg`, plus any other >500 KB asset found in the audit.
- **New**: `.webp` siblings for the heroes (e.g. `hero-commercial-roofing.webp`).
- **Edit**: `src/components/ServiceHero.tsx` (add `<picture>` + `fetchPriority`), `src/pages/CityPage.tsx` (add preload `<link>` in Helmet), and the same preload pattern in `src/pages/CommercialRoofing.tsx` since it uses the same hero twice.

## Out of scope

- Switching to a CDN-backed image service (Cloudinary, Vercel Image Optimization) — the static-compression approach above gets ~95% of the gain with zero new infra.
- Per-city unique hero photos — still using the shared compressed asset for all 13 cities.
- Adding a build-time image plugin (`vite-imagetools`) — would help future uploads but is a bigger refactor; flagged for later.

