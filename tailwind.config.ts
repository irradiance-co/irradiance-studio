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
        grey: {
          '500': '#687785',
        },
        carbon: {
          50: '#F6F8FA',
          100: '#DFE9E9',
          200: '#C8D2D2',
          300: '#AEB8B8',
          400: '#959F9F',
          500: '#6D7777',
          600: '#586464',
          700: '#3C4646',
          800: '#2D3737',
          900: '#0D1111',
          950: '#000203',
        },
        radiance: {
          '50': '#fdf4f3',
          '100': '#fde6e3',
          '200': '#fbd2cd',
          '300': '#f7b2aa',
          '400': '#f18478',
          '500': '#e65c4d',
          '600': '#d33f2f',
          '700': '#b03224',
          '800': '#922d22',
          '900': '#7a2b22',
          '950': '#42120d',
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      animation: {
        'blur-animation': 'blurAnimation 0.3s ease-in-out forwards',
      },

      keyframes: {
        blurAnimation: {
          from: {
            backdropFilter: 'blur(0)',
          },
          to: {
            backdropFilter: 'blur(8px)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
