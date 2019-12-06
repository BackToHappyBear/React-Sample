import React from 'react'
import Old from './Old'
import New from './New'
// import Hooks from './Hooks'
import { Divider } from 'antd'

export default function HookDemo() {
  return (
    <>
      <h2>Hello, hooks!</h2>
      <Divider>Old</Divider>
      <Old />
      <Divider>New</Divider>
      <New />
    </>
  )
}
