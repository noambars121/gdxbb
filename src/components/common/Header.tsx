'use client';

import React from 'react';
import { CTAButton } from './CTAButton';
import { SITE_CONFIG } from '@/config/site';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-surface-border transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Typographic Brand Lockup */}
        <a
          href="#"
          className="group flex items-center gap-2 text-right focus-visible:outline-none"
          aria-label="Gemini Digital x BarsBuild דף הבית"
        >
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-brand-accent transition-colors">
              Gemini Digital <span className="text-brand-accent font-light">×</span> BarsBuild
            </span>
            <span className="text-xs text-slate-400 font-hebrew">
              ארכיטקטורה, פיתוח ואינטגרציה מקצה לקצה
            </span>
          </div>
        </a>

        {/* Header Action CTA */}
        <div className="flex items-center gap-3">
          <CTAButton size="sm" type="whatsapp" label="דברו איתנו" />
        </div>
      </div>
    </header>
  );
};
