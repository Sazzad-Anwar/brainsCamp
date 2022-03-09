module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "saira": ['Saira Condensed', 'sans-serif'],
      "ubuntu": ['Ubuntu Condensed', 'sans-serif'],
    },
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#6B21A8',
      secondary: '#EA580C',
      tertiary: '#acacac',
      dark: '#0F172A',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      dark: '#0F172A',
      darkLight: '#243763',
      secondary: '#EA580C',
      primary: '#6B21A8'
    }),
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}