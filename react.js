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
  },
  env: {
    browser: true,
  },
}
