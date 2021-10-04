// React
import { useState, useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
 
// Assets  
import {   
	FeedContainer, FeedImages, LoadingBottom, ImageLoading,
	ContainerButtonFor, ButtonToSearch, LinkFor
} from './style'

// Components
import Header from '../../components/Header' 
import Footer from '../../components/Footer'
import Stories from '../../components/Stories'
import Loading from '../../components/Loading'
import PostsContainer from '../../components/PostsContainer'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

// Hooks
import { useGetStories } from '../../hooks/useGetStories'
import { useGetPosts } from '../../hooks/useGetPosts' 

let element = undefined
 
const Feed = ({ url }) => {		
 	
 	// Context
	const { isAuth } = useContext(UserContext) 	 	
 	const { theme } = useContext(ThemeContext) 	 		
 	
	// Stories and posts
	let stories = useGetStories({ 
		token: isAuth.access_token, 
		user: isAuth.user, 
		url: url
	})	
		
	// Es el hook que va a hacer las peticiones
	const posts = useGetPosts({ 
		token: isAuth.access_token,
		user: isAuth.user, 
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
					<Stories add='first' stories={stories} url={url} />					

					<FeedImages theme={theme}>
						{posts.posts.length > 0 ?
							<PostsContainer posts={posts.posts} url={url} /> :
							<ContainerButtonFor>
								<ButtonToSearch>No sigues a nadie, <LinkFor to='/search'>presiona aquí para buscar gente</LinkFor></ButtonToSearch>
							</ContainerButtonFor>
						}
					</FeedImages>					
				</>
			}

			<Footer />
		</FeedContainer>
	)
}
 
export default Feed