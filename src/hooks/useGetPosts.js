// React
import { useEffect, useState, useContext } from 'react'

// API
import apiCall from '../api/apiCall'

// Hook as function
import ResetDate from './ResetDate'  

// Context
import LanguageContext from '../context/language'
 

export const useGetPosts = ({ token = false, user, url, idUser = '' }) => {	

	const [posts, setPosts] = useState([])
	const [loading, setLoading]	= useState(true)
	const [page, setPage] = useState(1)
	const { language } = useContext(LanguageContext)

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async (numberPage) => {
 		let urlDirection = ''
 		let addHeaders = true
 		 		
 		if (!token) {
 			urlDirection = 'get-posts/popular/'
 			addHeaders = false
 		} else if (idUser.length !== 0) {
 			urlDirection = `get-posts/${idUser}/${numberPage}/`
 		} else {
 			urlDirection = `posts/${numberPage}/`
 		}
		 
		let postsResponse = ''
		if (addHeaders) {
			postsResponse = await apiCall({
				urlDirection,			
				headers: {
					'Authorization': `Token ${token}`
				}			
			})			
		} else {
			postsResponse = await apiCall({
				urlDirection				
			})			
		}

		const dataResponse = await postsResponse.json()
		console.log(dataResponse)

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
		fetchAndOrderData(page)
	}, [])

	const handleNextPage = where => {
		// where === true derecha else izquierda
		if (where) {
			setLoading(true)
			fetchAndOrderData(page+1)
			setPage(page+1)
		} else if (page>2) {
			setLoading(true)
			fetchAndOrderData(page-1)
			setPage(page-1)
		}		
	}

	return {
		posts,
		loading,
		handleNextPage
	}
}