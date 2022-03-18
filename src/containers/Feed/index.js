// React
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
 
// Assets  
import {   
	FeedContainer, FeedImages, LoadingBottom, ImageLoading,
	ContainerButtonFor, ButtonToSearch, LinkFor, ButtonsPagination, ButtonPage
} from './style'

// Components
import Header from '../../components/Header' 
import Footer from '../../components/Footer'
import Stories from '../../components/Stories'
import Loading from '../../components/Loading'
import PostsContainer from '../../components/PostsContainer'

// Hooks
import { useGetStories } from '../../hooks/useGetStories'
import { useGetPosts } from '../../hooks/useGetPosts' 

// Icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

let element = undefined
 
const Feed = () => {		
 	
 	// Context
	const user = useSelector(store => store.user)
 	const { theme, url } = useSelector(store => store.preference)
 	
	// Stories and posts
	let stories = useGetStories({ 
		token: user.access_token, 
		user: user.user,
		url: url
	})	
		
	// Es el hook que va a hacer las peticiones
	const posts = useGetPosts({ 
		token: user.access_token,
		user: user.user, 
		url: url
	})
			

	return(
		<FeedContainer theme={theme}>
			<Helmet>
                <title>Instagram</title>
				<meta name='description' content={`Feed de instagram`} />
			</Helmet>
			<Header url={url}/>

			{posts.loading ? 
				<Loading /> :
				<>
					<Stories add='first' stories={stories} />					
					

					<FeedImages theme={theme}>
						{posts.posts.length > 0 ?
							<PostsContainer posts={posts.posts} /> :
							<ContainerButtonFor>
								<ButtonToSearch>No sigues a nadie, <LinkFor to='/search'>presiona aquí para buscar gente</LinkFor></ButtonToSearch>
							</ContainerButtonFor>
						}
					</FeedImages>	 				
					<ButtonsPagination>
						<ButtonPage onClick={()=>posts.handleNextPage(false)}><MdKeyboardArrowLeft /></ButtonPage>
						<ButtonPage onClick={()=>posts.handleNextPage(true)}><MdKeyboardArrowRight /></ButtonPage>
					</ButtonsPagination>
				</>
			}			
			<Footer />
		</FeedContainer>
	)
}
 
export default Feed