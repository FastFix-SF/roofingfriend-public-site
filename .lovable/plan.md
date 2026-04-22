
## Goal

Update the **last card in the warranty slider** — the **Government & Public Sector** image — so it matches the newer premium, photo-real look of Residential and Commercial.

## What happened

The current code shows this was not a rendering bug in the slider itself:

- **Residential** already points to `warranty-residential-v2`
- **Commercial** already points to `warranty-commercial-v2`
- **Government & Public Sector** still points to the old original files:
  - `src/assets/warranty-industrial.jpg`
  - `src/assets/warranty-industrial.webp`

So the “last one” stayed the same because it was never included in the previous image update scope.

## Implementation

1. Create a new premium, photo-real replacement for the Government/Public Sector roof image that keeps the strong color direction but removes the fake-render look.
2. Export matching optimized files:
   - `src/assets/warranty-industrial-v2.jpg`
   - `src/assets/warranty-industrial-v2.webp`
3. Update all places that use the industrial warranty image to point at the new version.

## Files to update

### New/updated asset
- `src/assets/warranty-industrial-v2.jpg`
- `src/assets/warranty-industrial-v2.webp`

### Import references to switch over
- `src/pages/Index.tsx`
- `src/pages/WarrantyOverview.tsx`
- `src/pages/WarrantyDetail.tsx`

## Visual direction

Keep it:
- premium
- clean
- realistic
- government/commercial appropriate

Avoid:
- dirty or aged metal
- CGI-perfect panel texture
- exaggerated imperfections
- muddy contrast that hurts headline readability

## Technical details

Current source usage confirms the issue:

```text
Index.tsx
- Residential -> warranty-residential-v2
- Commercial -> warranty-commercial-v2
- Government & Public Sector -> warranty-industrial (old)

WarrantyOverview.tsx / WarrantyDetail.tsx
- Also still import warranty-industrial (old)
```

## Result

After implementation, all three warranty cards in the slider will use the newer premium visual standard, and the last card will no longer be the old unchanged image.
