import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, MapPin, X, Building2, Home, Warehouse, Landmark, Wrench } from "lucide-react";
import heroCommercialRoofing from "@/assets/hero-commercial-roofing.jpg";
import heroCommercialRoofingWebp from "@/assets/hero-commercial-roofing.webp";

type ProjectRow = {
  id: string;
  name: string;
  address: string | null;
  client_name: string | null;
  status: string | null;
  project_category: string | null;
  project_type: string | null;
  property_type: string | null;
  roof_type: string | null;
  description: string | null;
  contract_amount: number | null;
  is_featured: boolean | null;
  is_public: boolean | null;
  created_at: string;
};

type PortfolioCategory =
  | "all"
  | "residential"
  | "commercial"
  | "industrial"
  | "government"
  | "repairs";

const CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  all: "All Projects",
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  government: "Government & Public",
  repairs: "Repairs & Service",
};

const CATEGORY_ICONS: Record<Exclude<PortfolioCategory, "all">, typeof Building2> = {
  residential: Home,
  commercial: Building2,
  industrial: Warehouse,
  government: Landmark,
  repairs: Wrench,
};

// Map raw DB fields to one of the portfolio buckets. Mirrors the same
// classification logic the admin portfolio report uses so categories line
// up across surfaces. Matches priority: explicit project_category →
// project_type → name keyword → property_type → fallback.
function classify(p: ProjectRow): Exclude<PortfolioCategory, "all"> {
  const cat = (p.project_category ?? "").toLowerCase();
  const type = (p.project_type ?? "").toLowerCase();
  const prop = (p.property_type ?? "").toLowerCase();
  const name = (p.name ?? "").toLowerCase();
  const desc = (p.description ?? "").toLowerCase();

  if (cat.includes("cut and drop") || type === "cut_and_drop") return "repairs";
  if (type === "service_ticket" || name.includes("repair") || desc.includes("repair")) return "repairs";
  if (type === "federal" || type === "state" || cat === "government") return "government";
  if (type === "industrial" || prop === "industrial") return "industrial";
  if (type === "commercial" || prop === "commercial" || cat === "commercial") return "commercial";
  return "residential";
}

