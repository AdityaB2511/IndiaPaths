/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#1a2e1a',
          700: '#2d4a2d',
          500: '#4a7c4a',
        },
        sand: {
          50: '#f5f0eb',
          100: '#ede5db',
          200: '#ddd0c0',
        },
        gold: {
          500: '#d4af37',
          600: '#b8941e',
        },
      },
    },
  },
  plugins: [],
}

