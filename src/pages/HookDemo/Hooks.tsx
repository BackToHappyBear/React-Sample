import React, { useState, useEffect } from 'react'

export default function Hooks() {
  // const [firstname, setFirstname] = useState('')
  // const [lastname, setLastname] = useState('')

  // function handleFirstnameChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setFirstname(e.target.value)
  // }

  // function handleLastnameChange(e: any) {
  //   setLastname(e.target.value)
  // }

  // useEffect(() => {
  //   document.title = firstname + ' ' + lastname
  // }, [firstname, lastname])

  const [firstname, setFirstname] = useFormValue('')
  const [lastname, setLastname] = useFormValue('')

  // useEffect(() => {
  //   document.title = firstname + ' ' + lastname
  // }, [firstname, lastname])
  useDocumentTitle(firstname + ' ' + lastname)

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth)
  //   }
  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  const windowWidth = useWindowWidth()

  return (
    <>
      Firstname:
      <input type="text" value={firstname} onChange={setFirstname} />
      Lastname:
      <input type="text" value={lastname} onChange={setLastname} />
      <div>window width is {windowWidth}</div>
    </>
  )
}

function useFormValue(initialValue: string) {
  const [data, setData] = useState(initialValue)
  function handleChange(e: any) {
    setData(e.target.value)
  }
  return [data, handleChange] as const
}

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
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
