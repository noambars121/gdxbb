'use client';

import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams, useWhatsAppHref } from '@/lib/utm';
import { MessageCircle, Mail } from 'lucide-react';

/** Footer — distinct deep surface (#090E17), separate from Final CTA ink. */
export const Footer: React.FC = () => {
  const whatsappHref = useWhatsAppHref();

  return (
    <footer className="w-full bg-footer text-paper/80 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand + Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-right gap-2">
          <div className="font-sans font-bold text-xl text-paper">
            Gemini Digital <span className="text-accent-gold">×</span> BarsBuild
          </div>
          <p className="text-sm text-paper/45 max-w-md">{SITE_CONFIG.categoryLabel}</p>
        </div>

        {/* Direct Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-paper/65">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('whatsapp_cta_click', { location: 'footer', ...getUtmParams() })
            }
            aria-label={`WhatsApp: ${SITE_CONFIG.contact.phoneDisplay} (נפתח בכרטיסייה חדשה)`}
            className="flex items-center gap-2 hover:text-paper transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-accent-blue" aria-hidden="true" />
            <span dir="ltr">{SITE_CONFIG.contact.phoneDisplay} (WhatsApp)</span>
          </a>
          <a
            href={SITE_CONFIG.links.mailtoUrl}
            onClick={() =>
              trackEvent('email_cta_click', { location: 'footer', ...getUtmParams() })
            }
            className="flex items-center gap-2 hover:text-paper transition-colors"
          >
            <Mail className="w-4 h-4 text-accent-blue" aria-hidden="true" />
            <span dir="ltr">{SITE_CONFIG.contact.email}</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between text-xs text-paper/40 gap-4">
        <span>
          © {new Date().getFullYear()} Gemini Digital × BarsBuild. כל הזכויות שמורות.
        </span>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
          <span>
            פנייה דרך האתר מתבצעת ישירות ב-WhatsApp או אימייל. מידע שנמסר בפנייה ישמש
            לצורך מתן מענה בלבד.
          </span>
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-paper transition-colors whitespace-nowrap"
          >
            מדיניות פרטיות
          </Link>
        </div>
      </div>
    </footer>
  );
};
