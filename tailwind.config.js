/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 576px) { ... }

      md: '768px',

      lg: '1000px',
      // => @media (min-width: 1440px) { ... }
      xl: '1440px',
    },
  },
  plugins: [],
};
