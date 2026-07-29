/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { PortfolioItem } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  /** First featured card gets a larger, more dominant image treatment. */
  dominant?: boolean;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, dominant = false }) => {
  const [imageError, setImageError] = useState(false);

  const displayDomain = item.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="group relative bg-surface border border-line/70 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-accent-blue/25 transition-all duration-300 flex flex-col h-full">
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
        className={`relative w-full bg-paper border-b border-line/70 overflow-hidden flex items-center justify-center ${
          dominant ? 'aspect-[16/9]' : 'aspect-[16/10]'
        }`}
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
          <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-paper via-surface to-paper text-right relative overflow-hidden">
            <div className="flex items-center justify-between z-10">
              <span className="text-xs font-sans font-semibold text-accent-blue-ink bg-accent-blue/10 px-2.5 py-1 rounded-full">
                {displayDomain}
              </span>
              <Globe
                className="w-5 h-5 text-muted/60 group-hover:text-accent-blue-ink transition-colors"
                aria-hidden="true"
              />
            </div>

            <div className="z-10 my-auto">
              <div className="font-sans font-bold text-xl text-text">{item.titleEn}</div>
              <p className="text-sm font-hebrew text-muted font-medium mt-1">{item.title}</p>
            </div>

            <div className="flex items-center gap-1 text-xs text-muted z-10">
              <Sparkles className="w-3.5 h-3.5 text-accent-gold-ink" aria-hidden="true" />
              <span>אתר חי</span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-text/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-2 bg-accent-blue text-ink px-4 py-2 rounded-xl text-sm font-bold shadow-cta">
            <span>צפייה באתר החי</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </span>
        </div>
      </a>

      {/* Card Details — reduced padding */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs text-accent-blue-ink font-semibold bg-accent-blue/10 px-2 py-0.5 rounded-full">
              {item.category}
            </span>
            <span className="text-xs text-muted font-sans">{displayDomain}</span>
          </div>

          <h3 className="text-lg font-bold text-text mb-0.5">{item.title}</h3>
          <p className="text-sm font-sans text-muted mb-1.5">{item.titleEn}</p>

          <p className="text-sm text-muted leading-relaxed mb-3">{item.description}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted bg-paper px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

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
            className="inline-flex items-center justify-between w-full text-sm font-medium text-text hover:text-accent-blue-ink bg-paper hover:bg-surface border border-line/70 hover:border-accent-blue/30 px-3 py-2 rounded-xl transition-all"
          >
            <span>ביקור באתר החי</span>
            <ExternalLink className="w-4 h-4 text-accent-blue-ink" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