const SUPABASE_PROJECT_URL = "https://mnitzgoythqqevhtkitj.supabase.co";
const PUBLIC_PHOTO_BASE = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/project-photos`;

function buildHeroPhotoUrl(photoPath: string | null): string | null {
  if (!photoPath) return null;
  // project_photos rows store full public URLs; older rows may store relative paths.
  if (/^https?:\/\//i.test(photoPath)) return photoPath;
  return `${PUBLIC_PHOTO_BASE}/${photoPath}`;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [photoMap, setPhotoMap] = useState<Map<string, string>>(new Map());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectRow | null>(null);

  // ─── Fetch projects + their first photo ───────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // Public-facing portfolio: only completed/in-progress projects with
        // an address. Excludes leads, drafts, and archived rows.
        const { data: rows, error: pErr } = await supabase
          .from("projects")
          .select(
            "id, name, address, client_name, status, project_category, project_type, property_type, roof_type, description, contract_amount, is_featured, is_public, created_at"
          )
          .eq("archived", false)
          .not("name", "is", null)
          .not("address", "is", null)
          .order("is_featured", { ascending: false, nullsFirst: false })
          .order("created_at", { ascending: false })
          .limit(120);
        if (pErr) throw pErr;

        // Pull customer-visible photos from project_photos. Storage LIST is
        // blocked for anon, but the project_photos table is anon-readable when
        // is_visible_to_customer = true and stores full public URLs.
        const projectIds = (rows ?? []).map((r) => r.id);
        const photos = new Map<string, string>();
        if (projectIds.length > 0) {
          const { data: photoRows } = await supabase
            .from("project_photos")
            .select("project_id, photo_url, thumbnail_url, display_order, uploaded_at")
            .in("project_id", projectIds)
            .eq("is_visible_to_customer", true)
            .order("display_order", { ascending: true })
            .order("uploaded_at", { ascending: true });
          for (const ph of photoRows ?? []) {
            if (!photos.has(ph.project_id)) {
              const url = ph.thumbnail_url || ph.photo_url;
              if (url) photos.set(ph.project_id, url);
            }
          }
        }

        if (!cancelled) {
          setProjects(rows ?? []);
          setPhotoMap(photos);
        }
      } catch (e) {
        if (!cancelled) setError((e as Error)?.message ?? "Failed to load portfolio");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // ─── Derived: counts + filtered list ──────────────────────────────────
  const decorated = useMemo(
    () => projects.map((p) => ({ ...p, category: classify(p) })),
    [projects]
  );

  const counts = useMemo(() => {
    const c: Record<PortfolioCategory, number> = {
      all: decorated.length,
      residential: 0,
      commercial: 0,
      industrial: 0,
      government: 0,
      repairs: 0,
    };
    for (const p of decorated) c[p.category]++;
    return c;
  }, [decorated]);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return decorated;
    return decorated.filter((p) => p.category === activeCategory);
  }, [decorated, activeCategory]);

  return (
    <>
      <Helmet>
        <title>Portfolio | The Roofing Friend — Bay Area Metal Roofing Projects</title>
        <meta
          name="description"
          content="Browse completed standing seam, R-Panel, and TPO metal roofing projects across the San Francisco Bay Area — residential, commercial, industrial, and government work."
        />
        <link rel="canonical" href="https://theroof.info/portfolio" />
        <meta property="og:title" content="Portfolio | The Roofing Friend" />
        <meta
          property="og:description"
          content="Completed roofing projects across the Bay Area — residential, commercial, government, and more."
        />
        <meta property="og:image" content={heroCommercialRoofing} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <picture>
          <source srcSet={heroCommercialRoofingWebp} type="image/webp" />
          <img
            src={heroCommercialRoofing}
            alt="Roofing Friend portfolio of completed metal roofing projects"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Our Portfolio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mt-4 max-w-2xl">
            Standing seam, R-Panel, and TPO roofs across the Bay Area — residential homes,
            commercial sites, government buildings, and everything in between.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                const el = document.getElementById("portfolio-grid");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 rounded-md bg-[#b8893d] hover:bg-[#a17832] text-white font-medium text-base transition-colors"
            >
              Browse Projects
            </button>
            <Link
              to="/#book"
              className="px-8 py-3 rounded-md bg-white/95 hover:bg-white text-foreground font-medium text-base transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Filter chips ─────────────────────────────────────────── */}
      <section id="portfolio-grid" className="border-b border-border bg-background sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-2">
          {(Object.keys(CATEGORY_LABELS) as PortfolioCategory[]).map((key) => {
            const isActive = activeCategory === key;
            const label = CATEGORY_LABELS[key];
            const n = counts[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-muted text-foreground hover:bg-muted-foreground/15"
                }`}
              >
                {label} <span className="opacity-60">({n})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── Grid ─────────────────────────────────────────────────── */}
      <section className="bg-background py-12">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-border bg-muted/40">
                  <div className="aspect-[4/3] bg-muted animate-pulse" />
                  <div className="p-4 space-y-2">
                    <div className="h-5 bg-muted rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-muted rounded w-1/2 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6 text-center">
              <p className="text-sm text-destructive">Couldn't load portfolio: {error}</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No projects in this category yet — check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => {
                const photoPath = photoMap.get(p.id);
                const photoUrl = buildHeroPhotoUrl(photoPath ?? null);
                const Icon = CATEGORY_ICONS[p.category];
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedProject(p)}
                    className="text-left rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-[4/3] bg-muted relative">
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={p.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <Icon className="w-12 h-12 opacity-30" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-xs font-medium text-foreground">
                          <Icon className="w-3.5 h-3.5" />
                          {CATEGORY_LABELS[p.category]}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground line-clamp-1">{p.name}</h3>
                      {p.address && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          <span className="line-clamp-1">{p.address}</span>
                        </div>
                      )}
                      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{p.roof_type ?? p.project_type ?? "Metal roofing"}</span>
                        <span className="inline-flex items-center gap-1 text-foreground/80 font-medium">
                          View <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ─── Detail modal ─────────────────────────────────────────── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {(() => {
                const path = photoMap.get(selectedProject.id);
                const url = buildHeroPhotoUrl(path ?? null);
                if (!url) return null;
                return (
                  <img
                    src={url}
                    alt={selectedProject.name}
                    className="w-full aspect-[16/9] object-cover"
                  />
                );
              })()}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 rounded-full bg-black/60 hover:bg-black/80 text-white p-2"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {selectedProject.name}
              </h2>
              {selectedProject.address && (
                <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProject.address}</span>
                </div>
              )}

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs uppercase text-muted-foreground tracking-wide">Category</div>
                  <div className="mt-1 font-medium text-foreground">
                    {CATEGORY_LABELS[classify(selectedProject)]}
                  </div>
                </div>
                {selectedProject.roof_type && (
                  <div>
                    <div className="text-xs uppercase text-muted-foreground tracking-wide">Roof type</div>
                    <div className="mt-1 font-medium text-foreground">{selectedProject.roof_type}</div>
                  </div>
                )}
                {selectedProject.client_name && (
                  <div>
                    <div className="text-xs uppercase text-muted-foreground tracking-wide">Client</div>
                    <div className="mt-1 font-medium text-foreground">{selectedProject.client_name}</div>
                  </div>
                )}
              </div>

              {selectedProject.description && (
                <p className="mt-6 text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                  {selectedProject.description}
                </p>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/#book"
                  className="px-6 py-3 rounded-md bg-[#b8893d] hover:bg-[#a17832] text-white font-medium text-center transition-colors"
                >
                  Get a Quote Like This
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-md border border-border hover:bg-muted text-foreground font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomBar />
    </>
  );
};

export default Portfolio;
