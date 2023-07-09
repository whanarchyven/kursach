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
      },
      animation:{
        'spin-slow':'spinSlow 15s linear infinite'
      },
      keyframes:{
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
