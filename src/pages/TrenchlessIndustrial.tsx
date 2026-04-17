import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { trenchlessMethods } from "@/lib/trenchless-data";
import { Factory, ShieldCheck, Clock, Wrench, CheckCircle2 } from "lucide-react";
import heroIndustrial from "@/assets/hero-industrial-trenchless.jpg";

const industrialFaqs = [
  { question: "Can trenchless plumbing handle industrial waste pipes?", answer: "Yes. We use chemical-resistant epoxy liners, polyurea coatings, and heavy-duty HDPE pipes rated for acidic runoff, high-temperature process water, and caustic chemical waste. Our materials are selected specifically for industrial waste stream requirements." },
  { question: "How much does industrial trenchless plumbing cost?", answer: "Industrial trenchless repair typically costs $100–$300 per linear foot depending on pipe diameter, method, and waste type considerations. For a typical factory or warehouse, expect $10,000–$50,000 for a comprehensive drain system restoration. Traditional excavation in industrial settings runs $200–$500+ per foot when factoring in concrete slab demolition, equipment relocation, production downtime, and restoration." },
  { question: "Will our factory need to shut down during repairs?", answer: "In most cases, no. We schedule work around your production calendar — nights, weekends, or planned maintenance windows. All five trenchless methods work through existing access points, so there's no need to halt production lines or relocate heavy equipment." },
  { question: "Can you repair pipes under heavy machinery and equipment foundations?", answer: "Yes. Trenchless methods work from inside the pipe, so we don't need to access the pipe from above. CIPP lining, brush coating, and spray coating are all performed through cleanouts and manholes — your machinery stays exactly where it is." },
  { question: "Do you handle large-diameter industrial pipes?", answer: "Yes. We repair pipes from 2\" to 24\" in diameter. Spray coating and pipe bursting are particularly effective for the larger pipe sizes common in industrial facilities. For new pipe installations, directional boring can install pipes up to 24\" diameter under facility grounds." },
  { question: "What warranty do you provide for industrial work?", answer: "All industrial trenchless work comes with a 3-year warranty covering materials and workmanship. CIPP liners carry manufacturer warranties of up to 50 years. New HDPE pipe installed via pipe bursting is rated for 100+ years of service." },
];

const TrenchlessIndustrial = () => {
  const canonicalUrl = "https://westpeakplumbing.com/trenchless/industrial";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industrialFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Industrial Trenchless Plumbing — Bay Area",
    description: "Trenchless pipe repair for factories, warehouses, and manufacturing plants in the San Francisco Bay Area. No production downtime, no excavation.",
    provider: {
      "@type": "LocalBusiness",
      name: "West Peak Trenchless & Plumbing",
      telephone: "(650) 379-8166",
      areaServed: { "@type": "State", name: "California" },
    },
    serviceType: "Industrial Trenchless Plumbing",
    areaServed: { "@type": "City", name: "San Francisco Bay Area" },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Industrial Trenchless Pipe Repair Works",
    description: "Step-by-step process for repairing pipes in industrial facilities without excavation or production shutdowns",
    step: [
      { "@type": "HowToStep", position: 1, name: "Facility Assessment", text: "We survey your facility's pipe system with HD cameras, mapping damage and identifying the best access points for trenchless repair." },
      { "@type": "HowToStep", position: 2, name: "Method Selection", text: "Based on pipe condition, diameter, and waste type, we recommend the optimal trenchless method — chemical-resistant coatings for corrosive waste, CIPP for structural damage, or pipe bursting for complete replacement." },
      { "@type": "HowToStep", position: 3, name: "Scheduled Repair", text: "Work is scheduled during planned maintenance windows, nights, or weekends. All repairs are performed through existing access points — no production disruption." },
      { "@type": "HowToStep", position: 4, name: "Verification & Warranty", text: "Post-repair camera inspection confirms a perfect seal. Your facility receives a 3-year warranty on all workmanship and materials." },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Industrial Trenchless Plumbing | Factory & Warehouse Pipe Repair Bay Area</title>
        <meta name="description" content="Trenchless pipe repair for factories, warehouses, and manufacturing plants in the Bay Area. No production downtime, no excavation. Chemical-resistant materials, 3-year warranty." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Industrial Trenchless Plumbing | Factory & Warehouse Pipe Repair Bay Area" />
        <meta property="og:description" content="Trenchless pipe repair for factories, warehouses, and manufacturing plants. No production downtime, no excavation." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroIndustrial} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "70vh" }}>
        <img src={heroIndustrial} alt="Trenchless plumbing at an industrial facility" className="absolute inset-0 w-full h-full object-cover" loading="eager" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
            Industrial Trenchless Plumbing
          </h1>
          <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
            Factories · Warehouses · Manufacturing Plants — No Production Downtime
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg text-sm">
              Get an Industrial Quote
            </a>
            <a href="tel:+16503798166" className="px-8 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-sm">
              Call (650) 379-8166
            </a>
          </div>
        </div>
      </section>

      {/* Why Industrial Facilities Choose Trenchless */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link to="/trenchless" className="inline-flex items-center gap-1 text-sm text-cta-blue hover:underline mb-6">
            ← All Trenchless Methods
          </Link>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Why Industrial Facilities Choose Trenchless
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Traditional pipe repair in an industrial facility means jackhammering through concrete slabs, relocating heavy equipment, and shutting down production lines for days or weeks. Trenchless plumbing eliminates all of that. We repair or replace pipes from the inside — through existing manholes, cleanouts, and access points — so your facility keeps producing.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <Clock size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">No Production Downtime</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Repairs are scheduled during maintenance windows, nights, or weekends. Production lines keep running.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <ShieldCheck size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">Chemical Resistant</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Industrial-grade epoxy and polyurea materials handle acidic runoff, chemical waste, and high-temperature discharge.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <Wrench size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">Heavy-Duty Solutions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Pipes up to 24" diameter. HDPE rated for 100+ years. Built for the demands of industrial environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Block */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Factory size={28} className="text-cta-blue" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Trenchless Solutions for Every Industrial Facility
            </h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Factories & Manufacturing Plants</h3>
              <p className="text-sm">Sewer and process waste lines beneath factory floors are repaired through existing manholes and cleanouts. No slab demolition, no equipment relocation, no production shutdowns. Chemical-resistant liners handle acidic, caustic, and high-temperature industrial waste streams.</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Warehouses & Distribution Centers</h3>
              <p className="text-sm">Large warehouse facilities with hundreds of feet of underground drain pipe benefit from high-speed spray coating and CIPP lining. We restore entire drain systems in a single planned maintenance window — minimizing disruption to shipping, receiving, and fulfillment operations.</p>
            </div>
            <div className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">Food Processing & Cold Storage</h3>
              <p className="text-sm">Food processing plants require strict sanitary compliance. Our NSF-certified materials meet FDA and USDA requirements. We repair drain lines beneath processing floors, cold storage areas, and loading docks without compromising your facility's sanitary certification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Methods Grid */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
            5 Trenchless Methods for Industrial Facilities
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
                  {m.industrialContent.benefits.slice(0, 3).map((b, i) => (
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
        <img src={heroIndustrial} alt="Industrial trenchless plumbing" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Keep Your Facility Running</h2>
          <p className="text-lg text-white/70 mb-8">
            Get a free camera inspection and find out which trenchless method is right for your factory, warehouse, or manufacturing plant.
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

      <FaqAccordion faqs={industrialFaqs} title="Industrial Trenchless FAQ" />

      <BottomBar />
    </>
  );
};

export default TrenchlessIndustrial;
