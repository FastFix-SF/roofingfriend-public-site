

## Goal

Make every image on every page load **fast**, on first visit and subsequent navigations.

## Why images are still slow

1. **`src/assets/` is 18 MB.** Vite bundles everything that's `import`-ed; multi-MB PNGs of unused plumbing/water-heater assets (and the 1.1 MB old `west-peak-logo.png`) inflate the build and compete for bandwidth.
2. **The logo is 560 KB PNG** but renders at ~40px tall — used in Navbar + Footer on every page.
3. **Only 2 hero images have `.webp` siblings.** Every other JPG/PNG ships uncompressed-by-modern-standards (~200–400 KB each, when WebP would be 30–80 KB).
4. **No build-time image processing.** Each new asset added stays at original size forever unless we manually compress.

## Fix — five layers, each cumulative

### 1. Delete unused legacy assets (instant ~6 MB cut)

Many imports point only to *roofing* assets now. Plumbing/water-heater/trench files (`slide-water-heater.png`, `slide-hydro-jetter.png`, `west-peak-logo.png`, `wh-*.jpg`, `hj-*.jpg`, `plumb-*.jpg`, `trench-*.jpg`, `pipe-*.jpg`, `nasty-pipe-hero.jpg`, `cta-trenchless-*.jpg`, `hero-*-trenchless.jpg`, `hero-charging.jpg`, `hero-energy.jpg`, `hero-sedan.jpg`, `hero-suv.jpg`, `hero-truck.jpg`, `slide-sedan.jpg`, `slide-sports.jpg`, `slide-suv.jpg`, `slide-truck.jpg`) — grep each, delete any with **zero references**. Estimated savings: 5–7 MB removed from the bundle.

### 2. Compress + convert remaining images to WebP

For every `.jpg`/`.png` actually referenced (~25 files): generate a `.webp` sibling at quality 78 (typical 60–85% size cut vs JPEG). Re-encode the original JPG with mozjpeg q80 as fallback for non-WebP browsers. Special case the PNG logo:
- `roofing-friend-logo.png` (560 KB) → 600 px wide WebP + lightweight PNG fallback (~15 KB).

### 3. Smart `<img>` wrapper component

Create `src/components/ui/SmartImage.tsx` — a thin wrapper that:
- Renders `<picture>` with WebP `<source>` + JPG fallback automatically (looks up the `.webp` sibling at module level).
- Defaults to `loading="lazy"` + `decoding="async"`.
- Accepts `priority` prop → swaps to `loading="eager"` + `fetchpriority="high"`.
- Forwards width/height to prevent CLS.

Replace `<img src={...} />` calls across `PromoGrid`, `VehicleSlider`, `SecondarySlider`, all `pages/*.tsx` CTAs, `Navbar`, `Footer`. Single-line drop-in.

### 4. Preload the LCP image on every page

Each page already knows its hero image. Add a `<link rel="preload" as="image" imageSrcSet="…webp" type="image/webp" fetchpriority="high">` inside each page's `<Helmet>`. Pages to update: `Index`, `CommercialRoofing` (already done), `CityPage` (already done), `WarrantyOverview`, `WarrantyDetail`, `Rebates`, `Referral`, `About`, `Contact`, `Reviews`.

### 5. Long-cache headers for static assets

Update `vercel.json` to send `Cache-Control: public, max-age=31536000, immutable` for `/assets/*` (Vite hashes filenames, so this is safe). Repeat-visit images become free.

## Expected result

| Metric | Before | After |
|---|---|---|
| `src/assets/` total | 18 MB | ~3 MB |
| Hero LCP image | 200–400 KB JPG | 40–90 KB WebP (preloaded) |
| Logo on every page | 560 KB PNG | ~10 KB WebP |
| Repeat-visit image cost | refetch | 0 (immutable cache) |

## Files

- **Delete**: every `src/assets/*` with zero `import` references (verified per-file via grep).
- **Re-encode + add `.webp`**: every remaining `src/assets/*.jpg` / `*.png` still in use.
- **New**: `src/components/ui/SmartImage.tsx`.
- **Edit**: `Navbar.tsx`, `Footer.tsx`, `PromoGrid.tsx`, `VehicleSlider.tsx`, `SecondarySlider.tsx`, `ServiceHero.tsx`, and all `src/pages/*.tsx` (swap `<img>` → `<SmartImage>` + add hero preload `<link>`).
- **Edit**: `vercel.json` (cache headers for `/assets/*`).

## Out of scope

- Build-time image plugin (`vite-imagetools`) — does the same work but adds a dep + config; manual sharp pass achieves identical output for current asset count.
- AVIF — marginal additional 10–15% savings vs WebP, more encode time, weaker browser support a year ago (now fine but diminishing returns).
- Per-breakpoint `srcset` (320/640/1280 widths) — worthwhile only for the heroes; flagged as a follow-up if mobile LCP still lags after this round.

