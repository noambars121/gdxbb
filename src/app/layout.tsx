import type { Metadata, Viewport } from 'next';
import { Heebo, Inter } from 'next/font/google';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Gemini Digital × BarsBuild | ארכיטקטורת ואינטגרציית אתרי פרימיום',
  description:
    'שילוב הכוחות של Gemini Digital ו-BarsBuild: אתרי תדמית ומכירה בעלי ארכיטקטורה מתקדמת, מהירות טעינה פנומנלית, וחוויית משתמש ממירה לעסקים שרוצים תוצאות.',
  keywords: [
    'Gemini Digital',
    'BarsBuild',
    'פיתוח אתרים',
    'בניית אתרים',
    'אתר תדמית',
    'UX Architecture',
    'Next.js',
    'Tailwind CSS',
    'RTL Website',
  ],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <body className="bg-background text-slate-100 font-hebrew antialiased selection:bg-brand-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
