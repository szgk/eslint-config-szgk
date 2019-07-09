module.exports = {
  env: {
    node: true
  },
  extends: [
    './configs/react',
  ].map(require.resolve),
}