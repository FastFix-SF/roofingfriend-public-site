import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import { useBooking } from "@/hooks/useBooking";
import { supabase, ROOFINGFRIEND_TENANT_ID } from "@/integrations/supabase/client";
import {
  ArrowLeft,
  ArrowRight,
  ChevronsLeftRight,
  Eye,
  MapPin,
  Star,
  X,
} from "lucide-react";
import heroCommercialRoofing from "@/assets/hero-commercial-roofing.jpg";
import heroCommercialRoofingWebp from "@/assets/hero-commercial-roofing.webp";

type ProjectRow = {
  id: string;
  name: string;
  address: string | null;
  description: string | null;
  project_type: string | null;
  project_category: string | null;
  roof_type: string | null;
  is_public: boolean | null;
  is_featured: boolean | null;
  created_at: string;
};

type PhotoRow = {
  id: string;
  project_id: string;
  photo_url: string;
  thumbnail_url: string | null;
  caption: string | null;
  photo_tag: "before" | "after" | null;
  is_highlighted_before: boolean | null;
  is_highlighted_after: boolean | null;
  uploaded_at: string;
};

type CategoryFilter = "all" | "residential" | "commercial";
type RoofFilter =
  | "all"
  | "standing_seam"
  | "metal_panels"
  | "stone_coated"
  | "shingles"
  | "flat_roof";

const CATEGORY_OPTIONS: { label: string; slug: CategoryFilter }[] = [
  { label: "All", slug: "all" },
  { label: "Residential", slug: "residential" },
  { label: "Commercial", slug: "commercial" },
];

const ROOF_OPTIONS: { label: string; slug: RoofFilter }[] = [
  { label: "All", slug: "all" },
  { label: "Standing Seam", slug: "standing_seam" },
  { label: "Metal Panels", slug: "metal_panels" },
  { label: "Stone Coated", slug: "stone_coated" },
  { label: "Shingles", slug: "shingles" },
  { label: "Flat Roof", slug: "flat_roof" },
];

const toSlug = (s?: string | null) =>
  s ? s.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "") : "";

function pickHeroPhoto(photos: PhotoRow[]): PhotoRow | null {
  if (!photos.length) return null;
  return (
    photos.find((p) => p.is_highlighted_after && p.photo_tag === "after") ||
    photos.find((p) => p.photo_tag === "after") ||
    photos[0]
  );
}

