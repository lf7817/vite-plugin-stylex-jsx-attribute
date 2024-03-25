import * as stylex from '@stylexjs/stylex' // 只能通过这种方式引入，否则报错

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 600,
    height: 200,
    margin: '10px auto',
    backgroundColor: 'skyblue',
  },
  text: (color: string) => ({
    color,
  }),
  size: {
    fontSize: 28,
  },
  yellow: {
    color: 'yellow',
  },
})

export default function Demo2() {
  return (
    <div stylex={styles.wrapper}>
      <img />
      <div stylex={[styles.text('white'), styles.size, undefined]}>Demo2</div>
      <div {...stylex.props(styles.yellow)}>hello</div>
    </div>
  )
}
