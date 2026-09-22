import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import BottomBar from "@/components/BottomBar";
import FaqAccordion from "@/components/FaqAccordion";
import { Ruler, Truck, Timer, PackageCheck, Layers, Check, ShieldCheck, Wallet } from "lucide-react";
import { openCutAndDropDialog } from "@/lib/cut-and-drop";
import { companyConfig } from "@/config/company";
import heroCutDrop from "@/assets/hero-cut-and-drop.jpg";
import heroCutDropWebp from "@/assets/hero-cut-and-drop.webp";

const benefits = [
  { name: "Seamless Panels, Any Length", desc: "Panels are roll-formed on site to your exact rake length — no end laps, no seam leaks, no wasted overlap.", icon: Ruler },
  { name: "Cut Today, Loaded Today", desc: "Most Bay Area cut & drop orders are formed and staged for pickup or delivery within 24–48 hours.", icon: Timer },
  { name: "Delivered to Your Jobsite", desc: "We drop panels, trim, clips, fasteners and closures straight at the job — bundled and labeled by elevation.", icon: Truck },
  { name: "No Shipping Damage", desc: "Forming on site removes the long-haul freight that kinks, scuffs and oil-cans factory-shipped panels.", icon: PackageCheck },
  { name: "Profiles & Gauges In Stock", desc: "Standing seam, R-Panel and Multi-V in 24 and 26 gauge, with Kynar 500 color options.", icon: Layers },
  { name: "Contractor Pricing", desc: "Volume pricing for roofing contractors, GCs and builders — plus one-off orders for homeowners and DIY builds.", icon: Wallet },
];

const steps = [
  { title: "Send Your Panel Specs", desc: "Profile, gauge, color, panel lengths and quantity — or just your square footage and we'll take it from there." },
  { title: "Get a Written Quote", desc: "Itemized material quote with panels, trim, clips and fasteners priced line by line. Usually same business day." },
  { title: "We Roll-Form Your Order", desc: "Panels are formed to length from the coil on our portable roll-former, then bundled by elevation." },
  { title: "Cut & Drop at the Job", desc: "Pick up at our yard or we drop the full package at your jobsite anywhere in the Bay Area." },
];

const cutAndDropFaqs = [
  { question: "What is a cut and drop metal roofing service?", answer: "Cut and drop is a material-only service: we roll-form metal roof panels to your exact lengths and deliver, or 'drop', them at your jobsite along with the matching trim, clips and fasteners. You supply the labor and install — we supply factory-quality panels cut to spec, with no installation attached." },
  { question: "Do you offer on-site metal roof roll forming in the Bay Area?", answer: "Yes. We roll-form standing seam, R-Panel and Multi-V panels for jobs across the San Francisco Bay Area — San Francisco, Oakland, San Jose, the Peninsula, the East Bay and the North Bay. Panels can be formed at our yard or on site with our portable roll-former for long runs that cannot be safely transported." },
  { question: "Can homeowners and DIY builders order cut and drop panels?", answer: "Absolutely. Contractors get volume pricing, but we also cut single-structure orders for homeowners, barn and shop builds, ADUs and DIY projects. Tell us your rake lengths and we'll quote panels, trim and fasteners as a complete package." },
  { question: "What panel profiles, gauges and colors are available?", answer: "Standing seam (snap-lock and mechanical-lock), R-Panel and Multi-V in 24 and 26 gauge steel, finished in Kynar 500 / PVDF coatings across the standard architectural color range. We'll confirm availability and lead time with your quote." },
  { question: "How fast can I get panels cut?", answer: "Most in-stock gauge and color combinations are formed and ready within 24–48 hours of order approval. Special-order colors depend on coil availability and are confirmed in writing before production." },
  { question: "How much does cut and drop metal roofing cost?", answer: "Pricing depends on profile, gauge, color and total linear footage — panels typically fall in a per-linear-foot range, with trim, clips and fasteners quoted separately. Send your specs and we'll return an itemized material quote instead of a rough estimate." },
  { question: "Do you deliver panels or do I pick them up?", answer: "Both. You can pick up at our yard, or we deliver the full material package to your jobsite anywhere in the Bay Area, bundled and labeled by elevation so your crew can start immediately." },
  { question: "Does cut and drop include installation?", answer: "No — cut and drop is a material-only service for crews that install their own metal. If you'd like us to install, we do full residential and commercial metal roofing with a workmanship warranty." },
];

