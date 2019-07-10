import Axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

const FETCH_INIT = 'FETCH_INIT'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FECTH_FAILED = 'FECTH_FAILED'

interface IHit {
  objectID: string
  url: string
  title: string
}

interface IState {
  loading: boolean
  error: boolean
  data: {
    hits: IHit[]
    // hits: Array<{ objectID: string; url: string; title: string }>

    // NOTE: wrong⬇️
    // T[] forbidden for none-simple
    // hits: { objectID: string; url: string; title: string }[]

    // Array<T> forbidden for simple types
    // hits: Array<IHit>
  }
}

const initialState: IState = {
  loading: false,
  error: false,
  data: { hits: [] },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INIT:
      return {
        loading: true,
        error: false,
        data: { hits: [] },
      }
    case FETCH_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload,
      }
    case FECTH_FAILED:
      return {
        loading: false,
        error: true,
        data: { hits: [] },
      }
    default:
      return state
  }
}

function useFetch(initialUrl: string) {
  const [url, setUrl] = useState(initialUrl)
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let didCancle = false
    const fetchData = async () => {
      dispatch({ type: FETCH_INIT })
      try {
        const result = await Axios(url)
        if (!didCancle) {
          dispatch({ type: FETCH_SUCCESS, payload: result.data })
        }
      } catch (error) {
        if (!didCancle) {
          dispatch({ type: FECTH_FAILED })
        }
      }
    }
    fetchData()

    return () => {
      didCancle = true
    }
  }, [url])

  return {
    ...state,
    setUrl,
  }
}

export default function SearchResult() {
  const [query, setQuery] = useState('')
  const { data, error, loading, setUrl } = useFetch(
    'http://hn.algolia.com/api/v1/search?query=react',
  )

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
        }}
      >
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ margin: '10px 10px 10px 20px' }}
        />
        <button>search</button>
      </form>

      {error && <h2>something went wrong...</h2>}

      {loading ? (
        <h2>loading...</h2>
      ) : (
        <ul>
          {data.hits.map((item: IHit) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
