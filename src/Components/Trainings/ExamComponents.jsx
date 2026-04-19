/**
 * IELTSPage.jsx
 * Route: /ielts
 * Stack: Vite + React + Tailwind CSS
 * Fonts: Outfit (display) + DM Sans (body) — loaded via useEffect
 * Dark mode: system-preference-aware (prefers-color-scheme)
 * Color brand: #1A152D (dark navy) · #6B4EFF (violet) · #FDE047 (yellow)
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ─── Font Loader ─────────────────────────────────────────────────────────────
function FontLoader() {
  useEffect(() => {
    if (document.getElementById("svv-fonts")) return;
    const l = document.createElement("link");
    l.id = "svv-fonts";
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap";
    document.head.appendChild(l);
  }, []);
  return null;
}

// ─── System dark-mode ─────────────────────────────────────────────────────────
function useSystemDark() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const h = (e) => setDark(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return dark;
}

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, vis] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Reusable atoms ───────────────────────────────────────────────────────────
function Pill({ children, dark }) {
  return (
    <span
      className={`inline-block text-[11px] font-bold tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-5 ${dark
        ? "bg-yellow-400/15 text-yellow-300 border border-yellow-400/30"
        : "bg-yellow-300 text-[#1A152D]"
        }`}
      style={{ fontFamily: "'DM Sans',sans-serif" }}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children, dark, className = "" }) {
  return (
    <h2
      className={`text-4xl md:text-5xl font-black tracking-tight leading-tight ${dark ? "text-white" : "text-[#1A152D]"
        } ${className}`}
      style={{ fontFamily: "'Outfit',sans-serif" }}
    >
      {children}
    </h2>
  );
}

function PrimaryBtn({ children, href = "/contact", className = "" }) {
  return (
    <Link
      to={href}
      className={`inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400
        text-[#1A152D] font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-yellow-300/20
        active:scale-95 transition-all ${className}`}
      style={{ fontFamily: "'DM Sans',sans-serif" }}
    >
      {children}
    </Link>
  );
}

function GhostBtn({ children, href = "#", className = "" }) {
  return (
    <Link
      to={href}
      className={`inline-flex items-center gap-2 border-2 border-white/60 text-white
        hover:bg-white/10 hover:border-white active:scale-95 transition-all font-semibold
        px-8 py-3.5 rounded-xl ${className}`}
      style={{ fontFamily: "'DM Sans',sans-serif" }}
    >
      {children}
    </Link>
  );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FaqItem({ n, q, a, dark }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all ${dark
        ? `border-[#2e2a4a] ${open ? "bg-[#1C1830]" : "bg-[#16122A] hover:bg-[#1C1830]"}`
        : `border-slate-200 ${open ? "bg-indigo-50/50" : "bg-white hover:bg-slate-50"}`
        }`}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left"
      >
        <span
          className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 text-yellow-300"
          style={{
            background: "linear-gradient(135deg,#1A152D,#6B4EFF)",
            fontFamily: "'Outfit',sans-serif",
          }}
        >
          {n}
        </span>
        <span
          className={`flex-1 font-semibold text-sm md:text-base ${dark ? "text-white" : "text-[#1A152D]"
            }`}
          style={{ fontFamily: "'DM Sans',sans-serif" }}
        >
          {q}
        </span>
        <span
          className={`text-2xl font-light flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""
            } ${dark ? "text-yellow-300" : "text-[#6B4EFF]"}`}
        >
          +
        </span>
      </button>
      {open && (
        <div
          className={`px-6 pb-5 text-sm leading-relaxed border-t ${dark ? "border-[#2e2a4a] text-slate-300" : "border-indigo-100 text-slate-600"
            }`}
          style={{ fontFamily: "'DM Sans',sans-serif" }}
        >
          <div className="pt-4">{a}</div>
        </div>
      )}
    </div>
  );
}

// ─── Check icon ───────────────────────────────────────────────────────────────
function Check({ color = "#6B4EFF" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Unsplash backgrounds ─────────────────────────────────────────────────────
const BG = {
  hero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1800&q=80",
  batches: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80",
  why: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&q=80",
  curriculum: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80",
  demo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { num: "7+", label: "Avg Band Score" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "10K+", label: "Students Trained" },
  { num: "4.8★", label: "Google Rating" },
];

const WA_NUMBER = "919739722211"; // ← replace with your WhatsApp number (no + or spaces)

const BATCHES = [
  { name: "Morning Batch", time: "10:00 AM – 11:00 AM", seats: 2, tag: "morning", wa: "Hi! I'm interested in the IELTS Morning Batch (10:00 AM – 11:00 AM). Please share more details." },
  { name: "Afternoon Batch", time: "1:00 PM – 2:00 PM", seats: 3, tag: "afternoon", wa: "Hi! I'm interested in the IELTS Afternoon Batch (1:00 PM – 2:00 PM). Please share more details." },
  { name: "Evening Batch", time: "4:00 PM – 5:00 PM", seats: 3, tag: "evening", wa: "Hi! I'm interested in the IELTS Evening Batch (4:00 PM – 5:00 PM). Please share more details." },
  { name: "Night Batch", time: "8:30 PM – 9:30 PM", seats: 1, tag: "night", wa: "Hi! I'm interested in the IELTS Night Batch (8:30 PM – 9:30 PM). Please share more details." },
];


const FEATURES = [
  { icon: "📝", label: "80+ Mock Tests" },
  { icon: "🎯", label: "5 Simulation Tests" },
  { icon: "🗣️", label: "10 Speaking Evaluations" },
  { icon: "💬", label: "Live Doubt Sessions" },
  { icon: "📚", label: "Detailed Study Material" },
  { icon: "🎬", label: "Class Recordings" },
  { icon: "👥", label: "Max 5 Students / Batch" },
  { icon: "📊", label: "Trainer Score Tracking" },
  { icon: "🕐", label: "Flexible Batches" },
];

const ELITE_FEATURES = [
  { icon: "🔍", label: "Assessment Test", desc: "English assessment at start" },
  { icon: "🎥", label: "300+ Video Lessons", desc: "Vocabulary & grammar tips" },
  { icon: "🌅", label: "Beginner Live Classes", desc: "120 minutes / per day" },
  { icon: "🚀", label: "Advanced Live Classes", desc: "180 minutes / per day" },
  { icon: "📅", label: "60-Day Curriculum", desc: "Structured live syllabus" },
  { icon: "📋", label: "Practice Tests", desc: "Module-wise with evaluation" },
  { icon: "👨‍🏫", label: "Expert Evaluation", desc: "Checked by certified mentors" },
  { icon: "♾️", label: "180 Days Validity", desc: "Full access for 6 months" },
  { icon: "📄", label: "14+ Full Mock Tests", desc: "Exam-length IELTS mocks" },
  { icon: "🎁", label: "Free French Course", desc: "Bonus language included" },
  { icon: "⏰", label: "Flexible Timings", desc: "Morning · Afternoon · Evening" },
  { icon: "📖", label: "E-Books for Practice", desc: "Downloadable strategy books" },
];

const WHY_CHOOSE = [
  "1:1 Speaking Practice with Expert Trainers",
  "Personalised Feedback for All Modules",
  "Small Batch Sizes for Better Attention",
  "Real Exam-Style Mock Tests & Evaluation",
  "Proven Strategies to Score 7+ Bands",
  "Regular Doubt-Clearing Sessions",
  "Updated Material Based on Latest IELTS Pattern",
  "Dedicated Student Support Team",
  "Affordable Fees with High-Value Training",
  "Live + Recorded Classes for Flexible Learning",
  "Progress Tracking & Performance Reports",
  "Free Band Predictor Test Included",
];

const STEPS = [
  { n: "01", title: "Assessment", desc: "Initial test to understand your current level and target band requirements." },
  { n: "02", title: "Foundation Building", desc: "Strengthen grammar, vocabulary and core language concepts module-by-module." },
  { n: "03", title: "Strategy Sessions", desc: "Module-wise exam strategies to maximise your band score in each section." },
  { n: "04", title: "Practice + Mock Tests", desc: "Hands-on practice with real exam-pattern tests and detailed reviews." },
  { n: "05", title: "Final Evaluation", desc: "Final assessment with personalised feedback and improvement roadmap." },
];

const MODULES = [
  {
    icon: "📖",
    title: "Reading",
    sub: "Strategy & Speed",
    color: "#6B4EFF",
    desc: "Target accuracy and time management across Cambridge-level passages with a skill-first approach.",
    points: [
      "MCQs, Matching Information & Headings strategies",
      "True/False/Not Given & Yes/No/Not Given techniques",
      "Skimming, scanning & rapid comprehension drills",
      "Weekly Cambridge-style passages + guided reviews",
    ],
  },
  {
    icon: "✍️",
    title: "Writing",
    sub: "Structure & Band Techniques",
    color: "#1A152D",
    desc: "Step-by-step templates and targeted feedback to consistently achieve higher bands.",
    points: [
      "Band-winning templates for Academic & General Training",
      "Task 1 & Task 2: format, tone, task response & cohesion",
      "Model answers with line-by-line explanations",
      "Weekly graded submissions with examiner-style feedback",
    ],
  },
  {
    icon: "🗣️",
    title: "Speaking",
    sub: "Fluency & Confidence",
    color: "#D97706",
    desc: "Daily practice routines and mock interviews that build natural fluency and band-level answers.",
    points: [
      "Daily drills & 1:1 speaking practice with expert trainers",
      "Part 1/2/3 strategies + 200+ cue cards",
      "Pronunciation, intonation & lexical resource training",
      "Full mock interviews with examiner-style scoring",
    ],
  },
  {
    icon: "🎧",
    title: "Listening",
    sub: "Accuracy & Multi-Accent Practice",
    color: "#059669",
    desc: "Realistic audio practice with multi-accent exposure and question-type strategies.",
    points: [
      "Training for all four listening sections & question types",
      "Practice with British, Australian & American accents",
      "Map/diagram labelling, form completion & MCQ tactics",
      "Timed tests + detailed answer reviews",
    ],
  },
];

const DEMO_LEARN = [
  "Secrets to scoring 7+ in Speaking & Writing",
  "Latest exam pattern breakdown",
  "Band-wise marking criteria explained clearly",
  "Live Q&A with expert trainers",
  "Real sample answers & corrections",
  "Practical tips to improve fluency and accuracy",
];

const DEMO_WHO = [
  "IELTS beginners seeking guidance",
  "Students confused about Speaking or Writing",
  "Repeat test-takers targeting a higher band",
  "Both Academic & General Training aspirants",
];

const FAQS = [
  { q: "How many live classes will I get?", a: "For our flagship IELTS program we run daily live classes across the course duration, plus focused module sessions. Typical intake includes 20+ live class sessions overall and 10 dedicated live speaking evaluation sessions. Exact counts vary by course — contact us for the precise schedule for the package you choose." },
  { q: "How are speaking sessions conducted?", a: "Speaking evaluations are held live one-to-one over Zoom or our learning platform. Each session includes a simulated test, trainer feedback, and actionable tips to improve fluency, coherence and lexical range." },
  { q: "Do I receive class recordings?", a: "Yes — every live class and evaluation is recorded and uploaded to your student dashboard within 24–48 hours so you can rewatch lessons and revision material anytime." },
  { q: "What if I miss a class?", a: "Don't worry — watch the recorded session in your dashboard. If you need a quick recap, attend the next doubt-clearing slot or message your trainer; we'll guide you on what to cover before the next live class." },
  { q: "What is the refund policy?", a: "As our courses are 100% digital with instant access, we follow a no-refund policy. Once the content is delivered, refunds cannot be processed. We encourage you to attend the free demo session before enrolling." },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function IELTSPage() {
  const dark = useSystemDark();

  const d = {
    page: dark ? "bg-[#0F0C1D] text-white" : "bg-slate-50 text-[#1A152D]",
    card: dark ? "bg-[#16122A] border-[#2e2a4a]" : "bg-white border-slate-200",
    cardHov: dark ? "hover:border-[#6B4EFF]/60 hover:bg-[#1C1830]" : "hover:shadow-xl hover:border-[#6B4EFF]/40",
    muted: dark ? "text-slate-400" : "text-slate-500",
    body: dark ? "text-slate-300" : "text-slate-600",
    head: dark ? "text-white" : "text-[#1A152D]",
    sub: dark ? "bg-[#13102A]" : "bg-white",
    subtle: dark ? "bg-[#13102A]" : "bg-slate-50",
    border: dark ? "border-[#2e2a4a]" : "border-slate-200",
  };

  return (
    <>
      <FontLoader />

      <div className={`${d.page} min-h-screen transition-colors duration-300`}
        style={{ fontFamily: "'DM Sans',sans-serif" }}>

        {/* ── Top accent bar ─────────────────────────────────────────── */}
        <div style={{ height: 4, background: "linear-gradient(90deg,#1A152D,#6B4EFF)" }} />

        {/* ══════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.hero} alt="Students studying for IELTS" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(120deg,rgba(26,21,45,0.97) 0%,rgba(26,21,45,0.88) 45%,rgba(107,78,255,0.55) 100%)" }} />
          </div>
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

          <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Left */}
              <div className="flex-1 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🎓</span>
                  <span className="text-yellow-300 text-xs font-bold tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}>
                    IELTS Coaching · SV Videsh Vidya
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight"
                  style={{ fontFamily: "'Outfit',sans-serif" }}>
                  Don't Just<br />
                  Prepare —<br />
                  <span className="text-yellow-300">Get IELTS-Ready</span>
                </h1>

                <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
                  Live batches · 80+ mock tests · 1:1 speaking practice ·
                  Band 7+ proven strategies — all from Bangalore's most trusted
                  study-abroad consultancy.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-10 max-w-md">
                  {["C1 Certified Trainers", "Live Interactive Classes", "80+ Mock Tests", "Class Recordings Included"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-200">
                      <span className="w-4 h-4 rounded-full bg-yellow-300 flex items-center justify-center flex-shrink-0">
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                          <path d="M1 3.5L3.5 6 8 1" stroke="#1A152D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <PrimaryBtn href="https://wa.me/919739722211?text=Enquiry%20about%20IELTS%20class%20Demo">Book Free Demo →</PrimaryBtn>
                  <GhostBtn href="/training-time-table">View Batches</GhostBtn>
                </div>
              </div>

              {/* Right — stats card */}
              <div className="flex-shrink-0 w-full lg:w-80 rounded-3xl border border-white/15 p-8"
                style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}>
                <p className="text-yellow-300 font-semibold text-sm mb-6 tracking-wide">
                  Why Students Choose Us
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {STATS.map(s => (
                    <div key={s.label} className="rounded-2xl p-4 text-center"
                      style={{ background: "rgba(255,255,255,0.07)" }}>
                      <p className="text-2xl font-black text-yellow-300 mb-0.5"
                        style={{ fontFamily: "'Outfit',sans-serif" }}>{s.num}</p>
                      <p className="text-xs text-slate-300">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5 text-sm">
                  {[["Exam Types", "Academic & General"], ["Mode", "Live Online"], ["Batch Size", "Max 5 students"], ["Certificate", "Completion cert"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/8 pb-2">
                      <span className="text-slate-400">{k}</span>
                      <span className="text-white font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact"
                  className="mt-6 block text-center bg-yellow-300 text-[#1A152D] font-bold py-3 rounded-xl hover:bg-yellow-400 active:scale-95 transition-all text-sm">
                  Get Free Counselling
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust bar ──────────────────────────────────────────────── */}
        <div className={`border-y ${d.border} ${dark ? "bg-[#13102A]" : "bg-[#1A152D]"}`}>
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-x-10 gap-y-3">
            {["🎯  Band 7+ Proven Strategies", "📝  80+ Mock Tests", "👥  Max 5 Students / Batch", "🎬  All Classes Recorded", "🗣️  1:1 Speaking Practice"].map(t => (
              <span key={t} className="text-slate-300 text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            BATCHES
        ══════════════════════════════════════════════════════════ */}
        <section id="batches" className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.batches} alt="Student at desk" className="w-full h-full object-cover" />
            <div className="absolute inset-0"
              style={{
                background: dark
                  ? "linear-gradient(90deg,rgba(15,12,29,0.98) 1%,rgba(15,12,29,0.80) 100%)"
                  : "linear-gradient(90deg,rgba(248,250,252,0.98) 1%,rgba(248,250,252,0.80) 100%)"
              }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <Pill dark={dark}>Live Batches</Pill>
              <SectionHeading dark={dark}>IELTS Band Mastery Batches</SectionHeading>
              <p className={`mt-4 text-lg max-w-xl mx-auto ${d.muted}`}>
                Choose a running batch that fits your schedule. All batches include
                the same curriculum and trainer quality.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {BATCHES.map((b, i) => (
                <Reveal key={b.name} delay={i * 80}>
                  <div className={`relative rounded-3xl border-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1
                    ${d.card} ${d.cardHov}`}
                    style={{ borderColor: b.seats === 1 ? "#ef4444" : "#6B4EFF" }}>

                    {/* Seats badge */}
                    <div className="absolute -top-3 right-5">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${b.seats === 1 ? "bg-red-500 text-white" : "bg-yellow-300 text-[#1A152D]"
                        }`}>
                        {b.seats} seat{b.seats > 1 ? "s" : ""} left
                      </span>
                    </div>

                    <div className="text-3xl mb-4">
                      {b.tag === "morning" ? "🌅" : b.tag === "afternoon" ? "☀️" : b.tag === "evening" ? "🌇" : "🌙"}
                    </div>
                    <h3 className={`text-lg font-black mb-2 ${d.head}`}
                      style={{ fontFamily: "'Outfit',sans-serif" }}>{b.name}</h3>
                    <p className={`text-sm mb-1 ${d.muted}`}>Class Timing</p>
                    <p className="text-[#6B4EFF] font-bold text-sm mb-6">{b.time}</p>

                    <div className="mt-auto">
                      <a
                        href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(b.wa)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl active:scale-95 transition-all text-sm shadow-lg shadow-[#25D366]/20"
                      >
                        {/* WhatsApp SVG icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            COURSE FEATURES
        ══════════════════════════════════════════════════════════ */}
        <section className={`py-24 ${d.subtle}`}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <Pill dark={dark}>What's Included</Pill>
              <SectionHeading dark={dark}>Course Features</SectionHeading>
              <p className={`mt-4 text-lg max-w-xl mx-auto ${d.muted}`}>
                Everything you need to improve your IELTS score with confidence.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <Reveal key={f.label} delay={i * 60}>
                  <div className={`rounded-2xl border p-6 flex items-center gap-4 transition-all ${d.card} ${d.cardHov}`}>
                    <span className="text-3xl flex-shrink-0">{f.icon}</span>
                    <span className={`font-semibold text-sm ${d.head}`}>{f.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            ELITE PROGRAM
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden"
          style={{ background: "linear-gradient(135deg,#1A152D 0%,#3B2F6B 55%,#6B4EFF 100%)" }}>
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          {/* Glow */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle,#FDE047,transparent)" }} />

          <div className="relative max-w-7xl mx-auto px-6 text-white">
            <Reveal className="text-center mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(253,224,71,0.15)", color: "#FDE047", border: "1px solid rgba(253,224,71,0.3)" }}>
                Elite Program
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4"
                style={{ fontFamily: "'Outfit',sans-serif" }}>
                IELTS Elite — Champion Batch
              </h2>
              <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                Premium live training designed for top band scores. Everything included —
                no hidden extras.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-14">
              {ELITE_FEATURES.map((f, i) => (
                <Reveal key={f.label} delay={i * 50}>
                  <div className="rounded-2xl border border-white/10 p-5 hover:border-yellow-300/40 hover:bg-white/8 transition-all"
                    style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}>
                    <span className="text-2xl mb-3 block">{f.icon}</span>
                    <p className="font-bold text-sm mb-1">{f.label}</p>
                    <p className="text-indigo-300 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="text-center">
              <PrimaryBtn href="https://wa.me/919739722211?text=Enquiry%20about%20IELTS%20class%20Demo" className="text-base px-10 py-4">
                Book Free Demo →
              </PrimaryBtn>
              <p className="text-indigo-300 text-sm mt-4">Limited seats · High demand</p>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.why} alt="Trainer with student" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0"
              style={{
                background: dark
                  ? "linear-gradient(90deg,rgba(15,12,29,0.97) 55%,rgba(15,12,29,0.78) 100%)"
                  : "linear-gradient(90deg,rgba(255,255,255,0.97) 55%,rgba(255,255,255,0.75) 100%)"
              }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="max-w-2xl">
              <Reveal>
                <Pill dark={dark}>Our Edge</Pill>
                <SectionHeading dark={dark} className="mb-4">
                  Why Choose SV Videsh Vidya for IELTS?
                </SectionHeading>
                <p className={`text-lg mb-10 ${d.body}`}>
                  Everything you need — practice, feedback, strategy and support —
                  to reach your target band with confidence.
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-3">
                {WHY_CHOOSE.map((item, i) => (
                  <Reveal key={item} delay={i * 50}>
                    <div className={`flex items-start gap-3 rounded-xl px-4 py-3 border ${d.card} transition-all`}>
                      <Check />
                      <span className={`text-sm font-medium ${d.head}`}>{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-10">
                <PrimaryBtn href="https://wa.me/919739722211?text=Enquiry%20about%20IELTS%20class%20Demo">Book Free Demo →</PrimaryBtn>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            5-STEP LEARNING SYSTEM
        ══════════════════════════════════════════════════════════ */}
        <section className={`py-24 ${d.subtle}`}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <Pill dark={dark}>Our Methodology</Pill>
              <SectionHeading dark={dark}>The SV Videsh Vidya<br />5-Step Learning System</SectionHeading>
              <p className={`mt-4 text-lg max-w-xl mx-auto ${d.muted}`}>
                A streamlined, student-focused process designed for guaranteed results.
              </p>
            </Reveal>

            {/* Steps — connected timeline */}
            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5"
                style={{ background: "linear-gradient(90deg,#6B4EFF,#FDE047)" }} />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={i * 100}>
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-yellow-300 text-xl font-black mb-5 shadow-xl"
                        style={{ background: "linear-gradient(135deg,#1A152D,#6B4EFF)", fontFamily: "'Outfit',sans-serif" }}>
                        {s.n}
                      </div>
                      <h3 className={`font-black text-base mb-2 ${d.head}`}
                        style={{ fontFamily: "'Outfit',sans-serif" }}>{s.title}</h3>
                      <p className={`text-sm leading-relaxed ${d.body}`}>{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CURRICULUM — 4 MODULES
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.curriculum} alt="Library books" className="w-full h-full object-cover" />
            <div className="absolute inset-0"
              style={{
                background: dark
                  ? "rgba(15,12,29,0.95)"
                  : "rgba(248,250,252,0.96)"
              }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <Pill dark={dark}>Curriculum</Pill>
              <SectionHeading dark={dark}>Comprehensive Module Breakdown</SectionHeading>
              <p className={`mt-4 text-lg max-w-2xl mx-auto ${d.muted}`}>
                Hands-on strategies, real exam practice, and personalised feedback
                across all four IELTS modules.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-7">
              {MODULES.map((m, i) => (
                <Reveal key={m.title} delay={i * 80}>
                  <div className={`rounded-3xl border-2 p-8 h-full transition-all hover:-translate-y-1 ${d.card}`}
                    style={{ borderColor: m.color + (dark ? "60" : "30") }}>

                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                        style={{ background: m.color + "18" }}>
                        {m.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-black ${d.head}`}
                          style={{ fontFamily: "'Outfit',sans-serif" }}>{m.title}</h3>
                        <p className="text-sm font-semibold" style={{ color: m.color }}>{m.sub}</p>
                      </div>
                    </div>

                    <p className={`text-sm mb-5 leading-relaxed ${d.body}`}>{m.desc}</p>

                    <ul className="space-y-2.5">
                      {m.points.map(p => (
                        <li key={p} className="flex items-start gap-2.5 text-sm">
                          <Check color={m.color} />
                          <span className={d.body}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FREE DEMO SESSION
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img src={BG.demo} alt="Demo session" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg,rgba(26,21,45,0.97) 0%,rgba(107,78,255,0.88) 100%)" }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 text-white">
            <Reveal className="text-center mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(253,224,71,0.15)", color: "#FDE047", border: "1px solid rgba(253,224,71,0.3)" }}>
                Free Session
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4"
                style={{ fontFamily: "'Outfit',sans-serif" }}>
                Join Our FREE 60-Minute<br />
                <span className="text-yellow-300">IELTS Demo Session</span>
              </h2>
              <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
                Learn proven IELTS strategies directly from certified trainers.
                Get clarity on Speaking, Writing and the latest exam patterns in just 60 minutes.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
              {/* What you'll learn */}
              <Reveal>
                <div className="rounded-3xl border border-white/10 p-8 h-full"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}>
                  <h3 className="text-lg font-black mb-6 text-yellow-300"
                    style={{ fontFamily: "'Outfit',sans-serif" }}>What You Will Learn</h3>
                  <ul className="space-y-3">
                    {DEMO_LEARN.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                        <span className="w-5 h-5 rounded-full bg-yellow-300/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <path d="M1 3.5L3.5 6 8 1" stroke="#FDE047" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Who should attend */}
              <Reveal delay={100}>
                <div className="rounded-3xl border border-white/10 p-8 h-full"
                  style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)" }}>
                  <h3 className="text-lg font-black mb-6 text-yellow-300"
                    style={{ fontFamily: "'Outfit',sans-serif" }}>Who Should Attend</h3>
                  <ul className="space-y-3">
                    {DEMO_WHO.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                        <span className="w-5 h-5 rounded-full bg-[#6B4EFF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <path d="M1 3.5L3.5 6 8 1" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-indigo-300 text-xs mb-4">FREE session · Limited seats · Live interaction</p>
                    <PrimaryBtn href="https://wa.me/919739722211?text=Enquiry%20about%20IELTS%20class%20Demo" className="w-full justify-center">
                      Contact for Free Demo →
                    </PrimaryBtn>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SPEAKING PARAMETERS
        ══════════════════════════════════════════════════════════ */}
        <section className={`py-24 ${d.subtle}`}>
          <div className="max-w-7xl mx-auto px-6">
            <Reveal className="text-center mb-16">
              <Pill dark={dark}>Speaking Score</Pill>
              <SectionHeading dark={dark}>4 IELTS Speaking Parameters<br />You MUST Know</SectionHeading>
              <p className={`mt-4 text-lg max-w-xl mx-auto ${d.muted}`}>
                Understand the four key scoring criteria — and how to ace each one.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "💬", param: "Fluency & Coherence", weight: "25%", desc: "Ability to speak at length without hesitation, with clear logical flow and coherence." },
                { icon: "🗣️", param: "Pronunciation", weight: "25%", desc: "Clarity of speech, intonation patterns and ability to be understood effortlessly." },
                { icon: "📖", param: "Lexical Resource", weight: "25%", desc: "Range and accuracy of vocabulary, idiomatic usage and ability to paraphrase." },
                { icon: "🧠", param: "Grammatical Range", weight: "25%", desc: "Variety of sentence structures and accuracy of grammar across different tenses." },
              ].map((p, i) => (
                <Reveal key={p.param} delay={i * 80}>
                  <div className={`rounded-3xl border-2 p-7 h-full flex flex-col hover:-translate-y-1 transition-all ${d.card}`}
                    style={{ borderColor: "#6B4EFF" + (dark ? "60" : "30") }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                      style={{ background: "linear-gradient(135deg,#1A152D,#6B4EFF)" }}>
                      {p.icon}
                    </div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`font-black text-base ${d.head}`}
                        style={{ fontFamily: "'Outfit',sans-serif" }}>{p.param}</h3>
                      <span className="bg-yellow-300 text-[#1A152D] text-xs font-black px-2 py-0.5 rounded-full flex-shrink-0 ml-2">
                        {p.weight}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed flex-1 ${d.body}`}>{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            CTA BAND
        ══════════════════════════════════════════════════════════ */}
        <section className="relative py-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg,#1A152D,#6B4EFF)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }} />
          <Reveal className="relative max-w-3xl mx-auto px-6 text-center text-white">
            <div className="text-5xl mb-5">🎓</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Outfit',sans-serif" }}>
              Ready to Achieve<br />
              <span className="text-yellow-300">Your Target Band?</span>
            </h2>
            <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
              Join a batch today. Free demo session available — no commitment, no payment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryBtn href="https://wa.me/919739722211?text=Enquiry%20about%20IELTS%20class%20Demo" className="text-base px-10 py-4">Book Free Demo →</PrimaryBtn>
              <a href="tel:+919739722211"
                className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 hover:border-white active:scale-95 transition-all text-base">
                Call US
              </a>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════════════════
            FAQ
        ══════════════════════════════════════════════════════════ */}
        <section className={`py-24 ${d.subtle}`}>
          <div className="max-w-3xl mx-auto px-6">
            <Reveal className="text-center mb-14">
              <Pill dark={dark}>FAQ</Pill>
              <SectionHeading dark={dark}>Frequently Asked<br />Questions</SectionHeading>
              <p className={`mt-4 text-lg ${d.muted}`}>
                Everything you need to know before enrolling in our IELTS course.
              </p>
            </Reveal>

            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <FaqItem n={i + 1} q={f.q} a={f.a} dark={dark} />
                </Reveal>
              ))}
            </div>

            <Reveal className="text-center mt-14">
              <p className={`mb-5 ${d.muted}`}>Have a question we didn't answer?</p>
              <PrimaryBtn href="/contact">Contact Our Team →</PrimaryBtn>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
}