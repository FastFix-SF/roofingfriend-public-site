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
import heroContact from "@/assets/hero-contact.jpg";

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
        <title>Contact Us | West Peak Trenchless & Plumbing</title>
        <meta name="description" content="Contact West Peak Trenchless & Plumbing for a free estimate. Call (650) 379-8166 for 24/7 emergency plumbing and trenchless services in the San Francisco Bay Area." />
        <link rel="canonical" href="https://westpeakplumbing.com/contact" />
        <meta property="og:title" content="Contact Us | West Peak Trenchless & Plumbing" />
        <meta property="og:description" content="Get a free estimate. Call (650) 379-8166 for 24/7 emergency plumbing and trenchless services in the Bay Area." />
        <meta property="og:url" content="https://westpeakplumbing.com/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "West Peak Trenchless & Plumbing",
          telephone: "(650) 379-8166",
          email: "servicerequests@westpeak.biz",
          address: { "@type": "PostalAddress", streetAddress: "1030 Duane Ave", addressLocality: "Santa Clara", addressRegion: "CA", postalCode: "95054" },
          geo: { "@type": "GeoCoordinates", latitude: 37.3861, longitude: -121.9550 },
          openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
        })}</script>
      </Helmet>

      <Navbar />
      <ServiceHero title="Contact Us" tagline="Ready to get started? Reach out for a free estimate or emergency service. We are available 24/7." backgroundImage={heroContact} />

      {/* Contact Cards */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <a href="tel:6503798166" className="flex flex-col items-center text-center bg-secondary rounded-lg p-8 hover:shadow-md transition-shadow">
            <Phone size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">(650) 379-8166</p>
            <p className="text-xs text-cta-gold mt-1">24/7 Emergency</p>
          </a>
          <a href="mailto:servicerequests@westpeak.biz" className="flex flex-col items-center text-center bg-secondary rounded-lg p-8 hover:shadow-md transition-shadow">
            <Mail size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">servicerequests@westpeak.biz</p>
          </a>
          <div className="flex flex-col items-center text-center bg-secondary rounded-lg p-8">
            <MapPin size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Address</h3>
            <p className="text-muted-foreground text-sm">1030 Duane Ave<br />Santa Clara, CA 95054</p>
          </div>
        </div>

        {/* Hours + Form */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">Business Hours</h2>
            <div className="space-y-3 text-sm mb-8">
              {["Monday - Friday", "Saturday", "Sunday"].map((day) => (
                <div key={day} className="flex justify-between py-2 border-b border-border">
                  <span className="text-foreground font-medium">{day}</span>
                  <span className="text-muted-foreground">24/7</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-cta-gold font-medium text-sm">
              <Clock size={16} />
              Emergency service available 24/7
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-sm">
              <iframe
                title="West Peak Trenchless & Plumbing location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.331!2d-121.955!3d37.386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z1030+Duane+Ave+Santa+Clara+CA+95054!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Get a Free Estimate</h2>
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
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Describe your project or issue..." rows={4} />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-cta-gold text-btn-primary-fg hover:opacity-90">
                {submitting ? "Sending..." : "Request Estimate"}
              </Button>
            </form>
            <div className="flex items-center gap-4 mt-6">
              <a href="tel:6503798166" className="text-sm font-medium text-cta-gold hover:underline">(650) 379-8166</a>
              <a href="mailto:servicerequests@westpeak.biz" className="text-sm font-medium text-cta-gold hover:underline">Email Us</a>
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
