/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/index.html',
      './src/components/home.html'
  ],
  theme: {
    colors: {
      'orange': '#e55829',
      'orange-light': '#db6f39',
      'white': '#e9dccd',
      'dark-gray': '#616161',
    },
    fontFamily: {
      'body': 'hwzs'
    },
    extend: {},
  },
  plugins: [],
}

