

## Goal
Replace the commercial roofing hero slide image and reposition that slide around veteran-owned / government roofing work.

## Changes

**1. Asset**
- Copy `user-uploads://image-3.png` → `src/assets/hero-veteran-government-roofing.jpg`
- Leave the existing `hero-commercial-roofing.jpg` in place (unused, harmless)

**2. `src/pages/Index.tsx` — second hero slide**
Update the import + the slide object that currently uses `heroCommercialRoofing`:
- **Image**: new veteran/government roofing photo
- **Title**: "Veteran-Owned. Government-Trusted."
- **Subtitle**: "Standing seam metal roofs for military bases, federal facilities & public sector projects"
- **Primary CTA**: "Request a Government Quote" (keep existing ServiceTitan booking link)
- **Secondary CTA**: keep "Learn More" → `/trenchless/commercial` for now (no dedicated government page exists yet)
- Keep `textColor: "light"` — the photo is bright, so the existing `hero-overlay` darkening will still give white text enough contrast

**3. Files touched**
- `src/assets/hero-veteran-government-roofing.jpg` (new)
- `src/pages/Index.tsx` (import swap + slide copy)

No changes to `HeroSection.tsx` — the component already supports everything needed.

## Note
The "Learn More" button still points at `/trenchless/commercial` (a plumbing page) because no government-roofing page exists. After this change, a logical follow-up would be a dedicated `/government-roofing` page and pointing the secondary CTA there.

