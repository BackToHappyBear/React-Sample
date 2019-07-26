import React, { PureComponent } from 'react'

export default class ComponentDisplay extends PureComponent {
  static defaultProps = {
    delta: 50,
  }

  state = {
    // 移动距离
    distance: 0,
    // 响应卡片 id
    activeId: 0,
    transitionDuration: '0.5s',
    // touch 相关
    startX: 0,
  }

  componentDidMount() {
    // 只要是 activeId 就让其 tranlateY = 0
    // activeId 展示，z-index 为 -activeId，translateX 为 0
    // 设置 activeId+1 的 z-index 为 -activeId - 1，translateX 为 0，translateY 为 10px
    // 其余项 z-index 不设置，translateX 为-100%，translateX 为 0
  }

  touchStart = e => {
    this.setState({
      startX: e.touches[0].clientX,
    })
  }

  touchMove = e => {
    const { startX } = this.state
    const endX = e.changedTouches[0].clientX
    this.setState({
      distance: endX - startX,
      transitionDuration: 0,
    })
  }

  touchEnd = e => {
    const { delta } = this.props
    const { distance, activeId } = this.state
    // 回归原位
    if (Math.abs(distance) <= delta) {
      this.setState({
        distance: 0,
        transitionDuration: '0.5s',
      })
    } else {
      const prefix = distance > 0 ? '' : '-'
      this.setState({
        distance: `${prefix}100%`,
        transitionDuration: '0.5s',
      })
      // 设置下一个 activeId
      setTimeout(() => {
        this.setState({
          activeId: activeId + 1,
          distance: 0,
        })
      }, 500)
    }
  }

  render() {
    const { distance, activeId, transitionDuration } = this.state

    const defaultSwiperStyle = {
      position: 'relative',
      width: '30%',
      margin: '0 auto',
      backgroundColor: '#ccc',
      zIndex: 1,
    }

    // 常规卡片样式
    const itemStyle = {
      position: 'absolute',
      width: '100%',
      height: 200,
      transform: 'translate(100%)',
      transitionDuration: 0,
      WebkitTransform: 'translate(100%)',
      WebkitTransitonDuration: 0,
      zIndex: -100000,
    }

    const translate = typeof distance === 'number' ? distance + 'px' : distance
    // 当前卡片样式
    const animateStyle = {
      transform: `translate(${translate}, 0px)`,
      transitionDuration,
      WebkitTransform: `translate(${translate}, 0px)`,
      WebkitTransitonDuration: transitionDuration,
    }

    // 当前卡片下一张样式
    const animateNextStyle = {
      transform: `translate(0, 12px) scale(0.95)`,
      transitionDuration: 0,
      WebkitTransform: `translate(0, 12px) scale(0.95)`,
      WebkitTransitonDuration: 0,
    }
    // TODO: 新增的 transitionDuration 不生效？
    return (
      <div className="swiper" style={defaultSwiperStyle}>
        {['skyblue', 'hotpink', 'yellowgreen'].map((item, index, array) => {
          let style = { ...itemStyle }
          if (activeId % array.length === index) {
            style = { ...itemStyle, ...animateStyle, zIndex: -activeId }
          }
          if ((activeId + 1) % array.length === index) {
            style = { ...itemStyle, ...animateNextStyle, zIndex: -activeId - 1 }
          }
          return (
            <div
              key={index}
              className="swiper-item"
              style={{ ...style, background: item }}
              onTouchStart={this.touchStart}
              onTouchMove={this.touchMove}
              onTouchEnd={this.touchEnd}
            >
              index is {index}
            </div>
          )
        })}
      </div>
    )
  }
}
