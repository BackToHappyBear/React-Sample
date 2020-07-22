import React, { useState, useEffect, useRef } from 'react'
import './style.scss'

const THRESHOLD = 15

const SlidingWindowScrollHook = props => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(THRESHOLD)
  const $bottomElement = useRef()
  const $topElement = useRef()

  useEffect(() => {
    const listLength = props.list.length
    const maxStartIndex = listLength - 1 - THRESHOLD // Maximum index value `start` can take
    const maxEndIndex = listLength - 1 // Maximum index value `end` can take

    const callback = entries => {
      entries.forEach(entry => {
        // Scroll Down
        if (entry.isIntersecting && entry.target.id === 'bottom') {
          const newEnd = end + 10 <= maxEndIndex ? end + 10 : maxEndIndex
          const newStart = end - 5 <= maxStartIndex ? end - 5 : maxStartIndex
          setStart(newStart)
          setEnd(newEnd)
        }
        // Scroll Up
        if (entry.isIntersecting && entry.target.id === 'top') {
          const newEnd =
            end === THRESHOLD ? THRESHOLD : end - 10 > THRESHOLD ? end - 10 : THRESHOLD
          const newStart = start === 0 ? 0 : start - 10 > 0 ? start - 10 : 0
          setStart(newStart)
          setEnd(newEnd)
        }
      })
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const Observer = new IntersectionObserver(callback, options)

    const topElementCurrent = $topElement.current
    const bottomElementCurrent = $bottomElement.current

    if (topElementCurrent) {
      Observer.observe(topElementCurrent)
    }
    if (bottomElementCurrent) {
      Observer.observe(bottomElementCurrent)
    }

    return () => {
      if (Observer) {
        Observer.unobserve(topElementCurrent)
        Observer.unobserve(bottomElementCurrent)
      }
    }
  }, [start, end, props.list.length])

  const getReference = (index, isLastIndex) => {
    if (index === 0) return $topElement
    if (isLastIndex) return $bottomElement
    return null
  }

  const { list, height } = props
  const updatedList = list.slice(start, end)
  const lastIndex = updatedList.length - 1

  // const [listNumber, setListNumber] = useState(10)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setListNumber(20)
  //   }, 2000)
  // }, [])

  return (
    <div>
      {/* css 实现瀑布流左侧排列完再排列右侧，无法控制左右位置， */}
      {/* <div
        style={{
          margin: '0 auto',
          width: 1200,
          columnCount: 2,
          columnWidth: 240,
          columnGap: 20,
        }}
      >
        {Array(listNumber)
          .fill(true)
          .map((v, i) => (
            <
              key={i}
              style={{ background: '#ccc', marginBottom: 10, breakInside: 'avoid' }}
            >
              {i
      </div> */}
      <ul style={{ position: 'relative' }}>
        {updatedList.map((item, index) => {
          const top = height * (index + start) + 'px'
          const refVal = getReference(index, index === lastIndex)
          const id = index === 0 ? 'top' : index === lastIndex ? 'bottom' : ''
          return (
            <li key={item.key} id={id} className="listCard" style={{ top }} ref={refVal}>
              {item.value + 1}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { SlidingWindowScrollHook }
