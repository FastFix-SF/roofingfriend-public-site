import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { Building2, Zap, ShieldCheck, Clock, Leaf, Wrench, Check, Award, DollarSign, Store, UtensilsCrossed, Warehouse, Briefcase, ShoppingBag, Car } from "lucide-react";
import heroCommercialRoofing from "@/assets/hero-commercial-roofing.jpg";

const sectorCards = [
  { name: "Retail Centers", desc: "Strip malls, plazas, and shopping centers — phased installs that keep every storefront open.", icon: Store },
  { name: "Restaurants & QSR", desc: "Fire-rated, grease-vent compatible roofs installed overnight so your dining room never closes.", icon: UtensilsCrossed },
  { name: "Warehouses & Distribution", desc: "Long-span panels covering hundreds of feet seamlessly — fewer leak points, faster install.", icon: Warehouse },
  { name: "Office Parks", desc: "Clean architectural lines and 30-year warranties that protect tenant lease value.", icon: Briefcase },
  { name: "Big-Box Retail", desc: "High-uplift mechanical seam systems engineered for 100,000+ sq ft footprints.", icon: ShoppingBag },
  { name: "Auto Dealerships", desc: "Showroom-grade architectural finishes that match brand standards from GM to Toyota.", icon: Car },
];

const includedItems = [
  { title: "Drone Roof Survey", desc: "High-res aerial imaging and measurements before a single panel is ordered." },
  { title: "Engineered Uplift Calcs", desc: "Wind, seismic, and snow-load engineering stamped for your Bay Area zone." },
  { title: "Phased Tenant-Friendly Install", desc: "Zone-by-zone scheduling so storefronts stay open and operations never stop." },
  { title: "30/40-Year Warranty", desc: "30-year PVDF paint and 40-year weathertightness coverage, fully registered." },
];

const roofingFaqs = [
  { question: "How much does a commercial standing seam metal roof cost?", answer: "Commercial standing seam metal roofing typically runs $9–$18 per square foot installed, depending on panel gauge, profile, finish (PVDF vs SMP), and roof complexity. For a 20,000 sq ft retail center, expect $180,000–$360,000. While the upfront cost is 2–3x higher than TPO or built-up roofing, metal roofs last 3–4x longer and cut energy costs by 25–40%, delivering a far lower lifetime cost per year." },
  { question: "How long does a commercial metal roof last?", answer: "A properly installed standing seam metal roof on a commercial property lasts 40–70 years. PVDF (Kynar 500) finishes carry 30-year non-prorated paint warranties, and the panels themselves are typically warranted for 40 years against weathertightness. Compare that to 15–20 years for TPO and 20–25 years for built-up roofing." },
  { question: "Can a metal roof be installed over our existing commercial roof?", answer: "Yes, in most cases. Retrofit framing systems allow standing seam panels to be installed directly over existing built-up, modified bitumen, or single-ply roofs — eliminating tear-off costs and landfill waste. We add insulation in the cavity to dramatically improve R-value and turn an aging roof into a high-performance envelope without disrupting tenants." },
  { question: "Will installing a new roof shut down our business?", answer: "No. Commercial metal roof installation is sequenced zone by zone, and we coordinate with property managers to phase work around store hours. For 24/7 operations like grocery stores and warehouses, we work overnight or during off-peak windows. Tenants stay open, deliveries continue, and customers never notice." },
  { question: "How much can a metal roof reduce energy costs?", answer: "Cool-roof rated standing seam metal panels reflect 40–70% of solar radiation, reducing rooftop temperatures by up to 50°F. For Bay Area commercial properties, this typically cuts HVAC cooling costs by 25–40%. Many systems qualify for Title 24 compliance credits and PG&E energy rebates that offset 5–15% of installation cost." },
  { question: "Are metal roofs fire and storm resistant?", answer: "Yes. Standing seam metal roofs carry a Class A fire rating (the highest available), UL 2218 Class 4 impact resistance for hail, and UL 580 Class 90 wind uplift resistance — the strongest commercial wind rating. They're the safest roof system you can install for a Bay Area commercial property exposed to wildfire risk and seasonal storms." },
];

