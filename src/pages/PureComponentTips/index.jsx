import React, { PureComponent, useState } from 'react'
import Tabs from '../../components/Tabs'
import Effect from '../../components/Effect'

const { TabItem } = Tabs
class ComponentA extends PureComponent {
  state = {
    number: 100,
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
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
  return <div>ComponentB - {value}</div>
}

const Layout = ({ children }) => {
  // Layout 也会重新执行！！！
  return <>{children}</>
}

// 调用 setState(value + 1), componentA render 的原因是因为 props.children 变了 ?
// 即使使用 PureComponent 也无法优化
// () => setState(value) componentA 不会重新 render
// 类比 context，采用 bailout 机制
const PureComponentTips = () => {
  const [value, setState] = useState(1)
  return (
    <Layout>
      <ComponentA>
        <ComponentB value={value} />
      </ComponentA>
      <button onClick={() => setState(value + 1)}>改变 value</button>
      <br />
      <br />
      <Tabs>
        <TabItem>One</TabItem>
        <TabItem>Two</TabItem>
        <TabItem>Three</TabItem>
      </Tabs>
      <br />
      <br />
      <Effect />
    </Layout>
  )
}

export default PureComponentTips
