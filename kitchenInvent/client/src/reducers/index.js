let initialState = {
	itemList: [],
}

export default function rootReducer(state=initialState, action){
      switch(action.type){
      	case "GET_ITEMS":
      return {
      	...state,
      	itemList: action.data
      }
      default: return state
      }
	
}