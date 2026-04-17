import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import PipeStatsSection from "@/components/PipeStatsSection";
import FaqAccordion from "@/components/FaqAccordion";
import { pipeConditions, promoCards, pipeFaqs } from "@/lib/pipes-data";
import nastyPipeHero from "@/assets/nasty-pipe-hero.jpg";

const AgingPipes = () => (
  <>
    <Helmet>
      <title>Your Pipes Are Disgusting — See What's Inside | West Peak</title>
      <meta name="description" content="Most American homes have plumbing older than their cars. See what's really running through your pipes and why you need to replace them before they fail." />
      <link rel="canonical" href="https://westpeakplumbing.com/pipes" />
      <meta property="og:title" content="Your Pipes Are Disgusting — See What's Inside | West Peak" />
      <meta property="og:description" content="Most American homes have plumbing older than their cars. See what's really running through your pipes." />
      <meta property="og:url" content="https://westpeakplumbing.com/pipes" />
      <meta property="og:type" content="website" />
    </Helmet>

    <Navbar />

    {/* Hero */}
    <section className="relative h-screen flex items-end">
      <img
        src={nastyPipeHero}
        alt="Corroded pipe interior showing rust and buildup"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 md:pb-28 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
          What's Running Through Your Pipes?
        </h1>
        <p className="text-base md:text-lg text-white/80 mt-4 max-w-xl leading-relaxed">
          Most American homes have plumbing older than their cars. That rusty, corroded pipe? It's carrying the water you drink, cook with, and bathe in.
        </p>
        <div className="flex gap-3 mt-8">
          <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded text-sm font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity">
            Schedule Inspection
          </a>
          <a href="/#map" className="px-6 py-3 rounded text-sm font-medium border border-white/40 text-white hover:bg-white/10 transition-colors">
            See the Map
          </a>
        </div>
      </div>
    </section>

    {/* Stats */}
    <PipeStatsSection />

    {/* Pipe Conditions Slider */}
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
          What's Hiding in Your Walls
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          These aren't rare cases. Millions of American homes have these exact pipes right now — silently corroding, cracking, and contaminating.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pipeConditions.map((pipe, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={pipe.image}
                  alt={pipe.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{pipe.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{pipe.description}</p>
                <div className="bg-destructive/10 rounded-lg px-4 py-3">
                  <p className="text-xs font-medium text-destructive uppercase tracking-wide mb-1">Health & Property Risk</p>
                  <p className="text-sm text-foreground/80">{pipe.risk}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Promo Cards */}
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-muted">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {promoCards.map((card, i) => (
          <div
            key={i}
            className={`rounded-2xl p-8 ${
              card.cta
                ? "md:col-span-2 bg-foreground text-background"
                : "bg-background border border-border"
            }`}
          >
            <p className={`text-xs uppercase tracking-widest mb-2 ${card.cta ? "text-cta-gold" : "text-muted-foreground"}`}>
              {card.subtitle}
            </p>
            <h3 className={`text-2xl md:text-3xl font-semibold mb-4 ${card.cta ? "" : "text-foreground"}`}>
              {card.title}
            </h3>
            <p className={`text-sm leading-relaxed max-w-xl ${card.cta ? "text-background/70" : "text-muted-foreground"}`}>
              {card.description}
            </p>
            {card.cta && (
              <a
                href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 rounded text-sm font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity"
              >
                Schedule a Free Inspection
              </a>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <FaqAccordion faqs={pipeFaqs} title="Questions About Your Pipes" />

    <div className="h-20" />
    <BottomBar />
  </>
);

export default AgingPipes;
