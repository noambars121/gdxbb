import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { MobileStickyCTA } from '@/components/common/MobileStickyCTA';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { ClosingCTASection } from '@/components/sections/ClosingCTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-hebrew pb-[calc(6rem_+_env(safe-area-inset-bottom))] md:pb-0">
      {/* Sticky Header with minimal 3-item navigation */}
      <Header />

      {/* Single continuous scroll — section order per the rebuild brief */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Cost of Inaction */}
        <ProblemSection />

        {/* 3. The Mechanism */}
        <SolutionSection />

        {/* 4. Offer */}
        <ServicesSection />

        {/* 5. Proof / Portfolio */}
        <PortfolioSection />

        {/* 6. Process */}
        <HowItWorksSection />

        {/* 7. Industry Fit */}
        <IndustriesSection />

        {/* 8. Qualification CTA */}
        <ClosingCTASection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Mobile-only fixed bottom WhatsApp CTA */}
      <MobileStickyCTA />
    </div>
  );
}
