'use client';

import React from 'react';
import { Globe, Target, RefreshCw, Workflow } from 'lucide-react';

/**
 * Block 3 — The Integrated System. Four-step flow in ink-soft panel,
 * partnership attribution, and compact services grid.
 */
export const IntegratedSystemSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'מבינים את הלקוח',
      description: 'מגדירים מי צריך להגיע, מה חשוב לו, ומה גורם לו לבחור.',
    },
    {
      num: '2',
      title: 'בונים מסלול המרה',
      description: 'מסרים, היררכיה, עיצוב וקריאות לפעולה שמניעים את האדם הנכון לשיחה.',
    },
    {
      num: '3',
      title: 'מוציאים לפועל בלי פשרות',
      description: 'אתר מהיר, מותאם למובייל, נגיש וקל להמשך צמיחה.',
    },
    {
      num: '4',
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
    <section className="py-16 sm:py-16 px-4 sm:px-6 lg:px-8 bg-paper">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-meta sm:text-base font-semibold text-accent-blue-ink tracking-wider uppercase">
            הפתרון המשולב
          </span>
          <h2 className="text-section sm:text-section-sm lg:text-section-lg text-text mt-2">
            כך בונים אתר שעובד בשביל העסק
          </h2>
        </div>

        {/* 4-step flow — vertical on mobile, four-column on lg */}
        <div className="bg-ink-soft rounded-2xl px-6 py-8 sm:px-10 sm:py-10 mb-10">
          <ol className="relative flex flex-col lg:grid lg:grid-cols-4 lg:gap-6">
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-4 right-[12.5%] left-[12.5%] h-px bg-accent-gold/30"
            />

            {steps.map((step, idx) => (
              <li
                key={step.num}
                className={`flex flex-col py-6 lg:py-0 first:pt-0 last:pb-0 ${
                  idx < steps.length - 1
                    ? 'border-b border-paper/10 lg:border-b-0'
                    : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-blue/15 border border-accent-blue/35 text-accent-blue text-meta font-bold mb-4 shrink-0"
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

        <div className="max-w-2xl mx-auto mb-10 text-center border-y border-accent-gold/25 py-6">
          <p className="text-base text-text leading-[1.6]">
            <span className="font-semibold">Gemini Digital</span> מובילים את אסטרטגיית
            ההמרה והמסרים.
          </p>
          <p className="text-base text-text leading-[1.6]">
            <span className="font-semibold">BarsBuild</span> בונים את המערכת הדיגיטלית
            שמוציאה אותה לפועל.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="text-accent-blue shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-card-title text-text mb-1 leading-[1.4]">
                    {service.title}
                  </h3>
                  <p className="text-base text-muted leading-[1.6]">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-base text-muted max-w-2xl mx-auto mt-8 leading-[1.6]">
          כשהעסק מוכן לכך — פרסום, SEO, CRM ואוטומציה, על בסיס תשתית שכבר בנויה נכון.
        </p>
      </div>
    </section>
  );
};
