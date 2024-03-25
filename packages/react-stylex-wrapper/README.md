# react-stylex-wrapper

本库封装了常用的dom标签，在原有的基础上增加了 stylex属性，用来替换``stylex.props``的参数（多个参数就用数组）

## features

- 提供了**StylexProvider**, 方便切换主题以及通用样式
- 提供了**View, Text, Image, Button, Input, Form, Label, Select, TextArea**等常用组件
- 提供了**stylexWrapperHoc**高阶组件，用来拓展更多dom标签（欢迎PR）
- 支持 **stylex**，**className**, **style**混写，优先级为**className** < **stylex** <  < **style**

## usage

```tsx
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
```

支持的组件如下：

| 组件     | dom      |
| -------- | -------- |
| View     | div      |
| Text     | span     |
| Image    | img      |
| Button   | button   |
| Input    | input    |
| Form     | form     |
| Label    | label    |
| Select   | select   |
| TextArea | textarea |
