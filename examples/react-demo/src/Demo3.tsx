import { StylexProvider, Text, View } from 'react-stylex-wrapper'
import { styles } from './styles'
import { theme2 } from './theme'

export default function Demo3() {
  return (
    <StylexProvider theme={theme2}>
      <View stylex={styles.wrapper}>
        <Text stylex={[styles.text('orange'), styles.size]}>Demo3</Text>
      </View>
    </StylexProvider>

  )
}
