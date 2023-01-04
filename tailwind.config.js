const defaultTheme = require('tailwindcss/defaultConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#FFFFFF",
      white: '#ffffff',
      text: {
        DEFAULT: "#000000",
        light: "#ffffff",
      },
      light: {
        DEFAULT: "#0A296C",
        lighter: "#2F56AA",
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
