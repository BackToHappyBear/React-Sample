import Axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

function Child({ fetchData }) {
  const [data, setData] = useState({ hits: [] })

  useEffect(() => {
    fetchData().then((result: any) => setData(result.data))
  }, [fetchData])

  return (
    <>
      {data && (
        <ul>
          {data.hits.map((item: any) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default function FunctionDataFlow() {
  const [query, setQuery] = useState('react')
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')

  const fetchData = useCallback(() => {
    try {
      return Axios(url)
    } catch (error) {
      return {}
    }
  }, [url])

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault()
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        }}
      >
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
        <button>search</button>
      </form>
      <Child fetchData={fetchData} />
    </>
  )
}
