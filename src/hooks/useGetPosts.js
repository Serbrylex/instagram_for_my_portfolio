// React
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// API
import apiCall from '../api/apiCall'

// Hook as function
import ResetDate from './ResetDate'  

// Actions
import { setFeed } from '../actions'
 

export const useGetPosts = ({ token = false, idUser = '' }) => {	

	const [posts, setPosts] = useState([])
	const [loading, setLoading]	= useState(true)
	const [page, setPage] = useState(1)

	const { url, language } = useSelector(store => store.preference)
	const feed = useSelector(store => store.feed.data)
	const dispatch = useDispatch()

	// Hace la petición y ordena los elementos (user first)
	const fetchAndOrderData = async (numberPage) => { 		
 		let addHeaders = true
 		let urlPlus = ''
 		 		
 		if (idUser === 'popular' || !token) {
 			// GET post user, idUser = username
 			urlPlus = url + `/get-posts/popular/${numberPage}/`
 			addHeaders = false 		
 		} else if (idUser.length !== 0 && token) {
 			urlPlus = url + `/get-posts/${idUser}/`
 		} else if (token) {
 			urlPlus = url + `/posts/${numberPage}/`
 		}

 		console.log(urlPlus)
		 
		let postsResponse = ''
		if (addHeaders) {
			postsResponse = await apiCall({
				url: urlPlus,			
				headers: {
					'Authorization': `Token ${token}`
				}			
			})			
		} else {
			postsResponse = await apiCall({
				url: urlPlus
			})			
		}

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
			
			if (feed !== postsData)	{
				dispatch(setFeed(postsData))
				setPosts(postsData)			
			}
		}
		setLoading(false)
	}

	useEffect(()=>{						
		fetchAndOrderData(page)
	}, [idUser])

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