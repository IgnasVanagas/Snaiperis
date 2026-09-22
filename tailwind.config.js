/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        snaiperis: {
          red: {
            DEFAULT: '#ec1f26',
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ec1f26',
            600: '#dc141b',
            700: '#b91016',
            800: '#761013',
            900: '#450a0c',
            950: '#280507',
          },
          gold: {
            DEFAULT: '#fcc512',
            50: '#fffdf0',
            100: '#fff9c2',
            200: '#fff285',
            300: '#ffe947',
            400: '#fcd824',
            500: '#fcc512',
            600: '#dbb63d',
            700: '#a37508',
            800: '#855c0d',
            900: '#714c10',
          },
          dark: {
            DEFAULT: '#111215',
            50: '#f6f6f7',
            100: '#e7e8ea',
            200: '#cfd1d5',
            300: '#adafb6',
            400: '#848791',
            500: '#686a74',
            600: '#53545d',
            700: '#44454b',
            800: '#28292d',
            900: '#18191d',
            950: '#0f1013',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 12px 24px -6px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
