/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Calcuway violet-blue product palette
        accent: {
          DEFAULT: '#6758F3',
          50: '#F3F1FF',
          100: '#E8E4FF',
          500: '#6758F3',
          600: '#5848DF',
          700: '#4738BD',
        },
        ink: {
          900: '#17152F',
          800: '#25223F',
          700: '#393650',
          600: '#55516B',
          500: '#716D84',
          400: '#9995A8',
          300: '#C4C0D0',
          200: '#E5E2ED',
          100: '#F0EEF6',
          50: '#F8F7FC',
        },
        sky: '#4EA5FF',
        lavender: '#F0EDFF',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      maxWidth: {
        page: '1200px',
      },
      letterSpacing: {
        tight: '0',
        tighter: '0',
        tightest: '0',
        wide: '0',
        wider: '0',
        widest: '0',
      },
    },
  },
  plugins: [],
};
