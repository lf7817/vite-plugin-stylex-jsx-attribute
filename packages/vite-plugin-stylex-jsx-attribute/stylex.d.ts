declare namespace React {

  type StyleXTheme = import('@stylexjs/stylex').Theme<import('@stylexjs/stylex').VarGroup<unknown, symbol>, symbol>

  type StylexStyle = import('@stylexjs/stylex').StyleXStyles<Readonly<{ [key: string]: unknown }>>

  type StylexAttribute = StyleXTheme | StylexStyle | undefined

  interface DOMAttributes<T> {
    stylex?: StylexAttribute | StylexAttribute[]
  }
}
