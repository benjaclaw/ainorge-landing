"use client";

import { useState, useEffect } from "react";

const SKOOL_URL = "https://www.skool.com/ai-norge";

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-black tracking-tight ${className}`}>
      <span style={{ color: "#FF4D00" }}>&gt;</span>
      <span className="text-white">AI NORGE</span>
    </span>
  );
}

function CheckIcon({ color = "#00E5CC" }: { color?: string }) {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      {/* ─── NAVBAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur shadow-lg" : "nav-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
            <Logo className="text-xl" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#om" className="text-sm text-muted hover:text-white transition-colors">
              Om oss
            </a>
            <a href="#medlemskap" className="text-sm text-muted hover:text-white transition-colors">
              Medlemskap
            </a>
            <a href="#kurs" className="text-sm text-muted hover:text-white transition-colors">
              Kurs
            </a>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full px-5 py-2 text-sm"
            >
              Bli medlem
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden nav-blur border-t border-white/5 px-6 py-6 flex flex-col gap-4">
            <a
              href="#om"
              className="text-muted hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Om oss
            </a>
            <a
              href="#medlemskap"
              className="text-muted hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Medlemskap
            </a>
            <a
              href="#kurs"
              className="text-muted hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Kurs
            </a>
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full px-5 py-2.5 text-sm text-center mt-2"
            >
              Bli medlem
            </a>
          </div>
        )}
      </nav>

      <main>
        {/* ─── HERO ─── */}
        <section className="hero-bg min-h-screen flex items-center justify-center relative">
          <div className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center relative z-10">
            <div className="fade-in">
              <span className="pill text-muted mb-8 inline-flex">
                Lansert april 2026 🇳🇴
              </span>
            </div>

            <h1 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
              Bli med i det norske AI-fellesskapet.
            </h1>

            <p className="fade-in fade-in-delay-2 text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Et helt nytt digitalt fellesskap for alle som er interessert i AI.
            </p>

            <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={SKOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-8 py-3.5 text-base w-full sm:w-auto"
              >
                Bli med gratis →
              </a>
              <a
                href="#kurs"
                className="btn-ghost rounded-full px-8 py-3.5 text-base w-full sm:w-auto"
              >
                Se kursene
              </a>
            </div>

            <p className="fade-in fade-in-delay-4 text-sm text-muted/60">
              Gratis å starte &nbsp;•&nbsp; Ingen kredittkort &nbsp;•&nbsp; Norsk community
            </p>
          </div>
        </section>

        {/* ─── BENEFITS ─── */}
        <section className="section-glow py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
              Hvorfor AI Norge?
            </h2>
            <p className="text-center text-muted max-w-xl mx-auto mb-16">
              Alt du trenger for å holde deg oppdatert og relevant i AI-verdenen.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  emoji: "🚀",
                  title: "Praktisk læring",
                  desc: "Ikke teori, men faktiske verktøy og resultater. Lær å bruke AI i hverdagen.",
                },
                {
                  emoji: "🤝",
                  title: "Norsk nettverk",
                  desc: "Knytt kontakter med likesinnede i Norge. Del erfaringer og lær av hverandre.",
                },
                {
                  emoji: "🔥",
                  title: "Alltid oppdatert",
                  desc: "Vi sorterer AI-støyen og gir deg det som teller. Ukentlige oppdateringer og tips.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-2xl p-8">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MEMBERSHIP ─── */}
        <section id="medlemskap" className="py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
              Velg ditt medlemskap
            </h2>
            <p className="text-center text-muted max-w-xl mx-auto mb-16">
              Start gratis, oppgrader når du er klar.
            </p>

            <div className="grid gap-8 md:grid-cols-2 items-start">
              {/* Standard */}
              <div className="standard-card rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">Standard</h3>
                  <span className="rounded-full bg-teal/10 border border-teal/20 px-3 py-0.5 text-xs font-semibold text-teal">
                    GRATIS
                  </span>
                </div>

                <p className="mb-8">
                  <span className="text-4xl font-black">kr 0</span>
                  <span className="text-muted ml-1">/ mnd</span>
                </p>

                <ul className="space-y-4 mb-10 text-[15px]">
                  {[
                    "Åpent forum og diskusjoner",
                    "Nyheter og AI-trender ukentlig",
                    "Nettverksbygging i Norge",
                    "Grunnleggende ressurser",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SKOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center rounded-xl py-3.5 text-sm"
                >
                  Kom i gang gratis
                </a>
              </div>

              {/* Premium */}
              <div className="premium-card rounded-2xl p-8 md:p-10 md:scale-[1.03]">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <span className="rounded-full bg-gold/10 border border-gold/20 px-3 py-0.5 text-xs font-semibold text-gold">
                    🔥 POPULÆR
                  </span>
                </div>

                <p className="mb-8">
                  <span className="text-4xl font-black text-gold">$49</span>
                  <span className="text-muted ml-1">/ mnd</span>
                </p>

                <ul className="space-y-4 mb-10 text-[15px]">
                  {[
                    "Alt i Standard",
                    "Full kursbibliotek",
                    "Eksklusive ukentlige AI-tips",
                    "Teknisk hjelp i lukket forum",
                    "Tidlig tilgang til nye kurs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon color="#F5A623" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SKOOL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold block text-center rounded-xl py-3.5 text-sm"
                >
                  Start Premium i dag
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COURSES ─── */}
        <section id="kurs" className="section-glow py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
              Tilgjengelige kurs
            </h2>

            <div className="glass-card rounded-2xl overflow-hidden md:flex">
              {/* Thumbnail */}
              <div className="course-thumbnail md:w-72 lg:w-80 flex-shrink-0 p-10">
                <span className="text-4xl font-black">
                  <span style={{ color: "#FF4D00" }}>&gt;</span>
                  <span className="text-white">AI</span>
                </span>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-muted">
                    FORKURS
                  </span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-muted">
                    GRUNNKURS
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">OpenClaw - AI agenter som jobber for deg</h3>

                <p className="text-muted leading-relaxed mb-6 max-w-lg">
                  Lær strategien, strukturen og bruksområdene for AI-agenter. Få
                  fundamentet du trenger for å bygge kraftige automatiseringsarbeidsflyter.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold text-gold">
                    Inkludert i Premium
                  </span>
                  <a
                    href={SKOOL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal font-semibold text-sm hover:underline"
                  >
                    Les mer →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SOCIAL PROOF / ABOUT ─── */}
        <section id="om" className="py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <div className="proof-card rounded-2xl p-10 md:p-14 text-center">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300 mb-12 max-w-2xl mx-auto">
                &ldquo;AI Norge ble lansert for deg som er lei av å bare lese om AI
                — og vil faktisk bruke det.&rdquo;
              </p>

              <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <div>
                  <p className="text-2xl md:text-3xl font-black text-teal">2026</p>
                  <p className="text-sm text-muted mt-1">Lansert</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-teal">Gratis</p>
                  <p className="text-sm text-muted mt-1">Å starte</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-teal">Norsk</p>
                  <p className="text-sm text-muted mt-1">Community</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/5 mt-auto">
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo className="text-lg" />
            <span className="text-muted text-sm">Norges AI-fellesskap</span>
          </div>

          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-white transition-colors"
          >
            skool.com/ai-norge
          </a>

          <p className="text-sm text-muted/50">&copy; 2026 AI Norge</p>
        </div>
      </footer>
    </div>
  );
}
