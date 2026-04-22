

## Goal

Add the uploaded crew selfie photo into the **Mission** section on the About page, alongside the text, so the page feels real and human — actual Roofing Friend crew members on the job.

## What this adds

A real team photo (the hard-hat crew selfie you uploaded) integrated into the Mission section as a two-column layout on desktop, stacked on mobile. This humanizes the "veteran-owned, California-licensed" pitch with proof of the actual people doing the work.

## Implementation

1. **Save the uploaded image** as a project asset:
   - `src/assets/about-crew.jpg` — copied from `user-uploads://image-12.png` (saved as `.jpg` for consistency with other hero assets and smaller file size)
   - `src/assets/about-crew.webp` — optimized WebP version (~1200px wide, q80) generated via `sharp` for performance, matching the pattern used by other images on the site

2. **Restructure the Mission section** (`src/pages/About.tsx`, lines 57–83) into a two-column grid:
   - **Left column** — the existing eyebrow line, stats (15+ / 13+), paragraph, and checklist (unchanged copy)
   - **Right column** — the crew photo in a rounded card with subtle shadow, with a small italic caption underneath: *"The Roofing Friend crew — on the job in the Bay Area."*
   - Layout: `grid lg:grid-cols-2 gap-12 items-center`, container widened from `max-w-4xl` to `max-w-6xl` to accommodate two columns
   - Mobile (<lg): photo stacks below the text
   - Use `<picture>` with WebP `<source>` + JPG fallback, `loading="lazy"`, `decoding="async"`, explicit width/height to avoid CLS
   - Alt text: `"The Roofing Friend crew on a Bay Area job site"`

3. **No other changes** — Stats, Services, Coverage, and CTA sections stay exactly as they are.

## Files

- **Create**: `src/assets/about-crew.jpg`, `src/assets/about-crew.webp`
- **Edit**: `src/pages/About.tsx` (Mission section only — add import + restructure to 2-column grid)

## Out of scope

- Changing any copy in the Mission section
- Adding the photo to other pages
- Modifying the hero, Stats, Services, Coverage, or CTA sections

