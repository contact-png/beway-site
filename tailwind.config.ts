
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B4FF',
        secondary: '#0047AB',
        night: '#0A142F',
        grey: '#8A93A2',
        white: '#FFFFFF'
      },
      maxWidth: {
        container: '1280px'
      }
    }
  },
  plugins: []
}
export default config
