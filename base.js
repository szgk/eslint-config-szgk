module.exports = {
  parserOptions: {
    ecmaVersion: 10, // es2019
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': ['error', {allow: ['info', 'warn', 'error']}],
    'no-undefined': 'error',
    'no-param-reassign': ['error', {props: true}],
    'spaced-comment': ['error', 'always'],
    'object-curly-spacing': ['error', 'never'],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'valid-typeof': ['error', {requireStringLiterals: true}],
  },
};
