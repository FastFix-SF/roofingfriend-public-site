import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";

// roofingfriend.com/dashboard is the FastFix agents panel (a Cloudflare Worker), proxied the same way
// blindless.ai/dashboard is. The Worker reads the visitor's host from x-forwarded-host, so the panel's
// links stay on roofingfriend.com. Everything else on the site (including /admin) is untouched.
type Rewrite = { source: string; destination: string };
const config = JSON.parse(readFileSync(path.resolve(__dirname, "../../vercel.json"), "utf8")) as { rewrites: Rewrite[] };
const rewrites = config.rewrites;
const PANEL = "https://fastfix-agents-panel-staging.roofingfriend.workers.dev";
const indexOf = (source: string) => rewrites.findIndex((r) => r.source === source);
const catchAll = rewrites.findIndex((r) => r.destination === "/index.html");

describe("vercel.json /dashboard rewrites", () => {
  it.each([
    ["/dashboard", `${PANEL}/dashboard`],
    ["/dashboard/", `${PANEL}/dashboard/`],
    ["/dashboard/:path*", `${PANEL}/dashboard/:path*`],
  ])("forwards %s to the panel Worker", (source, destination) => {
    const i = indexOf(source);
    expect(i).toBeGreaterThanOrEqual(0);
    expect(rewrites[i].destination).toBe(destination);
  });

  it("runs before the SPA catch-all, so the site never renders /dashboard", () => {
    expect(catchAll).toBeGreaterThanOrEqual(0);
    for (const s of ["/dashboard", "/dashboard/", "/dashboard/:path*"]) expect(indexOf(s)).toBeLessThan(catchAll);
  });

  it("forwards nothing outside /dashboard to the panel", () => {
    for (const r of rewrites.filter((x) => x.destination.startsWith(PANEL))) {
      expect(r.source).toMatch(/^\/dashboard(\/|$)/);
    }
  });

  it("keeps /admin on the CRM", () => {
    expect(rewrites[indexOf("/admin")].destination).toBe("https://ultimatecrm-unified.vercel.app/admin");
    expect(rewrites[indexOf("/admin/:path*")].destination).toBe("https://ultimatecrm-unified.vercel.app/admin/:path*");
  });
});
