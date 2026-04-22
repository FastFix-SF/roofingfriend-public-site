

## Goal

Replace the **first hero slide's video** (`/videos/hero-roof.mp4`) with the newly uploaded video, keeping all the same treatment (autoplay, mute toggle, auto-advance, gradient overlay, gold-on-black caption bar).

## What changes

### 1. Save the uploaded video
Copy the uploaded `.mp4` into `public/videos/hero-roof-v2.mp4` so it's served as a static asset.

### 2. Wire it into the first hero slide
In `src/pages/Index.tsx`, update the first entry of `heroSlides`:
- `video: "/videos/hero-roof.mp4"` → `video: "/videos/hero-roof-v2.mp4"`
- Keep `audio: true` so the speaker / unmute button stays.
- Keep `image` / `imageWebp` (`heroFsd` / `heroFsdWebp`) as the poster fallback.
- Keep `title`, `subtitle`, `primaryCta` ("Book Service"), `secondaryCta` ("Learn More"), and `textColor` exactly as they are.

### 3. Captions
Keep the existing 6 husband/wife caption lines on the same timeline (0–15s). They'll play over the new video unchanged. If the new video's pacing doesn't fit, we can adjust timings or replace the lines in a follow-up — no behavior change needed in `HeroSection.tsx` since captions are already driven by `video.currentTime`.

### 4. Leave everything else alone
- `HeroSection.tsx` — untouched (already handles `.webm`/`.mp4` source order, autoplay, mute toggle, captions, auto-advance on `onEnded`).
- Other two hero slides (Commercial, Veteran-Owned) — untouched.
- No preload changes (video is `preload="metadata"` and the LCP preload is the WebP poster, which stays the same).

## Files touched

- `public/videos/hero-roof-v2.mp4` — newly added (the uploaded file)
- `src/pages/Index.tsx` — single string change in the first slide's `video` field

## Out of scope

- No changes to captions, audio toggle logic, or slide order.
- No deletion of the old `hero-roof.mp4` (kept in `public/videos/` in case it's reused).
- No `.webm` transcode — browsers will fall back to the `.mp4` source.

