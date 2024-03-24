import * as Stylex from '@stylexjs/stylex'
import { useContext } from 'react'
import { StyleXCommonProps } from '../types'
import { stylexContext } from './context'

export function stylexWrapperHoc<T>(com: string) {
  return function Dom({ stylex, ...rest }: StyleXCommonProps<T extends HTMLElement ? T : never>) {
    const Com = com
    const theme = useContext(stylexContext)

    return <Com {...Stylex.props(theme, stylex)} {...rest} />
  }
}
