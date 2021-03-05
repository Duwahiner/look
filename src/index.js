import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UseAppContex } from './contex'

ReactDOM.render(
  <React.StrictMode>
    <UseAppContex>
      <App />
    </UseAppContex>
  </React.StrictMode>,
  document.getElementById('root')
)

