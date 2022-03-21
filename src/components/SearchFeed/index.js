// React
import React from 'react'

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


// Si kindOfView === true, significa que le dio click y debe de haber un feed como feed ('/')
// Si es false significa que son simples imagenes
const SearchFeed = ({ posts, kindOfView, setKindOfView, loading, url}) => {	 	

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
			</FeedContainer>
		)
	} else {
		return (
			<FeedPostsGrid posts={posts} setKindOfView={setKindOfView} />
		)
	}
}

export default SearchFeed