

## What's wrong

The 4 slider images on the homepage `VehicleSlider` (`slide-standing-seam.jpg`, `slide-r-panel.jpg`, `slide-multi-v.jpg`, `slide-tpo.jpg`) likely look stylized, illustrated, or AI-generic — not like real photographs of actual roofs. For a roofing company selling a $20k–$80k home upgrade, the buyer needs to see **real-looking installations** they can imagine on their own house. Anything that feels CGI or stock-illustrated kills trust instantly.

## Fix — regenerate all 4 slider images as photorealistic photos

Use the high-quality image model (`google/gemini-3-pro-image-preview` — the "pro" tier, slower but indistinguishable-from-real results) to overwrite each of the 4 files in place. Same filenames → zero code changes in `VehicleSlider.tsx`.

| File (overwrite) | Subject — photorealistic, not illustrated |
|---|---|
| `src/assets/slide-standing-seam.jpg` | Real photo of a modern California home with a freshly installed dark-charcoal **standing seam metal roof**, clean vertical seams, golden-hour sunlight raking across the ridge, real shadows, real shingle-to-metal transition visible at the eave. Architectural photography style, shot on full-frame DSLR, shallow depth of field on background. 16:9. |
| `src/assets/slide-r-panel.jpg` | Real photo of a **galvanized R-panel metal roof** on a rural barn or large suburban garage, exposed-fastener pattern clearly visible, daylight, blue sky with light clouds, real vegetation in foreground. Documentary photography style, no CGI sheen. 16:9. |
| `src/assets/slide-multi-v.jpg` | Real photo of an upscale luxury home with a **multi-V (5V crimp) metal roof** in a warm bronze or weathered-zinc finish, complex hip-and-valley architecture, soft late-afternoon light, manicured landscaping in foreground. Real-estate-listing photography style, ultra-sharp. 16:9. |
| `src/assets/slide-tpo.jpg` | Real photo of a **white TPO membrane roof on a commercial building** (retail strip, restaurant, or warehouse), shot from a slightly elevated angle (drone-low) showing the seams, HVAC units, and roof drains in realistic detail. Bright midday sun, real reflections. Commercial-roofing-portfolio style. 16:9. |

Style rules applied to all 4: **no logos, no text overlays, no people, no obvious AI tells (extra fingers, melted edges, impossible perspectives), real materials with real wear/texture, natural lighting, 1920×1080.** Each prompt explicitly says "photograph" and names the camera/style to push the model away from illustration mode.

Filenames stay identical → `VehicleSlider.tsx` imports keep working unchanged.

## Files

- `src/assets/slide-standing-seam.jpg` — regenerate (pro model)
- `src/assets/slide-r-panel.jpg` — regenerate (pro model)
- `src/assets/slide-multi-v.jpg` — regenerate (pro model)
- `src/assets/slide-tpo.jpg` — regenerate (pro model)

No code edits. No imports change. No layout change.

## Out of scope

- The 3 warranty images (`warranty-residential/commercial/industrial.jpg`) — already regenerated for roofing in a previous pass.
- Hero images (`hero-fsd.jpg`, `hero-commercial-roofing.jpg`, `hero-veteran-government-roofing.jpg`) — already roofing-themed and acceptable; flag for a future "photorealism pass" if you want them upgraded too.
- PromoGrid images (`promo-*.jpg`) — separate component, not part of the visible slider the user selected.

