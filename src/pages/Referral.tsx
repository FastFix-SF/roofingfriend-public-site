import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { commissionTiers, howItWorks, whyRefer, referralFaqs } from "@/lib/referral-data";
import ctaReferral from "@/assets/cta-referral.jpg";
import heroReferral from "@/assets/hero-referral.jpg";
import { DollarSign, Users, CheckCircle, ArrowRight } from "lucide-react";

const stepIcons = [Users, CheckCircle, DollarSign];

const Referral = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: referralFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Referral Program — Earn Commission | The Roofing Friend</title>
        <meta
          name="description"
          content="Earn money by referring friends and neighbors to The Roofing Friend. Commission-based referral program — the bigger the roof job, the bigger your payout."
        />
        <link rel="canonical" href="https://theroof.info/referral" />
        <meta property="og:title" content="Referral Program — Earn Commission | The Roofing Friend" />
        <meta property="og:description" content="Earn money by referring friends and neighbors to The Roofing Friend. Commission-based referral program." />
        <meta property="og:url" content="https://theroof.info/referral" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-12">
        <img src={heroReferral} alt="Neighbors referring metal roofing services" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cta-gold mb-4">Referral Program</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Earn Money by Referring Friends&nbsp;&amp;&nbsp;Neighbors
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            It works like a sales job — just refer someone to The Roofing Friend, and when we complete the install, you earn a commission based on the job size.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <a
              href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 rounded font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity"
            >
              Start Referring Today
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3 rounded font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <div key={i} className="relative text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-cta-blue/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-cta-blue" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-cta-blue mb-2">Step {step.step}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  {i < howItWorks.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-border" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Commission Tiers</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The bigger the job you refer, the more you earn. Here's how our tiered commission structure works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commissionTiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 md:p-8 flex flex-col ${
                  tier.highlighted
                    ? "bg-cta-blue text-white ring-2 ring-cta-blue shadow-lg scale-[1.02]"
                    : "bg-card border border-border"
                }`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                  {tier.range}
                </p>
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                  {tier.reward}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${tier.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <div className="mt-auto">
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${tier.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                    Example jobs
                  </p>
                  <ul className="space-y-1">
                    {tier.examples.map((ex, j) => (
                      <li key={j} className={`text-sm flex items-center gap-2 ${tier.highlighted ? "text-white/90" : "text-foreground"}`}>
                        <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${tier.highlighted ? "text-white" : "text-cta-blue"}`} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Refer West Peak */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">Why Refer The Roofing Friend?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyRefer.map((item, i) => (
              <div key={i} className="p-5 rounded-lg border border-border bg-card">
                <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion faqs={referralFaqs} title="Referral Program FAQ" />

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20 px-6 text-white text-center">
        <img
          src={ctaReferral}
          alt="Referral program"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={768}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Start Earning Today</h2>
          <p className="mt-3 text-white/70">
            There's no sign-up fee, no contract, and no cap on earnings. Just refer someone to The Roofing Friend and get paid when the install is done.
          </p>
          <a
            href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 rounded font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity"
          >
            Contact Us to Get Started
          </a>
        </div>
      </section>

      <Footer />
      <BottomBar />
    </>
  );
};

export default Referral;
