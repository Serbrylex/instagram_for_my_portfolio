// React
import { useEffect, useState } from 'react'

// API
import apiCall from '../api/apiCall' 
 
// Assets
import imageTest from '../assets/images/agujero-del-tiempo.jpg' 
 
// Hooks
//import ResetDate from './ResetDate'


export const useGetStoriesByUser = ({ token, user, url, idUser = '' }) => {	
	const [stories, setStories] = useState([])

	// Serializa la información obtenida por el backend
	const ReseteaEachStorie = (storie, url, indice) => {		

		return({
			user: {
				id: storie.user.id,
				picture: url + storie.image,
				username: storie.user.username		
			},		
			eventAddOrGo: `/stories_by_user/${indice}` 
		})
	}

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async () => {
		const storiesResponse = await apiCall({
			urlDirection: `stories/get-stories/${idUser}/`,
			headers: {
				'Authorization': `Token ${token}`
			}
		})

		const dataResponse = await storiesResponse.json()		
			
		let storiesData = [...dataResponse]	

		if (storiesResponse.ok) {						
					
			let pasa = true
			if (storiesData?.length) {					
									
				// Iteramos sobre las Stories
				for (var i = 0; i < storiesData.length; i++) {									
					// Reseteo las imagenes
					storiesData[i] = ReseteaEachStorie(storiesData[i], url, i)			
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