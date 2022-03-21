import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/*const composedEnhancers = composeEnhancers( 
  applyMiddleware(sagaMiddleware, thunk, logActions, reportError)
)*/

const store = createStore(
  rootReducer,
  composeEnhancers()
)

ReactDOM.render(
  <Provider store={store}>
    <App />  
  </Provider>,
  document.getElementById('root')
);