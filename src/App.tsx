import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import React, { Suspense } from "react";

const Index = React.lazy(() => import("./pages/Index"));
const TrenchlessOverview = React.lazy(() => import("./pages/TrenchlessOverview"));
const TrenchlessCommercial = React.lazy(() => import("./pages/TrenchlessCommercial"));
const TrenchlessIndustrial = React.lazy(() => import("./pages/TrenchlessIndustrial"));
const TrenchlessMethod = React.lazy(() => import("./pages/TrenchlessMethod"));
const WaterHeater = React.lazy(() => import("./pages/WaterHeater"));
const AgingPipes = React.lazy(() => import("./pages/AgingPipes"));
const HydroJetting = React.lazy(() => import("./pages/HydroJetting"));
const Plumbing = React.lazy(() => import("./pages/Plumbing"));
const CommercialRoofing = React.lazy(() => import("./pages/CommercialRoofing"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const Rebates = React.lazy(() => import("./pages/Rebates"));
const Referral = React.lazy(() => import("./pages/Referral"));
const WarrantyOverview = React.lazy(() => import("./pages/WarrantyOverview"));
const WarrantyDetail = React.lazy(() => import("./pages/WarrantyDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/trenchless" element={<TrenchlessOverview />} />
              <Route path="/trenchless/commercial" element={<TrenchlessCommercial />} />
              <Route path="/trenchless/industrial" element={<TrenchlessIndustrial />} />
              <Route path="/trenchless/:method" element={<TrenchlessMethod />} />
              <Route path="/water-heater" element={<WaterHeater />} />
              <Route path="/pipes" element={<AgingPipes />} />
              <Route path="/hydro-jetting" element={<HydroJetting />} />
              <Route path="/plumbing" element={<Plumbing />} />
              <Route path="/commercial-roofing" element={<CommercialRoofing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/rebates" element={<Rebates />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/warranty" element={<WarrantyOverview />} />
              <Route path="/warranty/:category" element={<WarrantyDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
