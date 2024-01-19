import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        fontSize: {
            '10xl': "clamp(4.6875rem, 2.859rem + 5.8511vw, 8.125rem)",
            '9xl': "clamp(2.8125rem, 1.4827rem + 4.2553vw, 5.3125rem)",
            // '8xl': "clamp(2.1875rem, 1.0858rem + 5.5085vw, 6.25rem)",
            '7xl': "clamp(2.8125rem, 1.4827rem + 4.2553vw, 5.3125rem)",
            // '6xl': "clamp(1.75rem, 1.0381rem + 3.5593vw, 4.375rem)",
            // '5xl': "clamp(1.5625rem, 1.054rem + 2.5424vw, 3.4375rem)",
            // '4xl': "clamp(2.1875rem, 0.2344rem + 6.25vw, 3.75rem)",
            // '3xl': "clamp(1.5rem, 1.1441rem + 1.7797vw, 2.8125rem)",
            '2xl': "clamp(1.25rem, 1.1071rem + 0.7143vw, 1.75rem)",
        },

        colors: {
            'highlight': '#2e2b2b',
        }
    },
  },
  plugins: [],
}
export default config
