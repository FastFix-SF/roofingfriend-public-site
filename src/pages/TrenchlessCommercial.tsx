import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { trenchlessMethods } from "@/lib/trenchless-data";
import { Store, ShieldCheck, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import heroCommercial from "@/assets/hero-commercial-trenchless.jpg";

const commercialFaqs = [
  { question: "Can trenchless plumbing be done in an open supermarket?", answer: "Yes. All five of our trenchless methods work through existing access points — cleanouts, roof vents, and small access panels. There's no need to close stores, block aisles, or shut down refrigeration. Most work is done overnight or during off-peak hours so customers never notice." },
  { question: "How much does commercial trenchless plumbing cost?", answer: "Commercial trenchless repair typically costs $80–$250 per linear foot depending on the method and pipe diameter. For a typical supermarket or retail center, expect $5,000–$25,000 for a full drain system restoration. Traditional dig-and-replace runs $150–$400+ per foot when you factor in floor demolition, business interruption, and restoration — making trenchless 30–60% cheaper overall." },
  { question: "Will trenchless repair meet health department codes?", answer: "Absolutely. All materials we use are NSF-certified and meet California plumbing code requirements. For supermarkets and food-service tenants, our repairs eliminate sewer gas odors and prevent contamination risks that can trigger health department violations." },
  { question: "How long does commercial trenchless repair take?", answer: "Most commercial projects are completed in 1–3 days depending on the scope. A single sewer lateral can be relined in a few hours. A full drain system restoration for a large retail center may take 2–3 nights of overnight work. Compare that to traditional excavation which typically takes 2–4 weeks." },
  { question: "Do you work with property management companies?", answer: "Yes. We work directly with commercial property managers, REITs, and building owners throughout the Bay Area. We provide detailed scope-of-work documents, phased repair plans for multi-tenant properties, and coordinate scheduling to minimize tenant impact." },
  { question: "Can trenchless methods fix pipes under a parking lot?", answer: "Yes. CIPP lining and spray/brush coating work entirely from inside the pipe, so your parking lot is never touched. For complete pipe replacement, pipe bursting requires only two small access pits — not a full trench. And directional boring can install entirely new pipes under your parking lot without breaking a single piece of asphalt." },
];

const TrenchlessCommercial = () => {
  const canonicalUrl = "https://westpeakplumbing.com/trenchless/commercial";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: commercialFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Trenchless Plumbing — Bay Area",
    description: "Trenchless pipe repair for supermarkets, retail centers, and commercial properties in the San Francisco Bay Area. Zero downtime, no excavation.",
    provider: {
      "@type": "LocalBusiness",
      name: "West Peak Trenchless & Plumbing",
      telephone: "(650) 379-8166",
      areaServed: { "@type": "State", name: "California" },
    },
    serviceType: "Commercial Trenchless Plumbing",
    areaServed: { "@type": "City", name: "San Francisco Bay Area" },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Commercial Trenchless Pipe Repair Works",
    description: "Step-by-step process for repairing pipes in commercial buildings without excavation",
    step: [
      { "@type": "HowToStep", position: 1, name: "Camera Inspection", text: "We send an HD camera through your pipes to map every crack, root intrusion, and blockage in your commercial drain system." },
      { "@type": "HowToStep", position: 2, name: "Method Selection", text: "Based on pipe condition, we recommend the best trenchless method — CIPP lining, brush coating, spray coating, pipe bursting, or directional boring." },
      { "@type": "HowToStep", position: 3, name: "Overnight Repair", text: "Most commercial work is done overnight or during off-peak hours. We work through existing access points — no store closures needed." },
      { "@type": "HowToStep", position: 4, name: "Final Inspection & Warranty", text: "Post-repair camera verification confirms a perfect seal. Your commercial property receives a 3-year warranty on all work." },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Commercial Trenchless Plumbing | Supermarket & Retail Pipe Repair Bay Area</title>
        <meta name="description" content="Trenchless pipe repair for supermarkets, retail centers, and commercial properties in the Bay Area. No digging, no store closures, no lost revenue. 5 methods, 3-year warranty." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Commercial Trenchless Plumbing | Supermarket & Retail Pipe Repair Bay Area" />
        <meta property="og:description" content="Trenchless pipe repair for supermarkets, retail centers, and commercial properties. Zero downtime, no excavation." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroCommercial} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "70vh" }}>
        <img src={heroCommercial} alt="Trenchless plumbing work at a commercial property" className="absolute inset-0 w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
            Commercial Trenchless Plumbing
          </h1>
          <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
            Supermarkets · Retail Centers · Shopping Plazas — Zero Downtime
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg text-sm">
              Book Online
            </a>
            <a href="tel:+16503798166" className="px-8 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-sm">
              Call (650) 379-8166
            </a>
          </div>
        </div>
      </section>

      {/* Why Commercial Properties Choose Trenchless */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link to="/trenchless" className="inline-flex items-center gap-1 text-sm text-cta-blue hover:underline mb-6">
            ← All Trenchless Methods
          </Link>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Why Commercial Properties Choose Trenchless
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Traditional pipe repair in a commercial building means jackhammering through floors, closing sections of your property, and losing revenue for days or weeks. Trenchless plumbing eliminates all of that. We repair or replace pipes from the inside — through existing cleanouts and access points — so every store, restaurant, and office stays open and operational.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <Clock size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">Zero Downtime</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">No store closures, no blocked aisles, no lost revenue. Most work is completed overnight.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <ShieldCheck size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">Code Compliant</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">NSF-certified materials meet all health department and California plumbing codes.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <DollarSign size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">30–60% Savings</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">No excavation, no restoration, no business interruption costs. Trenchless saves you money overall.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Block */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Store size={28} className="text-cta-blue" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Trenchless Solutions for Every Commercial Property
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Supermarkets & Grocery Stores</h3>
              <p className="text-sm">Sewer lines beneath refrigeration units, deli counters, and loading docks are repaired through existing cleanouts. No floor demolition, no food safety risks, no interrupted deliveries. We work after hours so your store opens on schedule every morning.</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Retail Centers & Shopping Plazas</h3>
              <p className="text-sm">Multi-tenant retail properties need phased repair plans that don't disrupt any single tenant for too long. We coordinate with property managers to schedule repairs zone by zone, often working overnight so tenants arrive to fully operational plumbing every morning.</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Restaurants & Food Service</h3>
              <p className="text-sm">Grease-heavy drain lines in restaurants are cleaned with hydro jetting and sealed with chemical-resistant epoxy coatings. No excavation near dining areas, no health code violations from exposed sewer lines, and no days-long closures that kill your bottom line.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Methods Grid */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
            5 Trenchless Methods for Commercial Properties
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trenchlessMethods.map((m) => (
              <Link
                key={m.slug}
                to={`/trenchless/${m.slug}`}
                className="rounded-lg bg-muted p-5 border border-border hover:border-cta-blue/30 hover:shadow-md transition-all group"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-cta-blue transition-colors">{m.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-3">{m.tagline}</p>
                <div className="space-y-1.5">
                  {m.commercialContent.benefits.slice(0, 3).map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                      <span className="text-xs text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </div>
                <span className="inline-block mt-3 text-xs font-medium text-cta-blue">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
        <img src={heroCommercial} alt="Commercial trenchless plumbing" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Protect Your Commercial Property</h2>
          <p className="text-lg text-white/70 mb-8">
            Get a free camera inspection and find out which trenchless method is right for your supermarket, retail center, or commercial building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
              Schedule a Free Inspection
            </a>
            <a href="tel:+16503798166" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
              Call (650) 379-8166
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={commercialFaqs} title="Commercial Trenchless FAQ" />

      <BottomBar />
    </>
  );
};

export default TrenchlessCommercial;
