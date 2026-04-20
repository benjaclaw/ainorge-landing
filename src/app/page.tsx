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
            <h1 className="fade-in fade-in-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
              Bli med i det norske{" "}
              <span className="gradient-text">AI-fellesskapet.</span>
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

            {/* Trust bar */}
            <div className="fade-in fade-in-delay-5 flex flex-col items-center gap-3 mt-10">
              {/* Avatar stack */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {["E", "M", "K", "T", "A"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#0a0608] flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, #E44040, #FDB840)`,
                        zIndex: 5 - i,
                      }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-white/70 ml-2">+47 medlemmer har allerede blitt med</span>
              </div>
              {/* Star rating */}
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FDB840">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="text-sm text-white/50 ml-1">&ldquo;Det beste norske AI-fellesskapet&rdquo;</span>
              </div>
            </div>

            {/* Hero visual — floating dashboard mockup */}
            <div className="fade-in fade-in-delay-5 mt-16 relative mx-auto max-w-3xl">
              {/* Glow behind card */}
              <div className="absolute inset-0 blur-3xl opacity-20 rounded-3xl" style={{background: "linear-gradient(135deg, #E44040, #FDB840)"}} />

              <div className="relative rounded-2xl border border-white/10 overflow-hidden" style={{background: "rgba(13,20,33,0.9)", backdropFilter: "blur(20px)"}}>
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{background: "rgba(255,255,255,0.03)"}}>
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-xs text-white/30">skool.com/ai-norge</span>
                </div>

                {/* Dashboard content */}
                <div className="p-6 grid grid-cols-3 gap-4">
                  {/* Left: Feed */}
                  <div className="col-span-2 space-y-3">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Siste innlegg</p>
                    {[
                      { name: "Erik M.", time: "2t siden", text: "Satte opp min første AI-agent med OpenClaw i dag! 🚀", likes: 12 },
                      { name: "Kari L.", time: "5t siden", text: "Noen som har testet GPT-5 til automatisering av epost?", likes: 8 },
                      { name: "Thomas A.", time: "1d siden", text: "Deler min blueprint for lead gen-agenten...", likes: 24 },
                    ].map((post, i) => (
                      <div key={i} className="rounded-xl p-3 border border-white/5" style={{background: "rgba(255,255,255,0.03)"}}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{background: "linear-gradient(135deg, #E44040, #FDB840)"}}>
                            {post.name[0]}
                          </div>
                          <span className="text-xs font-medium text-white/80">{post.name}</span>
                          <span className="text-[10px] text-white/30 ml-auto">{post.time}</span>
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed">{post.text}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <svg className="w-3 h-3 text-white/30" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/></svg>
                          <span className="text-[10px] text-white/30">{post.likes}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right: Stats */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Oversikt</p>
                    {[
                      { label: "Medlemmer", value: "47+", icon: "👥" },
                      { label: "Innlegg", value: "120+", icon: "💬" },
                      { label: "Kurs", value: "1 live", icon: "🎓" },
                    ].map((stat, i) => (
                      <div key={i} className="rounded-xl p-3 border border-white/5 text-center" style={{background: "rgba(255,255,255,0.03)"}}>
                        <p className="text-lg mb-0.5">{stat.icon}</p>
                        <p className="text-sm font-bold text-white">{stat.value}</p>
                        <p className="text-[10px] text-white/40">{stat.label}</p>
                      </div>
                    ))}

                    {/* CTA inside mockup */}
                    <a href="https://www.skool.com/ai-norge" target="_blank" rel="noopener noreferrer"
                      className="block mt-4 rounded-xl py-2.5 text-xs font-bold text-center text-[#080C14]"
                      style={{background: "linear-gradient(135deg, #E44040, #FDB840)"}}>
                      Bli med nå →
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                    className="gradient-text font-semibold text-sm hover:underline"
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
                  <p className="text-2xl md:text-3xl font-black gradient-text">2026</p>
                  <p className="text-sm text-muted mt-1">Lansert</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black gradient-text">Gratis</p>
                  <p className="text-sm text-muted mt-1">Å starte</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black gradient-text">Norsk</p>
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
