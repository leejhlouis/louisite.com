import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'

export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--elevated) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        signal: 'rgb(var(--signal) / <alpha-value>)',
        default: {
          dark: colors.slate['700'],
          light: colors.slate['400']
        },
        emphasis: {
          dark: colors.black,
          light: colors.white
        },
        primary: {
          light: colors.violet['400'],
          lighter: colors.violet['300'],
          dark: colors.violet['600'],
          'lighter-dark': colors.violet['500']
        }
      },
      spacing: {
        18: '4.5rem'
      },
      fontFamily: {
        sans: ['var(--font-geist)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        editorial: '0 18px 60px rgb(20 12 38 / 0.08)',
        'editorial-dark': '0 24px 80px rgb(0 0 0 / 0.28)'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '3rem'
      }
    },
    screens: {
      ...defaultTheme.screens,
      xs: '480px'
    }
  },
  plugins: [typography]
} satisfies Config
