

## What's happening

The new images **are** in your project — I checked the files and confirmed `warranty-residential.jpg`, `warranty-commercial.jpg`, and `hero-contact.jpg` were all updated earlier today (April 22, 18:48–19:12). The issue is your **browser is showing cached versions** of the old images.

In dev mode, Vite serves these images at stable URLs, so when the file content changes, the browser can keep showing the cached copy until you force a refresh.

## The fix

**Step 1 — Hard refresh the preview** (try this first, no code change needed):
- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + Shift + R`

That alone should reveal the updated Residential, Commercial, and Contact-page van images.

**Step 2 — If a hard refresh doesn't work**, I'll add cache-busting to make sure new image versions always show up:

1. Bump the modification timestamp on the four warranty + contact assets so Vite generates fresh hashed filenames.
2. Optionally add a `?v=2` query suffix on the imports as belt-and-suspenders for dev mode.

## Files

- No source code changes for Step 1.
- Step 2 (only if needed): touch `src/assets/warranty-residential.{jpg,webp}`, `src/assets/warranty-commercial.{jpg,webp}`, `src/assets/hero-contact.{jpg,webp}` to force re-hash.

## Try the hard refresh first and let me know

If the new van + photo-real warranty panels still don't appear after `Cmd/Ctrl + Shift + R`, reply "still cached" and I'll apply Step 2.

