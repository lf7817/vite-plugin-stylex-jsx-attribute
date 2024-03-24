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
const STYLEX_IMPORT_NAME = '@stylexjs/stylex'
const STYLEX_IMPORT_NAMESPACE = 'stylexImportNamespaceSpecifier'

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

function isCustomComponent(componentName: string) {
  return /^[A-Z]/.test(componentName)
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
      if (source.value === STYLEX_IMPORT_NAME) {
        if (specifiers.length === 1 && t.isImportNamespaceSpecifier(specifiers[0]))
          stylexImportName = specifiers[0].local.name

        else throw new Error(`[${PLUGIN_NAME}]:` + 'stylex import should be namespace import. such as: import * as stylex from \'@stylexjs/stylex\'')

        path.skip()
      }
    },
    JSXOpeningElement(path) {
      if (t.isJSXIdentifier(path.node.name) && !isCustomComponent(path.node.name.name)) {
        path.traverse({
          JSXAttribute(p) {
            if (isStylexAttribute(p.node)) {
              if (!stylexImportName) {
                stylexImportName = STYLEX_IMPORT_NAMESPACE
                const stylexImport = t.importDeclaration(
                  [t.importNamespaceSpecifier(t.identifier(stylexImportName))],
                  t.stringLiteral(STYLEX_IMPORT_NAME),
                )

                ast.program.body.unshift(stylexImport)
              }

              p.replaceWith(convertStylexToSpreadAttribute(p.node, stylexImportName))
              p.stop()
            }
          },
        })
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
