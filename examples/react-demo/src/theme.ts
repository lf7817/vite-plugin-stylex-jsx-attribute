import * as stylex from '@stylexjs/stylex'
import { tokens } from './token.stylex'

// Dracula theme
export const dracula = stylex.createTheme(tokens, {
  primaryText: 'blue',
})