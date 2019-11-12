import debounce from 'lodash-es/debounce'
import React, { createRef, PureComponent } from 'react'

interface IProps {
  count: number
}

interface IState {
  countNumber: number
}

export default class CountScroll extends PureComponent<IProps, IState> {
  state = {
    countNumber: Math.floor(this.props.count / 2),
  }

  tId: any
  isCountScrolling = false
  containerRef = createRef<HTMLDivElement>()

  handleScroll = debounce(
    () => {
      const dom = this.containerRef.current
      if (!dom) {
        return
      }

      const topDistance = dom.getBoundingClientRect().top
      const clientHeight = window.innerHeight
      // 在可视区
      const isVisiable = topDistance > 0 && topDistance < clientHeight
      if (isVisiable) {
        // 开启定时器
        if (!this.isCountScrolling) {
          console.log('into view')
          this.isCountScrolling = true
          this.tId = setInterval(() => {
            // 接近目标值
            if (this.props.count - this.state.countNumber < 10) {
              this.setState({ countNumber: this.props.count })
              clearInterval(this.tId)
            } else {
              this.setState(({ countNumber }) => ({
                countNumber: countNumber + 3,
              }))
            }
          }, 1000 / 60)
        }
      } else {
        console.log('out view')
        this.isCountScrolling = false
        // 关闭定时器 将数值重置
        clearInterval(this.tId)
        this.setState({
          countNumber: Math.floor(this.props.count / 2),
        })
      }
    },
    300,
    { maxWait: 800 },
  )

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true)
  }

  render() {
    const { countNumber } = this.state
    return <div ref={this.containerRef}>123</div>
  }
}
