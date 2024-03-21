import parser from '@babel/parser'
import { traverse } from '@babel/core'
import generate from '@babel/generator'
import * as t from '@babel/types'
import { Plugin } from 'vite'

interface StylexAttribute extends t.JSXAttribute {
  name: t.JSXIdentifier
  value: t.JSXExpressionContainer
}

const PLUGIN_NAME = 'vite-plugin-stylex-jsx-attribute'

function isStylexAttribute(attr: t.JSXAttribute): attr is StylexAttribute {
  return (
    attr.type === 'JSXAttribute'
    && t.isJSXIdentifier(attr.name)
    && attr.name.name === 'stylex'
    && t.isJSXExpressionContainer(attr.value)
  )
}

function convertStylexToSpreadAttribute(attribute: StylexAttribute, stylexImportName: string): t.JSXSpreadAttribute {
  const callExpression = t.callExpression(
    t.memberExpression(t.identifier(stylexImportName), t.identifier('props')),
    // @ts-expect-error
    [attribute.value.expression],
  )

  return t.jsxSpreadAttribute(callExpression)
}

function transformStylexAttribute(code: string) {
  const ast = parser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  }) as any

  let stylexImportName: string | undefined

  traverse(ast, {
    ImportDeclaration(path) {
      const { source, specifiers } = path.node
      if (source.value === '@stylexjs/stylex') {
        if (specifiers.length === 1 && t.isImportNamespaceSpecifier(specifiers[0]))
          stylexImportName = specifiers[0].local.name

        else throw new Error(`[${PLUGIN_NAME}]:` + 'stylex import should be namespace import. such as: import * as stylex from \'@stylexjs/stylex\'')

        path.skip()
      }
    },
    JSXAttribute(path) {
      if (isStylexAttribute(path.node)) {
        if (!stylexImportName) {
          stylexImportName = 'stylexImportNamespaceSpecifier'
          const stylexImport = t.importDeclaration(
            [t.importNamespaceSpecifier(t.identifier(stylexImportName))],
            t.stringLiteral('@stylexjs/stylex'),
          )

          ast.program.body.unshift(stylexImport)
        }

        path.replaceWith(convertStylexToSpreadAttribute(path.node, stylexImportName))
      }
    },
  })

  const transformedCode = generate.default(ast, {}).code

  return {
    code: transformedCode,
    map: null,
  }
}

export default function jsxStylexAttribute(): Plugin {
  const fileRegex = /\.(jsx|tsx)$/

  return {
    name: PLUGIN_NAME,
    enforce: 'pre',
    transform(src: string, id: string) {
      if (fileRegex.test(id)) {
        return {
          code: transformStylexAttribute(src).code,
          map: null,
        }
      }
    },
  }
}
