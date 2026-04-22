

## Goal

Replace every gold/brown CTA across the site that currently links out to ServiceTitan (`book.servicetitan.com/...`) with a button that opens a **modal popup** containing the live booking form, embedded inline.

## Approach

### 1. New `BookingDialog` component

Create `src/components/BookingDialog.tsx` — a Radix dialog (reusing `src/components/ui/dialog.tsx`) sized for a booking widget (~`max-w-3xl`, `h-[85vh]`). Inside: an `<iframe>` pointed at the ServiceTitan booking URL, full width/height, with a loading skeleton while it boots.

```tsx
<Dialog open={open} onOpenChange={onOpenChange}>
  <DialogContent className="max-w-3xl w-[95vw] h-[85vh] p-0 overflow-hidden">
    <iframe src={BOOKING_URL} className="w-full h-full border-0" title="Book an inspection" />
  </DialogContent>
</Dialog>
```

> **Risk**: ServiceTitan may set `X-Frame-Options: DENY` or a `frame-ancestors` CSP that blocks embedding. If so, the iframe will render blank. Mitigation: fallback message inside the dialog ("Trouble loading? Open in new tab →") with the original link, plus a graceful `onError`/timeout detection. We'll verify after first deploy and, if blocked, switch to a custom HTML form that POSTs to the same booking endpoint, or to a Calendly/Cal.com replacement.

### 2. Global open mechanism

Lots of files use this CTA. To avoid prop-drilling an `onClick` everywhere, mount **one** `BookingDialog` once in `App.tsx` and open it via a tiny event bus (same pattern already used for the assistant): `window.dispatchEvent(new Event('open-booking'))`. A `useBooking()` hook exposes `openBooking()` for components that prefer a function call.

### 3. Replace every ServiceTitan `<a>` with a button

Find/replace across the 11 files that contain `book.servicetitan.com`:

- `src/components/BottomBar.tsx` — "Schedule an Inspection Today"
- `src/components/HeroSection.tsx` — primary CTA when `primaryLink` is the ServiceTitan URL (treat as a sentinel; swap to button)
- `src/components/PromoGrid.tsx` — "Learn More", "Get a Free Roof Assessment"
- `src/components/VehicleSlider.tsx` — primary CTA per slide
- `src/components/SecondarySlider.tsx` — primary CTA per slide
- `src/components/ChargingSection.tsx` — "Claim My Free Quote", "Lock My Free Quote"
- `src/pages/Index.tsx` — slide config (`primaryLink` → sentinel `#book`)
- `src/pages/Rebates.tsx` — 4 CTAs
- `src/pages/CommercialRoofing.tsx` — all booking CTAs
- `src/pages/CityPage.tsx` — booking CTAs
- `src/pages/Contact.tsx` — booking CTAs

Each `<a href="https://book.servicetitan.com/...">` becomes:
```tsx
<button onClick={openBooking} className="…same classes…">…label…</button>
```

For slide/data configs (`Index.tsx` slides, sliders), introduce a sentinel value like `primaryLink: "#book"` and let `HeroSection` / sliders detect that and call `openBooking()` instead of navigating.

### 4. Constants file

Create `src/lib/booking.ts` exporting `BOOKING_URL` (the ServiceTitan link) so the URL lives in one place — used by the iframe and by the fallback "open in new tab" link.

## Files

- **New**: `src/components/BookingDialog.tsx`, `src/hooks/useBooking.ts`, `src/lib/booking.ts`.
- **Edit**: `src/App.tsx` (mount `<BookingDialog />`), plus all 11 files above to swap anchors → buttons.

## Out of scope

- Building a custom booking form from scratch (only happens if ServiceTitan blocks iframe embedding — handled as a follow-up).
- Changing the "Call (510) 999-7663" / phone CTAs.
- Restyling buttons; only their click behavior changes.

