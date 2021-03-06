module.exports = {
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-uses-react': [1],
    'react/boolean-prop-naming': [0],
    'react/destructuring-assignment': [0],
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
