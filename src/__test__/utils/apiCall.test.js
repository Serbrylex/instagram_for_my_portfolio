import apiCall from '../../api/apiCall'

// Possible solution: https://www.leighhalliday.com/mock-fetch-jest

/*
	En realidad no se hacen peticiones a una api, eso seria probar la api
	y no le front-end que es para lo que sirve jest, por lo que jest
	simula una llamada a una api, atrapando los "fetch reales"
*/
describe('fetch API', () => {
	beforeEach(() => {
		fetch.resetMocks()
		fetch.doMock()
    	jest.useFakeTimers()
	})

	test('Llamar una API y retornar los datos', async () => {
		fetch.mockResponseOnce(async () => {
			jest.advanceTimersByTime(10)
			return JSON.stringify({ data: '12345' })
		})
		
		//assert on the response
		const res = await apiCall({ url: 'https://google.com' })		
		const data = await res.json()		
		expect(data.data).toEqual('12345')
		
		
		
		//assert on the times called and arguments given to fetch
    	expect(fetch.mock.calls.length).toEqual(1)
    	expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
	})
})