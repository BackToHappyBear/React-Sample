import { Divider } from 'antd'
import React from 'react'
import MessageThread from './MessageThread'
import ProfilePageClass from './ProfilePageClass'
import ProfilePageFunction from './ProfilePageFunction'
import ProfilePageHook from './ProfilePageHook'

export default class App extends React.Component {
  state = {
    user: 'Dan',
  }

  render() {
    return (
      <>
        <h1>点击follow按钮后修改select的值</h1>
        <Divider />
        <label>
          <b>Choose profile to view: </b>
          <select value={this.state.user} onChange={e => this.setState({ user: e.target.value })}>
            <option value="Dan">Dan</option>
            <option value="Sophie">Sophie</option>
            <option value="Sunil">Sunil</option>
          </select>
        </label>
        <h1>Welcome to {this.state.user}’s profile!</h1>
        <p>
          <ProfilePageFunction user={this.state.user} />
          <b> (function)</b>
        </p>
        <p>
          <ProfilePageClass user={this.state.user} />
          <b> (class)</b>
        </p>
        <p>
          <ProfilePageHook user={this.state.user} />
          <b> (Hook)</b>
          <p style={{ color: 'hotpink' }}>the props object itself is never mutated by React</p>
        </p>
        <p>Can you spot the difference in the behavior?</p>
        <Divider />
        <p>
          <MessageThread />
        </p>
      </>
    )
  }
}
