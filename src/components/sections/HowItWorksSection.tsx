'use client';

import React from 'react';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

/** Block 5 — How the Engagement Works. Three steps, friction-free and safe. */
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
      icon: PenTool,
      title: 'אסטרטגיה, עיצוב ובנייה',
      description:
        'עובדים בשלבים מסודרים עם נקודות אישור ברורות. אתם יודעים מה קורה בכל שלב.',
    },
    {
      num: '03',
      icon: Rocket,
      title: 'עלייה לאוויר והמשך צמיחה',
      description: 'משיקים, מחברים ערוצי פנייה, ומכינים בסיס למדידה ולצמיחה הבאה.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-ink">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold text-accent-blue tracking-wider uppercase">
            תהליך העבודה
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-paper mt-3">פשוט, שקוף ומהיר</h2>
        </div>

        {/* Three stages — compact ink panel layout */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.num} className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    aria-hidden="true"
                    className="font-sans font-bold text-lg text-accent-gold"
                  >
                    {step.num}
                  </span>
                  <div className="text-accent-blue">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-paper mb-2">{step.title}</h3>

                <p className="text-paper/60 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
