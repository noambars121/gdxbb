import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        'ink-soft': '#1C2636',
        paper: '#F7F4EE',
        surface: '#FFFFFF',
        brand: {
          text: '#172033',
          muted: '#5E6878',
          blue: '#38BDF8',
          gold: '#D6AD55',
          line: '#DCD7CE',
        },
        footer: '#090E17',
      },
      fontFamily: {
        sans: ['var(--font-heebo)', 'sans-serif'],
      },
      fontSize: {
        label: ['12px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        body: ['16px', { lineHeight: '1.65' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'card-title': ['18px', { lineHeight: '1.4', fontWeight: '700' }],
        h3: ['24px', { lineHeight: '1.35', fontWeight: '700' }],
        h2: ['32px', { lineHeight: '1.25', fontWeight: '800' }],
        'h1-sm': ['36px', { lineHeight: '1.2', fontWeight: '800' }],
        h1: ['56px', { lineHeight: '1.1', fontWeight: '800' }],
      },
    },
  },
  plugins: [],
};

export default config;
