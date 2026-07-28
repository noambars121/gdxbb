'use client';

import React from 'react';
import { CTAButton } from '../common/CTAButton';
import { SITE_CONFIG } from '@/config/site';

/** Section 8 — Qualification CTA. A reason to act now without forcing a buying decision. */
export const ClosingCTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-surface to-background border-t border-surface-border relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          לפני שאתם משקיעים באתר חדש —{' '}
          <span className="bg-gradient-to-l from-sky-400 to-brand-accent bg-clip-text text-transparent">
            בדקו מה באמת מעכב אתכם.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-2">
          בשיחת התאמה קצרה נבין מה האתר הנוכחי עושה, איפה הוא מאבד פניות, והאם אתר חדש או
          שדרוג הוא באמת הצעד הנכון.
        </p>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
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

        {/* Trust microcopy */}
        <p className="text-sm text-slate-400">{SITE_CONFIG.cta.trustMicrocopy}</p>
      </div>
    </section>
  );
};
