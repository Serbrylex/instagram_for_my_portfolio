// React
//import { useState, useContext, useEffect } from 'react'

// Assets
import {
	FeedContainer, FeedImages
} from './style'

// import { RiCheckboxMultipleBlankLine } from 'react-icons/ri'

// Components 
import FeedPostsGrid from '../../components/FeedPostsGrid'
import Loading from '../../components/Loading'
import Footer from '../../components/Footer'
import Post from '../../components/Post' 

// API
//import apiCall from '../../api/apiCall'

// Context
//import UserContext from '../../context/users'


// Si kindOfView === true, significa que le dio click y debe de haber un feed como feed ('/')
// Si es false significa que son simples imagenes
const SearchFeed = ({ posts, kindOfView, setKindOfView, loading, url }) => {	
	
 	// Context auth
 	//const { isAuth } = useContext(UserContext)	

	if (loading) {
		return(
			<Loading />
		)
	}

	if (kindOfView) {
		return(
			<FeedContainer>			
				<FeedImages>
					{posts?.map((post, index)=>(
						<Post key={index} post={post} url={url}/>
					))}					
				</FeedImages>
				<Footer />
			</FeedContainer>
		)
	} else {
		return (
			<FeedPostsGrid posts={posts} setKindOfView={setKindOfView} />
		)
	}
}

export default SearchFeed