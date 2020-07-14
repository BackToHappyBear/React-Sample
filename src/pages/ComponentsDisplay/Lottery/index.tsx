import React, { useState, useRef } from 'react'
import './style.scss'

import usePrevious from 'hooks/usePrevious'

const colors = ['hotpink', 'yellowgreen', 'skyblue']

export default function Lottery() {
  const [isRotating, setIsRotating] = useState(false)
  const [pieRotate, setPieRotate] = useState(0)

  const previousRotate = usePrevious<number>(pieRotate) || 0

  function startRotate() {
    if (isRotating) return
    setIsRotating(true)
    let rotateDeg = 30 + (Math.floor(Math.random() * 3) + 4) * 360 + previousRotate
    setPieRotate(rotateDeg)
  }

  const [left, setLeft] = useState(0)
  const divEl = useRef<HTMLDivElement | null>(null)
  const target = 1000

  function animate() {
    console.log('animate start')
    function step() {
      if (target - left > 10) {
        setLeft(left + 10)
        window.requestAnimationFrame(step)
      } else {
        setLeft(target)
      }
    }

    window.requestAnimationFrame(step)
  }

  return (
    <>
      <div className="center">
        {/* <div className="bigCircle center">
        <div className="smallCircle center line">circle</div>
        <div id="fan"></div>
      </div> */}
        <div
          className="smallCircle center line"
          style={{ position: 'absolute', left: '50%', zIndex: 10, transform: 'translate(-50%)' }}
          onClick={startRotate}
        >
          抽一抽
        </div>
        <ul
          className="pie"
          style={{
            transform: `rotate(${pieRotate}deg)`,
            // transition: 'transform 2s cubic-bezier(0.42, 0, 0.58, 1.0)',
            transition: 'transform 3s ease-out',
          }}
          onTransitionEnd={() => setIsRotating(false)}
        >
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                className="slice"
                style={{
                  backgroundColor: `${colors[+index % 3]}`,
                  transform: `rotate(${15 - index * 30}deg) skewY(-60deg)`,
                }}
              ></li>
            ))}
        </ul>
      </div>
      <div
        ref={divEl}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'hotpink',
          position: 'absolute',
          left: `${left}px`,
        }}
        onClick={animate}
      ></div>
    </>
  )
}
