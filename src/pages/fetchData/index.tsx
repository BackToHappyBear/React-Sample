import React, { useState } from 'react'

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

import './style.scss'
import useFetchApi from './useFetchApi'

export default function SearchResult() {
  const [query, setQuery] = useState('react')
  const { data, isLoading, isError, doFetch } = useFetchApi()
  return (
    <>
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
    </>
  )
}
