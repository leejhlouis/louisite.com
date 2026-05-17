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
        default: {
          dark: colors.slate['700'],
          light: colors.slate['400']
        },
        emphasis: {
          dark: colors.slate['900'],
          light: colors.white
        },
        primary: {
          light: colors.violet['400'],
          lighter: colors.violet['300'],
          dark: colors.indigo['600'],
          'lighter-dark': colors.indigo['500']
        }
      },
      spacing: {
        18: '4.5rem'
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
