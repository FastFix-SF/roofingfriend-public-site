import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import HeroSection from "@/components/HeroSection";
import FaqAccordion from "@/components/FaqAccordion";
import { plumbingServices, plumbingFaqs } from "@/lib/plumbing-data";
import { Wrench, Search, Droplets, CheckCircle2 } from "lucide-react";
import ctaPlumbing from "@/assets/cta-plumbing.jpg";

import plumbHero from "@/assets/slide-sports.jpg";
import plumbLeak from "@/assets/plumb-leak.jpg";
import plumbDrain from "@/assets/plumb-drain.jpg";
import plumbConstruction from "@/assets/plumb-construction.jpg";

const serviceImages: Record<string, string> = {
  "plumbing-services": plumbHero,
  "leak-detection": plumbLeak,
  "drain-cleaning": plumbDrain,
};

const serviceIcons = [Wrench, Search, Droplets];

const heroSlides = [
  {
    image: plumbHero,
    title: "Plumbing Services",
    subtitle: "Built for New Construction — Get It Right the First Time",
    primaryCta: "Book Service",
    secondaryCta: "Learn More",
    textColor: "light" as const,
  },
  {
    image: plumbLeak,
    title: "Leak Detection",
    subtitle: "Find hidden leaks before they cause thousands in damage",
    primaryCta: "Schedule Detection",
    secondaryCta: "Learn More",
    textColor: "light" as const,
  },
  {
    image: plumbDrain,
    title: "Drain Cleaning",
    subtitle: "Fast, professional clearing — residential & commercial",
    primaryCta: "Book Now",
    secondaryCta: "Learn More",
    textColor: "light" as const,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: plumbingFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "West Peak Trenchless & Plumbing",
  description:
    "Bay Area plumbing services for new construction, leak detection, and drain cleaning. We get it right the first time.",
  areaServed: {
    "@type": "State",
    name: "California",
    containsPlace: { "@type": "City", name: "San Francisco Bay Area" },
  },
  serviceType: [
    "New Construction Plumbing",
    "Leak Detection",
    "Drain Cleaning",
    "Plumbing Rough-In",
  ],
};

const Plumbing = () => (
  <>
    <Helmet>
      <title>Plumbing Services — New Construction, Leak Detection & Drain Cleaning | West Peak</title>
      <meta
        name="description"
        content="Bay Area plumbing experts. New construction rough-ins, electronic leak detection, and professional drain cleaning. Get it right the first time — save thousands."
      />
      <link rel="canonical" href="https://westpeakplumbing.com/plumbing" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>

    <Navbar />

    <HeroSection slides={heroSlides} />

    {/* Service Cards Slider */}
    <section className="bg-background flex flex-col items-start pt-4 md:pt-6 pb-4">
      <div className="w-full px-4 md:px-10 lg:px-12">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {plumbingServices.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%] lg:basis-[30%] snap-start"
              >
                <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:aspect-[16/9]">
                  <img
                    src={serviceImages[s.slug]}
                    alt={s.name}
                    loading="lazy"
                    width={960}
                    height={640}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={20} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white">{s.name}</h3>
                    <p className="text-sm text-white/90 mt-1">{s.tagline}</p>
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
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Why We're the Best for New Construction
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                The walls are open. This is your one chance to get plumbing right — proper layout, correct pipe sizing, and code-compliant drainage that lasts decades.
              </p>
              <a
                href="#plumbing-services"
                className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img
                src={plumbConstruction}
                alt="New construction plumbing"
                loading="lazy"
                width={768}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                Leak Detection Saves Thousands
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                A hidden leak can cause $10,000+ in water damage. Our electronic detection finds the exact spot — no guessing, no unnecessary demolition.
              </p>
              <a
                href="#leak-detection"
                className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img
                src={plumbLeak}
                alt="Leak detection equipment"
                loading="lazy"
                width={768}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img
              src={plumbDrain}
              alt="Professional drain cleaning"
              loading="lazy"
              width={960}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">
                Full-Service Drain Cleaning
              </h3>
              <p className="text-sm text-white/80 mt-1">
                From kitchen sinks to main sewer lines — we clear it all
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#drain-cleaning"
                  className="px-6 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity"
                >
                  Learn More
                </a>
                <a
                  href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img
              src={plumbConstruction}
              alt="New construction pipes"
              loading="lazy"
              width={640}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">
                New Construction Rough-In
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Get the foundation right — supply, drain, and vent done to code
              </p>
              <a
                href="#plumbing-services"
                className="mt-4 inline-block px-8 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service Detail Sections */}
    {plumbingServices.map((service, idx) => {
      const Icon = serviceIcons[idx];
      const isAlt = idx % 2 === 1;
      return (
        <section
          key={service.slug}
          id={service.slug}
          className={`py-16 md:py-20 px-6 lg:px-12 ${isAlt ? "bg-secondary" : "bg-background"}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Icon size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                {service.name}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              {service.description}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border"
                >
                  <CheckCircle2
                    size={18}
                    className="text-cta-blue mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-foreground leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
                className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm"
              >
                Book Service
              </a>
            </div>
          </div>
        </section>
      );
    })}

    {/* CTA */}
    <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
      <img src={ctaPlumbing} alt="Professional plumber working under kitchen sink" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Building New? Get Your Plumbing Right the First Time
        </h2>
        <p className="text-lg text-white/70 mb-8">
          Whether it's a full new construction rough-in, finding a hidden leak, or clearing a stubborn drain — we've got you covered. Same-day service available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
            Schedule Service
          </a>
          <a href="tel:+1234567890" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
            Call Us Now
          </a>
        </div>
      </div>
    </section>

    <FaqAccordion faqs={plumbingFaqs} title="Plumbing FAQ" />

    <BottomBar />
  </>
);

export default Plumbing;
