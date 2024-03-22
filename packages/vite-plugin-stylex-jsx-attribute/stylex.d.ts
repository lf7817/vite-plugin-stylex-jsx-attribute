declare namespace React {
  interface DOMAttributes<T> {
    stylex?: import('@stylexjs/stylex').StyleXStyles<Record<string, number | string | undefined>>
  }
}
