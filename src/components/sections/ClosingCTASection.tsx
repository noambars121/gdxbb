'use client';

import React from 'react';
import { CTAButton } from '../common/CTAButton';
import { SITE_CONFIG } from '@/config/site';

/**
 * Block 6 — Final Diagnostic CTA. Full-width, centred, warm background.
 * A gold divider separates it from the process section (both on --bg-primary).
 */
export const ClosingCTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-page relative">
      {/* Gold section divider — authority signal (brief §1.1) */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-1/2 translate-x-1/2 w-24 h-1 rounded-full bg-accent-gold"
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight mb-6 leading-tight">
          לפני שאתם משקיעים באתר חדש — בדקו מה באמת מעכב אתכם.
        </h2>

        <p className="text-lg sm:text-xl text-ink-secondary max-w-2xl leading-relaxed mb-2">
          בשיחת התאמה קצרה נבין מה האתר הנוכחי עושה, איפה הוא מאבד פניות, והאם אתר חדש
          או שדרוג הוא באמת הצעד הנכון.
        </p>
        <p className="text-lg sm:text-xl font-medium text-ink max-w-2xl leading-relaxed mb-10">
          אם אין התאמה, נגיד את זה ישירות.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-6">
          <CTAButton
            size="lg"
            type="whatsapp"
            label={SITE_CONFIG.cta.closing}
            location="closing"
            className="w-full sm:w-auto"
          />
          <CTAButton
            size="lg"
            variant="secondary"
            type="email"
            label={SITE_CONFIG.cta.email}
            location="closing"
            className="w-full sm:w-auto"
          />
        </div>

        {/* Trust line */}
        <p className="text-sm text-ink-secondary">{SITE_CONFIG.cta.trustMicrocopy}</p>
      </div>
    </section>
  );
};
