

## What's happening
The "Official Program Site" button on the **Title 24 Cool Roof** card currently links to `https://coolroofs.org` — that's the **Cool Roof Rating Council (CRRC)**, a nonprofit based in Portland, OR (not Texas) that runs the product-rating database California's Title 24 code requires. It's the correct authority for the *product certification* side, but it's not a California government page — which is likely why it feels out of place on a "California-only rebates" page.

## Fix
Swap the link on the `title-24-cool-roof` program in `src/lib/rebates-data.ts` from the CRRC site to the **California Energy Commission's official Title 24 Building Energy Efficiency Standards page**:

`https://www.energy.ca.gov/programs-and-topics/programs/building-energy-efficiency-standards`

This is the actual CA state agency that writes and enforces Title 24 — properly California-sourced, matching the rest of the page (cfpnet.com, ladwp.com, insurance.ca.gov, etc.).

## Files
- `src/lib/rebates-data.ts` — single-line edit: update `link` on the `title-24-cool-roof` entry.

No other changes.

