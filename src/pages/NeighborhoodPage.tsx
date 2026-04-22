import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { Building2, CheckCircle2, Phone, Sparkles, ShieldCheck, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";
import ServiceHero from "@/components/ServiceHero";
import FaqAccordion from "@/components/FaqAccordion";
import { getCityBySlug } from "@/lib/cities-data";
import { getNeighborhoodBySlug, getNeighborhoodsByCity } from "@/lib/neighborhoods-data";
import heroCommercialRoofing from "@/assets/hero-commercial-roofing.jpg";
import heroCommercialRoofingWebp from "@/assets/hero-commercial-roofing.webp";

const QUOTE_URL = "https://booking.servicetitan.com/";
const PHONE = "(510) 999-7663";
const PHONE_HREF = "tel:5109997663";

const NeighborhoodPage = () => {
  const { city: citySlug, neighborhood: neighborhoodSlug } = useParams<{
    city: string;
    neighborhood: string;
  }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  const neighborhood =
    citySlug && neighborhoodSlug ? getNeighborhoodBySlug(citySlug, neighborhoodSlug) : undefined;

  if (!city || !neighborhood) return <Navigate to="/404" replace />;

  const canonicalUrl = `https://theroof.info/locations/${city.slug}/${neighborhood.slug}`;
  const title = `Metal Roofing in ${neighborhood.name}, ${city.name} | The Roofing Friend`;
  const description = `${neighborhood.tagline}. Premium copper, zinc, and PVDF standing seam metal roofing installed in ${neighborhood.name} by The Roofing Friend — licensed, insured, CA #1067709.`;

  const otherNeighborhoods = getNeighborhoodsByCity(city.slug).filter(
    (n) => n.slug !== neighborhood.slug,
  );

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "The Roofing Friend",
    image: "https://theroof.info/og-image.jpg",
    telephone: PHONE,
    email: "info@theroof.info",
    url: canonicalUrl,
    areaServed: [
      { "@type": "Place", name: `${neighborhood.name}, ${city.name}` },
      { "@type": "City", name: city.name },
    ],
    address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
    priceRange: "$$$",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://theroof.info/" },
      {
        "@type": "ListItem",
        position: 2,
        name: city.name,
        item: `https://theroof.info/locations/${city.slug}`,
      },
      { "@type": "ListItem", position: 3, name: neighborhood.name, item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: neighborhood.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link
          rel="preload"
          as="image"
          href={heroCommercialRoofingWebp}
          type="image/webp"
          fetchPriority="high"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <ServiceHero
        title={`Metal Roofing in ${neighborhood.name}`}
        tagline={neighborhood.tagline}
        backLink={{ label: `All ${city.name} Neighborhoods`, to: `/locations/${city.slug}` }}
        backgroundImage={heroCommercialRoofing}
        backgroundImageWebp={heroCommercialRoofingWebp}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-6 lg:px-12 pt-6">
        <div className="max-w-5xl mx-auto text-sm text-muted-foreground">
          <Link to="/" className="hover:text-cta-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/locations/${city.slug}`} className="hover:text-cta-gold">{city.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{neighborhood.name}</span>
        </div>
      </nav>

      {/* Architecture & history */}
      <section className="py-14 md:py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-wider text-cta-gold font-semibold mb-3">
              {city.name} · {city.region}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-5">
              Architecture & history of {neighborhood.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{neighborhood.intro}</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Landmark className="text-cta-gold mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-foreground">Era</p>
                  <p className="text-muted-foreground">{neighborhood.architectureEra}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="text-cta-gold mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-semibold text-foreground">Notable homes</p>
                  <p className="text-muted-foreground">{neighborhood.notableHomes}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted/40 rounded-xl p-6 md:p-8 border border-border">
            <ShieldCheck className="text-cta-gold mb-4" size={28} />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Why metal works in {neighborhood.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{neighborhood.whyMetalWorks}</p>
          </div>
        </div>
      </section>

      {/* Premium materials */}
      <section className="py-14 md:py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <Sparkles className="inline text-cta-gold mb-3" size={28} />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Premium materials we install in {neighborhood.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Architect-grade metal systems specified for the homes that define this neighborhood.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {neighborhood.premiumMaterials.map((mat) => (
              <div
                key={mat}
                className="flex items-start gap-3 bg-background rounded-lg p-5 border border-border"
              >
                <CheckCircle2 className="text-cta-gold mt-0.5 shrink-0" size={20} />
                <span className="text-foreground text-sm leading-relaxed">{mat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local trust signals */}
      <section className="py-14 md:py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Permits & design review",
              desc: `We pull every ${city.name} permit and submit HOA / historic-district packages in-house.`,
            },
            {
              title: "Local crews, no subs",
              desc: "Every install done by W-2 Roofing Friend crews — never subcontracted.",
            },
            {
              title: "Free Bay Area delivery",
              desc: "Panels roll-formed in our shop and delivered to your job site at no charge.",
            },
          ].map(({ title, desc }) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion
        faqs={neighborhood.faqs.map((f) => ({ question: f.q, answer: f.a }))}
        title={`${neighborhood.name} metal roofing FAQ`}
      />

      {/* CTA */}
      <section className="py-14 md:py-16 px-6 lg:px-12 bg-foreground text-background">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ready for a free {neighborhood.name} roof quote?
            </h2>
            <p className="text-background/70 mt-2">
              Talk to a Roofing Friend today — no pressure, no surprise fees.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-background/30 text-background hover:bg-background/10 transition-colors font-medium"
            >
              <Phone size={16} /> {PHONE}
            </a>
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-cta-gold text-btn-primary-fg font-semibold hover:opacity-90 transition-opacity"
            >
              Get a Free {neighborhood.name} Quote
            </a>
          </div>
        </div>
      </section>

      {/* Other neighborhoods in this city */}
      {otherNeighborhoods.length > 0 && (
        <section className="py-14 md:py-16 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              Other {city.name} neighborhoods we serve
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Premium metal roofing across {city.name}'s most distinguished addresses.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {otherNeighborhoods.map((n) => (
                <Link
                  key={n.slug}
                  to={`/locations/${city.slug}/${n.slug}`}
                  className="inline-flex items-center px-5 py-2 rounded-full border border-border bg-muted/40 text-sm text-foreground hover:border-cta-gold hover:text-cta-gold transition-colors"
                >
                  {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <BottomBar />
    </div>
  );
};

export default NeighborhoodPage;
