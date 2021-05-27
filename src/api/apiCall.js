const apiCall = async ({ urlDirection = '', method = "get", body, headers }) => {	
	
	const url = 'http://127.0.0.1:8000/' + urlDirection
	//const url = 'http://newinstagrambyme.herokuapp.com/' + urlDirection
	
	try{

		const response = await fetch(url, {
			method,
			headers,
			body,
		})
		
		return response
	}catch(error){	
		return Promise.reject(error)
	}

}

export default apiCall