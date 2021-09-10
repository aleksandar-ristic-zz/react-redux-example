export const increment = (number = 1) => {
	return {
		type: 'INCREMENT',
		payload: number
	}
}

export const decrement = (number = 1) => {
	return {
		type: 'DECREMENT',
		payload: number
	}
}
