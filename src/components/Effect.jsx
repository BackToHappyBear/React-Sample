/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useLayoutEffect } from 'react'

const Effect = () => {
  const [value, setValue] = useState(0)

  // paint 后执行，不阻碍浏览器渲染
  useEffect(() => {
    if (value === 0) {
      console.log(1)
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  // paint 前执行
  useLayoutEffect(() => {
    if (value === 0) {
      console.log(2)
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  return (
    <div style={{ border: 'solid', display: 'inline' }} onClick={() => setValue(0)}>
      value: {value}
    </div>
  )
}

export default Effect
