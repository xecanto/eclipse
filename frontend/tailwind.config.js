/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8e7',
          100: '#f8f1cf',
          200: '#f0e29f',
          300: '#e7d06f',
          400: '#e0c050',
          500: '#d4a930',
          600: '#bc8c26',
          700: '#9c6e23',
          800: '#815824',
          900: '#6d4a22',
          950: '#402b12',
        },
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'body': ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float-1': 'float 15s ease-in-out infinite',
        'float-2': 'float 20s ease-in-out infinite', 
        'float-3': 'float 25s ease-in-out infinite',
        'shimmer': 'shimmer 5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
