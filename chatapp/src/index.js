import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import chatApp from './reducers'
import { addUser } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(chatApp, composeEnhancers(applyMiddleware(thunk)))

store.dispatch(addUser('Me'))

ReactDOM.render(<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();