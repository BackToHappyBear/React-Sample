import React, { PureComponent } from 'react'

export default class LifeCycle extends PureComponent {
  public state = {
    name: 'lee',
  }

  public componentDidMount() {
    this.setState({
      name: 'hanmeimei',
    })
    console.log('did mount')
  }

  public getSnapshotBeforeUpdate(prevProps, prevState) {
    // 在上述示例中，重点是从 getSnapshotBeforeUpdate 读取 scrollHeight 属性，
    // 因为 “render” 阶段生命周期（如 render）和 “commit” 阶段生命周期（如 getSnapshotBeforeUpdate 和 componentDidUpdate）之间可能存在延迟。
    // 在 render 之前调用，即 此render之前调用的结果给下一次 render 后的 didUpdate 使用
    return null
  }

  public componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('TCL: Component -> componentDidUpdate -> prevProps', prevProps)
    console.log('TCL: Component -> componentDidUpdate -> prevState', prevState)
    console.log('TCL: LifeCycle -> componentDidUpdate -> snapshot', snapshot)
  }

  public render() {
    console.log('render--------')
    return <div>name: {this.state.name}</div>
  }
}
