 const initState = {
 	number: 0
 }
export default function Counter(state = initState, action){
	switch(action.type){
		case "INCREMENT":
			return {
				number: state.number + 1
			}
		case "DECREMENT":
			return {
				number: state.number - 1
			}
		default: 
			return state
	}
}