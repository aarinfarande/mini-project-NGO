/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Strict Color Palette as defined in System Specification
        saffron: '#F47B20',
        golden: '#F9B233',
        charcoal: '#292524',
        cream: '#FFF9F2',
        white: '#FFFFFF',
        muted: '#6B625A',
      },
      fontFamily: {
        heading: ['Gelasio', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
