import React, { memo } from 'react'

interface IProps {
  data: number[]
}

function ChildComponent(props: IProps) {
  console.log('fc render only first time')
  return <div>{props.data}</div>
}

export default memo(ChildComponent)
