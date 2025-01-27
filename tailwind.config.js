/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        lime: "var(--lime)",
        purple: {
          100: "var(--purple)",
          40: "var(--light-purple)",
        },
        "off-white": "var(--off-white)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dm_sans: "var(--font-dm_sans)",
        lato: "var(--lato)",
        playfair: "var(--playfair)",
      },

      backgroundImage: {
        "hero-home-1": "url(/images/hero2.jpg)",
        "hero-home-2": "url(/images/hero1.jpeg)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
