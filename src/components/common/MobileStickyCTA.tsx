'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams, useWhatsAppHref } from '@/lib/utm';

/**
 * Mobile-only fixed bottom WhatsApp CTA (brief §4 — sticky CTA on mobile).
 * Hidden from md breakpoint up; sits above content but below the sticky header.
 */
export const MobileStickyCTA: React.FC = () => {
  const href = useWhatsAppHref();

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-surface/95 backdrop-blur-md border-t border-line px-4 pt-3"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent('whatsapp_cta_click', { location: 'sticky', ...getUtmParams() })
        }
        aria-label={`${SITE_CONFIG.cta.sticky} (נפתח בכרטיסייה חדשה)`}
        className="flex items-center justify-center gap-2.5 w-full bg-accent-blue hover:bg-accent-blue-hover text-ink font-bold text-sm sm:text-base px-4 py-3.5 rounded-xl shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue-ink focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-[0.98] transition-all"
      >
        <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <span>{SITE_CONFIG.cta.sticky}</span>
      </a>
    </div>
  );
};
