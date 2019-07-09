const execSync = require('child_process').execSync

/**
 * return eslint command
 * @param {string} config eslint config path
 * @param {string} file lint target file
 */
function returnEslintCommand(config, file) {
  return `npx eslint -c ${config} --no-ignore ${file}`
}

function lintWithBaseConfig(file) {
  execSync(
    returnEslintCommand('./configs/base.js', file)
  )
}

function lintWithReactConfig(file) {
  execSync(
    returnEslintCommand('./configs/react.js', file)
  )
}

module.exports = {
  lintWithBaseConfig,
  lintWithReactConfig,
}