

## Goal
Repurpose the four-card homepage slider (currently plumbing services: Trenchless / Water Heater / Hydro Jetting / Plumbing) so it educates visitors on the **metal roofing systems & service categories** that Roofing Friend actually offers — keeping the same visual layout, CTAs, and slider behavior.

## Source mapping (from roofingfriend.com)
Roofing Friend's portfolio features **4 distinct project types**, which map cleanly onto the existing 4 slide structure:

| # | Roofing Friend offering | Slider card |
|---|---|---|
| 1 | Standing Seam Metal Roof (Coastal Property, Los Gatos — 24ga Kynar 500® Steel) | **Standing Seam** — "The Premium Metal Roof, Built to Last 50+ Years" |
| 2 | R-Panel System (Modern Residential, Castro Valley — 24ga Kynar 500® Steel) | **R-Panel System** — "Affordable Metal Strength for Homes & Barns" |
| 3 | Multi-V Panel (Luxury Home Renovation, Tiburon — 24ga Painted Steel) | **Multi-V Panel** — "Architectural Style for Luxury Homes" |
| 4 | TPO Membrane (Commercial Warehouse, Tracy — 60mil White TPO) | **TPO Commercial** — "Energy-Efficient Flat Roofs for Business" |

This mirrors the educational intent of West Peak's original slider (each card = a service category with a one-line value prop, Book Now + Learn More).

## Changes

### 1. `src/components/VehicleSlider.tsx` — replace the `vehicles` array
Swap the 4 entries for the new metal roofing categories. Keep all styling, embla setup, and CTA wiring as-is.

```ts
const vehicles = [
  { image: slideStandingSeam, title: "Standing Seam", subtitle: "Premium Metal Roof · 50+ Year Lifespan", primaryCta: "Get a Quote", secondaryCta: "Learn More", learnMoreLink: "/standing-seam" },
  { image: slideRPanel, title: "R-Panel System", subtitle: "Affordable Metal Strength for Homes & Barns", primaryCta: "Get a Quote", secondaryCta: "Learn More", learnMoreLink: "/r-panel" },
  { image: slideMultiV, title: "Multi-V Panel", subtitle: "Architectural Style for Luxury Homes", primaryCta: "Get a Quote", secondaryCta: "Learn More", learnMoreLink: "/multi-v" },
  { image: slideTpo, title: "TPO Commercial", subtitle: "Energy-Efficient Flat Roofs for Business", primaryCta: "Get a Quote", secondaryCta: "Learn More", learnMoreLink: "/tpo-commercial" },
];
```

### 2. New slide images (4 generated assets)
Generate 4 high-quality photo-style images matching the card aspect ratio (4:5 mobile / 16:9 desktop) and replace the old plumbing imports:

- `src/assets/slide-standing-seam.jpg` — close-up of a charcoal/black standing seam metal roof on a modern home, golden-hour lighting
- `src/assets/slide-r-panel.jpg` — corrugated R-panel metal roof on a residential ranch / barn-style home
- `src/assets/slide-multi-v.jpg` — multi-V profile metal roof on a luxury Tiburon-style hillside home
- `src/assets/slide-tpo.jpg` — aerial view of a white TPO membrane on a flat commercial warehouse roof

Update the import block at the top of `VehicleSlider.tsx` accordingly. The old slide image files (`slide-sedan.jpg`, `slide-suv.jpg`, `slide-hydro-jetter.png`, `slide-sports.jpg`, `slide-water-heater.png`) can stay on disk — only the imports change.

## Notes / non-goals
- **Routes**: `/standing-seam`, `/r-panel`, `/multi-v`, `/tpo-commercial` don't exist yet. The Learn More buttons will 404 until those pages are built. Out of scope for this change — flag only. If you want, I can point all four `learnMoreLink`s to `/commercial-roofing` (the one roofing page that already exists) as a temporary fallback. **Tell me which you prefer.**
- Book Now buttons keep the same ServiceTitan booking URL (already hardcoded in the component).
- No changes to `HeroSection`, `Navbar`, or any other component.

