import React from 'react'
// import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config'

const RouteItem = props => <Route key={props.key} path={props.path} component={props.component} />

const DynamicRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, id) => {
          const { layout: Layout, children, ...rest } = route
          return (
            <Route
              key={id}
              {...rest}
              component={props => {
                return children ? (
                  <Layout key={id} {...props}>
                    <Switch>
                      {children.map(routeChild => {
                        const { path: childPath, component } = routeChild
                        return RouteItem({
                          key: childPath,
                          path: childPath,
                          component,
                        })
                      })}
                    </Switch>
                  </Layout>
                ) : (
                  <>
                    {RouteItem({
                      key: id,
                      ...props,
                    })}
                  </>
                )
              }}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default DynamicRoutes

// const routes = [
//   {
//     path: '/BaiscLayouts',
//     name: 'BasicLayout',
//     sidebar: () => <div>BasicLayout</div>,
//     component: BasicLayout,
//   },
//   {
//     path: '/HOC',
//     name: 'HOC',
//     sidebar: () => <div>HOC!</div>,
//     component: HOC,
//   },
//   {
//     path: '/RenderProps',
//     name: 'RenderProps',
//     sidebar: () => <div>RenderProps!</div>,
//     component: RenderProps,
//   },
//   {
//     path: '/hook',
//     exact: true,
//     name: 'Hook',
//     sidebar: () => <div>Hook!</div>,
//     component: Hook,
//   },
//   {
//     path: '/useReducer',
//     exact: true,
//     name: 'useReducer',
//     sidebar: () => <div>UseReducer!</div>,
//     component: UseReducer,
//   },
//   {
//     path: '/diffComponent',
//     exact: true,
//     name: 'DiffComponent',
//     sidebar: () => <div>DiffComponent!</div>,
//     component: DiffComponent,
//   },
//   {
//     path: '/fetchData',
//     exact: true,
//     name: 'fetchData',
//     sidebar: () => <div>FetchData!</div>,
//     component: FetchData,
//   },
//   {
//     path: '/closure',
//     exact: true,
//     name: 'Closure',
//     sidebar: () => <div>Closure!</div>,
//     component: Closure,
//   },
//   {
//     path: '/unkownPerformance',
//     exact: true,
//     name: 'unkownPerformance',
//     sidebar: () => <div>UnkonwnPerformance!</div>,
//     component: UnkonwnPerformance,
//   },
//   {
//     path: '/componentsDisplay',
//     exact: true,
//     name: 'componentsDisplay',
//     sidebar: () => <div>ComponentsDisplay!</div>,
//     component: ComponentsDisplay,
//   },
//   {
//     path: '/performanceTest',
//     exact: true,
//     name: 'performanceTest',
//     sidebar: () => <div>PerformanceTest!</div>,
//     component: PerformanceTest,
//   },
//   {
//     path: '/pureComponentTips',
//     exact: true,
//     name: 'pureComponentTips',
//     sidebar: () => <div>PureComponentTips!</div>,
//     component: PureComponentTips,
//   },
// ]
