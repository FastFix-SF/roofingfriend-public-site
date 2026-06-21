// TRANSITION-ONLY — mirror each submitted lead into the new UltimateCRM
// Supabase project (fedl) in addition to the legacy CRM, so the team can
// validate that fedl receives everything before we flip it to the sole
// destination. Never throws — a mirror failure must not affect the primary
// submission UX. Remove this file at cutover (see MIRROR-LEADS-TRANSITION.md).

const FEDL_URL = "https://fedlvxiqevyuzeprsknu.supabase.co";
// fedl publishable (anon) key — browser-safe, RLS allows anonymous lead inserts.
const FEDL_ANON_KEY = "sb_publishable_TX2L53AiJ7TpnD5hICaXPw_fIpCFAYf";

export interface MirrorLeadInput {
  tenantId: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  company?: string | null;
  service?: string | null;
  projectType?: string | null;
  message?: string | null;
  source?: string | null;
  qualificationData?: Record<string, unknown> | null;
}

export async function mirrorLeadToFedl(
  input: MirrorLeadInput
): Promise<{ ok: boolean; leadId?: string }> {
  try {
    const res = await fetch(`${FEDL_URL}/functions/v1/mirror-lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: FEDL_ANON_KEY,
        Authorization: `Bearer ${FEDL_ANON_KEY}`,
      },
      body: JSON.stringify(input),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; leadId?: string };
    if (!res.ok || !data?.ok) {
      console.warn("[mirror-lead] non-ok response", res.status, data);
      return { ok: false };
    }
    return { ok: true, leadId: data.leadId };
  } catch (err) {
    console.warn("[mirror-lead] failed to mirror lead to fedl", err);
    return { ok: false };
  }
}
