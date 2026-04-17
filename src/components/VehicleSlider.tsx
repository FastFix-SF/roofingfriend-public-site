import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slideSedan from "@/assets/slide-sedan.jpg";
import slideSuv from "@/assets/slide-suv.jpg";
import slideHydroJetter from "@/assets/slide-hydro-jetter.png";
import slideSports from "@/assets/slide-sports.jpg";
import slideWaterHeater from "@/assets/slide-water-heater.png";

const vehicles = [
  { image: slideSedan, category: "", title: "Trenchless", subtitle: "Fix your Plumbing without Demolition", primaryCta: "Book Now", secondaryCta: "Learn More", learnMoreLink: "/trenchless" },
  { image: slideWaterHeater, category: "", title: "Water Heater", subtitle: "Repair · Replace · Upgrade · Rebates", primaryCta: "Book Now", secondaryCta: "Learn More", learnMoreLink: "/water-heater" },
  { image: slideHydroJetter, category: "", title: "Hydro Jetting", subtitle: "Remove Tree Roots in seconds", primaryCta: "Book Now", secondaryCta: "Learn More", learnMoreLink: "/hydro-jetting" },
  { image: slideSports, category: "", title: "Plumbing", subtitle: "Better for New Constructions", primaryCta: "Book Now", secondaryCta: "Learn More", learnMoreLink: "/plumbing" },
];

const VehicleSlider = () => {
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
            {vehicles.map((v) => (
              <div key={v.title} className="min-w-0 shrink-0 grow-0 basis-[98%] sm:basis-[70%] lg:basis-[65%] pl-4">
                <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:aspect-[16/9]">
                  <img src={v.image} alt={v.title} loading="eager" decoding="async" fetchPriority="high" width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl md:text-4xl font-medium text-white">{v.title}</h3>
                    <p className="text-sm text-white/90 mt-1 underline underline-offset-4">{v.subtitle}</p>
                    <div className="flex gap-3 mt-5 flex-nowrap">
                      <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity whitespace-nowrap">{v.primaryCta}</a>
                      <Link to={v.learnMoreLink} className="px-6 sm:px-8 py-2.5 rounded text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-colors whitespace-nowrap">{v.secondaryCta}</Link>
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
