import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'

// if (process.env.NODE_ENV !== 'production') {
//   require('./mock')
// }

const routes = [
  {
    path: '/HOC',
    name: 'HOC',
    sidebar: () => <div>HOC!</div>,
    component: lazy(() => import(/* webpackChunkName: 'HOC' */ 'pages/HOC')),
  },
  {
    path: '/RenderProps',
    name: 'RenderProps',
    sidebar: () => <div>RenderProps!</div>,
    component: lazy(() => import(/* webpackChunkName: 'RenderProps' */ 'pages/RenderProps')),
  },
  {
    path: '/hook',
    exact: true,
    name: 'Hook',
    sidebar: () => <div>Hook!</div>,
    component: lazy(() => import(/* webpackChunkName: 'Hook' */ 'pages/Hook')),
  },
  {
    path: '/useReducer',
    exact: true,
    name: 'useReducer',
    sidebar: () => <div>UseReducer!</div>,
    component: lazy(() => import(/* webpackChunkName: 'UseReducer' */ 'pages/UseReducer')),
  },
  {
    path: '/diffComponent',
    exact: true,
    name: 'DiffComponent',
    sidebar: () => <div>DiffComponent!</div>,
    component: lazy(() => import(/* webpackChunkName: 'DiffComponent' */ 'pages/DiffComponent')),
  },
  {
    path: '/fetchData',
    exact: true,
    name: 'fetchData',
    sidebar: () => <div>FetchData!</div>,
    component: lazy(() => import(/* webpackChunkName: 'FetchData' */ 'pages/FetchData')),
  },
  {
    path: '/closure',
    exact: true,
    name: 'Closure',
    sidebar: () => <div>Closure!</div>,
    component: lazy(() => import(/* webpackChunkName: 'Closure' */ 'pages/Closure')),
  },
  {
    path: '/unkownPerformance',
    exact: true,
    name: 'unkownPerformance',
    sidebar: () => <div>UnkonwnPerformance!</div>,
    component: lazy(
      () => import(/* webpackChunkName: 'UnkonwnPerformance' */ 'pages/UnkonwnPerformance'),
    ),
  },
  {
    path: '/componentsDisplay',
    exact: true,
    name: 'componentsDisplay',
    sidebar: () => <div>ComponentsDisplay!</div>,
    component: lazy(
      () => import(/* webpackChunkName: 'ComponentsDisplay' */ 'pages/ComponentsDisplay'),
    ),
  },
  {
    path: '/performanceTest',
    exact: true,
    name: 'performanceTest',
    sidebar: () => <div>PerformanceTest!</div>,
    component: lazy(
      () => import(/* webpackChunkName: 'PerformanceTest' */ 'pages/PerformanceTest'),
    ),
  },
  {
    path: '/pureComponentTips',
    exact: true,
    name: 'pureComponentTips',
    sidebar: () => <div>PureComponentTips!</div>,
    component: lazy(
      () => import(/* webpackChunkName: 'PureComponentTips' */ 'pages/PureComponentTips'),
    ),
  },
  {
    path: '/hookDemo',
    exact: true,
    name: 'HookDemo',
    sidebar: () => <div>HookDemo!</div>,
    component: lazy(() => import(/* webpackChunkName: 'HookDemo' */ 'pages/HookDemo')),
  },
  {
    path: '/constate',
    exact: true,
    name: 'Constate',
    sidebar: () => <div>Constate!</div>,
    component: lazy(() => import(/* webpackChunkName: 'Constate' */ 'pages/Constate')),
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
          <Suspense fallback={<div>Loading...</div>}>
            <Redirect to="/hook" />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </Router>
  )
}

export default App
