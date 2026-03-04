// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f1f3f6",
        surface: "#ffffff",
        border: "#e2e8f0",
        text: "#0f172a",
        muted: "#475569",
        muted2: "#64748b",
        navy: "#0b3a6a",
        navyStrong: "#062746",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.06)",
        card: "0 18px 55px rgba(15, 23, 42, 0.10)",
        lift: "0 22px 70px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
    },
  },
  plugins: [],
};
