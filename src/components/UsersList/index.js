// React
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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


const UsersList = ({ setShowList, users, title }) => {

	// Context	
	const { theme, url  } = useSelector(store => store.preference)

	// Variables
	const size = '25px'
	const history = useNavigate()	
	const search = useInputValue('Buscar')
	const color = theme === 'light' ? 'black' : 'white'

	// Searching
	const [usersSearching, setUsersSearching] = useState([])
	const [focus, setFocus] = useState(false)		

	// Handle the search function
	useEffect(()=>{		
		if (search.value.length !== 0) {
			let newList = []
			for (var i = 0; i < users.length; i++) {				
				if (users[i].username.includes(search.value)) {
					newList.push(users[i])
				}
			}
			setUsersSearching(newList)
		} else {
			setUsersSearching([])
		}
	}, [search.value])

	return(
		<LikesContainer theme={theme}>
			<HeaderSection theme={theme}>			
				<Close onClick={() => setShowList(false)}>
					<CgArrowLeft size={size} color={color}/>
				</Close>
				<Title>{title}</Title>				
			</HeaderSection>

			<SearchBar search={search} setFocus={setFocus} fixed='top' />

			<LikeList theme={theme}>
				{search.value.length > 0 ?
					<>
						{usersSearching?.map((user, index)=>(
							<UserInList key={index} username={user.username} user_id={user.user_id} picture={`${url}${user.profile.picture}`} follow={user.following_too} />
						))}	
					</> :
					<>
						{users?.map((user, index)=>(
							<UserInList key={index} username={user.username} user_id={user.user_id} picture={`${url}${user.profile.picture}`} follow={user.following_too} />
						))}	
					</>
				}				
			</LikeList>

		</LikesContainer>
	)
}

export default UsersList