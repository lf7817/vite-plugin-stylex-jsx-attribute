import * as Stylex from '@stylexjs/stylex'
import { HTMLAttributes, useContext } from 'react'
import { StyleXCommonProps } from '../types'
import { stylexContext } from './context'

export function stylexWrapperHoc<T>(com: string) {
  return function Dom({ stylex, className = '', style, ...rest }: StyleXCommonProps<T extends HTMLAttributes<HTMLElement> ? T : never>) {
    const Com = com as any
    const theme = useContext(stylexContext)

    const { className: xClassName, style: xStyle } = Stylex.props(theme, stylex)
    const cls = xClassName ? `${className} ${xClassName}` : className

    return <Com className={cls} style={{ ...xStyle, ...style }} {...rest} />
  }
}
