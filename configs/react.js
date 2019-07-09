module.exports = {
  extends: [
    './base.js',
  ].map(require.resolve),
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/boolean-prop-naming': ['error', {rule: '^is[A-Z]([A-Za-z0-9]?)+'}],
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-access-state-in-setstate': ['error', 'always'],
    // 'react/no-array-index-key': ['error'],
    'react/no-children-prop': ['error'],
    'react/no-danger': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-typos': ['error'],
    'react/no-unescaped-entities': ['error'],
    'react/no-unknown-property': ['error'],
    'react/no-unsafe': ['error'],
    'react/no-unused-prop-types': ['error'],
  },
  env: {
    browser: true,
  },
}
