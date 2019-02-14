const url = "http://localhost:4001/api"

export function addPost(data, cb){
	return dispatch => {
		fetch((`${url}/article`), {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(data => {
			dispatch({type:'GET_POST', data: data.data})
			cb(true)
		})
	}
}

export function getAllArticles(){
	return (dispatch) => {
		fetch(`${url}/article`)
		.then(res => res.json())
		.then(data => {
			dispatch({type: "GET_ALL_POSTS", data: data.articles });
		});
	}
}

export function getSingleBlog(id){
	console.log("action", id)
	return (dispatch) => {
		fetch(`${url}/article/${id}`)
		.then(res => res.json())
		.then(data => {
			dispatch({type: "GET_ONE_BLOG", data: data.data})
		})
	}
}


export function addComment(data, cb){
	return dispatch => {
		fetch((`${url}/article/${data.postId}/comment`), {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json())
		.then(data => {
			dispatch({type: "GET_COMMENT", data: data.data})
			cb(true)
		})
	}
}

export function allComment(id){
	return (dispatch) => {
		fetch(`${url}/article/${id}/comment`)
		.then(res => res.json())
		.then(data => {
			dispatch({type: "ALL_COMMENTS", data})
		})
	}
}

export function deleteComment(id, postId){
	console.log(postId)
	return (dispatch) => {
		fetch(`${url}/article/${postId}/comment`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({id})
		}).then(res => res.json())
		.then(data => {
			dispatch({type: "ALL_COMMENTS", data})
		})
	}
}

export function deletePost(postId, cb){
	return (dispatch) => {
		fetch(`${url}/article/${postId}`,{
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({postId})
		}).then(res => res.json())
		.then(data => {
			dispatch({type: "GET_ALL_POSTS", data: data.articles});
			cb(true);
		})
	}
}

export function updatePost(data, id, cb){
	return (dispatch) => {
		fetch(`${url}/article/${id}/edit`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(data => cb(true) )
	}
}

export function editComment(data, id, cb){
	return (dispatch) => {
		fetch(`${url}/article/${id}/comment/edit`, {
			methods: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(data => cb(true))
	}
}

