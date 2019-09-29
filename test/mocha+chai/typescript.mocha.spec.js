const {lintWithTypescriptConfig} = require('../fixture/lint')
require('chai').should()

describe('typesctript', () => {
  it('[success] typesctript: lint no error file', ()=> {
    (() => {
      lintWithTypescriptConfig('./test/mock/typescript-valid-code.ts')
    }).should.not.Throw()
  })
})
