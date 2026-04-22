

## What's wrong

The 3 cards in the homepage `SecondarySlider` (selected element) still read like the old West Peak plumbing site:
- "Commercial · 3-Year Warranty · **Built for business continuity**"
- "Industrial · 3-Year Warranty · **Heavy-duty pipe solutions**"
- "Residential · 40-Year Warranty · **Lifetime protection for your home**"

For Roofing Friend, "Industrial" doesn't fit the audience (roofing splits cleanly into Residential / Commercial / Government-Public Sector, matching the brand's veteran/government angle already on the hero). The taglines also reference pipes, not roofs.

## Fix — `src/pages/Index.tsx` only (the `secondarySlides` array, lines 22–26)

Rewrite the 3 slides to match the roofing pivot. Same component, same images for now (warranty imagery is generic enough), same `/warranty/:category` route structure so links keep working.

| Card | New title | New subtitle | Link |
|---|---|---|---|
| 1 | Residential | **Lifetime Metal Roof Warranty** · Standing seam built to outlast your mortgage | `/warranty/residential` |
| 2 | Commercial | **25-Year System Warranty** · Standing seam & TPO for retail, restaurants & warehouses | `/warranty/commercial` |
| 3 | Government & Public Sector | **Spec-Grade Coverage** · Veteran-owned, GSA-friendly metal roofing for federal & municipal projects | `/warranty/industrial` (slug reused so route still resolves) |

Order is flipped to lead with Residential (the brand's strongest warranty story), matching the hero's "Shingles to Standing Seam" video.

Image mapping stays the same (`warrantyResidential` → Residential card, `warrantyCommercial` → Commercial, `warrantyIndustrial` → Government). No new images, no new routes.

## Out of scope (flagged for later)

- The actual `/warranty/*` detail pages (`WarrantyOverview.tsx`, `WarrantyDetail.tsx`, `src/lib/warranty-data.ts`) **still contain full plumbing/CIPP/trenchless copy** — every card, every FAQ, every JSON-LD `serviceType: "Plumbing Warranty"` and `"@type": "Plumber"`. That's a much bigger rewrite (~150 lines of warranty-data.ts plus schema.org tags on 2 pages). Say the word and I'll do that as a separate pass — it's the right next step after this homepage fix.
- No changes to the hero, PromoGrid, ChargingSection, Footer, or BottomBar in this pass.

## Files

- `src/pages/Index.tsx` — replace the 3 entries in the `secondarySlides` array (lines 22–26). One file, ~3 lines edited.

