import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import heroContact from "@/assets/hero-contact-v2.jpg";
import heroContactWebp from "@/assets/hero-contact-v2.webp";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Contact | The Roofing Friend</title>
        <meta name="description" content="Contact The Roofing Friend for a free metal roof assessment. Call (510) 999-7663 for premium standing seam, R-Panel, Multi-V & TPO roofing across the SF Bay Area." />
        <link rel="canonical" href="https://theroof.info/contact" />
        <link rel="preload" as="image" href={heroContactWebp} type="image/webp" fetchPriority="high" />
        <meta property="og:title" content="Contact | The Roofing Friend" />
        <meta property="og:description" content="Get a free roof assessment. Call (510) 999-7663 for premium metal roofing across the San Francisco Bay Area." />
        <meta property="og:url" content="https://theroof.info/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "The Roofing Friend",
          telephone: "(510) 999-7663",
          email: "info@theroof.info",
          url: "https://theroof.info",
          address: { "@type": "PostalAddress", addressLocality: "San Francisco Bay Area", addressRegion: "CA", addressCountry: "US" },
          openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" },
        })}</script>
      </Helmet>

      <Navbar />
      <ServiceHero title="Contact Us" tagline="Ready to get started? Reach out for a free roof assessment or 24/7 storm-damage response." backgroundImage={heroContact} backgroundImageWebp={heroContactWebp} />

      {/* Contact Cards */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <a href="tel:5109997663" className="flex flex-col items-center text-center bg-secondary rounded-lg p-8 hover:shadow-md transition-shadow">
            <Phone size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">(510) 999-7663</p>
            <p className="text-xs text-cta-gold mt-1">24/7 Emergency</p>
          </a>
          <a href="mailto:info@theroof.info" className="flex flex-col items-center text-center bg-secondary rounded-lg p-8 hover:shadow-md transition-shadow">
            <Mail size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">info@theroof.info</p>
          </a>
          <div className="flex flex-col items-center text-center bg-secondary rounded-lg p-8">
            <MapPin size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
            <p className="text-muted-foreground text-sm">San Francisco Bay Area<br />Serving 13+ locations</p>
          </div>
        </div>

        {/* Hours + Form */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Business Hours</h2>
            <div className="space-y-3 text-sm mb-8">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-foreground font-medium">Monday – Friday</span>
                <span className="text-muted-foreground">8 AM – 4 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-foreground font-medium">Saturday – Sunday</span>
                <span className="text-muted-foreground">By appointment</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-foreground font-medium">Emergency Storm Response</span>
                <span className="text-muted-foreground">24/7</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-cta-gold font-medium text-sm">
              <Clock size={16} />
              Active leak? Call us 24/7 — we'll tarp it tonight.
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Get a Free Roof Assessment</h2>
            <p className="text-muted-foreground text-sm mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(555) 555-5555" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Tell us about your roof — type, size, timeline..." rows={4} />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-cta-gold text-btn-primary-fg hover:opacity-90">
                {submitting ? "Sending..." : "Request Assessment"}
              </Button>
            </form>
            <div className="flex items-center gap-4 mt-6">
              <a href="tel:5109997663" className="text-sm font-medium text-cta-gold hover:underline">(510) 999-7663</a>
              <a href="mailto:info@theroof.info" className="text-sm font-medium text-cta-gold hover:underline">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomBar />
    </>
  );
};

export default Contact;
