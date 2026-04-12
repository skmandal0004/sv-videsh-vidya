import { useState, useEffect, useRef } from "react";

// ─── Brand Tokens ────────────────────────────────────────────────────────────
// Dark:    #1A152D   Accent: #6B4EFF   Highlight: #FDE047 (yellow-300)
// Font:    'Outfit' (display) + 'DM Sans' (body) via Google Fonts

// ─── Google Fonts loader ─────────────────────────────────────────────────────
function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ─── Intersection-observer hook for scroll reveals ───────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Dark-mode hook ──────────────────────────────────────────────────────────
function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial value
    setDark(media.matches);

    // Listen for changes
    const listener = (e) => setDark(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return dark;
}

// ─── Reusable atoms ──────────────────────────────────────────────────────────
function Pill({ children, dark }) {
  return (
    <span
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className={`inline-block text-[11px] font-semibold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-5
        ${dark ? "bg-yellow-400/15 text-yellow-300 border border-yellow-400/30"
          : "bg-yellow-300 text-[#1A152D]"}`}
    >
      {children}
    </span>
  );
}

function Section({ children, className = "", id = "" }) {
  const [ref, vis] = useReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </section>
  );
}

function PrimaryBtn({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className={`inline-flex items-center justify-center text-center
        bg-yellow-300 hover:bg-yellow-400 active:scale-95 transition-all
        text-[#1A152D] font-bold px-8 py-3.5 rounded-xl
        shadow-lg shadow-yellow-400/20 ${className}`}
    >
      {children}
    </a>
  );
}

function GhostBtn({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className={`inline-block border-2 border-white/60 text-white hover:bg-white/10 hover:border-white
        active:scale-95 transition-all font-semibold px-8 py-3.5 rounded-xl ${className}`}
    >
      {children}
    </a>
  );
}

// ─── FAQ Item ────────────────────────────────────────────────────────────────
function FaqItem({ q, a, dark }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-200
      ${dark
        ? `border-white/10 ${open ? "bg-white/8" : "bg-white/4 hover:bg-white/6"}`
        : `border-slate-200 ${open ? "bg-indigo-50/60" : "bg-white hover:bg-slate-50"}`}`}>
      <button
        onClick={() => setOpen(p => !p)}
        className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <span className={`font-semibold text-sm md:text-base ${dark ? "text-white" : "text-[#1A152D]"}`}>{q}</span>
        <span className={`text-2xl font-light flex-shrink-0 transition-transform duration-200
          ${open ? "rotate-45" : ""} ${dark ? "text-yellow-300" : "text-[#6B4EFF]"}`}>+</span>
      </button>
      {open && (
        <div className={`px-6 pb-5 text-sm leading-relaxed border-t
          ${dark ? "border-white/10 text-slate-300" : "border-indigo-100 text-slate-600"}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <div className="pt-4">{a}</div>
        </div>
      )}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const STATS = [
  { num: "500+", label: "Students Trained" },
  { num: "C1", label: "Certified Trainers" },
  { num: "A1–B1", label: "Levels Covered" },
  { num: "95%", label: "Pass Rate" },
];

const WHY_LEARN = [
  { emoji: "🌍", title: "200M+ Speakers", desc: "German is the most spoken native language in Europe." },
  { emoji: "🎓", title: "Free Education", desc: "Study at German universities with zero tuition fees." },
  { emoji: "💼", title: "Career Growth", desc: "High demand in engineering, healthcare, and finance." },
  { emoji: "🔬", title: "Research Hub", desc: "Germany leads global science and innovation." },
  { emoji: "🇪🇺", title: "EU Advantage", desc: "Opens doors across 27 European Union countries." },
  { emoji: "🏥", title: "Nursing & Medicine", desc: "Recognised pathway for Indian healthcare professionals." },
];

const LEVELS = [
  {
    code: "A1", label: "Beginner", duration: "6–8 Weeks",
    desc: "Start from zero. Learn sounds, greetings, numbers and everyday vocabulary.",
    points: ["Basic vocabulary & phrases", "Simple sentence construction", "Introductory grammar"],
    outcome: "Basic daily communication",
    accent: "#FDE047", accentDark: "#FDE04740",
  },
  {
    code: "A2", label: "Elementary", duration: "6–8 Weeks",
    desc: "Build confidence. Handle everyday conversations and written texts.",
    points: ["Daily conversation skills", "Improved grammar structures", "Reading simple passages"],
    outcome: "Confident everyday use",
    accent: "#6B4EFF", accentDark: "#6B4EFF40",
  },
  {
    code: "B1", label: "Intermediate", duration: "8–10 Weeks",
    desc: "Reach professional proficiency. Ideal for Goethe B1 certification.",
    points: ["Fluent spoken expression", "Structured essay writing", "Real-world content comprehension"],
    outcome: "Professional-level communication",
    accent: "#1A152D", accentDark: "#6B4EFF60",
  },
];

