import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './modules/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
  plugins: [require('daisyui'), require('tailwind-hamburgers')],
};

export default config;
