import { Icon, Layout, Menu } from 'antd'
import React, { memo, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import menuConfig from '../routers/config'

interface IProps {
  collapsed: boolean
}

const NavMenu = memo((props: IProps) => {
  const [selectedKeys, setSelectedKeys] = useState(['/componentDisplay/carousel'])

  const handleMenuClick = ({ key }) => {
    console.log('selectedKey new', key)
    console.log('selectedKey old', selectedKeys)
    if (key === selectedKeys[0]) {
      return
    }
    setSelectedKeys([key])
  }

  const renderMenu = (config: any) => {
    return config
      .filter(item => item.title && !item.hideInMenu)
      .map(item => {
        if (item.children) {
          return (
            <Menu.SubMenu
              key={item.path}
              title={
                <>
                  {item.icon && <Icon type={item.icon} />}
                  <span>{item.title}</span>
                </>
              }
            >
              {renderMenu(item.children)}
            </Menu.SubMenu>
          )
        }
        return (
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {item.icon && <Icon type={item.icon} />}
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      })
  }

  return (
    <Layout.Sider
      className="layoutSider"
      width={256}
      trigger={null}
      collapsible={true}
      collapsed={props.collapsed}
    >
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1>React Sample</h1>
        </Link>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        style={{ width: '100%', padding: '16px 0' }}
        selectedKeys={selectedKeys}
        onClick={handleMenuClick}
      >
        {renderMenu(menuConfig)}
      </Menu>
    </Layout.Sider>
  )
})

export default NavMenu
