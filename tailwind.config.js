/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:"480px",
      md:"760px",
      lga:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        brightRed:'#800f2f',
        brightRedLight:'#c9184a',
        brightRedSupLight:'',
        darkBlue:'',
        darkGrayisBlue: "#8d99ae",
        veryDarkBlue:'#03071e',
        veryPaleRed:'',
        veryLightGray:'#e9ecef',
      }
    },
  },
  plugins: [],
}

