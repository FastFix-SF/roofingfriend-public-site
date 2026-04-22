

## Goal

Make the About page **hero** actually represent The Roofing Friend — using the real team photo and the real logo — instead of the current generic AI roof image.

## What changes

### 1. Hero background = real crew photo
The same iconic team selfie from roofingfriend.com is already in the project at `src/assets/about-crew.jpg` / `.webp`. Use **that** as the hero background image (replacing `hero-about.jpg`).

To keep it readable behind white text:
- Stronger gradient overlay (dark from bottom-left → semi-transparent top-right) instead of the current flat `bg-black/60`.
- Slight `object-position: top` so faces aren't cropped at the chin on wide screens.

### 2. Real logo overlay in the hero
Add the real `roofing-friend-logo.png` (already in `src/assets/`) above the H1, sized ~80px tall with a soft white drop-shadow so the blue/green logo pops on the dark photo.

### 3. ServiceHero component — extend, don't break
`ServiceHero` is shared by other pages, so add **two optional props** that only the About page uses:
- `logo?: { src: string; webp?: string; alt: string }` → renders the logo above the title
- `overlayClassName?: string` → lets About pass a custom gradient (`bg-gradient-to-tr from-black/85 via-black/60 to-black/40`) instead of the default `bg-black/60`

Default behavior for every other page stays identical.

### 4. About page — swap the assets
- `hero-about` imports → replaced by `about-crew` imports for the hero.
- The current `aboutCrew` image used in the "Our Story" section gets swapped for a more contextual shot. Since we don't have another real Roofing Friend team photo in `src/assets/`, generate one new on-brand image (`about-team-jobsite.jpg/.webp`) showing a Roofing Friend crew on a Bay Area metal-roof job site, hi-vis vests, golden hour — and use it in the Our Story figure. (No fake faces of specific people; wide jobsite shot.)
- `<link rel="preload">` updated to point to the new hero webp.

### 5. Hero copy stays the same
"About The Roofing Friend" / "We Can, We Will. Premium metal roofing across the SF Bay Area — veteran-owned, California-licensed." — already matches the live site's tone. No copy change.

## Files touched

- `src/components/ServiceHero.tsx` — add `logo` + `overlayClassName` optional props
- `src/pages/About.tsx` — swap hero imports, add logo prop, update preload, swap Our Story image
- `src/assets/about-team-jobsite.jpg` + `.webp` — newly generated jobsite photo (for Our Story slot only)

## Out of scope

- Other pages using `ServiceHero` (Contact, Reviews, Warranty, etc.) — untouched.
- Navbar, footer, stats, services list, coverage, CTA — untouched.
- No copy changes.

