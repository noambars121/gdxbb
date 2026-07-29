/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import { PortfolioItem } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams } from '@/lib/utm';
import { ExternalLink, Globe } from 'lucide-react';

interface PortfolioCardProps {
  item: PortfolioItem;
  /** First featured card gets a larger, more dominant image treatment. */
  dominant?: boolean;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, dominant = false }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col h-full bg-surface border border-line/60 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
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
        className={`relative w-full bg-paper overflow-hidden block ${
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
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-paper via-surface to-paper text-center">
            <Globe className="w-7 h-7 text-muted/60" aria-hidden="true" />
            <span className="font-sans font-bold text-xl text-text">{item.titleEn}</span>
          </div>
        )}
      </a>

      <div className="p-4 flex flex-col flex-grow gap-3">
        <div>
          <h3 className="text-card-title sm:text-card-title-lg text-text leading-[1.4]">
            {item.title}
          </h3>
          <p className="text-meta sm:text-base text-muted mt-1 leading-[1.55]">{item.category}</p>
        </div>

        <p className="text-base text-muted leading-[1.6] flex-grow">{item.description}</p>

        {item.tags.length > 0 && (
          <div className="hidden sm:flex flex-wrap gap-2 pt-1">
            {item.tags.map((tag) => (
              <span key={tag} className="text-meta text-muted/80">
                {tag}
              </span>
            ))}
          </div>
        )}

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
          className="inline-flex items-center justify-between w-full text-base font-medium text-text hover:text-accent-blue-ink border border-line/70 hover:border-accent-blue/30 px-4 py-3 rounded-xl transition-colors"
        >
          <span>ביקור באתר החי</span>
          <ExternalLink className="w-4 h-4 text-accent-blue-ink shrink-0" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};
