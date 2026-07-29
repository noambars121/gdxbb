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
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold text-accent-blue-ink tracking-wider uppercase">
            הפתרון המשולב
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-text mt-3">
            כך בונים אתר שעובד בשביל העסק
          </h2>
        </div>

        {/* 4-step flow — single ink-soft panel with blue markers + gold connector */}
        <div className="bg-ink-soft rounded-2xl px-6 py-8 sm:px-10 sm:py-10 mb-12">
          <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Restrained gold connecting line — desktop only */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-5 right-[12.5%] left-[12.5%] h-px bg-accent-gold/35"
            />

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.num} className="relative flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      aria-hidden="true"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-blue/15 border border-accent-blue/40 text-accent-blue text-sm font-bold shrink-0"
                    >
                      {step.num}
                    </span>
                    <div className="p-2 rounded-lg text-accent-blue">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-paper mb-2">{step.title}</h3>
                  <p className="text-paper/60 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Partnership attribution */}
        <div className="max-w-2xl mx-auto mb-14 text-center border-y border-accent-gold/30 py-5">
          <p className="text-sm sm:text-base text-text leading-relaxed">
            <span className="font-semibold">Gemini Digital</span> מובילים את אסטרטגיית
            ההמרה והמסרים.
          </p>
          <p className="text-sm sm:text-base text-text leading-relaxed">
            <span className="font-semibold">BarsBuild</span> בונים את המערכת הדיגיטלית
            שמוציאה אותה לפועל.
          </p>
        </div>

        {/* Services grid — compact 2×2 on paper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg text-accent-blue shrink-0">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text mb-1">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expansion note */}
        <p className="text-center text-sm text-muted max-w-2xl mx-auto mt-8 leading-relaxed">
          כשהעסק מוכן לכך — פרסום, SEO, CRM ואוטומציה, על בסיס תשתית שכבר בנויה נכון.
        </p>
      </div>
    </section>
  );
};
