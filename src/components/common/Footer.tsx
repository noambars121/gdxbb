'use client';

import React from 'react';
import { SITE_CONFIG } from '@/config/site';
import { MessageCircle, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t border-surface-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right gap-2">
          <div className="font-sans font-bold text-xl text-white">
            Gemini Digital <span className="text-brand-accent">×</span> BarsBuild
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            שותפות טכנולוגית אסטרטגית לבניית אתרי פרימיום בעלי ארכיטקטורה מתקדמת, ביצועים ללא פשרות ויחס המרה ממקסם.
          </p>
        </div>

        {/* Direct Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <a
            href={SITE_CONFIG.links.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>055-507-3405</span>
          </a>
          <a
            href={SITE_CONFIG.links.mailtoUrl}
            className="flex items-center gap-2 hover:text-sky-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>BarsBuild@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>© {new Date().getFullYear()} Gemini Digital × BarsBuild. כל הזכויות שמורות. v1.0.0</span>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <a
            href="#privacy-notice"
            className="hover:text-slate-300 transition-colors"
            title="הצהרת פרטיות לאתר סטטי"
          >
            מדיניות פרטיות
          </a>
          <span>•</span>
          <span>Static High-Performance RTL Architecture</span>
        </div>
      </div>

      {/* Static Privacy Notice Box */}
      <div id="privacy-notice" className="max-w-7xl mx-auto mt-4 text-[11px] text-slate-500 text-center sm:text-right border-t border-white/5 pt-3">
        אתר v1.0.0 הנו אתר תדמית סטטי. האתר אינו עושה שימוש בקוקיז (Cookies), אינו כולל מערכות מעקב ואינו אוסף מידע אישי. פנייה מתבצעת ישירות ב-WhatsApp/Email. למדיניות פרטיות מלאה לקראת דיפלוי פרודקשן, יש לספק מסמך ייעודי.
      </div>
    </footer>
  );
};
