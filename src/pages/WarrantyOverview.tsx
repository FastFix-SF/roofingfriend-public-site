import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { warrantyCategories, warrantyOverviewFaqs } from "@/lib/warranty-data";
import { CheckCircle2, Building, Landmark, Home } from "lucide-react";
import { openBookingDialog } from "@/lib/booking";

import warrantyCommercial from "@/assets/warranty-commercial.jpg";
import warrantyCommercialWebp from "@/assets/warranty-commercial.webp";
import warrantyIndustrial from "@/assets/warranty-industrial.jpg";
import warrantyIndustrialWebp from "@/assets/warranty-industrial.webp";
import warrantyResidential from "@/assets/warranty-residential.jpg";
import warrantyResidentialWebp from "@/assets/warranty-residential.webp";
import ctaWarrantyOverview from "@/assets/cta-warranty-overview.jpg";

const categoryImages: Record<string, string> = {
  commercial: warrantyCommercial,
  industrial: warrantyIndustrial,
  residential: warrantyResidential,
};

const categoryImagesWebp: Record<string, string> = {
  commercial: warrantyCommercialWebp,
  industrial: warrantyIndustrialWebp,
  residential: warrantyResidentialWebp,
};

const categoryIcons: Record<string, typeof Building> = {
  commercial: Building,
  industrial: Landmark,
  residential: Home,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: warrantyOverviewFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Roofing Warranty",
  provider: {
    "@type": "RoofingContractor",
    name: "Roofing Friend",
    areaServed: { "@type": "State", name: "California" },
  },
  description: "Industry-leading metal roof warranties: up to 50-year manufacturer paint & substrate on residential, 25-year system warranty on commercial, spec-grade coverage on government & public sector. Veteran-owned California roofing contractor.",
};

const WarrantyOverview = () => (
  <>
    <Helmet>
      <title>Metal Roof Warranty — Up to 50 Years | Roofing Friend</title>
      <meta name="description" content="Roofing Friend offers California's strongest metal roof warranties: up to 50-year manufacturer paint & substrate on residential, 25-year system warranty on commercial, spec-grade coverage on government & public sector. Veteran-owned." />
      <link rel="canonical" href="https://roofingfriend.com/warranty" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <link rel="preload" as="image" href={warrantyResidentialWebp} type="image/webp" fetchPriority="high" />
    </Helmet>

    <Navbar />

    {/* Hero */}
    <section className="snap-section relative overflow-hidden">
      <picture>
        <source srcSet={warrantyResidentialWebp} type="image/webp" />
        <img
        src={warrantyResidential}
        alt="Roofing Friend metal roof warranty coverage"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      </picture>
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
          Industry-Leading Metal Roof Warranties
        </h1>
        <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
          Up to 50 years of protection · Materials + Labor · Veteran-owned, California-licensed
        </p>
        <div className="flex flex-row items-center gap-3 mt-4 w-full max-w-lg">
          <a href="#categories" className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-xs">
            See Warranty Options
          </a>
          <button onClick={openBookingDialog} className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-xs">
            File a Claim
          </button>
        </div>
      </div>
    </section>

    {/* Category Cards */}
    <section id="categories" className="bg-background flex flex-col items-start pt-4 md:pt-6 pb-4">
      <div className="w-full px-4 md:px-10 lg:px-12">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {warrantyCategories.map((cat) => {
            const Icon = categoryIcons[cat.slug] || Building;
            return (
              <Link
                key={cat.slug}
                to={`/warranty/${cat.slug}`}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%] lg:basis-[33%] snap-start"
              >
                <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:aspect-[16/9]">
                  <img src={categoryImages[cat.slug]} alt={cat.name} loading="lazy" width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={20} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium text-white">{cat.name}</h3>
                    <p className="text-sm text-white/90 mt-1">{cat.yearLabel} · {cat.tagline}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10">Warranty Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-sm font-semibold text-foreground w-1/4"></th>
                {warrantyCategories.map((cat) => (
                  <th key={cat.slug} className="py-4 px-4 text-sm font-semibold text-cta-blue">{cat.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
              { label: "Warranty Length", values: warrantyCategories.map((c) => c.yearLabel) },
                { label: "Materials Covered", values: ["Yes", "Yes", "Yes"] },
                { label: "Labor Covered", values: ["Yes", "Yes", "Yes"] },
                { label: "Transferable", values: ["Automatic", "By Agreement", "By Agreement"] },
                { label: "Priority Callbacks", values: ["Included", "Included", "Included"] },
                { label: "CA CSLB Minimum", values: ["1 Year", "1 Year", "1 Year"] },
                { label: "Roofing Friend Exceeds By", values: ["50×", "25×", "Spec-Grade"] },
              ].map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-4 pr-4 text-sm font-medium text-foreground">{row.label}</td>
                  {row.values.map((val, j) => (
                    <td key={j} className="py-4 px-4 text-sm text-foreground">
                      <span className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-cta-blue shrink-0 mt-0.5" />
                        {val}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">Why Our Warranties Matter</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "California CSLB only requires 1-year workmanship warranty — we go up to 50× on residential",
            "Both manufacturer materials and Roofing Friend labor are covered together",
            "Residential metal roof warranties transfer automatically to new homeowners",
            "Priority callbacks on warranted work — same-day response on active leaks",
            "We comply with SB 800 Right to Repair and Title 24 cool roof requirements",
            "Veteran-owned, California-licensed — spec-grade documentation on every project",
          ].map((b, i) => (
            <div key={i} className="flex items-start gap-3 bg-muted rounded-lg p-4">
              <CheckCircle2 size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
              <span className="text-sm text-foreground leading-relaxed">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
      <img src={ctaWarrantyOverview} alt="Roofing Friend warranty documentation and certificates" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Questions About Your Warranty?</h2>
        <p className="text-lg text-white/70 mb-8">
          Whether you need to file a claim, check your coverage, or learn more about our warranty programs, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={openBookingDialog} className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
            Contact Us
          </button>
          <a href="tel:+1234567890" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
            Call Us Now
          </a>
        </div>
      </div>
    </section>

    <FaqAccordion faqs={warrantyOverviewFaqs} title="Warranty FAQ" />

    <BottomBar />
  </>
);

export default WarrantyOverview;
