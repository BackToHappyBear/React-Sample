import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom'
import BasicLayout from './layouts/BasicLayout'
import * as pages from './pages'

const routes = [
  {
    path: '/HOC',
    name: 'HOC',
    sidebar: () => <div>HOC!</div>,
    component: pages.HOC,
  },
  {
    path: '/RenderProps',
    name: 'RenderProps',
    sidebar: () => <div>RenderProps!</div>,
    component: pages.RenderProps,
  },
  {
    path: '/hook',
    exact: true,
    name: 'Hook',
    sidebar: () => <div>Hook!</div>,
    component: pages.Hook,
  },
  {
    path: '/useReducer',
    exact: true,
    name: 'useReducer',
    sidebar: () => <div>UseReducer!</div>,
    component: pages.UseReducer,
  },
  {
    path: '/diffComponent',
    exact: true,
    name: 'DiffComponent',
    sidebar: () => <div>DiffComponent!</div>,
    component: pages.DiffComponent,
  },
  {
    path: '/fetchData',
    exact: true,
    name: 'fetchData',
    sidebar: () => <div>FetchData!</div>,
    component: pages.FetchData,
  },
  {
    path: '/closure',
    exact: true,
    name: 'Closure',
    sidebar: () => <div>Closure!</div>,
    component: pages.Closure,
  },
  {
    path: '/unkownPerformance',
    exact: true,
    name: 'unkownPerformance',
    sidebar: () => <div>UnkonwnPerformance!</div>,
    component: pages.UnkonwnPerformance,
  },
  {
    path: '/componentsDisplay',
    exact: true,
    name: 'componentsDisplay',
    sidebar: () => <div>ComponentsDisplay!</div>,
    component: pages.ComponentsDisplay,
  },
  {
    path: '/performanceTest',
    exact: true,
    name: 'performanceTest',
    sidebar: () => <div>PerformanceTest!</div>,
    component: pages.PerformanceTest,
  },
  {
    path: '/pureComponentTips',
    exact: true,
    name: 'pureComponentTips',
    sidebar: () => <div>PureComponentTips!</div>,
    component: pages.PureComponentTips,
  },
]

const App: React.FC = () => {
  return (
    <BasicLayout>
      <div>Hello World!</div>
    </BasicLayout>
    //   <Router>
    //     <div style={{ display: 'flex' }}>
    //       <div
    //         style={{
    //           padding: '0 10px',
    //           width: '40%',
    //           height: '100vh',
    //           background: '#f0f0f0',
    //           flex: 1,
    //         }}
    //       >
    //         <ul style={{ listStyleType: 'none', padding: 0 }}>
    //           {routes.map((route, index) => (
    //             <li
    //               key={index}
    //               style={{
    //                 width: '100%',
    //                 textAlign: 'center',
    //                 padding: '10px 0',
    //                 borderBottom: '1px solid #0000000b',
    //               }}
    //             >
    //               <Link to={route.path}>{route.name}</Link>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>

    //       <div style={{ flex: 7, padding: '0 10px', height: '100vh', overflowY: 'scroll' }}>
    //         <Redirect to="/pureComponentTips" />
    //         {routes.map((route, index) => (
    //           <Route key={index} path={route.path} exact={route.exact} component={route.component} />
    //         ))}
    //       </div>
    //     </div>
    //   </Router>
  )
}

export default hot(App)
