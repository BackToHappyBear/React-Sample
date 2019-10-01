import { Divider } from 'antd'
import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'

/**
 * ①class component 与 ②function component 的区别
 * ①每次重渲染都会重置 this 的指向
 * ②每次执行都会读取闭包环境中的变量值
 */
export default function Closure() {
  return (
    <>
      <ClassComponent />
      <Divider />
      <FunctionComponent />
    </>
  )
}
