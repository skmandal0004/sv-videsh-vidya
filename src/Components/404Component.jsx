// src/Routes/NotFound.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// ─── Dark mode hook (same as your system) ───
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

// ─── Theme ───
const NAVY = "#1A152D";
const PURPLE = "#6B4EFF";
const YELLOW = "#FFD700";

export default function NotFound() {
    const dark = useDarkMode();

    return (
        <div
            style={{
                minHeight: "100vh",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                background: dark
                    ? "linear-gradient(135deg,#0F0C1D,#1A1527)"
                    : "linear-gradient(135deg,#F9F8FF,#FFFFFF)",
                color: dark ? "#fff" : NAVY,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
            }}
        >
            <div style={{ textAlign: "center", maxWidth: "600px" }}>

                {/* 404 BIG TEXT */}
                <h1
                    style={{
                        fontSize: "clamp(5rem, 12vw, 9rem)",
                        fontWeight: 900,
                        margin: 0,
                        background: `linear-gradient(135deg, ${PURPLE}, ${YELLOW})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1,
                    }}
                >
                    404
                </h1>

                {/* Glass Card */}
                <div
                    style={{
                        marginTop: "-1rem",
                        padding: "2rem",
                        borderRadius: "16px",
                        background: dark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(12px)",
                        border: dark
                            ? "1px solid rgba(255,255,255,0.1)"
                            : "1px solid #E8E4F8",
                        boxShadow: dark
                            ? "0 10px 40px rgba(0,0,0,0.4)"
                            : "0 10px 40px rgba(26,21,45,0.08)",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.6rem",
                            fontWeight: 800,
                            marginBottom: "0.5rem",
                        }}
                    >
                        Page Not Found
                    </h2>

                    <p
                        style={{
                            fontSize: "0.95rem",
                            color: dark ? "#cbd5e1" : "#555",
                            lineHeight: 1.6,
                            marginBottom: "1.8rem",
                        }}
                    >
                        The page you're looking for doesn't exist or may have been moved.
                        Try navigating back to the homepage or explore our services.
                    </p>

                    {/* Buttons */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "1rem",
                            flexWrap: "wrap",
                        }}
                    >
                        <Link
                            to="/"
                            style={{
                                background: `linear-gradient(135deg, ${NAVY}, ${PURPLE})`,
                                color: "#fff",
                                padding: "0.8rem 1.8rem",
                                borderRadius: "8px",
                                fontWeight: 700,
                                textDecoration: "none",
                            }}
                        >
                            ⬅ Back Home
                        </Link>

                        <Link
                            to="/contact"
                            style={{
                                border: `2px solid ${PURPLE}`,
                                color: PURPLE,
                                padding: "0.8rem 1.8rem",
                                borderRadius: "8px",
                                fontWeight: 600,
                                textDecoration: "none",
                            }}
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>

                {/* Small Hint */}
                <p
                    style={{
                        marginTop: "1.5rem",
                        fontSize: "0.75rem",
                        color: dark ? "#64748b" : "#888",
                    }}
                >
                    Error Code: 404 • Invalid Route
                </p>
            </div>
        </div>
    );
}