import { takeEvery } from 'redux-saga/effects'
import * as types from '../actions/ActionTypes'

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery(types.ADD_MESSAGE, (action) => {
    action.author = params.username
    console.log(action.author)
    params.socket.send(JSON.stringify(action))
  })
}


export default handleNewMessage