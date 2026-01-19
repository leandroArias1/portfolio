/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        bgSecondary: "#0f172a",
        accent: "#8b5cf6",
        text: "#e5e7eb",
        muted: "#9ca3af",
      },
      extend: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      heading: ["Roboto Mono", "ui-monospace", "monospace"],
    },
    colors: {
      bg: "#020617",
      bgSecondary: "#0f172a",
      accent: "#8b5cf6",
      text: "#e5e7eb",
      muted: "#9ca3af",
    },
    },
  },
  plugins: [],
}}
