import type { Metadata, Viewport } from 'next';
import { Heebo, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F7F5F2',
};

export const metadata: Metadata = {
  // Staging base URL — production domain is TBD (Kain purchases before launch).
  metadataBase: new URL('https://gdxbb.vercel.app'),
  title: 'GD × BB | סטודיו לאתרי המרה ותשתיות צמיחה לעסקים בישראל',
  description:
    'Gemini Digital × BarsBuild בונים אתרי פרימיום לעסקים רציניים בישראל — ממוקדי המרה, מהירים ומותאמים לייצר פניות איכותיות. שיחת התאמה ללא התחייבות.',
  keywords: [
    'Gemini Digital',
    'BarsBuild',
    'סטודיו לאתרי המרה',
    'בניית אתרים לעסקים',
    'אתר תדמית ממיר',
    'דף נחיתה לקמפיינים',
  ],
  robots: 'index, follow',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'GD × BB',
    title: 'GD × BB | אתרי המרה לעסקים רציניים',
    description: 'אסטרטגיית המרה + פיתוח מדויק. צוות אחד. תוצאות מדידות.',
    // og:image intentionally omitted — no approved image asset exists yet.
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <body className="bg-page text-ink font-hebrew antialiased selection:bg-accent-cyan selection:text-ink">
        {children}
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
