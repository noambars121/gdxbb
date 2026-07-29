export function Footer() {
  return (
    <footer className="bg-footer py-10 px-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col gap-1">
            <a
              href="mailto:geminidigital.ads@gmail.com"
              className="text-brand-muted text-body-sm hover:text-surface transition-colors"
            >
              geminidigital.ads@gmail.com
            </a>
            <a
              href="https://wa.me/972555073405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-muted text-body-sm hover:text-surface transition-colors"
            >
              055-507-3405 (WhatsApp)
            </a>
          </div>
          <p className="text-brand-muted text-body-sm text-right lg:text-left">
            Gemini Digital × BarsBuild
            <br />
            סטודיו לאתרי המרה ותשתיות צמיחה
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-3">
          <p className="text-label text-brand-muted">
            © 2026 Gemini Digital × BarsBuild. כל הזכויות שמורות.
          </p>
          <a
            href="/privacy"
            className="text-label text-brand-muted hover:text-surface transition-colors"
          >
            מדיניות פרטיות
          </a>
        </div>
      </div>
    </footer>
  );
}
