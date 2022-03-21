// React
import React, { useEffect, useState } from 'react' 
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
 
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


const Search = () => {
	
	// Context
	const user = useSelector(store => store.user)
	const { theme, url } = useSelector(store => store.preference)
	const { searching } = useParams()

	// Variables
	const size = '25px'
	const [loading, setLoading] = useState(true)
	const color = theme === 'light' ? 'black' : 'white'

 	// Language hook
 	const words = useGetWords({ container: 'search' })

	// posts and users
	const posts = useGetPosts({
		token: user.access_token,
		user: user.user,
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


	const handleSearchByFilter = async (value) => {
		if (value.length !== 0) {	
			const response = await apiCall({ 
				url: url + `/user/filter-people/${value}/`, 
				method: "GET", 
				headers:  {
					'Authorization': `Token ${user.access_token}`
				}
			})

			if (response.ok) {
				const data = await response.json()		
				setUsers(data)
				console.log(data)
			} else {
				setUsers([])
			}
		} else {
			setUsers([])
		}
	}


	// Handle searching

	useEffect(()=>{
		handleSearchByFilter(search.value)		
	}, [search.value])

	useEffect(()=>{
		if (searching?.length) {			
			search.setValue(searching)						
			setFocus(true)
			setLoading(true)
		}
	}, [searching])


	return(
		<SearchContainer theme={theme}>
			<Helmet>
                <title>Instagram | Search</title>
				<meta name='description' content={`This is the searching`} />
			</Helmet>
			<Header />
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
			{focus && users.length > 0 ?
				<SearchInput>
					<ListOfFilter>
						{users?.map((userFilter, index)=>(
							<UserInList username={userFilter?.username} user_id={userFilter?.user_id} picture={`${url}${userFilter?.profile.picture}`} follow={userFilter?.already_following} key={index} />
						))}						
					</ListOfFilter>
				</SearchInput>
				:
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