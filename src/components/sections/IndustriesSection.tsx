'use client';

import React from 'react';
import { ShoppingBag, Utensils, AppWindow, Building2 } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const sectors = [
    {
      icon: ShoppingBag,
      title: 'מותגי אופנה, לייפסטייל ו-E-Commerce',
      description: 'קטלוגים מרהיבים, טעינת תמונות מהירה וחוויית קנייה מותאמת מובייל.',
    },
    {
      icon: Utensils,
      title: 'מסעדות, קולינריה ומזון',
      description: 'תפריטים דיגיטליים אינטראקטיביים ומערכות פנייה ישירות לחוויה קלה.',
    },
    {
      icon: AppWindow,
      title: 'אפליקציות ומוצרי דיגיטל',
      description: 'אתרי Landing Page טכנולוגיים המציגים מוצרים בצורה מעוררת אמון.',
    },
    {
      icon: Building2,
      title: 'עסקים B2B ונותני שירותים',
      description: 'אתרי תדמית יוקרתיים בעלי מסלול המרה ישיר מול לקוחות קצה.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30 border-t border-surface-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full uppercase tracking-wider">
            התאמה לעסקים
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4 mb-4">
            פתרונות מותאמים לפי תחום הפעילות שלכם
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            אנחנו מביאים ניסיון מוכח במגוון תעשיות ומבינים את הדרישות הייחודיות של כל שוק.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <div
                key={idx}
                className="bg-surface border border-surface-border p-6 rounded-2xl group hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-xl text-emerald-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {sector.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
