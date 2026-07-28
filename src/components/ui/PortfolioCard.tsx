/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { PortfolioItem } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  // Extract plain domain for clean display
  const displayDomain = item.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="group relative bg-card border border-line rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-accent-cyan-ink/40 transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail Area with Fallback — clickable to match the hover overlay affordance.
          Removed from the tab/AT order since the labeled action link below is the
          canonical link for this card. */}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() =>
          trackEvent('portfolio_link_click', {
            location: 'portfolio_thumbnail',
            project: item.id,
            destination: item.url,
            ...getUtmParams(),
          })
        }
        className="relative aspect-[16/10] w-full bg-page border-b border-line overflow-hidden flex items-center justify-center"
      >
        {!imageError && item.image ? (
          <img
            src={item.image}
            alt={`צילום מסך של אתר ${item.title}`}
            loading="lazy"
            decoding="async"
            width={600}
            height={375}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Typographic light fallback panel — real project details only */
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-page via-card to-page text-right relative overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-sans font-semibold text-accent-cyan-ink bg-accent-cyan/10 border border-accent-cyan/30 px-2.5 py-1 rounded-full">
                {displayDomain}
              </span>
              <Globe
                className="w-5 h-5 text-ink-secondary/60 group-hover:text-accent-cyan-ink transition-colors"
                aria-hidden="true"
              />
            </div>

            <div className="z-10 my-auto">
              <div className="font-sans font-bold text-xl text-ink">{item.titleEn}</div>
              <p className="text-sm font-hebrew text-ink-secondary font-medium mt-1">
                {item.title}
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs text-ink-secondary z-10">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold-ink" aria-hidden="true" />
              <span>אתר חי</span>
            </div>
          </div>
        )}

        {/* Hover overlay button indicator */}
        <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-2 bg-accent-cyan text-ink px-4 py-2 rounded-xl text-sm font-bold shadow-cta">
            <span>צפייה באתר החי</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </a>

      {/* Card Details */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs text-accent-cyan-ink font-semibold bg-accent-cyan/10 px-2.5 py-0.5 rounded-full border border-accent-cyan/30">
              {item.category}
            </span>
            <span className="text-xs text-ink-secondary font-sans">{displayDomain}</span>
          </div>

          <h3 className="text-xl font-bold text-ink mb-0.5">{item.title}</h3>
          <p className="text-sm font-sans text-ink-secondary mb-2">{item.titleEn}</p>

          <p className="text-sm text-ink-secondary leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-ink-secondary bg-page border border-line px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('portfolio_link_click', {
                location: 'portfolio',
                project: item.id,
                destination: item.url,
                ...getUtmParams(),
              })
            }
            aria-label={`פתיחת האתר ${item.title} בכרטיסייה חדשה`}
            className="inline-flex items-center justify-between w-full text-sm font-medium text-ink hover:text-accent-cyan-ink bg-page hover:bg-card border border-line hover:border-accent-cyan-ink/50 px-4 py-2.5 rounded-xl transition-all"
          >
            <span>ביקור באתר החי</span>
            <ExternalLink className="w-4 h-4 text-accent-cyan-ink" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
