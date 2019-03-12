const url = 'http://localhost:8001/api'


export function addItems(data, cb){
	return dispatch => {
		fetch(`${url}/items`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data)
			})
		.then(res => res.json()).then(data => {
			console.log(data)
			dispatch({type:"POST_ITEMS", data: data})
			cb(true)
		})
	}
}

export function getItems(){
	return dispatch => {
	fetch(`${url}/items`).then(res => res.json()).then(data => {
		console.log(data)
		dispatch({
			type:"GET_ITEMS", data
		})
	})
	}
}

export function getSingleItems(itemId, cb){
	return dispatch => {
		fetch(`${url}/items/${itemId}`).then(res => res.json()).then(data => {
			console.log(data)
			dispatch({type:"GET_SINGLE_ITEM", data})
			cb(true, data)
		})
	}
}


export function editItem(data, itemId, cb){
	console.log(data)
	return dispatch => {	
		fetch(`${url}/item/${itemId}/edit`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			dispatch({type:"EDIT_ITEM", data})
			cb(true)
		})
	}
}


/*LogIn Signup*/

export function createUser(data, cb){
	console.log(data)
	return (dispatch) => {
		fetch(`${url}/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(data =>{
			console.log(data)
			dispatch({type:"POST_USER", data})
			cb(true)
		})
	}
}


export function loginUser(data){
	console.log(data)
	return (dispatch) => {
		fetch(`${url}/signin`,{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		}).then(res => res.json()).then(data => {
			console.log(data)
			if(data.user._id){
				dispatch({type:"LOGIN_SUCCESS", data: data.user})
			}else {
				dispatch({type:"LOGIN_ERR", data})
			}
		})
	}
}

export function isLoggedIn(){
	return (dispatch) => {
		fetch(`/api/isLoggedIn`).then(res => res.json()).then(data => {
			dispatch({
				type: "LOGIN_SUCCESS",
				data: data.user
			})
		})
	}
}


export function loggedOut(cb) {
  return dispatch => {
    fetch('/api/logout').then(res => res.json())
    .then(data => {
      dispatch({type: 'LOGOUT_SUCCESS', data})
      cb(true)
    })
  }
}


