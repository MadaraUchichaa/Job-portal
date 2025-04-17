/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#141414",
        //no use this in home page
        "blue":"#3575E2"
      }
    },
  },
  plugins: [],
}

