import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'about-us': "url('/img/Ikat Weave 1 (1).png')",
      },
      colors: {
        primary: '#00246B',
        primary2: '#D9D9D9',
        secondary: '#1C8214',
        secondary2: '#00669E',
        secondary3: '#AF7500',
        secondary4: '#932C14',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
