import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";
import logo from "@/assets/roofing-friend-logo.png";
import logoWebp from "@/assets/roofing-friend-logo.webp";
import { cities } from "@/lib/cities-data";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#f8f6f2] border-t-4 border-cta-gold pt-14 pb-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand / Contact */}
          <div className="flex flex-col gap-5">
            <picture className="self-start">
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logo}
                alt="The Roofing Friend"
                width={120}
                height={120}
                loading="lazy"
                decoding="async"
                className="h-14 w-auto"
              />
            </picture>
            <div>
              <p className="text-foreground font-semibold text-base">The Roofing Friend</p>
              <p className="text-cta-gold text-sm font-medium tracking-wide uppercase mt-0.5">We Can, We Will</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for premium metal roofing solutions across the San Francisco Bay Area. Licensed, insured, and committed to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-cta-gold transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-cta-gold transition-colors">About Us</a></li>
              <li><a href="/" className="hover:text-cta-gold transition-colors">Projects</a></li>
              <li><a href="/" className="hover:text-cta-gold transition-colors">Material Store</a></li>
              <li><a href="/contact" className="hover:text-cta-gold transition-colors">Contact</a></li>
              <li><a href="/contact" className="hover:text-cta-gold transition-colors">Get Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-cta-gold transition-colors">Metal Roof Installation</a></li>
              <li><a href="/" className="hover:text-cta-gold transition-colors">Roof Repair & Maintenance</a></li>
              <li><a href="/" className="hover:text-cta-gold transition-colors">Standing Seam Systems</a></li>
              <li><a href="/" className="hover:text-cta-gold transition-colors">R-Panel Installation</a></li>
              <li><a href="/commercial-roofing" className="hover:text-cta-gold transition-colors">Commercial Roofing</a></li>
              <li><a href="/" className="hover:text-cta-gold transition-colors">Residential Roofing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="flex flex-col gap-3 text-sm text-foreground">
              <a href="tel:5109997663" className="flex items-start gap-2 hover:text-cta-gold transition-colors">
                <Phone size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                <span className="flex flex-col">
                  (510) 999-7663
                  <span className="text-cta-gold text-xs font-medium">24/7 Emergency Service</span>
                </span>
              </a>
              <a href="mailto:info@theroof.info" className="flex items-center gap-2 hover:text-cta-gold transition-colors">
                <Mail size={14} className="text-muted-foreground" />
                info@theroof.info
              </a>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>
                  San Francisco Bay Area<br />
                  Serving 13+ locations
                </span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock size={14} className="mt-0.5 shrink-0" />
                <span>
                  Mon - Fri: 8AM - 4PM<br />
                  Weekends: Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
          <h3 className="text-center font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            Service Areas
          </h3>
          <p className="text-center text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            {cities.map((city, i) => (
              <span key={city.slug}>
                <a
                  href={`/locations/${city.slug}`}
                  className="hover:text-cta-gold transition-colors"
                >
                  {city.name}
                </a>
                {i < cities.length - 1 && <span className="text-cta-gold/60 mx-2">·</span>}
              </span>
            ))}
          </p>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#f8f6f2] border-t border-border px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © 2026 The Roofing Friend. All rights reserved. | Licensed & Insured | CA License #1067709
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a
              href="https://fastfix.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cta-gold text-btn-primary-fg font-semibold text-[11px] tracking-wide uppercase hover:opacity-90 transition-all"
            >
              <Zap size={12} />
              Powered by FastFix.AI
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
