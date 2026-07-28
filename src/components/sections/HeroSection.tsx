'use client';

import React, { useState } from 'react';
import { CTAButton } from '../common/CTAButton';
import { SITE_CONFIG } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import { ExternalLink, Globe } from 'lucide-react';

const heroProject =
  SITE_CONFIG.portfolio.find((p) => p.id === 'santimarzi') ?? SITE_CONFIG.portfolio[0];

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const heroDomain = heroProject.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <section className="relative flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* H1 — commercial pain, not a technical feature */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-6 max-w-4xl">
          האתר שלכם אמור להביא פניות.{' '}
          <span className="bg-gradient-to-l from-sky-400 to-brand-accent bg-clip-text text-transparent">
            לא רק להיראות טוב.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-5">
          אנחנו בונים לעסקים רציניים אתר פרימיום שמייצר אמון, מוביל לפעולה, ועוזר להפוך
          מתעניינים ללידים איכותיים.
        </p>

        {/* Supporting line */}
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-10">
          אסטרטגיית המרה של Gemini Digital. פיתוח מדויק של BarsBuild. צוות אחד שמחבר בין מה
          שהלקוח רואה למה שהעסק צריך להשיג.
        </p>

        {/* Primary CTA */}
        <CTAButton
          size="lg"
          type="whatsapp"
          label={SITE_CONFIG.cta.primary}
          location="hero"
          className="w-full sm:w-auto"
        />

        {/* Trust microcopy */}
        <p className="mt-4 text-sm text-slate-400">{SITE_CONFIG.cta.trustMicrocopy}</p>

        {/* Hero visual: browser frame of a real live project.
            Shows the genuine screenshot when the asset exists; otherwise a clean
            typographic panel with real project details only — no fabricated UI. */}
        <a
          href={heroProject.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent('portfolio_link_click', {
              location: 'hero',
              project: heroProject.id,
              destination: heroProject.url,
              ...getUtmParams(),
            })
          }
          aria-label={`פתיחת האתר החי ${heroProject.titleEn} בכרטיסייה חדשה`}
          className="group block w-full max-w-3xl mt-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-2xl"
        >
          <div className="rounded-2xl border border-surface-border bg-surface shadow-2xl shadow-black/40 overflow-hidden transition-colors duration-300 group-hover:border-brand-accent/40">
            {/* Browser chrome bar */}
            <div dir="ltr" className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-surface-border">
              <span className="w-3 h-3 rounded-full bg-slate-700" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-slate-700" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-slate-700" aria-hidden="true" />
              <span className="mx-auto text-xs font-sans text-slate-400 bg-white/5 border border-white/10 rounded-md px-3 py-1">
                {heroDomain}
              </span>
              <ExternalLink
                className="w-4 h-4 text-slate-500 group-hover:text-brand-accent transition-colors"
                aria-hidden="true"
              />
            </div>

            {/* Frame content */}
            <div className="relative aspect-[16/9] w-full bg-slate-950">
              {!imageError && heroProject.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={heroProject.image}
                  alt={`צילום מסך של האתר החי ${heroProject.titleEn}`}
                  width={1024}
                  height={576}
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-surface to-slate-950">
                  <Globe className="w-8 h-8 text-brand-accent/70" aria-hidden="true" />
                  <span className="font-sans text-2xl sm:text-3xl font-bold text-white">
                    {heroProject.titleEn}
                  </span>
                  <span className="text-sm text-slate-300">{heroProject.category}</span>
                  <span className="text-xs font-sans text-brand-accent">{heroDomain}</span>
                </div>
              )}
            </div>
          </div>
        </a>

        {/* Required label beneath the visual */}
        <p className="mt-4 text-xs sm:text-sm text-slate-400">
          אתר חי שנבנה על ידי GD × BB
        </p>
      </div>
    </section>
  );
};
