/**
 * BookDemoPage.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Setup instructions:
 *  1. npm install @emailjs/browser
 *  2. Create a free account at https://www.emailjs.com
 *  3. Add a service (Gmail / SMTP) → copy Service ID
 *  4. Create an email template with variables:
 *       {{from_name}}, {{from_email}}, {{phone}}, {{course}},
 *       {{preferred_time}}, {{message}}, {{to_name}}
 *  5. Copy Template ID and Public Key
 *  6. Replace the three EMAILJS_* constants below
 *
 * Route:  /contact   (or /book-demo — wherever your "Book Free Demo" links point)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

// ─── ⚙️  Replace these with your real EmailJS credentials ────────────────────
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
// ─────────────────────────────────────────────────────────────────────────────

// ─── Font loader ──────────────────────────────────────────────────────────────
function FontLoader() {
  useEffect(() => {
    if (document.getElementById("svv-fonts")) return;
    const link = document.createElement("link");
    link.id = "svv-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap";
    document.head.appendChild(link);
  }, []);
  return null;
}

// ─── System dark-mode (respects OS preference, no toggle needed) ──────────────
function useSystemDark() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return dark;
}

// ─── Animated counter for stats ───────────────────────────────────────────────
function AnimatedNumber({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1400;
        const steps = 50;
        const inc = target / steps;
        let cur = 0;
        const t = setInterval(() => {
          cur += inc;
          if (cur >= target) { setVal(target); clearInterval(t); }
          else setVal(Math.floor(cur));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({ label, required, error, dark, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className={`text-sm font-semibold ${dark ? "text-slate-300" : "text-[#1A152D]"}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {label} {required && <span className="text-[#6B4EFF]">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs flex items-center gap-1 mt-0.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
            <path d="M6 4v2.5M6 8h.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Shared input classes ─────────────────────────────────────────────────────
function inputCls(dark, hasError) {
  return [
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200",
    "border focus:ring-2 focus:ring-[#6B4EFF]/40 focus:border-[#6B4EFF]",
    hasError ? "border-red-500 focus:ring-red-400/30 focus:border-red-500" : "",
    dark
      ? "bg-[#1C1830] border-[#2e2a4a] text-white placeholder-slate-500 hover:border-[#6B4EFF]/50 [color-scheme:dark]"
      : "bg-white border-slate-200 text-[#1A152D] placeholder-slate-400 hover:border-slate-300 [color-scheme:light]",
  ].join(" ");
}

// ─── SUCCESS SCREEN ───────────────────────────────────────────────────────────
function SuccessScreen({ dark, name }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-20">
      {/* Animated checkmark */}
      <div className="relative mb-8">
        <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl"
          style={{ background: "linear-gradient(135deg, #1A152D, #6B4EFF)" }}>
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <path
              d="M10 24L20 34L38 14"
              stroke="#FDE047"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 45,
                strokeDashoffset: 0,
                animation: "drawCheck 0.6s ease-out forwards",
              }}
            />
          </svg>
        </div>
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "linear-gradient(135deg, #6B4EFF, #FDE047)" }} />
      </div>

      <style>{`
        @keyframes drawCheck {
          from { stroke-dashoffset: 45; }
          to   { stroke-dashoffset: 0; }
        }
      `}</style>

      <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full mb-4"
        style={{ background: dark ? "rgba(253,224,71,0.12)" : "#FDE047", color: dark ? "#FDE047" : "#1A152D" }}>
        Message Sent ✓
      </span>

      <h2 className={`text-3xl md:text-4xl font-black mb-3 tracking-tight ${dark ? "text-white" : "text-[#1A152D]"}`}
        style={{ fontFamily: "'Outfit', sans-serif" }}>
        Thank you, {name || "there"}!
      </h2>

      <p className={`text-lg max-w-md mb-2 ${dark ? "text-slate-300" : "text-slate-600"}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}>
        Your demo request has been received. Our team will reach out within{" "}
        <strong className={dark ? "text-white" : "text-[#1A152D]"}>24 hours</strong>.
      </p>
      <p className={`text-sm mb-10 ${dark ? "text-slate-500" : "text-slate-400"}`}>
        Check your inbox — a confirmation email is on its way.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/"
          className="inline-flex items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-[#1A152D] font-bold px-8 py-3.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-yellow-300/20"
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Back to Home
        </Link>
        <Link to="/german"
          className={`inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-95 border-2 ${dark ? "border-white/20 text-white hover:bg-white/8" : "border-[#1A152D]/20 text-[#1A152D] hover:bg-[#1A152D]/5"
            }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}>
          View German Course
        </Link>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function BookDemoPage() {
  const dark = useSystemDark();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    course: "",
    preferred_time: "",
    message: "",
  });

  // ── Validate ────────────────────────────────────────────────────────────────
  const validate = (data = form) => {
    const e = {};
    if (!data.from_name.trim()) e.from_name = "Full name is required.";
    if (!data.from_email.trim()) e.from_email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(data.from_email)) e.from_email = "Enter a valid email address.";
    if (!data.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^[0-9+\s\-()]{7,15}$/.test(data.phone)) e.phone = "Enter a valid phone number.";
    if (!data.course) e.course = "Please select a course.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name]) {
      const newErr = validate(updated);
      setErrors(prev => ({ ...prev, [name]: newErr[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const newErr = validate();
    setErrors(prev => ({ ...prev, [name]: newErr[name] }));
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map(k => [k, true]));
    setTouched(allTouched);
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...form, to_name: "SV Videsh Vidya Team" },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  // ── Derived styles ──────────────────────────────────────────────────────────
  const dm = {
    page: dark ? "bg-[#0F0C1D] text-white" : "bg-slate-50 text-[#1A152D]",
    card: dark ? "bg-[#16122A] border-[#2e2a4a]" : "bg-white border-slate-200/80",
    muted: dark ? "text-slate-400" : "text-slate-500",
    heading: dark ? "text-white" : "text-[#1A152D]",
    body: dark ? "text-slate-300" : "text-slate-600",
    divider: dark ? "border-[#2e2a4a]" : "border-slate-100",
  };

  const STATS = [
    { n: 500, suffix: "+", label: "Students Trained" },
    { n: 95, suffix: "%", label: "Success Rate" },
    { n: 3, suffix: "+", label: "Course Levels" },
    { n: 14, suffix: "+", label: "Years Experience" },
  ];

  const COURSES = [
    "German Basic",
    "German A1",
    "German A2",
    "German B1",
    "German A1 + A2",
    "German A1 + A2 + B1",
    "Not sure — need guidance",
  ];

  const TIMES = [
    "Morning (8:00 AM – 11:00 AM)",
    "Afternoon (12:00 PM – 3:00 PM)",
    "Evening (4:00 PM – 7:00 PM)",
    "Night (7:00 PM – 10:00 PM)",
    "Flexible / Any time",
  ];

  return (
    <>
      <FontLoader />
      <div className={`${dm.page} min-h-screen transition-colors duration-300`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* ── Top accent bar ────────────────────────────────────────── */}
        <div style={{ background: "linear-gradient(90deg, #1A152D, #6B4EFF)", height: 4 }} />

        {/* ── Hero band ─────────────────────────────────────────────── */}
        <div className="relative overflow-hidden py-16"
          style={{ background: "linear-gradient(135deg, #1A152D 0%, #3B2F6B 55%, #6B4EFF 100%)" }}>
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          {/* Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #FDE047, transparent)", transform: "translate(30%, -30%)" }} />

          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
              style={{ background: "rgba(253,224,71,0.15)", color: "#FDE047", border: "1px solid rgba(253,224,71,0.3)" }}>
              Free Demo Session
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: "'Outfit', sans-serif" }}>
              Book Your Free<br />
              <span className="text-yellow-300">German Demo Class</span>
            </h1>
            <p className="text-indigo-200 text-lg max-w-xl mx-auto">
              Fill in your details and our team will confirm your slot within 24 hours.
              No commitment, no payment required.
            </p>
          </div>
        </div>

        {/* ── Stats strip ───────────────────────────────────────────── */}
        <div className={`border-b ${dm.divider} ${dark ? "bg-[#13102A]" : "bg-white"}`}>
          <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <p className="text-2xl font-black text-[#6B4EFF] mb-0.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  <AnimatedNumber target={s.n} suffix={s.suffix} />
                </p>
                <p className={`text-xs font-medium ${dm.muted}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main content ──────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* ── LEFT — info panel ─────────────────────────────────── */}
            <aside className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-8">

              {/* What to expect */}
              <div className={`rounded-3xl border p-7 ${dm.card}`}>
                <h2 className={`text-xl font-black mb-5 ${dm.heading}`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  What Happens Next?
                </h2>
                <ol className="space-y-5">
                  {[
                    { step: "01", title: "Submit your request", desc: "Fill in the form — takes under 2 minutes." },
                    { step: "02", title: "We confirm your slot", desc: "Our team calls or WhatsApps you within 24 hours." },
                    { step: "03", title: "Attend the free demo", desc: "Join a live class and experience our teaching style." },
                    { step: "04", title: "Choose your batch", desc: "Enroll in the level and timing that suits you best." },
                  ].map(item => (
                    <li key={item.step} className="flex gap-4 items-start">
                      <span className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 text-yellow-300"
                        style={{ background: "linear-gradient(135deg, #1A152D, #6B4EFF)", fontFamily: "'Outfit', sans-serif" }}>
                        {item.step}
                      </span>
                      <div>
                        <p className={`font-bold text-sm mb-0.5 ${dm.heading}`}>{item.title}</p>
                        <p className={`text-xs leading-relaxed ${dm.muted}`}>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Contact info */}
              <div className={`rounded-3xl border p-7 ${dm.card}`}>
                <h3 className={`text-base font-black mb-4 ${dm.heading}`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Prefer to call us directly?
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: "📞", label: "Call / WhatsApp", value: "+91 97397 22211", href: "tel:+919739722211" },
                    { icon: "✉️", label: "Email us", value: "enquiry@svvideshvidya.com", href: "mailto:enquiry@svvideshvidya.com" },
                    { icon: "🕐", label: "Office Hours", value: "Mon–Sat, 10:30 AM – 6:00 PM", href: null },
                  ].map(c => (
                    <div key={c.label} className="flex items-start gap-3">
                      <span className="text-xl mt-0.5">{c.icon}</span>
                      <div>
                        <p className={`text-xs ${dm.muted}`}>{c.label}</p>
                        {c.href
                          ? <a href={c.href} className="text-sm font-semibold text-[#6B4EFF] hover:underline">{c.value}</a>
                          : <p className={`text-sm font-semibold ${dm.heading}`}>{c.value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className={`rounded-3xl border p-6 ${dm.card}`}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { emoji: "🔒", text: "100% Secure" },
                    { emoji: "🎓", text: "C1 Certified" },
                    { emoji: "📹", text: "Live Classes" },
                    { emoji: "✅", text: "No Payment Now" },
                  ].map(b => (
                    <div key={b.text} className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold ${dark ? "bg-[#1C1830] text-slate-300" : "bg-slate-50 text-slate-600"}`}>
                      <span className="text-base">{b.emoji}</span> {b.text}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── RIGHT — Form or Success ────────────────────────────── */}
            <main className="lg:col-span-3">
              <div className={`rounded-3xl border shadow-2xl ${dark ? "shadow-black/40" : "shadow-slate-200/60"} ${dm.card}`}>

                {status === "success" ? (
                  <SuccessScreen dark={dark} name={form.from_name.split(" ")[0]} />
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="p-8 md:p-10">

                    <div className="mb-8">
                      <h2 className={`text-2xl font-black mb-1.5 ${dm.heading}`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Your Details
                      </h2>
                      <p className={`text-sm ${dm.muted}`}>
                        Fields marked with <span className="text-[#6B4EFF] font-bold">*</span> are required.
                      </p>
                    </div>

                    <div className="space-y-6">

                      {/* Name + Email */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Full Name" required error={errors.from_name} dark={dark}>
                          <input
                            type="text"
                            name="from_name"
                            value={form.from_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="e.g. Priya Sharma"
                            className={inputCls(dark, !!errors.from_name)}
                          />
                        </Field>
                        <Field label="Email Address" required error={errors.from_email} dark={dark}>
                          <input
                            type="email"
                            name="from_email"
                            value={form.from_email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="you@example.com"
                            className={inputCls(dark, !!errors.from_email)}
                          />
                        </Field>
                      </div>

                      {/* Phone + Course */}
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Phone / WhatsApp" required error={errors.phone} dark={dark}>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="+91 98765 43210"
                            className={inputCls(dark, !!errors.phone)}
                          />
                        </Field>
                        <Field label="Course Interested In" required error={errors.course} dark={dark}>
                          <select
                            name="course"
                            value={form.course}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={inputCls(dark, !!errors.course)}
                            style={{ appearance: "none" }}
                          >
                            <option value="" disabled>Select a course…</option>
                            {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </Field>
                      </div>

                      {/* Preferred time */}
                      <Field label="Preferred Class Timing" error={errors.preferred_time} dark={dark}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {TIMES.map(t => (
                            <label key={t}
                              className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer border transition-all text-sm
                                ${form.preferred_time === t
                                  ? "border-[#6B4EFF] bg-[#6B4EFF]/10 text-[#6B4EFF] font-semibold"
                                  : dark
                                    ? "border-[#2e2a4a] bg-[#1C1830] text-slate-300 hover:border-[#6B4EFF]/40"
                                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"}`}>
                              <input type="radio" name="preferred_time" value={t}
                                checked={form.preferred_time === t}
                                onChange={handleChange}
                                className="accent-[#6B4EFF] w-4 h-4 flex-shrink-0" />
                              {t}
                            </label>
                          ))}
                        </div>
                      </Field>

                      {/* Message */}
                      <Field label="Additional Message" error={errors.message} dark={dark}>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={4}
                          placeholder="Tell us about your goals — studying in Germany, job, PR, or just starting out…"
                          className={`${inputCls(dark, !!errors.message)} resize-none`}
                        />
                      </Field>

                      {/* Error banner */}
                      {status === "error" && (
                        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4">
                          <span className="text-red-400 text-lg">⚠️</span>
                          <div>
                            <p className="text-red-400 font-semibold text-sm">Failed to send message</p>
                            <p className={`text-xs mt-0.5 ${dm.muted}`}>
                              Please try again, or contact us directly at{" "}
                              <a href="tel:+919739722211" className="text-[#6B4EFF] hover:underline">+91 97397 22211</a>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Privacy note */}
                      <p className={`text-xs leading-relaxed ${dm.muted}`}>
                        🔒 Your information is completely secure and will never be shared with third parties.
                        By submitting this form you agree to be contacted by SV Videsh Vidya regarding this enquiry.
                      </p>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-3 bg-yellow-300 hover:bg-yellow-400
                          text-[#1A152D] font-black py-4 rounded-xl transition-all active:scale-[0.98]
                          shadow-lg shadow-yellow-300/25 disabled:opacity-60 disabled:cursor-not-allowed text-base"
                        style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {status === "sending" ? (
                          <>
                            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                            </svg>
                            Sending your request…
                          </>
                        ) : (
                          <>
                            Book My Free Demo
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}