import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import * as serviceWorker from './serviceWorker'
import Calculator from './main/Calculator'

ReactDOM.render(
  <div>
    <h1>Calcutadora</h1>
    <Calculator />
  </div>,
  document.getElementById('root')
);

serviceWorker.unregister();
