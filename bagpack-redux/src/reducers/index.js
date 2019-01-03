let initialState = {
	itemList: [],
	redoItemList: [],
	packItem: []
}

export default function rootReducer(state=initialState, action){
	switch(action.type){
		case "ADDITEM":
      return {
      	...state,
      	itemListCopy: [...state.itemList, action.value],
      	itemList: [...state.itemList, action.value]
      }

    case "UNDOITEM":
      var newArray = state.itemList.splice(state.itemList.length-1, 1)
      return {
      	...state,
      	itemList: [...state.itemList],
      	redoItemList: [...state.redoItemList, ...newArray]

      }

    case "REDOITEM":
      var redoItem = state.redoItemList.splice(state.redoItemList.length-1, 1)
      return {
      	...state,
      	itemList: [...state.itemList, ...redoItem],
      	redoItemList: [...state.redoItemList]
      }

    case "PACK_ITEM":
      const packed = this.props.itemList.filter(item => item.done);
      console.log(packed)
      return {
      	...state,
      	packItem: packed
      }

      case "REMOVE_ITEM":
      var newItem = state.itemList.slice()
      newItem.splice(action.i, 1)
      return {
      	...state,
      	itemList: newItem
      }

      case "UNCHECK":
      state.itemList[action.id].done = !state.itemList[action.id].done
      return{
      	...state,
      	itemList: [...state.itemList]

      }


		default: return state

	}
	
}