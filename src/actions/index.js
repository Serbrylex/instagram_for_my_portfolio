import {
	SET_FEED, SET_LANGUAGE, SET_STORIE, SET_THEME, 
	SET_USER, SET_LOGIN, SIGN_UP, CLOSE_SESSION, SET_UPDATE_USER
} from './type'

export const setFeed = payload => ({
	type: SET_FEED,
	payload
})

export const setLanguage = payload => ({
	type: SET_LANGUAGE,
	payload
})

export const setStorie = payload => ({
	type: SET_STORIE,
	payload
})

export const setTheme = payload => ({
	type: SET_THEME,
	payload
})

// User
export const setUser = payload => ({
	type: SET_USER,
	payload
})

export const setUpdateUser = payload => ({
	type: SET_UPDATE_USER,
	payload
})

export const setLogin = payload => ({
	type: SET_LOGIN,
	payload	
})
export const setSignUp = payload => ({
	type: SIGN_UP,
	payload	
})
export const setCloseSession = () => ({
	type: CLOSE_SESSION	
})