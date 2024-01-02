/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#e30513',
        'primary-yellow': '	#ffc103',
        'secondary': {
          100: '#d9d9d9',
          200: '#7f7f7f',
          300: '#595959',
          400: '#515151',
          500:  '#000000'
        }
      },
      fontFamily: {
        Overpass: ['Overpass', 'sans-serif'],
      },
      width: {
        '2/7': 'calc((100% / 7) * 2)',
      },
    },
  },
  plugins: [],
}