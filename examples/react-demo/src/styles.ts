import * as stylex from '@stylexjs/stylex'

export const styles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 600,
    height: 200,
    margin: '0 auto',
    backgroundColor: 'yellowgreen',
  },
  text: (color: string) => ({
    color,
  }),
  size: {
    fontSize: 28,
  },
})
