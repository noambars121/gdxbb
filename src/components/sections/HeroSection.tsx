'use client';

import React, { useState } from 'react';
import { CTAButton } from '../common/CTAButton';
import { SITE_CONFIG } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import { ExternalLink, Globe } from 'lucide-react';

const heroProject =
  SITE_CONFIG.portfolio.find((p) => p.id === 'santimarzi') ?? SITE_CONFIG.portfolio[0];

const TRUST_ITEMS = [
  'אסטרטגיית המרה + פיתוח מותאם אישית',
  'אתרים חיים — לא תבניות',
  'גורם אחד שאחראי לתוצאה',
];

/** Block 1 — Hero. Qualify the visitor, state the promise, drive to CTA. */
export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const heroDomain = heroProject.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <section className="relative flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-page">
      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.2] mb-6 max-w-4xl">
          האתר שלכם אמור להביא פניות.{' '}
          <span className="relative inline-block">
            לא רק להיראות טוב.
            <span
              aria-hidden="true"
              className="absolute -bottom-1 right-0 left-0 h-1 rounded-full bg-accent-gold/70"
            />
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-ink-secondary max-w-3xl leading-relaxed mb-6">
          אנחנו בונים לעסקים שבהם כל פנייה שווה כסף אמיתי — אתר שמייצר אמון, מוביל
          לפעולה, ומחבר בין מה שהלקוח רואה למה שהעסק צריך להשיג.
        </p>

        {/* ICP qualifier — filters low-fit visitors early (brief §3) */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm sm:text-base font-medium text-ink leading-relaxed">
            מתאים לעסקים שבהם פנייה אחת יכולה להיות שווה אלפי שקלים.
          </p>
          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
            לא לעסקים שמחפשים את האתר הכי זול.
          </p>
        </div>

        {/* Primary CTA */}
        <CTAButton
          size="lg"
          type="whatsapp"
          label={SITE_CONFIG.cta.primary}
          location="hero"
          className="w-full sm:w-auto"
        />

        {/* Trust strip — 3 items, wraps gracefully on mobile */}
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm text-ink-secondary">
          {TRUST_ITEMS.map((item, idx) => (
            <React.Fragment key={item}>
              {idx > 0 && (
                <li aria-hidden="true" className="text-accent-gold font-bold">
                  ·
                </li>
              )}
              <li>{item}</li>
            </React.Fragment>
          ))}
        </ul>

        {/* Featured live project preview — browser frame of a real project.
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
          className="group block w-full max-w-3xl mt-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan-ink rounded-2xl"
        >
          <div className="rounded-2xl border border-line bg-card shadow-card overflow-hidden transition-all duration-300 group-hover:shadow-card-hover group-hover:border-accent-cyan-ink/40">
            {/* Browser chrome bar */}
            <div dir="ltr" className="flex items-center gap-2 px-4 py-3 bg-page border-b border-line">
              <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
              <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
              <span className="mx-auto text-xs font-sans text-ink-secondary bg-card border border-line rounded-md px-3 py-1">
                {heroDomain}
              </span>
              <ExternalLink
                className="w-4 h-4 text-ink-secondary group-hover:text-accent-cyan-ink transition-colors"
                aria-hidden="true"
              />
            </div>

            {/* Frame content */}
            <div className="relative aspect-[16/9] w-full bg-card">
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
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-page via-card to-page">
                  <Globe className="w-8 h-8 text-accent-cyan-ink/80" aria-hidden="true" />
                  <span className="font-sans text-2xl sm:text-3xl font-bold text-ink">
                    {heroProject.titleEn}
                  </span>
                  <span className="text-sm text-ink-secondary">{heroProject.category}</span>
                  <span className="text-xs font-sans text-accent-cyan-ink">{heroDomain}</span>
                </div>
              )}
            </div>
          </div>
        </a>

        {/* Label beneath the featured preview */}
        <p className="mt-4 text-xs sm:text-sm font-medium text-ink-secondary">
          <span className="text-accent-gold-ink font-semibold">פרויקט חי</span> —{' '}
          {heroProject.category}
        </p>
      </div>
    </section>
  );
};
