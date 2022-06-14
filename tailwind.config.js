/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    './assets/**/*.{vue,js,css}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // This line causes the error of "cannot import inside ..."
    // "./nuxt.config.{js,ts}",
  ],
  // purge: [
  //   "./assets/**/*.{css}",
  //   "./components/*.{vue,js}",
  //   "./components/**/*.{vue,js}",
  //   "./pages/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./*.{vue,js,ts}",
  //   "./nuxt.config.{js,ts}",
  // ],
  theme: {
    extend: {
      colors: {
        weak: '#d1d5db',
        normal: '#6b7280',
        strong: '#1f2937',
      },
      screens: {
        mlg: '992px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};