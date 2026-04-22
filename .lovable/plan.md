

## Goal

Mirror West Peak's AI Assistant pattern here: a **floating chatbot button** that opens a chat panel, can answer anything about The Roofing Friend (services, warranty, rebates, cities, reviews, contact), and can navigate the user to relevant pages. Same UX language as West Peak — bottom-right floating bubble, slide-up panel, voice input, conversation memory.

## What we're (and aren't) copying from West Peak

**Copy**: floating draggable button, slide-up chat panel, voice input (Web Speech API), conversation memory, page navigation from chat, AI gateway integration, consent dialog on first use, "thinking" indicator.

**Skip (overkill for a static marketing site)**: the full tool-calling registry, write-tools (booking/contact submission via AI), confirmation cards, visual response cards, activity tracker. The Roofing Friend doesn't have a booking pipeline yet — for now the AI just answers questions and navigates. CTAs (Schedule Inspection, Call) stay where they are.

## Architecture

```text
User opens site
   │
   ▼
FloatingAssistant button (bottom-right, draggable)
   │ click ──► first time? show ConsentDialog
   │          ConsentDialog accept ──► open ChatPanel
   ▼
ChatPanel (chat UI: messages, mic, send)
   │ user types / speaks
   ▼
useAssistant.sendMessage()
   │ POST { messages, context, knowledge } via supabase.functions.invoke('roofing-assistant')
   ▼
Edge function `roofing-assistant`
   │ system prompt (Roofing Friend brand, services, hours, contact, areas)
   │ + full site knowledge passed inline (cities, services, warranty tiers, rebates, reviews)
   │ + tool: navigate_to_page (only write-ish action)
   │ ──► Lovable AI Gateway (google/gemini-3-flash-preview, streaming)
   ▼
Streaming tokens back ──► token-by-token render in ChatPanel
   │ if model called navigate_to_page ──► useNavigate() to that path
```

## Files to create

### Frontend

1. **`src/components/assistant/FloatingAssistant.tsx`** — wraps button + panel + consent. Mounted once in `App.tsx` inside `<BrowserRouter>` (so navigation works).
2. **`src/components/assistant/AssistantButton.tsx`** — fixed-position button (bottom-right, above the existing BottomBar — `bottom: 96px right: 16px`). Gold gradient matching brand (`bg-cta-gold`), `MessageCircle` icon, unread badge, voice ring when listening.
3. **`src/components/assistant/ChatPanel.tsx`** — 380px-wide panel above the button. Header ("Roofing Friend Assistant" + Sparkles icon + close button), scrollable messages area, mic + text input + send. Renders markdown via `react-markdown` (will install).
4. **`src/components/assistant/MessageBubble.tsx`** — user (right, dark) vs assistant (left, light w/ gold accent). Markdown rendered.
5. **`src/components/assistant/ConsentDialog.tsx`** — first-open modal: "Chat with our AI assistant. Your messages may be processed by our AI provider to give you helpful answers about roofing services. No personal data is stored." Accept / Decline.
6. **`src/hooks/useAssistant.ts`** — state (messages, isLoading, isOpen, unreadCount), `sendMessage()` that calls the edge function with **streaming** (token-by-token render), handles `navigate_to` action, persists conversation to `sessionStorage` so it survives route changes.
7. **`src/hooks/useAssistantSettings.ts`** — `localStorage`-backed consent flag + enabled flag.
8. **`src/hooks/useAssistantVoice.ts`** — Web Speech API (`SpeechRecognition` + `speechSynthesis`). Push-to-talk mic button.
9. **`src/lib/assistant-knowledge.ts`** — single export that bundles `cities`, `warrantyData`, `rebatesData`, `reviewsData`, plus a static `BUSINESS_INFO` object (name, phone `(510) 999-7663`, email `info@theroof.info`, hours, areas served, license CA #1067709) and a `SITE_PAGES` map (route → description). This is what the edge function injects into the system prompt.

### Backend (Lovable Cloud edge function)

10. **`supabase/functions/roofing-assistant/index.ts`** — CORS-enabled streaming endpoint. Builds system prompt with full knowledge from `assistant-knowledge` (passed by client to keep the function small + always in sync with site content), calls Lovable AI Gateway with `google/gemini-3-flash-preview`, streams SSE back. Handles 429 / 402 with friendly errors.
11. **`supabase/config.toml`** — register the function with `verify_jwt = false` (public chat).

### Wiring

12. **`src/App.tsx`** — add `<FloatingAssistant />` inside `<BrowserRouter>`, after `<Suspense>` (so it appears on every page).
13. **`src/components/BottomBar.tsx`** — keep "Find Something" search dialog as-is; the AI bubble is a **separate** floating element offset above it. The "Ask AI" link in the search dialog footer (currently a placeholder) gets wired to **open the chat panel** via a small event bus (`window.dispatchEvent('open-roofing-assistant')`).

## What the assistant can do

- **Answer**: services (Standing Seam, R-Panel, Multi-V, TPO), warranty tiers (residential 50yr / commercial 25yr / industrial), CA rebates (Title 24, FAIR Plan, §179D), referral program details, reviews highlights, hours, contact info, license #.
- **Locate**: "do you serve Oakland?" → answers yes + offers to navigate to `/locations/oakland`.
- **Navigate**: model emits `navigate_to: "/contact"` → SPA-routes there.
- **Recommend**: "I have a flat warehouse roof" → suggests TPO + links to `/commercial-roofing`.
- **Defer**: pricing/quotes → "I can't quote on the spot — would you like me to take you to our contact form, or call (510) 999-7663?"

## Lovable Cloud requirement

The edge function needs **Lovable Cloud enabled** (provides `LOVABLE_API_KEY` for the AI gateway and the Supabase project for `functions.invoke`). I'll enable it during implementation.

## Out of scope

- **Tool-calling for booking / contact submission** — no DB tables exist yet to store leads. Future: when a `contacts` table is added, wire `submit_contact` as a write-tool with confirmation card (port from West Peak).
- **Rate-limit / abuse protection** beyond what Lovable AI already enforces (429 surfaced as toast).
- **Persisting chat across browser sessions** — uses `sessionStorage` only; cleared on close. Avoids privacy/consent complications.
- **Visual response cards** (service grids, area cards in chat) — text + markdown answers only for v1. Easy to add later if you want richer chat UI.
- **Multilingual** — English only.
- **Replacing the "Find Something" search** — kept as a fast keyword finder; AI is the conversational layer.

