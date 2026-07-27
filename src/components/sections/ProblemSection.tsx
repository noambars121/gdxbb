'use client';

import React from 'react';
import { AlertTriangle, Clock, Layers, DollarSign } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: 'זמני טעינה איטיים ששורפים לקוחות',
      description:
        'מעל 53% מהגולשים במובייל נוטשים אתר שטוען יותר מ-3 שניות. אתרים כבדים מאבדים לידים ופוגעים בציון ה-SEO שלכם בגוגל.',
    },
    {
      icon: Layers,
      title: 'סרבול טכנולוגי ופלאגינים נשברים',
      description:
        'אתרים המבוססים על תבניות מוכנות ומערכות כבדות דורשים תחזוקה תדירה, נשברים בעדכונים וחשופים לתקלות אבטחה.',
    },
    {
      icon: AlertTriangle,
      title: 'עיצוב יפה שלא מייצר מכירות',
      description:
        'רוב המעצבים מתמקדים בגרפיקה בלבד, ללא הבנה של פסיכולוגיית המרה, סדר קריאה נכון ומסלול הניווט של הלקוח.',
    },
    {
      icon: DollarSign,
      title: 'עלויות נסתרות וסרבול מול סוכנויות',
      description:
        'חודשים של פגישות, ספקים שונים לעיצוב ולפיתוח, ועלויות גבוהות ללא התחייבות לביצועים ולתוצאות בשטח.',
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
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4 mb-4">
            למה רוב האתרים העסקיים פשוט לא עובדים?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            עסקים רבים משקיעים עשרות אלפי שקלים באתר חדש, אך מגלים שאינו מביא פניות או מכירות. אלו הסיבות המרכזיות לכך:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="bg-surface/60 border border-surface-border p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-400/10 border border-amber-400/20 rounded-xl text-amber-400 shrink-0">
                    <Icon className="w-6 h-6" />
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
