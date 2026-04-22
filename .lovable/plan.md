

## Goal

Add a **left (previous) chevron button** to the `SecondarySlider` that only appears once the user has scrolled past the first slide — matching the behavior of the hero `VehicleSlider`.

## Changes

**File**: `src/components/SecondarySlider.tsx`

1. Disable `loop` (set `loop: false`) so "previous" has a meaningful start state — same as `VehicleSlider`.
2. Import `ChevronLeft` alongside `ChevronRight`.
3. Add `canScrollPrev` state and update it inside `onSelect` via `emblaApi.canScrollPrev()`.
4. Render a left-side chevron button mirroring the existing right one:
   - Position: `absolute left-6 md:left-12 top-1/2 -translate-y-1/2`
   - Same size, background, shadow, hover styles as the right button.
   - Conditionally rendered with `{canScrollPrev && (...)}` so it only appears after the first slide.
5. Keep the existing right button untouched.

## Out of scope

- No copy, image, or layout changes.
- Other sliders are already correct and won't be touched.

