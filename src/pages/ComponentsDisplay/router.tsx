// import React, { PureComponent } from 'react'
// import { Carousel, CountScroll } from '../../components'

// export default class ComponentDisplay extends PureComponent {
//   render() {
//     return (
//       <>
//         <Carousel />
//         <div style={{ height: 800 }} />
//         <CountScroll count={4999} />
//         <div style={{ height: 800 }} />
//       </>
//     )
//   }
// }

import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
import BasicLayout from '../../layouts/BasicLayout'
import { IRouteConfig } from '../../routers/config'

const routeConfig: IRouteConfig = {
  title: '组件',
  icon: 'table',
  path: '/componentDisplay',
  hideInMenu: false,
  layout: BasicLayout,
  children: [
    {
      title: 'carousel',
      path: '/componentDisplay/carousel',
      hideInMenu: false,
      component: Loadable({
        loader: () => import('./Carousel'),
        loading: Loading,
      }),
    },
    // {
    //   title: 'countScroll',
    //   path: '/componentDisplay/countScroll',
    //   hideInMenu: false,
    //   component: Loadable({
    //     loader: () => import('./CountScroll'),
    //     loading: Loading,
    //   }),
    // },
  ],
}

export default routeConfig
