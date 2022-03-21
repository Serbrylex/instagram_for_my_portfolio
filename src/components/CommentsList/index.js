// React
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Assets
import {
	LikesContainer, HeaderSection, Close, Title, CommentList
} from './style'

import { CgArrowLeft } from 'react-icons/cg'

// Components
import Comment from '../Comment'
import SearchBar from '../SearchBar'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useGetWords } from '../../hooks/useGetWords'

// API
import apiCall from '../../api/apiCall'


const CommentsList = ({ setShowComments, post_id }) => {
	
	// Context
	const user = useSelector(store => store.user)
 	const { theme, url } = useSelector(store => store.preference) 	

	// Variables
	const size = '25px'	
	const comment = useInputValue('Agrega un comentario')
	const color = theme === 'light' ? 'black' : 'white'

	// Language hook
 	const words = useGetWords({ component: 'comments_list' }) 		
	
	const [comments, setComments] = useState([])

	const handleSendComment = async () => {
		await apiCall({			
			url: url + '/set-comment/',
			method: 'POST',
			headers: {
				'Authorization': `Token ${user.access_token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'post_id': post_id,
				'comment': comment.value
			})
		})		
		
		setComments([
			...comments,
			{
				comment: comment.value,
				picture: user.user.profile.picture,
				user_id: user.user.user_id,
				username: user.user.username
			}
		])

		comment.setValue('')
	}

	const handleFetchComments = async () => {
		const token = `Token ${user.access_token}`
		
		let data = await apiCall({			
			url: `${url}/get-comments/${post_id}/`, 						
			headers: {
				'Authorization': token,				
			}
		})

		data = await data.json()		

		setComments(data)
	}

	useEffect(()=>{
		handleFetchComments()
	}, [])

	return(
		<LikesContainer theme={theme}>
			<HeaderSection>			
				<Close onClick={()=>setShowComments(false)}>
					<CgArrowLeft size={size} color={color} />
				</Close>
				<Title>{words?.comments}</Title>				
			</HeaderSection>


			<CommentList>
				{comments?.map((comment, index)=>(
					<Comment key={index} comment={comment}/>
				))}	
			</CommentList>

			<SearchBar search={comment} fixed='bottom' handleSendComment={handleSendComment}/>
			
		</LikesContainer>
	)
}

export default CommentsList