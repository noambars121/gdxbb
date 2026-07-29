'use client';

import React, { useState } from 'react';
import { CTAButton } from '../common/CTAButton';
import { SITE_CONFIG } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import { Globe } from 'lucide-react';

const heroProject =
  SITE_CONFIG.portfolio.find((p) => p.id === 'santimarzi') ?? SITE_CONFIG.portfolio[0];

const TRUST_ITEMS = [
  'אסטרטגיית המרה + פיתוח מותאם אישית',
  'אתרים חיים — לא תבניות',
  'גורם אחד שאחראי לתוצאה',
];

/**
 * Block 1 — Hero + featured project bridge.
 * Card straddles ink/paper via the bridge wrapper; all heights stay in document flow.
 */
export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const heroDomain = heroProject.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <>
      {/* Ink hero — content only, compact vertical rhythm */}
      <section className="bg-ink pt-16 px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h1 className="text-hero sm:text-hero-sm lg:text-hero-lg text-paper tracking-tight mb-4 max-w-4xl">
            <span className="block sm:inline">האתר שלכם אמור</span>{' '}
            <span className="block sm:inline">להביא פניות.</span>{' '}
            <span className="text-accent-gold whitespace-nowrap">לא רק להיראות טוב.</span>
          </h1>

          <p className="text-base sm:text-lg text-paper/75 max-w-2xl leading-[1.6] mb-4">
            אנחנו בונים לעסקים שבהם כל פנייה שווה כסף אמיתי — אתר שמייצר אמון, מוביל
            לפעולה, ומחבר בין מה שהלקוח רואה למה שהעסק צריך להשיג.
          </p>

          <div className="mb-6 max-w-xl">
            <p className="text-base font-medium text-paper/90 leading-[1.6]">
              מתאים לעסקים שבהם פנייה אחת יכולה להיות שווה אלפי שקלים.
            </p>
            <p className="text-base text-paper/60 leading-[1.6]">
              לא לעסקים שמחפשים את האתר הכי זול.
            </p>
          </div>

          <CTAButton
            size="lg"
            type="whatsapp"
            label={SITE_CONFIG.cta.primary}
            location="hero"
            onDark
            className="w-full sm:w-auto"
          />

          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-base text-paper/65 leading-[1.55]">
            {TRUST_ITEMS.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && (
                  <li aria-hidden="true" className="text-paper/35 px-1">
                    ·
                  </li>
                )}
                <li>{item}</li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>

      {/* Ink/paper bridge — card overlap with full reserved height in flow */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-ink -z-10" aria-hidden="true" />
        <div className="absolute inset-x-0 top-16 sm:top-20 bottom-0 bg-paper -z-10" aria-hidden="true" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
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
                    <span className="text-base text-muted">{heroProject.category}</span>
                    <span className="text-meta font-sans text-accent-blue-ink">{heroDomain}</span>
                  </div>
                )}
              </div>
            </div>
          </a>

          <p className="mt-4 text-meta sm:text-base font-medium text-muted text-center leading-[1.55]">
            פרויקט חי — {heroProject.category}
          </p>
        </div>
      </div>
    </>
  );
};
