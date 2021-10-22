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
import { useGetWords } from '../../hooks/useGetWords'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'


const CommentsList = ({ url, setShowComments, post_id }) => {
	
	// Context
	const { isAuth } = useContext(UserContext)
 	const { theme } = useContext(ThemeContext) 	

	// Variables
	const size = '25px'	
	const comment = useInputValue('Agrega un comentario')
	const color = theme === 'light' ? 'black' : 'white'

	// Language hook
 	const words = useGetWords({ component: 'comments_list' }) 		
	
	const [comments, setComments] = useState([])

	const handleSendComment = async () => {
		await apiCall({			
			urlDirection: 'set-comment/',
			method: 'POST',
			headers: {
				'Authorization': `Token ${isAuth.access_token}`,
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
				picture: isAuth.user.profile.picture,
				user_id: isAuth.user.user_id,
				username: isAuth.user.username
			}
		])

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
		<LikesContainer theme={theme}>
			<HeaderSection>			
				<Close onClick={()=>setShowComments(false)}>
					<CgArrowLeft size={size} color={color} />
				</Close>
				<Title>{words?.comments}</Title>				
			</HeaderSection>


			<CommentList>
				{comments?.map((comment, index)=>(
					<Comment key={index} comment={comment} url={url}/>
				))}	
			</CommentList>

			<SearchBar search={comment} fixed='bottom' url={url} handleSendComment={handleSendComment}/>
			
		</LikesContainer>
	)
}

export default CommentsList