'use client';

import React, { useState } from 'react';
import { SITE_CONFIG } from '@/config/site';
import { PortfolioCard } from '../ui/PortfolioCard';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Block 4 — Selected Live Work. Three featured projects as primary proof;
 * the remaining projects stay accessible behind a "עוד פרויקטים" toggle
 * without competing for attention.
 */
export const PortfolioSection: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState(false);

  const featured = SITE_CONFIG.portfolio.filter((p) => p.featured);
  const secondary = SITE_CONFIG.portfolio.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-accent-gold-ink text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>הוכחות בשטח</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-text">
            לא תבניות. לא הבטחות. פרויקטים חיים.
          </h2>
        </div>

        {/* Featured Projects — surface cards on paper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, idx) => (
            <PortfolioCard key={item.id} item={item} dominant={idx === 0} />
          ))}
        </div>

        {/* Secondary projects — accessible, not primary */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowSecondary((prev) => !prev)}
            aria-expanded={showSecondary}
            aria-controls="secondary-projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue-ink hover:text-text underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue-ink rounded-md px-2 py-1"
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
