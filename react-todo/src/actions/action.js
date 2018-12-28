export function addTodo(value){
	return {
		type: "ADD_TODO",
		value
	}
}

export function removeTodo(index){
	return {
		type: "DELETE_TODO",
		index
	}
}