const initState = {
	data: []
}

export default function rootReducer(state=initState, action) {
	switch(action.type) {
		case 'GET_COUNTRY_DATA': {
			return {
				data: action.data
			}
		}
		case 'GET_NEWS_BY_CATEGORY':{
			return {
				data: action.data
			}
		}
		default: 
		return state;
	}
}