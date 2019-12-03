import { Button, Modal } from 'antd'
import React from 'react'
import MousePosition from './renderProps'
import Toggle from './toggle'

export type MousePositon = {
  x: number
  y: number
}

const RenderProps = () => {
  function handleOk(e: any, onToggle: () => void): void {
    console.log('ok', e.target)
    onToggle()
  }

  return (
    <div className="App">
      <h1>Render Props</h1>
      <h2>Move the mouse around!</h2>
      <MousePosition
        render={(mousePosition: MousePositon) => (
          <p style={{ background: 'skyblue' }}>
            The current mouse position is ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
      <Toggle>
        {({ visible, onToggle }) => (
          <>
            <Button type="primary" onClick={onToggle}>
              Open Modal
            </Button>
            <Modal
              title="Basic Modal"
              visible={visible}
              onOk={(e: any) => handleOk(e, onToggle)}
              onCancel={onToggle}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </>
        )}
      </Toggle>
    </div>
  )
}

export default RenderProps
