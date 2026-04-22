import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/roofing-friend-logo.png";

const navLinks = [
  { label: "Roofing", href: "/commercial-roofing" },
  { label: "Warranty", href: "/warranty" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 lg:px-12 h-16 bg-nav-bg/80 backdrop-blur-md">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          <img 
            src={logo} 
            alt="The Roofing Friend" 
            className="h-9 sm:h-14 w-auto"
          />
          <div className="flex flex-col items-start justify-center">
            <span className="text-nav-text font-bold text-sm sm:text-lg tracking-[0.18em] uppercase leading-none" style={{ fontVariantCaps: 'small-caps' }}>
              Roofing Friend
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
              <span className="block w-4 sm:w-6 h-px bg-cta-gold" />
              <span className="text-cta-gold font-medium text-[8px] sm:text-[10px] tracking-[0.25em] uppercase leading-none whitespace-nowrap">
                Veteran-Built Metal
              </span>
              <span className="block w-4 sm:w-6 h-px bg-cta-gold" />
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-nav-text hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-nav-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-nav-bg/95 backdrop-blur-lg border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-nav-text py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
