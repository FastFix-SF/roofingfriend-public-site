

## Goal

Sync the Contact page with the **real** content scraped live from roofingfriend.com so every detail matches the actual business — and add the trust signals the live site uses but our page is currently missing.

## What's already correct

- Phone `(510) 999-7663` ✓
- Email `info@theroof.info` ✓
- Service area "San Francisco Bay Area, 13+ locations" ✓
- Hours "Mon–Fri 8AM–4PM" + "Emergency 24/7" ✓

## What's missing or off (from live site)

| Field | Live site | Our page | Action |
|---|---|---|---|
| Phone subtitle | "Call or text anytime" | "24/7 Emergency" | Update — phone card should say "Call or text anytime"; keep 24/7 emergency as separate badge |
| Contact method preference | Email / Text Message radio | (not present) | Add radio: "Preferred Contact Method" |
| Project type | Residential / Commercial / Service-Repair | (free-text only) | Add radio group |
| Trust stats block | 500+ Projects · 4.9/5 Rating · 25-Yr Warranty · Same Day Response | (not present) | Add a "Why Choose Us" stats strip below the form |
| Form heading | "Book a Service" / "Fill out a few details and we'll contact you instantly." | "Get a Free Roof Assessment" | Change to match live wording |
| Saturday/Sunday | (not mentioned on live) | "By appointment" | Remove — live site only shows Mon-Fri + Emergency 24/7 |

## Changes (single file)

**`src/pages/Contact.tsx`**

1. **Phone card**: change subtitle from "24/7 Emergency" → "Call or text anytime".
2. **Hours block**: remove the "Saturday – Sunday — By appointment" row (not on live site). Keep Mon–Fri and Emergency Storm Response 24/7.
3. **Form**:
   - Rename heading: "Get a Free Roof Assessment" → **"Book a Service"**
   - Subtitle: "Tell us about your project..." → **"Fill out a few details and we'll contact you instantly."**
   - Add **Preferred Contact Method** field (radio: Email / Text Message), default Email
   - Add **Project Type** field (radio: Residential / Commercial / Service or Repair)
   - Submit button: "Request Assessment" → **"Book Service"**
   - Update form state shape + toast accordingly
4. **New trust stats strip** below the hours/form grid: 4 stats from the live site
   - 500+ Projects Completed
   - 4.9/5 Customer Rating
   - 25-Year Warranty
   - Same-Day Response Time
5. **SEO**: update meta description + JSON-LD to reflect the real positioning ("Call or text anytime", same-day response, 500+ projects).

## Out of scope

- No new pages, no asset changes, no routing changes.
- The 2-step wizard UI on the live site (kept as a single-page form for simplicity — same fields, one screen). Happy to convert to a 2-step wizard in a follow-up if you want exact parity.

