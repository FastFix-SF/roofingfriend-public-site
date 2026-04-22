

## Goal

Replace the Contact page hero background (`src/assets/hero-contact.jpg`) with a photo-real image of a **Roofing Friend service van** — clean, branded with the company logo on the side panel, parked in a real-world setting.

## Approach

Use Nano Banana Pro (`google/gemini-3-pro-image-preview`) in **multi-image edit mode** — feed it the existing `roofing-friend-logo.png` so the model reproduces the actual brand mark on the vehicle (not an invented logo).

### Prompt direction

> "Photo-realistic wide shot of a clean white commercial work van (Mercedes Sprinter / Ford Transit style) parked in a residential driveway during golden hour. The van's side panel prominently features the provided 'Roofing Friend' logo applied as professional vehicle vinyl wrap — logo crisp, well-lit, slightly reflective on the painted metal. Aluminum extension ladders mounted to the roof rack. Subtle Bay Area neighborhood backdrop with warm natural light. Premium, trustworthy, clean — looks like a real photo of a high-end roofing contractor's service vehicle. 16:9 aspect ratio, hero-banner composition with negative space on the left for overlay text."

### Files to update

1. `src/assets/hero-contact.jpg` — regenerate via image edit (using logo as second input)
2. `src/assets/hero-contact.webp` — re-encode from new JPG (sharp, q80, ~1920px wide)

### Process

1. Read `src/assets/roofing-friend-logo.png` → base64.
2. Send prompt + logo image to Lovable AI Gateway (`google/gemini-3-pro-image-preview`).
3. Save returned image → JPG (q88, 1920px wide) and matching WebP (q80).
4. **QA pass**: open the new JPG, verify (a) logo is recognizable and correctly placed, (b) van/scene looks photographic not CGI, (c) left-side negative space works for the white "Contact Us" headline + tagline overlay (the existing `bg-black/60` overlay in `ServiceHero` will keep text legible regardless). Re-run if logo is garbled or scene reads as fake.

## Files

- **Edit**: `src/assets/hero-contact.jpg`, `src/assets/hero-contact.webp`.
- No code changes — `Contact.tsx` already imports these paths.

## Out of scope

- Changing the page copy ("Contact Us" / tagline) or layout.
- Adding the van imagery to other pages — only the Contact hero.

