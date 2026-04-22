import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, Phone, Truck, Users, FileCheck, Building2, Wrench, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";
import ServiceHero from "@/components/ServiceHero";
import { getCityBySlug, cities } from "@/lib/cities-data";
import heroCommercialRoofing from "@/assets/hero-commercial-roofing.jpg";
import heroCommercialRoofingWebp from "@/assets/hero-commercial-roofing.webp";

const services = [
  { name: "Standing Seam", desc: "Concealed-fastener architectural panels — clean lines, 50+ year lifespan.", icon: Building2 },
  { name: "R-Panel", desc: "Cost-effective exposed-fastener panels for ag, industrial, and budget-driven builds.", icon: Wrench },
  { name: "Multi-V", desc: "Versatile residential profile that works on any roof pitch.", icon: ShieldCheck },
  { name: "TPO Membrane", desc: "Cool-roof rated single-ply for low-slope commercial roofs.", icon: Zap },
];

const QUOTE_URL = "https://booking.servicetitan.com/";
const PHONE = "(510) 999-7663";
const PHONE_HREF = "tel:5109997663";

const CityPage = () => {
  const { city: slug } = useParams<{ city: string }>();
  const city = slug ? getCityBySlug(slug) : undefined;

  if (!city) return <Navigate to="/404" replace />;

  const canonicalUrl = `https://theroof.info/locations/${city.slug}`;
  const title = `Metal Roofing in ${city.name} | The Roofing Friend`;
  const description = `${city.tagline}. Premium standing seam, R-Panel, and TPO roofing installed in ${city.name} by The Roofing Friend — licensed, insured, CA #1067709.`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "The Roofing Friend",
    image: "https://theroof.info/og-image.jpg",
    telephone: PHONE,
    email: "info@theroof.info",
    url: canonicalUrl,
    areaServed: { "@type": "City", name: city.name },
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    priceRange: "$$$",
  };

  const nearby = city.nearbyAreas
    .map((s) => cities.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preload" as="image" href={heroCommercialRoofingWebp} type="image/webp" fetchPriority="high" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Navbar />

      <ServiceHero
        title={`Metal Roofing in ${city.name}`}
        tagline={city.tagline}
        backLink={{ label: "All Service Areas", to: "/" }}
        backgroundImage={heroCommercialRoofing}
        backgroundImageWebp={heroCommercialRoofingWebp}
      />

      {/* Local intro */}
      <section className="py-16 md:py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-wider text-cta-gold font-semibold mb-3">{city.region}</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-5">
              Why metal roofs work for {city.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{city.intro}</p>
          </div>
          <ul className="flex flex-col gap-4">
            {city.localFacts.map((fact) => (
              <li key={fact} className="flex items-start gap-3 bg-muted/40 rounded-lg p-4 border border-border">
                <CheckCircle2 className="text-cta-gold mt-0.5 shrink-0" size={20} />
                <span className="text-foreground text-sm leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center mb-3">
            Roofing services in {city.name}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            One licensed contractor for every metal roof system — installed by local Bay Area crews, never subcontracted.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ name, desc, icon: Icon }) => (
              <Link
                key={name}
                to="/commercial-roofing"
                className="group bg-background border border-border rounded-xl p-6 hover:border-cta-gold hover:shadow-md transition-all"
              >
                <Icon className="text-cta-gold mb-4" size={28} />
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-cta-gold transition-colors">{name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="py-16 md:py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6">
          {[
            { icon: Truck, title: "Free Bay Area delivery", desc: "Panels roll-formed in our shop and delivered to your job site at no charge." },
            { icon: Users, title: "Local crews, no subs", desc: "Every install done by W-2 Roofing Friend crews — never subcontracted." },
            { icon: FileCheck, title: `${city.name} permits handled`, desc: "We pull, schedule, and pass every inspection. You sign at the end." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cta-gold/10 text-cta-gold mb-4">
                <Icon size={26} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="py-14 md:py-16 px-6 lg:px-12 bg-foreground text-background">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ready for a free {city.name} roof quote?
            </h2>
            <p className="text-background/70 mt-2">Talk to a Roofing Friend today — no pressure, no surprise fees.</p>
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
              Get a Free {city.name} Quote
            </a>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-14 md:py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">Nearby service areas</h2>
          <p className="text-sm text-muted-foreground mb-6">We also roof these communities near {city.name}.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                to={`/locations/${n.slug}`}
                className="inline-flex items-center px-5 py-2 rounded-full border border-border bg-muted/40 text-sm text-foreground hover:border-cta-gold hover:text-cta-gold transition-colors"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BottomBar />
    </div>
  );
};

export default CityPage;
