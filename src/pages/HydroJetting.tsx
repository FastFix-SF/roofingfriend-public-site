import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import HeroSection from "@/components/HeroSection";
import FaqAccordion from "@/components/FaqAccordion";
import { hydroJettingServices, hydroJettingFaqs } from "@/lib/hydro-jetting-data";
import { ShieldCheck, Zap, TreePine, Building2, CheckCircle2 } from "lucide-react";
import ctaHydroJetting from "@/assets/cta-hydro-jetting.jpg";

import hjHero from "@/assets/slide-hydro-jetter.png";
import hjEmergency from "@/assets/hj-emergency.jpg";
import hjMaintenance from "@/assets/hj-maintenance.jpg";
import hjRoots from "@/assets/hj-roots.jpg";
import hjCommercial from "@/assets/hj-commercial.jpg";
import hjVsSnaking from "@/assets/hj-vs-snaking.jpg";

const serviceImages: Record<string, string> = {
  maintenance: hjMaintenance,
  emergency: hjEmergency,
  roots: hjRoots,
  commercial: hjCommercial,
};

const serviceIcons = [ShieldCheck, Zap, TreePine, Building2];

const heroSlides = [
  {
    image: hjHero,
    title: "Hydro Jetting",
    subtitle: "A high-pressure water hose that blasts your pipes clean",
    primaryCta: "Book Service",
    secondaryCta: "Learn More",
    textColor: "light" as const,
  },
  {
    image: hjEmergency,
    title: "Drain Backed Up?",
    subtitle: "Same-day emergency service — we'll blast it clear",
    primaryCta: "Call Now",
    secondaryCta: "How It Works",
    textColor: "light" as const,
  },
  {
    image: hjMaintenance,
    title: "Annual Pipe Cleaning",
    subtitle: "Prevent clogs before they become emergencies",
    primaryCta: "Schedule Maintenance",
    secondaryCta: "Learn More",
    textColor: "light" as const,
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: hydroJettingFaqs.map((f) => ({
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
    "Bay Area hydro jetting services for residential and commercial drains. Emergency drain clearing, tree root removal, and preventive maintenance.",
  areaServed: {
    "@type": "State",
    name: "California",
    containsPlace: { "@type": "City", name: "San Francisco Bay Area" },
  },
  serviceType: [
    "Hydro Jetting",
    "Drain Cleaning",
    "Tree Root Removal",
    "Commercial Drain Maintenance",
    "Emergency Drain Clearing",
  ],
};

const HydroJetting = () => (
  <>
    <Helmet>
      <title>Hydro Jetting in the Bay Area | Drain Cleaning & Root Removal | West Peak</title>
      <meta
        name="description"
        content="Bay Area hydro jetting experts. Emergency drain clearing, tree root removal, and preventive maintenance. Same-day service. No chemicals — just pure water pressure."
      />
      <link rel="canonical" href="https://westpeakplumbing.com/hydro-jetting" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
    </Helmet>

    <Navbar />

    <HeroSection slides={heroSlides} />

    {/* Service Cards Slider */}
    <section className="bg-background flex flex-col items-start pt-4 md:pt-6 pb-4">
      <div className="w-full px-4 md:px-10 lg:px-12">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {hydroJettingServices.map((s, i) => {
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
                Why Hydro Jetting Beats Snaking
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                A snake pokes a hole through the clog. Hydro jetting removes the entire blockage and
                cleans the pipe walls so clogs don't come back.
              </p>
              <a
                href="#maintenance"
                className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img
                src={hjVsSnaking}
                alt="Hydro jetting vs snaking comparison"
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
                Emergency? We're Fast.
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Sewage backing up? Kitchen sink overflowing? We offer same-day emergency hydro
                jetting — no waiting until Monday.
              </p>
              <a
                href="#emergency"
                className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Get Help Now
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img
                src={hjEmergency}
                alt="Emergency drain clearing"
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
              src={hjRoots}
              alt="Tree root removal from pipes"
              loading="lazy"
              width={960}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">
                Tree Roots Destroying Your Pipes?
              </h3>
              <p className="text-sm text-white/80 mt-1">
                We cut through roots with water pressure — no digging up your yard
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="#roots"
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
              src={hjMaintenance}
              alt="Annual drain maintenance"
              loading="lazy"
              width={640}
              height={640}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">Annual Maintenance</h3>
              <p className="text-sm text-white/80 mt-1">
                $350 yearly jetting that prevents $2,000+ emergencies
              </p>
              <a
                href="#maintenance"
                className="mt-4 inline-block px-8 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service Detail Sections */}
    {hydroJettingServices.map((service, idx) => {
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
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{service.name}</h2>
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
                  <CheckCircle2 size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
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
      <img src={ctaHydroJetting} alt="High-pressure hydro jetting nozzle clearing sewer line" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Clogged Drain? We'll Blast It Clean.
        </h2>
        <p className="text-lg text-white/70 mb-8">
          Whether it's a grease-clogged kitchen drain, tree roots in your sewer line, or annual
          maintenance — we've got you covered. Same-day service available.
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

    <FaqAccordion faqs={hydroJettingFaqs} title="Hydro Jetting FAQ" />

    <BottomBar />
  </>
);

export default HydroJetting;
