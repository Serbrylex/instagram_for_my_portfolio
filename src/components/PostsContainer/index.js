// React
import { useState, useEffect } from 'react'

// Assets
import {
	PostsFor
} from './style'

// Components
import Post from '../../components/Post'

const PostsContainer = ({ posts, url }) => {

	const [postsFinal, setPostsFinal] = useState([])	

	useEffect(()=>{
		if (posts?.length) {
			setPostsFinal(posts)
		}
	}, [posts])

	return(
		<PostsFor>
			{postsFinal?.map((post, index)=>(
				<Post key={index} post={post} url={url} />
			))}
		</PostsFor>
	)
}

export default PostsContainer