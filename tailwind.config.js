/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "shimmer-move": {
          "0%": { left: "-60%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "110%", opacity: "0" },
        },
        "twinkle-glow": {
          "0%, 100%": {
            boxShadow: "0 0 4px #FFD600, 0 0 10px rgba(255,214,0,0.3)",
            opacity: "0.7",
          },
          "50%": {
            boxShadow: "0 0 10px #FFD600, 0 0 28px rgba(255,214,0,0.7), 0 0 48px rgba(255,214,0,0.2)",
            opacity: "1",
          },
        },
      },
      animation: {
        "shimmer-move": "shimmer-move 2s ease-in-out infinite",
        "twinkle-glow": "twinkle-glow 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};