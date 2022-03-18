// React
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// API
import apiCall from '../../api/apiCall'

// Assets 
import {
	PostOptionsPage, PostOptionsContainer, Option
} from './style'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'


const PostOptions = ({ setShowMenuPost, post_data, setShowPost }) => {

	// Context
 	const { theme, url } = useSelector(store => store.preference)
 	const user = useSelector(store => store.user)
	
	// Variables
	const color = theme === 'light' ? 'black' : 'white'
	const history = useNavigate()	

	// Language hook
 	const words = useGetWords({ component: 'post_options' }) 		 		

	const handleUnFollowUser = async () => {
		let response = await apiCall({			
			url: `${url}/user/stop-following-to/${post_data.user_id}/`, 			
			method: 'DELETE',
			headers: {
				'Authorization': `Token ${user.access_token}`,				
			}
		}) 

		console.log(response)

		if (response.ok) {			
			setShowMenuPost(false)
		}
	}

	const handleDeletePost = async () => {
		let response = await apiCall({			
			url: `${url}/delete-post/${post_data.post_id}/`, 			
			method: 'DELETE',
			headers: {
				'Authorization': `Token ${user.access_token}`,
			}
		}) 

		console.log(response)

		if (response.ok) {
			setShowPost(false)
			setShowMenuPost(false)
		}		
	}

	return(
		<PostOptionsPage theme={theme}>
			<PostOptionsContainer theme={theme}>								
				<Option onClick={()=>history(`/profile/${post_data.username}`)} theme={theme} color={color}>
					{words?.see_profile}
				</Option>
				{
					user.user.username === post_data.username &&						
					<Option onClick={()=>handleDeletePost()} color={'red'} theme={theme}>
						{words?.delete_post}
					</Option>
				}
				{
					user.user.username !== post_data.username &&						
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