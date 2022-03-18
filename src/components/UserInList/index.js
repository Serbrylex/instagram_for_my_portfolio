// React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { 
	LikeContainer, Picture, Image, Username, Button
} from './style'

// API 
import apiCall from '../../api/apiCall'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'


const UserInList = ({ username, user_id, picture, follow }) => {
 
	const history = useNavigate()
	const [alreadyFollowing, setAlreadyFollowing] = useState(follow)
	
	// Context
	const user = useSelector(store => store.user) 	
	const { url, theme } = useSelector(store => store.preference)

	// Language hook
 	const words = useGetWords({ component: 'user_in_list' })

	const handleFollowing = async (what) => {
		let response = ''
		if (what) {
			response = await apiCall({
				url: `${url}/user/follow-to/${user_id}/`, 
				method: 'POST', 
				headers: {
					'Authorization': `Token ${user.access_token}`
				}
			})
		} else {
			response = await apiCall({
				url: `${url}/user/stop-following-to/${user_id}/`, 
				method: 'DELETE', 
				headers: {
					'Authorization': `Token ${user.access_token}`
				}
			})
		}		

		setAlreadyFollowing(what)
	}

	return(
		<LikeContainer>
			<Picture onClick={()=>history(`/profile/${username}`)}>
				<Image src={picture} alt={username} />
			</Picture>
			<Username onClick={()=>history(`/profile/${username}`)} theme={theme}>
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