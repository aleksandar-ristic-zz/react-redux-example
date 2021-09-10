import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'
import './App.css'

function App() {
	const counter = useSelector(state => state.counterReducer)
	const isLogged = useSelector(state => state.loggedReducer)
	const dispatch = useDispatch()

	return (
		<div className='App'>
			<h1>Counter </h1>
			<h2
				className={
					counter >= 10
						? 'highNo'
						: counter === 0
						? 'zeroNo'
						: counter < 0
						? 'lowNo'
						: ''
				}
			>
				{counter}
			</h2>
			<button onClick={() => dispatch(increment(5))}>+5</button>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(decrement(5))}>-5</button>

			{isLogged && <h2>If You see this, isLogged doesn't work.</h2>}
		</div>
	)
}

export default App
