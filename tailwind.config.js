/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      screens: {
        'mg': '343px', // Example custom breakpoint
      },
      backgroundColor:{
        "bg-grey" : '#f8f8f8',
        "Bg-orange":'#FA782F66',
      }
    },
  },
  plugins: [],
}

