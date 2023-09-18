/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      primary: "#67BB5A",
      primaryDark: "#4c9342",
      secondary: "#ADDFAC",
      background: "#F5F5F5",
      dark: "#1C1F1D",
      grey: "#4B4747",
      "grey-500": "#B5C3C9",
      white: "#FFFFFF",
      "white-500": "rgba(255, 255, 255, 0.51)",
      black: "#000000",
      "black-500": "rgba(0, 0, 0, 0.51)",
      "red-500": "#EF4444",
      "red-900": "#991B1B",
      orange: "#F7931E",
    },
    boxShadow: {
      DEFAULT: "0px 4px 14px rgba(66, 59, 59, 0.1)",
    },
    extend: {
      screens: {
        xs: "425px",
        ...defaultTheme.screens,
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "draw-circle": {
          from: {
            strokeDashoffset: 283,
          },
          to: {
            strokeDashoffset: 0,
          },
        },
      },
      backgroundImage: {
        "tooltip-tail": "url('/image/tooltip-tail.png')",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        drawn: "draw-circle 1.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
