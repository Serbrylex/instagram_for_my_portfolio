import { SET_USER, SET_LOGIN, SIGN_UP, CLOSE_SESSION, SET_UPDATE_USER } from '../actions/type'


import apiCall from '../api/apiCall'


const miStorage = window.localStorage.getItem('user');

const initialState = JSON.parse(miStorage) || {	
	isAuth: false,
	user: {},
	access_token: null
}

const userReducer = (state = initialState, action) => {	

	switch(action.type) {		
		case SET_USER:
			window.localStorage.setItem('user', JSON.stringify(action.payload))
			return { ...action.payload }

		case SET_LOGIN:			
			return { ...state }	

		case SET_UPDATE_USER:
						
			window.localStorage.setItem('user', JSON.stringify({ ...state, user: action.payload }))
			return { ...state, user: action.payload } 

		case SIGN_UP:
			return { ...state }

		case CLOSE_SESSION:
			window.localStorage.clear()
			return { ...initialState }

		default:
			return { ...state }
	}
}

export default userReducer