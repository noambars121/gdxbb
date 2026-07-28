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
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-line">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/15 border border-accent-gold/40 text-accent-gold-ink text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>הוכחות בשטח</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink">
            לא תבניות. לא הבטחות. פרויקטים חיים.
          </h2>
        </div>

        {/* Featured Projects — full-width on mobile, 3-up on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* Secondary projects — accessible, not primary */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowSecondary((prev) => !prev)}
            aria-expanded={showSecondary}
            aria-controls="secondary-projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan-ink hover:text-ink underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan-ink rounded-md px-2 py-1"
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8 text-right"
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
