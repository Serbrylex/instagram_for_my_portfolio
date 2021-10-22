// React
import { useState, useEffect, useContext } from 'react'

// Assets
import { 
	LikesContainer, HeaderSection, Close, Title, LikeList
} from './style'

import { CgArrowLeft } from 'react-icons/cg'

// Components
import UserInList from '../UserInList'
import SearchBar from '../SearchBar'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'


const LikesList = ({ url, setShowLikes, post_id }) => {
	
	// Context
	const { isAuth } = useContext(UserContext)
	const { theme } = useContext(ThemeContext) 	

	// Variables
	const size = '25px'	
	const color = theme === 'light' ? 'black' : 'white'

	const [likes, setLikes] = useState({})
	const [likesSearching, setLikesSearching] = useState([])
	
	const search = useInputValue('Buscar')

	// Handle the search function
	useEffect(()=>{		
		if (search.value.length !== 0) {
			let newList = []
			for (var i = 0; i < likes.length; i++) {				
				if (likes[i].username.includes(search.value)) {
					newList.push(likes[i])
				}
			}
			setLikesSearching(newList)
		} else {
			setLikesSearching([])
		}
	}, [search.value])

	const getLikes = async () => {
		let response = await apiCall({
			urlDirection: `get-likes/${post_id}/`,
			headers: {
				'Authorization': `Token ${isAuth.access_token}`
			}
		})

		let data = response.json()

		setLikes(data)
	}

	useEffect(()=>{
		getLikes()
	},[])

	return(
		<LikesContainer theme={theme}>
			<HeaderSection>			
				<Close onClick={()=> setShowLikes(false)}>
					<CgArrowLeft size={size} color={color} />
				</Close>
				<Title>Likes</Title>				
			</HeaderSection>

			<SearchBar search={search} fixed='top' />

			<LikeList>
				{search.value.length > 0 ?
					<>
						{likesSearching?.map((like, index)=>(
							<UserInList key={index} username={like.username} picture={`${url}${like.picture}`} follow={like.following}/>
						))}	
					</> :
					<>
						{likes?.map((like, index)=>(
							<UserInList key={index} username={like.username} picture={`${url}${like.picture}`} follow={like.following}/>
						))}	
					</>
				}				
			</LikeList>

		</LikesContainer>
	)
}

export default LikesList