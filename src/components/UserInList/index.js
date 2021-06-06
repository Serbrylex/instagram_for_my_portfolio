// React
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { 
	LikeContainer, Picture, Image, Username, Button
} from './style'

// API 
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'


const UserInList = ({ username, user_id, picture, follow }) => {
 
	const history = useHistory()
	const [alreadyFollowing, setAlreadyFollowing] = useState(follow)
	
	// Context
	const { isAuth } = useContext(UserContext)
 	const { theme } = useContext(ThemeContext) 	

	// Language hook
 	const words = useGetWords({ component: 'user_in_list' })

	const handleFollowing = async (what) => {
		let response = ''
		if (what) {
			response = await apiCall({
				urlDirection: `user/follow_to/${user_id}/`, 
				method: 'POST', 
				headers: {
					'Authorization': `Token ${isAuth.access_token}`
				}
			})
		} else {
			response = await apiCall({
				urlDirection: `user/stop_following_to/${user_id}/`, 
				method: 'DELETE', 
				headers: {
					'Authorization': `Token ${isAuth.access_token}`
				}
			})
		}		

		setAlreadyFollowing(what)
	}

	return(
		<LikeContainer>
			<Picture onClick={()=>history.push(`/profile/${username}`)}>
				<Image src={picture} alt={username} />
			</Picture>
			<Username onClick={()=>history.push(`/profile/${username}`)} theme={theme}>
				{username}
			</Username>

			{alreadyFollowing ?
				<Button onClick={()=>handleFollowing(false)} theme={theme}>
					{words?.following}
				</Button> :
				<Button onClick={()=>handleFollowing(true)} theme={theme}>
					{words?.follow}
				</Button>				
			}
		</LikeContainer>
	)
}

export default UserInList