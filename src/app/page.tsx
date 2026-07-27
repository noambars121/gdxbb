import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
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
    <div className="min-h-screen bg-background text-slate-100 flex flex-col font-hebrew">
      {/* Sticky Header */}
      <Header />

      {/* Main Single Continuous Scroll Content */}
      <main className="flex-grow">
        {/* 1. Hero (Pain Recognition & Hook) */}
        <HeroSection />

        {/* 2. Problem (Pain Recognition & Empathy) */}
        <ProblemSection />

        {/* 3. Solution (Hope & Transformation) */}
        <SolutionSection />

        {/* 4. Services (Capabilities & Clarity) */}
        <ServicesSection />

        {/* 5. Proof / Portfolio (Proof & Authentic Showcase) */}
        <PortfolioSection />

        {/* 6. How It Works (Safety & 4-Step Process) */}
        <HowItWorksSection />

        {/* 7. Industries (Relevance & Applicability) */}
        <IndustriesSection />

        {/* 8. Closing CTA (Action & Conversion) */}
        <ClosingCTASection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
