import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1500px'
      }
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        xmd: '880px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1500px',
        '3xl': '1901px'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          850: 'var(--primary-850)',
          900: 'var(--primary-900)',
          950: 'var(--primary-950)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)'
        },
        tertiary: {
          DEFAULT: 'var(--tertiary)',
          50: 'var(--tertiary-50)',
          100: 'var(--tertiary-100)',
          200: 'var(--tertiary-200)',
          300: 'var(--tertiary-300)',
          400: 'var(--tertiary-400)',
          500: 'var(--tertiary-500)',
          600: 'var(--tertiary-600)',
          700: 'var(--tertiary-700)',
          800: 'var(--tertiary-800)'
        },
        active: {
          DEFAULT: 'var(--active)',
          30: 'var(--active-30)',
          50: 'var(--active-50)',
          100: 'var(--active-100)',
          150: 'var(--active-150)',
          200: 'var(--active-200)',
          300: 'var(--active-300)',
          400: 'var(--active-400)',
          450: 'var(--active-450)',
          500: 'var(--active-500)',
          600: 'var(--active-600)',
          700: 'var(--active-700)',
          800: 'var(--active-800)',
          900: 'var(--active-900)',
          950: 'var(--active-950)'
        },
        inactive: {
          DEFAULT: 'var(--inactive)',
          50: 'var(--inactive-50)',
          100: 'var(--inactive-100)',
          150: 'var(--inactive-150)',
          200: 'var(--inactive-200)',
          250: 'var(--inactive-250)',
          300: 'var(--inactive-300)',
          400: 'var(--inactive-400)',
          500: 'var(--inactive-500)',
          550: 'var(--inactive-550)',
          600: 'var(--inactive-600)',
          700: 'var(--inactive-700)',
          800: 'var(--inactive-800)',
          900: 'var(--inactive-900)',
          950: 'var(--inactive-950)'
        },
        destructive: {
          DEFAULT: 'var(--destructive)'
        },
        muted: {
          DEFAULT: 'var(--muted)'
        },
        accent: {
          DEFAULT: 'var(--accent)'
        },
        popover: {
          DEFAULT: 'var(--popover)'
        },
        card: {
          DEFAULT: 'var(--card)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      const titleUtilities = {
        '.title-sm': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          fontWeight: '600'
        },
        '.title-md': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: '700'
        },
        '.title-lg': {
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
          fontWeight: '700'
        },
        '.title-xl': {
          fontSize: '2.5rem',
          lineHeight: '3.75rem',
          fontWeight: '700'
        }
      }

      addUtilities(titleUtilities)
    })
  ]
}