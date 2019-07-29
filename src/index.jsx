import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './static/scss/styles.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('app'))
serviceWorker.unregister()
