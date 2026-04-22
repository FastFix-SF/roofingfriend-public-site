

## Goal

Replace the **Referral Program** card image so it visually reflects the actual message: **referring a friend and earning a commission on a completed metal roof install** — instead of the current generic inspection photo.

## What changes

### 1. Generate a new on-brand image
Create `src/assets/promo-referral-share.jpg` + `.webp` (Nano Banana Pro) showing a concept that reads instantly as "refer a friend / earn cash":

- **Concept**: A homeowner standing in front of their freshly installed standing-seam metal roof (Bay Area home, golden hour), showing his phone to a neighbor over the fence — phone screen subtly suggests sharing/text. Warm, trustworthy, daylight tone.
- **Aspect**: ~3:2 (matches the current 768×512 slot).
- **Style**: photorealistic, consistent with the other promo cards already on the page.

### 2. Wire it into the card
Update `src/components/PromoGrid.tsx`:
- Swap imports `promoHeroes` / `promoHeroesWebp` → `promoReferralShare` / `promoReferralShareWebp`.
- Update the `<SmartImage>` `src`, `webpSrc`, and `alt` to "Refer a friend, earn a commission on every completed metal roof install".

### 3. Leave everything else alone
- Card layout, copy ("Referral Program" / "Refer a friend… earn a commission…"), CTA button, link to `/referral` — all unchanged.
- The other three promo cards (Current Offers, Built to Outlast Your Mortgage, Veteran-Owned) — unchanged.
- The old `promo-inspection.jpg/.webp` files stay in `src/assets/` (no deletion) in case they're reused elsewhere.

## Files touched

- `src/assets/promo-referral-share.jpg` + `.webp` — newly generated
- `src/components/PromoGrid.tsx` — swap the 2 imports + 1 `<SmartImage>` props

## Out of scope

- No copy, layout, button, or routing changes.
- Other promo cards untouched.

