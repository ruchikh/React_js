import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import { Provider } from 'react-redux';
  import { createStore, applyMiddleware, compose } from 'redux';
  import rootReducer from './reducers/index'
  import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
)
