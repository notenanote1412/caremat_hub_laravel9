/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
        fontFamily: {
            prompt: ["Prompt", "sans-serif"],
            mali: ["Mali", "sans-serif"],
          },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}
