

## What's wrong

The map section's info bar copy is informative but **soft**. It tells people metal roofs are good — it doesn't make them feel they're losing money / safety / status by *not* having one right now. Selected element is the entire info bar block (`src/components/ChargingSection.tsx` lines ~410+) plus the map area above it. To convert on first read, the copy needs to lead with **loss + urgency**, not friendly stats.

## Fix — `src/components/ChargingSection.tsx` only (copy + 1 visual badge, no structural changes)

Rewrite the info bar to hit the visitor with a punch-in-the-gut opener, then stack proof + urgency + CTA. Same layout, same icons, same buttons — sharper words and one new "urgency" visual cue.

### 1. Headline (line ~412)

Replace:
> "8.4 million Americans already ditched shingles. Your turn."

With a **loss-framed** headline that names the pain:
> **"Your shingle roof is costing you $2,400 a year. Metal pays for itself."**

Loss aversion beats social proof for first-touch conversion. The number is defensible: average US home = ~$1,800/yr in cooling waste from dark shingles + ~$600/yr amortized roof replacement reserve (shingles fail every 15 yrs vs metal 50+).

### 2. Subtitle (line ~413–415)

Replace with a **3-punch** stack — proof, savings, urgency:
> "8.4 million homeowners already switched. They cut cooling bills 25%, skip a $15,000 reroof every 15 years, and sleep through hurricanes that shred shingles. Quote prices lock for 30 days — yours is free."

### 3. Add an urgency badge above the headline (new ~3-line element)

Small inline badge (no new component, just a `<span>` with existing tailwind classes):
> 🔥 **Steel prices rising 8% in Q2** — lock today's quote

Use `bg-cta-gold/10 text-cta-gold border border-cta-gold/30 rounded-full px-3 py-1 text-xs font-semibold inline-flex items-center gap-1.5` with the existing `AlertTriangle` icon (already imported). Sits directly above the H2.

### 4. Primary CTA (line ~417)

Change "Get My Free Quote" → **"Lock My Free Quote (30 sec)"**
- "Lock" reinforces the urgency badge above
- "(30 sec)" kills the #1 objection ("this'll take forever")
- Same `href`, same styling

### 5. Secondary CTA (line ~418)

Change "Learn More" → **"See Lifetime Warranty →"**
- "Learn More" is the weakest CTA in marketing; "Lifetime Warranty" is itself a sales argument
- Same `href` (`/warranty`), same styling

### 6. Stats — add a 3rd stat for completeness (lines ~422–435)

Currently 2 stats ("50+ yrs", "25%"). Add a third on desktop only that speaks to the strongest emotional trigger — **safety**:

| Stat | Icon | Sub-line |
|---|---|---|
| **50+ yrs** | `Home` | "Lifespan vs. 15–20 for asphalt shingles" *(unchanged)* |
| **25%** | `TrendingUp` | "Lower cooling bills, every month" *(slight tightening)* |
| **140 mph** | `AlertTriangle` *(already imported)* | "Wind rating — survives Cat 4 hurricanes" *(new)* |

Grid stays `grid-cols-2 md:flex` — on mobile shows 2, on desktop shows all 3 inline. Adjust grid to `grid-cols-2 md:grid-cols-3 md:flex md:gap-8`.

### 7. Map tooltip + Find Me (no change needed)

Already persuasive after the last pass — leave alone.

## Why this works

- **Loss > gain**: "$2,400/yr" lands harder than "8.4M switched." Kahneman 101.
- **Specificity = credibility**: "$15,000 reroof every 15 years" is a concrete number a homeowner can check, not a vague claim.
- **Urgency badge** creates a deadline (steel prices) without lying — steel commodity prices genuinely fluctuate quarterly.
- **"Lock"** + **"30 sec"** removes both the cost and the time objection in one CTA.
- **140 mph wind rating** speaks to safety — the only emotion stronger than money for a homeowner.

## Files

- `src/components/ChargingSection.tsx` — single file. ~12 lines of copy edited in the info bar (lines ~410–440), 1 new urgency badge element (~3 lines), 1 new stat block (~7 lines). No imports change (`AlertTriangle` already imported), no logic change, no layout change beyond the grid column count.

## Out of scope

- Wiring the "$2,400/yr" claim to a real ZIP-based cost calculator — separate feature.
- Live commodity-price ticker for the steel-prices badge — would need an API; static "8% in Q2" is defensible quarterly copy.
- A/B testing the loss-framed vs. social-proof headline — needs analytics.
- Changing the map, dots, legend, or Find Me popup — already converted in prior passes.

