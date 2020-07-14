import React, { PureComponent } from 'react'
import { Carousel, CountScroll } from 'components'
import Lottery from './Lottery'

export default class ComponentDisplay extends PureComponent {
  render() {
    return (
      <>
        <Lottery />
        <div style={{ height: 800 }} />
        <Carousel />
        <div style={{ height: 800 }} />
        <CountScroll count={4999} />
        <div style={{ height: 800 }} />
      </>
    )
  }
}
