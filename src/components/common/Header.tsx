'use client';

import React from 'react';
import { CTAButton } from './CTAButton';
import { SITE_CONFIG } from '@/config/site';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-paper/90 border-b border-line transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Typographic Brand Lockup */}
        <a
          href="#"
          className="group flex items-center gap-2 text-right"
          aria-label="Gemini Digital x BarsBuild דף הבית"
        >
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-text group-hover:text-accent-blue-ink transition-colors whitespace-nowrap">
              <span className="sm:hidden">
                GD <span className="text-accent-gold font-light">×</span> BB
              </span>
              <span className="hidden sm:inline">
                Gemini Digital <span className="text-accent-gold font-light">×</span> BarsBuild
              </span>
            </span>
            <span className="hidden sm:block text-meta text-muted font-hebrew leading-[1.55]">
              {SITE_CONFIG.categoryLabel}
            </span>
          </div>
        </a>

        {/* Minimal navigation: איך זה עובד | פרויקטים | דברו איתנו */}
        <nav aria-label="ניווט ראשי" className="flex items-center gap-3 md:gap-7">
          {SITE_CONFIG.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden md:inline-block text-sm font-medium text-muted hover:text-text transition-colors"
            >
              {item.label}
            </a>
          ))}
          <CTAButton
            size="sm"
            type="whatsapp"
            label="דברו איתנו"
            location="header"
            className="whitespace-nowrap"
          />
        </nav>
      </div>
    </header>
  );
};
