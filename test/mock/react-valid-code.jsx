import React from 'react'
import propTypes from 'prop-types'

class Hoge extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fuga: 'hoge',
      // neverUse: 'hoge',
    }
  }
  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default class Test extends React.Component {
  constructor(props){
    super(props)
  }

  testSetState() {
    // this.setState({
    //   ...this.state,
    // })
    this.setState((prevState) => ({
      ...prevState,
    }))
  }

  // UNSAFE_componentWillMount() {}
  // UNSAFE_componentWillReceiveProps() {}
  // UNSAFE_componentWillUpdate() {}

  render() {
    const {hoge, isFlag} = this.props
    if(isFlag){}
    // this.state = 'hoge'
    function testArray() {
      const arr = [1,2,3,4]
      return arr.map((el, index) => <div key={`${index}-hoge`}>{el}</div>)
    }

    // var Hello = <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>

    return (
      <div>
        {/* <Hoge children="hoge"/> */}
        <Hoge>
          hoge
        </Hoge>
        {/* <div>></div> */}
        {/* <div>}</div> */}
        <div>{'>'}</div>
        <div>{'}'}</div>
        <div>{hoge}</div>
        {/* <div class="aa">a</div> */}
        <div className="aa">a</div>
        <div>{testArray()}</div>
        {/* <div>{this.props.hoge}</div> */}
        <button type="submit">click1</button>
        <button type="reset">click2</button>
        <button type="button">click3</button>
        <button type="foo">click3</button>
      </div>
    )
  }
}

Test.propTypes = {
  isFlag: propTypes.bool,
  // neverUse: propTypes.string,
}