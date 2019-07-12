import React from 'react'
import LifeCycle from './LifeCycle'
// import SearchResult from '../FetchData/useReducer'
import ToggleHOC from './ToggleHOC'

const component = () => {
  return (
    <>
      <div>component</div>
      {/* <SearchResult /> */}
      <LifeCycle />
    </>
  )
}

export default ToggleHOC(component)
