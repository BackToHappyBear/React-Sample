import React, { PureComponent } from 'react'
import { Divider } from 'antd'
// import { Carousel } from './Carousel'
// import { CountScroll } from './CountScroll'
import { SlidingWindowScrollHook } from './SlidingWindowScrollHook'
import { MY_ENDLESS_LIST } from './SlidingWindowScrollHook/constant'
import { JSXAdvantage } from 'components/JSXAdvantage'

export default class ComponentDisplay extends PureComponent {
  render() {
    return (
      <>
        {/* <Carousel /> */}
        {/* <div style={{ height: 800 }} /> */}
        {/* <CountScroll count={4999} /> */}
        {/* <div style={{ height: 800 }} /> */}
        <Divider orientation="left">awesome! 动态tag</Divider>
        <JSXAdvantage />
        <Divider orientation="left">无线滚动</Divider>
        <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={195} />
      </>
    )
  }
}
