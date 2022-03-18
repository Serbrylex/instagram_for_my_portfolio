// React
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Assets
import { 
	LikesContainer, HeaderSection, Close, Title, LikeList
} from './style'

import imageTest from '../../assets/images/agujero-del-tiempo.jpg' 

import { CgArrowLeft } from 'react-icons/cg'

// Components
import UserInList from '../UserInList'
import SearchBar from '../SearchBar'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'

// API
import apiCall from '../../api/apiCall'


const LikesList = ({ setShowLikes, post_id }) => {
	
	// Context
	const user = useSelector(state => state.user)
	const { theme, url } = useSelector(state => state.preference)	

	// Variables
	const size = '25px'	
	const color = theme === 'light' ? 'black' : 'white'

	const [likes, setLikes] = useState([])
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
			url: url + `/get-likes/${post_id}/`,
			headers: {
				'Authorization': `Token ${user.access_token}`
			}
		})

		if (response.ok) {
			let data = await response.json()
			console.log(data)
			setLikes(data)
		}
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
							<UserInList key={index} user_id={like.user_id} username={like.username} picture={like.picture ? `${url}${like.picture}` : imageTest} follow={like.following}/>
						))}	
					</> :
					<>
						{likes?.map((like, index)=>(
							<UserInList key={index} user_id={like.user_id} username={like.username} picture={like.picture ? `${url}${like.picture}` : imageTest} follow={like.following}/>
						))}	
					</>
				}				
			</LikeList>

		</LikesContainer>
	)
}

export default LikesList