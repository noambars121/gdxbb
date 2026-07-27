'use client';

import React from 'react';
import { CTAButton } from '../common/CTAButton';
import { Zap, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Partnership Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-border mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
          <span className="text-xs sm:text-sm text-slate-300 font-medium">
            שיתוף פעולה אסטרטגי: <span className="font-sans font-bold text-white">Gemini Digital</span> × <span className="font-sans font-bold text-white">BarsBuild</span>
          </span>
        </div>

        {/* Main Headline - Pain Recognition & Direct Value */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 max-w-4xl">
          הפסיקו להפסיד לקוחות לאתרים איטיים.{' '}
          <span className="bg-gradient-to-l from-sky-400 to-brand-accent bg-clip-text text-transparent">
            אתר תדמית ומכירה בעל ארכיטקטורה ממירה
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
          בלי סרבול של סוכנויות, בלי קוד כבד, ובלי הבטחות סרק. אנחנו בונים עבורכם אתר פרימיום מהיר במיוחד, בעיצוב מדויק ובמיקוד מלא על יחס המרה.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <CTAButton size="lg" type="whatsapp" label="קבלו הצעת מחיר ב-WhatsApp" className="w-full sm:w-auto" />
          <CTAButton size="lg" variant="secondary" type="email" label="שליחת מייל מהיר" className="w-full sm:w-auto" />
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl pt-8 border-t border-surface-border text-slate-400 text-sm">
          <div className="flex items-center justify-center gap-2 bg-surface/50 border border-surface-border p-3 rounded-xl">
            <Zap className="w-4 h-4 text-brand-accent" />
            <span>טעינה בלתי מורגשת (&lt; 1 שניה)</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-surface/50 border border-surface-border p-3 rounded-xl">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>מיקוד פסיכולוגי בהמרות</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-surface/50 border border-surface-border p-3 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>ארכיטקטורת static נקייה</span>
          </div>
        </div>
      </div>
    </section>
  );
};
