import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.3rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '4rem',
    },
    extend: {
      // fontFamily: {
      //   jost: ["Jost", "sans-serif"]
      // },
    },
  },
  daisyui: {
    themes: [ 
      "cupcake",
    ]
  },
  plugins: [
    require('daisyui'),
  ],
}