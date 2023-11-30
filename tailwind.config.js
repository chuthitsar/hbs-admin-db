/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '390px',
      // => @media (min-width: 576px) { ... }
      'md': '771px',
      // => @media (min-width: 960px) { ... }
      'lg': '1128px',
      // => @media (min-width: 1440px) { ... }
    },
    // colors : {
    //   c26 : "#262626",
    //   cC1 : "#C18653",
    //   cFA : "#FAFAFA",
    //   c8C : "#8C8C8C",
    //   c43 : "#434343",
    //   c14 : "#141414",
    //   cF5 : "#F5222D",
    //   c18 : "#1890FF",
    //   cE6 : "#E6F7FF",
    //   cD9 : "#D9D9D9",
    //   c59 : "#595959"
    // },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      gsans : ["Georama", "sans-serif"],
      serif: ['"Times New Roman"', 'serif'],
    },
    // fontSize: {
    //   'md': '18px',
    //   '6xl': '80px'
    // },
    colors: {
      primary: "#C18653",
      secondary: {
        50: '#fff',
        100: '#FAFAFA',
        200: '#BFBFBF',
        300: '#D9D9D9',
        400: '#595959',
        500: "#8C8C8C"
      },
      gray: {
        50: '#434343',
        100: '#262626',
        200: '#141414',
        300: '#000',
      },
      blue: "#1A73E8",
      red: "#F5222D",
      yellow: {
        50: "#FDC463",
        100: "#FAC663"
      }
    },
    extend: {
      lineHeight: {
        '7xl': '86px'
      }
    },
  },
  plugins: [],
}