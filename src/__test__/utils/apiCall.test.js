import apiCall from '../../api/apiCall'

/*
	En realidad no se hacen peticiones a una api, eso seria probar la api
	y no le front-end que es para lo que sirve jest, por lo que jest
	simula una llamada a una api, atrapando los "fetch reales"
*/
describe('fetch API', () => {
	beforeEach(() => {
		fetch.resetMocks()
	})

	test('Llamar una API y retornar los datos', () => {
		fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

		apiCall('https://google.com')
			.then((response) => {
				expect(response.data).toEqual('12345')
			})

		expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
	})
})