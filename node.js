module.exports = {
  extends: [
    './base',
  ].map(require.resolve),
  env: {
    node: true,
  },
}
