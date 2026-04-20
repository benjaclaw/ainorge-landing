function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      <span className="text-[#E8553A]">&gt;</span>
      <span className="text-white">AI NORGE</span>
    </span>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="mt-1 h-5 w-5 flex-shrink-0 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export default function Home() {
  const skoolUrl = "https://www.skool.com/ai-norge";

  return (
    <div className="flex flex-col min-h-full bg-background text-foreground">
      {/* Header */}
      <header className="w-full border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo className="text-xl" />
          <a
            href={skoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Bli medlem
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="mb-6 inline-block rounded-md border border-white/20 bg-white/5 px-3 py-1 text-sm text-gray-300">
                Et helt nytt AI-fellesskap
              </span>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Hold deg i{" "}
                <span className="gradient-text">frontlinjen av AI</span>
              </h1>
              <p className="mb-8 max-w-lg text-lg text-gray-400 md:text-xl">
                AI Norge er et fellesskap for alle som vil gå fra å bare snakke
                om AI til å faktisk bruke det.
              </p>
              <a
                href={skoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-teal px-8 py-3.5 text-base font-bold text-black transition-opacity hover:opacity-90"
              >
                Bli medlem gratis
              </a>
            </div>

            {/* Logo card preview */}
            <div className="hidden lg:block">
              <div className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#141c2a] shadow-2xl">
                <div className="flex flex-col items-center justify-center bg-[#0d1117] px-8 py-10">
                  <Logo className="text-3xl" />
                  <span className="mt-2 text-lg text-gray-500">2026</span>
                </div>
                <div className="px-6 py-5">
                  <p className="font-bold text-white">AI Norge</p>
                  <p className="text-sm text-gray-400">skool.com/ai-norge</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Norges møteplass for AI. Et fellesskap for alle som vil
                    lære, dele erfaringer og holde seg oppdatert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership cards */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Standard / Free */}
            <div className="free-card rounded-2xl p-8 transition-all md:p-10">
              <span className="mb-4 inline-block rounded-full bg-teal/15 px-4 py-1 text-sm font-semibold text-teal">
                Gratis
              </span>
              <h2 className="mb-6 text-2xl font-extrabold text-white md:text-3xl">
                For deg som vil følge med
              </h2>
              <ul className="mb-8 space-y-4 text-gray-300">
                <CheckItem>Tilgang til åpent forum</CheckItem>
                <CheckItem>
                  Nyheter og trender – vi sorterer støyen
                </CheckItem>
                <CheckItem>
                  Nettverksbygging med andre AI-interesserte
                </CheckItem>
                <CheckItem>Sosiale diskusjoner om AI i hverdagen</CheckItem>
              </ul>
              <a
                href={skoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-lg bg-teal py-3 text-center font-bold text-black transition-opacity hover:opacity-90"
              >
                Bli med gratis
              </a>
            </div>

            {/* Premium */}
            <div className="premium-card rounded-2xl p-8 transition-all md:p-10">
              <span className="mb-4 inline-block rounded-full bg-amber-500/15 px-4 py-1 text-sm font-semibold text-amber-400">
                Premium 🔥
              </span>
              <h2 className="mb-6 text-2xl font-extrabold text-white md:text-3xl">
                For deg som vil mer
              </h2>
              <ul className="mb-8 space-y-4 text-gray-300">
                <CheckItem>Full tilgang til alle kurs</CheckItem>
                <CheckItem>Eksklusive ukentlige AI-tips</CheckItem>
                <CheckItem>Teknisk hjelp i lukket forum</CheckItem>
                <CheckItem>OpenClaw Mastery-kurs inkludert</CheckItem>
              </ul>
              <p className="mb-6">
                <span className="text-3xl font-extrabold text-amber-400">
                  49 USD
                </span>
                <span className="text-gray-400"> / mnd</span>
              </p>
              <a
                href={skoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full rounded-lg bg-amber-500 py-3 text-center font-bold text-black transition-opacity hover:opacity-90"
              >
                Kom i gang
              </a>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="mb-10 text-3xl font-extrabold text-white md:text-4xl">
            Tilgjengelige kurs
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300">
                Forkurs / Grunnkurs
              </span>
              <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-400">
                Inkludert i Premium
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              OpenClaw Mastery
            </h3>
            <p className="max-w-2xl text-gray-400">
              Lær strategien, strukturen og bruksområdene for AI-agenter. Dette
              kurset gir deg fundamentet du trenger før de praktiske modulene
              starter.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="mb-6 text-3xl font-extrabold text-white md:text-4xl">
            Velkommen til AI Norge 🇳🇴
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
            AI Norge ble lansert i april 2026 som et norsk samlingspunkt for
            alle som vil mestre AI i praksis. Enten du er ansatt, bedriftseier
            eller hobby-utvikler, hjelper vi deg med å holde deg i frontlinjen.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
          <Logo className="text-lg" />
          <a
            href={skoolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 transition-colors hover:text-white"
          >
            skool.com/ai-norge
          </a>
          <p className="text-sm text-gray-500">&copy; 2026 AI Norge</p>
        </div>
      </footer>
    </div>
  );
}
