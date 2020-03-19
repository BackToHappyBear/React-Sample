import React, { useState } from 'react'

const TabItem = props => {
  const { active, onClick } = props
  const tabStyle = {
    maxWidth: 150,
    marginRight: 50,
    color: active ? 'red' : 'green',
  }
  return (
    <span style={tabStyle} onClick={onClick}>
      {props.children}
    </span>
  )
}

const Tabs = props => {
  const [activeIndex, setActiveIndex] = useState(0)

  const newChildren = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      active: activeIndex === index,
      onClick: () => setActiveIndex(index),
    })
  })

  return <>{newChildren}</>
}

Tabs.TabItem = TabItem

export default Tabs
