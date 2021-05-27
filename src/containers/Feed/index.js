// React
import { useState, useContext, useEffect } from 'react'

// Assets
import { 
	FeedContainer, FeedImages, LoadingBottom, ImageLoading
} from './style'

import circle from '../../images/circle.svg'

// Components
import Header from '../../components/Header' 
import Footer from '../../components/Footer'
import Stories from '../../components/Stories'
import Loading from '../../components/Loading'
import PostsContainer from '../../components/PostsContainer'

// Context
import UserContext from '../../context/users'

// Hooks
import { useGetStories } from '../../hooks/useGetStories'
import { useGetPosts } from '../../hooks/useGetPosts' 

let element = undefined
 
const Feed = ({ url }) => {	

 	// Context auth 
 	const { isAuth } = useContext(UserContext) 	
	
	// se volvera false cuando los fetchs correspondientes se realicen correctamente
	const [loading, setLoading] = useState(true)
	const [bottomLoading, setBottomLoading] = useState(false)		

	// Page number
	const [page, setPage] = useState(1)

	const [indexOfReturn, setIndexOfReturn] = useState(1)
 	
	// Stories and posts
	let stories = useGetStories({ 
		token: isAuth.access_token, 
		user: isAuth.user, 
		url: url
	})	
	
	// Aquí se van a agrupar todos los posts	
	const [allPosts, setAllPosts] = useState([])
	// Aquí se van a agrupar los 5 posts que se van a mostrar en ese momento
	const [actualPosts, setActualPosts] = useState([])
	// Es el hook que va a hacer las peticiones
	const postsFetch = useGetPosts({ 
		token: isAuth.access_token, 
		page,
		user: isAuth.user, 
		url: url
	})
	
	useEffect(()=>{		
		setActualPosts(allPosts.slice((page*5)-5, page*5))
		setBottomLoading(false)
		if (element?.scrollTop) {
			element.scrollTop = element.clientHeight * 0.1
		}
	}, [allPosts])

	useEffect(()=>{	
		console.log('Me estoy renderizando ', page)
		if (postsFetch.posts?.length) {
			setAllPosts([...allPosts, ...postsFetch.posts])			
			setLoading(false)			
		}
	}, [postsFetch.posts])
	
	const handleScrollFetchData = e => {
		
		element = e.target
		if (!bottomLoading) {
		    if (element.scrollHeight - element.scrollTop === element.clientHeight && indexOfReturn === page) {
		      	// do something at end of scroll
		      	
		    	setBottomLoading(true)							
				postsFetch.getPosts(page + 1)
				setPage(page + 1)		
				setIndexOfReturn(indexOfReturn + 1)	

			} else if (element.scrollHeight - element.scrollTop === element.clientHeight && indexOfReturn < page) {
				console.log('Baja baja')
				setActualPosts(allPosts.slice(((indexOfReturn + 1) * 5) - 5, (indexOfReturn + 1) * 5))
		    	setIndexOfReturn(indexOfReturn + 1)	
		    	element.scrollTop = element.clientHeight * 0.1

		    } else if (element.scrollTop === 0 && indexOfReturn > 1) {
		    	console.log('Sube')
		    	setActualPosts(allPosts.slice(((indexOfReturn - 1) * 5) - 5, (indexOfReturn - 1) * 5))
		    	setIndexOfReturn(indexOfReturn - 1)	
		    	element.scrollTop = element.clientHeight * 0.9
		    }
		}
	}

	return(
		<FeedContainer onScroll={(e)=>handleScrollFetchData(e)}>
			<Header />

			{loading ? 
				<Loading /> :
				<>
					<Stories add='first' stories={stories} url={url} />					

					<FeedImages>
						<PostsContainer posts={actualPosts} url={url}/>
					</FeedImages>
					{bottomLoading && 
						<LoadingBottom>
							<ImageLoading src={circle}/>
						</LoadingBottom>
					}
				</>
			}

			<Footer />
		</FeedContainer>
	)
}
 
export default Feed