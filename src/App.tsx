import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import React, { Suspense } from "react";
import BookingDialog from "@/components/BookingDialog";

const Index = React.lazy(() => import("./pages/Index"));
const CommercialRoofing = React.lazy(() => import("./pages/CommercialRoofing"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Reviews = React.lazy(() => import("./pages/Reviews"));
const Rebates = React.lazy(() => import("./pages/Rebates"));
const Referral = React.lazy(() => import("./pages/Referral"));
const WarrantyOverview = React.lazy(() => import("./pages/WarrantyOverview"));
const WarrantyDetail = React.lazy(() => import("./pages/WarrantyDetail"));
const CityPage = React.lazy(() => import("./pages/CityPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BookingDialog />
        <BrowserRouter>
          <Suspense fallback={<div className="h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/commercial-roofing" element={<CommercialRoofing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/rebates" element={<Rebates />} />
              <Route path="/referral" element={<Referral />} />
              <Route path="/warranty" element={<WarrantyOverview />} />
              <Route path="/warranty/:category" element={<WarrantyDetail />} />
              <Route path="/locations/:city" element={<CityPage />} />
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
