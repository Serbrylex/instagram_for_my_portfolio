// React
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'

// API
import apiCall from '../../api/apiCall'

// Assets 
import {
	PostOptionsPage, PostOptionsContainer, Option
} from './style'

// Context
import ThemeContext from '../../context/theme'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'


const PostOptions = ({ setShowMenuPost, post_data, isAuth, setShowPost }) => {

	// Context
 	const { theme } = useContext(ThemeContext) 	
	
	// Variables
	const color = theme === 'light' ? 'black' : 'white'
	const history = useHistory()	

	// Language hook
 	const words = useGetWords({ component: 'post_options' }) 		 		

	const handleUnFollowUser = async () => {
		let response = await apiCall({			
			urlDirection: `user/stop_following_to/${post_data.user_id}/`, 			
			method: 'DELETE',
			headers: {
				'Authorization': `Token ${isAuth.access_token}`,				
			}
		}) 

		console.log(response)

		if (response.ok) {
			history.go(0)
		}
	}

	const handleDeletePost = async () => {
		let response = await apiCall({			
			urlDirection: `delete-post/${post_data.post_id}/`, 			
			method: 'DELETE',
			headers: {
				'Authorization': `Token ${isAuth.access_token}`,
			}
		}) 

		console.log(response)

		if (response.ok) {
			setShowPost(false)
		}		
	}

	return(
		<PostOptionsPage theme={theme}>
			<PostOptionsContainer theme={theme}>								
				<Option onClick={()=>history.push(`/profile/${post_data.username}`)} theme={theme} color={color}>
					{words?.see_profile}
				</Option>
				{
					isAuth.user.username === post_data.username &&						
					<Option onClick={()=>handleDeletePost()} color={'red'} theme={theme}>
						{words?.delete_post}
					</Option>
				}
				{
					isAuth.user.username !== post_data.username &&						
					<Option onClick={()=>handleUnFollowUser()} color={'red'} theme={theme}>
						{words?.stop_following}
					</Option>
				}				
				<Option onClick={()=>setShowMenuPost(false)} color={color} end={'true'} theme={theme}>
					{words?.cancel}						
				</Option>				
			</PostOptionsContainer>
		</PostOptionsPage>
	)
}

export default PostOptions