const PACKAGES = [
  {
    name: "Basic + A1", hours: "72+ Hours",
    features: ["Practice Tests", "Core Vocabulary", "Speaking Sessions", "Class Recordings"],
    popular: false,
  },
  {
    name: "A1 + A2", hours: "125 Hours",
    features: ["Practice Tests", "Advanced Vocabulary", "Speaking Practice", "Full Recordings"],
    popular: false,
  },
  {
    name: "A1 + A2 + B1", hours: "177 Hours",
    features: ["Complete Practice Tests", "Full Vocabulary Suite", "Intensive Speaking", "All Recordings"],
    popular: true,
  },
];

const EXAM_MODULES = [
  { icon: "🎧", name: "Listening", desc: "Exam-format audio with native speakers" },
  { icon: "📖", name: "Reading", desc: "Skimming, scanning & comprehension drills" },
  { icon: "✍️", name: "Writing", desc: "Formal letters, essays & structured responses" },
  { icon: "🗣️", name: "Speaking", desc: "Role-plays & mock interviews with trainers" },
];

const BATCHES = [
  { name: "German Basic – Morning", ist: "08:00 – 09:00 AM", cet: "03:30 – 04:30 AM", weeks: "4 Weeks", tag: "morning" },
  { name: "German A1 – Morning", ist: "09:00 – 10:30 AM", cet: "04:30 – 06:00 AM", weeks: "7 Weeks", tag: "morning" },
  { name: "German A2 – Morning", ist: "09:00 – 10:30 AM", cet: "04:30 – 06:00 AM", weeks: "7 Weeks", tag: "morning" },
  { name: "German Basic – Evening", ist: "07:30 – 08:30 PM", cet: "03:00 – 04:00 PM", weeks: "4 Weeks", tag: "evening" },
  { name: "German A1 – Evening", ist: "09:00 – 10:30 PM", cet: "04:30 – 06:00 PM", weeks: "7 Weeks", tag: "evening" },
  { name: "German A2 – Evening", ist: "09:00 – 10:30 PM", cet: "04:30 – 06:00 PM", weeks: "7 Weeks", tag: "evening" },
  { name: "German B1 – Evening", ist: "06:00 – 07:00 PM", cet: "01:30 – 02:30 PM", weeks: "9 Weeks", tag: "evening" },
];

const WHY_US = [
  { icon: "🎯", title: "German Specialists", desc: "100% dedicated German faculty — not a side offering." },
  { icon: "🎓", title: "C1 Certified Trainers", desc: "Our instructors hold top-level German certifications." },
  { icon: "📚", title: "Complete Study Material", desc: "Workbooks, grammar notes and portal access included." },
  { icon: "🧠", title: "Smart Learning Portal", desc: "Practice anytime on our adaptive online platform." },
  { icon: "📈", title: "Result-Oriented", desc: "Every batch is tailored around your actual visa or exam goal." },
  { icon: "🌐", title: "Study Abroad Support", desc: "End-to-end guidance from language to university admission." },
];

const FAQS = [
  { q: "I don't know a single word of German. Can I join?", a: "Absolutely. Our Basic batch is built for absolute beginners. We start from alphabet sounds, greetings and simple phrases so you're comfortable from the very first class." },
  { q: "Which German levels do you offer?", a: "We cover Basic, A1, A2 and B1 levels aligned with the CEFR framework. You can start from scratch or join a higher level after a short placement assessment with our trainer." },
  { q: "Do you provide Goethe exam preparation?", a: "Yes — Goethe exam prep is a core part of every batch. All four modules (Listening, Reading, Writing, Speaking) are covered with real exam-style practice and mock tests." },
  { q: "Are the classes online or offline?", a: "All batches are live online sessions via video conferencing. You can join from anywhere in India or abroad and still access the full course experience." },
  { q: "How long does each level take to complete?", a: "A1 is approximately 6–8 weeks, A2 is 6–8 weeks, and B1 requires 8–10 weeks. Duration is also personalised during your free counselling call based on your schedule and goals." },
  { q: "What if I miss a live class?", a: "All sessions are recorded. Recordings are uploaded to our portal within 24 hours so you can catch up at your own pace without missing any content." },
  { q: "Will I receive a certificate after completing the course?", a: "Yes. SV Videsh Vidya issues a course completion certificate for every level. For internationally recognised certification, we guide you through the official Goethe exam registration process." },
  { q: "Can you help with my German university application after the course?", a: "Yes. As a full-service study abroad consultancy, we provide university shortlisting, SOP writing, application filing, and visa guidance — all under one roof." },
];

