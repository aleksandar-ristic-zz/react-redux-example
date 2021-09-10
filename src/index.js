import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

// STORE ==>
// GLOBALIZED STATE

// ACTION ==>
// simply a function that returns object with key named type ( action name)
// type ==> action name
// payload ==> action argument

// REDUCER ==>
// a reduce function receives state and action, which returns props of a changed state based on action type

// DISPATCH ==>
// function which dispatches what action is called

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
