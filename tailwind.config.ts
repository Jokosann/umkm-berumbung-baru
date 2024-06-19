import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/image/bg-home.jpg')",
      },
      colors: {
        'primary-color': '#006643',
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
} satisfies Config;

export default config;
