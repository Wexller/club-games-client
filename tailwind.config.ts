import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    screens: {
      desktop: '1440px',
      laptop: '1240px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '40px',
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'rgba(54, 48, 62, 1)я',
      white: 'rgba(255, 255, 255, 1)',
      purple: 'rgba(130, 122, 233, 1)',
      purpleHover: 'rgba(162, 156, 238, 1)',
      purpleActive: 'rgba(100, 89, 248, 1)',
      purpleLight: 'rgba(242, 241, 255, 1)',
      gray: 'rgba(102, 112, 133, 1)',
      gray2: 'rgba(196, 201, 216, 1)',
      table: {
        headRowBg: 'rgba(242, 241, 255, 0.5)',
        headerDivider: 'rgba(102, 112, 133, 0.15)',
        bodyRowBg: 'rgba(255, 255, 255, 0.40)',
      },
    },
    fontSize: {
      body1: ['16px', '150%'],
      body2: ['14px', '140%'],
      body3: ['12px', '140%'],
    },
    borderRadius: {
      // DEFAULT: '0',
      none: '0',
      sm: '10px',
      md: '16px',
      lg: '20px',
      full: '9999px',
    },
  },
  plugins: [],
  content: [],
}
