import { Divider } from 'antd'
import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'

export default function Closure() {
  return (
    <>
      <ClassComponent />
      <Divider />
      <FunctionComponent />
    </>
  )
}
