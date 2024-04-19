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
    },
  },
  plugins: [],
};
export default config;
