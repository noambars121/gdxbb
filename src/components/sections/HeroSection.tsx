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
    <section className="relative bg-ink pt-16 pb-0 px-4 sm:px-6 lg:px-8 overflow-visible">
      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center pb-8">
        {/* Headline — warm white, one gold accent phrase */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-paper tracking-tight leading-[1.2] mb-6 max-w-4xl">
          האתר שלכם אמור להביא פניות.{' '}
          <span className="text-accent-gold whitespace-nowrap">לא רק להיראות טוב.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-paper/75 max-w-3xl leading-relaxed mb-6">
          אנחנו בונים לעסקים שבהם כל פנייה שווה כסף אמיתי — אתר שמייצר אמון, מוביל
          לפעולה, ומחבר בין מה שהלקוח רואה למה שהעסק צריך להשיג.
        </p>

        {/* ICP qualifier */}
        <div className="mb-10 max-w-2xl">
          <p className="text-sm sm:text-base font-medium text-paper/90 leading-relaxed">
            מתאים לעסקים שבהם פנייה אחת יכולה להיות שווה אלפי שקלים.
          </p>
          <p className="text-sm sm:text-base text-paper/60 leading-relaxed">
            לא לעסקים שמחפשים את האתר הכי זול.
          </p>
        </div>

        {/* Primary CTA — blue */}
        <CTAButton
          size="lg"
          type="whatsapp"
          label={SITE_CONFIG.cta.primary}
          location="hero"
          onDark
          className="w-full sm:w-auto"
        />

        {/* Trust strip */}
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm text-paper/55">
          {TRUST_ITEMS.map((item, idx) => (
            <React.Fragment key={item}>
              {idx > 0 && (
                <li aria-hidden="true" className="text-paper/30">
                  ·
                </li>
              )}
              <li>{item}</li>
            </React.Fragment>
          ))}
        </ul>

        {/* Featured project preview — light card overlapping hero lower edge */}
        <div className="w-full max-w-3xl mt-14 translate-y-1/2">
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
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-2xl"
          >
            <div className="rounded-2xl border border-line/80 bg-surface shadow-hero-card overflow-hidden transition-all duration-300 group-hover:shadow-card-hover group-hover:border-accent-blue/30">
              {/* Browser chrome bar */}
              <div dir="ltr" className="flex items-center gap-2 px-4 py-3 bg-paper border-b border-line">
                <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
                <span className="w-3 h-3 rounded-full bg-line" aria-hidden="true" />
                <span className="mx-auto text-xs font-sans text-muted bg-surface border border-line rounded-md px-3 py-1">
                  {heroDomain}
                </span>
                <ExternalLink
                  className="w-4 h-4 text-muted group-hover:text-accent-blue-ink transition-colors"
                  aria-hidden="true"
                />
              </div>

              {/* Frame content */}
              <div className="relative aspect-[16/9] w-full bg-surface">
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
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-paper via-surface to-paper">
                    <Globe className="w-8 h-8 text-accent-blue-ink/80" aria-hidden="true" />
                    <span className="font-sans text-2xl sm:text-3xl font-bold text-text">
                      {heroProject.titleEn}
                    </span>
                    <span className="text-sm text-muted">{heroProject.category}</span>
                    <span className="text-xs font-sans text-accent-blue-ink">{heroDomain}</span>
                  </div>
                )}
              </div>
            </div>
          </a>

          {/* Label beneath the featured preview */}
          <p className="mt-4 text-xs sm:text-sm font-medium text-muted text-center">
            פרויקט חי — {heroProject.category}
          </p>
        </div>
      </div>
    </section>
  );
};
