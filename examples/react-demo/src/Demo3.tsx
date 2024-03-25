import { Button, StylexProvider, Text, View } from 'react-stylex-wrapper'
import { useState } from 'react'
import { styles } from './styles'
import { dracula, dracula2 } from './theme'
import './demo3.css'

export default function Demo3() {
  const [theme, setTheme] = useState(dracula2)

  return (
    <StylexProvider theme={theme}>
      <View stylex={styles.wrapper} className="demo3-border" style={{ borderRadius: 20 }}>
        <Text stylex={[styles.text('orange'), styles.size]}>Demo3</Text>
        <Button onClick={() => setTheme(theme === dracula2 ? dracula : dracula2)}>切换主题</Button>
      </View>
    </StylexProvider>
  )
}
