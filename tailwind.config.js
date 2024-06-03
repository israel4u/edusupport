/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        deepBlue: '#173e43',
        lightBlue: '#3fb0ac',
        lightGray: '#dddfd4',
        yellow: '#fae596'
      },
      fontFamily: {
        roboto: ['Roboto', 'inter'],
        anton: ['Anton', 'sans-serif']
      }
    },
  },
  plugins: [],
}

