module.exports = {
  parserOptions: {
    ecmaVersion: 10, // es2019
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn', {allow: ['info', 'warn', 'error']}],
    'no-param-reassign': ['error', {props: true}],
    'spaced-comment': ['error', 'always'],
    'object-curly-spacing': ['error', 'never'],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    quotes: ['error', 'single'],
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],
  },
}
