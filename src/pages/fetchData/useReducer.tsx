import Axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'

export type Hit = {
  objectID: string
  url: string
  title: string
}

export type State = {
  loading: boolean
  error: boolean
  data: {
    hits: Hit[]
    // hits: Array<{ objectID: string; url: string; title: string }>

    // NOTE: wrong⬇️
    // T[] forbidden for none-simple
    // hits: { objectID: string; url: string; title: string }[]

    // Array<T> forbidden for simple types
    // hits: Array<IHit>
  }
}

// NOTE: as const 用作 action type string, 其他类型不适合
const initialState = {
  loading: false,
  error: false,
  data: { hits: [{}] as Hit[] },
}

const actions = {
  FETCH_INIT: 'FETCH_INIT',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILED: 'FETCH_FAILED',
} as const

const fetchInit = () => {
  return {
    type: actions.FETCH_INIT,
  } as const
}

const fechSuccess = (payload: { hits: Hit[] }) => {
  return {
    type: actions.FETCH_SUCCESS,
    payload,
  } as const
}

const fetchFailed = () => {
  return {
    type: actions.FETCH_FAILED,
  } as const
}

type ActionsType =
  | ReturnType<typeof fetchInit>
  | ReturnType<typeof fechSuccess>
  | ReturnType<typeof fetchFailed>

function reducer(state = initialState, action: ActionsType): State {
  switch (action.type) {
    case actions.FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: false,
        data: { hits: [] },
      }
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case actions.FETCH_FAILED:
      return {
        ...state,
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
    async function fetchData() {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const result = await Axios(url)
        if (!didCancle) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        }
      } catch (error) {
        if (!didCancle) {
          dispatch({ type: 'FETCH_FAILED' })
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
          {data.hits.map((item: Hit) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
