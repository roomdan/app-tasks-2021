module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent:'transparent',
      gray: '#444444',
      blue: '#5C7AEA',
      lblue:'#822efe',
      purple: '#3D2C8D',
      ligthPurple:'#916BBF',
      pink:'#C996CC',
      black: 'black',
      white:'white',
      red:'red',
      yellow:'#fabc41',
      green:'#B1E693',
      dark:'#1e1722'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
