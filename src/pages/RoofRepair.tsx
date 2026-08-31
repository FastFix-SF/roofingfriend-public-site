import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { AlertTriangle, Clock, Droplets, Wrench, ShieldCheck, Check, Search, Paintbrush } from "lucide-react";
import { openBookingDialog } from "@/lib/booking";
import heroRepair from "@/assets/hero-roof-repair.jpg";
import heroRepairWebp from "@/assets/hero-roof-repair.webp";

const repairs = [
  { name: "Emergency Leak Response", desc: "24/7 dispatch for active leaks — we stop water entry first, then diagnose the cause in daylight.", icon: AlertTriangle },
  { name: "Storm Damage & Tarping", desc: "Same-day emergency tarping after wind, hail, or fallen-limb damage to keep the interior dry.", icon: Clock },
  { name: "Flashing & Penetration Repair", desc: "Chimneys, skylights, vents, and wall transitions — the source of most Bay Area roof leaks.", icon: Wrench },
  { name: "Seam & Fastener Repair", desc: "Re-seaming, gasketed fastener replacement, and panel refastening on standing seam and R-Panel roofs.", icon: ShieldCheck },
  { name: "TPO & Flat Roof Patching", desc: "Heat-welded patches, seam repair, and ponding-water correction on commercial membrane roofs.", icon: Droplets },
  { name: "Restoration & Re-Coating", desc: "Silicone and acrylic restoration coatings that extend a tired metal or TPO roof by 10–20 years.", icon: Paintbrush },
];

const process = [
  { title: "Call or Book Online", desc: "Emergencies get live dispatch. Non-urgent repairs are scheduled within a few business days." },
  { title: "Photo Leak Diagnosis", desc: "We trace the actual entry point — not just the stain — and send you the photos." },
  { title: "Fixed-Price Repair Quote", desc: "Written scope and price before work starts. Repair vs. replace laid out honestly." },
  { title: "Repair & Warranty", desc: "Workmanship warranty on every repair, with restoration coating options where it makes sense." },
];

const repairFaqs = [
  { question: "Do you offer 24/7 emergency roof repair in the Bay Area?", answer: "Yes. We run 24/7 emergency storm and leak response across the San Francisco Bay Area. During an active leak we prioritize emergency tarping and water diversion to protect your interior, then return in daylight to diagnose and permanently repair the failure point." },
  { question: "How much does a metal roof repair cost?", answer: "Most Bay Area metal roof repairs run $450–$2,500 depending on access, pitch, and the scope of the failure. Simple flashing or fastener repairs sit at the low end; re-seaming panel runs, replacing damaged panels, or repairing structural storm damage sits higher. Emergency tarping is quoted separately and credited toward the permanent repair." },
  { question: "Can you repair a leak in a standing seam metal roof?", answer: "Almost always. Standing seam panels rarely fail in the field of the roof — leaks typically start at penetrations, valleys, flashing, or improperly sealed fasteners. We isolate the entry point, repair the detail, and only recommend panel replacement when the metal itself is compromised." },
  { question: "Should I repair or replace my roof?", answer: "If the roof is under 60% of its expected life and the damage is localized, repair is the right call. If leaks are recurring in multiple areas, fasteners are backing out across the roof, or the coating has failed roof-wide, a restoration coating or full replacement usually costs less over ten years. We give you both numbers so you can decide." },
  { question: "What is a roof restoration coating?", answer: "A restoration coating is a fluid-applied silicone or acrylic membrane rolled over an existing metal or TPO roof. It seals seams and pinholes, reflects heat, and typically adds 10–20 years of service life at a fraction of replacement cost — with no tear-off and no landfill waste." },
  { question: "Does insurance cover storm damage to my roof?", answer: "Wind, hail, and fallen-limb damage are commonly covered by California homeowner and commercial property policies. We document damage with dated photos and a written scope your adjuster can work from, and we can meet the adjuster on site." },
];

