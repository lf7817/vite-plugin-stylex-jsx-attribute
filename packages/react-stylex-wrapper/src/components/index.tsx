import { ButtonHTMLAttributes, FormHTMLAttributes, HTMLAttributes, ImgHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { stylexWrapperHoc } from './stylexHoc'

export { StylexProvider } from './StylexProvider'

export const View = stylexWrapperHoc<HTMLAttributes<HTMLDivElement>>('div')
export const Text = stylexWrapperHoc<HTMLAttributes<HTMLSpanElement>>('span')
export const Image = stylexWrapperHoc<ImgHTMLAttributes<HTMLImageElement>>('img')
export const Button = stylexWrapperHoc<ButtonHTMLAttributes<HTMLButtonElement>>('button')
export const Input = stylexWrapperHoc<InputHTMLAttributes<HTMLInputElement>>('input')
export const Form = stylexWrapperHoc<FormHTMLAttributes<HTMLFormElement>>('form')
export const Label = stylexWrapperHoc<LabelHTMLAttributes<HTMLLabelElement>>('label')
export const Select = stylexWrapperHoc<SelectHTMLAttributes<HTMLSelectElement>>('select')
export const TextArea = stylexWrapperHoc<TextareaHTMLAttributes<HTMLTextAreaElement>>('textarea')

// eslint-disable-next-line react-refresh/only-export-components
export { stylexWrapperHoc }
