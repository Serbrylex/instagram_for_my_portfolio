import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import FeedMock from '../../__mocks__/FeedMock'
import Feed from '../../containers/Feed'

import Header from '../../components/Header'
import Stories from '../../components/Stories'

describe('<Feed />', () => {
	test('Render product', () => {
		const feed = mount(
			<ProviderMock>
				<Feed />
			</ProviderMock>
		)		
		expect(feed.length).toEqual(1)
		expect(feed.html()).toMatchSnapshot()
	})

	test('Comprobar el boton de comprar', () => {
		//const handleAddToCart = jest.fn()
		const feed = mount(
			<ProviderMock>
				<Feed />
			</ProviderMock>
		)
		console.log('Here')
		expect(feed).toHaveLength(1)		
		setImmediate(() => {
			// within `setImmediate` all of the promises have been exhausted    
			feed.update()    			
			expect(feed.find(Header)).toHaveLength(1)
			expect(feed.find(Stories)).toHaveLength(1)
			// have to call `done` here to let Jest know the test is done    
			done()  
		})
		
	})
})