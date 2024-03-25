import React from 'react'
import { stylexWrapperHoc } from './stylexHoc'

export { StylexProvider } from './StylexProvider'

export const View = stylexWrapperHoc<React.HTMLAttributes<HTMLDivElement>>('div')
export const Text = stylexWrapperHoc<React.HTMLAttributes<HTMLSpanElement>>('span')
export const Image = stylexWrapperHoc<React.ImgHTMLAttributes<HTMLImageElement>>('img')
export const Button = stylexWrapperHoc<React.ButtonHTMLAttributes<HTMLButtonElement>>('button')
export const Input = stylexWrapperHoc<React.InputHTMLAttributes<HTMLInputElement>>('input')
export const Form = stylexWrapperHoc<React.FormHTMLAttributes<HTMLFormElement>>('form')
export const Label = stylexWrapperHoc<React.LabelHTMLAttributes<HTMLLabelElement>>('label')
export const Select = stylexWrapperHoc<React.SelectHTMLAttributes<HTMLSelectElement>>('select')
export const TextArea = stylexWrapperHoc<React.TextareaHTMLAttributes<HTMLTextAreaElement>>('textarea')
export const Anchor = stylexWrapperHoc<React.AnchorHTMLAttributes<HTMLAnchorElement>>('a')
export const Paragraph = stylexWrapperHoc<React.HTMLAttributes<HTMLParagraphElement>>('p')
export const UlList = stylexWrapperHoc<React.HTMLAttributes<HTMLUListElement>>('ul')
export const Li = stylexWrapperHoc<React.LiHTMLAttributes<HTMLLIElement>>('li')
export const OlList = stylexWrapperHoc<React.OlHTMLAttributes<HTMLHeadingElement>>('ol')
export const H1 = stylexWrapperHoc<React.HTMLAttributes<HTMLHeadingElement>>('h1')
export const H2 = stylexWrapperHoc<React.HTMLAttributes<HTMLHeadingElement>>('h2')
export const H3 = stylexWrapperHoc<React.HTMLAttributes<HTMLHeadingElement>>('h3')
export const H4 = stylexWrapperHoc<React.HTMLAttributes<HTMLHeadingElement>>('h4')
export const H5 = stylexWrapperHoc<React.HTMLAttributes<HTMLHeadingElement>>('h5')
export const H6 = stylexWrapperHoc<React.HTMLAttributes<HTMLHeadingElement>>('h6')

// eslint-disable-next-line react-refresh/only-export-components
export { stylexWrapperHoc }
