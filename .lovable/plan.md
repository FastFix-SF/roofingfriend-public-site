

## What's wrong on the page (verified against official 2025 sources)

I checked every program against its official source. Three issues to fix — the rest is solid.

| Issue | Source check | Fix |
|---|---|---|
| **SMUD cool roof rebate** is listed as "active" but SMUD's current rebate page only lists HVAC, heat pumps, water heaters, thermostats, induction cooktops, LEDs — **no cool roof**. The program was discontinued. | smud.org/Rebates-and-Savings-Tips/Rebates-for-My-Home (full page audit) | Remove SMUD from the utility card. |
| **SDG&E commercial cool-roof rebates** listed as periodically open. They're not — SDG&E's Energy Efficiency Business Rebates program **stopped accepting applications in August 2024**. | rebates.energy SDG&E listing | Remove SDG&E. |
| **PG&E commercial cool roof** — PG&E has a business rebate catalog but no dedicated cool-roof line item is currently published. | pge.com business rebates page | Soften wording — point to general business catalog, don't claim a specific cool-roof program. |
| **Ygrene/PACE FAQ** — Ygrene's main site now reads "PACE financing for **Florida** homeowners" on its "How it works" page. CA eligibility page still exists but the program is heavily reduced in CA. | ygrene.com/how-it-works | Soften: keep PACE mention but note availability has narrowed; point users to verify with their county. |

What's **verified active and California-genuine** (no changes needed):
- ✅ Title 24 Cool Roof (energy.ca.gov) — CA state agency
- ✅ LADWP Consumer Rebate Program — Cool Roof — CONFIRMED on current CRP application; LADWP just updated rebates Nov 1, 2025
- ✅ FAIR Plan wildfire discount — cfpnet.com 11/15/2025 PDF confirmed (12 stackable / up to 13.8% commercial)
- ✅ Safer from Wildfires admitted-carrier discounts — insurance.ca.gov
- ✅ §179D Federal — IRS Rev. Proc. 2025-32 confirmed ($5.81 / $5.94)
- ✅ GoGreen Home Energy Financing — treasurer.ca.gov/CAEATFA confirmed (cool roof under Building Envelope EEM, list updated Jan 2025)

## Changes — `src/lib/rebates-data.ts` only

### 1. Rewrite the `utility-cool-roof-rebates` card → **LADWP-anchored**

- **New name:** "LADWP Cool Roof Rebate (+ Stackable Insulation)"
- **Tagline:** "Active 2025 Los Angeles cool-roof rebate, plus a stackable Attic Insulation rebate"
- **Description:** Lead with LADWP's Consumer Rebate Program (active, just refreshed Nov 1 2025). Note that other CA utilities have wound down dedicated cool-roof rebates — Roofing Friend confirms current availability for any service area at quote time. No more SMUD/SDG&E/PG&E claims as active programs.
- **Amount:** "LADWP per-sq-ft cool-roof rebate (verified at quote) + separate Attic Insulation rebate"
- **Who qualifies:** LADWP residential customers installing CRRC-listed cool roofing on existing homes. Commercial via LADWP Commercial Programs.
- **Highlights** (6 new):
  - "LADWP Cool Roof rebate — active 2025"
  - "LADWP Attic Insulation rebate stacks with it"
  - "CRRC product listing required (we handle)"
  - "LADWP commercial programs available"
  - "Other CA utility rebates change quarterly — we verify"
  - "We file every form for you"
- **Link** stays: `https://www.ladwp.com/residential-services/assistance-programs/consumer-rebate-program`

### 2. Update FAQ #1 ("Which California utilities currently offer cool roof rebates?")

Rewrite honestly: "**LADWP** runs the most consistently active residential cool-roof rebate in California as of 2025, alongside its stackable Attic Insulation rebate. Other California utility cool-roof programs have wound down or shifted funding to heat-pump and electrification rebates. Roofing Friend verifies your specific utility's active programs before you sign — and we file every form on your behalf."

### 3. Update FAQ #5 (PACE / GoGreen)

Soften PACE language: "**GoGreen Home** is the most reliable state-backed financing for California cool-roof projects (up to ~$50K, terms to 15 years, when bundled with insulation/air sealing). PACE financing is still available in California through some county programs but availability has narrowed in recent years — Roofing Friend can check whether PACE is currently offered in your county at quote time."

## What stays exactly the same
- Title 24, FAIR Plan, Safer from Wildfires, §179D, GoGreen cards — all verified, no edits.
- All other 5 FAQs — verified accurate.
- `src/pages/Rebates.tsx` — no changes (slugs unchanged, icons unchanged, copy unchanged).
- All official links already point to CA agencies (energy.ca.gov, ladwp.com, cfpnet.com, insurance.ca.gov, gogreenfinancing.com) + the one federal source for §179D (energy.gov, which is correct since §179D is a federal IRS deduction available **to** California property owners).

## Out of scope / flags
- The §179D program is federal, not California-administered — but it's claimed by CA property owners on CA commercial buildings, so it correctly belongs on a "California savings" page. Keeping it.
- All dollar figures retain "verified at quote" caveats since utility funding cycles change.
- One file edited. No structure, routing, or image changes.

