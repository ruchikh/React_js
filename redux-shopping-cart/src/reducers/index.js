const initialState = {
	allItems: [],
	shoppingItems: [],
	favourites: [],
	newArray: [],
	sortedArray: [],
	availSizes: []
}

export default function rootReducer(state = initialState, action){
	switch (action.type) {
    case "DISPLAY_DATA":
      return {
      	...state,
      	shoppingItems: action.data,
      	allItems: action.data
      }
      case 'GET_SIZES_MENU': {
      	console.log(state.shoppingItems)
      	const sizeArray =  state.allItems.reduce((acc, v) => {
          v.availableSizes.forEach(value => {
            if(!acc.includes(value)) acc.push(value)
          })
              return acc
        }, [])
        console.log(sizeArray)
      	return {
      		...state,
      		availSizes: sizeArray
      	}
      }
      case "ADD_TO_CART":
      var filterItems = state.favourites.filter((val) => {
          console.log(val.index)
        }
      )
      return {
      	...state,
      	favourites: [...state.favourites, action.index]
      }
      case "SORTED_DATA":
      return {
      	...state,
      	sortedArray: [...state.shoppingItems]
      }
      case "FILTER_SIZE":{
      	var filterSize = state.allItems.filter((v, i) => v.availableSizes.includes(action.index));
      	console.log(filterSize)
      return {
      	...state,
      	shoppingItems: filterSize
      }
      }
      case "CART_DELETE":{
      	state.favourites.splice(action.index, 1)
      	return{
      		...state,
      		favourites: [...state.favourites]

      	}
      }

    default:
      return state
  }
}



/*switch (action.type) {
    case ADD_TO_CART:
      return {
      	favourites: [ ...state.favourites, action.index]
      }
    default:
      return state
  }*/