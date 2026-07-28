'use client';

import React from 'react';
import { MousePointerClick, Megaphone, Users } from 'lucide-react';

/** Section 2 — Cost of Inaction. Exactly three cards per the rebuild brief. */
export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: MousePointerClick,
      title: 'האתר נראה טוב, אבל לא מוביל לפעולה',
      description:
        'גולשים נכנסים, מתרשמים, ויוצאים — כי אין מסלול ברור שמוביל אותם להשאיר פרטים או ליצור קשר.',
    },
    {
      icon: Megaphone,
      title: 'הפרסום מביא תנועה לאתר שלא מוכן לקבל אותה',
      description:
        'כשקמפיין, המלצה או חיפוש בגוגל מביאים מבקרים, האתר צריך לסגור את הפער בין עניין לפנייה.',
    },
    {
      icon: Users,
      title: 'יותר מדי ספקים, בלי גורם אחד שאחראי לתוצאה',
      description:
        'מעצב, מפתח, מפרסם — וכל אחד עובד בנפרד. אתם נשארים לנהל את החיבורים ולרדוף אחרי תשובות.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
            הבעיה בשוק
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4">
            אתר שלא עובד לא רק &quot;לא עוזר&quot;. הוא עולה לכם לידים.
          </h2>
        </div>

        {/* Problems Grid — exactly 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-surface/60 border border-surface-border p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="p-3 bg-amber-400/10 border border-amber-400/20 rounded-xl text-amber-400 w-fit">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {prob.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {prob.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
