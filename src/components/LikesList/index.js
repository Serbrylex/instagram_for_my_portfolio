// React
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

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

const LikesList = ({ url, setShowLikes, post_id }) => {
	const size = '25px'
	const history = useHistory()	
	const search = useInputValue('Buscar')
	const { isAuth } = useContext(UserContext)
	const [likes, setLikes] = useState([])
	const [likesSearching, setLikesSearching] = useState([])
	const [focus, setFocus] = useState(false)	

	const handleFetchLikes = async () => {
		const token = `Token ${isAuth.access_token}`
		
		let data = await apiCall({			
			urlDirection: `get-likes/${post_id}/`, 						
			headers: {
				'Authorization': token,				
			}
		})

		data = await data.json()

		console.log(data)

		setLikes(data)
	}

	useEffect(()=>{
		handleFetchLikes()
	}, [])

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

	return(
		<LikesContainer>
			<HeaderSection>			
				<Close onClick={()=> setShowLikes(false)}>
					<CgArrowLeft size={size}/>
				</Close>
				<Title>Likes</Title>				
			</HeaderSection>

			<SearchBar search={search} setFocus={setFocus} fixed='top' />

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