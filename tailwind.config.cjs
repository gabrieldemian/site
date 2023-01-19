/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        poppins: 'poppins',
        corben: 'corben'
      }
    }
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      defaultFlavour: 'mocha'
    })
  ]
}
