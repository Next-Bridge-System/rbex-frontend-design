// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navbar: '#F4FDFF',
        navText: '#393C3D',
        strip:'#BA2027',
        feature:'#FAFAFA',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
         rubik: ['Rubik', 'sans-serif'],
         lato:  ['Lato','sans-serif'],
      },
    },
  },
  plugins: [],
};
