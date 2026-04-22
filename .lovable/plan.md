

## Honest answer

**No — it is not 100% optimized.** It's in good shape (canonicals, JSON-LD, FAQ schema, sitemap, breadcrumbs, FAQ pages on every city + neighborhood) but there are **8 concrete gaps** that materially hurt rankings on Google, Bing, and AI engines (ChatGPT, Perplexity, Google AI Overviews). Some are 5-minute fixes with outsized impact.

## The real gaps (ranked by impact)

### 1. SPA pages are not pre-rendered → most search engines see blank HTML
This is the biggest issue. Vite + React renders client-side. View-source on `/locations/san-francisco/pacific-heights` returns an empty `<div id="root">`. Googlebot can render JS, but **Bingbot, ChatGPT crawler (GPTBot), Perplexity (PerplexityBot), Claude (ClaudeBot), and most LLM crawlers cannot — or do so unreliably.** All 39 neighborhood pages + 13 city pages are effectively invisible to AI search.
**Fix**: enable `vite-plugin-prerender` (or `react-snap`) to generate static HTML for every route in `sitemap.xml` at build time. Output goes to `dist/locations/san-francisco/pacific-heights/index.html` with the full Helmet `<head>` and rendered DOM inlined.

### 2. `index.html` `<head>` is wrong/stale
- `og:image` and `twitter:image` point to a Lovable preview R2 URL — will 404 or look spammy when shared.
- `twitter:site` is `@Lovable` (not your brand).
- No global `og:url`, no `theme-color`, no `application/ld+json` `Organization` schema (the root entity Google uses to tie all pages together).
- No favicon variants (`apple-touch-icon`, `manifest`).

### 3. Missing `Organization` + `WebSite` + `SiteNavigationElement` schema on the homepage
Without these, Google can't build a knowledge-panel-style entity for "The Roofing Friend." Add `Organization` (with logo, sameAs social profiles, founder, areaServed) and `WebSite` (with `SearchAction` using your `/search` query) to `index.html` head — static so all crawlers see them.

### 4. Robots.txt allows everything but doesn't explicitly invite AI crawlers
Add explicit allows for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Applebot-Extended`. Otherwise some default to no-train/no-cite.

### 5. No `lastmod` in sitemap.xml
Google deprioritizes sitemaps without `<lastmod>`. Every URL needs one (`2026-04-22`).

### 6. WarrantyDetail canonical uses wrong domain
`https://roofingfriend.com/warranty/...` instead of `https://theroof.info/warranty/...` → splits link equity, can cause deindexing. Found in `src/pages/WarrantyDetail.tsx:76`.

### 7. Neighborhood + city pages share one generic OG image
All 52 location pages broadcast the same OG card on social. Switching to dynamic OG title/description (already done) is good — but Google Discover and social previews benefit from per-page imagery. Quick win: at minimum reference the existing `hero-commercial-roofing` as `og:image` on city/neighborhood pages (currently missing entirely).

### 8. Missing `hreflang` and `geo` meta on local pages
For local SEO, add `<meta name="geo.region" content="US-CA">` and `<meta name="geo.placename" content="{City}">` on city/neighborhood pages. Helps Bing especially.

## Bonus AEO improvements (cheap)

- Add `speakable` schema to FAQ answers (Google Assistant / voice).
- Add `Service` schema (one per roofing system) on `/commercial-roofing`.
- Add `Review` / `AggregateRating` schema on `/reviews` (you have the data in `reviews-data.ts`).
- Add an `llms.txt` file at site root — emerging standard for LLM crawlers (like `robots.txt` but for AI).

## What I'd ship in one pass

| # | Change | File(s) |
|---|--------|---------|
| 1 | Add prerendering to Vite build (all sitemap routes → static HTML) | `vite.config.ts`, `package.json` |
| 2 | Rewrite `index.html` head: real OG image, Organization + WebSite JSON-LD, theme-color, apple-touch-icon | `index.html` |
| 3 | Fix WarrantyDetail canonical domain | `src/pages/WarrantyDetail.tsx` |
| 4 | Add per-page `og:image`, `twitter:card`, `geo.*` to City + Neighborhood pages | `CityPage.tsx`, `NeighborhoodPage.tsx` |
| 5 | Add AI-bot allows + `llms.txt` | `public/robots.txt`, new `public/llms.txt` |
| 6 | Add `<lastmod>` to all 78 sitemap entries | `public/sitemap.xml` |
| 7 | Add `Service` schema on `/commercial-roofing`, `AggregateRating` on `/reviews`, `speakable` on FAQ schemas | `CommercialRoofing.tsx`, `Reviews.tsx`, `FaqAccordion` callsites |

After this pass, the site is genuinely close to "100%" — every crawler (search + AI) sees fully-rendered HTML with rich schema, and per-page metadata is unique and crawlable.

## Out of scope for this pass

- Custom hero photography per neighborhood (would 39× the asset work).
- Backlink / off-page SEO (not a code task).
- Core Web Vitals deep-dive (would need a Lighthouse run first — happy to do as a follow-up).

Reply **"approve SEO pass"** and I'll ship all 7 in one go. Or pick a subset.

