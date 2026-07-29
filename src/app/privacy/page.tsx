import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות | GD × BB',
  // Kept out of search indexes until the approved policy content is published.
  robots: 'noindex, nofollow',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-brand-text font-sans flex items-center justify-center px-4 py-20">
      <div className="max-w-xl w-full text-center flex flex-col items-center gap-6 bg-surface border border-brand-line rounded-xl shadow-md p-8 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-text">מדיניות פרטיות</h1>

        <p className="text-brand-muted leading-relaxed">
          הנוסח המלא של מדיניות הפרטיות טרם פורסם, ויעלה לעמוד זה לאחר אישורו.
        </p>

        <p className="text-brand-muted text-body-sm leading-relaxed">
          פנייה דרך האתר מתבצעת ישירות ב-WhatsApp או אימייל. מידע שנמסר בפנייה ישמש לצורך
          מתן מענה בלבד.
        </p>

        <Link
          href="/"
          className="text-brand-blue hover:text-brand-text underline underline-offset-4 transition-colors"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </main>
  );
}
