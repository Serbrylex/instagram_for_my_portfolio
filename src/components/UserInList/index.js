// React
import { useHistory } from 'react-router-dom'

import {
	LikeContainer, Picture, Image, Username, Button
} from './style'

const UserInList = ({ username, picture, follow }) => {

	const history = useHistory()

	return(
		<LikeContainer>
			<Picture onClick={()=>history.push(`/profile/${username}`)}>
				<Image src={picture} alt={username} />
			</Picture>
			<Username onClick={()=>history.push(`/profile/${username}`)}>
				{username}
			</Username>

			{follow ?
				<Button>
					Following
				</Button> :
				<Button>
					Follow
				</Button>				
			}
		</LikeContainer>
	)
}

export default UserInList