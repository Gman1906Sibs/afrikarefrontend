/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
