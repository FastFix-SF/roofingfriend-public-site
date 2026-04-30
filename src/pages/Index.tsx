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
import heroFsdWebp from "@/assets/hero-fsd.webp";
import heroVeteranGovernment from "@/assets/hero-veteran-government-roofing.jpg";
import heroVeteranGovernmentWebp from "@/assets/hero-veteran-government-roofing.webp";
import heroCommercialRoofing from "@/assets/hero-commercial-roofing.jpg";
import heroCommercialRoofingWebp from "@/assets/hero-commercial-roofing.webp";

import warrantyCommercial from "@/assets/warranty-commercial-v2.jpg";
import warrantyCommercialWebp from "@/assets/warranty-commercial-v2.webp";
import warrantyIndustrial from "@/assets/warranty-industrial-v2.jpg";
import warrantyIndustrialWebp from "@/assets/warranty-industrial-v2.webp";
import warrantyResidential from "@/assets/warranty-residential-v2.jpg";
import warrantyResidentialWebp from "@/assets/warranty-residential-v2.webp";

const LazyChargingSection = React.lazy(() => import("@/components/ChargingSection"));

const secondarySlides = [
  { image: warrantyResidential, imageWebp: warrantyResidentialWebp, title: "Residential", subtitle: "Lifetime Metal Roof Warranty · Standing seam built to outlast your mortgage", primaryCta: "Learn More", link: "/warranty/residential" },
  { image: warrantyCommercial, imageWebp: warrantyCommercialWebp, title: "Commercial", subtitle: "25-Year System Warranty · Standing seam & TPO for retail, restaurants & warehouses", primaryCta: "Learn More", link: "/warranty/commercial" },
  { image: warrantyIndustrial, imageWebp: warrantyIndustrialWebp, title: "Government & Public Sector", subtitle: "Spec-Grade Coverage · Veteran-owned, GSA-friendly metal roofing for federal & municipal projects", primaryCta: "Learn More", link: "/warranty/industrial" },
];

const heroSlides = [
  { image: heroFsd, imageWebp: heroFsdWebp, video: "/videos/hero-roof-v2.mp4", audio: true, title: "From Shingles to Standing Seam", subtitle: "", primaryCta: "Book Service", secondaryCta: "Learn More", textColor: "light" as const, captions: [
    { text: "Wife: I don't like our shingle roof anymore…", startTime: 0, endTime: 2.5 },
    { text: "Wife: It feels so generic.", startTime: 2.6, endTime: 4.8 },
    { text: "Wife: I want a metal roof — like the ones on Instagram.", startTime: 4.9, endTime: 8.2 },
    { text: "Husband: Yes — let's do it.", startTime: 8.3, endTime: 10.2 },
    { text: "Premium standing seam metal roof installed.", startTime: 10.3, endTime: 12.6 },
    { text: "Wife: It feels like a brand new house.", startTime: 12.7, endTime: 15 },
  ] },
  { image: heroCommercialRoofing, imageWebp: heroCommercialRoofingWebp, title: "Metal Roofing for Commercial", subtitle: "Standing seam roofs for retail centers, restaurants, warehouses & big-box", primaryCta: "Get a Commercial Quote", primaryLink: "#book", secondaryCta: "Learn More", secondaryLink: "/portfolio", textColor: "light" as const },
    { image: heroVeteranGovernment, imageWebp: heroVeteranGovernmentWebp, title: "Veteran-Owned. Government-Trusted.", subtitle: "Standing seam metal roofs for military bases, federal facilities & public sector projects", primaryCta: "Request a Government Quote", primaryLink: "#book", secondaryCta: "Learn More", secondaryLink: "/portfolio", textColor: "light" as const },
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
    <div ref={ref} style={{ minHeight: "100vh" }}>
      {visible && (
        <Suspense fallback={<div className="h-screen bg-muted animate-pulse" />}>
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
        <title>The Roofing Friend | Premium Metal Roofing in the SF Bay Area</title>
        <meta name="description" content="The Roofing Friend — standing seam, R-Panel, Multi-V & TPO metal roofing across the San Francisco Bay Area. Veteran-owned, California-licensed, 24/7 storm response." />
        <link rel="canonical" href="https://theroof.info/" />
        <link rel="preload" as="image" href={heroFsdWebp} type="image/webp" fetchPriority="high" />
        <meta property="og:title" content="The Roofing Friend | Premium Metal Roofing in the SF Bay Area" />
        <meta property="og:description" content="Standing seam, R-Panel, Multi-V & TPO metal roofing across the San Francisco Bay Area. Veteran-owned and California-licensed." />
        <meta property="og:url" content="https://theroof.info/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "The Roofing Friend",
          telephone: "(415) 697-1849",
          email: "roofingfriend@gmail.com",
          url: "https://theroof.info",
          address: { "@type": "PostalAddress", addressLocality: "San Francisco Bay Area", addressRegion: "CA", addressCountry: "US" },
          openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "16:00" },
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
