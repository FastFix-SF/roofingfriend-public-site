import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import ComparisonTable from "@/components/ComparisonTable";
import { trenchlessMethods, overviewFaqs } from "@/lib/trenchless-data";
import { CheckCircle2, Layers, Paintbrush, SprayCan, Hammer, Drill } from "lucide-react";
import ctaTrenchlessOverview from "@/assets/cta-trenchless-overview.jpg";

import slideSedan from "@/assets/slide-sedan.jpg";

import trenchCipp from "@/assets/trench-cipp.jpg";
import trenchBrush from "@/assets/trench-brush.jpg";
import trenchSpray from "@/assets/trench-spray.jpg";
import trenchBurst from "@/assets/trench-burst.jpg";
import trenchBoring from "@/assets/trench-boring.jpg";
import trenchPromoNodemo from "@/assets/trench-promo-nodemo.jpg";
import trenchPromoProperty from "@/assets/trench-promo-property.jpg";

const serviceImages: Record<string, string> = {
  cipp: trenchCipp,
  "brush-coating": trenchBrush,
  "spray-coating": trenchSpray,
  "pipe-bursting": trenchBurst,
  "directional-boring": trenchBoring,
};

const serviceIcons = [Layers, Paintbrush, SprayCan, Hammer, Drill];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: overviewFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "West Peak Trenchless & Plumbing",
  description: "Bay Area's only plumbing company offering all 5 trenchless methods: CIPP, brush coating, spray coating, pipe bursting, and directional boring.",
  areaServed: { "@type": "State", name: "California", containsPlace: { "@type": "City", name: "San Francisco Bay Area" } },
  serviceType: ["CIPP Pipe Lining", "Brush Coating", "Spray Coating", "Pipe Bursting", "Directional Boring", "Trenchless Plumbing"],
};

const TrenchlessOverview = () => (
  <>
    <Helmet>
      <title>Trenchless Plumbing Services in the Bay Area | All 5 Methods | West Peak</title>
      <meta name="description" content="West Peak is the Bay Area's only plumber offering all 5 trenchless methods: CIPP, brush coating, spray coating, pipe bursting & directional boring. No digging. No demolition." />
      <link rel="canonical" href="https://westpeakplumbing.com/trenchless" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>

    <Navbar />

    {/* Static Hero */}
    <section className="snap-section relative overflow-hidden">
      <img
        src={slideSedan}
        alt="Trenchless plumbing services"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
          All 5 Trenchless Methods. One Company.
        </h1>
        <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
          CIPP · Brush Coating · Spray Coating · Pipe Bursting · Directional Boring
        </p>
        <div className="flex flex-row items-center gap-3 mt-4 w-full max-w-lg">
          <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-xs">
            Book Inspection
          </a>
          <a href="#cipp" className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-xs">
            See All Methods
          </a>
        </div>
      </div>
    </section>

    {/* Service Cards Slider */}
    <section className="bg-background flex flex-col items-start pt-4 md:pt-6 pb-4">
      <div className="w-full px-4 md:px-10 lg:px-12">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {trenchlessMethods.map((m, i) => {
            const Icon = serviceIcons[i];
            return (
              <a
                key={m.slug}
                href={`#${m.slug}`}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%] lg:basis-[30%] snap-start"
              >
                <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:aspect-[16/9]">
                  <img src={serviceImages[m.slug]} alt={m.name} loading="lazy" width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={20} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white">{m.name}</h3>
                    <p className="text-sm text-white/90 mt-1">{m.tagline}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>

    {/* Promo Grid */}
    <section className="bg-background py-8 md:py-12">
      <div className="w-full px-4 md:px-10 lg:px-12 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">No Demolition Required</h3>
              <p className="text-sm text-muted-foreground mt-1">Your floors, driveways, and landscaping stay intact. We work from the inside.</p>
              <a href="#cipp" className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img src={trenchPromoNodemo} alt="No demolition trenchless" loading="lazy" width={768} height={512} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Done in Days, Not Weeks</h3>
              <p className="text-sm text-muted-foreground mt-1">Most projects complete in 1–2 days. Traditional methods take 1–3 weeks.</p>
              <a href="#pipe-bursting" className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img src={trenchBurst} alt="Fast trenchless repair" loading="lazy" width={768} height={512} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img src={trenchCipp} alt="50-100+ year lifespan" loading="lazy" width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">50–100+ Year Lifespan</h3>
              <p className="text-sm text-white/80 mt-1">Our repairs outlast the original pipes. HDPE and epoxy liners are built to last.</p>
              <div className="flex gap-3 mt-4">
                <a href="#cipp" className="px-6 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity">Explore CIPP</a>
                <a href="#pipe-bursting" className="px-6 py-2.5 rounded text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-colors">Pipe Bursting</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img src={trenchPromoProperty} alt="All property types" loading="lazy" width={640} height={640} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">All Property Types</h3>
              <p className="text-sm text-white/80 mt-1">Commercial, multi-family, and industrial across the Bay Area</p>
              <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-8 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity">Get a Quote</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ComparisonTable />

    {/* Service Detail Sections */}
    {trenchlessMethods.map((method, idx) => {
      const Icon = serviceIcons[idx];
      const isAlt = idx % 2 === 1;
      return (
        <section
          key={method.slug}
          id={method.slug}
          className={`py-16 md:py-20 px-6 lg:px-12 ${isAlt ? "bg-secondary" : "bg-background"}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Icon size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{method.name}</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">{method.whatIsIt}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {method.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                  <CheckCircle2 size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
                Book Inspection
              </a>
            </div>
          </div>
        </section>
      );
    })}

    {/* CTA */}
    <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
      <img src={ctaTrenchlessOverview} alt="Trenchless pipe bursting equipment at residential job site" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Not Sure Which Method You Need?</h2>
        <p className="text-lg text-white/70 mb-8">
          Book a free camera inspection. We'll show you exactly what's happening inside your pipes and recommend the most cost-effective solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
            Schedule a Free Inspection
          </a>
          <a href="tel:+1234567890" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
            Call Us Now
          </a>
        </div>
      </div>
    </section>

    <FaqAccordion faqs={overviewFaqs} title="Trenchless Plumbing FAQ" />

    <BottomBar />
  </>
);

export default TrenchlessOverview;
