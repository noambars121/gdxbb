'use client';

import React from 'react';
import { Globe, Target, RefreshCw, Workflow } from 'lucide-react';

/** Section 4 — Offer. Four named products; technical stack details live in the standards strip (Section 7). */
export const ServicesSection: React.FC = () => {
  const offers = [
    {
      icon: Globe,
      title: 'אתר תדמית ממיר',
      description: 'לנוכחות שמייצרת אמון ומובילה לפנייה.',
    },
    {
      icon: Target,
      title: 'דף נחיתה לקמפיינים',
      description: 'למסלול ממוקד שמחבר בין פרסום לליד.',
    },
    {
      icon: RefreshCw,
      title: 'שדרוג אתר קיים',
      description: 'כשיש עסק טוב מאחורי אתר שכבר לא מייצג אותו.',
    },
    {
      icon: Workflow,
      title: 'תשתית לידים ואוטומציה',
      description: 'כדי שהפנייה לא תיעלם אחרי שהלקוח לחץ "שליחה".',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-surface-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
            השירותים שלנו
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4">
            לא &quot;עוד אתר&quot;. נכס מכירה דיגיטלי.
          </h2>
        </div>

        {/* Offer Grid — four named products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, idx) => {
            const Icon = offer.icon;
            return (
              <div
                key={idx}
                className="bg-surface border border-surface-border p-6 rounded-2xl flex flex-col group hover:border-brand-accent/50 hover:bg-surface-hover transition-all duration-300"
              >
                <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent w-fit mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{offer.description}</p>
              </div>
            );
          })}
        </div>

        {/* Closing expansion line */}
        <p className="text-center text-sm text-slate-400 max-w-2xl mx-auto mt-10 leading-relaxed">
          כשהעסק מוכן לכך, אפשר להרחיב גם לפרסום, SEO, CRM ואוטומציה — על בסיס תשתית שכבר
          בנויה נכון.
        </p>
      </div>
    </section>
  );
};
