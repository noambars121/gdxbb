export function CTABlock() {
  return (
    <section id="cta" className="bg-ink py-20 lg:py-24 border-t border-white/10">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-h2 lg:text-[40px] font-extrabold text-surface leading-tight">
          לפני שאתם משקיעים באתר חדש —
          <br />
          בדקו מה באמת מעכב אתכם.
        </h2>

        <p className="mt-6 text-body lg:text-body-lg text-brand-muted leading-relaxed max-w-xl mx-auto">
          בשיחת התאמה קצרה נבין מה האתר הנוכחי עושה, איפה הוא מאבד פניות, והאם אתר חדש או
          שדרוג הוא באמת הצעד הנכון.
        </p>

        <p className="mt-6 text-body text-surface font-medium">
          אם אין התאמה, נגיד את זה ישירות.
        </p>

        <div className="mt-10">
          <a
            href="https://wa.me/972555073405"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-ink font-extrabold text-body-lg px-8 py-4 rounded-lg w-full max-w-sm block mx-auto text-center"
          >
            שלחו לנו את האתר לבדיקה — WhatsApp
          </a>
        </div>

        <div className="mt-4">
          <a
            href="mailto:geminidigital.ads@gmail.com"
            className="text-brand-muted text-body hover:text-surface transition-colors"
          >
            שליחת הודעה באימייל
          </a>
        </div>

        <p className="mt-6 text-label text-brand-muted">
          שיחת התאמה קצרה · ללא התחייבות · תשובה תוך יום עסקים
        </p>
      </div>
    </section>
  );
}
