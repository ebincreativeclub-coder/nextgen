/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#211F5D',       // var(--color-bg)
          darker: '#1a184a',     // var(--color-bg-dark)
          accent: '#E4B023',     // var(--color-accent)
          accentHover: '#d1a01f',
          light: '#F9FAFF',      // for light sections
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'morph': 'morph 10s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        morph: {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', transform: 'rotate(0deg)' },
          '100%': { borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%', transform: 'rotate(10deg)' },
        }
      }
    },
  },
  plugins: [],
}