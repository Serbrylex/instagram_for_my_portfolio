// React
import { useContext, useEffect, useState } from 'react' 
import { Helmet } from 'react-helmet'
 
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
import Header from '../../components/Header' 
import UserInList from '../../components/UserInList'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useGetPosts } from '../../hooks/useGetPosts'
import { useGetWords } from '../../hooks/useGetWords'

// API
import apiCall from '../../api/apiCall'

// Context 
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'


const Search = ({ url }) => {
	
	// Context
	const { isAuth } = useContext(UserContext)	
 	const { theme } = useContext(ThemeContext) 	

	// Variables
	const size = '25px'
	const [loading, setLoading] = useState(true)
	const color = theme === 'light' ? 'black' : 'white'

 	// Language hook
 	const words = useGetWords({ container: 'search' })

	// posts and users
	const posts = useGetPosts({
		token: isAuth.access_token,
		user: isAuth.user,
		url: url,
		idUser: 'popular'
	})	
	const [users, setUsers] = useState([])
	
	// Modo busqueda
	const search = useInputValue(words?.search)	
	const [focus, setFocus] = useState(false)
	
	// Modo imagenes o modo feed
	const [kindOfView, setKindOfView] = useState(false)


	useEffect(()=>{
		 				
		if (posts?.posts.length && loading) {	
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
		if (search.value.length > 0) {
			handleSearchByFilter()
		}

	}, [search.value])


	return(
		<SearchContainer theme={theme}>
			<Helmet>
                <title>Instagram | Search</title>
				<meta name='description' content={`This is the searching`} />
			</Helmet>
			<Header url={url}/>
			{kindOfView ? 
				<HeaderSection>			
					<Close onClick={()=> setKindOfView(false)}>
						<CgArrowLeft size={size} color={color}/>
					</Close>
					<Title>{words?.explor}</Title>				
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
							<UserInList username={user.username} user_id={user.user_id} picture={`${url}${user.profile.picture}`} follow={user.already_following} key={index} />
						))}
					</ListOfFilter>
				</SearchInput>:
				<SearchFeed 
					url={url} 
					posts={posts.posts} 
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