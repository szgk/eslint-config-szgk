const {lintWithReactConfig} = require('../fixture/lint')
require('chai').should()

describe('react', () => {
  it('[success] react: lint no error file', ()=> {
    (() => {
      lintWithReactConfig('./test/mock/react-valid-code.jsx')
    }).should.not.Throw()
  })
})
