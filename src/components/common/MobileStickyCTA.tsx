'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { getUtmParams, useWhatsAppHref } from '@/lib/utm';

/**
 * Mobile-only fixed bottom WhatsApp CTA (Part 6 of the rebuild brief).
 * Hidden from md breakpoint up; sits above content but below the sticky header.
 */
export const MobileStickyCTA: React.FC = () => {
  const href = useWhatsAppHref();

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-background/90 backdrop-blur-md border-t border-surface-border px-4 pt-3"
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
        className="flex items-center justify-center gap-2.5 w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-medium text-sm sm:text-base px-4 py-3.5 rounded-xl shadow-lg shadow-brand-accent/25 border border-sky-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] transition-all"
      >
        <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
        <span>{SITE_CONFIG.cta.sticky}</span>
      </a>
    </div>
  );
};
