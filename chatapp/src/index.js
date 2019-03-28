import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import chatApp from './reducers';
import handleNewMessage from './sagas'
import setupSocket from './socket'
import username from './utils/name';
const sagaMiddleware = createSagaMiddleware()

const store = createStore(chatApp, applyMiddleware(sagaMiddleware));
const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, { socket, username, dispatch: store.dispatch });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.register()

