// React
import { useEffect, useState, useContext } from 'react'

// API
import apiCall from '../api/apiCall' 

// Assets
import imageTest from '../assets/images/agujero-del-tiempo.jpg' 
 
// Hooks
import ResetDate from './ResetDate' 

// Context
import LanguageContext from '../context/language'


export const useGetAllStories = ({ token, user, url, byUser = false }) => {	

	const [stories, setStories] = useState([])
	const { language } = useContext(LanguageContext)

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async () => {
		const storiesResponse = await apiCall({
			urlDirection: byUser ? `stories/get-stories/${user.username}/` : 'stories/get-all-stories/',
			headers: {
				'Authorization': `Token ${token}`
			}
		})

		const dataResponse = await storiesResponse.json()		
		
		let storiesData = [...dataResponse]	

		// Ponemos al usuario al inicio xd
		let storiesOrderedByUser = [{
			user: {
				id: user.id,
				picture: user.profile.picture ? url + user.profile.picture : imageTest,
				username: user.username		
			},
			stories: []
		}]

		if (storiesResponse.ok) {						
								
			if (storiesData?.length) {					
									
				// Iteramos sobre las Stories para ordenarlas por usuario
				for (var i = 0; i < storiesData.length; i++) {				
					if (storiesData[i]?.user) {
						
					 	let passport = false
						for (var x = 0; x < storiesOrderedByUser.length; x++) {
							if (storiesData[i].user.username === storiesOrderedByUser[x].user.username) {
								passport = true
								storiesOrderedByUser[x].stories.push({
									id: storiesData[i].id,
									image: url + storiesData[i].image,
									created: ResetDate({ created: storiesData[i].created, language })
								})
							}
						}	

						// Si no tiene pasaporte (xd) le damos uno asdflkj
						// Si no hay username que haga match entra aquí
						if (!passport) {
							storiesOrderedByUser.push({
								user: {
									id: storiesData[i].user.id,
									picture: storiesData[i].user.profile.picture ? url + storiesData[i].user.profile.picture : imageTest,
									username: storiesData[i].user.username		
								},
								stories: [{
									id: storiesData[i].id,
									image: url + storiesData[i].image,
									created: ResetDate({ created: storiesData[i].created, language })
								}]
							})														
						}
						
					}
				}					
			}
		}				
		setStories(storiesOrderedByUser)
	}

	useEffect(()=>{
		fetchAndOrderData()
	}, [])

	return(stories)
}