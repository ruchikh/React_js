const url = "http://localhost:4001/api"

export function addPost(data){
	return dispatch => {
		fetch((`${url}/article`), {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(data => {
			dispatch({type:'GET_POST', data: data.data})
		})
	}
}

export function getAllArticle(){
	fetch(`${url}/article`).then(res => res.json()).then(data => console.log(data))
}