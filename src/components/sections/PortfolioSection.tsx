'use client';

import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { PortfolioCard } from '../ui/PortfolioCard';
import { Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30 border-t border-surface-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>הוכחות בשטח</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            פרויקטים נבחרים ועבודות חיות
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            אנחנו מאמינים בהוכחות אמיתיות בלבד. הנה חלק מהאתרים החיים שנבנו בארכיטקטורה ובסטנדרט האיכות של GD × BB.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.portfolio.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
