import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './modules/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#006643',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [require('daisyui'), require('tailwind-hamburgers')],
};

export default config;
