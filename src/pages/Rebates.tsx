import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { rebatePrograms, rebateFaqs } from "@/lib/rebates-data";
import { CheckCircle2, DollarSign, Leaf, Home, Building2, Zap, MapPin } from "lucide-react";

import heroImg from "@/assets/slide-standing-seam.jpg";
import ctaRebates from "@/assets/hero-veteran-government-roofing.jpg";

const sectionIcons = [Leaf, DollarSign, Home, Building2, Zap, MapPin];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rebateFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const Rebates = () => (
  <>
    <Helmet>
      <title>California Roofing Rebates, Tax Breaks & Insurance Discounts | Roofing Friend</title>
      <meta
        name="description"
        content="Stack utility cool-roof rebates, federal §179D tax deductions, and FAIR Plan wildfire insurance discounts on your new metal roof. Roofing Friend handles every application across California."
      />
      <link rel="canonical" href="https://roofingfriend.com/rebates" />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <Navbar />

    {/* Hero */}
    <section className="snap-section relative overflow-hidden">
      <img
        src={heroImg}
        alt="Charcoal standing seam metal roof installed by Roofing Friend"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
        width={640}
        height={960}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
          Roofing Rebates & Insurance Discounts
        </h1>
        <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
          Stack utility rebates, federal tax deductions, and wildfire insurance discounts on your new metal roof
        </p>
        <div className="flex flex-row items-center gap-3 mt-4 w-full max-w-lg">
          <a
            href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-xs"
          >
            Get Your Free Roofing Assessment
          </a>
          <a
            href="#title-24-compliance"
            className="w-full sm:w-auto flex-1 text-center px-12 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-xs"
          >
            See All Programs
          </a>
        </div>
      </div>
    </section>

    {/* Summary Cards */}
    <section className="bg-background flex flex-col items-start pt-4 md:pt-6 pb-4">
      <div className="w-full px-4 md:px-10 lg:px-12">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {rebatePrograms.map((p, i) => {
            const Icon = sectionIcons[i];
            return (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%] lg:basis-[30%] snap-start"
              >
                <div className="relative rounded-lg overflow-hidden bg-muted p-6 h-full flex flex-col justify-between min-h-[180px]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={20} className="text-cta-blue" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-foreground">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                  </div>
                  <span className="text-xs text-cta-blue font-medium mt-4">Learn more →</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>

    {/* Stacking Promo */}
    <section className="bg-background py-8 md:py-12">
      <div className="w-full px-4 md:px-10 lg:px-12 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Stack Your Roofing Savings</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Combine utility rebates, federal §179D deductions, and FAIR Plan wildfire discounts to slash your roof investment.
              </p>
              <a
                href="#title-24-compliance"
                className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                See How
              </a>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">We Handle the Paperwork</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Roofing Friend files every rebate, cool-roof certification, and insurance discount form for you.
              </p>
              <a
                href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Program Detail Sections */}
    {rebatePrograms.map((program, idx) => {
      const Icon = sectionIcons[idx];
      const isAlt = idx % 2 === 1;
      return (
        <section
          key={program.slug}
          id={program.slug}
          className={`py-16 md:py-20 px-6 lg:px-12 ${isAlt ? "bg-secondary" : "bg-background"}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Icon size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">{program.name}</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mb-4 leading-relaxed">{program.description}</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-background rounded-lg p-4 border border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">How Much</span>
                <p className="text-foreground font-medium mt-1">{program.amount}</p>
              </div>
              <div className="bg-background rounded-lg p-4 border border-border">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Who Qualifies</span>
                <p className="text-foreground text-sm mt-1">{program.whoQualifies}</p>
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 border border-border mb-8">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">How to Apply</span>
              <p className="text-foreground text-sm mt-1">{program.howToApply}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {program.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                  <CheckCircle2 size={18} className="text-cta-blue mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground leading-relaxed">{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
                className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm"
              >
                Get a Free Assessment
              </a>
              {program.link && (
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm"
                >
                  Official Program Site
                </a>
              )}
            </div>
          </div>
        </section>
      );
    })}

    {/* CTA */}
    <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
      <img src={ctaRebates} alt="Veteran-owned Roofing Friend crew installing a Class A metal roof" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Not Sure Which Rebates You Qualify For?</h2>
        <p className="text-lg text-white/70 mb-8">
          Book a free roof assessment. We'll evaluate your property, your Fire Hazard Severity Zone, and your utility — then identify every rebate, tax break, and insurance discount you qualify for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
            Schedule a Free Consultation
          </a>
          <a href="tel:+1234567890" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
            Call Us Now
          </a>
        </div>
      </div>
    </section>

    <FaqAccordion faqs={rebateFaqs} title="Rebate Program FAQ" />

    <BottomBar />
  </>
);

export default Rebates;
