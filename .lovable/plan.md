

## Goal

Replace the third slider image (`warranty-industrial-v2.jpg` — "Government & Public Sector") with a new photorealistic version that doesn't have the warped/AI-looking metal roof seams visible in the close-up reference the user shared.

## What's wrong with the current image

The standing seam panels in the current render show:
- Bent / wavy ribs that don't run straight
- Inconsistent panel widths
- Distorted geometry around the dormer / hip transitions
- Unnatural copper accent strips that "melt" into the panels

These are classic AI-image tells and immediately read as fake.

## Changes

**Files**:
- `src/assets/warranty-industrial-v2.jpg` (regenerate)
- `src/assets/warranty-industrial-v2.webp` (re-encode from new JPG)

**Approach**:
1. Use the higher-quality `google/gemini-3-pro-image-preview` model (vs the flash model used previously) for cleaner geometry on architectural details.
2. Prompt for a real-photography aesthetic: government / institutional building (e.g., civic center, federal facility, military base admin building) with a dark gray standing seam metal roof, shot at golden hour, wide architectural lens, no extreme close-ups of seams.
3. Specify: panels must run perfectly straight and parallel, consistent rib spacing, sharp clean ridges, no copper trim, no warping.
4. Aspect ratio targeted at 16:9 to match the slider's `lg:aspect-[16/9]`.
5. Re-encode the JPG to WebP at quality 85 to keep the existing `<picture>` source working with no code changes.

**No code changes needed** — only asset replacement, so the slider, layout, and lazy-loading all stay identical.

## Out of scope

- The other two slider images (already approved by the user).
- Slider behavior, layout, copy.

