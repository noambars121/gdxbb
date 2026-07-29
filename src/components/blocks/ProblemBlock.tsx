import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProblemCard } from '@/components/ui/ProblemCard';

export function ProblemBlock() {
  return (
    <section className="bg-paper pt-24 pb-16 lg:pt-28 lg:pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel text="הבעיה בשוק" light />

        <h2 className="mt-4 text-h2 lg:text-[40px] font-extrabold text-brand-text leading-tight">
          האתר שלכם לא רק ״לא עוזר״.
          <br />
          הוא עולה לכם לידים.
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProblemCard
            title="האתר נראה טוב, אבל לא מוביל לפעולה"
            body="גולשים נכנסים, מתרשמים, ויוצאים — כי אין מסלול ברור שמוביל אותם לפנות."
          />
          <ProblemCard
            title="הפרסום מביא תנועה לאתר שלא מוכן לקבל אותה"
            body="קמפיין, המלצה, חיפוש בגוגל — כולם מביאים מבקרים. האתר צריך לסגור את הפער."
          />
          <ProblemCard
            title="יותר מדי ספקים, בלי גורם אחד שאחראי לתוצאה"
            body="מעצב, מפתח, מפרסם — כל אחד עובד בנפרד. אתם נשארים לנהל את החיבורים."
          />
        </div>

        <p className="mt-10 text-body-lg font-medium text-brand-text text-center">
          זה בדיוק מה שאנחנו פותרים.
        </p>
      </div>
    </section>
  );
}
