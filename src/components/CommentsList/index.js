// React
import { useState, useEffect, useContext } from 'react'

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

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'

const CommentsList = ({ url, setShowComments, post_id }) => {
	const size = '25px'	
	const comment = useInputValue('Agrega un comentario')
	const { isAuth } = useContext(UserContext)
	const [comments, setComments] = useState([])
	const [focus, setFocus] = useState(false)	

	const handleSendComment = async () => {
		let data = await apiCall({			
			urlDirection: 'set-comment/',
			method: 'POST',
			headers: {
				'Authorization': `Token ${isAuth.access_token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'post_id': post_id,
				'comment': comment.value,
				'user_id': isAuth.user.id
			})
		})
		handleFetchComments()
		comment.setValue('')
	}

	const handleFetchComments = async () => {
		const token = `Token ${isAuth.access_token}`
		
		let data = await apiCall({			
			urlDirection: `get-comments/${post_id}/`, 						
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
		<LikesContainer>
			<HeaderSection>			
				<Close onClick={()=>setShowComments(false)}>
					<CgArrowLeft size={size}/>
				</Close>
				<Title>Comentarios</Title>				
			</HeaderSection>


			<CommentList>
				{comments?.map((comment, index)=>(
					<Comment key={index} comment={comment} url={url}/>
				))}	
			</CommentList>

			<SearchBar search={comment} setFocus={setFocus} fixed='bottom' url={url} handleSendComment={handleSendComment}/>
			
		</LikesContainer>
	)
}

export default CommentsList