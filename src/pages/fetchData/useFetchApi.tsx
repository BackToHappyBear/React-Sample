import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetchApi() {
  const [data, setData] = useState({ hits: [] })
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const doFetch = (query: string) => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)

  useEffect(() => {
    // eslint-disable-next-line
    let didCancle = false

    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await axios(url)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()

    return () => {
      didCancle = true
    }
  }, [url])

  return {
    data,
    isLoading,
    isError,
    doFetch,
  }
}
