const configs = require('../..')
require('chai').should()

describe('base', () => {
  it('[success] package is exported', ()=> {
    configs.should.not.be.undefined
    configs.browser.should.not.be.undefined
    configs.node.should.not.be.undefined
    configs.react.should.not.be.undefined
  })
})
