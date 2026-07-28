'use client';

import React from 'react';
import { MousePointerClick, Megaphone, Users } from 'lucide-react';

/** Block 2 — The Cost of the Problem. Three pain points + bridge line. */
export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: MousePointerClick,
      title: 'האתר נראה טוב, אבל לא מוביל לפעולה',
      description:
        'גולשים נכנסים, מתרשמים, ויוצאים — כי אין מסלול ברור שמוביל אותם לפנות.',
    },
    {
      icon: Megaphone,
      title: 'הפרסום מביא תנועה לאתר שלא מוכן לקבל אותה',
      description:
        'קמפיין, המלצה, חיפוש בגוגל — כולם מביאים מבקרים. האתר צריך לסגור את הפער.',
    },
    {
      icon: Users,
      title: 'יותר מדי ספקים, בלי גורם אחד שאחראי לתוצאה',
      description:
        'מעצב, מפתח, מפרסם — כל אחד עובד בנפרד. אתם נשארים לנהל את החיבורים.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-line">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-accent-gold-ink bg-accent-gold/15 border border-accent-gold/40 px-3 py-1 rounded-full uppercase tracking-wider">
            הבעיה בשוק
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink mt-4">
            אתר שלא עובד לא רק &quot;לא עוזר&quot;. הוא עולה לכם לידים.
          </h2>
        </div>

        {/* Problems Grid — exactly 3 cards, horizontal on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-line p-6 sm:p-8 rounded-xl shadow-card hover:shadow-card-hover hover:border-accent-gold/50 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="p-3 bg-accent-gold/15 border border-accent-gold/30 rounded-xl text-accent-gold-ink w-fit">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{prob.title}</h3>
                    <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge line */}
        <p className="mt-12 text-center text-lg sm:text-xl font-bold text-ink">
          זה בדיוק מה שאנחנו פותרים.
        </p>
      </div>
    </section>
  );
};
