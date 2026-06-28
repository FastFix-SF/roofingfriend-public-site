import { createClient } from "@supabase/supabase-js";

// UltimateCRM project (fedl) — the single source of truth for this site's
// leads and portfolio. Multi-tenant; this site scopes to the Roofing Friend
// tenant (see ROOFINGFRIEND_TENANT_ID usages).
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://fedlvxiqevyuzeprsknu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZGx2eGlxZXZ5dXplcHJza251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MTUyMjQsImV4cCI6MjA5NzI5MTIyNH0.sIPPT5uo6cTpclVfIc2XOJHiVCeku09bQ0K93hZsQ_U";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});

// Roofing Friend tenant in the UltimateCRM (fedl) project. Passed as the
// `x-tenant-id` header on lead-intake calls and used to scope portfolio reads.
export const ROOFINGFRIEND_TENANT_ID = "f00f1e0d-0000-4000-8000-000000000001";
