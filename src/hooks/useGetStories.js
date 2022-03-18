// React
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// API
import apiCall from '../api/apiCall' 

// Assets
import imageTest from '../assets/images/agujero-del-tiempo.jpg' 

import { setStorie } from '../actions'


export const useGetStories = ({ token = false, user }) => {	

	const [stories, setStories] = useState([])	
	const url = useSelector(store => store.preference.url)
	const data = useSelector(store => store.storie.data)

	const dispatch = useDispatch()

	// Serializa la información obtenida por el backend
	const ReseteaEachStorie = (storie, indice) => {		

		return({
			user: {
				id: storie.user.id,
				picture: storie.user.profile?.picture ? url + storie.user.profile.picture : imageTest,
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
				url: url + '/stories/get-public-stories/',
			})
		} else {
			storiesResponse = await apiCall({
				url: url + '/stories/get-stories/',
				headers: {
					'Authorization': `Token ${token}`
				}
			})			
		}
		const dataResponse = await storiesResponse.json()					
		let storiesData = []			

		if (storiesResponse.ok) {						
			storiesData = [...dataResponse]
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
								storiesData[0] = ReseteaEachStorie(storiesData[0], 0)
							}
						}

						// Reseteo las imagenes
						storiesData[i] = ReseteaEachStorie(storiesData[i], i)
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
			}			
		}	

		if (!!token) {
			// Si el usuario esta logeado (!!token)
			storiesData = [{							
				user: {
					id: 0,
					picture: imageTest,
					username: 'Add story'
				},
				eventAddOrGo: '/add-storie'
			}, ...storiesData]
		}
		dispatch(setStorie(storiesData))
		setStories(storiesData)		
	}

	useEffect(()=>{
		if (data.length === 0) {
			fetchAndOrderData()
		} else {
			setStories(data)
		}
	}, [])

	return(stories)
}