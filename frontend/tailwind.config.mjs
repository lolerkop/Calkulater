/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Swiss-style монохром + красный акцент
        accent: {
          DEFAULT: '#E63946',
          50: '#FFF1F2',
          100: '#FFE0E3',
          500: '#E63946',
          600: '#CC2E3A',
          700: '#A82731',
        },
        ink: {
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2A2A2A',
          500: '#5A5A5A',
          400: '#8A8A8A',
          300: '#BDBDBD',
          200: '#E4E4E4',
          100: '#F2F2F2',
          50: '#F7F7F7',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '1200px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
