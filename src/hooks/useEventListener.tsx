import { useRef, useEffect } from 'react'

export default function useEventListener(
  eventName: string,
  handler: (e: any) => void,
  element = window,
): void {
  const saveHandler = useRef<(e: any) => void | null>()

  useEffect(() => {
    if (saveHandler?.current) {
      saveHandler.current = handler
    }
  }, [handler])

  useEffect(() => {
    const isSupport = element && element.addEventListener
    if (!isSupport) return

    const eventListener = (e: any) => {
      if (saveHandler && saveHandler.current) {
        return saveHandler.current(e)
      }
    }

    element.addEventListener(eventName, eventListener)
    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  })
}

export const useEventListener02 = (
  target: HTMLElement | Window,
  type: string,
  listener: (e: any) => void,
  ...options: any
) => {
  useEffect(() => {
    target.addEventListener(type, listener, ...options)
    return () => {
      target.removeEventListener(type, listener, ...options)
    }
  }, [listener, options, target, type])
}

useEventListener02(window, 'resize', function() {})
