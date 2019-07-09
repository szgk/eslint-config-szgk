const {lintWithBaseConfig} = require('../fixture/lint')
require('chai').should()

describe('base', () => {
  it('[success] base: lint no error file', ()=> {
    (() => {
      lintWithBaseConfig('./test/mock/base-valid-code.js')
    }).should.not.Throw()
  })
})
