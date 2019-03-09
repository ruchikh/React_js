let initialState = {
	itemList: [],
      singleItem: {}
}

export default function rootReducer(state=initialState, action){
      switch(action.type){
      	case "GET_ITEMS":
      return {
      	...state,
      	itemList: action.data
      }
      case "GET_SINGLE_ITEM":
      return{
            ...state,
            singleItem: action.data
      }
      default: return state
      }
	
}