const systems = [
  { name: "Snap-Lock Standing Seam", desc: "Concealed-fastener panels that snap together for clean lines and fast installation. Ideal for low-slope retail and office roofs.", icon: Building2 },
  { name: "Mechanical Seam", desc: "Field-seamed double-lock panels engineered for the highest wind uplift and water-tightness ratings — the gold standard for warehouses and big-box.", icon: ShieldCheck },
  { name: "Tapered Panel Systems", desc: "Custom-tapered panels for curved or radial roof sections, fan-shaped retail entries, and architectural feature walls.", icon: Wrench },
  { name: "Curved & Radius Panels", desc: "Factory-curved standing seam panels for barrel vaults, canopies, and signature architectural rooflines on flagship properties.", icon: Zap },
  { name: "Insulated Metal Panels (IMP)", desc: "Single-component panel with foam core delivering up to R-8 per inch — the fastest path to a high-performance, energy-code-compliant envelope.", icon: Leaf },
  { name: "Retrofit Over-Existing", desc: "Standing seam installed over existing built-up or single-ply roofs with engineered sub-framing. No tear-off, no landfill, no tenant disruption.", icon: Clock },
];

const CommercialRoofing = () => {
  const canonicalUrl = "https://westpeakplumbing.com/commercial-roofing";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: roofingFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Standing Seam Metal Roofing — Bay Area",
    description: "Standing seam metal roofing installation for retail centers, restaurants, warehouses, and commercial properties across the San Francisco Bay Area.",
    provider: {
      "@type": "LocalBusiness",
      name: "West Peak Trenchless & Plumbing",
      telephone: "(650) 379-8166",
      areaServed: { "@type": "State", name: "California" },
    },
    serviceType: "Commercial Metal Roofing",
    areaServed: { "@type": "City", name: "San Francisco Bay Area" },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Commercial Standing Seam Metal Roof Installation Works",
    description: "Step-by-step process for installing a standing seam metal roof on a commercial property",
    step: [
      { "@type": "HowToStep", position: 1, name: "Roof Survey & Engineering", text: "We measure, drone-survey, and engineer panel layouts, drainage, and uplift calcs specific to your building and Bay Area wind/seismic zone." },
      { "@type": "HowToStep", position: 2, name: "Panel Specification", text: "Select gauge, profile, color, and finish (PVDF or SMP) based on aesthetic, energy goals, and warranty needs. Panels are roll-formed to exact length on-site." },
      { "@type": "HowToStep", position: 3, name: "Phased Installation", text: "Roof is sectioned into zones. Old material removed (or retrofit framing installed), underlayment laid, panels seamed and fastened — all without disrupting tenants below." },
      { "@type": "HowToStep", position: 4, name: "Inspection & Warranty", text: "Final water-tightness inspection, drone QA, and registration of manufacturer + workmanship warranties. You receive 30-year paint and 40-year weathertightness coverage." },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Commercial Metal Roofing | Standing Seam Roofs Bay Area</title>
        <meta name="description" content="Standing seam metal roofing for commercial properties in the Bay Area — retail centers, restaurants, warehouses, and big-box. 40-year warranty, 25–40% energy savings, zero tenant disruption." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Commercial Metal Roofing | Standing Seam Roofs Bay Area" />
        <meta property="og:description" content="Standing seam metal roofing for commercial properties — retail, restaurants, warehouses, big-box. 40-year warranty." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroCommercialRoofing} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "70vh" }}>
        <img src={heroCommercialRoofing} alt="Standing seam metal roof on a commercial building" className="absolute inset-0 w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
            Commercial Metal Roofing
          </h1>
          <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
            Standing Seam Roofs for Retail · Restaurants · Big-Box · Warehouses
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg text-sm">
              Get a Commercial Quote
            </a>
            <a href="tel:+16503798166" className="px-8 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-sm">
              Call (650) 379-8166
            </a>
          </div>
        </div>
      </section>

      {/* Sector Service Cards */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Commercial Sectors We Serve
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            From single-tenant restaurants to multi-acre distribution centers, we engineer standing seam systems for every commercial property type across the Bay Area.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible">
            {sectorCards.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="flex-shrink-0 w-72 lg:w-auto snap-start rounded-lg bg-background p-6 border border-border hover:border-cta-blue/40 hover:shadow-lg transition-all">
                  <Icon size={28} className="text-cta-blue mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-cta-blue hover:underline">
                    Get a Quote →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Commercial Metal Roofing */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Why Commercial Properties Choose Metal Roofing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Standing seam metal is the longest-lasting, most energy-efficient roof you can install on a commercial property. It outlasts TPO and built-up roofing by decades, cuts cooling costs dramatically, and qualifies for the highest fire and wind ratings in the industry — all critical for Bay Area retail centers, restaurants, and warehouses.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <Clock size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">40–70 Year Lifespan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">3–4x longer than TPO or built-up roofing. 30-year paint and 40-year weathertightness warranties.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <Leaf size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">25–40% Energy Savings</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Cool-roof rated panels reflect solar heat, slash HVAC load, and qualify for PG&amp;E and Title 24 credits.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <ShieldCheck size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">Storm &amp; Fire Resistant</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Class A fire rating, UL 2218 Class 4 hail, and UL 580 Class 90 wind uplift — the highest commercial ratings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Grid */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          <div className="rounded-lg bg-foreground text-background p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
            <div>
              <Award size={32} className="text-cta-gold mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Veteran-Owned, Government-Trusted</h3>
              <p className="text-sm md:text-base text-background/80 leading-relaxed">
                Cleared for federal, GSA, and municipal roofing contracts. From base housing to public works, our veteran-led crews deliver milspec quality on every commercial project.
              </p>
            </div>
            <a href="tel:+16503798166" className="mt-6 inline-block text-sm font-medium text-cta-gold hover:underline">
              Talk to a Veteran Estimator →
            </a>
          </div>
          <div className="rounded-lg bg-cta-blue/10 p-8 md:p-10 flex flex-col justify-between min-h-[260px] border border-cta-blue/20">
            <div>
              <DollarSign size={32} className="text-cta-blue mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">PG&amp;E Energy Rebates Available</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Cool-roof rated standing seam panels qualify for PG&amp;E commercial rebates and Title 24 energy compliance credits — typically offsetting 5–15% of total install cost.
              </p>
            </div>
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-medium text-cta-blue hover:underline">
              Check Your Rebate Eligibility →
            </a>
          </div>
        </div>
      </section>

      {/* AEO Block */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Building2 size={28} className="text-cta-blue" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Solutions for Every Commercial Property
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Retail Centers &amp; Shopping Plazas</h3>
              <p className="text-sm">Standing seam roofs deliver the architectural curb appeal that anchors leasing value while keeping every tenant operational during installation. We phase work zone by zone so storefronts stay open, signage stays visible, and parking-lot access is never blocked.</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Restaurants &amp; QSR</h3>
              <p className="text-sm">Quick-service and full-service restaurants get a fire-rated, grease-vent-compatible roof system that handles rooftop HVAC, kitchen exhaust, and refrigeration loads. Overnight installation keeps your dining room and drive-thru open every day.</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Warehouses &amp; Distribution</h3>
              <p className="text-sm">Long-span standing seam panels cover hundreds of feet without seams, dramatically reducing leak points across massive industrial footprints. Insulated metal panels add R-value to cut conditioning costs in temperature-sensitive distribution centers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standing Seam Systems Grid */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
            Standing Seam Systems We Install
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {systems.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="rounded-lg bg-muted p-5 border border-border hover:border-cta-blue/30 hover:shadow-md transition-all group">
                  <Icon size={24} className="text-cta-blue mb-3" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-foreground group-hover:text-cta-blue transition-colors">{s.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
        <img src={heroCommercialRoofing} alt="Commercial standing seam metal roof" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Upgrade Your Commercial Roof</h2>
          <p className="text-lg text-white/70 mb-8">
            Get a free roof survey and quote for a standing seam metal system engineered for your retail center, restaurant, or warehouse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
              Schedule a Free Roof Survey
            </a>
            <a href="tel:+16503798166" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
              Call (650) 379-8166
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={roofingFaqs} title="Commercial Metal Roofing FAQ" />

      <BottomBar />
    </>
  );
};

export default CommercialRoofing;
