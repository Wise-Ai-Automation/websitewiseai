/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Primary brand scale — deep cobalt blue. Trust, CTAs, links, section accents.
        brand: {
          50: '#EFF4FF',
          100: '#DCE7FF',
          200: '#BAD1FF',
          300: '#8AB2FF',
          400: '#5389FF',
          500: '#2E66FA',
          600: '#1E4AE0',
          700: '#1638B3',
          800: '#142E8C',
          900: '#142A6E',
          950: '#0C1740',
        },
        // Signal accent — the brand teal, reserved for "live / voice / real-time" moments only.
        signal: {
          50: '#E8FBFB',
          100: '#D1F7F7',
          200: '#A3EFEF',
          300: '#6FE3E3',
          400: '#35D2D2',
          500: '#00C5C8',
          600: '#00A3A5',
          700: '#037F81',
          800: '#0B6668',
          900: '#11494A',
          950: '#082B2C',
        },
        // Ink — the single dark-section palette (replaces the old mix of near-black hexes).
        ink: {
          800: '#1B2436',
          900: '#121826',
          950: '#090D16',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '"Inter"', '-apple-system', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.035em',
        tight: '-0.02em',
        snug: '-0.01em',
        normal: '0em',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.08em',
      },
      lineHeight: {
        'display': '1.05',
        'heading': '1.15',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.65',
        'loose': '1.8',
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-sm': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
