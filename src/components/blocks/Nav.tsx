export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-ink/90 backdrop-blur-sm border-b border-white/5">
      <div className="h-full max-w-5xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <span className="text-surface font-bold text-body-lg">Gemini Digital × BarsBuild</span>
        <a
          href="#cta"
          className="bg-brand-blue text-ink font-bold text-body-sm px-4 py-2 rounded-md shrink-0"
        >
          בדקו את האתר שלכם
        </a>
      </div>
    </header>
  );
}
