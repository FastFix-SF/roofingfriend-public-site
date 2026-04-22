

## Goal

Replace the current Footer content (West Peak Trenchless & Plumbing) with **The Roofing Friend** brand info pulled from roofingfriend.com, matching the uploaded reference.

## Source data (from roofingfriend.com)

- **Brand**: The Roofing Friend — "We Can, We Will"
- **Tagline**: "Your trusted partner for premium metal roofing solutions across the San Francisco Bay Area. Licensed, insured, and committed to excellence."
- **Phone**: (510) 999-7663 — 24/7 Emergency Service
- **Email**: info@theroof.info
- **Location**: San Francisco Bay Area — Serving 13+ locations
- **Hours**: Mon–Fri: 8AM – 4PM, Weekends: Closed (Emergency 24/7)
- **License**: CA License #1067709
- **Copyright**: © 2026 The Roofing Friend

## Footer structure (4 columns, matching the uploaded reference)

1. **Brand column** — Logo + "The Roofing Friend" / "We Can, We Will" + tagline + social icons (YouTube, Instagram, Facebook, TikTok, Google)
2. **Quick Links** — Home, About Us, Projects, Material Store, Contact, Get Quote
3. **Services** — Metal Roof Installation, Roof Repair & Maintenance, Standing Seam Systems, R-Panel Installation, Commercial Roofing, Residential Roofing
4. **Contact Info** — Phone (with "24/7 Emergency Service"), Email, Location ("San Francisco Bay Area — Serving 13+ locations"), Hours ("Mon - Fri: 8AM - 4PM / Weekends: Closed")

**Service Areas row** (centered, below the 4-column grid): San Francisco · Santa Clara · Walnut Creek · Tiburon · San Anselmo · Santa Cruz · Modesto · Kentfield · Santa Rosa · Alameda County · Contra Costa County · Petaluma · Los Gatos

**Bottom bar**: "© 2026 The Roofing Friend. All rights reserved. | Licensed & Insured | CA License #1067709" — Privacy Policy · Terms of Service · Powered by FastFix.AI badge (kept as-is).

## Implementation

Single file edit: `src/components/Footer.tsx`

- Swap all hardcoded copy (brand name, tagline, phone, email, address, services list, hours, copyright, license #) for the Roofing Friend values above.
- Add a centered **Service Areas** strip between the 4-column grid and the bottom bar (separator above and below, matching the reference screenshot).
- Keep the existing color scheme (`bg-[#f8f6f2]`, `cta-gold` accent), grid layout, icon usage (`Phone`, `Mail`, `MapPin`, `Clock`, `Zap`), and FastFix.AI badge unchanged — only copy + the new service-areas row change.
- Logo stays as the existing `west-peak-logo.png` import (no new asset needed unless you want me to swap it — flagging as out of scope).
- Social icons row: skipping for now — current footer has none and adding 5 new icon imports + dead links would be noise. Can add in a follow-up if you want them live.

## Files

- `src/components/Footer.tsx` — copy swap + add service-areas row (~15 lines added, ~20 lines of copy edited).

## Out of scope

- Replacing the West Peak logo image with a Roofing Friend logo (no asset uploaded; would need a separate generation/upload pass).
- Wiring social media icons (YouTube/Instagram/Facebook/TikTok/Google) — no real URLs available from the scrape.
- Updating Footer links to point to actual `/projects`, `/material-store` routes — those pages don't exist in this project; links will go to closest existing routes (`/`, `/about`, `/contact`, etc.) and "Get Quote" → `/contact`.

