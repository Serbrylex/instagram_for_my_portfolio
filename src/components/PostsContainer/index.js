// React
import React, { useState, useEffect } from 'react'

// Assets
import {
	PostsFor
} from './style'

// Components
import Post from '../../components/Post'

const PostsContainer = ({ posts, isMoving, scrollTop }) => {

	const [postsFinal, setPostsFinal] = useState([])	

	useEffect(()=>{
		if (posts?.length) {
			setPostsFinal(posts) 
		}
	}, [posts])

	return(
		<PostsFor>
			{postsFinal?.map((post, index)=>(
				<Post key={index} post={post} isMoving={isMoving} scrollTop={scrollTop}/>
			))}
		</PostsFor>
	)
}

export default PostsContainer