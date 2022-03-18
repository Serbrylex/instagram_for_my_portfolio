// React
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// API
import apiCall from '../api/apiCall' 
 
// Assets
import imageTest from '../assets/images/agujero-del-tiempo.jpg' 
 
// Hooks
//import ResetDate from './ResetDate'


export const useGetStoriesByUser = ({ token = false, user, idUser = '' }) => {	
	const [stories, setStories] = useState([])
	const url = useSelector(store => store.preference.url)

	// Serializa la información obtenida por el backend
	const ReseteaEachStorie = (storie, url, indice) => {		 

		return({
			user: {
				id: storie.user.id,
				picture: url + storie.image,
				username: storie.user.username		
			},		
			eventAddOrGo: `/stories_by_user/${storie.user.username}/${indice}` 
		})
	}

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async () => {
		const storiesResponse = await apiCall({
			url: url + `/stories/get-stories/${idUser}/`,	
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
				storiesData = []
			}
		}
		console.log('useGetStoriesByUser')
		console.log(storiesData)
		setStories(storiesData)
	}

	useEffect(()=>{
		fetchAndOrderData()
	}, [idUser])

	return(stories)
}