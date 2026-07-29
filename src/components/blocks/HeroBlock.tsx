import Image from 'next/image';

export function HeroBlock() {
  return (
    <section className="bg-ink pt-32 pb-0">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-h1-sm lg:text-h1 font-extrabold text-surface leading-tight text-center whitespace-pre-line">
          {'האתר שלכם אמור להביא פניות.\n'}
          <span className="text-brand-gold">לא רק להיראות טוב.</span>
        </h1>

        <p className="mt-6 text-body lg:text-body-lg text-brand-muted text-center max-w-xl mx-auto leading-relaxed">
          עסקים שבהם פנייה אחת שווה אלפי שקלים
          <br />
          לא יכולים להרשות לעצמם אתר שלא עובד.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/972555073405"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue text-ink font-extrabold text-body-lg px-8 py-4 rounded-lg w-full max-w-sm text-center block"
          >
            בדקו אם האתר שלכם בנוי להביא פניות
          </a>
        </div>

        <div className="mt-6 flex justify-center items-center gap-4 text-label text-brand-muted text-center flex-wrap">
          <span>אסטרטגיית המרה</span>
          <span className="text-brand-gold">·</span>
          <span>פיתוח מותאם אישית</span>
          <span className="text-brand-gold">·</span>
          <span>גורם אחד שאחראי לתוצאה</span>
        </div>

        <div className="mt-16 relative z-10 mx-auto max-w-lg">
          <div className="bg-surface rounded-xl shadow-2xl overflow-hidden mb-[-60px]">
            <div className="h-48 bg-brand-line flex items-center justify-center relative">
              <Image
                src="/images/santi-marzi-preview.svg"
                alt="Santi Marzi — פרויקט לדוגמה"
                width={512}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-brand-text font-bold text-card-title">Santi Marzi</p>
                <p className="text-brand-muted text-body-sm">מותג אופנה ויוקרה</p>
              </div>
              <a
                href="https://santimarzi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue text-body-sm font-medium hover:underline shrink-0"
              >
                ביקור באתר ←
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
