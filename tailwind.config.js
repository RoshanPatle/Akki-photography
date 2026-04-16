/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'serif'],
        'sans': ['Syne', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a96e',
          light: '#e8c98a',
          dark: '#a07d42',
        },
        dark: {
          DEFAULT: '#050508',
          2: '#0a0a10',
          3: '#0f0f18',
        },
      },
      backgroundImage: {
        'gold-radial': 'radial-gradient(ellipse at 60% 40%, rgba(201,169,110,0.07) 0%, transparent 60%)',
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
