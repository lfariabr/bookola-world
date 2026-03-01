import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        cream: '#FDF8F2',
        parchment: '#F4ECD8',
        gold: '#D4894A',
        'gold-light': '#E8B07A',
        burgundy: '#A85B46',
        'deep-navy': '#2C1A0E',
        warm: '#8B5A2B',
      },
    },
  },
  plugins: [],
}
export default config
