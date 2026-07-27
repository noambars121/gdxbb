import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070A11',
        surface: {
          DEFAULT: '#0E1422',
          hover: '#141D30',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          accent: '#0EA5E9',
          'accent-hover': '#0284C7',
          'accent-light': '#38BDF8',
          glow: 'rgba(14, 165, 233, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        hebrew: ['var(--font-heebo)', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
