'use client';

import React from 'react';
import { CTAButton } from '../common/CTAButton';
import { MessageCircle, Mail, Sparkles, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export const ClosingCTASection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-surface to-background border-t border-surface-border relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
          <span>מוכנים לשדרג את הנוכחות הדיגיטלית שלכם?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          בואו נבנה עבורכם אתר שתיהנו להציג —{' '}
          <span className="bg-gradient-to-l from-sky-400 to-brand-accent bg-clip-text text-transparent">
            ויביא תוצאות ממשיות
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
          ללא סרבול, ללא הפתעות ובלי להתפשר על ביצועים. פנו אלינו עכשיו ב-WhatsApp לקבלת ייעוץ והצעת מחיר מותאמת אישית.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <CTAButton size="lg" type="whatsapp" label="פנייה מהירה ב-WhatsApp" className="w-full sm:w-auto" />
          <CTAButton size="lg" variant="secondary" type="email" label="שליחת הודעה באימייל" className="w-full sm:w-auto" />
        </div>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>תגובה מהירה ב-WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>ללא שום התחייבות</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>הצעת מחיר שקופה</span>
          </div>
        </div>
      </div>
    </section>
  );
};
