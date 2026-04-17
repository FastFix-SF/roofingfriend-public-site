

## Plan: Update Favicon and Tab Metadata

### Changes

1. **Favicon** — Use the existing `src/assets/west-peak-logo.png` as the tab icon
   - Copy the logo to `public/favicon.png`
   - Update `index.html` to reference `/favicon.png`
   - Delete `public/favicon.ico` if it exists

2. **Tab title and description** — Remove generic "Lovable" branding
   - Title: `West Peak Trenchless & Plumbing | Bay Area 24/7 Plumbing`
   - Description: `Trenchless pipe repair, sewer services, hydro jetting, water heater installation & 24/7 emergency plumbing in the San Francisco Bay Area.`
   - Update `og:title`, `twitter:title`, `og:description`, `twitter:description` to match

### File changes

| File | Change |
|------|--------|
| `public/favicon.png` | Copy from `src/assets/west-peak-logo.png` |
| `index.html` | Add `<link rel="icon">`, update `<title>`, meta description, OG/Twitter tags |

