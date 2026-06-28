import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock, Award, Star, ShieldCheck, Zap } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import BottomBar from "@/components/BottomBar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import heroContact from "@/assets/hero-contact-v2.jpg";
import heroContactWebp from "@/assets/hero-contact-v2.webp";
import { supabase, ROOFINGFRIEND_TENANT_ID } from "@/integrations/supabase/client";
import { companyConfig } from "@/config/company";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
    projectType: "residential",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Deliver the contact lead into the UltimateCRM (fedl) under the Roofing
    // Friend tenant. create-crm-lead writes the lead + sends the tenant's
    // confirmation/notification SMS + email.
    try {
      await supabase.functions.invoke("create-crm-lead", {
        headers: { "x-tenant-id": ROOFINGFRIEND_TENANT_ID },
        body: {
          tenantId: ROOFINGFRIEND_TENANT_ID,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: "",
          service: "Contact form",
          referralSource: "website_contact",
          message: form.message.trim(),
          projectType: form.projectType,
          projectDescription: form.message.trim(),
          preferredContact: form.preferredContact as "phone" | "email",
          qualificationData: {
            preferred_contact: form.preferredContact,
            project_type: form.projectType,
          },
        },
      });
      toast.success("Thanks! We'll contact you shortly via your preferred method.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredContact: "email",
        projectType: "residential",
      });
    } catch {
      toast.error(`Something went wrong. Please call us at ${companyConfig.phone}.`);
    } finally {
      setSubmitting(false);
    }
  };

  const stats = [
    { icon: Award, value: "500+", label: "Projects Completed" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" },
    { icon: ShieldCheck, value: "25-Year", label: "Warranty" },
    { icon: Zap, value: "Same-Day", label: "Response Time" },
  ];

  return (
    <>
      <Helmet>
        <title>Contact | The Roofing Friend</title>
        <meta name="description" content="Book a service with The Roofing Friend — call or text (510) 916-2408 anytime. 500+ projects, 4.9/5 rating, same-day response across the SF Bay Area." />
        <link rel="canonical" href="https://theroof.info/contact" />
        <link rel="preload" as="image" href={heroContactWebp} type="image/webp" fetchPriority="high" />
        <meta property="og:title" content="Contact | The Roofing Friend" />
        <meta property="og:description" content="Call or text anytime at (510) 916-2408. Same-day response, 500+ projects completed across the San Francisco Bay Area." />
        <meta property="og:url" content="https://theroof.info/contact" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "The Roofing Friend",
          telephone: "(510) 916-2408",
          email: "roofingfriend@gmail.com",
          url: "https://theroof.info",
          description: "Call or text anytime. 500+ projects completed, 4.9/5 customer rating, 25-year warranty, same-day response across the San Francisco Bay Area.",
          address: { "@type": "PostalAddress", addressLocality: "San Francisco Bay Area", addressRegion: "CA", addressCountry: "US" },
          openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
        })}</script>
      </Helmet>

      <Navbar />
      <ServiceHero title="Contact Us" tagline="Ready to get started? Reach out for a free roof assessment or 24/7 storm-damage response." backgroundImage={heroContact} backgroundImageWebp={heroContactWebp} />

      {/* Contact Cards */}
      <section className="py-16 md:py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
          <a href="tel:+15109162408" className="flex flex-col items-center text-center bg-secondary rounded-lg p-8 hover:shadow-md transition-shadow">
            <Phone size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Phone</h3>
            <p className="text-muted-foreground text-sm">(510) 916-2408</p>
            <p className="text-xs text-cta-gold mt-1">Call or text anytime</p>
          </a>
          <a href="mailto:roofingfriend@gmail.com" className="flex flex-col items-center text-center bg-secondary rounded-lg p-8 hover:shadow-md transition-shadow">
            <Mail size={28} className="text-cta-gold mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <p className="text-muted-foreground text-sm">roofingfriend@gmail.com</p>
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
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Book a Service</h2>
            <p className="text-muted-foreground text-sm mb-6">Fill out a few details and we'll contact you instantly.</p>
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
                <span className="text-sm font-medium text-foreground mb-2 block">Preferred Contact Method</span>
                <RadioGroup
                  value={form.preferredContact}
                  onValueChange={(v) => setForm({ ...form, preferredContact: v })}
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="email" id="contact-email" />
                    <Label htmlFor="contact-email" className="cursor-pointer">Email</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="text" id="contact-text" />
                    <Label htmlFor="contact-text" className="cursor-pointer">Text Message</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <span className="text-sm font-medium text-foreground mb-2 block">Project Type</span>
                <RadioGroup
                  value={form.projectType}
                  onValueChange={(v) => setForm({ ...form, projectType: v })}
                  className="flex flex-wrap gap-x-6 gap-y-2"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="residential" id="type-residential" />
                    <Label htmlFor="type-residential" className="cursor-pointer">Residential</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="commercial" id="type-commercial" />
                    <Label htmlFor="type-commercial" className="cursor-pointer">Commercial</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="repair" id="type-repair" />
                    <Label htmlFor="type-repair" className="cursor-pointer">Service or Repair</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required placeholder="Tell us about your roof — type, size, timeline..." rows={4} />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-cta-gold text-btn-primary-fg hover:opacity-90">
                {submitting ? "Sending..." : "Book Service"}
              </Button>
            </form>
            <div className="flex items-center gap-4 mt-6">
              <a href="tel:+15109162408" className="text-sm font-medium text-cta-gold hover:underline">(510) 916-2408</a>
              <a href="mailto:roofingfriend@gmail.com" className="text-sm font-medium text-cta-gold hover:underline">Email Us</a>
            </div>
          </div>
        </div>

        {/* Trust Stats Strip */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center bg-secondary rounded-lg p-6">
                <Icon size={28} className="text-cta-gold mb-3" />
                <div className="text-2xl font-bold text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BottomBar />
    </>
  );
};

export default Contact;
