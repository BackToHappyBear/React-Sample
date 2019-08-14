import React, { PureComponent } from 'react'
import './style.scss'
import { debounce2 } from '../../utils/debounce'

export class Carousel extends PureComponent {
  static defaultProps = {
    delta: 50,
  }

  state = {
    // 移动距离
    distance: 0,
    // 响应卡片 id
    activeId: 0,
    zIndex: 0,
    transitionDuration: 0.5,
    // touch 相关
    startX: 0,
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
    const { distance, activeId, zIndex } = this.state
    // 回归原位
    if (Math.abs(distance) <= delta) {
      this.setState({
        distance: 0,
        transitionDuration: 0.5,
      })
    } else {
      const prefix = distance > 0 ? '' : '-'
      this.setState({
        distance: `${prefix}100%`,
        transitionDuration: 0.5,
      })
      // 设置下一个 activeId
      const length = 3
      const nextActiveId = activeId === length - 1 ? 0 : activeId + 1
      setTimeout(() => {
        this.setState({
          activeId: nextActiveId,
          distance: 0,
          zIndex: zIndex - 1,
        })
      }, 500)
    }
  }

  resizeFunc = e => {
    // 闭包封装的debounce2 此处需要绑定好 this
    console.log(this.state)
    console.log('event type: ', e.type)
  }

  componentDidMount() {
    /* NOTE: anonymous func did not work, (() => {}).tId always be undfined
     * 此封装比较难传递参数，
     */
    // window.onresize = e => {
    // debounce(this.resizeFunc, 500, this, e, 123)
    // }

    window.addEventListener('resize', debounce2(this.resizeFunc, 1000))
  }

  render() {
    const { distance, activeId, zIndex, transitionDuration } = this.state

    // 常规卡片样式
    const itemStyle = {
      position: 'absolute',
      width: '100%',
      height: 200,
      zIndex: zIndex - 1,
      opacity: 0,
      transform: `translate(0%) scale(1)`,
      transitionDuration: '0s',
      transitionDelay: '0.5s',
    }

    const translate = typeof distance === 'number' ? distance + 'px' : distance
    // 当前卡片样式
    // TODO: transition: transform 2s, opacity 1s
    const animateStyle = {
      opacity: 1,
      transform: `translate(${translate}, 0px) scale(1)`,
      transitionDuration: `${transitionDuration}s`,
      transitionDelay: '0s',
    }

    // 当前卡片下一张样式
    const animateNextStyle = {
      opacity: 1,
      transform: `translate(0, 12px) scale(0.95)`,
      transitionDuration: '0.5s',
      transitionDelay: '0s',
    }

    return (
      <div className="swiper">
        {['hotpink', 'yellowgreen', 'skyblue'].map((item, index, array) => {
          let style = { ...itemStyle }
          if (activeId === index) {
            style = { ...itemStyle, ...animateStyle, zIndex: zIndex + 2 }
          }
          const animateNextId = activeId === array.length - 1 ? 0 : activeId + 1
          if (animateNextId === index) {
            style = { ...itemStyle, ...animateNextStyle, zIndex: zIndex + 1 }
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
