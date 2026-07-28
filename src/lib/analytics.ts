export type AnalyticsEventName =
  | 'whatsapp_cta_click'
  | 'email_cta_click'
  | 'portfolio_link_click';

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/**
 * Fires a GA4 event when a provider is configured (NEXT_PUBLIC_GA_MEASUREMENT_ID
 * set at build time, which injects gtag in the root layout). Safe no-op otherwise,
 * so CTA components never depend on analytics being present.
 */
export function trackEvent(
  name: AnalyticsEventName,
  params: Record<string, string> = {}
): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}
