import React from 'react'
import LifeCycle from './LifeCycle'
import ToggleHOC from './ToggleHOC'

const component = () => {
  return (
    <>
      <div>component</div>
      <LifeCycle />
    </>
  )
}

export default ToggleHOC(component)
