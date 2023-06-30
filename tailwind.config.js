/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway':['Raleway'],
        'oranienbaum':['Oranienbaum'],
      },
      colors:{
        'gold':'#CFB26F',
        'black':'#0F0F0F'
      }
    },
  },
  plugins: [],
}
