import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import allReducers from './reducers'

// STORE ==> GLOBALIZED STATE
const store = createStore(allReducers)

// ACTION

// REDUCER

// DISPATCH

ReactDOM.render(<App />, document.getElementById('root'))
