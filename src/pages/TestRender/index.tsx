// import React, { memo, useState, useRef, useCallback } from 'react'

// const Button = memo(({ handleClick }) => {
//   const countRef = useRef(0)
//   const inputRef = useRef(null)
//   const onButtonClick = () => {
//     // `current` 指向已挂载到 DOM 上的文本输入元素
//     inputRef.current.focus()
//   }
//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={onButtonClick}>focus input</button>
//       <button onClick={handleClick}>{`button render count ${countRef}`}</button>
//     </>
//   )
// })

// function TestRender() {
//   const [isOn, setIsOn] = useState(false)
//   const handleClick = useCallback(() => setIsOn(prevIsOn => !prevIsOn), [])
//   return (
//     <>
//       <h2>{isOn ? 'on' : 'off'}</h2>
//       <Button handleClick={handleClick} />
//     </>
//   )
// }

// // useCallback<() => void>(callback: () => void, deps: readonly any[]): () => void

import React from 'react'

const Name = () => <div>hello</div>

export default Name
