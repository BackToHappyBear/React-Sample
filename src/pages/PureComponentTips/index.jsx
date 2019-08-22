import React, { PureComponent, useState } from 'react'

class ComponentA extends PureComponent {
  state = {
    number: 100,
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      'nextProps.children === this.props.children ?',
      nextProps.children === this.props.children,
    )
  }

  handleMinusNumber = () => {
    this.setState(({ number }) => ({
      number: number - 1,
    }))
  }

  // 对于传入 children 或 props 是 JSX 的情况，React bailout 默认优化
  // 在 Component A 中 setState 并不会使 this.props.children 重新 render
  render() {
    console.log('component A render')
    return (
      <div>
        <span>ComponentA</span>
        <button onClick={this.handleMinusNumber}>-</button>
        {this.props.children}
      </div>
    )
  }
}

const ComponentB = ({ value }) => {
  console.log('component B render')
  return <div>ComponentB - {value}</div>
}

const Layout = ({ children }) => {
  // Layout 也会重新执行！！！
  console.log('Layout render')
  return <>{children}</>
}

// 调用 setState(value + 1), componentA render 的原因是因为 props.children 变了 ?
// 即使使用 PureComponent 也无法优化
// () => setState(value) componentA 不会重新 render
const PureComponentTips = () => {
  const [value, setState] = useState(1)
  return (
    <Layout>
      <ComponentA>
        <ComponentB value={value} />
      </ComponentA>
      <button onClick={() => setState(value + 1)}>改变 value</button>
    </Layout>
  )
}

export default PureComponentTips
