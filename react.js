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
  },
  env: {
    browser: true,
  },
}
