import { Divider } from 'antd'
import React, { useState } from 'react'
import usePrevious from 'hooks/usePrevious'
import FunctionDataFlow from './FunctionDataFlow'
import Table from './Table'
import './style.scss'
import useFetchApi from './useFetchApi'

export default function SearchResult() {
  const [query, setQuery] = useState('react')
  const { data, isLoading, isError, doFetch } = useFetchApi()
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)
  return (
    <>
      <div>
        <Table />
      </div>
      <h2 className="title">hooks fetching data!</h2>
      <form
        onSubmit={event => {
          event.preventDefault()
          doFetch(query)
        }}
      >
        <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <ul>
          {data.hits.map((item: any) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}

      <Divider />

      <h2>Function as part of the data flow</h2>
      <FunctionDataFlow />

      <Divider />

      <h2>useRef</h2>
      <p>
        Now: {count}
        <br />
        Before: {prevCount}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

// export default function SearchResult() {
//   const [data, setData] = useState({ hits: [] })
//   const [query, setQuery] = useState('react')
//   const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')
//   const [isLoading, setIsLoading] = useState(false)
//   const [isError, setIsError] = useState(false)

//   useEffect(() => {
//     async function fetchData() {
//       setIsError(false)
//       setIsLoading(true)
//       try {
//         const result = await axios(url)
//         setData(result.data)
//       } catch (error) {
//         setIsError(true)
//       }
//       setIsLoading(false)
//     }

//     fetchData()
//   }, [url])

//   return (
//     <>
//       <form
//         onSubmit={event => {
//           event.preventDefault()
//           setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
//         }}
//       >
//         <input
//           value={query}
//           onChange={e => setQuery(e.target.value)}
//           style={{ margin: '10px 10px 10px 20px' }}
//         />
//         <button>search</button>
//       </form>

//       {isError && <div>Something went wrong...</div>}

//       {isLoading ? (
//         <div>Loading</div>
//       ) : (
//         <ul>
//           {data.hits.map((item: any) => (
//             <li key={item.objectID}>
//               <a href={item.url}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   )
// }
