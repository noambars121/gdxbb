import React from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { MobileStickyCTA } from '@/components/common/MobileStickyCTA';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { IntegratedSystemSection } from '@/components/sections/IntegratedSystemSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ClosingCTASection } from '@/components/sections/ClosingCTASection';

/**
 * Six conversion blocks + footer (rebuild brief v2.0.0, Section 2).
 * Section backgrounds alternate between --bg-primary and white (§1.4);
 * the footer is the only dark surface.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-page text-ink flex flex-col font-hebrew pb-[calc(6rem_+_env(safe-area-inset-bottom))] md:pb-0">
      <Header />

      <main className="flex-grow">
        {/* Block 1 — Hero (incl. ICP qualifier + trust strip) */}
        <HeroSection />

        {/* Block 2 — The Cost of the Problem */}
        <ProblemSection />

        {/* Block 3 — The Integrated System (steps + services) */}
        <IntegratedSystemSection />

        {/* Block 4 — Selected Live Work */}
        <PortfolioSection />

        {/* Block 5 — How the Engagement Works */}
        <HowItWorksSection />

        {/* Block 6 — Final Diagnostic CTA */}
        <ClosingCTASection />
      </main>

      <Footer />

      {/* Mobile-only fixed bottom WhatsApp CTA */}
      <MobileStickyCTA />
    </div>
  );
}
