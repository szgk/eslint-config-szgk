module.exports = {
  extends: [
    './base',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
};
