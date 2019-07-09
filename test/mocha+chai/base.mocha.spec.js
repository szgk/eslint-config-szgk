const {lintWithBaseConfig} = require('../fixture/lint')
require('chai').should()

describe('base', () => {
  it('[success] lint no error file', ()=> {
    (() => {
      lintWithBaseConfig('./test/mock/no-error/base.js')
    }).should.not.Throw()
  })
  it('[success] lint error file', ()=> {
    (() => {
      lintWithBaseConfig('./test/mock/error/base.js')
    }).should.Throw()
  })
})