import React from 'react'
import { compose, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import rootReducer from '../reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	rootReducer,
	composeEnhancers()
)
const history = createBrowserHistory()

const ProviderMock = props => (
	<Provider store={store}>
		<BrowserRouter history={history}>
			{props.children}		
		</BrowserRouter>
	</Provider>
)

export default ProviderMock