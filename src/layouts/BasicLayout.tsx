import { Icon, Layout } from 'antd'
import React, { useCallback, useState } from 'react'
import NavMenu from '../components/NavMenu'
import './BasicLayout.scss'

const BasicLayout: React.FC = props => {
  const [collapsed, setCollapsed] = useState(false)
  const handleMenuCollapse = useCallback(() => {
    setCollapsed(prevState => !prevState)
  }, [])

  return (
    <Layout className="basicLayout">
      <NavMenu collapsed={collapsed} />
      <Layout>
        <Layout.Header className="layoutHeader">
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={handleMenuCollapse}
          />
        </Layout.Header>
        <Layout.Content className="layoutContent">{props.children}</Layout.Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
