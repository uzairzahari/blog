/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", 'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
