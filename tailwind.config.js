export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '1.2rem',
      xl: '1.6rem',
      '2xl': '2rem',
      '3xl': '3.5rem',
      '4xl': '4.5rem',
      '5xl': '6rem',
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"]
      },
    },
  },
  plugins: [],
}