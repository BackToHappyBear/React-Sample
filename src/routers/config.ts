import React from 'react'
import Loadable from 'react-loadable'
import Closure from '../pages/Closure/router'
import ComponentsDisplay from '../pages/ComponentsDisplay/router'

export type Authory = 'admin' | 'developer' | 'tester'

export interface IRouteConfig {
  title?: string
  icon?: string
  path: string
  hideInMenu: boolean
  authority?: Authory[]
  // TODO: react组件类型 React.ReactComponent?
  layout?: any
  component?:
    | (React.ComponentClass<any, any> & Loadable.LoadableComponent)
    | (React.FunctionComponent<any> & Loadable.LoadableComponent)
  children?: IRouteConfig[]
}

const routes = [ComponentsDisplay, Closure]

export default routes
