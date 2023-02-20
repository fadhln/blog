/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Space Mono', 'Inconsolata', 'SFMono-Regular', 'ui-monospace'],
        heading: [
          'Space Mono',
          'Inconsolata',
          'SFMono-Regular',
          'ui-monospace',
        ],
      },
      colors: {
        'warm-gray': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#FAFAF9',
          300: '#E5E5E5',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      }
    },
  },
  plugins: [],
};
