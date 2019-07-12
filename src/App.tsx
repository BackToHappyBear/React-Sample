// tslint:disable-next-line: ordered-imports
import React from 'react'
import { setConfig } from 'react-hot-loader'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'

import Closure from './pages/Closure'
import DiffComponent from './pages/DiffComponent'
import FetchData from './pages/FetchData'
import HOC from './pages/HOC'
import Hook from './pages/Hook'
import RenderProps from './pages/RenderProps'
import UseReducer from './pages/UseReducer'

setConfig({
  reloadHooks: false,
})

const routes = [
  {
    path: '/HOC',
    name: 'HOC',
    sidebar: () => <div>HOC!</div>,
    component: HOC,
  },
  {
    path: '/RenderProps',
    name: 'RenderProps',
    sidebar: () => <div>RenderProps!</div>,
    component: RenderProps,
  },
  {
    path: '/hook',
    exact: true,
    name: 'Hook',
    sidebar: () => <div>Hook!</div>,
    component: Hook,
  },
  {
    path: '/useReducer',
    exact: true,
    name: 'useReducer',
    sidebar: () => <div>UseReducer!</div>,
    component: UseReducer,
  },
  {
    path: '/diffComponent',
    exact: true,
    name: 'DiffComponent',
    sidebar: () => <div>DiffComponent!</div>,
    component: DiffComponent,
  },
  {
    path: '/fetchData',
    exact: true,
    name: 'fetchData',
    sidebar: () => <div>FetchData!</div>,
    component: FetchData,
  },
  {
    path: '/closure',
    exact: true,
    name: 'Closure',
    sidebar: () => <div>Closure!</div>,
    component: Closure,
  },
]

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '0 10px',
            width: '40%',
            height: '100vh',
            background: '#f0f0f0',
            flex: 1,
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {routes.map((route, index) => (
              <li
                key={index}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px 0',
                  borderBottom: '1px solid #0000000b',
                }}
              >
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 7, padding: '0 10px' }}>
          <Redirect to="/fetchData" />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </div>
      </div>
    </Router>
  )
}

export default hot(App)
