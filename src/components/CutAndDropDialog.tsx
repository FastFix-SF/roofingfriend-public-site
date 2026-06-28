import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  CheckCircle2,
  Loader2,
  X,
  Layers,
  Phone,
  ArrowRight,
  ArrowLeft,
  Send,
  Hammer,
  Home,
} from "lucide-react";
import { companyConfig } from "@/config/company";
import { GooglePlacesAutocomplete } from "@/components/ui/google-places-autocomplete";
import { ROOFINGFRIEND_TENANT_ID } from "@/integrations/supabase/client";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Page = "intent" | "contact" | "details" | "success";

const initial = {
  isContractor: "", // "" | "yes" | "no"
  name: "",
  company: "",
  phone: "",
  email: "",
  address: "",
  description: "",
};

const inputClass =
  "w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 focus:bg-white outline-none transition-all text-gray-900 placeholder:text-gray-500";

const labelClass = "block text-sm font-medium text-gray-700 mb-1.5 tracking-tight";

const CutAndDropDialog = ({ open, onOpenChange }: Props) => {
  const [page, setPage] = useState<Page>("intent");
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof typeof initial, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setForm(initial);
      setPage("intent");
    }, 300);
  };

  const isContractor = form.isContractor === "yes";
  const intentComplete =
    form.isContractor === "no" ||
    (form.isContractor === "yes" && form.company.trim().length > 0);

  const handleContactNext = () => {
    if (!form.name.trim()) return toast.error("Name is required");
    if (!form.phone.trim() && !form.email.trim())
      return toast.error("Phone or email is required");
    setPage("details");
  };

  const handleSubmit = async () => {
    if (!form.address.trim()) return toast.error("Project address is required");
    if (!form.description.trim()) return toast.error("Tell us what you need");

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke(
        "submit-cut-and-drop-lead",
        {
          headers: { "x-tenant-id": ROOFINGFRIEND_TENANT_ID },
          body: { ...form, tenantId: ROOFINGFRIEND_TENANT_ID },
        },
      );
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      setPage("success");
      toast.success("Request received!");
    } catch (err: any) {
      toast.error(err.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={handleClose}
      />

      <div
        className="relative bg-white rounded-3xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden"
        style={{
          boxShadow:
            "0 25px 60px -12px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] flex-shrink-0">
          <h2 className="text-lg font-semibold text-white tracking-tight">
            Cut &amp; Drop Quote
          </h2>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/15 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-8 overflow-y-auto flex-1">
          {/* ── INTENT ── */}
          {page === "intent" && (
            <div className="space-y-5">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center ring-1 ring-primary/10">
                    <Layers className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Get a Cut &amp; Drop quote
                  </h3>
                  <p className="text-sm text-gray-600 mt-1.5">
                    First, tell us who this is for.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { key: "yes", label: "Contractor", Icon: Hammer },
                  { key: "no", label: "Homeowner", Icon: Home },
                ].map(({ key, label, Icon }) => {
                  const active = form.isContractor === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => update("isContractor", key)}
                      className={`flex flex-col items-center justify-center gap-2 py-6 rounded-2xl border transition-all ${
                        active
                          ? "border-primary bg-primary/5 ring-4 ring-primary/10"
                          : "border-gray-200 bg-gray-50/80 hover:bg-gray-100"
                      }`}
                    >
                      <Icon
                        className={`w-7 h-7 ${active ? "text-primary" : "text-gray-500"}`}
                      />
                      <span
                        className={`text-sm font-semibold ${active ? "text-primary" : "text-gray-800"}`}
                      >
                        {label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {isContractor && (
                <div>
                  <label htmlFor="cd-company" className={labelClass}>
                    Company name
                  </label>
                  <input
                    id="cd-company"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    className={inputClass}
                    autoFocus
                  />
                </div>
              )}
            </div>
          )}

          {/* ── CONTACT ── */}
          {page === "contact" && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>
                  {isContractor
                    ? `Contractor${form.company ? ` · ${form.company}` : ""}`
                    : "Homeowner"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                How can we reach you?
              </h3>
              <div className="space-y-3">
                <div>
                  <label className={labelClass}>Full name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                    className={inputClass}
                    autoFocus
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <p className="text-xs text-gray-500">
                  Provide at least one so we can reach you.
                </p>
              </div>
              <button
                onClick={handleContactNext}
                className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-3 rounded-2xl text-base h-12 shadow-lg shadow-primary/20 flex items-center justify-center transition-all"
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                onClick={() => setPage("intent")}
                className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="w-3.5 h-3.5 inline mr-1" /> Back
              </button>
            </div>
          )}

          {/* ── DETAILS ── */}
          {page === "details" && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>{form.name}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Project details
              </h3>
              <div className="space-y-3">
                <div>
                  <label className={labelClass}>Project address</label>
                  <GooglePlacesAutocomplete
                    value={form.address}
                    onChange={(v) => update("address", v)}
                    placeholder="123 Main St, City, CA"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>What do you need?</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    placeholder="Panel type, gauge, color, quantity, square footage, profile (standing seam / R-panel / Multi-V)…"
                    className={`${inputClass} min-h-[110px] resize-none`}
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-3 rounded-2xl text-base h-14 shadow-lg shadow-primary/20 flex items-center justify-center transition-all disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Request Quote
                  </>
                )}
              </button>
              <button
                onClick={() => setPage("contact")}
                className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="w-3.5 h-3.5 inline mr-1" /> Back
              </button>
            </div>
          )}

          {/* ── SUCCESS ── */}
          {page === "success" && (
            <div className="text-center space-y-5 py-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center ring-1 ring-emerald-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Thanks — we got it!
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  We'll get back to you shortly with pricing for the materials
                  for that property.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-4 rounded-2xl text-base h-14 shadow-lg shadow-primary/20 transition-all"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Sticky Continue button — only on intent page when valid */}
        {page === "intent" && intentComplete && (
          <div className="px-7 pb-6 pt-3 border-t border-gray-100 flex-shrink-0 bg-white">
            <button
              onClick={() => setPage("contact")}
              className="w-full bg-gradient-to-r from-[#1a3a4a] to-[#1e4a6e] hover:from-[#1a3a4a]/90 hover:to-[#1e4a6e]/90 text-white font-semibold py-3 rounded-2xl text-base h-14 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center"
            >
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <div className="flex items-center justify-center gap-4 mt-3">
              <a
                href={`tel:${companyConfig.phoneRaw}`}
                className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" /> Or call us directly
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CutAndDropDialog;
