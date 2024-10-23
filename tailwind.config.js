/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#0EE6B7',

      },
      fontSize: {
        h1: ['64px', {
          fontWeight: '700'
        }],
        h3: ['36px', {
          fontWeight: '700'
        }],
        responsH3: ['20px', {
          fontWeight: '700'
        }]
      },
      fontFamily: {
        firasans: ['Fira Sans']
      }
    },
  },
  plugins: [],
}