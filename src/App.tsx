import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import NotFound from "./pages/NotFound";

// Corporate
import CorporateAdvisory from "./pages/corporate/CorporateAdvisory";
import FreezoneSetup from "./pages/corporate/FreezoneSetup";
import GoldenVisa from "./pages/corporate/GoldenVisa";
import MainlandSetup from "./pages/corporate/MainlandSetup";
import OffshoreFormation from "./pages/corporate/OffshoreFormation";
import BankAccount from "./pages/corporate/BankAccount";

// Real Estate
import RealEstateAdvisory from "./pages/real-estate/RealEstateAdvisory";
import PropertyInvestment from "./pages/real-estate/PropertyInvestment";
import OffPlan from "./pages/real-estate/OffPlan";
import ReadyProperty from "./pages/real-estate/ReadyProperty";
import Portfolio from "./pages/real-estate/Portfolio";
import PropertyManagement from "./pages/real-estate/PropertyManagement";

// Mortgage
import MortgageAdvisory from "./pages/mortgage/MortgageAdvisory";
import HomeLoan from "./pages/mortgage/HomeLoan";
import MortgageInvestors from "./pages/mortgage/MortgageInvestors";
import Refinancing from "./pages/mortgage/Refinancing";
import BankPartnerships from "./pages/mortgage/BankPartnerships";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />

          {/* Corporate */}
          <Route path="/corporate" element={<CorporateAdvisory />} />
          <Route path="/corporate/mainland-setup" element={<MainlandSetup />} />
          <Route path="/corporate/freezone-setup" element={<FreezoneSetup />} />
          <Route path="/corporate/offshore-formation" element={<OffshoreFormation />} />
          <Route path="/corporate/bank-account" element={<BankAccount />} />
          <Route path="/corporate/golden-visa" element={<GoldenVisa />} />

          {/* Real Estate */}
          <Route path="/real-estate" element={<RealEstateAdvisory />} />
          <Route path="/real-estate/property-investment" element={<PropertyInvestment />} />
          <Route path="/real-estate/off-plan" element={<OffPlan />} />
          <Route path="/real-estate/ready-property" element={<ReadyProperty />} />
          <Route path="/real-estate/portfolio" element={<Portfolio />} />
          <Route path="/real-estate/property-management" element={<PropertyManagement />} />

          {/* Mortgage */}
          <Route path="/mortgage" element={<MortgageAdvisory />} />
          <Route path="/mortgage/home-loan" element={<HomeLoan />} />
          <Route path="/mortgage/investors" element={<MortgageInvestors />} />
          <Route path="/mortgage/refinancing" element={<Refinancing />} />
          <Route path="/mortgage/bank-partnerships" element={<BankPartnerships />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
