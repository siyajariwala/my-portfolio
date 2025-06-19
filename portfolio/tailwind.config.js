/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['inter','sans-serif']
      },
      transformOrigin:{
        'center':'center'
      }
    },
    rotate:{
      'y-180':'rotateY(180deg)',
    },
  },
  plugins: [tailwindScrollbar],
}