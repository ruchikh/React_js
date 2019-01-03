

export function addItems(value){
	return {
		type: "ADDITEM",
		value
	}
	
}

export function undoItem(id){
	return {
		type: 'UNDOITEM',
		id
	}	
}

export function redoItem(){
	return {
		type: 'REDOITEM',

	}
}

export function removeItem(i){
	console.log(i)
	return {
		type: 'REMOVE_ITEM',
		i
	}
}

export function unCheck(id){
 return {
 	type: "UNCHECK",
 	id
 }
}


export function packItem(id){
	return {
		type: 'PACK_ITEM',
		id
	}
}

