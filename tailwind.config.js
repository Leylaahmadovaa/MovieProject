/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      titleone:["sans","serif"],
      title:["Montserrat", "sans-serif"]
    },
    boxShadow:{
      '3xl':'0 10px 12px -10px black',
      '4xl':'inset 0 0 5px #000'
    },
    extend: {
      backgroundImage: {
         'background': "url('./assets/copy.png')",
        }
    },
  },
  plugins: [],
}

