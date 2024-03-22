import { styles } from './styles'
import { dracula } from './theme'

export default function Demo1() {
  return (
    <div stylex={[dracula, styles.wrapper]}>
      <div stylex={[styles.text('white'), styles.size]}>Demo1</div>
    </div>
  )
}
