/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "assets/**",
    "entrypoints/**/*.{ts,tsx,html}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}