const CutAndDrop = () => {
  const canonicalUrl = "https://roofingfriend.com/cut-and-drop";
  const title = "Cut & Drop Metal Roofing Panels | On-Site Roll Forming Bay Area";
  const description =
    "Cut and drop roofing service in the SF Bay Area — on-site metal roof roll forming for standing seam, R-Panel and Multi-V. Panels cut to length and delivered to your jobsite in 24–48 hours.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cutAndDropFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cut & Drop Metal Roofing Panels — On-Site Roll Forming, San Francisco Bay Area",
    description,
    provider: {
      "@type": "RoofingContractor",
      name: "The Roofing Friend",
      telephone: companyConfig.phone,
      areaServed: { "@type": "State", name: "California" },
    },
    serviceType: "Metal Roof Panel Roll Forming and Material Supply",
    areaServed: { "@type": "City", name: "San Francisco Bay Area" },
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preload" as="image" href={heroCutDropWebp} type="image/webp" fetchPriority="high" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={heroCutDrop} />
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
          <source srcSet={heroCutDropWebp} type="image/webp" />
          <img
            src={heroCutDrop}
            alt="Portable roll-forming machine producing a standing seam metal roof panel at a Bay Area jobsite"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            width={1920}
            height={1088}
          />
        </picture>
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-hero-text">
            Cut &amp; Drop Metal Roofing Panels
          </h1>
          <p className="mt-2 text-base md:text-lg font-light text-hero-text opacity-90">
            On-Site Roll Forming, Cut to Length &amp; Delivered Across the SF Bay Area
          </p>
          <div className="flex flex-row items-center gap-3 mt-4">
            <button
              onClick={openCutAndDropDialog}
              className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg text-sm"
            >
              Get a Cut &amp; Drop Quote
            </button>
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="px-8 py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-sm"
            >
              Call {companyConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="bg-foreground text-background px-6 lg:px-12 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <h2 className="text-lg md:text-xl font-semibold">
            Material only — you install, we cut the metal to your exact lengths.
          </h2>
          <button
            onClick={openCutAndDropDialog}
            className="px-6 py-2.5 rounded font-semibold bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
          >
            Request material pricing
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Why On-Site Roll Forming Beats Factory-Shipped Panels
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Forming panels at or near the job removes the two biggest problems with ordering metal roofing: seams where panels have to lap, and freight damage on the way to the site.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.name} className="rounded-lg bg-muted p-6 border border-border hover:border-cta-blue/40 hover:shadow-lg transition-all">
                  <Icon size={28} className="text-cta-blue mb-4" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{b.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
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
            How Cut &amp; Drop Works
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Four steps from your panel list to metal on your jobsite.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
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

      {/* Specs table */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Panel Profiles We Roll-Form
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <caption className="sr-only">Metal roof panel profiles, gauges and typical uses for cut and drop orders</caption>
              <thead className="bg-muted">
                <tr>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Profile</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Gauge</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Best for</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Standing seam (snap-lock)", "24 / 26 ga", "Homes, ADUs, architectural roofs with hidden fasteners"],
                  ["Standing seam (mechanical-lock)", "24 ga", "Low-slope runs and high-wind exposures"],
                  ["R-Panel / PBR", "26 ga", "Barns, shops, warehouses, agricultural buildings"],
                  ["Multi-V / corrugated", "26 ga", "Sheds, carports, budget-conscious re-roofs"],
                  ["Matching trim & flashing", "24 / 26 ga", "Ridge, eave, rake, valley and wall transitions"],
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
            Want us to install instead? See{" "}
            <a href="/residential-roofing" className="text-cta-blue hover:underline">residential metal roofing</a>,{" "}
            <a href="/commercial-roofing" className="text-cta-blue hover:underline">commercial roofing</a>, or browse finished work in our{" "}
            <a href="/portfolio" className="text-cta-blue hover:underline">project portfolio</a>.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
            Who Cut &amp; Drop Is For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {[
              { title: "Roofing Contractors", desc: "Keep your crews installing instead of waiting weeks on a supplier.", icon: ShieldCheck },
              { title: "General Contractors", desc: "One material package per job, delivered on your schedule.", icon: PackageCheck },
              { title: "Builders & ADU Projects", desc: "Exact panel lengths for new construction with no field lapping.", icon: Ruler },
              { title: "Homeowners & DIY", desc: "Single-structure orders for shops, barns, carports and self-builds.", icon: Check },
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
          <source srcSet={heroCutDropWebp} type="image/webp" />
          <img
            src={heroCutDrop}
            alt="Freshly roll-formed standing seam metal panels staged on a jobsite"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={768}
          />
        </picture>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Send Us Your Panel List</h2>
          <p className="text-lg text-white/70 mb-8">
            Profile, gauge, color and lengths — or just your square footage. We'll come back with itemized material pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openCutAndDropDialog}
              className="px-8 py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-opacity text-sm"
            >
              Get a Cut &amp; Drop Quote
            </button>
            <a
              href={`tel:${companyConfig.phoneRaw}`}
              className="px-8 py-3 rounded font-medium bg-white text-foreground hover:bg-white/90 transition-colors text-sm"
            >
              Call {companyConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={cutAndDropFaqs} title="Cut &amp; Drop Roofing Material FAQ" emitSchema={false} />

      <BottomBar />
    </>
  );
};

export default CutAndDrop;
