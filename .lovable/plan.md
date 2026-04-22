

## Goal

Replace every instance of `info@theroof.info` with `roofingfriend@gmail.com` across the entire site so the email matches what the Contact page already uses.

## Where the old email still lives

Based on the selected element (`Footer.tsx` line 72) and a site-wide audit, `info@theroof.info` still appears in at least:

1. **`src/components/Footer.tsx`** — Contact Info column: `mailto:` link + display text.
2. Any other page that hardcodes it (About, City, Neighborhood, Commercial, Warranty, Reviews, Index, BookingDialog, llms.txt, index.html JSON-LD, etc.) — a global search will catch them all.

Contact page is already on `roofingfriend@gmail.com` and stays as-is.

## Approach

1. Project-wide search for `info@theroof.info`.
2. Replace every occurrence with `roofingfriend@gmail.com`, including:
   - Visible display text
   - `mailto:` href values
   - JSON-LD `email` fields in structured data
   - `public/llms.txt` and any SEO/meta references in `index.html`
3. Leave all surrounding labels, icons, and layout untouched.

## Out of scope

- Phone numbers, addresses, hours — unchanged.
- No layout, styling, or copy changes beyond the email string itself.

