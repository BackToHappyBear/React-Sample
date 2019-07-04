import React from 'react'
import { useMousePosition } from './useMousePosition'
import Sample from './sample'

export interface IMousePositon {
  x: number
  y: number
}

const Hook = () => {
  const { x, y } = useMousePosition()
  return (
    <div className="App">
      <h1>Hook useMousePosition</h1>
      <h2>Move the mouse around!</h2>
      <p style={{ background: 'palegreen' }}>
        The current mouse position is ({x}, {y})
      </p>
      <Sample />
    </div>
  )
}

export default Hook
