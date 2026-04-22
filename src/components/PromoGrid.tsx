import promoOffers from "@/assets/promo-offers.jpg";
import promoHeroes from "@/assets/promo-inspection.png";
import promoStandingSeam from "@/assets/slide-standing-seam.jpg";
import promoVeteran from "@/assets/hero-veteran-government-roofing.jpg";

const PromoGrid = () => {
  return (
    <section className="bg-background py-8 md:py-12">
      <div className="w-full px-4 md:px-10 lg:px-12 py-8 space-y-4">
        {/* Top row: two banner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Current Offers */}
          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Current Offers</h3>
              <p className="text-sm text-muted-foreground mt-1">Explore limited-time offers on our vehicles.</p>
              <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img src={promoOffers} alt="Current Offers" loading="lazy" decoding="async" width={768} height={512} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* American Heroes */}
          <div className="relative rounded-lg overflow-hidden bg-muted flex flex-col sm:flex-row min-h-[200px]">
            <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground">Referral Program</h3>
              <p className="text-sm text-muted-foreground mt-1">Refer a friend to West Peak and earn a commission on every completed job.</p>
              <a href="/referral" className="mt-4 inline-block w-fit px-8 py-2.5 rounded border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors">
                Learn More
              </a>
            </div>
            <div className="sm:w-[45%] h-40 sm:h-auto">
              <img src={promoHeroes} alt="Referral Program" loading="lazy" decoding="async" width={768} height={512} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom row: FSD large + Features small */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* FSD card - larger */}
          <div className="md:col-span-3 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img src={promoFsd} alt="Save Water Save Money" loading="lazy" decoding="async" width={960} height={640} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">Save Water, Save Money</h3>
              <p className="text-sm text-white/80 mt-1">Old toilets and sinks waste water. Replace and Save</p>
              <div className="flex gap-3 mt-4">
                <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity">Demo FSD (Supervised)</a>
                <a href="/pipes" className="px-6 py-2.5 rounded text-sm font-medium bg-white text-foreground hover:bg-white/90 transition-colors">Learn More</a>
              </div>
            </div>
          </div>

          {/* Features card - smaller */}
          <div className="md:col-span-2 relative rounded-lg overflow-hidden h-[400px] md:h-[500px]">
            <img src={promoFeatures} alt="California Rebate Programs" loading="lazy" decoding="async" width={640} height={640} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl md:text-3xl font-medium text-white">California Rebate Programs</h3>
              <p className="text-sm text-white/80 mt-1">Get up to $8,000+ back when you upgrade your water heater or plumbing</p>
              <a href="https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-8 py-2.5 rounded text-sm font-medium bg-cta-blue text-white hover:opacity-90 transition-opacity">Discover</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoGrid;
