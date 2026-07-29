import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProcessStage } from '@/components/ui/ProcessStage';

export function ProcessBlock() {
  return (
    <section className="bg-ink py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel text="תהליך העבודה" light={false} />

        <h2 className="mt-4 text-h2 lg:text-[40px] font-extrabold text-surface leading-tight">
          פשוט, שקוף ומהיר
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          <ProcessStage
            number="01"
            title="שיחת התאמה"
            body="בודקים אם יש התאמה, מה המטרה העסקית, ומה באמת צריך — בלי למכור לכם מה שלא נחוץ."
          />
          <ProcessStage
            number="02"
            title="אסטרטגיה, עיצוב ובנייה"
            body="עובדים בשלבים מסודרים עם נקודות אישור ברורות. אתם יודעים מה קורה בכל שלב."
          />
          <ProcessStage
            number="03"
            title="עלייה לאוויר והמשך צמיחה"
            body="משיקים, מחברים ערוצי פנייה, ומכינים בסיס למדידה ולצמיחה הבאה."
          />
        </div>
      </div>
    </section>
  );
}
