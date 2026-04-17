import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { warrantyCategories } from "@/lib/warranty-data";
import { CheckCircle2, XCircle, Building, Factory, Home } from "lucide-react";

import warrantyCommercial from "@/assets/warranty-commercial.jpg";
import warrantyIndustrial from "@/assets/warranty-industrial.jpg";
import warrantyResidential from "@/assets/warranty-residential.jpg";
import ctaWarrantyDetail from "@/assets/cta-warranty-detail.jpg";

const categoryImages: Record<string, string> = {
  commercial: warrantyCommercial,
  industrial: warrantyIndustrial,
  residential: warrantyResidential,
};

const categoryIcons: Record<string, typeof Building> = {
  commercial: Building,
  industrial: Factory,
  residential: Home,
};

const WarrantyDetail = () => {
  const { category } = useParams<{ category: string }>();
  const data = warrantyCategories.find((c) => c.slug === category);

  if (!data) return <Navigate to="/warranty" replace />;

  const otherCategories = warrantyCategories.filter((c) => c.slug !== category);
  const Icon = categoryIcons[data.slug] || Building;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const warrantySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${data.name} Plumbing Warranty`,
    provider: {
      "@type": "Plumber",
      name: "West Peak Trenchless & Plumbing",
      areaServed: { "@type": "State", name: "California" },
    },
    description: data.description,
    offers: {
      "@type": "Offer",
      description: `${data.yearLabel} — materials and labor included`,
    },
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`https://westpeakplumbing.com/warranty/${data.slug}`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(warrantySchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="snap-section relative overflow-hidden">
        <img
          src={categoryImages[data.slug]}
          alt={`${data.name} plumbing warranty`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
          <div className="flex items-center gap-3 mb-2">
            <Icon size={28} className="text-hero-text" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
            {data.name} {data.yearLabel}
          </h1>
          <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
            {data.tagline}
          </p>
          <div className="flex flex-row items-center gap-3 mt-4 w-full max-w-lg">
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-xs">
              Book a Service
            </a>
            <a href="#coverage" className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-xs">
              See Coverage
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-3xl mx-auto">
          <Link to="/warranty" className="inline-flex items-center gap-1 text-sm text-cta-blue hover:underline mb-6">
            ← All Warranty Programs
          </Link>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">{data.name} Warranty Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* What's Covered */}
      <section id="coverage" className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">What's Covered</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.whatsCovered.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                <CheckCircle2 size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">Limitations & Exclusions</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.limitations.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <XCircle size={18} className="text-destructive mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* California Law */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">California Warranty Law</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.californiaLaw}</p>
        </div>
      </section>

      {/* Lemon Law / Right to Repair */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">Lemon Law & Right to Repair</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.lemonInfo}</p>
        </div>
      </section>

      {/* How to File a Claim */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">How to File a Warranty Claim</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.claimSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-10 h-10 rounded-full bg-cta-blue text-white flex items-center justify-center text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
        <img src={ctaWarrantyDetail} alt="Plumber inspecting copper pipes" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Need to Use Your Warranty?</h2>
          <p className="text-lg text-white/70 mb-8">
            If something isn't right with your {data.name.toLowerCase()} plumbing, we'll make it right — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
              File a Warranty Claim
            </a>
            <a href="tel:+1234567890" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={data.faqs} title={`${data.name} Warranty FAQ`} />

      {/* Other Categories */}
      <section className="bg-background py-8 md:py-12">
        <div className="w-full px-4 md:px-10 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 px-2">Explore Other Warranties</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/warranty/${c.slug}`}
                className="min-w-0 shrink-0 grow-0 basis-[70%] sm:basis-[40%] lg:basis-[33%] snap-start group"
              >
                <div className="rounded-lg bg-secondary p-5 border border-border hover:border-cta-blue/30 hover:shadow-md transition-all h-full">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-cta-blue transition-colors">{c.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{c.yearLabel} · {c.tagline}</p>
                  <span className="inline-block mt-3 text-xs font-medium text-cta-blue">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BottomBar />
    </>
  );
};

export default WarrantyDetail;
