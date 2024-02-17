import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
        'xs': '440px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1650px',
    },
    container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '1rem',
  
        // default breakpoints but with 40px removed
        // screens: {
        //   '5xl': '1750px',
        // },
      },
    extend: {

        fontSize: {
            '10xl': "clamp(3.25rem, 0.5631rem + 10.4854vw, 10rem)",
            '9xl': "clamp(2.8125rem, 0.3495rem + 9.6117vw, 9rem)",
            // '8xl': "clamp(2.1875rem, 1.0858rem + 5.5085vw, 6.25rem)",
            '7xl': "clamp(2.8125rem, 1.4827rem + 4.2553vw, 5.3125rem)",
            // '6xl': "clamp(1.75rem, 1.0381rem + 3.5593vw, 4.375rem)",
            // '5xl': "clamp(1.5625rem, 1.054rem + 2.5424vw, 3.4375rem)",
            // '4xl': "clamp(2.1875rem, 0.2344rem + 6.25vw, 3.75rem)",
            // '3xl': "clamp(1.5rem, 1.1441rem + 1.7797vw, 2.8125rem)",
            '2xl': "clamp(1.25rem, 1.1071rem + 0.7143vw, 1.75rem)",
        },

        colors: {
            'primary': '#1F1F1F',
            'highlight': '#2e2b2b',
            'lightgray': '#bfbfbf',
        }
    },
  },
  plugins: [],
}
export default config
