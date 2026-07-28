import type { Config } from 'tailwindcss';

/**
 * Light premium design system (rebuild brief v2.0.0, Section 1).
 * Token map:
 *   page   -> --bg-primary   #F7F5F2 (warm off-white / stone)
 *   card   -> --bg-card      #FFFFFF
 *   footer -> --bg-footer    #0F1623 (deep navy, footer only)
 *   ink    -> --text-primary #1A2035 / --text-secondary #4A5568
 *   line   -> --border       #E2E0DC
 *   accent.cyan / accent.gold per brief; the `-ink` variants are darkened
 *   equivalents used for text/icons so copy passes WCAG AA on light surfaces.
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
        page: '#F7F5F2',
        card: '#FFFFFF',
        footer: '#0F1623',
        ink: {
          DEFAULT: '#1A2035',
          secondary: '#4A5568',
          inverse: '#F8FAFC',
        },
        accent: {
          cyan: '#00C2FF',
          'cyan-hover': '#33CFFF',
          'cyan-active': '#00AEE6',
          'cyan-ink': '#006B99',
          gold: '#C9A84C',
          'gold-ink': '#8A6D2F',
        },
        line: '#E2E0DC',
      },
      boxShadow: {
        card: '0 2px 12px rgba(26, 32, 53, 0.08)',
        'card-hover': '0 8px 28px rgba(26, 32, 53, 0.12)',
        cta: '0 6px 20px rgba(0, 194, 255, 0.35)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        hebrew: ['var(--font-heebo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
