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
        sans:'var(--font-k2d)',
        alt:'var(--font-lalezar)'
      },
      colors:{
        gorse:'#FEF65A',
        softGorse:'#F8ECB4',
        grenadier:'#DE2901',

      }
    },
  },
  plugins: [],
}
