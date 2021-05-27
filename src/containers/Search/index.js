// React
import { useContext, useEffect, useState } from 'react' 

// Assets
import {
	SearchContainer, SearchInput, HeaderSection, Close, Title,
	NavBarFilters, Filter, ListOfFilter
} from './style'

import { CgArrowLeft } from 'react-icons/cg'

// Components
import SearchFeed from '../../components/SearchFeed'
import SearchBar from '../../components/SearchBar'
import Footer from '../../components/Footer' 
import UserInList from '../../components/UserInList'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useGetPosts } from '../../hooks/useGetPosts'

// API
import apiCall from '../../api/apiCall'

// Context 
import UserContext from '../../context/users'

const Search = ({ url }) => {

	const size = '25px'
	const { isAuth } = useContext(UserContext)
	const search = useInputValue('Buscar')	
	const posts = useGetPosts({
		token: isAuth.access_token,
		user: isAuth.user,
		url: url,
		idUser: 'popular/'
	})	
	const [users, setUsers] = useState([])
	// Modo busqueda
	const [focus, setFocus] = useState(false)
	const [loading, setLoading] = useState(true)
	// Modo imagenes o modo feed
	const [kindOfView, setKindOfView] = useState(false)


	useEffect(()=>{
		 		
		if (posts?.length && loading) {			
			setLoading(false)
		}

	}, [posts])


	const handleSearchByFilter = async () => {
		const response = await apiCall({ 
			urlDirection: `user/filter-people/${search.value}/`, 
			method: "GET", 
			headers:  {
				'Authorization': `Token ${isAuth.access_token}`
			}
		})

		const data = await response.json()

		console.log(data)

		setUsers(data)
	}


	// Handle searching
	useEffect(()=>{

		if (search.value.length > 2) {

			handleSearchByFilter()
		}


	}, [search.value])


	return(
		<SearchContainer>
			{kindOfView ? 
				<HeaderSection>			
					<Close onClick={()=> setKindOfView(false)}>
						<CgArrowLeft size={size}/>
					</Close>
					<Title>Explorar</Title>				
				</HeaderSection>:
				<SearchBar 
					search={search} 
					focus={focus} 
					setFocus={setFocus} 
					url={url}					
				/>
			}
			{focus ?  
				<SearchInput>					
					<ListOfFilter>
						{users?.map((user, index)=>(
							<UserInList username={user.username} picture={`${url}${user.profile.picture}`} />
						))}
					</ListOfFilter>
				</SearchInput>:
				<SearchFeed 
					url={url} 
					posts={posts} 
					loading={loading} 
					kindOfView={kindOfView} 
					setKindOfView={setKindOfView}
				/>
			}

			<Footer />
		</SearchContainer>
	)
}
 
export default Search