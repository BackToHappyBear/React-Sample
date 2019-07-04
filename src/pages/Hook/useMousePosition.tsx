import { useState, useEffect } from 'react'

import { IMousePositon } from '../RenderProps'

export function useMousePosition() {
  const [mousePosition, setMousePositon] = useState<IMousePositon>({ x: 0, y: 0 })

  function handleMouseMove(event: { clientX: number; clientY: number }) {
    setMousePositon({
      x: event.clientX,
      y: event.clientY,
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}
