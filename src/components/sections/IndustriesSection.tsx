'use client';

import React from 'react';
import { Scale, Stethoscope, MapPin } from 'lucide-react';

/** Section 7 — Industry Fit. The three priority verticals only, then the technical standards strip. */
export const IndustriesSection: React.FC = () => {
  const verticals = [
    {
      icon: Scale,
      title: 'משרדי עורכי דין ושירותים מקצועיים',
    },
    {
      icon: Stethoscope,
      title: 'קליניקות ועסקים מבוססי פגישות',
    },
    {
      icon: MapPin,
      title: 'עסקים מקומיים עם שירות או פרויקט בעל ערך גבוה',
    },
  ];

  const standards = [
    'Mobile-first',
    'נגישות WCAG AA',
    'קוד מותאם אישית',
    'תשתית מוכנה לצמיחה',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30 border-t border-surface-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
            התאמה לעסקים
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4">
            בנוי לעסקים שבהם כל פנייה שווה כסף אמיתי
          </h2>
        </div>

        {/* Vertical Cards — exactly three */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verticals.map((vertical, idx) => {
            const Icon = vertical.icon;
            return (
              <div
                key={idx}
                className="bg-surface border border-surface-border p-8 rounded-2xl group hover:border-emerald-400/50 transition-all duration-300 flex flex-col items-center text-center gap-4"
              >
                <div className="p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-xl text-emerald-400 w-fit group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {vertical.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Technical standards strip */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-400">
          {standards.map((item, idx) => (
            <React.Fragment key={item}>
              {idx > 0 && (
                <li aria-hidden="true" className="text-slate-600">
                  ·
                </li>
              )}
              <li>{item}</li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};
