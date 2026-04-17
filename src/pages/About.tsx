import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Clock, Award, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import ctaAbout from "@/assets/cta-about.jpg";
import heroAbout from "@/assets/hero-about.jpg";

const stats = [
  { value: "5,000+", label: "Projects Completed", sub: "Commercial & residential", icon: Briefcase },
  { value: "15+", label: "Years Experience", sub: "Serving the Bay Area", icon: Award },
  { value: "24/7", label: "Emergency Service", sub: "Available around the clock", icon: Clock },
  { value: "98%", label: "Satisfaction Rate", sub: "Customer satisfaction", icon: Users },
];

const services = [
  { title: "Trenchless Services", desc: "Minimally invasive pipe repair using CIPP, SIPP, and pipe bursting", to: "/trenchless" },
  { title: "Sewer Services", desc: "24/7 emergency sewer response with video inspection and modern repair techniques", to: "/pipes" },
  { title: "Hydro Jetting", desc: "High-pressure water cleaning (1,500–4,000 PSI) for complete clog removal", to: "/hydro-jetting" },
  { title: "Commercial Drain Cleaning", desc: "Professional drain diagnosis with video inspection and preventative maintenance", to: "/plumbing" },
  { title: "Plumbing Services", desc: "Complete plumbing solutions including emergency service and leak detection", to: "/plumbing" },
  { title: "Commercial Water Heater", desc: "Commercial water heater service, repair, and replacement", to: "/water-heater" },
];

const cities = ["Berkeley", "Hayward", "Oakland", "San Francisco", "San Jose", "San Mateo", "Santa Clara", "Palo Alto", "Fremont", "Sunnyvale", "Mountain View", "Redwood City"];

const About = () => (
  <>
    <Helmet>
      <title>About Us | West Peak Trenchless & Plumbing</title>
      <meta name="description" content="Learn about West Peak Trenchless & Plumbing — 15+ years serving the Bay Area with innovative trenchless pipe repair, commercial plumbing, and 24/7 emergency service." />
      <link rel="canonical" href="https://westpeakplumbing.com/about" />
      <meta property="og:title" content="About Us | West Peak Trenchless & Plumbing" />
      <meta property="og:description" content="15+ years serving the Bay Area with innovative trenchless pipe repair, commercial plumbing, and 24/7 emergency service." />
      <meta property="og:url" content="https://westpeakplumbing.com/about" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "West Peak Trenchless & Plumbing",
        description: "Premier provider of trenchless pipe repair and comprehensive plumbing services in the San Francisco Bay Area.",
        telephone: "(650) 379-8166",
        email: "servicerequests@westpeak.biz",
        address: { "@type": "PostalAddress", streetAddress: "1030 Duane Ave", addressLocality: "Santa Clara", addressRegion: "CA", postalCode: "95054" },
        founder: { "@type": "Person", name: "Juan Mejia" },
        foundingDate: "2010",
        areaServed: cities.map(c => ({ "@type": "City", name: c })),
        openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
      })}</script>
    </Helmet>

    <Navbar />
    <ServiceHero title="About West Peak Trenchless & Plumbing" tagline="Innovative Solutions. Lasting Results. No Digging." backgroundImage={heroAbout} />

    {/* Mission */}
    <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-cta-gold uppercase tracking-widest mb-2">Founded by Juan Mejia</p>
        <div className="flex gap-8 flex-wrap mb-6">
          <div><span className="text-3xl font-bold text-foreground">10+</span><p className="text-sm text-muted-foreground">Years in Business</p></div>
          <div><span className="text-3xl font-bold text-foreground">11-25</span><p className="text-sm text-muted-foreground">Team Members</p></div>
        </div>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
          West Peak Trenchless & Plumbing stands as a premier provider of advanced trenchless pipe repair and comprehensive plumbing services throughout the Greater San Francisco Bay Area. With over 15 years of dedicated experience, we are committed to delivering swift, precise, and reliable solutions for both commercial and residential clients.
        </p>
        <ul className="space-y-3">
          {[
            "Trenchless options that reduce digging and disruption",
            "24/7 emergency sewer and plumbing response",
            "Video camera inspection for accurate diagnosis",
            "Hydro jetting with 1,500–4,000 PSI capability",
            "15+ years experience with commercial and residential systems",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-foreground">
              <CheckCircle2 size={18} className="text-cta-gold mt-0.5 shrink-0" />
              <span className="text-sm md:text-base">{item}</span>
            </li>
          ))}
        </ul>
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
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3 text-center">Our Services</h2>
        <p className="text-muted-foreground text-center mb-10">Comprehensive solutions tailored to your needs</p>
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
        <p className="text-muted-foreground mb-8">Proudly serving communities across the Greater Bay Area</p>
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <span key={city} className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm">{city}</span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20 px-6 lg:px-12 relative overflow-hidden text-white text-center">
      <img src={ctaAbout} alt="Plumbing service van at California home" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-white/70 mb-8">Contact us today for a free estimate on any plumbing or trenchless service.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="tel:6503798166" className="inline-flex items-center gap-2 px-8 py-3 rounded bg-cta-gold text-btn-primary-fg font-medium hover:opacity-90 transition-all">
            Call (650) 379-8166
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
