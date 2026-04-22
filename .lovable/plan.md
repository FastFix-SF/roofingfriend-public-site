

## Goal
Add the tagline **"Veteran-Built Metal"** under "Roofing Friend" in the navbar, between the existing gold rule lines.

## Change
**File:** `src/components/Navbar.tsx` (lines 30–32)

The empty `<span>` between the two gold rule lines currently renders nothing. Drop the tagline text in there — it already has the correct gold-colored, small tracked-uppercase styling baked in.

```tsx
<span className="text-cta-gold font-medium text-[8px] sm:text-[10px] tracking-[0.25em] uppercase leading-none">
  Veteran-Built Metal
</span>
```

## Result
Navbar lockup becomes:
```text
ROOFING FRIEND
— VETERAN-BUILT METAL —
```
Gold rules flank the tagline, matching the original visual treatment. No other files touched.

