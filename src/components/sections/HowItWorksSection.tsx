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
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-page border-t border-line"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-accent-cyan-ink bg-accent-cyan/10 border border-accent-cyan/30 px-3 py-1 rounded-full uppercase tracking-wider">
            תהליך העבודה
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink mt-4">
            פשוט, שקוף ומהיר
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.num}
                className="bg-card border border-line p-6 sm:p-8 rounded-xl shadow-card hover:shadow-card-hover hover:border-accent-gold/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-accent-cyan/10 border border-accent-cyan/30 rounded-xl text-accent-cyan-ink">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-sans font-extrabold text-2xl text-accent-gold-ink/60 group-hover:text-accent-gold-ink transition-colors"
                  >
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink mb-2">{step.title}</h3>

                <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
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
