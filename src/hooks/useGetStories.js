// React
import { useEffect, useState } from 'react'

// API
import apiCall from '../api/apiCall' 

// Assets
import imageTest from '../assets/images/agujero-del-tiempo.jpg' 


export const useGetStories = ({ token = false, user, url }) => {	

	const [stories, setStories] = useState([])	

	// Serializa la información obtenida por el backend
	const ReseteaEachStorie = (storie, url, indice) => {		

		return({
			user: {
				id: storie.user.id,
				picture: url + storie.user.profile.picture,
				username: storie.user.username		
			},		
			eventAddOrGo: `/stories/${indice}`
		})
	}

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async () => {
		let storiesResponse = ''

		if (!token) {
			storiesResponse = await apiCall({
				urlDirection: 'stories/get-public-stories/',
			})
		} else {
			storiesResponse = await apiCall({
				urlDirection: 'stories/get-stories/',
				headers: {
					'Authorization': `Token ${token}`
				}
			})			
		}

		const dataResponse = await storiesResponse.json()			
		let storiesData = [...dataResponse]			
		console.log(dataResponse)

		if (storiesResponse.ok) {						
					
			let pasa = true
			if (storiesData?.length) {					
									
				// Iteramos sobre las Stories
				for (var i = 0; i < storiesData.length; i++) {				
					if (storiesData[i]?.user) {
										
						if ((user?.username) && (storiesData[i].user.username === user.username)) {
							pasa = false								

							if (i !== 0) {
								storiesData[0] = storiesData[i]
								storiesData[i] = storiesData[0]
								// Reseteo las imagenes de nuevo (?)
								storiesData[0] = ReseteaEachStorie(storiesData[0], url, 0)
							}
						}

						// Reseteo las imagenes
						storiesData[i] = ReseteaEachStorie(storiesData[i], url, i)
					}

					for (var x = i + 1; x < storiesData.length; x++) {
						if (storiesData[i].user.username === storiesData[x].user.username) {
							storiesData.splice(x, x+1)
						}
					}
				}			

				if (!user?.username) {
					pasa = false
				}

				// Si pasa === true means que no encontro al usuario dentro de las stories
				// Lo que significa que no tiene stories y hay que agregar el "botton"
				// add images
				if (pasa) {
					storiesData = [{							
						user: {
							id: user.id,
							picture: url + user.profile.picture,
							username: user.username
						},
						eventAddOrGo: '/add-storie'
					}, ...storiesData]
				}

			// Entramos aquí si no hay stories que devolver
			// Devolvemos al usuario
			} else {
				storiesData = [{
						user: {
							id: user.id,
							username: user.username,
							picture: user.profile.picture ? `${url}${user.profile.picture}` : imageTest
						},
						eventAddOrGo: '/add-storie'
				}]
			}
		}
		
		setStories(storiesData)
	}

	useEffect(()=>{
		fetchAndOrderData()
	}, [])

	return(stories)
}