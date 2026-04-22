import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  image: string;
  imageWebp?: string;
  title: string;
  subtitle?: string;
  primaryCta: string;
  secondaryCta?: string;
  link?: string;
}

interface SecondarySliderProps {
  slides: SlideData[];
}

const SecondarySlider = ({ slides }: SecondarySliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, slidesToScroll: 1, dragFree: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-background flex items-start pt-4 md:pt-6 pb-4">
      <div className="relative w-full px-4 md:px-10 lg:px-12">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((v) => (
              <div key={v.title} className="min-w-0 shrink-0 grow-0 basis-[98%] sm:basis-[70%] lg:basis-[65%] pl-4">
                <div className="relative rounded-lg overflow-hidden aspect-[4/5] lg:aspect-[16/9]">
                  <picture>
                    {v.imageWebp && <source srcSet={v.imageWebp} type="image/webp" />}
                    <img src={v.image} alt={v.title} loading="lazy" decoding="async" width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl md:text-4xl font-medium text-white">{v.title}</h3>
                    {v.subtitle && <p className="text-sm text-white/90 mt-1 underline underline-offset-4">{v.subtitle}</p>}
                    <div className="flex gap-3 mt-5 flex-nowrap">
                      <a href={v.link || "#"} className="px-6 sm:px-8 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity whitespace-nowrap">{v.primaryCta}</a>
                      {v.secondaryCta && (
                        <a href={v.link || "#"} className="px-6 sm:px-8 py-2.5 rounded text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-colors whitespace-nowrap">{v.secondaryCta}</a>
                      )}
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
    </section>
  );
};

export default SecondarySlider;
