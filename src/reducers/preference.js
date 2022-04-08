import { SET_LANGUAGE, SET_THEME } from '../actions/type'


const miStorage = window.localStorage.getItem('preference');

const initialState = JSON.parse(miStorage) || {
	language: 'en',
	theme: 'dark',
	//url: 'http://127.0.0.1:8000'
	url: 'https://newinstagrambyme.herokuapp.com'
}

const preferenceReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_LANGUAGE:
			window.localStorage.setItem('preference', JSON.stringify({ ...state, language: action.payload }))
			return { ...state, language: action.payload }
		case SET_THEME:
			window.localStorage.setItem('preference', JSON.stringify({ ...state, theme: action.payload }))
			return { ...state, theme: action.payload }
		default:
			return { ...state }
	}
}

export default preferenceReducer