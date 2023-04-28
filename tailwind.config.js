/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'encode-sans': ['Encode Sans', 'sans-serif']
      },
      colors: {
        'fsd-blue': '#0079B8',
        'fsd-darkBlue': '#004366',
        'fsd-red': '#E62700',
        'fsd-green': '#62A420'
      }
    }
  },
  plugins: []
};
