import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/ProviderMock'
import FeedMock from '../__mocks__/FeedMock'
import Feed from '../../containers/Feed'


describe('<Feed />', () => {
	test('Render product', () => {
		const feed = shallow(
			<ProviderMock>
				<Feed />
			</ProviderMock>
		)

		expect(feed.length).toEqual(1)
	})

	test('Comprobar el boton de comprar', () => {
		//const handleAddToCart = jest.fn()
		const feed = mount(
			<ProviderMock>
				<Feed />
			</ProviderMock>
		)

		expect(feed.toJSON()).toMatchSnapshot()
	})
})