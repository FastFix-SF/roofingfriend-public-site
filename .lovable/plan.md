

## Goal

Make the **Residential** and **Commercial** roof panel images in the warranty slider look photo-real by removing the cartoon-perfect texture, while keeping the exact same composition, color palette, and quality level you already love.

## What's wrong today

The current `warranty-residential.jpg` and `warranty-commercial.jpg` renders read as CGI: panels are mathematically uniform, ribs are perfectly straight, seams have zero variation, and there are no real-world micro-details (subtle reflections shifting across panels, faint installation marks, light dust at seams, slight panel-to-panel tonal drift). The eye reads "render," not "roof."

## Approach

Use Nano Banana Pro (`google/gemini-3-pro-image-preview`) in **edit mode** — feed it the existing JPG plus a prompt that locks color/composition and only adds realism. This preserves what you like and changes only the surface believability.

### Prompt direction (same for both, color-matched per image)

> "Photo-realistic edit. Keep the exact composition, camera angle, color palette, lighting direction, and panel layout. Only change: make the standing seam metal roof look like a real installed roof photographed on location — natural micro-variations in panel reflectivity, subtle tonal drift between adjacent panels, faint hairline scratches and handling marks near seams, realistic specular highlights that vary along each rib (not a perfect gradient), occasional slight waviness in long panels (oil-canning), real fastener shadows where applicable, atmospheric haze on distant panels. No dirt, no rust, no damage, no aging — these are brand-new premium panels, just photographed in the real world instead of rendered. Maintain premium, high-end feel."

### Files to update

1. `src/assets/warranty-residential.jpg` — regenerate via image edit
2. `src/assets/warranty-residential.webp` — re-encode from new JPG (sharp, q80)
3. `src/assets/warranty-commercial.jpg` — regenerate via image edit
4. `src/assets/warranty-commercial.webp` — re-encode from new JPG

`warranty-industrial.jpg` (Government & Public Sector tile) is **not** in scope — you only flagged residential and commercial. Confirm in chat if you want it included.

### Process

1. Read each existing JPG → base64 → send to Lovable AI Gateway with the prompt above.
2. Save returned PNG → convert to JPG (q88, ~1600px wide to match current dimensions).
3. Regenerate matching `.webp` at q80 with `sharp`.
4. QA: open both new JPGs, verify color/composition unchanged, verify panel surface now reads as real photography (varied highlights, subtle imperfections, no CGI uniformity). Re-run if either still looks rendered.

### Files

- **Edit**: `src/assets/warranty-residential.jpg`, `src/assets/warranty-residential.webp`, `src/assets/warranty-commercial.jpg`, `src/assets/warranty-commercial.webp`.
- No code changes — `SecondarySlider.tsx` and `Index.tsx` already point at these paths.

