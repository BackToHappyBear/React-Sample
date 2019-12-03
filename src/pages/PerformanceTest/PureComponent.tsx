import React, { memo } from 'react'

type Props = {
  data: number[]
}

function ChildComponent(props: Props) {
  console.log('fc render only first time')
  return <div>{props.data}</div>
}

export default memo(ChildComponent)
