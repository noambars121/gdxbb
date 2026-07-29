'use client';

import React from 'react';
import { CTAButton } from '../common/CTAButton';
import { SITE_CONFIG } from '@/config/site';

/**
 * Block 6 — Final Diagnostic CTA. Dark authority close with blue primary action.
 */
export const ClosingCTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ink relative">
      {/* Thin gold divider */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/2 translate-x-1/2 w-16 h-px bg-accent-gold/70"
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-paper tracking-tight mb-6 leading-tight">
          לפני שאתם משקיעים באתר חדש — בדקו מה באמת מעכב אתכם.
        </h2>

        <p className="text-lg sm:text-xl text-paper/70 max-w-2xl leading-relaxed mb-2">
          בשיחת התאמה קצרה נבין מה האתר הנוכחי עושה, איפה הוא מאבד פניות, והאם אתר חדש
          או שדרוג הוא באמת הצעד הנכון.
        </p>
        <p className="text-lg sm:text-xl font-medium text-paper/85 max-w-2xl leading-relaxed mb-10">
          אם אין התאמה, נגיד את זה ישירות.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
          <CTAButton
            size="lg"
            type="whatsapp"
            label={SITE_CONFIG.cta.closing}
            location="closing"
            onDark
            className="w-full sm:w-auto"
          />
          <CTAButton
            size="lg"
            variant="secondary"
            type="email"
            label={SITE_CONFIG.cta.email}
            location="closing"
            onDark
            className="w-full sm:w-auto"
          />
        </div>

        {/* Trust line */}
        <p className="text-sm text-paper/50">{SITE_CONFIG.cta.trustMicrocopy}</p>
      </div>
    </section>
  );
};
