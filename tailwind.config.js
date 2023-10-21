import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      brand: {
        light: "#A881E6",
        DEFAULT: "#7450AC",
        dark: "#523480",
      },
      gray: {
        100: "#FBF9FE",
        200: "#AFABB6",
        300: "#252529",
        400: "#17171A",
        500: "#111112",
        600: "#0C0C0D",
      },
      feeedback: {
        DEFAULT: "#2F723D",
        light: "#4E995E",
      },
      red: {
        DEFAULT: "#F77070",
        dark: "#AB3030",
      },
      pink: {
        DEFAULT: "#DB5BBF",
        dark: "#251622",
      },
      orange: {
        DEFAULT: "#E07B67",
        dark: "#261A17",
      },
      yellow: {
        DEFAULT: "#BB9F3A",
        dark: "#211E12",
      },
      green: {
        DEFAULT: "#8CAD51",
        dark: "#1C2015",
      },
      blue: {
        DEFAULT: "#7B94CB",
        dark: "#1A1D23",
      },
      transparent: "transparent",
    },
  },
  plugins: [],
}
