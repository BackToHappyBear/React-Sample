import Axios from 'axios'
import React, { PureComponent } from 'react'
import { Hit, State as IFetchState } from '../FetchData/useReducer'

type State = IFetchState & {
  query: string
  url: string
}

export default class LifeCycle extends PureComponent<{}, State> {
  state = {
    loading: false,
    error: false,
    data: { hits: [] },
    query: 'react',
    url: 'http://hn.algolia.com/api/v1/search?query=react',
  }

  componentDidMount() {
    // 测试 merge bug
    this.fetchData()
  }

  getSnapshotBeforeUpdate() {
    return { name: 'lee' }
  }

  componentDidUpdate(prevProps, prevState: State) {
    if (prevState.url !== this.state.url) {
      this.fetchData()
    }
  }

  fetchData = async () => {
    this.setState({
      loading: true,
    })
    try {
      const result = await Axios(this.state.url)
      this.setState({
        loading: false,
        data: result.data,
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
      })
    }
  }

  render() {
    const { data, error, loading, query } = this.state
    return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.setState({
              url: `http://hn.algolia.com/api/v1/search?query=${query}`,
            })
          }}
        >
          <input
            value={query}
            onChange={e => this.setState({ query: e.target.value })}
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
}
