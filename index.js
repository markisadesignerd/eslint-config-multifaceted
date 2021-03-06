module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    },
    requireConfigFile: false,
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  root: true,
  parser: 'babel-eslint',
  plugins: ['import'],
  extends: ['eslint:recommended'],
  rules: {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'constructor-super': 'error',
    'curly': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-relative-parent-imports': 'error',
    'import/order': ['error', {
      'alphabetize': { 'order': 'asc' },
    }],
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-wrap-multilines': ['error'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'new-parens': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-shadow': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 1, multiline: true },
        ObjectPattern: { minProperties: 3, multiline: true },
      },
    ],
    'object-curly-spacing': ['error', 'always', { arraysInObjects: false }],
    'object-property-newline': 'error',
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'padded-blocks': ['error', 'never'],
    'prefer-const': 'error',
    'quotes': ['error', 'single'],

    'rest-spread-spacing': 'error',
    'semi-spacing': 'error',
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { int32Hint: true }],
    'space-unary-ops': 'error',
    'strict': ['error', 'global'],
  },
};
