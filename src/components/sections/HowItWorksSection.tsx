'use client';

import React from 'react';

/** Block 5 — How the Engagement Works. Three stages in a dark operating-method band. */
export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'שיחת התאמה',
      description:
        'בודקים אם יש התאמה, מה המטרה העסקית, ומה באמת צריך — בלי למכור לכם מה שלא נחוץ.',
    },
    {
      num: '02',
      title: 'אסטרטגיה, עיצוב ובנייה',
      description:
        'עובדים בשלבים מסודרים עם נקודות אישור ברורות. אתם יודעים מה קורה בכל שלב.',
    },
    {
      num: '03',
      title: 'עלייה לאוויר והמשך צמיחה',
      description: 'משיקים, מחברים ערוצי פנייה, ומכינים בסיס למדידה ולצמיחה הבאה.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-16 px-4 sm:px-6 lg:px-8 bg-ink">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-meta sm:text-base font-semibold text-accent-blue tracking-wider uppercase">
            תהליך העבודה
          </span>
          <h2 className="text-section sm:text-section-sm lg:text-section-lg text-paper mt-2">
            פשוט, שקוף ומהיר
          </h2>
        </div>

        <ol className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, idx) => (
            <li
              key={step.num}
              className={`flex flex-col ${
                idx < steps.length - 1 ? 'border-b border-paper/10 pb-8 md:border-b-0 md:pb-0' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="font-sans font-bold text-lg text-accent-gold mb-4"
              >
                {step.num}
              </span>

              <h3 className="text-card-title sm:text-card-title-lg text-paper mb-2 leading-[1.4]">
                {step.title}
              </h3>

              <p className="text-base text-paper/60 leading-[1.6]">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
