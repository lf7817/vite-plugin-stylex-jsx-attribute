import type { StyleXStyles, Theme, VarGroup } from '@stylexjs/stylex'
import { HTMLAttributes } from 'react'

// @ts-expect-error
type StyleXTheme = Theme<VarGroup<unknown, symbol>, symbol>

type StylexStyle = StyleXStyles<Readonly<{ [key: string]: unknown }>>

export type StylexAttribute = StyleXTheme | StylexStyle | undefined

export interface StyleXCommonProps<T extends HTMLElement> extends HTMLAttributes<T> {
  stylex?: StylexAttribute | StylexAttribute[]
}
