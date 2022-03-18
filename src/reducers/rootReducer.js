import { combineReducers } from 'redux'

// Reducers
import feedReducer from './feed'
import storieReducer from './storie'
import userReducer from './user'
import preferenceReducer from './preference'


const rootReducer = combineReducers({
	feed: feedReducer,
	preference: preferenceReducer,
	storie: storieReducer,	
	user: userReducer
})

export default rootReducer