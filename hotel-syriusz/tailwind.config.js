/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          50: '#f2f8f5',
          100: '#dbeedc',
          200: '#b8deb9',
          500: '#418b48',
          700: '#2b5c31',
          800: '#204626',
          900: '#1a3a20',
          950: '#0d1f11'
        },
        amber: {
          500: '#f59e0b',
          600: '#d97706'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}
