export function displayData(data, cb){
  return {
    type:'DISPLAY_DATA',
    data
  }
}

export function addToCart(index){
  return {
    type:'ADD_TO_CART',
    index
  }
}

export function sortedData(){
  return {
    type: 'SORTED_DATA'
  }
}

export function filterSize(index){
  return {
    type: 'FILTER_SIZE',
    index
  }
}

export function getSizesMenu(){
  return {
    type: 'GET_SIZES_MENU'
  }
}

export function cartdItemDelete(index){
  return {
    type: "CART_DELETE",
    index
  }
}



