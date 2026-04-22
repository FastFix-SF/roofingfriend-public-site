

## Goal
Repurpose the entire `/rebates` page from plumbing/water-heater rebates (TECH Clean California, HEEHRA, etc.) into a **Roofing Friend Incentives & Savings** page covering the actual rebates, tax breaks, and insurance discounts available for **metal roofing & cool roofs** in California.

## Research summary — what's actually available for roofing

| # | Program | What it gives | Source |
|---|---------|--------------|--------|
| 1 | **California Title 24 Cool Roof Compliance** | Not a rebate — but every CRRC-rated metal roof we install meets/exceeds Title 24 reflectance & emittance. Avoids permit failures + unlocks utility rebates. | CEC Title 24 Part 6 |
| 2 | **PG&E / SMUD / SDG&E Cool Roof Rebates** | $0.10–$0.20 per sq ft for CRRC-certified cool roofs (steep & low slope). On a 2,000 sq ft roof = $200–$400. | PG&E, SMUD, SDG&E utility programs |
| 3 | **Federal §179D — Commercial Buildings Deduction** | Up to **$5.81/sq ft** tax deduction for energy-efficient commercial roof systems (TPO, cool metal). Huge for warehouses & multi-family. | IRC §179D |
| 4 | **California FAIR Plan Wildfire Hardening Discount** | Up to **13.8% off the wildfire portion** of insurance premium for Class A fire-rated roofs (metal qualifies automatically) + ember-resistant details. | CA Dept of Insurance "Safer from Wildfires" |
| 5 | **Standard Insurer Wildfire Mitigation Discounts** | Most CA homeowners insurers (State Farm, Allstate, USAA, Mercury) offer 5–25% premium discounts for Class A roofs in WUI zones. | Safer from Wildfires regulation |
| 6 | **GoGreen Home Energy Financing** | Low-interest loans (state-backed) for cool roof + insulation packages. Up to $50K, terms to 15 yrs. | CAEATFA / CHEEF |

## Changes — file by file

### 1. `src/lib/rebates-data.ts` — full rewrite
Replace all 6 `rebatePrograms` entries with the 6 above. Keep the same `RebateProgram` interface (slug, name, tagline, description, amount, whoQualifies, howToApply, highlights[6], optional link).

New slugs:
- `title-24-compliance`
- `utility-cool-roof-rebates`
- `section-179d-commercial`
- `fair-plan-wildfire-discount`
- `insurance-wildfire-mitigation`
- `gogreen-financing`

Rewrite the 7 `rebateFaqs` entries to match the roofing context:
- "Can I combine multiple roofing rebates?"
- "Does a metal roof always qualify for the FAIR Plan discount?"
- "How much can I save in insurance premiums after a metal roof?"
- "Do I need a CRRC-rated product to get the utility rebate?"
- "What's the difference between Title 24 compliance and a cool roof rebate?"
- "Are commercial properties eligible for §179D?"
- "Does Roofing Friend handle the rebate paperwork?"

### 2. `src/pages/Rebates.tsx` — copy + meta updates only (structure stays)
- **Helmet**: title → `California Roofing Rebates, Tax Breaks & Insurance Discounts | Roofing Friend`, description → focus on metal roof savings + FAIR Plan + §179D, canonical → `https://roofingfriend.com/rebates`.
- **Hero H1**: `Roofing Rebates & Insurance Discounts`
- **Hero subhead**: `Stack utility rebates, federal tax deductions, and wildfire insurance discounts on your new metal roof`
- **Hero buttons**: keep ServiceTitan link, change CTA copy to `Get Your Free Roofing Assessment` and `See All Programs`.
- **Stacking promo cards**: 
  - Card 1: `Stack Your Roofing Savings` / `Combine utility rebates, federal §179D deductions, and FAIR Plan discounts to slash your roof investment.`
  - Card 2: `We Handle the Paperwork` / `Roofing Friend files every rebate, tax certification, and insurance discount form for you.`
- **CTA section near bottom**: H2 → `Not Sure Which Rebates You Qualify For?` (keep — already on-brand). Subhead updated to reference roof + property + WUI zone.
- **Section icons array**: keep the 6 lucide icons (`Leaf, DollarSign, Home, Building2, Zap, MapPin`) — they map fine to the new programs (Leaf=Title 24, DollarSign=Utility, Building2=§179D, Zap=FAIR Plan, Home=Insurer Discounts, MapPin=GoGreen).

### 3. Hero & CTA images
Reuse existing assets — no new generation needed:
- Hero: swap `promoRebates` import → use `slide-standing-seam.jpg` (charcoal metal roof, premium hero shot).
- CTA bottom: swap `ctaRebates` import → use `hero-veteran-government-roofing.jpg` (already in repo).
- Update `alt` text accordingly.

## Out of scope / flags
- **Exact rebate $ amounts** are stated as ranges (e.g., "$0.10–$0.20/sq ft") because utility programs change. Each card's "How to Apply" notes that Roofing Friend confirms current amounts at quote time — this protects against stale numbers.
- **No new images, no new components, no routing changes** — pure data + copy edit, ~2 files.
- The page route stays at `/rebates`. If you want to rename it (e.g. `/incentives` or `/savings`), say the word.

