import * as stylex from '@stylexjs/stylex'
import { tokens } from './token.stylex'

export const styles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 600,
    height: 200,
    margin: '0 auto',
    backgroundColor: tokens.primaryText,
  },
  text: (color: string) => ({
    color,
  }),
  size: {
    fontSize: 28,
  },
})
