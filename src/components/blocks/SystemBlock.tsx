import { SectionLabel } from '@/components/ui/SectionLabel';
import { StepItem } from '@/components/ui/StepItem';

export function SystemBlock() {
  return (
    <section className="bg-ink-soft py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel text="הפתרון המשולב" light={false} />

        <h2 className="mt-4 text-h2 lg:text-[40px] font-extrabold text-surface leading-tight">
          כך בונים אתר שעובד
          <br />
          בשביל העסק
        </h2>

        <div className="mt-12 relative">
          <div className="hidden lg:block absolute top-6 right-8 left-8 h-px bg-brand-gold opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            <StepItem
              number="01"
              title="מבינים את הלקוח"
              body="מגדירים מי צריך להגיע, מה חשוב לו, ומה גורם לו לבחור."
            />
            <StepItem
              number="02"
              title="בונים מסלול המרה"
              body="מסרים, היררכיה, עיצוב וקריאות לפעולה שמניעים את האדם הנכון לשיחה."
            />
            <StepItem
              number="03"
              title="מוציאים לפועל בלי פשרות"
              body="אתר מהיר, מותאם למובייל, נגיש וקל להמשך צמיחה."
            />
            <StepItem
              number="04"
              title="מודדים ומשפרים"
              body="מחברים מדידה, מעקב אחרי פניות, ומכינים בסיס לצמיחה הבאה."
            />
          </div>
        </div>

        <p className="mt-12 text-body-sm text-brand-muted text-center">
          <span className="text-surface font-medium">Gemini Digital</span> מובילים את אסטרטגיית
          ההמרה והמסרים.{' '}
          <span className="text-surface font-medium">BarsBuild</span> בונים את המערכת הדיגיטלית
          שמוציאה אותה לפועל.
        </p>
      </div>
    </section>
  );
}
