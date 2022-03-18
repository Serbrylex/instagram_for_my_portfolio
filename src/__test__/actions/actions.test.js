import React from 'react'
import { setFeed } from '../../actions'
import FeedMock from '../../__mocks__/FeedMock'


describe('Actions', () => {
	const payload = FeedMock
	const expected = action => ({
		type: action,
		payload
	})


	test('setFeed Action', () => {	
		expect(setFeed(payload)).toEqual(expected('SET_FEED'))
	})
})