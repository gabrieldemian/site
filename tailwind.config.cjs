/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  theme: {
    fontSize: {
      sm: 'var(--step--1)', // small
      md: 'var(--step-0)', // p
      lg: 'var(--step-1)', // h6
      xl: 'var(--step-2)', // h5
      '2xl': 'var(--step-3)', // h4
      '3xl': 'var(--step-4)', // h3
      '4xl': 'var(--step-5)', // h1
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
      },
    },
    extend: {
      fontFamily: {
        poppins: 'poppins',
        corben: 'corben',
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'mocha',
    }),
  ],
}
