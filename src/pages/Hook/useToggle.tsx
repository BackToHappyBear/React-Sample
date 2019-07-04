import { useState } from 'react'

export function useToggle(initial: boolean) {
  const [visible, setVisible] = useState(initial)

  const toggleVisible = () => setVisible(!visible)

  return {
    visible,
    toggleVisible,
  }
}
