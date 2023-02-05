/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        fst: '#374151',
        white: '#e6e5e4',
      },
      boxShadow: {
        searchShadow:
          'inset 0 0 0 rgba(0,0,0,0),0 .5rem 1.125rem -0.5rem rgba(99,102,241,.2)',
      },
    },
  },
  plugins: [],
};
