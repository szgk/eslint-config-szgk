module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    './configs/base',
    './configs/react',
  ].map(require.resolve),
}