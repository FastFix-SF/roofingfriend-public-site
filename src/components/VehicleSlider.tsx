import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "@/components/ui/SmartImage";
import { useBooking } from "@/hooks/useBooking";
import slideStandingSeam from "@/assets/slide-standing-seam.jpg";
import slideStandingSeamWebp from "@/assets/slide-standing-seam.webp";
import slideRPanel from "@/assets/slide-r-panel.jpg";
import slideRPanelWebp from "@/assets/slide-r-panel.webp";
import slideMultiV from "@/assets/slide-multi-v.jpg";
import slideMultiVWebp from "@/assets/slide-multi-v.webp";
import slideTpo from "@/assets/slide-tpo.jpg";
import slideTpoWebp from "@/assets/slide-tpo.webp";

const vehicles = [
  { image: slideStandingSeam, webp: slideStandingSeamWebp, category: "", title: "Standing Seam", subtitle: "Premium Metal Roof · 50+ Year Lifespan", primaryCta: "Get a Quote", secondaryCta: "Portfolio", learnMoreLink: "/commercial-roofing" },
  { image: slideRPanel, webp: slideRPanelWebp, category: "", title: "R-Panel System", subtitle: "Affordable Metal Strength for Homes & Barns", primaryCta: "Get a Quote", secondaryCta: "Portfolio", learnMoreLink: "/commercial-roofing" },
  { image: slideMultiV, webp: slideMultiVWebp, category: "", title: "Multi-V Panel", subtitle: "Architectural Style for Luxury Homes", primaryCta: "Get a Quote", secondaryCta: "Portfolio", learnMoreLink: "/commercial-roofing" },
  { image: slideTpo, webp: slideTpoWebp, category: "", title: "TPO Commercial", subtitle: "Energy-Efficient Flat Roofs for Business", primaryCta: "Get a Quote", secondaryCta: "Portfolio", learnMoreLink: "/commercial-roofing" },
];

const VehicleSlider = () => {
  const { openBooking } = useBooking();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, slidesToScroll: 1, dragFree: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-background flex flex-col items-start pt-4 md:pt-6 pb-4">
      <div className="relative w-full px-4 md:px-10 lg:px-12">
        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="flex">
            {vehicles.map((v, idx) => (
              <div key={v.title} className="min-w-0 shrink-0 grow-0 basis-[98%] sm:basis-[70%] lg:basis-[65%] pl-4">
                <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:aspect-[16/9]">
                  <SmartImage src={v.image} webpSrc={v.webp} alt={v.title} priority={idx === 0} width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-white/90 mt-1 underline underline-offset-4">{v.subtitle}</p>
                    <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5 flex-wrap sm:flex-nowrap">
                      <button onClick={openBooking} className="px-4 sm:px-6 lg:px-8 py-2.5 rounded text-xs sm:text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity whitespace-nowrap">{v.primaryCta}</button>
                      <Link to={v.learnMoreLink} className="px-4 sm:px-6 lg:px-8 py-2.5 rounded text-xs sm:text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-colors whitespace-nowrap">{v.secondaryCta}</Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {canScrollPrev && (
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-sm bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
        )}

        {canScrollNext && (
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-sm bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        )}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 w-full pt-5 pb-2">
        {vehicles.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === selectedIndex ? "bg-foreground" : "bg-foreground/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default VehicleSlider;
