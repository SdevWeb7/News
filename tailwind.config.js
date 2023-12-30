/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './index.html',
     './src/**/*.jsx'
  ],
  theme: {
     screens: {
        'tablet': '580px',
        'desktop': '1000px',
     },
    extend: {
       fontFamily: {
          inter: 'Inter'
       },
       colors: {
          custom1: 'hsl(36, 100%, 99%)',
          custom2: 'hsl(233, 8%, 79%)',
          custom3: 'hsl(236, 13%, 42%)',
          custom4: 'hsl(240, 100%, 5%)',
          custom5: 'hsl(5, 85%, 63%)',
          custom6: 'hsl(35, 77%, 62%)'
       }
    },
  },
  plugins: [],
}