const RoofRepair = () => {
  const canonicalUrl = "https://roofingfriend.com/roof-repair";
  const title = "Metal Roof Repair & 24/7 Storm Response | Bay Area";
  const description = "Emergency metal roof repair and 24/7 storm damage response across the SF Bay Area. Leak diagnosis, emergency tarping, flashing repair, TPO patching and restoration coatings.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: repairFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Metal Roof Repair & Emergency Storm Response — San Francisco Bay Area",
    description,
    provider: {
      "@type": "RoofingContractor",
      name: "The Roofing Friend",
      telephone: "(510) 916-2408",
      areaServed: { "@type": "State", name: "California" },
    },
    serviceType: "Roof Repair",
    areaServed: { "@type": "City", name: "San Francisco Bay Area" },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preload" as="image" href={heroRepairWebp} type="image/webp" fetchPriority="high" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroRepair} />
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
          <source srcSet={heroRepairWebp} type="image/webp" />
          {/* @ts-expect-error fetchpriority is valid HTML */}
          <img src={heroRepair} alt="Roofer repairing a standing seam metal roof after a Bay Area storm" className="absolute inset-0 w-full h-full object-cover" loading="eager" fetchpriority="high" width={1920} height={1088} />
        </picture>
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
            Metal Roof Repair &amp; Storm Response
          </h1>
          <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
            24/7 Emergency Leak &amp; Tarping Service Across the SF Bay Area
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <a href="tel:+15109162408" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg text-sm">
              24/7 Emergency: (510) 916-2408
            </a>
            <button onClick={openBookingDialog} className="px-8 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-sm">
              Schedule a Repair
            </button>
          </div>
        </div>
      </section>

      {/* Emergency band */}
      <section className="bg-foreground text-background px-6 lg:px-12 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2">
            <AlertTriangle size={20} aria-hidden="true" /> Active leak or storm damage right now?
          </h2>
          <a href="tel:+15109162408" className="px-6 py-2.5 rounded font-semibold bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
            Call for emergency tarping
          </a>
        </div>
      </section>

      {/* Repairs we handle */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Repairs We Handle
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Metal, TPO, and flat roof repair for homes, retail centers, warehouses, and public facilities — from a single flashing detail to full storm restoration.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repairs.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.name} className="rounded-lg bg-muted p-6 border border-border hover:border-cta-blue/40 hover:shadow-lg transition-all">
                  <Icon size={28} className="text-cta-blue mb-4" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{r.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            How a Roof Repair Works
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Same process every time — emergencies get stabilized first, permanent repairs get quoted in writing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step, i) => (
              <div key={step.title} className="rounded-lg bg-background p-6 border border-border">
                <div className="w-9 h-9 rounded-full bg-cta-blue/10 flex items-center justify-center mb-4 text-sm font-semibold text-cta-blue">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair vs replace */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Repair, Restore, or Replace?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <caption className="sr-only">When to repair, restore, or replace a metal or TPO roof</caption>
              <thead className="bg-muted">
                <tr>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Situation</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Our recommendation</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Typical range</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Single leak at a flashing or penetration", "Targeted repair", "$450–$1,200"],
                  ["Storm or fallen-limb damage", "Emergency tarping, then panel repair", "$800–$4,000"],
                  ["Backed-out fasteners across the roof", "Refasten with oversized gasketed screws", "$2–$4 / sq ft"],
                  ["Aged but sound metal or TPO roof", "Silicone restoration coating", "$4–$8 / sq ft"],
                  ["Recurring leaks + failed substrate", "Full replacement", "$12–$22 / sq ft"],
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
          <p className="text-sm text-muted-foreground mt-8">
            Planning a full replacement instead? See{" "}
            <a href="/residential-roofing" className="text-cta-blue hover:underline">residential metal roofing</a> or{" "}
            <a href="/commercial-roofing" className="text-cta-blue hover:underline">commercial roofing</a>, and browse finished work in our{" "}
            <a href="/portfolio" className="text-cta-blue hover:underline">project portfolio</a>.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Included with Every Repair Call
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { title: "Photo Leak Report", desc: "Dated photos of the failure point, sent before we quote.", icon: Search },
              { title: "Written Fixed Price", desc: "No hourly surprises — the scope and price are agreed up front.", icon: Check },
              { title: "Insurance Documentation", desc: "Adjuster-ready scope and imagery for storm damage claims.", icon: ShieldCheck },
              { title: "Workmanship Warranty", desc: "Every repair is backed in writing by our own crews — never subcontracted.", icon: Wrench },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg bg-background p-6 border border-border">
                  <div className="w-9 h-9 rounded-full bg-cta-blue/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-cta-blue" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
        <picture>
          <source srcSet={heroRepairWebp} type="image/webp" />
          <img src={heroRepair} alt="Standing seam metal roof repair in progress" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        </picture>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Leaking Roof? We Can, We Will.</h2>
          <p className="text-lg text-white/70 mb-8">
            Call for 24/7 emergency response, or book a scheduled repair inspection at your convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15109162408" className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm">
              Call (510) 916-2408
            </a>
            <button onClick={openBookingDialog} className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm">
              Schedule a Repair Inspection
            </button>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={repairFaqs} title="Roof Repair &amp; Storm Damage FAQ" emitSchema={false} />

      <BottomBar />
    </>
  );
};

export default RoofRepair;
