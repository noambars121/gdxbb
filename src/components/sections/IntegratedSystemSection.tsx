'use client';

import React from 'react';
import {
  UserSearch,
  Route,
  Rocket,
  BarChart3,
  Globe,
  Target,
  RefreshCw,
  Workflow,
} from 'lucide-react';

/**
 * Block 3 — The Integrated System. Replaces the previous separate
 * "solution" and "services" sections with one unified, scannable block:
 * a 4-step flow, the partnership attribution, and a compact 2×2 services grid.
 */
export const IntegratedSystemSection: React.FC = () => {
  const steps = [
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
    {
      num: '4',
      icon: BarChart3,
      title: 'מודדים ומשפרים',
      description: 'מחברים מדידה, מעקב אחרי פניות, ומכינים בסיס לצמיחה הבאה.',
    },
  ];

  const services = [
    {
      icon: Globe,
      title: 'אתר תדמית ממיר',
      description: 'לנוכחות שמייצרת אמון ומובילה לפנייה.',
    },
    {
      icon: Target,
      title: 'דף נחיתה לקמפיינים',
      description: 'למסלול ממוקד שמחבר בין פרסום לליד.',
    },
    {
      icon: RefreshCw,
      title: 'שדרוג אתר קיים',
      description: 'כשיש עסק טוב מאחורי אתר שכבר לא מייצג אותו.',
    },
    {
      icon: Workflow,
      title: 'תשתית לידים ואוטומציה',
      description: 'כדי שהפנייה לא תיעלם אחרי שהלקוח לחץ "שליחה".',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-page border-t border-line">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold text-accent-cyan-ink bg-accent-cyan/10 border border-accent-cyan/30 px-3 py-1 rounded-full uppercase tracking-wider">
            הפתרון המשולב
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink mt-4">
            כך בונים אתר שעובד בשביל העסק
          </h2>
        </div>

        {/* 4-step flow — horizontal on desktop, vertical on mobile */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.num}
                className="bg-card border border-line p-6 sm:p-8 rounded-xl shadow-card hover:shadow-card-hover hover:border-accent-cyan-ink/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-accent-cyan/10 border border-accent-cyan/30 rounded-xl text-accent-cyan-ink">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-sans font-extrabold text-3xl text-line group-hover:text-accent-cyan-ink/50 transition-colors"
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

        {/* Partnership attribution */}
        <div className="max-w-2xl mx-auto mb-16 text-center border-y border-accent-gold/40 py-5">
          <p className="text-sm sm:text-base text-ink leading-relaxed">
            <span className="font-semibold">Gemini Digital</span> מובילים את אסטרטגיית
            ההמרה והמסרים.
          </p>
          <p className="text-sm sm:text-base text-ink leading-relaxed">
            <span className="font-semibold">BarsBuild</span> בונים את המערכת הדיגיטלית
            שמוציאה אותה לפועל.
          </p>
        </div>

        {/* Services grid — compact 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-line p-6 rounded-xl shadow-card hover:shadow-card-hover hover:border-accent-cyan-ink/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 bg-accent-cyan/10 border border-accent-cyan/30 rounded-xl text-accent-cyan-ink shrink-0">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-1">{service.title}</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expansion note */}
        <p className="text-center text-sm text-ink-secondary max-w-2xl mx-auto mt-8 leading-relaxed">
          כשהעסק מוכן לכך — פרסום, SEO, CRM ואוטומציה, על בסיס תשתית שכבר בנויה נכון.
        </p>
      </div>
    </section>
  );
};
