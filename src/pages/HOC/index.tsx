import React from 'react'
import SearchResult from '../FetchData/useReducer'
import ToggleHOC from './ToggleHOC'

const component = () => {
  return (
    <>
      <div>component</div>
      <SearchResult />
    </>
  )
}

export default ToggleHOC(component)
