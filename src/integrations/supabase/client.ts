import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://mnitzgoythqqevhtkitj.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uaXR6Z295dGhxcWV2aHRraXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxOTA5MzUsImV4cCI6MjA2NTc2NjkzNX0.Jr38d0BgEIztZfIz2ZZ4fj-r0eKhfBEjwob5WWDXG2U";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false },
});
