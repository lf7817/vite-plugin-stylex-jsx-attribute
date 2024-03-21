# vite-plugin-stylex-jsx-attribute

> Some recent utility-based styling solutions are extremely terse and easy to write. StyleX chooses to prioritize readability and maintainability over terseness.

stylex 优先考虑的是可读性和可维护性而不是简洁性，所以写起来有点繁琐

```jsx
function Demo() {
  return (
    <div {...stylex.props(styles.base1)}>
      <div {...stylex.props(styles.base2)}>
        <div {...stylex.props(styles.base3)} />
      </div>
      <div {...stylex.props(styles.base4)} />
    </div>
  )
}

```

像这样组件代码越来越长后看着就很难受了

本插件在 dom 标签上增加了一个 ``stylex``属性，来代替 ``{...stylex.props(styles.base3)``这种繁琐的写法，具体用法如下:

```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { stylexPlugin } from 'vite-plugin-stylex-dev'
import jsxStylex from 'vite-plugin-stylex-jsx-attribute'

export const defineConfig({
  plugins: [jsxStylex(), react(), stylexPlugin()],
})
```

```jsx
import { styles } from './styles'

export default function Test() {
  return (
    <div stylex={[styles.color('#ff0'), styles.hello]}>
      <span stylex={styles.text} />
    </div>
  )
}

```

如果想把样式写在组件内部可以手动引入 stylex

```jsx
import * as stylex from '@stylexjs/stylex'; // 只能通过这种方式引入，其他方式报错

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'grey',
  },
  highlighted: {
    color: 'rebeccapurple',
  },
});

export default function Test() {
  return (
    <div stylex={[styles.base]}>
      <span stylex={styles.highlighted} />
    </div>
  )
}

```

修改tsconfig.json，解决编辑器不认 stylex属性问题

```diff
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
    }
  },
- "include": ["src"],
+ "include": ["src", "./node_modules/vite-plugin-stylex-jsx-attribute/stylex.d.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

或者在vite-env.d.ts中添加

```ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-stylex-jsx-attribute/stylex.d.ts" />
```
