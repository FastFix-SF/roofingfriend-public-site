import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import HeroSection from "@/components/HeroSection";
import FaqAccordion from "@/components/FaqAccordion";
import { trenchlessMethods } from "@/lib/trenchless-data";
import { Building, Factory, Home, CheckCircle2, ShieldCheck, Store } from "lucide-react";
import ctaTrenchlessMethod from "@/assets/cta-trenchless-method.jpg";
import heroCommercial from "@/assets/hero-commercial-trenchless.jpg";
import heroIndustrial from "@/assets/hero-industrial-trenchless.jpg";
import trenchCipp from "@/assets/trench-cipp.jpg";
import trenchBrush from "@/assets/trench-brush.jpg";
import trenchSpray from "@/assets/trench-spray.jpg";
import trenchBurst from "@/assets/trench-burst.jpg";
import trenchBoring from "@/assets/trench-boring.jpg";

const methodHeroImages: Record<string, string> = {
  cipp: trenchCipp,
  "brush-coating": trenchBrush,
  "spray-coating": trenchSpray,
  "pipe-bursting": trenchBurst,
  "directional-boring": trenchBoring,
};

const audienceIcons: Record<string, typeof Building> = {
  "Commercial Buildings": Building,
  "Apartment Complexes": Home,
  "Industrial Facilities": Factory,
};

