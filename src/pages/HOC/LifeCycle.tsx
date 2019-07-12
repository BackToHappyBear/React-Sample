import Axios from 'axios'
import React, { PureComponent } from 'react'
import { IHit, IState as IFetchState } from '../FetchData/useReducer'

interface IState extends IFetchState {
  query: string
  url: string
}
export default class LifeCycle extends PureComponent<{}, IState> {
  public static getSnapshotBeforeUpdate() {
    return { name: 'lee' }
  }

  public state = {
    loading: false,
    error: false,
    data: { hits: [] },
    query: 'react',
    url: 'http://hn.algolia.com/api/v1/search?query=react',
  }

  public componentDidMount() {
    this.fetchData()
  }

  public componentDidUpdate(prevProps, prevState: IState) {
    if (prevState.url !== this.state.url) {
      this.fetchData()
    }
  }

  public fetchData = async () => {
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

  public render() {
    const { data, error, loading, query } = this.state
    return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault()
            this.setState({ url: `http://hn.algolia.com/api/v1/search?query=${query}` })
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
}
