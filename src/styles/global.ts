import { globalCss } from '@stitches/react'
import { theme } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: theme.fonts.sans,
  },
  ':focus': {
    outline: 0,
    boxShadow: `0 0 0 2px ${theme.colors['green-500']}`,
  },
  body: {
    backgroundColor: theme.colors['gray-800'],
    color: theme.colors['gray-100'],
    fontSmooth: 'always',
  },
})
