import type { Config } from 'tailwindcss';

/**
 * Dark Authority Hybrid design system (dev_2.1).
 * Dark surfaces: ink / ink-soft / footer.
 * Light surfaces: paper / surface.
 * Blue = interaction & technical. Gold = premium authority.
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111827',
          soft: '#1C2636',
        },
        paper: '#F7F4EE',
        surface: '#FFFFFF',
        text: '#172033',
        muted: '#5E6878',
        accent: {
          blue: '#38BDF8',
          'blue-hover': '#0EA5E9',
          'blue-active': '#0284C7',
          'blue-ink': '#0369A1',
          gold: '#D6AD55',
          'gold-ink': '#9A7B2E',
        },
        line: '#DCD7CE',
        footer: '#090E17',
        /* Legacy aliases */
        page: '#F7F4EE',
        card: '#FFFFFF',
      },
      boxShadow: {
        card: '0 2px 12px rgba(17, 24, 39, 0.08)',
        'card-hover': '0 8px 28px rgba(17, 24, 39, 0.12)',
        cta: '0 6px 20px rgba(56, 189, 248, 0.35)',
        'hero-card': '0 16px 48px rgba(17, 24, 39, 0.24)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        hebrew: ['var(--font-heebo)', 'sans-serif'],
      },
      fontSize: {
        hero: ['2rem', { lineHeight: '1.25', fontWeight: '800' }],
        'hero-sm': ['2.375rem', { lineHeight: '1.22', fontWeight: '800' }],
        'hero-lg': ['4rem', { lineHeight: '1.15', fontWeight: '800' }],
        section: ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }],
        'section-sm': ['2rem', { lineHeight: '1.28', fontWeight: '700' }],
        'section-lg': ['3rem', { lineHeight: '1.25', fontWeight: '700' }],
        'card-title': ['1.125rem', { lineHeight: '1.4', fontWeight: '700' }],
        'card-title-lg': ['1.25rem', { lineHeight: '1.4', fontWeight: '700' }],
        meta: ['0.8125rem', { lineHeight: '1.5' }],
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
