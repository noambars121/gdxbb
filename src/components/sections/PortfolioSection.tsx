'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/config/site';
import { PortfolioCard } from '../ui/PortfolioCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Block 4 — Selected Live Work. Three featured projects as primary proof;
 * the remaining projects stay accessible behind a "עוד פרויקטים" toggle.
 */
export const PortfolioSection: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState(false);

  const featured = SITE_CONFIG.portfolio.filter((p) => p.featured);
  const secondary = SITE_CONFIG.portfolio.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-16 sm:py-16 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-meta sm:text-base font-semibold text-accent-gold-ink tracking-wider uppercase">
            הוכחות בשטח
          </span>
          <h2 className="text-section sm:text-section-sm lg:text-section-lg text-text mt-2">
            <span className="block sm:inline">לא תבניות. לא הבטחות.</span>{' '}
            <span className="block sm:inline">פרויקטים חיים.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} dominant={idx === 0} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowSecondary((prev) => !prev)}
            aria-expanded={showSecondary}
            aria-controls="secondary-projects"
            className="inline-flex items-center gap-2 text-base font-semibold text-accent-blue-ink hover:text-text underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue-ink rounded-md px-2 py-1"
          >
            <span>{showSecondary ? 'הסתרת הפרויקטים הנוספים' : 'עוד פרויקטים'}</span>
            {showSecondary ? (
              <ChevronUp className="w-4 h-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          {showSecondary && (
            <div
              id="secondary-projects"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-8 text-right"
            >
              {secondary.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