const TrenchlessMethod = () => {
  const { method } = useParams<{ method: string }>();
  const data = trenchlessMethods.find((m) => m.slug === method);

  if (!data) return <Navigate to="/trenchless" replace />;

  const otherMethods = trenchlessMethods.filter((m) => m.slug !== method);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${data.name} — Bay Area`,
    description: data.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "West Peak Plumbing",
      areaServed: {
        "@type": "State",
        name: "California",
      },
    },
    serviceType: "Trenchless Plumbing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${data.name} Services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Commercial ${data.name}`,
            description: data.commercialContent.description,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Industrial ${data.name}`,
            description: data.industrialContent.description,
          },
        },
      ],
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How ${data.name} Works`,
    description: `Step-by-step process for ${data.name.toLowerCase()} trenchless pipe repair`,
    step: data.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  const heroSlides = [
    {
      image: methodHeroImages[data.slug] || trenchCipp,
      title: `${data.name}`,
      subtitle: data.tagline,
      primaryCta: "Book Inspection",
      secondaryCta: "Learn More",
      textColor: "light" as const,
    },
    {
      image: heroCommercial,
      title: "Trenchless Solutions for Commercial Properties",
      subtitle: "Supermarkets · Retail Centers · Shopping Plazas — Zero Downtime",
      primaryCta: "Book Online",
      primaryLink: "https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D",
      secondaryCta: "Learn More",
      secondaryLink: "/trenchless/commercial",
      textColor: "light" as const,
    },
    {
      image: heroIndustrial,
      title: "Trenchless Repairs for Industrial Facilities",
      subtitle: "Factories · Warehouses · Manufacturing Plants — No Production Downtime",
      primaryCta: "Get an Industrial Quote",
      primaryLink: "https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D",
      secondaryCta: "Learn More",
      secondaryLink: "/trenchless/industrial",
      textColor: "light" as const,
    },
  ];

  const canonicalUrl = `https://westpeakplumbing.com/trenchless/${data.slug}`;

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={methodHeroImages[data.slug] || trenchCipp} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero Slider */}
      <HeroSection slides={heroSlides} />

      {/* Back link + What Is It */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-3xl mx-auto">
          <Link to="/trenchless" className="inline-flex items-center gap-1 text-sm text-cta-blue hover:underline mb-6">
            ← All Trenchless Methods
          </Link>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">What Is {data.name}?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.whatIsIt}</p>
        </div>
      </section>

      {/* Best For — PromoGrid style cards */}
      <section className="bg-background py-8 md:py-12">
        <div className="w-full px-4 md:px-10 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 px-2">Best For</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {data.bestFor.map((b) => {
              const Icon = audienceIcons[b.audience] || Building;
              return (
                <div key={b.audience} className="rounded-lg bg-muted p-6 flex flex-col gap-3">
                  <Icon size={28} className="text-cta-blue" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground">{b.audience}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works — Steps */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.steps.map((step, i) => (
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

      {/* Benefits */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-muted rounded-lg p-4">
                <CheckCircle2 size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Trenchless Section — SEO/AEO optimized */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Store size={28} className="text-cta-blue" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              {data.commercialContent.heading}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {data.commercialContent.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {data.commercialContent.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4">
                <ShieldCheck size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{b}</span>
              </div>
            ))}
          </div>

          {/* AEO-optimized Q&A block */}
          <div className="bg-background rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Why Do Supermarkets & Retail Centers Choose Trenchless {data.name}?
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">No store closures.</strong> Traditional pipe repair means jackhammering through floors, closing sections of your store, and losing revenue for days or weeks. Trenchless {data.name.toLowerCase()} works through existing access points — cleanouts, roof vents, or small access panels — so every store stays open.
              </p>
              <p>
                <strong className="text-foreground">Health code compliant.</strong> Supermarkets and food-service tenants face strict health department requirements. Our NSF-certified materials meet all codes, and we eliminate sewer gas odors that can trigger violations or drive customers away.
              </p>
              <p>
                <strong className="text-foreground">Protect your property value.</strong> Commercial properties in the Bay Area are high-value assets. Trenchless repair preserves parking lots, landscaping, and building foundations — avoiding the costly restoration that follows traditional excavation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Trenchless Section — SEO/AEO optimized */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Factory size={28} className="text-cta-blue" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              {data.industrialContent.heading}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {data.industrialContent.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {data.industrialContent.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary rounded-lg p-4">
                <ShieldCheck size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{b}</span>
              </div>
            ))}
          </div>

          {/* AEO-optimized Q&A block */}
          <div className="bg-secondary rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Why Do Factories & Industrial Facilities Choose Trenchless {data.name}?
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">No production shutdowns.</strong> Traditional pipe repair means jackhammering through factory floors, shutting down production lines, and losing revenue for days or weeks. Trenchless {data.name.toLowerCase()} works through existing access points — cleanouts, manholes, or small access panels — so every production line keeps running.
              </p>
              <p>
                <strong className="text-foreground">Built for industrial waste.</strong> Factories and manufacturing plants produce corrosive, high-temperature, and chemical-laden waste. Our industrial-grade materials are rated for harsh environments, handling everything from acidic runoff to high-temperature process water.
              </p>
              <p>
                <strong className="text-foreground">Protect your facility infrastructure.</strong> Industrial properties in the Bay Area represent millions in infrastructure investment. Trenchless repair preserves concrete slabs, heavy equipment foundations, rail sidings, and loading areas — avoiding the massive restoration costs that follow traditional excavation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
        <img src={ctaTrenchlessMethod} alt="CIPP liner being installed in underground pipe" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Fix Your Pipes the Right Way?</h2>
          <p className="text-lg text-white/70 mb-8">
            Get a free camera inspection and find out if {data.name.toLowerCase()} is the right solution for your property.
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

      <FaqAccordion faqs={data.faqs} />

      {/* Other Methods — horizontal scroll cards */}
      <section className="bg-background py-8 md:py-12">
        <div className="w-full px-4 md:px-10 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 px-2">Explore Other Methods</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
            {otherMethods.map((m) => (
              <Link
                key={m.slug}
                to={`/trenchless/${m.slug}`}
                className="min-w-0 shrink-0 grow-0 basis-[70%] sm:basis-[40%] lg:basis-[24%] snap-start group"
              >
                <div className="rounded-lg bg-secondary p-5 border border-border hover:border-cta-blue/30 hover:shadow-md transition-all h-full">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-cta-blue transition-colors">{m.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{m.tagline}</p>
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

export default TrenchlessMethod;
