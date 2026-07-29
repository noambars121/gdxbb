'use client';

import React from 'react';

/** Block 2 — The Cost of the Problem. Three pain points + bridge line. */
export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'האתר נראה טוב, אבל לא מוביל לפעולה',
      description:
        'גולשים נכנסים, מתרשמים, ויוצאים — כי אין מסלול ברור שמוביל אותם לפנות.',
    },
    {
      title: 'הפרסום מביא תנועה לאתר שלא מוכן לקבל אותה',
      description:
        'קמפיין, המלצה, חיפוש בגוגל — כולם מביאים מבקרים. האתר צריך לסגור את הפער.',
    },
    {
      title: 'יותר מדי ספקים, בלי גורם אחד שאחראי לתוצאה',
      description:
        'מעצב, מפתח, מפרסם — כל אחד עובד בנפרד. אתם נשארים לנהל את החיבורים.',
    },
  ];

  return (
    <section className="pt-10 pb-16 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-meta sm:text-base font-semibold text-accent-gold-ink tracking-wider uppercase">
            הבעיה בשוק
          </span>
          <h2 className="text-section sm:text-section-sm lg:text-section-lg text-text mt-2">
            <span className="block sm:inline">אתר שלא עובד לא רק &quot;לא עוזר&quot;.</span>{' '}
            <span className="block sm:inline">הוא עולה לכם לידים.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {problems.map((prob, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3 className="text-card-title sm:text-card-title-lg text-text leading-[1.4]">
                {prob.title}
              </h3>
              <p className="text-base text-muted leading-[1.6]">{prob.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg sm:text-xl font-bold text-text leading-[1.5]">
          זה בדיוק מה שאנחנו פותרים.
        </p>
      </div>
    </section>
  );
};
