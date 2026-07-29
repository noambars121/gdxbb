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
    <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold text-accent-gold-ink tracking-wider uppercase">
            הבעיה בשוק
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-text mt-3">
            אתר שלא עובד לא רק &quot;לא עוזר&quot;. הוא עולה לכם לידים.
          </h2>
        </div>

        {/* Problems — compact, no heavy card borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div key={idx} className="flex flex-col gap-3">
                <div className="text-accent-gold w-fit">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text mb-2">{prob.title}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bridge line */}
        <p className="mt-10 text-center text-lg sm:text-xl font-bold text-text">
          זה בדיוק מה שאנחנו פותרים.
        </p>
      </div>
    </section>
  );
};
