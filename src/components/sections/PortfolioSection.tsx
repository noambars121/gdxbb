'use client';

import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { PortfolioCard } from '../ui/PortfolioCard';
import { Sparkles } from 'lucide-react';

/** Section 5 — Proof. Six live projects with business context; no unverified metrics. */
export const PortfolioSection: React.FC = () => {
  const evidence = ['5 פרויקטים חיים', 'פיתוח מותאם אישית', 'Mobile-first', 'עברית RTL'];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30 border-t border-surface-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>הוכחות בשטח</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            לא תבניות. לא הבטחות. פרויקטים חיים.
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.portfolio.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* Evidence strip */}
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-400">
          {evidence.map((item, idx) => (
            <React.Fragment key={item}>
              {idx > 0 && (
                <li aria-hidden="true" className="text-slate-600">
                  ·
                </li>
              )}
              <li>{item}</li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};
