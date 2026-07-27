'use client';

import React from 'react';
import { Code2, Smartphone, Gauge, Workflow } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'פיתוח אתרי פרימיום מותאמים אישית',
      description:
        'בנייה מאפס בטכנולוגיות Next.js ו-React. קוד נקי, ללא תבניות מוכנות מראש, המבטיח ייחודיות מוחלטת ואיכות ללא פשרות.',
    },
    {
      icon: Smartphone,
      title: 'חוויית משתמש מובייל ממירה (Mobile-First)',
      description:
        'כל רכיב מתוכנן קודם כל למסכי נייד. היררכיה חזקה, כפתורי CTA נגישים במיוחד ומסלול גלילה רציף וזורם.',
    },
    {
      icon: Gauge,
      title: 'ארכיטקטורת מהירות וביצועי SEO',
      description:
        'זמני טעינה פנומנליים שעוברים את מדדי Google Core Web Vitals בהצטיינות, עם מבנה HTML סמנטי לקידום אורגני.',
    },
    {
      icon: Workflow,
      title: 'אינטגרציות ותקשורת ישירה',
      description:
        'חיבור מהיר של מסלול ההמרה ל-WhatsApp Business, אימייל ישיר, ומערכות קשר ללא סרבול מיותר.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-surface-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
            השירותים שלנו
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4 mb-4">
            כל מה שהאתר שלכם צריך כדי לנצח
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            ארכיטקטורת קוד ועיצוב מתקדמת המיועדת להביא לכם יתרון תחרותי ממשי.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-surface border border-surface-border p-6 rounded-2xl flex flex-col justify-between group hover:border-brand-accent/50 hover:bg-surface-hover transition-all duration-300"
              >
                <div>
                  <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
