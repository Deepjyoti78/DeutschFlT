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
          main: '#F9F5F2',
          warm: '#F5EFE9',
          cream: '#EFE7E0',
          sand: '#F7F2EB',
        },
        // Maroon / Reddish primary palette matching reference
        maroon: {
          DEFAULT: '#9B3326',
          dark: '#82291E',
          deep: '#6F2117',
          light: '#B24032',
          surface: '#FAF0EC',
          soft: '#F6E4DF',
          border: '#EED5CF',
        },
        // Terracotta / Warm rust accent palette
        terracotta: {
          DEFAULT: '#A84335',
          dark: '#8F3327',
          light: '#C45647',
          muted: '#B3685C',
          tint: '#F9ECE8',
        },
        // Rose / Blush highlight palette
        roseAccent: {
          DEFAULT: '#D46353',
          soft: '#F8ECE9',
          pale: '#FCF5F3',
          border: '#ECD4CE',
        },
        // Backward-compatibility aliases mapped to maroon & terracotta
        forest: {
          DEFAULT: '#9B3326',
          dark: '#82291E',
          heading: '#211A19',
          light: '#B24032',
        },
        olive: {
          DEFAULT: '#A84335',
          dark: '#8F3327',
          light: '#C45647',
        },
        lime: {
          DEFAULT: '#D46353',
          soft: '#F6E4DF',
          pale: '#FCF5F3',
        },
        body: '#5D5451',
        muted: '#8D827E',
        border: {
          subtle: '#E8DFD8',
          strong: '#D4C6BC',
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
        soft: '0 4px 20px -2px rgba(155, 51, 38, 0.05)',
        hover: '0 12px 32px -4px rgba(155, 51, 38, 0.12)',
        subtle: '0 2px 8px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
