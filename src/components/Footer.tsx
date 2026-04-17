import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";
import logo from "@/assets/west-peak-logo.png";

const Footer = () => {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-[#f8f6f2] border-t-4 border-cta-gold pt-14 pb-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand / Contact */}
          <div className="flex flex-col gap-5">
            <img
              src={logo}
              alt="West Peak Trenchless & Plumbing"
              className="h-14 w-auto self-start"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Innovative Solutions. Lasting Results.<br />No Digging.
            </p>
            <div className="flex flex-col gap-3 text-sm text-foreground">
              <a href="tel:6503798166" className="flex items-center gap-2 hover:text-cta-gold transition-colors">
                <Phone size={14} className="text-muted-foreground" />
                (650) 379-8166
              </a>
              <a href="mailto:servicerequests@westpeak.biz" className="flex items-center gap-2 hover:text-cta-gold transition-colors">
                <Mail size={14} className="text-muted-foreground" />
                servicerequests@westpeak.biz
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                <span>
                  1030 Duane Ave, Santa Clara, CA 95054<br />
                  Santa Clara, CA 95054
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="/trenchless" className="hover:text-cta-gold transition-colors">Trenchless Services</a></li>
              <li><a href="/aging-pipes" className="hover:text-cta-gold transition-colors">Sewer Services</a></li>
              <li><a href="/plumbing" className="hover:text-cta-gold transition-colors">Plumbing Services</a></li>
              <li><a href="/plumbing" className="hover:text-cta-gold transition-colors">Commercial Drain Cleaning</a></li>
              <li><a href="/water-heater" className="hover:text-cta-gold transition-colors">Commercial Water Heater & Replacement</a></li>
              <li><a href="/hydro-jetting" className="hover:text-cta-gold transition-colors">Hydro Jetting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-cta-gold transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-cta-gold transition-colors">Contact</a></li>
              <li><a href="/reviews" className="hover:text-cta-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hours</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock size={14} className="shrink-0" />
                <span>Mon-Fri: 24/7</span>
              </div>
              <div className="pl-[22px]">Sat: 24/7</div>
              <div className="pl-[22px]">Sun: 24/7</div>
              <p className="text-cta-gold font-medium mt-2">
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#f8f6f2] border-t border-border px-6 lg:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © 2026 West Peak Trenchless & Plumbing. All rights reserved. | Licensed & Insured | CA License #1093673
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
