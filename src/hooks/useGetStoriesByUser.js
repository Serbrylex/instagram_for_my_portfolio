// React
import { useEffect, useState } from 'react'

// API
import apiCall from '../api/apiCall' 
 
// Assets
//import imageTest from '../images/agujero-del-tiempo.jpg' 
 
// Hooks
//import ResetDate from './ResetDate'


export const useGetStoriesByUser = ({ token, user, url, idUser = '' }) => {	
	const [stories, setStories] = useState([])

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async () => {
		const storiesResponse = await apiCall({
			urlDirection: `stories/get-stories/${idUser}`,
			headers: {
				'Authorization': `Token ${token}`
			}
		})

		const dataResponse = await storiesResponse.json()		
		
		let storiesData = [...dataResponse]	

		if (storiesResponse.ok) {						
									
			if (storiesData?.length) {					
									
				// Iteramos sobre las Stories
				for (var i = 0; i < storiesData.length; i++) {				
					
				}					
				
			} else {
				storiesData = []
			}
		}
		
		setStories(storiesData)
	}

	useEffect(()=>{
		fetchAndOrderData()
	}, [])

	return(stories)
}