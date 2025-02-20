/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        frank: ["Frank Ruhl Libre", "serif"],
      },
      colors: {
        primary: "#49C7AB",
        secondary: "#00927C",
      },
    },
  },
  plugins: [],
};
