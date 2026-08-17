import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { Home, Flame, Leaf, ShieldCheck, Clock, Wrench, Check, DollarSign, Droplets } from "lucide-react";
import { openBookingDialog } from "@/lib/booking";
import heroResidential from "@/assets/hero-residential-roofing.jpg";
import heroResidentialWebp from "@/assets/hero-residential-roofing.webp";

const systems = [
  { name: "Standing Seam", desc: "Concealed-fastener panels with clean vertical lines — the premium choice for Bay Area homes and the best long-term leak protection.", icon: Home },
  { name: "Metal Shingles & Shake", desc: "Stamped metal profiles that mimic slate, shake, or tile with a fraction of the weight and none of the rot.", icon: Wrench },
  { name: "Cool-Roof Coatings", desc: "Title 24 compliant reflective PVDF finishes that cut attic heat and summer cooling load.", icon: Leaf },
  { name: "Snow & Rain Management", desc: "Integrated gutters, snow guards, and valley flashing engineered for Bay Area winter rains.", icon: Droplets },
  { name: "Solar-Ready Mounting", desc: "Clamp-on solar rails attach to standing seam ribs — no roof penetrations, no warranty voids.", icon: DollarSign },
  { name: "Re-Roof Over Existing", desc: "Where code allows, we install over the existing roof deck to cut tear-off cost and landfill waste.", icon: Clock },
];

const includedItems = [
  { title: "Free Roof Inspection", desc: "On-site measurement, attic ventilation check, and photo report before any quote." },
  { title: "Class A Fire Rating", desc: "The highest fire rating available — critical in California WUI wildfire zones." },
  { title: "Custom Color Match", desc: "Kynar 500 PVDF finishes matched to your home, HOA rules, and neighborhood palette." },
  { title: "30/40-Year Warranty", desc: "30-year paint warranty and 40-year weathertightness coverage, registered for you." },
];

const residentialFaqs = [
  { question: "How much does a residential metal roof cost in the Bay Area?", answer: "Residential standing seam metal roofing in the San Francisco Bay Area typically runs $12–$22 per square foot installed. For a 2,000 sq ft roof, that's roughly $24,000–$44,000 depending on panel gauge, roof pitch, number of valleys and penetrations, and finish. Metal shingle profiles usually sit at the lower end; architectural standing seam with a Kynar 500 PVDF finish sits at the upper end." },
  { question: "How long does a residential metal roof last?", answer: "A properly installed residential metal roof lasts 40–70 years — about three times longer than asphalt shingles, which need replacement every 15–20 years. Paint finishes carry 30-year non-prorated warranties and the panel system is typically warranted 40 years against weathertightness." },
  { question: "Does a metal roof help with California wildfire risk?", answer: "Yes. Metal roofing carries a Class A fire rating, the highest available, and does not ignite from wind-blown embers — the leading cause of home loss in wildfire events. Homes in Wildland-Urban Interface (WUI) zones across the Bay Area often qualify for lower insurance premiums after a Class A metal roof is installed." },
  { question: "How much can a metal roof cut my energy bill?", answer: "Cool-roof rated metal panels reflect 40–70% of solar radiation and can lower attic temperatures by up to 50°F. Bay Area homeowners typically see 20–30% lower summer cooling costs, and the system helps meet California Title 24 energy requirements." },
  { question: "Is a metal roof loud when it rains?", answer: "No. Modern residential metal roofs are installed over solid decking with underlayment and attic insulation, which makes them no louder than asphalt shingles in rain. The 'tin roof' sound comes from bare panels over open framing, which is not how residential systems are built." },
  { question: "Can I install solar panels on a metal roof?", answer: "Yes, and it's the ideal pairing. Standing seam ribs accept clamp-on solar mounts that require zero roof penetrations, so there are no new leak points and your roof warranty stays intact. Because the roof outlives the solar array, you never have to remove panels for a re-roof." },
  { question: "Can a metal roof go over my existing shingles?", answer: "Often, yes. Where local code and deck condition allow, metal panels can be installed over one existing layer of asphalt shingles with a proper underlayment and furring system. That eliminates tear-off labor and disposal fees. We confirm deck condition during the free inspection." },
];

