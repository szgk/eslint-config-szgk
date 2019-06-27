module.exports = {
  env: {
    node: true
  },
  extends: [
    './browser',
  ].map(require.resolve),
}