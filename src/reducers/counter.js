const counterReducer = (state = 0, action) => {
	const { type, payload } = action

	switch (type) {
		case 'INCREMENT':
			return state + payload
		case 'DECREMENT':
			return state - payload
		default:
			return state
	}
}

export default counterReducer
