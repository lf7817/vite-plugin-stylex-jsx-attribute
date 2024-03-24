import { stylexWrapperHoc } from './stylexHoc'

export { StylexProvider } from './StylexProvider'

export const View = stylexWrapperHoc<HTMLDivElement>('div')
export const Text = stylexWrapperHoc<HTMLSpanElement>('span')
export const Image = stylexWrapperHoc<HTMLImageElement>('img')
export const Button = stylexWrapperHoc<HTMLButtonElement>('button')
export const Input = stylexWrapperHoc<HTMLInputElement>('input')
export const Form = stylexWrapperHoc<HTMLFormElement>('form')
export const Label = stylexWrapperHoc<HTMLLabelElement>('label')
export const Select = stylexWrapperHoc<HTMLSelectElement>('select')
export const TextArea = stylexWrapperHoc<HTMLTextAreaElement>('textarea')

// eslint-disable-next-line react-refresh/only-export-components
export { stylexWrapperHoc }
