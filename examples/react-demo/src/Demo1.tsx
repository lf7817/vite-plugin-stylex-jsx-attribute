import { styles } from './styles'

export default function Demo1() {
  return (
    <div stylex={styles.wrapper}>
      <div stylex={[styles.text('white'), styles.size, undefined]}>Demo1</div>
    </div>
  )
}
