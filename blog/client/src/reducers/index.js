const initState = {
	allArticles: [],
	singleArticle: {},
	comments:[]

}

export default function rootReducer(state= initState, action){
	switch(action.type){
		case "GET_ALL_POSTS":{
			return {
				...state,
				allArticles: action.data
			}
		}
		case "GET_ONE_BLOG":{
			return {
				...state,
				singleArticle: action.data
			}
		}
		case "ALL_COMMENTS":
		return {
			...state,
			comments: action.data

		}
		default: return state
	}

}
