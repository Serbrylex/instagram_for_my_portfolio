import { SET_FEED } from '../actions/type'


const initialState = {
	data: []
}

const feedReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_FEED:
			return { ...state, data: action.payload }
		default:
			return { ...state }
	}
}

export default feedReducer