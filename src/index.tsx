import 'react-hot-loader'
// tslint:disable-next-line: ordered-imports
import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import './index.css'
// import App from './App'
import Route from './routers'
import * as serviceWorker from './serviceWorker'

const App = hot(Route)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
