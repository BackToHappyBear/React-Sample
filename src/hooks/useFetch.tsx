import { useState, useEffect } from 'react'

export default function useFetch(url: string, initialData: any) {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const result = await fetch(url)
        const ret = await result.json()
        setData(ret)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(true)
    }
    fetchData()
  }, [url])

  return [data, isLoading, isError]
}
