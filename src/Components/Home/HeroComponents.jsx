import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gif from '../../assets/globe-illustration.svg'

const HeroComponents = () => {

  return (
    <section className="relative w-full">
      {/* Hero Section 1 */}
      {/* Hero Section 1 */}
      <div className="relative w-full overflow-hidden text-white py-14 px-6 md:px-12 text-center"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)" }}>

        {/* Background grid dots */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        {/* Glow orbs */}
        <div className="absolute rounded-full pointer-events-none opacity-25"
          style={{ width: 380, height: 380, background: "#6B4EFF", filter: "blur(80px)", top: -100, left: -80 }} />
        <div className="absolute rounded-full pointer-events-none opacity-20"
          style={{ width: 300, height: 300, background: "#ff6b6b", filter: "blur(80px)", bottom: -80, right: -60 }} />

        <motion.div className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>

          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Enrollments Open
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
            Study <span className="text-yellow-300">Abroad</span> Now!
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/60 mb-5">
            Engineering &nbsp;|&nbsp; Arts &amp; Management &nbsp;|&nbsp; Science
          </p>

          {/* Big tagline */}
          <p className="text-3xl md:text-5xl font-bold text-yellow-300 mb-10 leading-tight">
            Exclusive Online Test Preparation
          </p>

          {/* CTA + Book Demo row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link to="/contact"
              className="px-8 py-3 bg-yellow-400 text-black font-semibold text-base rounded-full hover:bg-yellow-300 transition shadow-lg">
              Start Today
            </Link>
            <div className="flex items-center gap-2 text-white/70 font-medium text-sm">
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs">↗</span>
              Book for Free Demo
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px mb-7"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

          {/* 3 Course cards with slots */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "IELTS", slots: 4, link: "/ielts" },
              { name: "GERMAN", slots: 3, link: "/german" },
              { name: "FRENCH", slots: 5, link: "/french" },
            ].map((course) => (
              <Link key={course.name} to={course.link}
                className="flex flex-col items-center gap-2 px-7 py-4 rounded-2xl transition hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", backdropFilter: "blur(10px)", minWidth: 120 }}>
                <span className="text-white font-semibold text-base">{course.name}</span>
                <span className="text-xs font-medium px-2 py-1 rounded-full"
                  style={{ color: "#ff9f9f", background: "rgba(255,80,80,0.15)", border: "1px solid rgba(255,80,80,0.3)" }}>
                  ★ Only {course.slots} slots left
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-5 text-xs text-white/40">🔒 Seats are limited per batch — secure yours before they fill up</p>

        </motion.div>
      </div>

      {/* Hero Section 2 */}
      <div className="relative w-full flex flex-col md:flex-row items-center gap-14 py-20 px-8 md:px-16 overflow-hidden"
        style={{ background: "#f8f7ff" }}>

        {/* bg orbs */}
        <div className="absolute rounded-full pointer-events-none" style={{ width: 420, height: 420, background: "rgba(107,78,255,0.07)", top: -140, right: -100 }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width: 260, height: 260, background: "rgba(107,78,255,0.05)", bottom: -80, left: -80 }} />

        {/* Left Text */}
        <div className="relative flex-1 text-left">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-7 h-0.5 bg-purple-600 rounded" />
            <span className="text-xs font-bold tracking-widest uppercase text-purple-600">Global Opportunities</span>
          </div>
          <h2 className="font-black text-[#1A152D] leading-tight mb-5"
            style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            Explore <span className="text-purple-600">Global</span> Education
          </h2>
          <p className="text-base text-gray-500 leading-relaxed max-w-md mb-8">
            Discover top-ranked universities worldwide and fulfill your dream of studying abroad with personalised guidance from our expert counsellors.
          </p>

          {/* Stats card */}
          <div className="flex items-center w-fit bg-white rounded-2xl px-6 py-4 mb-9 gap-0"
            style={{ border: "1px solid rgba(107,78,255,0.1)" }}>
            {[["500+", "Universities"], ["30+", "Countries"], ["12K+", "Students Placed"]].map(([n, l], i, a) => (
              <div key={l} className="flex items-center">
                <div className="flex flex-col items-center gap-1 px-6 first:pl-0 last:pr-0">
                  <span className="text-2xl font-extrabold text-[#1A152D] leading-none">{n}</span>
                  <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{l}</span>
                </div>
                {i < a.length - 1 && <div className="w-px h-9 bg-gray-100" />}
              </div>
            ))}
          </div>

          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition hover:-translate-y-0.5"
            style={{ boxShadow: "0 8px 24px rgba(107,78,255,0.3)" }}>
            Contact Us
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs">↗</span>
          </Link>
        </div>

        {/* Right Visual Card */}
        <div className="relative flex-1 flex justify-center">
          <div className="w-full max-w-lg rounded-3xl overflow-hidden bg-white"
            style={{ border: "1px solid rgba(107,78,255,0.12)" }}>

            {/* Purple top with SVG globe */}
            <div className="relative flex justify-center items-center px-8 pt-10 pb-8 min-h-[300px]"
              style={{ background: "linear-gradient(135deg,#EDE9FF 0%,#ddd6ff 100%)" }}>
              <div className="absolute w-44 h-44 rounded-full top-[-40px] right-[-40px]" style={{ background: "rgba(107,78,255,0.1)" }} />
              <div className="absolute w-24 h-24 rounded-full bottom-[-20px] left-5" style={{ background: "rgba(107,78,255,0.07)" }} />

              <img src={gif} alt="Global Education" className="relative w-full  object-contain drop-shadow-xl" />
            </div>

            {/* Bottom info strip */}
            <div className="p-5 flex flex-col gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">Top Destinations</p>
                <div className="flex flex-wrap gap-2">
                  {[["🇺🇸", "USA"], ["🇬🇧", "UK"], ["🇨🇦", "Canada"], ["🇩🇪", "Germany"], ["🇦🇺", "Australia"], ["🇫🇷", "France"]].map(([f, c]) => (
                    <span key={c} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-purple-700"
                      style={{ background: "#f4f1ff", border: "1px solid rgba(107,78,255,0.15)" }}>
                      {f} {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-sm tracking-tight">★★★★★</span>
                  <span className="text-xs text-gray-400 font-medium">4.9 · 2,400+ reviews</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-green-700"
                  style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Counsellors Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section 3 */}
      <div className="relative w-full text-white text-center py-20 px-8 md:px-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1A152D 0%,#302b63 60%,#6B4EFF 100%)" }}>

        {/* dot mesh */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* orbs */}
        <div className="absolute rounded-full pointer-events-none opacity-15" style={{ width: 350, height: 350, background: "#FFD600", top: -100, right: -80, filter: "blur(80px)" }} />
        <div className="absolute rounded-full pointer-events-none opacity-15" style={{ width: 250, height: 250, background: "#6B4EFF", bottom: -80, left: -60, filter: "blur(80px)" }} />

        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/50">Live Online Coaching</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black leading-tight mb-3">
            Pursue Your Dreams with <span className="text-yellow-300">Expert Faculties</span>
          </h3>
          <p className="text-white/60 text-base mb-12">Join our online live coaching — flexible, interactive & result-driven</p>

          {/* Course Grid */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { name: "IELTS", sub: "Band 7+ Guarantee", link: "/ielts" },
              { name: "DUOLINGO", sub: "Fast Track", link: "/duolingo" },
              { name: "GRE", sub: "320+ Scores", link: "/gre" },
              { name: "French", sub: "A1 to B2", link: "/french" },
              { name: "German", sub: "A1 to B2", link: "/german" },
              { name: "English", sub: "Spoken & Written", link: "/spoken-english" },
              { name: "TOEFL", sub: "100+ Scores", link: "/toefl" },
              { name: "SAT", sub: "1400+ Prep", link: "/sat" },
            ].map(c => (
              <Link key={c.name} to={c.link}
                className="flex flex-col items-center gap-1.5 px-6 py-4 rounded-2xl transition hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", minWidth: 110 }}>
                <span className="font-semibold text-sm text-white">{c.name}</span>
                <span className="text-[10.5px] text-white/45">{c.sub}</span>
              </Link>
            ))}
          </div>

          {/* Combo Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-8 py-5 rounded-2xl"
            style={{ background: "rgba(255,214,0,0.1)", border: "1px solid rgba(255,214,0,0.35)" }}>
            <span className="text-xs font-bold tracking-widest uppercase text-yellow-400">Special Offer</span>
            <span className="text-lg font-bold text-white">Join GRE + TOEFL Combo Today!</span>
            <span className="px-3 py-1 rounded-full bg-yellow-400 text-[#1A152D] text-xs font-bold uppercase tracking-wide">Save 30%</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroComponents;
