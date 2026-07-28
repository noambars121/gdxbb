'use client';

import { useEffect, useState } from 'react';
import { SITE_CONFIG } from '@/config/site';

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const MAX_UTM_VALUE_LENGTH = 80;

function sanitizeUtmValue(raw: string): string {
  return raw
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_UTM_VALUE_LENGTH);
}

/** Reads UTM parameters from the current URL, client-side only. Nothing is stored. */
export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  const search = new URLSearchParams(window.location.search);
  const params: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = search.get(key);
    if (value) {
      const clean = sanitizeUtmValue(value);
      if (clean) params[key] = clean;
    }
  }
  return params;
}

/** Renders present UTM values as a readable suffix for the WhatsApp message. */
export function formatUtmSuffix(params: UtmParams): string {
  const parts = UTM_KEYS.filter((key) => params[key]).map(
    (key) => `${key.replace('utm_', '')}=${params[key]}`
  );
  if (parts.length === 0) return '';
  return `\n\nמקור הגעה: ${parts.join(' | ')}`;
}

export function buildWhatsAppUrl(utm: UtmParams = {}): string {
  const message = SITE_CONFIG.contact.whatsappMessage + formatUtmSuffix(utm);
  return `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns the base WhatsApp URL for server-rendered HTML, then upgrades it after
 * mount with UTM metadata when present — keeping hydration consistent on a
 * fully static page.
 */
export function useWhatsAppHref(): string {
  const [href, setHref] = useState<string>(SITE_CONFIG.links.whatsappUrl);

  useEffect(() => {
    const utm = getUtmParams();
    if (Object.keys(utm).length > 0) {
      setHref(buildWhatsAppUrl(utm));
    }
  }, []);

  return href;
}
