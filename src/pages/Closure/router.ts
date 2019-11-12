import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
import BasicLayout from '../../layouts/BasicLayout'
import { IRouteConfig } from '../../routers/config'

const routeConfig: IRouteConfig = {
  title: '闭包',
  icon: 'diff',
  path: '/closure',
  hideInMenu: false,
  layout: BasicLayout,
  children: [
    {
      title: 'closure',
      path: '/closure/2-component-compare',
      hideInMenu: false,
      component: Loadable({
        loader: () => import('./Closure'),
        loading: Loading,
      }),
    },
  ],
}

export default routeConfig
