/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda"', "serif"],
        lora: ['"Lora"', "serif"]
      },
      colors: {

      },
    },
  },
  plugins: [require('daisyui')],
}