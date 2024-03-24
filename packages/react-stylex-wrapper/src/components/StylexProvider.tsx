import { PropsWithChildren } from 'react'
import { StylexAttribute } from '../types'
import { stylexContext } from './context'

interface StylexProviderProps {
  theme?: StylexAttribute | StylexAttribute[]
}

export function StylexProvider(props: PropsWithChildren<StylexProviderProps>) {
  return <stylexContext.Provider value={props.theme}>{props.children}</stylexContext.Provider>
}
