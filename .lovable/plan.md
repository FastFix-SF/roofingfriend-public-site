

## Goal

Replace every instance of the old phone number `(510) 999-7663` / `5109997663` with the new number `+1 (415) 697-1849` / `14156971849` across the entire site.

## Files to update

A site-wide search will catch every occurrence, but based on what I've seen so far the number lives in at least:

1. **`src/components/Footer.tsx`** — Contact Info column `tel:` link and display text.
2. **`src/pages/Contact.tsx`** — Phone card (`tel:` + display), JSON-LD `telephone`, and the inline call link under the form.
3. **`src/components/BottomBar.tsx`** — sticky mobile call button (likely).
4. **`src/components/Navbar.tsx`** — header call CTA (if present).
5. **`src/components/HeroSection.tsx` / `ServiceHero.tsx` / `BookingDialog.tsx`** — any embedded call CTAs.
6. **`index.html`** + **`public/llms.txt`** — any hardcoded contact references.
7. **Any other page** (`About`, `CityPage`, `Reviews`, `Rebates`, `Referral`, `WarrantyDetail`, etc.) that hardcodes the number.

## Format used everywhere

- **Display text**: `(415) 697-1849`
- **`tel:` href**: `tel:+14156971849` (E.164, with the `+`)
- **JSON-LD `telephone`**: `+1-415-697-1849`

## Approach

1. Run a project-wide search for `5109997663`, `510 999`, `510) 999`, `999-7663`, and `999.7663` to enumerate every occurrence.
2. Replace each with the new number using the format conventions above (display vs. tel vs. schema).
3. Leave all surrounding labels (e.g. "Call or text anytime", "24/7 Emergency Service") untouched.

## Out of scope

- No layout, copy, or component changes — number swap only.
- Email addresses, hours, and addresses stay as they are.

