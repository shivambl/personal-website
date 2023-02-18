/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        maroon: {
          50: '#f2e6e6',
          100: '#c08080',
          200: '#b36666',
          300: '#a64d4d',
          400: '#993333',
          500: '#8d1a1a',
          600: '#800000',
          700: '#730000',
          800: '#660000',
          900: '#5a0000',
        }
      }
    },
  },
  plugins: [],
}
