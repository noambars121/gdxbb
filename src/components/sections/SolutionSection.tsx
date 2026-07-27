'use client';

import React from 'react';
import { Cpu, Layout, Sparkles, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/40 border-t border-surface-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full uppercase tracking-wider">
            הפתרון המשולב
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4 mb-4">
            שילוב הכוחות: Gemini Digital × BarsBuild
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            איחדנו את המומחיות בעיצוב וארכיטקטורת חוויית משתמש (Gemini Digital) יחד עם יכולות פיתוח ואינטגרציה מתקדמות (BarsBuild) כדי ליצור מוצר דיגיטלי מושלם.
          </p>
        </div>

        {/* Dual Pillar Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pillar 1: Gemini Digital */}
          <div className="bg-surface border border-surface-border p-8 rounded-2xl relative group hover:border-brand-accent/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-accent/10 border border-brand-accent/20 rounded-xl text-brand-accent">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-brand-accent font-mono uppercase font-bold">Design & UX Architecture</span>
                <h3 className="text-2xl font-bold text-white font-sans">Gemini Digital</h3>
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>ארכיטקטורת חוויית משתמש (UX) ממוקדת המרות ומניעת נטישה.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>שפה ויזואלית יוקרתית (Dark Premium) בעלת זהות ייחודית.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>קופיקראפטינג עברי מדויק ומיקוד פסיכולוגי בכל סקשן.</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: BarsBuild */}
          <div className="bg-surface border border-surface-border p-8 rounded-2xl relative group hover:border-emerald-400/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-400/10 border border-emerald-400/20 rounded-xl text-emerald-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-emerald-400 font-mono uppercase font-bold">Engineering & Performance</span>
                <h3 className="text-2xl font-bold text-white font-sans">BarsBuild</h3>
              </div>
            </div>

            <ul className="space-y-3 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>פיתוח ב-Next.js, React ו-TypeScript לביצועים פנומנליים.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>טעינה סטטית מהירה במיוחד ללא תלות בבסיסי נתונים כבדים.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>קוד נקי, מודולרי ונגיש (WCAG AA) המותאם לכל המכשירים.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Combined Power Banner */}
        <div className="bg-gradient-to-r from-surface via-slate-900 to-surface border border-brand-accent/20 p-6 sm:p-8 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-right">
            <Sparkles className="w-8 h-8 text-brand-accent shrink-0 hidden sm:block" />
            <div>
              <div className="text-lg font-bold text-white">התוצאה: אתר שטוען מתי שמוקש וממיר גולשים ללקוחות משלמים</div>
              <p className="text-sm text-slate-400">ללא חוב טכנולוגי, ללא תקלות וללא מורכבות מיותרת.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
