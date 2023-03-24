/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        'grey': '#595958',
        'beig': '#A6948A',
        'primaryblue': '#041840',
        'blue': '#020E26',
        'green': '#1BF28E',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
