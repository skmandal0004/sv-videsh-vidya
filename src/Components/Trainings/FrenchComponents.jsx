import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ─── Dark-mode hook ──────────────────────────────────────────────────────────
function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(media.matches);
    const listener = (e) => setDark(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return dark;
}

// ─── Theme ────────────────────────────────────────────────────────────────────
const NAVY = "#1A152D";
const PURPLE = "#6B4EFF";
const YELLOW = "#FFD700";

// ─── Free-to-use Unsplash images ─────────────────────────────────────────────
const IMG = {
  hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80",
  student: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  canada: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1800&q=80",
  classroom: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  cafe: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  europe: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
  laptop: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
  career: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const WHY_ITEMS = [
  { icon: "🎓", title: "Top Universities Abroad", desc: "Universities in France, Canada, Switzerland & Europe prefer or require French for specialised academic programs.", img: IMG.europe },
  { icon: "🛂", title: "Boost Canada PR Profile", desc: "French adds strong CRS points for Canada PR, Quebec and other immigration pathways through extra language points.", img: IMG.canada },
  { icon: "💼", title: "Global Career Advantage", desc: "Open doors in MNCs, hospitality, tourism, aviation and international organisations worldwide.", img: IMG.career },
  { icon: "✈️", title: "Travel & Cultural Growth", desc: "Travel confidently in 29 French-speaking countries and connect deeply with francophone culture.", img: IMG.cafe },
];

const BATCHES = [
  { level: "French Basic", morning: "06:30 AM – 08:00 AM", evening: "04:30 PM – 06:00 PM" },
  { level: "French A1", morning: "08:00 AM – 09:30 AM", evening: "06:00 PM – 07:30 PM" },
  { level: "French A2", morning: "08:00 AM – 09:30 AM", evening: "06:00 PM – 07:30 PM" },
  { level: "French B1", morning: "06:30 AM – 08:00 AM", evening: "07:30 PM – 09:00 PM" },
  { level: "French B2", morning: "On Request", evening: "04:30 PM – 06:00 PM" },
  { level: "TEF/DELF Prep", morning: "08:00 AM – 09:30 AM", evening: "07:30 PM – 09:00 PM" },
];

const LEVELS = [
  {
    badge: "A1 – A2  ·  Beginner", title: "Beginner French",
    points: ["Start from zero — alphabet, pronunciation & greetings", "Basic sentences & everyday conversations", "Introductions, family, hobbies & routines", "Simple reading and writing practice"],
    ideal: "Students starting French for the first time",
    outcome: "By A2 you'll confidently handle simple French conversations.",
    color: "#22C55E",
  },
  {
    badge: "B1 – B2  ·  Intermediate", title: "Intermediate French",
    points: ["Complex sentences, opinions & arguments", "Real-life listening — news & interviews", "Formal emails & longer written texts", "Grammar refinement & fluency building"],
    ideal: "Jobs, higher studies or immigration planning",
    outcome: "By B2 you can express ideas clearly in detailed spoken French.",
    color: "#3B82F6",
  },
  {
    badge: "Exam Track", title: "DELF / TEF Exam Prep",
    points: ["Pattern-based exam-oriented training", "Official-style mock tests", "Speaking & writing tasks with expert feedback", "Time management & exam strategies"],
    ideal: "Canada PR applicants & French-program aspirants",
    outcome: "Targeted preparation to boost accuracy, confidence and scores.",
    color: PURPLE,
  },
];

const STEPS = [
  { num: "01", title: "Free Counselling & Level Check", desc: "We understand your goal — study abroad, PR, job or hobby — and help you choose the correct starting level." },
  { num: "02", title: "Enrol & Get Portal Access", desc: "Full portal access with schedules, notes, recordings and practice material in one place." },
  { num: "03", title: "Live Classes + Speaking Practice", desc: "Interactive classes with vocabulary drills and grammar explained simply in live sessions." },
  { num: "04", title: "Assignments & Expert Feedback", desc: "Trainer-reviewed tasks to improve pronunciation, writing and accuracy faster." },
  { num: "05", title: "Mock Tests & Exam Strategy", desc: "Full mock tests and performance analysis for DELF & TEF exams." },
  { num: "06", title: "Certificate & Next-Step Guidance", desc: "Guidance on exams, next levels and connecting French with your study abroad or PR goals." },
];

const FOR_WHOM = [
  { icon: "🎓", title: "Study Abroad Aspirants", desc: "Students planning to study in Canada, France or Europe who need French for academics or visa requirements.", tag: "Canada / Europe" },
  { icon: "🛂", title: "Canada PR & Quebec Applicants", desc: "Applicants targeting CRS points, Quebec immigration or Francophone pathways.", tag: "PR Focused" },
  { icon: "💼", title: "International Job Seekers", desc: "Professionals aiming to work with global companies where French gives an edge in hiring and promotions.", tag: "Career Growth" },
  { icon: "🚀", title: "Working Professionals", desc: "Professionals looking to upskill and build an international profile with French.", tag: "Skill Upgrade" },
  { icon: "📘", title: "School & College Students", desc: "Students who want an additional language early to stand out academically and professionally.", tag: "Early Advantage" },
  { icon: "✈️", title: "Travel Lovers & Hobby Learners", desc: "Learn French to travel confidently and connect deeply with French-speaking cultures.", tag: "Personal Growth" },
];

const TESTIMONIALS = [
  { name: "Priya M.", city: "Bengaluru", course: "French A2", stars: 5, text: "I started as a complete beginner and now I can speak comfortably in daily conversations. The structured approach and patient teaching made all the difference." },
  { name: "Rahul K.", city: "Bengaluru", course: "TEF Preparation", stars: 5, text: "SV Videsh Vidya guided me for both French and my Canada process. It saved me a lot of time — I always knew what the next step was." },
  { name: "Sneha D.", city: "Bengaluru", course: "French B1", stars: 5, text: "The live classes are really interactive. Personal attention from the trainer and excellent practice materials. Highly recommend!" },
];

const FAQS = [
  { q: "I don't know a single word of French. Can I join?", a: "Absolutely! Our Beginner (A1) course starts from zero — no prior knowledge needed. You'll learn the alphabet, pronunciation, greetings and everyday phrases from day one." },
  { q: "How long does it take to complete each level?", a: "Each level (A1, A2, B1, B2) typically takes 8–12 weeks with regular classes. Duration may vary based on the batch schedule and your practice consistency." },
  { q: "What exams can I prepare for with this course?", a: "We offer dedicated preparation for DELF (Diplôme d'études en langue française) and TEF (Test d'évaluation de français), both widely accepted for Canada PR, Quebec immigration and French university admissions." },
  { q: "Are the classes online or offline?", a: "Classes are conducted live online (Google Meet/Zoom) with recordings available for all enrolled students — convenient for students and working professionals across India." },
  { q: "How does French help with Canada PR?", a: "French proficiency (via TEF or DELF) adds additional CRS points under Express Entry and opens up the Francophone immigration pathway, significantly boosting your chances of receiving an ITA." },
  { q: "Can I get a certificate after completing the course?", a: "Yes, SV Videsh Vidya provides a course completion certificate. For internationally recognised certifications, we prepare you for DELF (CEFR-aligned) and TEF exams conducted by official bodies." },
];

// ─── Shared helpers ───────────────────────────────────────────────────────────
const Tag = ({ children, color = PURPLE }) => (
  <span style={{ background: color + "18", color, fontSize: "0.72rem", fontWeight: 700, padding: "3px 10px", borderRadius: "12px", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{children}</span>
);

const SectionLabel = ({ children, light = false }) => (
  <span style={{
    display: "inline-block",
    background: light ? "rgba(255,215,0,0.18)" : `linear-gradient(135deg,${NAVY},${PURPLE})`,
    border: light ? "1px solid rgba(255,215,0,0.45)" : "none",
    color: light ? YELLOW : "#fff",
    fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase",
    padding: "4px 14px", borderRadius: "20px", marginBottom: "0.75rem",
  }}>{children}</span>
);

const CheckItem = ({ children }) => (
  <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: `linear-gradient(135deg,${NAVY},${PURPLE})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "3px" }}>
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#FFD700" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
    <div style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.6 }}>{children}</div>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FrenchPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [batch, setBatch] = useState("morning");
  const dark = useDarkMode();

  // Theme mapping similar to German component
  const dm = {
    page: dark ? "bg-[#0F0C1D] text-white" : "bg-white text-[#1A152D]",
    section: dark ? "bg-[#1A1527]" : "bg-[#F9F8FF]",
    card: dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200",
    heading: dark ? "text-white" : "text-[#1A152D]",
    body: dark ? "text-slate-300" : "text-slate-600",
  };
  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui,sans-serif", backgroundColor: dark ? "#0F0C1D" : "#fff", color: dark ? "#fff" : NAVY, overflowX: "hidden", transition: "background-color 0.3s, color 0.3s" }}>

      {/* ══════════ HERO ══════════ */}
      <section style={{ position: "relative", minHeight: "90vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMG.hero})`, backgroundSize: "cover", backgroundPosition: "center 30%", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: dark ? "linear-gradient(105deg,#0F0C1DD9 40%,#1a1527 100%)" : `linear-gradient(105deg,${NAVY}F2 40%,${PURPLE}99 100%)`, zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto", padding: "7rem 1.5rem 5rem", width: "100%" }}>
          <div style={{ maxWidth: "660px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.5rem" }}>
              {["🇫🇷 A1 to B2 Roadmap", "🎯 DELF / TEF Prep", "🌍 Canada PR & Europe", "🧑‍🏫 Live Expert Classes"].map(t => (
                <span key={t} style={{ background: "rgba(255,215,0,0.14)", border: "1px solid rgba(255,215,0,0.4)", color: YELLOW, fontSize: "0.75rem", fontWeight: 600, padding: "5px 13px", borderRadius: "20px" }}>{t}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3.3rem)", fontWeight: 900, color: "#fff", margin: "0 0 1rem", lineHeight: 1.1 }}>
              Master French &amp; Open Doors to<br />
              <span style={{ color: YELLOW }}>Canada, Europe &amp; Global Careers</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "540px" }}>
              Live expert-led classes, structured level-wise curriculum and exam-oriented preparation for{" "}
              <strong style={{ color: YELLOW }}>DELF &amp; TEF</strong> — from absolute beginner to confident speaker.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link to="/contact" style={{ background: YELLOW, color: NAVY, padding: "0.9rem 2rem", borderRadius: "8px", fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}>
                Book a Free Demo →
              </Link>
              <a href="#batches" style={{ border: "2px solid rgba(255,255,255,0.45)", color: "#fff", padding: "0.9rem 2rem", borderRadius: "8px", fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}>
                View Batch Schedule
              </a>
            </div>
            <p style={{ marginTop: "1.25rem", fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
              ✅ Trusted by learners preparing for study abroad, Canada PR &amp; global careers
            </p>
          </div>
        </div>

        {/* Floating stat strip */}
        <div style={{ position: "absolute", bottom: 0, right: 0, zIndex: 2, display: "flex" }}>
          {[["A1–B2", "All Levels"], ["DELF & TEF", "Exam Prep"], ["Live + Recorded", "Flexible Access"]].map(([v, l]) => (
            <div key={l} style={{ background: "rgba(26,21,45,0.75)", backdropFilter: "blur(10px)", borderTop: "1px solid rgba(255,255,255,0.12)", borderLeft: "1px solid rgba(255,255,255,0.08)", padding: "1rem 1.5rem", textAlign: "center" }}>
              <div style={{ color: YELLOW, fontWeight: 900, fontSize: "1rem" }}>{v}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.7rem", fontWeight: 600, marginTop: "2px" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ TICKER ══════════ */}
      <div style={{ background: YELLOW, padding: "0.85rem 1.5rem", display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
        {["🇫🇷 130 million French speakers worldwide", "🌍 Official language in 29 countries", "🇨🇦 French boosts Canada PR CRS score", "🎓 Accepted by top universities in France & Canada"].map(t => (
          <span key={t} style={{ fontSize: "0.8rem", fontWeight: 700, color: NAVY }}>{t}</span>
        ))}
      </div>

      {/* ══════════ WHY FRENCH — image card grid ══════════ */}
      <section style={{ padding: "5rem 1.5rem", background: dark ? "#1A1527" : "#F9F8FF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <SectionLabel>Why French</SectionLabel>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, margin: "0.5rem 0 0.75rem" }}>Why Learning French is a Smart Move in 2026</h2>
            <p style={{ color: dark ? "#a0aec0" : "#666", maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>French isn't just a foreign language — it's a global advantage for students, professionals and immigrants.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {WHY_ITEMS.map((item) => (
              <div key={item.title} style={{ borderRadius: "16px", overflow: "hidden", boxShadow: dark ? "0 4px 24px rgba(0,0,0,0.2)" : "0 4px 24px rgba(26,21,45,0.09)", background: dark ? "#1a1a2e" : "#fff", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={item.img} alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "rgba(26,21,45,0.75)", borderRadius: "20px", padding: "4px 10px", fontSize: "1rem" }}>{item.icon}</div>
                </div>
                <div style={{ padding: "1.4rem 1.25rem", flex: 1 }}>
                  <h3 style={{ fontWeight: 700, fontSize: "0.98rem", marginBottom: "0.5rem", color: dark ? "#fff" : NAVY }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: dark ? "#cbd5e1" : "#555", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SPLIT — image left, features right ══════════ */}
      <section className={`py-16 px-4 ${dark ? "bg-[#0F0C1D]" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={IMG.student}
              alt="Students learning French"
              className="w-full h-64 md:h-[460px] object-cover"
            />

            <div className={`absolute bottom-4 left-4 rounded-xl px-5 py-4 shadow-lg ${dark ? "bg-slate-700/95" : "bg-white/95"}`}>
              <div className={`font-extrabold text-xl ${dark ? "text-yellow-300" : "text-purple-600"}`}>A1 → B2</div>
              <div className={`text-xs font-semibold ${dark ? "text-slate-300" : "text-gray-600"}`}>
                Structured Learning Path
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionLabel>Our Approach</SectionLabel>

            <h2 className={`text-2xl md:text-3xl font-extrabold mt-3 mb-4 ${dark ? "text-white" : "text-[#1A152D]"}`}>
              From Bonjour to B2 — A Step-by-Step Pathway
            </h2>

            <p className={`leading-relaxed mb-6 ${dark ? "text-slate-300" : "text-gray-600"}`}>
              Whether your goal is Canada PR, French-speaking universities or an international career, our curriculum is designed around your real-world objectives — not just grammar textbooks.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                ["Structured Levels", "Clear syllabus aligned with CEFR — A1 through B2."],
                ["Live Interactive Classes", "Real-time practice with expert trainers."],
                ["Exam-Focused Modules", "DELF & TEF preparation with mock tests."],
                ["Study Abroad Guidance", "Connect French with admissions & visa goals."],
              ].map(([label, desc]) => (
                <CheckItem key={label}>
                  <strong>{label}</strong> — {desc}
                </CheckItem>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[#1A152D] to-[#6B4EFF] text-white font-semibold px-6 py-3 rounded-lg"
            >
              Start with a Free Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ COURSE LEVELS ══════════ */}
      <section style={{ padding: "5rem 1.5rem", background: dark ? "#0F0C1D" : "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <SectionLabel>Course Levels</SectionLabel>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, margin: "0.75rem 0 0.5rem" }}>French Courses for Every Level</h2>
            <p style={{ color: dark ? "#a0aec0" : "#666", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>A clear, structured pathway from beginner to advanced — aligned with international CEFR standards.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.75rem" }}>
            {LEVELS.map((lv) => (
              <div key={lv.title} style={{ border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : lv.color + "30"}`, borderRadius: "16px", overflow: "hidden", boxShadow: dark ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 20px rgba(0,0,0,0.06)", background: dark ? "#1a1a2e" : "#fff" }}>
                <div style={{ background: lv.color, padding: "1.4rem 1.5rem" }}>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>{lv.badge}</div>
                  <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", margin: 0 }}>{lv.title}</h3>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <ul style={{ margin: "0 0 1rem", paddingLeft: "1.1rem" }}>
                    {lv.points.map(p => <li key={p} style={{ fontSize: "0.875rem", color: dark ? "#cbd5e1" : "#444", marginBottom: "0.45rem", lineHeight: 1.55 }}>{p}</li>)}
                  </ul>
                  <div style={{ borderTop: "1px solid #EEE", paddingTop: "1rem" }}>
                    <div style={{ fontSize: "0.78rem", color: dark ? "#a0aec0" : "#888", marginBottom: "0.4rem" }}><strong>Ideal for:</strong> {lv.ideal}</div>
                    <div style={{ fontSize: "0.82rem", color: lv.color, fontWeight: 600 }}>✅ {lv.outcome}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ LEARNING JOURNEY — dark bg + image ══════════ */}
      <section
        className={`py-16 px-4 ${dark
            ? "bg-gradient-to-br from-[#0F0C1D] to-[#1a1527]"
            : "bg-gradient-to-br from-[#1A152D] to-[#2D1B69]"
          }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <SectionLabel light>Learning Path</SectionLabel>

            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold mt-3 mb-8">
              Your French Learning Journey
            </h2>

            <div className="flex flex-col gap-5">
              {STEPS.map((s, i) => (
                <div key={s.num} className="flex gap-4 items-start">

                  {/* Number Circle */}
                  <div className="min-w-[38px] h-[38px] bg-yellow-400 text-[#1A152D] rounded-full flex items-center justify-center font-black text-xs mt-[2px]">
                    {s.num}
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-4 ${i !== STEPS.length - 1
                        ? "border-l border-white/10 pb-3"
                        : ""
                      }`}
                  >
                    <div className="text-white font-semibold text-sm mb-1">
                      {s.title}
                    </div>

                    <div className="text-white/60 text-xs leading-relaxed">
                      {s.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={IMG.classroom}
              alt="French online class"
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A152D]/80 to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="bg-white/95 rounded-xl p-4 flex items-center gap-4 shadow-lg">

                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1A152D] to-[#6B4EFF] flex items-center justify-center text-lg">
                  🎯
                </div>

                <div>
                  <div className="font-semibold text-[#1A152D] text-sm">
                    Exam-Focused Training
                  </div>
                  <div className="text-gray-600 text-xs">
                    DELF & TEF preparation with mock tests & feedback
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════ WHO IS IT FOR — image banner header ══════════ */}
      <section style={{ padding: "5rem 1.5rem", background: dark ? "#1A1527" : "#F9F8FF" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "3rem", position: "relative", height: "220px" }}>
            <img src={IMG.europe} alt="Study in Europe" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg,${NAVY}E0 40%,${PURPLE}99 100%)`, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "2rem 2.5rem" }}>
              <SectionLabel light>Who Is This For</SectionLabel>
              <h2 style={{ color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, margin: "0.5rem 0 0", maxWidth: "480px" }}>This French Course is Perfect For…</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem" }}>
            {FOR_WHOM.map((item) => (
              <div key={item.title} style={{ background: dark ? "#1a1a2e" : "#fff", border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid #E8E4F8", borderRadius: "12px", padding: "1.4rem", display: "flex", gap: "1rem", alignItems: "flex-start", boxShadow: dark ? "0 2px 12px rgba(0,0,0,0.2)" : "0 2px 12px rgba(0,0,0,0.04)" }}>
                <span style={{ fontSize: "2rem", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: dark ? "#fff" : NAVY, marginBottom: "0.3rem" }}>{item.title}</div>
                  <div style={{ fontSize: "0.83rem", color: dark ? "#cbd5e1" : "#555", lineHeight: 1.6, marginBottom: "0.6rem" }}>{item.desc}</div>
                  <Tag>{item.tag}</Tag>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="batches" className={`py-16 px-4 ${dark ? "bg-[#1A1527]" : "bg-[#F9F8FF]"}`}>
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10">
            <SectionLabel>Batch Schedule</SectionLabel>

            <h2 className={`text-2xl md:text-3xl font-extrabold mt-3 ${dark ? "text-white" : ""}`}>
              Choose the Batch That Fits Your Routine
            </h2>

            <p className={`mt-2 ${dark ? "text-slate-300" : "text-gray-600"}`}>
              Morning and evening options for every level.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-8">
            <div className={`rounded-full p-1 flex flex-wrap ${dark ? "bg-purple-900/30" : "bg-purple-100"}`}>
              {[
                ["morning", "🌅 Morning"],
                ["evening", "🌆 Evening"]
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setBatch(key)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition
              ${batch === key
                      ? "bg-gradient-to-r from-[#1A152D] to-[#6B4EFF] text-white"
                      : dark ? "text-slate-300" : "text-gray-600"}
            `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Batch Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {BATCHES.map((b) => (
              <div
                key={b.level}
                className={`border border-l-4 border-l-purple-500 rounded-xl p-4 flex justify-between items-center shadow-sm ${dark ? "bg-[#1a1a2e]" : "bg-white border-purple-100"}`}
              >
                <div>
                  <div className={`font-semibold ${dark ? "text-white" : "text-gray-900"}`}>{b.level}</div>
                  <div className={`text-sm font-medium ${dark ? "text-yellow-300" : "text-purple-600"}`}>
                    ⏰ {batch === "morning" ? b.morning : b.evening}
                  </div>
                </div>

                <Tag>
                  {batch === "morning" ? "Morning" : "Evening"}
                </Tag>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`mt-8 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${dark ? "bg-[#0F0C1D]" : "bg-gradient-to-r from-[#1A152D] to-[#6B4EFF]"}`}>

            <div>
              <div className={`font-semibold text-lg ${dark ? "text-white" : "text-white"}`}>
                Attend a FREE French Demo Class
              </div>
              <div className={dark ? "text-white/70 text-sm" : "text-white/70 text-sm"}>
                Experience our teaching before enrolling.
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-yellow-400 text-[#1A152D] font-bold px-6 py-2 rounded-lg whitespace-nowrap w-fit"
            >
              Book Free Demo →
            </Link>
          </div>

        </div>
      </section>


      {/* ══════════ TESTIMONIALS — split with image ══════════ */}
      <section className={`py-16 px-4 ${dark ? "bg-[#0F0C1D]" : "bg-white"}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={IMG.laptop}
              alt="Student learning French online"
              className="w-full h-64 md:h-[420px] object-cover"
            />
          </div>

          <div>
            <SectionLabel>Student Stories</SectionLabel>

            <h2 className={`text-xl md:text-2xl font-extrabold mt-3 mb-6 ${dark ? "text-white" : ""}`}>
              Our Students Are Moving Closer to Their Dreams
            </h2>

            <div className="flex flex-col gap-4">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className={`border border-l-4 border-l-purple-500 rounded-lg p-5 ${dark ? "bg-[#1a1a2e] border-slate-700" : "bg-[#F9F8FF] border-[#E8E4F8]"}`}
                >
                  <div className={`mb-2 ${dark ? "text-yellow-300" : "text-yellow-400"}`}>
                    {"★".repeat(t.stars)}
                  </div>

                  <p className={`text-sm italic mb-3 ${dark ? "text-slate-300" : "text-gray-700"}`}>
                    "{t.text}"
                  </p>

                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <div className={`font-semibold ${dark ? "text-white" : "text-gray-900"}`}>
                        {t.name}
                      </div>
                      <div className={`text-xs ${dark ? "text-slate-400" : "text-gray-500"}`}>
                        {t.city}
                      </div>
                    </div>

                    <Tag>{t.course}</Tag>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: dark ? "#1A1527" : "#F9F8FF",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <SectionLabel>FAQ</SectionLabel>

            <h2
              style={{
                fontSize: "clamp(1.4rem,3vw,2rem)",
                fontWeight: 800,
                margin: "0.75rem 0 0.5rem",
              }}
            >
              Frequently Asked Questions
            </h2>

            <p
              style={{
                color: dark ? "#a0aec0" : "#666",
                lineHeight: 1.7,
              }}
            >
              Clear answers about our French classes, levels, exams and how we support your study abroad or PR journey.
            </p>
          </div>

          {/* FAQ List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i;

              return (
                <div
                  key={i}
                  style={{
                    border: `1px solid ${dark
                      ? isOpen
                        ? "rgba(107,78,255,0.4)"
                        : "rgba(255,255,255,0.1)"
                      : isOpen
                        ? PURPLE + "55"
                        : "#E0DCF5"
                      }`,
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: dark ? "#1a1a2e" : "#fff",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      background: isOpen
                        ? dark
                          ? "rgba(107,78,255,0.15)"
                          : `linear-gradient(90deg, ${NAVY}08, ${PURPLE}12)`
                        : dark
                          ? "#1a1a2e"
                          : "#fff",
                      border: "none",
                      padding: "1.1rem 1.4rem",
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        color: dark ? "#fff" : NAVY,
                        lineHeight: 1.5,
                      }}
                    >
                      {f.q}
                    </span>

                    <span
                      style={{
                        color: PURPLE,
                        fontWeight: 700,
                        fontSize: "1.4rem",
                        flexShrink: 0,
                        transition: "transform 0.2s",
                        display: "inline-block",
                        transform: isOpen ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 1.4rem 1.1rem",
                        fontSize: "0.88rem",
                        color: dark ? "#cbd5e1" : "#555",
                        lineHeight: 1.75,
                      }}
                    >
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CTA — full-bleed café image ══════════ */}
      <section style={{ position: "relative", padding: "6rem 1.5rem", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${IMG.cafe})`, backgroundSize: "cover", backgroundPosition: "center", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: dark ? "linear-gradient(135deg,#0F0C1DEE,#1a1527DD)" : `linear-gradient(135deg,${NAVY}EE,${PURPLE}DD)`, zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "660px", margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 900, marginBottom: "0.75rem" }}>
            Start Your French Journey Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", marginBottom: "2rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Book a free demo class and discover how French can open doors to Canada, Europe and global opportunities.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" style={{ background: YELLOW, color: NAVY, padding: "0.95rem 2.25rem", borderRadius: "8px", fontWeight: 800, fontSize: "1rem", textDecoration: "none", display: "inline-block" }}>
              Book Free Demo →
            </Link>
            <Link to="/contact" style={{ border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "0.95rem 2.25rem", borderRadius: "8px", fontWeight: 600, fontSize: "1rem", textDecoration: "none", display: "inline-block" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}