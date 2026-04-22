import { Helmet } from "react-helmet-async";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VehicleSlider from "@/components/VehicleSlider";
import PromoGrid from "@/components/PromoGrid";
import SecondarySlider from "@/components/SecondarySlider";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";
import heroFsd from "@/assets/hero-fsd.jpg";
import heroCommercial from "@/assets/hero-commercial-trenchless.jpg";
import heroIndustrial from "@/assets/hero-industrial-trenchless.jpg";
import heroVeteranGovernment from "@/assets/hero-veteran-government-roofing.jpg";
import heroCommercialRoofing from "@/assets/hero-commercial-roofing.jpg";

import warrantyCommercial from "@/assets/warranty-commercial.jpg";
import warrantyIndustrial from "@/assets/warranty-industrial.jpg";
import warrantyResidential from "@/assets/warranty-residential.jpg";

const LazyChargingSection = React.lazy(() => import("@/components/ChargingSection"));

const secondarySlides = [
  { image: warrantyResidential, title: "Residential", subtitle: "Lifetime Metal Roof Warranty · Standing seam built to outlast your mortgage", primaryCta: "Learn More", link: "/warranty/residential" },
  { image: warrantyCommercial, title: "Commercial", subtitle: "25-Year System Warranty · Standing seam & TPO for retail, restaurants & warehouses", primaryCta: "Learn More", link: "/warranty/commercial" },
  { image: warrantyIndustrial, title: "Government & Public Sector", subtitle: "Spec-Grade Coverage · Veteran-owned, GSA-friendly metal roofing for federal & municipal projects", primaryCta: "Learn More", link: "/warranty/industrial" },
];

const heroSlides = [
  { image: heroFsd, video: "/videos/hero-roof.mp4", audio: true, title: "From Shingles to Standing Seam", subtitle: "", primaryCta: "Book Service", secondaryCta: "Learn More", textColor: "light" as const, captions: [
    { text: "Wife: I don't like our shingle roof anymore…", startTime: 0, endTime: 2.5 },
    { text: "Wife: It feels so generic.", startTime: 2.6, endTime: 4.8 },
    { text: "Wife: I want a metal roof — like the ones on Instagram.", startTime: 4.9, endTime: 8.2 },
    { text: "Husband: Yes — let's do it.", startTime: 8.3, endTime: 10.2 },
    { text: "Premium standing seam metal roof installed.", startTime: 10.3, endTime: 12.6 },
    { text: "Wife: It feels like a brand new house.", startTime: 12.7, endTime: 15 },
  ] },
  { image: heroCommercialRoofing, title: "Metal Roofing for Commercial", subtitle: "Standing seam roofs for retail centers, restaurants, warehouses & big-box", primaryCta: "Get a Commercial Quote", primaryLink: "https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D", secondaryCta: "Learn More", secondaryLink: "/commercial-roofing", textColor: "light" as const },
    { image: heroVeteranGovernment, title: "Veteran-Owned. Government-Trusted.", subtitle: "Standing seam metal roofs for military bases, federal facilities & public sector projects", primaryCta: "Request a Government Quote", primaryLink: "https://book.servicetitan.com/vmadxb0e83zkwoi8thap9g0p?rwg_token=AFd1xnHm_fIKuH_JYBwfBgvD1oSa4EnqOc2Um2NB4Cgkn_2pX-5T7KQ3kOKSNULOarVKezuLXXDkYj-ESPEDDkWkUNuJfb4n4g%3D%3D", secondaryCta: "Learn More", secondaryLink: "/commercial-roofing", textColor: "light" as const },
];

const ChargingSectionWrapper = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: "80vh" }}>
      {visible && (
        <Suspense fallback={<div className="h-[80vh] bg-muted animate-pulse" />}>
          <LazyChargingSection />
        </Suspense>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>West Peak Trenchless & Plumbing | Bay Area 24/7 Plumbing Services</title>
        <meta name="description" content="West Peak Trenchless & Plumbing — trenchless pipe repair, sewer services, hydro jetting, water heater installation, and 24/7 emergency plumbing in the San Francisco Bay Area." />
        <link rel="canonical" href="https://westpeakplumbing.com/" />
        <meta property="og:title" content="West Peak Trenchless & Plumbing | Bay Area 24/7 Plumbing Services" />
        <meta property="og:description" content="Trenchless pipe repair, sewer services, hydro jetting, water heater installation, and 24/7 emergency plumbing in the San Francisco Bay Area." />
        <meta property="og:url" content="https://westpeakplumbing.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "West Peak Trenchless & Plumbing",
          telephone: "(650) 379-8166",
          email: "servicerequests@westpeak.biz",
          url: "https://westpeakplumbing.com",
          address: { "@type": "PostalAddress", streetAddress: "1030 Duane Ave", addressLocality: "Santa Clara", addressRegion: "CA", postalCode: "95054" },
          openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "181" },
        })}</script>
      </Helmet>
      <div className="pb-16">
        <Navbar />
        <HeroSection slides={heroSlides} />
        <VehicleSlider />
        <PromoGrid />
        <ChargingSectionWrapper />
        <SecondarySlider slides={secondarySlides} />
        <Footer />
        <BottomBar />
      </div>
    </>
  );
};

export default Index;
