import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import {
  Closure,
  ComponentsDisplay,
  DiffComponent,
  FetchData,
  HOC,
  Hook,
  PerformanceTest,
  RenderProps,
  UnkonwnPerformance,
  UseReducer,
} from './pages'

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
  {
    path: '/unkownPerformance',
    exact: true,
    name: 'unkownPerformance',
    sidebar: () => <div>UnkonwnPerformance!</div>,
    component: UnkonwnPerformance,
  },
  {
    path: '/componentsDisplay',
    exact: true,
    name: 'componentsDisplay',
    sidebar: () => <div>ComponentsDisplay!</div>,
    component: ComponentsDisplay,
  },
  {
    path: '/performanceTest',
    exact: true,
    name: 'performanceTest',
    sidebar: () => <div>PerformanceTest!</div>,
    component: PerformanceTest,
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

        <div style={{ flex: 7, padding: '0 10px', height: '100vh', overflowY: 'scroll' }}>
          <Redirect to="/componentsDisplay" />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </div>
      </div>
    </Router>
  )
}

export default hot(App)
