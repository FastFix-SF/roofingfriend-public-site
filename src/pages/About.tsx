import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Clock, Award, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import { cities } from "@/lib/cities-data";
import ctaAbout from "@/assets/cta-about.jpg";
import heroCrew from "@/assets/about-crew.jpg";
import heroCrewWebp from "@/assets/about-crew.webp";
import aboutJobsite from "@/assets/about-team-jobsite.jpg";
import aboutJobsiteWebp from "@/assets/about-team-jobsite.webp";
import roofingFriendLogo from "@/assets/roofing-friend-logo.png";
import roofingFriendLogoWebp from "@/assets/roofing-friend-logo.webp";

const stats = [
  { value: "500+", label: "Bay Area Roofs", sub: "Residential, commercial & government", icon: Briefcase },
  { value: "15+", label: "Years Experience", sub: "Premium metal roofing expertise", icon: Award },
  { value: "24/7", label: "Emergency Service", sub: "Storm & leak response", icon: Clock },
  { value: "100%", label: "Veteran-Owned", sub: "Discipline & integrity on every job", icon: Users },
];

const services = [
  { title: "Standing Seam Metal", desc: "Premium architectural standing seam — 50+ year lifespan, Class A fire rating", to: "/commercial-roofing" },
  { title: "R-Panel Roofing", desc: "Affordable, durable metal panels for residential, agricultural and barn roofs", to: "/commercial-roofing" },
  { title: "Multi-V Panel", desc: "Architectural style metal roofing for high-end residential homes", to: "/commercial-roofing" },
  { title: "TPO Commercial", desc: "Energy-efficient single-ply membrane for flat commercial roofs", to: "/commercial-roofing" },
  { title: "Roof Repair & Restoration", desc: "Storm damage, leak repair, and re-coats for existing metal and TPO roofs", to: "/commercial-roofing" },
  { title: "Veteran & Government Projects", desc: "Spec-grade metal roofing for federal, military and municipal facilities", to: "/commercial-roofing" },
];

const About = () => (
  <>
    <Helmet>
      <title>About | The Roofing Friend</title>
      <meta name="description" content="The Roofing Friend — veteran-owned California metal roofing contractor serving the San Francisco Bay Area with standing seam, R-Panel, Multi-V & TPO systems." />
      <link rel="canonical" href="https://theroof.info/about" />
      <link rel="preload" as="image" href={heroCrewWebp} type="image/webp" fetchPriority="high" />
      <meta property="og:title" content="About | The Roofing Friend" />
      <meta property="og:description" content="Veteran-owned California metal roofing contractor serving the San Francisco Bay Area." />
      <meta property="og:url" content="https://theroof.info/about" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        name: "The Roofing Friend",
        description: "Veteran-owned California metal roofing contractor — standing seam, R-Panel, Multi-V and TPO systems across the San Francisco Bay Area.",
        telephone: "(415) 697-1849",
        email: "info@theroof.info",
        url: "https://theroof.info",
        address: { "@type": "PostalAddress", addressLocality: "San Francisco Bay Area", addressRegion: "CA", addressCountry: "US" },
        areaServed: cities.map(c => ({ "@type": "City", name: c.name })),
        openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
      })}</script>
    </Helmet>

    <Navbar />
    <ServiceHero
      title="About The Roofing Friend"
      tagline="We Can, We Will. Premium metal roofing across the SF Bay Area — veteran-owned, California-licensed."
      backgroundImage={heroCrew}
      backgroundImageWebp={heroCrewWebp}
      backgroundImageClassName="object-top"
      overlayClassName="bg-gradient-to-tr from-black/85 via-black/60 to-black/40"
      logo={{ src: roofingFriendLogo, webp: roofingFriendLogoWebp, alt: "The Roofing Friend logo" }}
    />

    {/* Mission */}
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-medium text-cta-gold uppercase tracking-widest mb-2">Veteran-Built · California-Licensed #1067709</p>
          <div className="flex gap-8 flex-wrap mb-6">
            <div><span className="text-3xl font-bold text-foreground">15+</span><p className="text-sm text-muted-foreground">Years in Business</p></div>
            <div><span className="text-3xl font-bold text-foreground">13+</span><p className="text-sm text-muted-foreground">Bay Area Locations</p></div>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
            The Roofing Friend is a veteran-owned California roofing contractor specializing in premium metal roof systems across the San Francisco Bay Area. From standing seam on luxury Marin estates to TPO on retail centers and spec-grade installs for government facilities, we deliver Awwwards-level craftsmanship on every roof — backed by industry-leading warranties up to 50 years.
          </p>
          <ul className="space-y-3">
            {[
              "Standing seam, R-Panel, Multi-V and TPO metal roof systems",
              "Up to 50-year manufacturer warranties on residential",
              "Class A fire rating — non-combustible WUI-zone protection",
              "Title 24 cool-roof certified panels for PG&E rebates",
              "Veteran-owned · California-licensed · GSA-friendly",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 size={18} className="text-cta-gold mt-0.5 shrink-0" />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="lg:order-last">
          <picture>
            <source srcSet={aboutJobsiteWebp} type="image/webp" />
            <img
              src={aboutJobsite}
              alt="The Roofing Friend crew installing a standing seam metal roof on a Bay Area home at golden hour"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1200}
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </picture>
          <figcaption className="mt-3 text-sm text-muted-foreground italic text-center">
            The Roofing Friend crew — on the job in the Bay Area.
          </figcaption>
        </figure>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center">By the Numbers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-background rounded-lg p-6 text-center shadow-sm">
              <s.icon size={28} className="mx-auto text-cta-gold mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-foreground">{s.value}</p>
              <p className="font-medium text-foreground text-sm mt-1">{s.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 text-center">Our Roofing Services</h2>
        <p className="text-muted-foreground text-center mb-10">Premium metal roofing systems for every Bay Area property</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group block bg-secondary rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-foreground group-hover:text-cta-gold transition-colors mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Coverage */}
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-medium text-cta-gold uppercase tracking-widest mb-2">Coverage Area</p>
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Where We Serve</h2>
        <p className="text-muted-foreground mb-8">Proudly roofing communities across the Greater Bay Area</p>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.slug}
              to={`/locations/${city.slug}`}
              className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm hover:text-cta-gold transition-colors"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
      <img src={ctaAbout} alt="The Roofing Friend crew installing a standing seam metal roof" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-white/70 mb-8">Contact us today for a free roof assessment on any metal roofing project.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:+14156971849" className="inline-flex items-center gap-2 px-8 py-3 rounded bg-cta-gold text-btn-primary-fg font-medium hover:opacity-90 transition-all">
            Call (415) 697-1849
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded border border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    <Footer />
    <BottomBar />
  </>
);

export default About;
