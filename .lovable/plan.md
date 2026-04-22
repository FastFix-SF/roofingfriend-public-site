

## Goal
Repurpose the bottom row of `PromoGrid` (currently the plumbing-themed "Save Water, Save Money" + "California Rebate Programs" cards) so it speaks to **Roofing Friend's** veteran metal roofing positioning — keeping the same 3/5 + 2/5 layout, gradients, and CTA styling.

## Source mapping (from roofingfriend.com)
The two strongest brand pillars on roofingfriend.com that aren't already covered by the slider above are:
1. **Lifetime Value / Why Metal** — durability story (50+ year lifespan, hail/fire/wind resistance, energy efficiency). This is their #1 educational angle.
2. **Veteran-Owned, Built to Serve** — their core trust pillar (already echoed in the navbar tagline and hero slide #3).

These map cleanly onto the existing two-card layout.

## Changes — `src/components/PromoGrid.tsx`

### Card 1 (large, `md:col-span-3`) — replace "Save Water, Save Money"
- **Image**: swap `promoFsd` import → use existing `slide-standing-seam.jpg` (charcoal standing seam roof, perfect hero shot for durability story).
- **Title**: `Built to Outlast Your Mortgage`
- **Subtitle**: `50+ year lifespan. Class A fire-rated. Hail, wind & wildfire ready.`
- **Primary CTA**: `Get a Free Roof Assessment` → keeps ServiceTitan booking URL
- **Secondary CTA**: `Why Metal?` → point to `/commercial-roofing` (only roofing page that exists today; flagged below)

### Card 2 (smaller, `md:col-span-2`) — replace "California Rebate Programs"
- **Image**: swap `promoFeatures` import → use existing `hero-veteran-government-roofing.jpg` (already in repo, on-brand military/government imagery).
- **Title**: `Veteran-Owned. Mission-Driven.`
- **Subtitle**: `Discipline, integrity, and craftsmanship on every roof we install.`
- **CTA**: `Our Story` → point to `/about`

### Import changes (top of file)
```ts
// remove:
import promoFsd from "@/assets/promo-fsd.jpg";
import promoFeatures from "@/assets/promo-rebates.jpg";
// add:
import promoStandingSeam from "@/assets/slide-standing-seam.jpg";
import promoVeteran from "@/assets/hero-veteran-government-roofing.jpg";
```

## Out of scope / flags
- **Top row** ("Current Offers" + "Referral Program") is left untouched — Referral is already on-brand and Current Offers still works as a generic promo. Tell me if you want those repurposed too.
- **No new images generated** — both visuals reuse assets already in `src/assets/`, so this is a pure code edit (fast + free).
- **`/commercial-roofing` fallback**: same situation as the slider above — the "Why Metal?" link goes there until a dedicated metal-roofing education page exists. Say the word and I'll spin one up in a follow-up.

