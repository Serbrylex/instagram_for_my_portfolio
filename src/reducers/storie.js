import { SET_STORIE } from '../actions/type'

const initialState = {
	data: []
}

const storieReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_STORIE:
			return { ...state, data: action.payload }
		default:
			return { ...state }
	}
}

export default storieReducer