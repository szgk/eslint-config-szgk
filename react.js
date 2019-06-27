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
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
