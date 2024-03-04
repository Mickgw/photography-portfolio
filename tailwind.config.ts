import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
        'xs': '520px',
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
            // All have min viewport width 500px and max viewport width 1500px
            '10xl': "clamp(3.25rem, 0.5631rem + 10.4854vw, 10rem)", // min: 70px, max: 144px
            '9xl': "clamp(4.0625rem, 2.0313rem + 6.5vw, 8.125rem)", // min: 55px, max: 130px
            // '8xl': "",
            '7xl': "clamp(2.8125rem, 1.4827rem + 4.2553vw, 5.3125rem)",
            // '6xl': "",
            '5xl': "clamp(1.375rem, 0.5rem + 2.8vw, 3.125rem)", // min: 22px, max: 50px
            // '4xl': "",
            // '3xl': "",
            '2xl': "clamp(1.25rem, 0.9773rem + 1.0909vw, 2rem)",
        },

        colors: {
            'primary': '#1F1F1F',
            'highlight': '#2e2b2b',
            'lightgray': '#f2f2f2',
            'bordercolor': '#e6e6e6',
        }
    },
  },
  plugins: [],
}
export default config
