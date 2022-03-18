import feedReducer from '../../reducers/feed'
import FeedMock from '../../__mocks__/FeedMock'

describe('Reducers', () => {
	test('Retornar el estado inicial', () => {
		expect(feedReducer({}, '')).toEqual({})
	})

	test('SET_FEED', () => {
		const initialState = {
			data: []
		}
		const payload = FeedMock
		const action = {
			type: 'SET_FEED',
			payload
		}

		const expected = {
			data: FeedMock
		}

		
		expect(feedReducer(initialState, action)).toEqual(expected)
	})

})