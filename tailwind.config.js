/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        garamond: ['"EB Garamond"', "cursive"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
};
