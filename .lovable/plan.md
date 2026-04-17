

## Goal
Replace the hero background video with the uploaded one, enable audio, and rewrite the timed captions to tell the shingles → metal roof story.

## What I found
- `public/videos/hero-bg.mp4` (+ `.webm`) is the current hero video, used by the first slide in `src/pages/Index.tsx`
- `src/components/HeroSection.tsx` renders the video with `muted` + `loop` and overlays `captions[]` (text + startTime/endTime) synced via `video.currentTime`
- The first slide has 4 captions covering ~0–13s of the current video
- The site is a plumbing site, but the user is rebranding the hero around a roofing story (matches their earlier remix intent)

## Plan

### 1. Add the new video asset
- Copy `user-uploads://hf_20260416_181205_feb6ea05-344d-4ca4-9f9a-83c41aa2c596.mp4` to `public/videos/hero-roof.mp4`
- Probe it with `ffprobe` to get exact duration + confirm it has an audio stream
- Generate a `.webm` variant for the WebM `<source>` fallback (so both source tags resolve)
- Remove (or leave) the old `hero-bg.mp4`/`.webm` — I'll leave them to avoid breaking other refs; just point the slide at the new file

### 2. Enable audio on the hero video
- Browsers block autoplay with sound. Approach:
  - Keep `autoplay muted playsInline loop` so it autoplays on load (required for mobile)
  - Add a small unmute/mute toggle button in the hero (speaker icon, bottom-right of the slide) so the user can opt-in to audio. This is the only reliable cross-browser pattern.
  - When the user switches slides away from the video slide, auto-mute again
- Add an `audio?: boolean` flag on `HeroSlide` so only the video slide shows the toggle

### 3. Rewrite captions for the new story
Using placeholder times spaced across the video duration (I'll fine-tune to the actual probed duration). Story beats:
1. Wife: "I don't like our shingle roof anymore…"
2. Wife: "It feels so generic."
3. Wife: "I want a metal roof — like the ones on Instagram."
4. Husband: "Yes — let's do it."
5. (visual beat) "Premium standing seam metal roof installed."
6. Wife: "It feels like a brand new house."

Captions go in the `heroSlides[0].captions` array in `src/pages/Index.tsx`, with `startTime`/`endTime` timed to the actual video length (evenly distributed, then nudged). Title on the slide will also be updated to match the roofing story (e.g. "From shingles to standing seam").

### 4. Files touched
- `public/videos/hero-roof.mp4` (new) + `public/videos/hero-roof.webm` (new, generated)
- `src/components/HeroSection.tsx` — add mute/unmute toggle, `audio` flag, auto-mute on slide change
- `src/pages/Index.tsx` — point first slide at new video, update title, replace captions

### Open question
This site is currently branded as **West Peak Trenchless & Plumbing**. The new story is about **roofing**, which is a different trade. Two options:

**A. Hero-only change** — swap just the video + captions on the homepage hero, leave the rest of the plumbing site intact. Quick, but the hero will feel disconnected from the rest of the site.

**B. Pivot the site to roofing** — bigger rebrand (nav, services, copy, warranty pages). Out of scope for this single message but I can plan it as a follow-up.

I'll proceed with **A** unless you say otherwise.

