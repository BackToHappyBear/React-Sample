import React, { useState, useEffect } from 'react'

export default function() {
  const [firstname, handleFirstnameChange] = useFormValue('')
  const [lastname, handleLastnameChange] = useFormValue('')

  useTitle(firstname + ' ' + lastname)

  const windowWidth = useWindowWidth()

  return (
    <>
      Firstname:
      <input type="text" value={firstname} onChange={handleFirstnameChange} />
      Lastname:
      <input type="text" value={lastname} onChange={handleLastnameChange} />
      <div>window width is {windowWidth}</div>
    </>
  )
}

function useFormValue(initialValue: string) {
  const [value, setValue] = useState(initialValue)

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, handleValueChange] as const
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

function useTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}
