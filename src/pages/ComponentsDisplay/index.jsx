import React, { PureComponent } from 'react'
import { Carousel, CountScroll } from '../../components'

export default class ComponentDisplay extends PureComponent {
  render() {
    return (
      <>
        <Carousel />
        <div style={{ height: 800 }} />
        <CountScroll count={4999} />
        <div style={{ height: 800 }} />
      </>
    )
  }
}
