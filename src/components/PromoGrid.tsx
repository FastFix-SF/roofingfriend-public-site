import SmartImage from "@/components/ui/SmartImage";
import { useBooking } from "@/hooks/useBooking";
import promoOffers from "@/assets/promo-offers.jpg";
import promoOffersWebp from "@/assets/promo-offers.webp";
import promoReferralShare from "@/assets/promo-referral-share.jpg";
import promoReferralShareWebp from "@/assets/promo-referral-share.webp";
import promoStandingSeam from "@/assets/slide-standing-seam.jpg";
import promoStandingSeamWebp from "@/assets/slide-standing-seam.webp";
import promoVeteran from "@/assets/hero-veteran-government-roofing.jpg";
import promoVeteranWebp from "@/assets/hero-veteran-government-roofing.webp";

const PromoGrid = () => {
  const { openBooking } = useBooking();
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="w-full px-4 md:px-10 lg:px-12 py-8 space-y-4">
        {/* Top row: two banner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Current Offers */}
          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Current Offers</h3>
              <p className="text-sm text-muted-foreground mt-1">Explore current promotions on metal roofing.</p>
              <button onClick={openBooking} className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
                Learn More
              </button>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <SmartImage src={promoOffers} webpSrc={promoOffersWebp} alt="Current Offers" width={768} height={512} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* American Heroes */}
          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Referral Program</h3>
              <p className="text-sm text-muted-foreground mt-1">Refer a friend to The Roofing Friend and earn a commission on every completed install.</p>
              <a href="/referral" className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <SmartImage src={promoReferralShare} webpSrc={promoReferralShareWebp} alt="Refer a friend, earn a commission on every completed metal roof install" width={768} height={512} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom row: FSD large + Features small */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* FSD card - larger */}
          <div className="md:col-span-3 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <SmartImage src={promoStandingSeam} webpSrc={promoStandingSeamWebp} alt="Built to Outlast Your Mortgage" width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">Built to Outlast Your Mortgage</h3>
              <p className="text-sm text-white/80 mt-1">50+ year lifespan. Class A fire-rated. Hail, wind & wildfire ready.</p>
              <div className="flex gap-3 mt-4">
                <button onClick={openBooking} className="px-6 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity">Get a Free Roof Assessment</button>
                <a href="/commercial-roofing" className="px-6 py-2.5 rounded text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-colors">Why Metal?</a>
              </div>
            </div>
          </div>

          {/* Features card - smaller */}
          <div className="md:col-span-2 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <SmartImage src={promoVeteran} webpSrc={promoVeteranWebp} alt="Veteran-Owned Mission-Driven" width={640} height={640} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">Veteran-Owned. Mission-Driven.</h3>
              <p className="text-sm text-white/80 mt-1">Discipline, integrity, and craftsmanship on every roof we install.</p>
              <a href="/about" className="mt-4 inline-block px-8 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity">Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoGrid;
