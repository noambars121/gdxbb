'use client';

import React from 'react';
import { MessageSquare, Map, PenTool, Rocket } from 'lucide-react';

/** Section 6 — Process. Four steps focused on buyer certainty. */
export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'שיחת התאמה',
      description:
        'בודקים אם יש התאמה, מה המטרה העסקית, ומה באמת צריך — בלי למכור לכם מה שלא נחוץ.',
    },
    {
      num: '02',
      icon: Map,
      title: 'מפת אתר והצעה ברורה',
      description: 'מקבלים כיוון, היקף, לוחות זמנים ועלות לפני שמתחילים.',
    },
    {
      num: '03',
      icon: PenTool,
      title: 'עיצוב, בנייה ובקרה',
      description: 'עובדים בשלבים מסודרים, עם נקודות אישור ברורות.',
    },
    {
      num: '04',
      icon: Rocket,
      title: 'עלייה לאוויר והמשך צמיחה',
      description: 'משיקים, מחברים את ערוצי הפנייה, ומכינים בסיס להמשך שיווק ומדידה.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-surface-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
            תהליך העבודה
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4">
            איך זה עובד? פשוט, שקוף ומהיר
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-surface border border-surface-border p-6 rounded-2xl relative group hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="font-sans font-extrabold text-2xl text-slate-700 group-hover:text-brand-accent/40 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
