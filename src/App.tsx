import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    name: 'home',
    sidebar: () => <div>home!</div>,
    component: () => <h2>Home</h2>,
  },
  {
    path: '/bubblegum',
    name: 'bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    component: () => <h2>Bubblegum</h2>,
  },
  {
    path: '/shoelaces',
    name: 'shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    component: () => <h2>Shoelaces</h2>,
  },
]

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            padding: '10px',
            width: '40%',
            height: '100vh',
            background: '#f0f0f0',
            flex: 1,
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 7, padding: '10px' }}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </div>
      </div>
    </Router>
  )
}

export default hot(App)
