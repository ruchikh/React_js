export function getCountryData(value) {
	console.log(value)
	return dispatch => {
		fetch(`https://newsapi.org/v2/top-headlines?country=${value}&apiKey=3ae72a598c6045609bd94ff76759fefc`)
		.then(res => res.json())
		.then(data => {
			dispatch({type: 'GET_COUNTRY_DATA', data: data.articles})
		})
	}
}

export function getNewsByCategory(country, category) {
	return dispatch => {
		fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3ae72a598c6045609bd94ff76759fefc`)
		.then(res => res.json())
		.then(data => {
			dispatch({type: 'GET_NEWS_BY_CATEGORY', data: data.articles})
		})
	}
}