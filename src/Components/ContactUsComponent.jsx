import React, { useState, useEffect } from "react";

// ─── Theme constants (matching FrenchPage exactly) ────────────────────────────
const NAVY = "#1A152D";
const PURPLE = "#6B4EFF";
const YELLOW = "#FFD700";

// ─── System-aware dark-mode hook ──────────────────────────────────────────────
// Reads prefers-color-scheme on mount and re-renders automatically whenever
// the user switches OS theme — no manual toggle needed.
function useDarkMode() {
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => setDark(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);
  return dark;
}

// ─── Shared helpers (identical to FrenchPage) ────────────────────────────────
const SectionLabel = ({ children, light = false }) => (
  <span
    style={{
      display: "inline-block",
      background: light
        ? "rgba(255,215,0,0.18)"
        : `linear-gradient(135deg,${NAVY},${PURPLE})`,
      border: light ? "1px solid rgba(255,215,0,0.45)" : "none",
      color: light ? YELLOW : "#fff",
      fontSize: "0.68rem",
      fontWeight: 700,
      letterSpacing: "0.13em",
      textTransform: "uppercase",
      padding: "4px 14px",
      borderRadius: "20px",
      marginBottom: "0.75rem",
    }}
  >
    {children}
  </span>
);

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add a Gmail service connected to onlinetestprepatsvvv@gmail.com
// 3. Create an email template — in the template set "To" = onlinetestprepatsvvv@gmail.com
//    and use variables: {{from_name}}, {{from_email}}, {{phone}}, {{message}}
// 4. Replace the three placeholders below with your real credentials
const EMAILJS_SERVICE_ID = "service_6g4bg1w";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_8a20l5u";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY = "7NDGgIHI94z-GI4rH";   // e.g. "abcDEFghiJKL789"

async function sendEmail({ firstName, lastName, email, phone, message }) {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: `${firstName} ${lastName}`.trim(),
        from_email: email,
        phone: phone || "Not provided",
        message: message || "No message",
      },
    }),
  });
  if (!res.ok) throw new Error(`EmailJS status ${res.status}`);
}

// ─── Styled field component ───────────────────────────────────────────────────
function Field({ label, type = "text", name, value, onChange, required, dark, textarea }) {
  const [focused, setFocused] = useState(false);
  const El = textarea ? "textarea" : "input";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
      <label
        style={{
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.45)" : "rgba(26,21,45,0.5)",
        }}
      >
        {label}
        {required && <span style={{ color: YELLOW, marginLeft: 2 }}>*</span>}
      </label>
      <El
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 5 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          borderRadius: "10px",
          border: `1.5px solid ${focused ? PURPLE : dark ? "rgba(255,255,255,0.12)" : "#D4CEF0"}`,
          background: dark ? "rgba(255,255,255,0.05)" : "#F9F8FF",
          color: dark ? "#fff" : NAVY,
          fontSize: "0.875rem",
          outline: "none",
          resize: textarea ? "vertical" : undefined,
          minHeight: textarea ? "120px" : undefined,
          fontFamily: "inherit",
          transition: "border-color 0.2s, box-shadow 0.2s",
          boxShadow: focused ? `0 0 0 3px ${PURPLE}22` : "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