function formatMonth(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

const Portfolio = () => {
  const { openBooking } = useBooking();
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [featured, setFeatured] = useState<ProjectRow[]>([]);
  const [photoMap, setPhotoMap] = useState<Record<string, PhotoRow[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<CategoryFilter>("all");
  const [filterRoof, setFilterRoof] = useState<RoofFilter>("all");
  const [selected, setSelected] = useState<ProjectRow | null>(null);

  // ─── Fetch ─────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data: regular, error: rErr } = await (supabase as any)
          .from("public_projects_safe")
          .select(
            "id, name, address, description, project_type, project_category, roof_type, is_public, is_featured, created_at"
          )
          .eq("tenant_id", ROOFINGFRIEND_TENANT_ID)
          .eq("is_featured", false)
          .order("created_at", { ascending: false });
        if (rErr) throw rErr;

        const { data: feats, error: fErr } = await (supabase as any)
          .from("public_projects_safe")
          .select(
            "id, name, address, description, project_type, project_category, roof_type, is_public, is_featured, created_at"
          )
          .eq("tenant_id", ROOFINGFRIEND_TENANT_ID)
          .eq("is_featured", true)
          .order("created_at", { ascending: false })
          .limit(3);
        if (fErr) throw fErr;


        const allIds = [
          ...(feats ?? []).map((p) => p.id),
          ...(regular ?? []).map((p) => p.id),
        ];

        let map: Record<string, PhotoRow[]> = {};
        if (allIds.length > 0) {
          const { data: photoRows, error: pErr } = await (supabase as any)
            .from("public_project_photos_safe")
            .select(
              "id, project_id, photo_url, thumbnail_url, caption, photo_tag, is_highlighted_before, is_highlighted_after, uploaded_at"
            )
            .in("project_id", allIds)
            .order("uploaded_at", { ascending: true });
          if (pErr) throw pErr;
          for (const ph of photoRows ?? []) {
            if (!map[ph.project_id]) map[ph.project_id] = [];
            map[ph.project_id].push(ph as PhotoRow);
          }
        }

        if (!cancelled) {
          setProjects(regular ?? []);
          setFeatured(feats ?? []);
          setPhotoMap(map);
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

  const hasPhotos = useCallback(
    (id: string) => (photoMap[id]?.length ?? 0) > 0,
    [photoMap]
  );

  const featuredWithPhotos = useMemo(
    () => featured.filter((p) => hasPhotos(p.id)),
    [featured, hasPhotos]
  );

  const filteredRegular = useMemo(() => {
    return projects
      .filter((p) => hasPhotos(p.id))
      .filter((p) => {
        const catSlug = toSlug(p.project_category || p.project_type);
        const roofSlug = toSlug(p.roof_type);
        const matchesCat =
          filterCategory === "all" ||
          catSlug === filterCategory ||
          (filterCategory === "residential" && !catSlug);
        const matchesRoof = filterRoof === "all" || roofSlug === filterRoof;
        return matchesCat && matchesRoof;
      });
  }, [projects, hasPhotos, filterCategory, filterRoof]);

  const totalCount = useMemo(
    () => projects.filter((p) => hasPhotos(p.id)).length,
    [projects, hasPhotos]
  );

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
            Standing seam, R-Panel, and TPO roofs across the Bay Area — residential,
            commercial, government, and more.
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
            <button
              type="button"
              onClick={openBooking}
              className="px-8 py-3 rounded-md bg-white/95 hover:bg-white text-foreground font-medium text-base transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* ─── Featured (max 3) ──────────────────────────────────────── */}
      {featuredWithPhotos.length > 0 && (
        <section className="bg-muted/30 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Featured Projects
              </h2>
              <p className="mt-2 text-base sm:text-lg text-muted-foreground">
                A showcase of our most exceptional transformations
              </p>
            </div>
            <div
              className={`grid gap-6 ${
                featuredWithPhotos.length === 1
                  ? "grid-cols-1 max-w-md mx-auto"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {featuredWithPhotos.map((p) => (
                <PortfolioCard
                  key={p.id}
                  project={p}
                  photos={photoMap[p.id] ?? []}
                  showFeatured
                  onClick={() => setSelected(p)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Filters ─────────────────────────────────────────────── */}
      <section
        id="portfolio-grid"
        className="border-b border-border bg-background sticky top-0 z-30"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 flex-1 min-w-0">
            <FilterRow
              label="Category"
              value={filterCategory}
              options={CATEGORY_OPTIONS}
              onChange={(v) => setFilterCategory(v)}
            />
            <FilterRow
              label="Roof"
              value={filterRoof}
              options={ROOF_OPTIONS}
              onChange={(v) => setFilterRoof(v)}
            />
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
            {filteredRegular.length} of {totalCount} projects
          </div>
        </div>
      </section>

      {/* ─── Grid ───────────────────────────────────────────────── */}
      <section className="bg-background py-12">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-border bg-muted/40"
                >
                  <div className="aspect-[16/10] bg-muted animate-pulse" />
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
          ) : filteredRegular.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                No projects match those filters.
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                Try adjusting filters or clear them to see all projects.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFilterCategory("all");
                  setFilterRoof("all");
                }}
                className="mt-6 px-6 py-3 rounded-md border border-border hover:bg-muted text-foreground font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegular.map((p) => (
                <PortfolioCard
                  key={p.id}
                  project={p}
                  photos={photoMap[p.id] ?? []}
                  onClick={() => setSelected(p)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="bg-background pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-[#b8893d] to-[#a17832] text-white p-8 sm:p-12 text-center shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready for Your Transformation?
            </h2>
            <p className="mt-3 text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
              Get a free, no-obligation estimate. Our experts will assess your roof and
              provide a detailed quote.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/#book"
                className="px-8 py-3 rounded-md bg-white text-[#a17832] hover:bg-white/90 font-semibold transition-colors"
              >
                Get Free Estimate
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-md border-2 border-white text-white hover:bg-white/10 font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Detail modal ────────────────────────────────────────── */}
      {selected && (
        <ProjectDetail
          project={selected}
          photos={photoMap[selected.id] ?? []}
          onClose={() => setSelected(null)}
        />
      )}

      <BottomBar />
    </>
  );
};

// ─── Filter pill row ─────────────────────────────────────────────
function FilterRow<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { label: string; slug: T }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      <span className="text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap">
        {label}
      </span>
      {options.map((opt) => {
        const active = value === opt.slug;
        return (
          <button
            key={opt.slug}
            type="button"
            onClick={() => onChange(opt.slug)}
            className={`text-xs sm:text-sm px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap flex-shrink-0 ${
              active
                ? "bg-foreground text-background border-foreground"
                : "bg-background text-foreground border-border hover:bg-muted"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Portfolio card ──────────────────────────────────────────────
function PortfolioCard({
  project,
  photos,
  onClick,
  showFeatured = false,
}: {
  project: ProjectRow;
  photos: PhotoRow[];
  onClick: () => void;
  showFeatured?: boolean;
}) {
  const hero = pickHeroPhoto(photos);
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden">
        {hero ? (
          <img
            src={hero.thumbnail_url || hero.photo_url}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <Eye className="w-10 h-10 opacity-30" />
          </div>
        )}
        {hero?.photo_tag === "after" && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold rounded-full px-3 py-1 shadow">
            After
          </span>
        )}
        {hero?.photo_tag === "before" && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 shadow">
            Before
          </span>
        )}
        {showFeatured && project.is_featured && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-gradient-to-r from-[#b8893d] to-[#a17832] text-white text-xs font-semibold rounded-full px-3 py-1 shadow">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col p-5 space-y-2">
        {(project.project_category || project.project_type || project.roof_type) && (
          <span className="self-start inline-flex items-center rounded-full bg-[#b8893d]/10 text-[#a17832] text-xs font-semibold px-3 py-1">
            {project.project_category || project.project_type}
            {project.roof_type ? ` • ${project.roof_type}` : ""}
          </span>
        )}
        <h3 className="text-lg font-bold text-foreground line-clamp-2">{project.name}</h3>
        {project.address && (
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{project.address}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Eye className="w-4 h-4 shrink-0" />
          <span>
            {photos.length} {photos.length === 1 ? "photo" : "photos"}
          </span>
        </div>
        <div className="mt-auto pt-3">
          <span className="inline-flex items-center justify-center w-full bg-foreground hover:bg-foreground/90 text-background font-semibold rounded-md py-2.5 transition-colors">
            View Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </button>
  );
}

// ─── Detail view: header + before/after slider + gallery + lightbox ─
function ProjectDetail({
  project,
  photos,
  onClose,
}: {
  project: ProjectRow;
  photos: PhotoRow[];
  onClose: () => void;
}) {
  const beforePhotos = photos.filter((p) => p.photo_tag === "before");
  const afterPhotos = photos.filter((p) => p.photo_tag === "after");
  const primaryBefore =
    beforePhotos.find((p) => p.is_highlighted_before) || beforePhotos[0];
  const primaryAfter =
    afterPhotos.find((p) => p.is_highlighted_after) || afterPhotos[0];

  const [sliderPct, setSliderPct] = useState(50);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setLightboxIdx((idx) =>
      idx === null ? null : (idx + 1) % photos.length
    );
  }, [photos.length]);
  const prev = useCallback(() => {
    setLightboxIdx((idx) =>
      idx === null ? null : (idx - 1 + photos.length) % photos.length
    );
  }, [photos.length]);

  // keyboard nav for lightbox + ESC closes detail
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIdx !== null) {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
        if (e.key === "Escape") setLightboxIdx(null);
        return;
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, prev, next, onClose]);

  // Lock body scroll while modal is open so the page behind doesn't drift on mobile
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Drag/click to move the comparison slider
  const startDrag = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const update = (x: number) => {
      const p = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
      setSliderPct(p);
    };
    update(clientX);
    const onMove = (ev: MouseEvent | TouchEvent) => {
      const x =
        "touches" in ev
          ? (ev as TouchEvent).touches[0]?.clientX ?? 0
          : (ev as MouseEvent).clientX;
      update(x);
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend", onUp);
    };
    window.addEventListener("mousemove", onMove as EventListener);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove as EventListener, { passive: true });
    window.addEventListener("touchend", onUp);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/70 flex flex-col sm:items-center sm:justify-center sm:p-4"
        onClick={onClose}
      >
        <div
          className="relative bg-background w-full sm:max-w-5xl sm:rounded-2xl shadow-2xl flex-1 sm:flex-initial overflow-y-auto sm:max-h-[92vh] overscroll-contain"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Floating close button — sticks above content on mobile and desktop */}
          <button
            type="button"
            onClick={onClose}
            className="sticky top-3 sm:top-4 z-20 ml-auto mr-3 sm:mr-4 mt-3 sm:mt-4 flex items-center justify-center rounded-full bg-background/90 hover:bg-background border border-border shadow-md text-foreground w-9 h-9 sm:w-10 sm:h-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="px-4 sm:px-8 pt-1 pb-6 sm:pt-2 sm:pb-10 -mt-9 sm:-mt-10 space-y-6 sm:space-y-8">
            {/* Title + meta */}
            <div className="text-center space-y-2 pt-9 sm:pt-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground break-words">
                {project.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-muted-foreground">
                {project.address && (
                  <span className="inline-flex items-center gap-1.5 max-w-full">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="break-words">{project.address}</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {photos.length} photos
                </span>
                <span>Completed {formatMonth(project.created_at)}</span>
                {(project.project_category ||
                  project.project_type ||
                  project.roof_type) && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#b8893d]/10 text-[#a17832] text-[11px] sm:text-xs font-semibold">
                    {project.project_category || project.project_type}
                    {project.roof_type ? ` • ${project.roof_type}` : ""}
                  </span>
                )}
              </div>
            </div>

            {/* Before/After comparison */}
            {(primaryBefore || primaryAfter) && (
              <div className="bg-card rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-border">
                <div className="px-3 sm:px-6 py-3 sm:py-5 text-center bg-gradient-to-r from-[#b8893d]/5 to-[#a17832]/10">
                  <h4 className="text-lg sm:text-2xl font-bold text-foreground">
                    Amazing Transformation
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Drag the handle to compare before and after
                  </p>
                </div>
                <div className="p-3 sm:p-6">
                  {primaryBefore && primaryAfter ? (
                    <>
                      <div
                        ref={containerRef}
                        className="relative w-full rounded-lg sm:rounded-xl overflow-hidden bg-muted aspect-[4/3] md:aspect-video select-none touch-none"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          startDrag(e.clientX);
                        }}
                        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
                      >
                        <img
                          src={primaryAfter.photo_url}
                          alt="After"
                          className="absolute inset-0 w-full h-full object-cover"
                          draggable={false}
                        />
                        <div
                          className="absolute inset-0 overflow-hidden"
                          style={{ clipPath: `inset(0 ${100 - sliderPct}% 0 0)` }}
                        >
                          <img
                            src={primaryBefore.photo_url}
                            alt="Before"
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable={false}
                          />
                        </div>
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
                          style={{ left: `${sliderPct}%` }}
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#a17832] cursor-grab active:cursor-grabbing">
                            <ChevronsLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#a17832]" />
                          </div>
                        </div>
                        <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-blue-600 text-white text-[10px] sm:text-xs font-semibold rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow">
                          Before
                        </span>
                        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-600 text-white text-[10px] sm:text-xs font-semibold rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow">
                          After
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={sliderPct}
                        onChange={(e) => setSliderPct(Number(e.target.value))}
                        className="w-full mt-3 sm:mt-4 accent-[#a17832]"
                        aria-label="Before/after comparison"
                      />
                      <div className="flex justify-between text-[11px] sm:text-xs text-muted-foreground mt-1">
                        <span>← Before</span>
                        <span>After →</span>
                      </div>
                    </>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {primaryBefore && (
                        <div className="relative">
                          <img
                            src={primaryBefore.photo_url}
                            alt="Before"
                            className="w-full aspect-[4/3] object-cover rounded-lg sm:rounded-xl"
                            loading="lazy"
                          />
                          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-blue-600 text-white text-[10px] sm:text-xs font-semibold rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow">
                            Before
                          </span>
                        </div>
                      )}
                      {primaryAfter && (
                        <div className="relative">
                          <img
                            src={primaryAfter.photo_url}
                            alt="After"
                            className="w-full aspect-[4/3] object-cover rounded-lg sm:rounded-xl"
                            loading="lazy"
                          />
                          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-green-600 text-white text-[10px] sm:text-xs font-semibold rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow">
                            After
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Description */}
            {project.description && (
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed whitespace-pre-line break-words">
                {project.description}
              </p>
            )}

            {/* Photo gallery */}
            {photos.length > 0 && (
              <div className="bg-card rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-border">
                <div className="px-3 sm:px-6 py-3 sm:py-5 border-b border-border bg-muted/30">
                  <h4 className="text-lg sm:text-2xl font-bold text-foreground">
                    Project Gallery
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    {photos.length} photos showcasing the work
                  </p>
                </div>
                <div className="p-3 sm:p-6 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                  {photos.map((photo, i) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setLightboxIdx(i)}
                      className="relative group aspect-square rounded-md sm:rounded-lg overflow-hidden bg-muted cursor-pointer"
                    >
                      <img
                        src={photo.thumbnail_url || photo.photo_url}
                        alt={photo.caption || `Photo ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {photo.photo_tag === "before" && (
                        <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-blue-600 text-white text-[9px] sm:text-[10px] font-semibold rounded-full px-1.5 sm:px-2 py-0.5 shadow">
                          Before
                        </span>
                      )}
                      {photo.photo_tag === "after" && (
                        <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-green-600 text-white text-[9px] sm:text-[10px] font-semibold rounded-full px-1.5 sm:px-2 py-0.5 shadow">
                          After
                        </span>
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="text-center pt-1 sm:pt-2">
              <Link
                to="/#book"
                className="block sm:inline-block w-full sm:w-auto px-6 sm:px-8 py-3 rounded-md bg-[#b8893d] hover:bg-[#a17832] text-white font-semibold text-center transition-colors"
              >
                Get a Quote Like This
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && photos[lightboxIdx] && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx(null);
            }}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-white/15 hover:bg-white/25 text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center z-10"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-xs sm:text-sm bg-black/40 rounded-full px-2.5 py-1">
            {lightboxIdx + 1} / {photos.length}
          </div>
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/15 hover:bg-white/25 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                aria-label="Previous photo"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/15 hover:bg-white/25 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
                aria-label="Next photo"
              >
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
          <img
            src={photos[lightboxIdx].photo_url}
            alt={photos[lightboxIdx].caption || `Photo ${lightboxIdx + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          {photos[lightboxIdx].caption && (
            <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 text-center px-4 sm:px-6">
              <p className="text-white/90 text-xs sm:text-sm bg-black/50 rounded-md inline-block px-3 py-1.5 max-w-full">
                {photos[lightboxIdx].caption}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Portfolio;
