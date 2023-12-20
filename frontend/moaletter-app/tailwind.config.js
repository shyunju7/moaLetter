/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "SUITE-RG": ["SUITE-RG", "sans"],
        "SUITE-MD": ["SUITE-MD", "sans"],
        "SUITE-BD": ["SUITE-BD", "sans"],
        "SUITE-HY": ["SUITE-HY", "sans"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
