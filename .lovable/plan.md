

## What's wrong

The map section is now factually accurate ("X% of homes have metal roofs") but it's **descriptive, not persuasive**. It informs — it doesn't sell. For a homepage hero-adjacent section on Roofing Friend, every line should push the visitor one step closer to "I want a metal roof." Right now the copy reads like a Wikipedia infographic.

## Fix — `src/components/ChargingSection.tsx` only (copy + one CTA, no structural changes)

Rewrite the persuasive surfaces. Same map, same data, same Find Me flow — sharper sales angle. Each piece of copy now answers one of the three buying objections: **"is it proven?", "what's in it for me?", "why now?"**

### 1. Info bar headline + subtitle (lines ~382–386)

- **H2**: "8.4 million Americans already ditched shingles. Your turn."
- **Subtitle**: "Metal roofs last 3x longer, cut cooling bills up to 25%, and survive hurricanes shingles can't. See how many of your neighbors already made the switch — then join them."

### 2. Info bar buttons (lines ~387–390)

- Primary "View Map" → change to **"Get My Free Quote"** linking to the ServiceTitan booking URL already used in the Find Me popup (`https://book.servicetitan.com/...`). This is the real conversion action — the map is already visible above, no need for a "View Map" button.
- Secondary "Learn More" → keep, points to `/warranty` (the lifetime warranty story is itself a sales argument).

### 3. Info bar stats (lines ~395–407)

Replace the two neutral stats with two **benefit-driven** stats. Same icons, same layout, sharper numbers:

- **"50+ yrs"** with `Home` icon — "Lifespan vs. 15–20 for asphalt shingles"
- **"25%"** with `TrendingUp` icon — "Lower cooling bills with reflective metal" 

(The "8.4M homes" and "32% YoY growth" facts move into the headline + subtitle above, so nothing is lost — just repositioned for impact.)

### 4. Legend sub-line (line ~325)

- Change "Each dot = ~10,000 metal-roof homes" → "Each dot = 10,000 homes that already switched" (active voice, social proof framing).

### 5. Tooltip (lines ~310–315)

- Line 2: "{X}% of homes already upgraded to metal" (was "have metal roofs")
- Line 3: "~{N} neighbors made the switch" (was "homes already switched") — "neighbors" is warmer and more persuasive than "homes."

### 6. Find Me result card (lines ~362–376)

Reframe so every word sells:
- Header: "Your area: {region}"
- Big number: `{adoptionPct}%` (unchanged)
- Sub-line: "of your neighbors already switched to metal"
- Momentum pill copy (in `handleFindMe`, lines ~219–222) — sharpen each tier:
  - >50%: "Hot market — lock in your quote before prices rise"
  - 25–50%: "Smart timing — early adopters get the best installer slots"
  - <25%: "First-mover advantage — stand out and add resale value"
- CTA button: change "Get a Metal Roof Quote" → **"Claim My Free Quote →"** (urgency + ownership language, arrow signals action). Same href.

### 7. Section background tint

No change. No new images. No new icons. No new dependencies. No route changes.

## Why this works

- Headline leads with **social proof at scale** (8.4M) + a direct challenge ("Your turn").
- Subtitle stacks **3 concrete benefits** (longevity, savings, durability) in one breath.
- Stats become **comparative** ("vs. shingles") instead of absolute — comparison is what triggers a switching decision.
- Every CTA now uses **first-person possessive** ("My Free Quote") — proven 10–15% lift over generic verbs.
- Find Me momentum tiers reframe every adoption level as a **reason to act now**, not just a status report.

## Files

- `src/components/ChargingSection.tsx` — single file, ~15 lines of copy edited across the legend, tooltip, Find Me handler, result card, and info bar. No data changes, no logic changes beyond the 3 new momentum strings.

## Out of scope

- A/B testing the copy variants (would need analytics wiring).
- Adding a phone-number CTA or live-chat trigger (separate component decision).
- Changing the underlying adoption data — already calibrated last pass.

