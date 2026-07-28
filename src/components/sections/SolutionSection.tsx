'use client';

import React from 'react';
import { UserSearch, Route, Rocket } from 'lucide-react';

/** Section 3 — The Mechanism. Three phases first; partnership attribution beneath. */
export const SolutionSection: React.FC = () => {
  const phases = [
    {
      num: '1',
      icon: UserSearch,
      title: 'מבינים את הלקוח',
      description: 'מגדירים מי צריך להגיע, מה חשוב לו, ומה גורם לו לבחור.',
    },
    {
      num: '2',
      icon: Route,
      title: 'בונים מסלול המרה',
      description: 'מסרים, היררכיה, עיצוב וקריאות לפעולה שמניעים את האדם הנכון לשיחה.',
    },
    {
      num: '3',
      icon: Rocket,
      title: 'מוציאים לפועל בלי פשרות',
      description: 'אתר מהיר, מותאם למובייל, נגיש וקל להמשך צמיחה.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/40 border-t border-surface-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
            הפתרון המשולב
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4">
            כך בונים אתר שעובד בשביל העסק
          </h2>
        </div>

        {/* Core statement */}
        <p className="text-center text-lg sm:text-2xl text-slate-200 font-medium max-w-3xl mx-auto mb-14 leading-relaxed">
          Gemini Digital <span className="text-brand-accent">×</span> BarsBuild מחברים
          אסטרטגיית המרה, חוויית משתמש ופיתוח מדויק למערכת אחת.
        </p>

        {/* Three-phase mechanism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.num}
                className="bg-surface border border-surface-border p-8 rounded-2xl relative group hover:border-brand-accent/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="font-sans font-extrabold text-3xl text-slate-700 group-hover:text-brand-accent/40 transition-colors">
                    {phase.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {phase.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Partnership attribution — beneath the mechanism, not above it */}
        <p className="text-center text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Gemini Digital מובילים את אסטרטגיית ההמרה והמסרים. BarsBuild בונים את המערכת
          הדיגיטלית שמוציאה אותה לפועל.
        </p>
      </div>
    </section>
  );
};
