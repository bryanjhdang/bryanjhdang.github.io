export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '1.25rem',
      xl: '1.6rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.2rem',
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"]
      },
    },
  },
  plugins: [],
}