import React from 'react'
import { Button, Modal } from 'antd'
import { useMousePosition } from './useMousePosition'
import { useToggle } from './useToggle'
import Sample from './sample'

export interface IMousePositon {
  x: number
  y: number
}

const Hook = () => {
  const { x, y } = useMousePosition()
  const { visible, toggleVisible } = useToggle(false)

  return (
    <div className="App">
      <h1>Hook useMousePosition</h1>
      <h2>Move the mouse around!</h2>
      <p style={{ background: 'palegreen' }}>
        The current mouse position is ({x}, {y})
      </p>
      <Sample />
      <Button type="primary" onClick={toggleVisible} style={{ marginLeft: 10 }}>
        Toggle Modal
      </Button>
      <Modal title="hook modal" visible={visible} onOk={toggleVisible} onCancel={toggleVisible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default Hook
