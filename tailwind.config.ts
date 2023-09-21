import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-background': "url(/background.svg)"
      },
      colors: {
        primary: '#10958e',
        grayPrimary: '#1c1c1c',
        grayLighter: '#333030',
        white: '#fefefc',
      },
    },
  },
  plugins: [],
}
export default config
