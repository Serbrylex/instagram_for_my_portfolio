import React from 'react'
import { compose } from 'redux'
import { Router } from 'react-router-dom'
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
		<Router history={history}>
			{props.children}
		</Router>
	</Provider>
)

export default ProviderMock