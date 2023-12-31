import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //     "base": '#ffffff',
    //     "primary": '#e2e8f0',
    // },
    fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Helvetica', 'Arial', 'sans-serif']
    },
    container: {
        padding: '1rem',
    },

    extend: {
        fontSize: {
            '9xl': "clamp(2.1875rem, 0.0689rem + 10.5932vw, 10rem)",
            '8xl': "clamp(2.1875rem, 1.0858rem + 5.5085vw, 6.25rem)",
            '7xl': "clamp(1.875rem, 0.9428rem + 4.661vw, 5.3125rem)",
            '6xl': "clamp(1.75rem, 1.0381rem + 3.5593vw, 4.375rem)",
            '5xl': "clamp(1.5625rem, 1.054rem + 2.5424vw, 3.4375rem)",
            '4xl': "clamp(2.1875rem, 0.2344rem + 6.25vw, 3.75rem)",
            '3xl': "clamp(1.5rem, 1.1441rem + 1.7797vw, 2.8125rem)",
            '2xl': "clamp(1.5rem, 0.25rem + 4vw, 2.3rem)",
        },
    },
  },
  plugins: [],
}
export default config