// ─── Background image URLs (Unsplash, free) ──────────────────────────────────
const BG = {
  hero: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1800&q=80", // Brandenburg Gate
  benefits: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80", // students studying
  goethe: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80", // library books
  cta: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80", // conference/success
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function GermanPage() {
  const dark = useDarkMode();

  const dm = {
    page: dark ? "bg-[#0F0C1D] text-white" : "bg-white text-[#1A152D]",
    card: dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200",
    cardHover: dark ? "hover:bg-white/8 hover:border-[#6B4EFF]/60" : "hover:shadow-xl hover:border-[#6B4EFF]/40",
    muted: dark ? "text-slate-400" : "text-slate-500",
    subtle: dark ? "bg-white/4" : "bg-slate-50",
    border: dark ? "border-white/8" : "border-slate-200",
    heading: dark ? "text-white" : "text-[#1A152D]",
    body: dark ? "text-slate-300" : "text-slate-600",
    tableRow: dark ? "border-white/6 hover:bg-white/4" : "border-slate-100 hover:bg-indigo-50/40",
    tableAlt: dark ? "bg-white/3" : "bg-slate-50/60",
  };

  return (
    <>
      <FontLoader />
      <div className={`${dm.page} min-h-screen transition-colors duration-300`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Dark Mode Toggle (floating) ───────────────────────────────
        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center
            shadow-2xl transition-all active:scale-90 border
            ${dark ? "bg-[#1A152D] border-yellow-400/40 text-yellow-300" : "bg-white border-slate-200 text-[#1A152D]"}`}
        >
          {dark ? "☀️" : "🌙"}
        </button> */}

        {/* ══════════════════════════════════════════════════════════════
            HERO — Brandenburg Gate backdrop
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img src={BG.hero} alt="Brandenburg Gate, Berlin" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(120deg, rgba(26,21,45,0.97) 0%, rgba(26,21,45,0.88) 45%, rgba(107,78,255,0.55) 100%)" }} />
          </div>

          {/* Decorative grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

          <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Left copy */}
              <div className="flex-1 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🇩🇪</span>
                  <span className="text-yellow-300 text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    German Language Program · SV Videsh Vidya
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Learn German<br />
                  <span className="text-yellow-300">From Beginner</span><br />
                  <span className="text-white/70">to B1 Level</span>
                </h1>

                <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Live online classes · CEFR A1–B1 · Goethe exam preparation —
                  taught by C1-certified trainers at India's trusted study-abroad consultancy.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-10 max-w-md">
                  {["C1 Certified Trainers", "Live Interactive Classes", "Goethe Exam Prep", "Class Recordings"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-200">
                      <span className="w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center flex-shrink-0">
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6 8 1" stroke="#1A152D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <PrimaryBtn href="/contact">Book Free Demo →</PrimaryBtn>
                  <GhostBtn href="#enroll">View Courses</GhostBtn>
                </div>
              </div>

              {/* Right — Stats card */}
              <div className="flex-shrink-0 w-full lg:w-80">
                <div className="rounded-3xl border border-white/15 p-8"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
                  <p className="text-yellow-300 font-semibold text-sm mb-6 tracking-wide"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}>Why Students Choose Us</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {STATS.map(s => (
                      <div key={s.label} className="rounded-2xl p-4 text-center"
                        style={{ background: "rgba(255,255,255,0.07)" }}>
                        <p className="text-2xl font-black text-yellow-300 mb-0.5"
                          style={{ fontFamily: "'Outfit', sans-serif" }}>{s.num}</p>
                        <p className="text-xs text-slate-300">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2.5 text-sm">
                    {[["Levels", "A1 · A2 · B1"], ["Mode", "Live Online"], ["Exam", "Goethe Prep"], ["Certificate", "Included"]].map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-white/8 pb-2">
                        <span className="text-slate-400">{k}</span>
                        <span className="text-white font-semibold">{v}</span>
                      </div>
                    ))}
                  </div>

                  <a href="/contact"
                    className="mt-6 block text-center bg-yellow-300 text-[#1A152D] font-bold py-3 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all text-sm">
                    Get Free Counselling
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            TRUST BAR
        ══════════════════════════════════════════════════════════════ */}
        <div className={`border-y ${dm.border} ${dark ? "bg-[#13102A]" : "bg-[#1A152D]"}`}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-12 gap-y-3">
            {[
              "🇩🇪  CEFR A1 · A2 · B1 Certified",
              "🎯  Goethe Exam Preparation",
              "📹  Live Classes + Recordings",
              "🎓  Study Abroad Guidance",
              "🏆  95% Pass Rate",
            ].map(t => (
              <span key={t} className="text-slate-300 text-sm font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            WHY LEARN GERMAN
        ══════════════════════════════════════════════════════════════ */}
        <Section className={`py-24 ${dm.subtle}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Pill dark={dark}>Why German?</Pill>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${dm.heading}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why Learn German?
              </h2>
              <p className={`max-w-2xl mx-auto text-lg ${dm.muted}`}>
                With 200M+ speakers and free university education, German is one of the most valuable
                languages an Indian student or professional can learn.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_LEARN.map((item, i) => (
                <div key={item.title}
                  className={`group flex gap-5 items-start rounded-2xl border p-6 transition-all duration-300 cursor-default ${dm.card} ${dm.cardHover}`}
                  style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <p className={`font-bold text-base mb-1.5 group-hover:text-[#6B4EFF] transition-colors ${dm.heading}`}
                      style={{ fontFamily: "'Outfit', sans-serif" }}>{item.title}</p>
                    <p className={`text-sm leading-relaxed ${dm.body}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            BENEFITS — with photo backdrop
        ══════════════════════════════════════════════════════════════ */}
        <Section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.benefits} alt="Students studying" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0"
              style={{
                background: dark
                  ? "linear-gradient(90deg, rgba(15,12,29,0.98) 50%, rgba(15,12,29,0.75) 100%)"
                  : "linear-gradient(90deg, rgba(255,255,255,0.98) 50%, rgba(255,255,255,0.70) 100%)"
              }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-xl">
              <Pill dark={dark}>Benefits</Pill>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${dm.heading}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                A Language That<br />Opens Every Door
              </h2>
              <p className={`text-lg mb-10 ${dm.body}`}>
                German isn't just a course — it's your competitive edge in a globalised world.
              </p>
              <div className="space-y-4">
                {[
                  { emoji: "🌍", text: "International Job Opportunities Across Europe" },
                  { emoji: "🎓", text: "Affordable or Free Education at German Universities" },
                  { emoji: "🚀", text: "Faster to Learn Than Most European Languages" },
                  { emoji: "💼", text: "Preferred Language in Global Business & Finance" },
                  { emoji: "🏥", text: "Nursing & Healthcare Career Pathways to Germany" },
                  { emoji: "📈", text: "Boosts PR & Immigration Prospects Significantly" },
                ].map(b => (
                  <div key={b.text} className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: dark ? "rgba(107,78,255,0.2)" : "rgba(107,78,255,0.08)" }}>
                      {b.emoji}
                    </span>
                    <span className={`font-semibold ${dm.heading}`}>{b.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <PrimaryBtn href="/contact">Book a Free Demo →</PrimaryBtn>
              </div>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            LEVELS
        ══════════════════════════════════════════════════════════════ */}
        <Section id="levels" className={`py-24 ${dm.subtle}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Pill dark={dark}>Curriculum</Pill>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${dm.heading}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Choose Your Level
              </h2>
              <p className={`max-w-xl mx-auto text-lg ${dm.muted}`}>
                Begin where you are, and progress with a structured curriculum designed for results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {LEVELS.map(lvl => (
                <div key={lvl.code}
                  className={`relative rounded-3xl border-2 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${dark ? "bg-white/5" : "bg-white"}`}
                  style={{ borderColor: dark ? lvl.accentDark : lvl.accent }}>

                  {/* Level code badge */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl font-black"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      background: dark ? lvl.accentDark : lvl.accent + "22",
                      color: dark && lvl.code === "A1" ? "#FDE047" : lvl.accent === "#1A152D" ? (dark ? "#a78bfa" : "#1A152D") : lvl.accent
                    }}>
                    {lvl.code}
                  </div>

                  <h3 className={`text-2xl font-black mb-1 ${dm.heading}`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}>{lvl.label}</h3>
                  <p className="text-xs font-semibold text-[#6B4EFF] mb-4 tracking-wide">⏱ {lvl.duration}</p>
                  <p className={`text-sm mb-6 leading-relaxed ${dm.body}`}>{lvl.desc}</p>

                  <ul className="space-y-2.5 flex-1 mb-8">
                    {lvl.points.map(p => (
                      <li key={p} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-[#6B4EFF]/15 flex items-center justify-center flex-shrink-0">
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5 7 1" stroke="#6B4EFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className={dm.body}>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl px-4 py-3 text-sm font-bold flex items-center gap-2"
                    style={{ background: "#1A152D", color: "#FDE047" }}>
                    <span>✔</span> {lvl.outcome}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <PrimaryBtn href="/contact">Book a Free Demo →</PrimaryBtn>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            PACKAGES
        ══════════════════════════════════════════════════════════════ */}
        <Section id="enroll" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Pill dark={dark}>Pricing</Pill>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${dm.heading}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Course Packages
              </h2>
              <p className={`max-w-xl mx-auto text-lg ${dm.muted}`}>
                Choose the bundle that aligns with your goal — from a quick start to full fluency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PACKAGES.map(pkg => (
                <div key={pkg.name}
                  className={`relative rounded-3xl border-2 p-8 flex flex-col transition-all duration-300
                    ${pkg.popular
                      ? `shadow-2xl ${dark ? "border-[#6B4EFF] bg-gradient-to-b from-[#6B4EFF]/10 to-transparent" : "border-[#6B4EFF] bg-gradient-to-b from-indigo-50 to-white"}`
                      : `${dm.card} ${dm.cardHover} hover:-translate-y-1`}`}>

                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-yellow-300 text-[#1A152D] text-xs font-black px-5 py-1.5 rounded-full shadow-lg tracking-wide">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <h3 className={`text-xl font-black mb-1 ${dm.heading}`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}>{pkg.name}</h3>
                  <p className="text-[#6B4EFF] font-semibold text-sm mb-8">⏱ {pkg.hours} of Instruction</p>

                  <ul className="space-y-3 flex-1 mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <span className="w-5 h-5 rounded-full bg-yellow-300/20 flex items-center justify-center flex-shrink-0">
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6 8 1" stroke="#1A152D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        <span className={dm.body}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/contact"
                    className={`block text-center font-bold py-3.5 rounded-xl active:scale-95 transition-all text-sm
                      ${pkg.popular
                        ? "bg-yellow-300 text-[#1A152D] hover:bg-yellow-400 shadow-lg shadow-yellow-300/20"
                        : dark ? "bg-white/10 text-white hover:bg-white/15 border border-white/20" : "bg-[#1A152D] text-white hover:bg-[#2a1f4a]"}`}>
                    Enquire Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            GOETHE EXAM PREP — Library backdrop
        ══════════════════════════════════════════════════════════════ */}
        <Section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.goethe} alt="Library study" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(26,21,45,0.96) 0%, rgba(107,78,255,0.82) 100%)" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-white">
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-yellow-300/15 text-yellow-300 border border-yellow-300/25 mb-5">
                Exam Preparation
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Goethe Exam Preparation
              </h2>
              <p className="text-indigo-200 max-w-xl mx-auto text-lg">
                Every module is covered with dedicated practice sessions and mock exams.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {EXAM_MODULES.map(m => (
                <div key={m.name}
                  className="rounded-2xl border border-white/12 p-7 hover:border-yellow-300/40 hover:bg-white/10 transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" }}>
                  <div className="text-4xl mb-4">{m.icon}</div>
                  <p className="font-bold text-lg mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{m.name}</p>
                  <p className="text-indigo-200 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {["✔ Minimum 60% Score Required", "✔ Full Mock Test Included", "✔ Trainer-Led Feedback", "✔ All 4 Modules Covered"].map(t => (
                <span key={t} className="bg-white/8 border border-white/12 px-5 py-2.5 rounded-full text-sm text-indigo-100 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            BATCH TIMINGS
        ══════════════════════════════════════════════════════════════ */}
        <Section className={`py-24 ${dm.subtle}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <Pill dark={dark}>Schedule</Pill>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${dm.heading}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Batch Timings
              </h2>
              <p className={`max-w-xl mx-auto text-lg ${dm.muted}`}>
                Morning and evening slots for students and working professionals.
              </p>
            </div>

            <div className={`rounded-3xl overflow-hidden border ${dm.border} shadow-xl`}>
              {/* Table header */}
              <div className="grid grid-cols-4 px-6 py-4 text-xs font-black uppercase tracking-widest text-yellow-300"
                style={{ background: "linear-gradient(90deg, #1A152D, #6B4EFF)" }}>
                {["Batch", "IST Time", "CET Time", "Duration"].map(h => (
                  <span key={h}>{h}</span>
                ))}
              </div>

              {/* Rows */}
              {BATCHES.map((b, i) => (
                <div
                  key={b.name}
                  className={`grid grid-cols-4 items-center px-6 py-4 border-b text-sm transition-colors ${dm.tableRow} ${i % 2 !== 0 ? dm.tableAlt : ""}`}
                >
                  <span className={`font-bold ${dm.heading}`}>{b.name}</span>
                  <span className={dm.body}>{b.ist} IST</span>
                  <span className={dm.muted}>{b.cet} CET</span>
                  <span>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full
          ${b.tag === "morning"
                          ? dark ? "bg-yellow-400/15 text-yellow-300" : "bg-yellow-100 text-yellow-800"
                          : dark ? "bg-[#6B4EFF]/20 text-indigo-300" : "bg-indigo-100 text-indigo-800"}`}
                    >
                      {b.weeks}
                    </span>
                  </span>
                </div>
              ))}

              {/* ✅ Demo Class Row */}
              <div
  className={`grid grid-cols-4 items-center px-6 py-4 border-b text-sm transition-colors
    ${dark
      ? "bg-green-700 border-green-400/30 text-green-100"
      : "bg-green-200 border-green-200 text-green-900"}`}
>
  <span className="font-bold">Demo Class</span>
  <span>11:30 – 12:30 PM IST</span>
  <span className={`${dark ? "text-green-200" : "text-green-700"}`}>—</span>
  <span>
    <span
      className={`text-xs font-bold px-3 py-1 rounded-full
        ${dark
          ? "bg-green-400/20 text-green-200"
          : "bg-green-100 text-green-800"}`}
    >
      Free Demo
    </span>
  </span>
</div>
            </div>

            <p className={`text-center text-sm mt-6 ${dm.muted}`}>
              New batches start regularly — contact us to confirm the next available slot.
            </p>
            <div className="text-center mt-6">
              <PrimaryBtn href="/contact">Book a Free Demo →</PrimaryBtn>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════════════════════════════════════ */}
        <Section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Pill dark={dark}>Our Edge</Pill>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${dm.heading}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Why SV Videsh Vidya?
              </h2>
              <p className={`max-w-xl mx-auto text-lg ${dm.muted}`}>
                We don't just teach German — we walk with you from language to visa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_US.map((w, i) => (
                <div key={w.title}
                  className={`group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${dm.card} ${dm.cardHover}`}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                    style={{ background: dark ? "rgba(107,78,255,0.15)" : "rgba(107,78,255,0.08)" }}>
                    {w.icon}
                  </div>
                  <h3 className={`font-black text-lg mb-2 group-hover:text-[#6B4EFF] transition-colors ${dm.heading}`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}>{w.title}</h3>
                  <p className={`text-sm leading-relaxed ${dm.body}`}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            CTA — Crowd/success backdrop
        ══════════════════════════════════════════════════════════════ */}
        <Section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.cta} alt="Success celebration" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(26,21,45,0.95) 0%, rgba(107,78,255,0.85) 100%)" }} />
          </div>
          <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
            <div className="text-5xl mb-6">🇩🇪</div>
            <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}>
              Ready to Start Speaking<br />
              <span className="text-yellow-300">German?</span>
            </h2>
            <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
              Join our next batch today. Free demo session available — no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryBtn href="/contact" className="text-base px-10 py-4">Book Free Demo →</PrimaryBtn>
              <a href="tel:+919739722211"
                className="inline-block border-2 border-white/60 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white active:scale-95 transition-all text-base">
                Call Us
              </a>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════════ */}
        <Section className={`py-24 ${dm.subtle}`}>
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <Pill dark={dark}>FAQ</Pill>
              <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tight ${dm.heading}`}
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                Frequently Asked<br />Questions
              </h2>
              <p className={`text-lg ${dm.muted}`}>
                Everything you need to know before joining our German course.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} dark={dark} />)}
            </div>

            <div className="text-center mt-14">
              <p className={`mb-5 ${dm.muted}`}>Have a question we didn't answer?</p>
              <PrimaryBtn href="/contact">Contact Our Team →</PrimaryBtn>
            </div>
          </div>
        </Section>

      </div>
    </>
  );
}