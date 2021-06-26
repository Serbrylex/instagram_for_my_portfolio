// React
import { useEffect, useState, useContext } from 'react'

// API
import apiCall from '../api/apiCall'

// Hook as function
import ResetDate from './ResetDate'  

// Context
import LanguageContext from '../context/language'
 

export const useGetPosts = ({ token, user, url, idUser = '' }) => {	

	const [posts, setPosts] = useState([])
	const [loading, setLoading]	= useState(true)
	const { language } = useContext(LanguageContext)

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async () => {
 
		let urlDirection = idUser.length !== 0 ? `get-posts/${idUser}/` : `posts/`
		const postsResponse = await apiCall({
			urlDirection,
			headers: {
				'Authorization': `Token ${token}`
			}
		})

		const dataResponse = await postsResponse.json()
		
		let postsData = [...dataResponse]	
		

		if (postsResponse.ok) {						
									
			if (postsData?.length) {
									
				// Iteramos sobre las posts
				for (var i = 0; i < postsData.length; i++) {				

					postsData[i].picture = url + postsData[i].picture
					postsData[i].created = ResetDate({ created: postsData[i].created, language })

					for (var x = 0; x < postsData[i].images.length; x++) {
						postsData[i].images[x] = url + postsData[i].images[x].image
					}
				}					
			}
		
			setPosts(postsData)
			setLoading(false)
		}

	}

	useEffect(()=>{		
		fetchAndOrderData()
	}, [])

	return {
		posts,
		loading
	}
}