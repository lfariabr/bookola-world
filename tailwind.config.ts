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
        cream: '#FAF7F2',
        parchment: '#F0EAD6',
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        burgundy: '#6B2737',
        'deep-navy': '#1A2744',
        warm: '#8B6914',
      },
    },
  },
  plugins: [],
}
export default config
