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
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        }
      }
    },
  },
  plugins: [],
};
