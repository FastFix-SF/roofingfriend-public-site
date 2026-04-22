

## What's wrong

The 3 cards in the homepage `SecondarySlider` use `warranty-residential.jpg`, `warranty-commercial.jpg`, and `warranty-industrial.jpg` — these are leftover **plumbing-era images** from West Peak (likely showing pipes, plumbers, or industrial fittings). The copy now says "Lifetime Metal Roof Warranty / Standing seam / Government metal roofing" but the images don't match.

Same problem cascades to `/warranty` (overview page) and `/warranty/:slug` (detail pages) — they import the exact same three files.

## Fix — generate 3 new roofing-specific images

Create three on-brand metal roofing photos and swap them in everywhere the old plumbing images are used.

| File (overwrite) | New subject | Used on |
|---|---|---|
| `src/assets/warranty-residential.jpg` | Premium standing seam metal roof on a modern California home — clean ridge line, warm sunset light, suburban setting | Homepage Residential card, `/warranty` Residential card, `/warranty/residential` hero |
| `src/assets/warranty-commercial.jpg` | Standing seam or TPO metal roof on a commercial building (retail center / restaurant / warehouse) — rooftop perspective, daylight | Homepage Commercial card, `/warranty` Commercial card, `/warranty/commercial` hero |
| `src/assets/warranty-industrial.jpg` | Government / public-sector building with metal roofing — civic or federal building feel (municipal hall, military-base style facility), American flag optional, professional daylight | Homepage Government & Public Sector card, `/warranty` Government card, `/warranty/industrial` hero |

Filenames stay identical so all 3 import sites (`Index.tsx`, `WarrantyOverview.tsx`, `WarrantyDetail.tsx`) keep working with **zero code changes** — just the binary assets are replaced.

Style: photorealistic, 16:9 wide, daylight, sharp focus on the roof, color palette consistent with the existing Roofing Friend brand (warm neutrals + metal tones). 1920×1080.

## Files

- `src/assets/warranty-residential.jpg` — regenerate
- `src/assets/warranty-commercial.jpg` — regenerate
- `src/assets/warranty-industrial.jpg` — regenerate

No code edits. No new imports. No route changes.

## Out of scope

- `cta-warranty-overview.jpg` (the bottom CTA strip on `/warranty`) — still generic warranty-paperwork imagery; works for now but flag for a future pass if you want it roofing-specific too.
- Hero images on the homepage (`hero-fsd.jpg`, `hero-commercial-roofing.jpg`, `hero-veteran-government-roofing.jpg`) — already roofing-themed, no change.

