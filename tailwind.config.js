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
