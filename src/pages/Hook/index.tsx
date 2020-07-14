import { Button, Divider, Modal } from 'antd'
import React from 'react'
import OldState from './oldState'
import Sample from './sample'
import { useMousePosition } from './useMousePosition'
import { useToggle } from './useToggle'

import { useInterval } from 'react-use-collection'

export type MousePositon = {
  x: number
  y: number
}

const Hook = () => {
  const { x, y } = useMousePosition()
  const { visible, toggleVisible } = useToggle(false)
  const [delay, setDelay] = React.useState<number | null>(1000)

  useInterval(
    () => {
      console.log('useInterval!')
    },
    delay ? delay : null,
  )

  return (
    <div className="App">
      <button
        onClick={() => setDelay(d => (d === null ? 1000 : null))}
      >{`delay is ${delay} `}</button>
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

      <Divider />

      <OldState />
    </div>
  )
}

export default Hook