// ─── Info block used in the left panel ───────────────────────────────────────
function InfoBlock({ icon, title, lines }) {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
      <div
        style={{
          width: 42, height: 42, borderRadius: "50%",
          background: `linear-gradient(135deg,${NAVY},${PURPLE})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, fontSize: "1.1rem",
          border: `2px solid ${YELLOW}33`,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: YELLOW, marginBottom: "0.3rem",
          }}
        >
          {title}
        </div>
        {lines.map((line, i) => (
          <div key={i} style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.65 }}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ContactUs() {
  // System-aware — updates automatically when OS theme changes
  const dark = useDarkMode();

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendEmail(form);
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        backgroundColor: dark ? "#0F0C1D" : "#fff",
        color: dark ? "#fff" : NAVY,
        overflowX: "hidden",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >

      {/* ══════════ HERO ══════════ */}
      <section
        style={{
          position: "relative",
          padding: "5.5rem 1.5rem 4rem",
          textAlign: "center",
          overflow: "hidden",
          background: dark
            ? `linear-gradient(135deg,#0F0C1D 0%,#1a1527 100%)`
            : `linear-gradient(135deg,${NAVY} 0%,${PURPLE} 100%)`,
        }}
      >
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: `${PURPLE}22`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: `${YELLOW}18`, pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <SectionLabel light>Get in Touch</SectionLabel>
          <h1
            style={{
              fontSize: "clamp(2.2rem,5vw,3.5rem)",
              fontWeight: 900, color: "#fff",
              margin: "0.5rem 0 0.75rem", lineHeight: 1.1,
            }}
          >
            Contact <span style={{ color: YELLOW }}>SV Videsh Vidya</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 480, margin: "0 auto", fontSize: "1rem", lineHeight: 1.75 }}>
            Questions about French courses, IELTS prep or Canada PR guidance?
            We're here to help — reach out any way you prefer.
          </p>
        </div>
      </section>

      {/* ══════════ TICKER ══════════ */}
      <div
        style={{
          background: YELLOW, padding: "0.85rem 1.5rem",
          display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap",
        }}
      >
        {[
          "📍 BTM Layout, Bengaluru",
          "📞 +91 9739722211",
          "⏰ Mon – Sat · 10:30 AM – 6:00 PM",
          "📧 enquiry@svvideshvidya.com",
        ].map((t) => (
          <span key={t} style={{ fontSize: "0.8rem", fontWeight: 700, color: NAVY }}>{t}</span>
        ))}
      </div>

      {/* ══════════ CONTACT GRID ══════════ */}
      <section style={{ padding: "4.5rem 1.5rem", background: dark ? "#1A1527" : "#F9F8FF" }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem", alignItems: "start",
          }}
        >

          {/* ── INFO PANEL ── */}
          <div
            style={{
              background: `linear-gradient(145deg,${NAVY} 0%,#2D1B69 100%)`,
              borderRadius: 20, padding: "2.5rem 2rem",
              display: "flex", flexDirection: "column", gap: "2rem",
              boxShadow: "0 8px 40px rgba(26,21,45,0.25)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", bottom: -40, right: -40, width: 160, height: 160, borderRadius: "50%", background: `${PURPLE}33`, pointerEvents: "none" }} />

            <div>
              <SectionLabel light>Our Office</SectionLabel>
              <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem", margin: "0.5rem 0 0", lineHeight: 1.3 }}>
                Visit or Call Us Anytime
              </h2>
            </div>

            <InfoBlock icon="📍" title="Address" lines={["4, 1st Main Rd, 1st Cross, MICO Layout,", "BTM Stage 2, Bengaluru, Karnataka 560076"]} />
            <InfoBlock icon="📞" title="Call Our Mainline" lines={["+91 9739722211", "+91 9739799996"]} />
            <InfoBlock icon="📧" title="Email Us" lines={["enquiry@svvideshvidya.com"]} />
            <InfoBlock icon="🕐" title="Office Hours" lines={["Monday – Saturday", "10:30 AM – 6:00 PM", "Lunch: 1 PM – 2 PM  ·  Closed Sundays"]} />

            <a
              href="https://wa.me/919739722211?text=Hi%2C%20I%20have%20an%20enquiry%20about%20your%20courses"
              target="_blank" rel="noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                background: YELLOW, color: NAVY, borderRadius: 10,
                padding: "0.85rem 1.5rem", fontWeight: 800, fontSize: "0.9rem",
                textDecoration: "none", marginTop: "0.5rem",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* ── CONTACT FORM ── */}
          <div
            style={{
              background: dark ? "#1a1a2e" : "#fff",
              borderRadius: 20, padding: "2.5rem 2rem",
              boxShadow: dark ? "0 4px 30px rgba(0,0,0,0.3)" : "0 4px 30px rgba(26,21,45,0.09)",
              border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E8E4F8",
            }}
          >
            <SectionLabel>Send a Message</SectionLabel>
            <h2 style={{ fontWeight: 800, fontSize: "1.4rem", margin: "0.5rem 0 0.4rem", color: dark ? "#fff" : NAVY }}>
              We'll Get Back to You Shortly
            </h2>
            <p style={{ fontSize: "0.85rem", color: dark ? "rgba(255,255,255,0.5)" : "#888", marginBottom: "1.75rem", lineHeight: 1.6 }}>
              Fill in the form and our team will respond within one business day.
            </p>

            {status === "success" ? (
              <div
                style={{
                  background: `linear-gradient(135deg,${NAVY},${PURPLE})`,
                  borderRadius: 14, padding: "2.5rem 2rem",
                  textAlign: "center", color: "#fff",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✅</div>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Message Sent!</div>
                <div style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.875rem", lineHeight: 1.65 }}>
                  Thank you for reaching out. Our team will contact you soon.
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: "1.5rem", background: YELLOW, color: NAVY, border: "none",
                    borderRadius: 8, padding: "0.65rem 1.5rem",
                    fontWeight: 700, fontSize: "0.875rem", cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name row */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.1rem" }}>
                  <div style={{ flex: "1 1 calc(50% - 0.5rem)", minWidth: 130 }}>
                    <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} dark={dark} />
                  </div>
                  <div style={{ flex: "1 1 calc(50% - 0.5rem)", minWidth: 130 }}>
                    <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} dark={dark} />
                  </div>
                </div>

                {/* Email + Phone row */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.1rem" }}>
                  <div style={{ flex: "1 1 calc(50% - 0.5rem)", minWidth: 130 }}>
                    <Field label="Email" type="email" name="email" value={form.email} onChange={handleChange} required dark={dark} />
                  </div>
                  <div style={{ flex: "1 1 calc(50% - 0.5rem)", minWidth: 130 }}>
                    <Field label="Phone" type="tel" name="phone" value={form.phone} onChange={handleChange} dark={dark} />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <Field label="Message" name="message" value={form.message} onChange={handleChange} dark={dark} textarea />
                </div>

                {status === "error" && (
                  <div
                    style={{
                      background: "#FEE2E2", border: "1px solid #FECACA", color: "#991B1B",
                      borderRadius: 8, padding: "0.75rem 1rem",
                      fontSize: "0.82rem", marginBottom: "1rem",
                    }}
                  >
                    ⚠️ {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%", padding: "0.9rem", borderRadius: 10, border: "none",
                    background: status === "sending" ? "#888" : `linear-gradient(135deg,${NAVY},${PURPLE})`,
                    color: "#fff", fontWeight: 800, fontSize: "0.95rem",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    letterSpacing: "0.03em", transition: "opacity 0.2s",
                  }}
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>

                <p style={{ textAlign: "center", fontSize: "0.75rem", color: dark ? "rgba(255,255,255,0.35)" : "#aaa", marginTop: "0.85rem" }}>
                  Your message is sent securely to our team.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ MAP ══════════ */}
      <section style={{ padding: "0 1.5rem 5rem", background: dark ? "#1A1527" : "#F9F8FF" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <SectionLabel>Find Us</SectionLabel>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.4rem,3vw,2rem)", margin: "0.5rem 0 0.4rem", color: dark ? "#fff" : NAVY }}>
              We're Located in BTM Layout, Bengaluru
            </h2>
            <p style={{ color: dark ? "#a0aec0" : "#666", fontSize: "0.875rem", lineHeight: 1.7 }}>
              4, 1st Main Rd, 1st Cross, MICO Layout, BTM Stage 2, Bengaluru – 560076
            </p>
          </div>
          <div
            style={{
              borderRadius: 20, overflow: "hidden", height: 420,
              boxShadow: dark ? "0 4px 30px rgba(0,0,0,0.4)" : "0 4px 30px rgba(26,21,45,0.12)",
              border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #E8E4F8",
            }}
          >
            <iframe
              title="SV Videsh Vidya Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62226.753299987955!2d77.5790211!3d12.896654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1503c3476f73%3A0xe51550942817954f!2sS%20V%20VIDESH%20VIDYA%2C%20Study%20Abroad%20(Australia%2C%20USA%2C%20UK%20%26%20Europe)%2C%20Online%20LIVE-%20IELTS%2C%20TOEFL%2C%20GRE%2C%20Duolingo%2C%20PTE%20%26%20German%20lang!5e0!3m2!1sen!2sin!4v1740039203090!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <section
        style={{
          padding: "5rem 1.5rem", textAlign: "center",
          background: dark
            ? `linear-gradient(135deg,#0F0C1D,#1a1527)`
            : `linear-gradient(135deg,${NAVY},${PURPLE})`,
          position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: `${YELLOW}18`, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 580, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, marginBottom: "0.75rem" }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Book a free demo class and see how SV Videsh Vidya can help you reach Canada, Europe and global career goals.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919739722211?text=Enquiry%20about%20Demo%20Classes"
              target="_blank" rel="noreferrer"
              style={{ background: YELLOW, color: NAVY, padding: "0.95rem 2.25rem", borderRadius: 8, fontWeight: 800, fontSize: "1rem", textDecoration: "none" }}
            >
              Book Free Demo →
            </a>
            <a
              href="tel:+919739722211"
              style={{ border: "2px solid rgba(255,255,255,0.5)", color: "#fff", padding: "0.95rem 2.25rem", borderRadius: 8, fontWeight: 600, fontSize: "1rem", textDecoration: "none" }}
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}