import React, { PureComponent } from 'react'
// import { Carousel } from './Carousel'
// import { CountScroll } from './CountScroll'
import { SlidingWindowScrollHook } from './SlidingWindowScrollHook'
import { MY_ENDLESS_LIST } from './SlidingWindowScrollHook/constant'

export default class ComponentDisplay extends PureComponent {
  render() {
    return (
      <>
        {/* <Carousel /> */}
        {/* <div style={{ height: 800 }} /> */}
        {/* <CountScroll count={4999} /> */}
        {/* <div style={{ height: 800 }} /> */}
        <SlidingWindowScrollHook list={MY_ENDLESS_LIST} height={195} />
      </>
    )
  }
}
