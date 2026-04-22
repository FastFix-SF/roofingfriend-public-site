import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  tagline: string;
  backLink?: { label: string; to: string };
  backgroundImage?: string;
  backgroundImageWebp?: string;
  logo?: { src: string; webp?: string; alt: string };
  overlayClassName?: string;
  backgroundImageClassName?: string;
}

const ServiceHero = ({
  title,
  tagline,
  backLink,
  backgroundImage,
  backgroundImageWebp,
  logo,
  overlayClassName,
  backgroundImageClassName,
}: ServiceHeroProps) => (
  <section className="relative text-white pt-24 pb-16 md:pt-32 md:pb-20 px-6 lg:px-12 overflow-hidden">
    {backgroundImage ? (
      <>
        <picture className="absolute inset-0 w-full h-full">
          {backgroundImageWebp && <source srcSet={backgroundImageWebp} type="image/webp" />}
          <img
            src={backgroundImage}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover ${backgroundImageClassName ?? ""}`}
            loading="eager"
            decoding="async"
            // @ts-expect-error fetchpriority is valid HTML
            fetchpriority="high"
            width={1920}
            height={1080}
          />
        </picture>
        <div className={`absolute inset-0 ${overlayClassName ?? "bg-black/60"}`} />
      </>
    ) : (
      <div className="absolute inset-0 bg-foreground" />
    )}
    <div className="relative z-10 max-w-4xl mx-auto">
      {backLink && (
        <Link to={backLink.to} className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-6 transition-colors">
          <ChevronLeft size={16} />
          {backLink.label}
        </Link>
      )}
      {logo && (
        <picture>
          {logo.webp && <source srcSet={logo.webp} type="image/webp" />}
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-16 md:h-20 w-auto mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            loading="eager"
            decoding="async"
          />
        </picture>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">{title}</h1>
      <p className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl">{tagline}</p>
    </div>
  </section>
);

export default ServiceHero;