const ResidentialRoofing = () => {
  const canonicalUrl = "https://tesla-clone-delight.lovable.app/residential-roofing";
  const title = "Residential Metal Roofing | Bay Area Standing Seam Roofs";
  const description = "Residential metal roofing for Bay Area homes. Class A fire rating, 20–30% energy savings, 40–70 year lifespan, 30/40-year warranty. Free roof inspection.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: residentialFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Metal Roofing — San Francisco Bay Area",
    description,
    provider: {
      "@type": "RoofingContractor",
      name: "The Roofing Friend",
      telephone: "(510) 916-2408",
      areaServed: { "@type": "State", name: "California" },
    },
    serviceType: "Residential Metal Roofing",
    areaServed: { "@type": "City", name: "San Francisco Bay Area" },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preload" as="image" href={heroResidentialWebp} type="image/webp" fetchPriority="high" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroResidential} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: "70vh" }}>
        <picture>
          <source srcSet={heroResidentialWebp} type="image/webp" />
          {/* @ts-expect-error fetchpriority is valid HTML */}
          <img src={heroResidential} alt="Charcoal standing seam metal roof on a Bay Area home" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" width={1920} height={1088} />
        </picture>
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
            Residential Metal Roofing
          </h1>
          <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
            Class A Fire Rated · Energy Saving · Built to Last 40–70 Years
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <button onClick={openBookingDialog} className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg text-sm">
              Get a Free Roof Inspection
            </button>
            <a href="tel:+15109162408" className="px-8 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-sm">
              Call (510) 916-2408
            </a>
          </div>
        </div>
      </section>

      {/* Why homeowners choose metal */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Why Bay Area Homeowners Choose Metal Roofing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A metal roof is the last roof most Bay Area homes will ever need. It shrugs off wind-blown embers in wildfire season, keeps upstairs bedrooms cooler through summer heat, and sheds winter rain without the granule loss and curling that ages asphalt shingles in under two decades.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <Flame size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">Class A Fire Rating</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">The highest fire rating available — essential protection for homes in California WUI wildfire zones.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <Leaf size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">20–30% Energy Savings</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Cool-roof rated panels reflect solar heat, cut attic temperatures, and help meet Title 24 requirements.</p>
            </div>
            <div className="rounded-lg bg-muted p-6 flex flex-col gap-3">
              <ShieldCheck size={28} className="text-cta-blue" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground">40–70 Year Lifespan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Three times longer than asphalt, backed by a 30-year paint and 40-year weathertightness warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Residential Roof Systems We Install
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            From single-story ranch homes to hillside custom builds, we spec the panel profile, gauge, and finish that fits your roofline, HOA rules, and budget.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible">
            {systems.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="flex-shrink-0 w-72 lg:w-auto snap-start rounded-lg bg-background p-6 border border-border hover:border-cta-blue/40 hover:shadow-lg transition-all">
                  <Icon size={28} className="text-cta-blue mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <button onClick={openBookingDialog} className="text-sm font-medium text-cta-blue hover:underline">
                    Get a Quote →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metal vs asphalt */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Metal Roof vs. Asphalt Shingles
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <caption className="sr-only">Comparison of residential metal roofing and asphalt shingles</caption>
              <thead className="bg-muted">
                <tr>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Factor</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Standing Seam Metal</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Asphalt Shingles</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Lifespan", "40–70 years", "15–20 years"],
                  ["Fire rating", "Class A (non-combustible)", "Class A to C, combustible mat"],
                  ["Summer cooling cost", "20–30% lower with cool-roof finish", "Baseline"],
                  ["Warranty", "30-yr paint / 40-yr weathertightness", "Typically prorated 20–30 yr"],
                  ["Solar mounting", "Clamp-on, no penetrations", "Penetrating mounts required"],
                  ["Upfront cost", "$12–$22 / sq ft installed", "$5–$9 / sq ft installed"],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-t border-border">
                    <th scope="row" className="text-left p-4 font-medium text-foreground">{a}</th>
                    <td className="p-4">{b}</td>
                    <td className="p-4">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            What's Included with Every Home Roof
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Same process on every residential job — no upsells, no surprise change orders.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {includedItems.map((item) => (
              <div key={item.title} className="rounded-lg bg-background p-6 border border-border">
                <div className="w-9 h-9 rounded-full bg-cta-blue/10 flex items-center justify-center mb-4">
                  <Check size={18} className="text-cta-blue" strokeWidth={2.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            See coverage details on the{" "}
            <a href="/warranty/residential" className="text-cta-blue hover:underline">residential warranty page</a>, browse finished homes in our{" "}
            <a href="/portfolio" className="text-cta-blue hover:underline">project portfolio</a>, or check current{" "}
            <a href="/rebates" className="text-cta-blue hover:underline">rebates and offers</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
        <picture>
          <source srcSet={heroResidentialWebp} type="image/webp" />
          <img src={heroResidential} alt="Residential standing seam metal roof" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        </picture>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready for Your Last Roof?</h2>
          <p className="text-lg text-white/70 mb-8">
            Book a free on-site inspection and get a fixed-price quote for a metal roof engineered for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openBookingDialog} className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
              Schedule a Free Inspection
            </button>
            <a href="tel:+15109162408" className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
              Call (510) 916-2408
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={residentialFaqs} title="Residential Metal Roofing FAQ" emitSchema={false} />

      <BottomBar />
    </>
  );
};

export default ResidentialRoofing;
