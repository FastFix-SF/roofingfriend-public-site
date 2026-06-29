#!/usr/bin/env node
/**
 * One-time / on-demand snapshot of the live portfolio coming from the CRM.
 * Writes src/data/portfolio-snapshot.json. After this, Portfolio.tsx treats
 * those entries as frozen originals and only appends *new* CRM projects on top.
 *
 * Re-run with: npm run snapshot:portfolio
 */
import { writeFileSync } from "node:fs";

const SUPABASE_URL = "https://fedlvxiqevyuzeprsknu.supabase.co";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZGx2eGlxZXZ5dXplcHJza251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MTUyMjQsImV4cCI6MjA5NzI5MTIyNH0.sIPPT5uo6cTpclVfIc2XOJHiVCeku09bQ0K93hZsQ_U";
const TENANT_ID = "f00f1e0d-0000-4000-8000-000000000001";

const res = await fetch(`${SUPABASE_URL}/functions/v1/get-portfolio`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    apikey: ANON_KEY,
    authorization: `Bearer ${ANON_KEY}`,
  },
  body: JSON.stringify({ tenantId: TENANT_ID }),
});

if (!res.ok) {
  console.error("get-portfolio failed:", res.status, await res.text());
  process.exit(1);
}

const data = await res.json();
const out = { projects: data.projects ?? [], photos: data.photos ?? {} };
writeFileSync("src/data/portfolio-snapshot.json", JSON.stringify(out, null, 2));
console.log(
  `Snapshot written: ${out.projects.length} projects, ${Object.keys(out.photos).length} photo groups.`
);
