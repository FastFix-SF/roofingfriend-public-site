import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

interface HeroCaption {
  text: string;
  startTime: number;
  endTime?: number;
}

interface HeroSlide {
  image: string;
  video?: string;
  audio?: boolean;
  title: string;
  subtitle?: string;
  primaryCta: string;
  secondaryCta?: string;
  primaryLink?: string;
  secondaryLink?: string;
  textColor?: "light" | "dark";
  captions?: HeroCaption[];
}

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection = ({ slides }: HeroSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [videoReady, setVideoReady] = useState<Record<number, boolean>>({});
  const videoRefs = useState<Record<number, HTMLVideoElement | null>>(() => ({}))[0];
  const [elapsed, setElapsed] = useState(0);
  const [muted, setMuted] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const idx = emblaApi.selectedScrollSnap();
    setSelectedIndex(idx);
    setElapsed(0);
    // Auto-mute when leaving any video slide
    setMuted(true);
    Object.entries(videoRefs).forEach(([i, v]) => {
      if (v) v.muted = true;
    });
  }, [emblaApi, videoRefs]);

  const toggleMute = () => {
    const v = videoRefs[selectedIndex];
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (!next) {
      v.play().catch(() => {});
    }
    setMuted(next);
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  // Sync captions to video currentTime so they loop with the video
  useEffect(() => {
    const slide = slides[selectedIndex];
    if (!slide?.captions?.length) return;
    const video = videoRefs[selectedIndex];
    if (video) {
      const id = setInterval(() => setElapsed(video.currentTime), 100);
      return () => clearInterval(id);
    }
    // Fallback timer if no video
    const id = setInterval(() => setElapsed(p => +(p + 0.1).toFixed(1)), 100);
    return () => clearInterval(id);
  }, [selectedIndex, slides, videoRefs]);

  const currentCaption = (() => {
    const captions = slides[selectedIndex]?.captions;
    if (!captions?.length) return null;
    for (let i = captions.length - 1; i >= 0; i--) {
      const c = captions[i];
      if (elapsed >= c.startTime && (!c.endTime || elapsed <= c.endTime)) return c;
    }
    return null;
  })();

  return (
    <section className="relative overflow-hidden" style={{ height: "85vh" }}>
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide, i) => {
            const textClass = (slide.textColor ?? "light") === "light" ? "text-hero-text" : "text-hero-text-dark";
            return (
              <div key={i} className="relative min-w-0 shrink-0 grow-0 basis-full h-full">
                {!slide.video && (
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width={1920}
                    height={1080}
                  />
                )}
                {slide.video && (
                  <video
                    ref={el => { videoRefs[i] = el; }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onCanPlay={() => setVideoReady(prev => ({ ...prev, [i]: true }))}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady[i] ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <source src={slide.video.replace('.mp4', '.webm')} type="video/webm" />
                    <source src={slide.video} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 hero-overlay" />

                <div className="relative z-10 flex flex-col items-center text-center pt-28 md:pt-32 px-4">
                  <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight ${textClass}`}>
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className={`mt-2 text-base md:text-lg font-light ${textClass} opacity-90`}>
                      {slide.subtitle}
                    </p>
                  )}
                  <div className="flex flex-row items-center gap-2 md:gap-3 mt-4 w-full max-w-lg text-xs md:text-sm">
                    <a
                      href={slide.primaryLink || "https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D"}
                      {...((slide.primaryLink || "").startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="w-full sm:w-auto flex-1 text-center px-6 md:px-12 py-2.5 md:py-3 rounded font-medium bg-cta-gold text-btn-primary-fg hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] text-xs md:text-sm"
                    >
                      {slide.primaryCta}
                    </a>
                    {slide.secondaryCta && (
                      <a
                        href={slide.secondaryLink || "#"}
                        className="w-full sm:w-auto flex-1 text-center px-6 md:px-12 py-2.5 md:py-3 rounded font-medium bg-btn-secondary-bg/80 text-btn-secondary-fg backdrop-blur-sm hover:bg-btn-secondary-bg transition-colors text-xs md:text-sm"
                      >
                        {slide.secondaryCta}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Captions overlay */}
      {slides[selectedIndex]?.captions?.length && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
          <div
            className={`px-8 py-3 md:px-12 md:py-4 rounded-lg bg-black/70 backdrop-blur-sm transition-opacity duration-500 ${currentCaption ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className="text-cta-gold text-sm md:text-lg lg:text-2xl font-semibold whitespace-nowrap">
              {currentCaption?.text ?? ""}
            </p>
          </div>
        </div>
      )}

      {/* Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-lg bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-lg bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === selectedIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
