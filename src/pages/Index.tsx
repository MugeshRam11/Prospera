import PageLayout from "@/components/layout/PageLayout";
import SectionTransition from "@/components/ui/SectionTransition";
import HeroSection from "@/components/home/HeroSection";
import ProductShowcaseSection from "@/components/home/ProductShowcaseSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import EcosystemGridSection from "@/components/home/EcosystemGridSection";
import FounderSection from "@/components/home/FounderSection";
import UaeOpportunityStickySection from "@/components/home/UaeOpportunityStickySection";
import StatsBar from "@/components/home/StatsBar";
import PartnerLogosMarquee from "@/components/home/PartnerLogosMarquee";
import WhatWhyHowSection from "@/components/home/WhatWhyHowSection";
import MarketIntelligence from "@/components/home/MarketIntelligence";
import FAQSection from "@/components/home/FAQSection";
import ConsultationCTA from "@/components/home/ConsultationCTA";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <SectionTransition direction="dark-to-light" />
      <ProductShowcaseSection />
      <ComparisonSection />
      <EcosystemGridSection />
      <UaeOpportunityStickySection />
      <WhatWhyHowSection />
      <MarketIntelligence />
      <StatsBar />
      <PartnerLogosMarquee />
      <FAQSection />
      <ConsultationCTA />
    </PageLayout>
  );
};

export default Index;
