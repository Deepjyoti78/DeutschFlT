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
        bg: {
          main: '#FBF8F5',
          warm: '#F6F5EC',
          cream: '#F4F3E9',
        },
        forest: {
          DEFAULT: '#174D2A',
          dark: '#123E27',
          heading: '#183B2A',
          light: '#235D38',
        },
        olive: {
          DEFAULT: '#91AC32',
          dark: '#7B9628',
          light: '#A3BE3E',
        },
        lime: {
          DEFAULT: '#B9D348',
          soft: '#E3EDB8',
          pale: '#F1F7DA',
        },
        body: '#626765',
        muted: '#888C87',
        border: {
          subtle: '#E8E6DD',
          strong: '#D3CFBF',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      borderRadius: {
        card: '20px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(24, 59, 42, 0.05)',
        hover: '0 12px 32px -4px rgba(24, 59, 42, 0.08)',
        subtle: '0 2px 8px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
