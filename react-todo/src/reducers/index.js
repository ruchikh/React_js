const initState = {
	todos: []
}

export default function rootReducer(state= initState, action) {
	switch(action.type) {
		case "ADD_TODO": {
			return {
				todos: [...state.todos, action.value]
			}
		}
		case "DELETE_TODO": {
		 state.todos.splice(action.index, 1)
			return {
				todos: [...state.todos]
			}
		}
		default: 
		return state;
	}
}