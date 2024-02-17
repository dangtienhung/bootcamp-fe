/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F60621',
        red: {
          l1: '#fa9e93',
          l10: '#f25869',
          DEFAULT: '#F60621'
        },
        blu: {
          DEFAULT: '#28a745'
        },
        gray: {
          l10: '#023668',
          l1: '#eeeeee',
          l9: '#999999',
          DEFAULT: '#212529'
        },
        yellow: {
          DEFAULT: '#ffc107'
        }
      }
    }
  },
  plugins: []
}
