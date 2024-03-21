import antfu from '@antfu/eslint-config'
// import stylex from '@stylexjs/eslint-plugin'

export default await antfu({
  gitignore: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
  },
  typescript: true,
  jsonc: false,
  yaml: false,
  react: true,
  plugins: {
    // '@stylexjs': stylex,
  },
  rules: {
    // '@stylexjs/valid-styles': 'error',
    // '@stylexjs/sort-keys': 'warn',
    'react/no-unknown-property': 'off',
    'no-console': 'off',
    'ts/ban-ts-comment': 'off',
    'ts/consistent-type-imports': 'off',
    '@ts-expect-error': 'off',
    'no-inline-styles': 'off',
  },
})
