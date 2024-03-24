import { createContext } from 'react'
import { StylexAttribute } from '../types'

export const stylexContext = createContext<StylexAttribute | StylexAttribute[] | undefined>(undefined)
