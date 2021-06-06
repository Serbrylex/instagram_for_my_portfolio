// React
import { useState, useContext, useEffect } from 'react' 
import { useParams, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Assets 
import { 
	ProfileContainer, DataProfile, SectionImage, Image, GeneralData, Data, Count, 
	Description, UserDescription, Username, Information, Link, EditProfile, 
	ButtonsContainer, ButtonUserFunction, Down, HeaderSection, Close, Title
} from './style'  

import { RiArrowDownSLine } from 'react-icons/ri'  
import { CgArrowLeft } from 'react-icons/cg' 

import imageTest from '../../assets/images/agujero-del-tiempo.jpg' 

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Stories from '../../components/Stories'
import SearchFeed from '../../components/SearchFeed'
import UserMenu from '../../components/UserMenu'
import UsersList from '../../components/UsersList'
import Loading from '../../components/Loading'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

// Hooks
import { useGetStoriesByUser } from '../../hooks/useGetStoriesByUser'
import { useGetPosts } from '../../hooks/useGetPosts'
import { useGetWords } from '../../hooks/useGetWords'

const Profile = ({ url }) => {
	
 	// Context
	const { isAuth } = useContext(UserContext)	
 	const { theme } = useContext(ThemeContext) 	
	
	// Variables
	const size = "25px"
	const history = useHistory()
	const { username } = useParams()		
	const [alreadyFollowing, setAlreadyFollowing] = useState(false)

 	// Language hook
 	const words = useGetWords({ container: 'profile' })
 	
 	// User data
 	const [user, setUser] = useState({})

 	// Follower and following users
 	const [showUserList, setShowUserList] = useState(false)
 	const [listOfUsers, setListOfUsers] = useState({})
 	const [usersListTitle, setUsersListTitle] = useState('')

 	const [showUserMenu, setShowUserMenu] = useState(false)

	const [loading, setLoading] = useState(false)

	const [kindOfView, setKindOfView] = useState(false)
	
	// Stories and posts
	let stories = useGetStoriesByUser({ 
		token: isAuth.access_token, 
		user: isAuth.user, 
		url: url,
		idUser: username
	})	
	
	const posts = useGetPosts({ 
		token: isAuth.access_token, 
		user: isAuth.user, 
		url: url,
		idUser: username
	})

	const handleAsyncSetUser = async () => {
		const userResponse = await apiCall({
			urlDirection: `user/${username}/`,
			headers: {
				'Authorization': `Token ${isAuth.access_token}`
			}
		})

		const userData = await userResponse.json()		
		
		setAlreadyFollowing(userData.already_following)
		setUser(userData)
	}

	useEffect(()=>{
		handleAsyncSetUser() 
	}, [])
		

	useEffect(()=>{				
		//setKindOfView(true)
		
		if ((posts.posts?.length || posts.posts.length === 0) && (stories?.length || stories.length === 0)) {
			setLoading(false)			
		}

	}, [stories, posts])

	const handleFetchUsers = async (lookAt) => {

		setLoading(true)

		const usersResponse = await apiCall({
			urlDirection: `user/${lookAt === 'follower' ? 'list_of_followers' : 'list_of_following'}/${user.user_id}/`,
			headers: {
				'Authorization': `Token ${isAuth.access_token}`
			}
		})				

		if (usersResponse.ok) {
			let data = await usersResponse.json()			

			let usersSerializerList = []
		
			for (var i = 0; i < data.length; i++) {							
				
				usersSerializerList.push({
					...data[i][lookAt]
				})
			}

			setUsersListTitle(lookAt)
			setListOfUsers(usersSerializerList)
			setShowUserList(true)
		}
		setLoading(false)
	}

	const handleFollowing = async (what) => {
		let response = ''
		if (what) {
			response = await apiCall({
				urlDirection: `user/follow_to/${user.user_id}`, 
				method: 'POST', 
				headers: {
					'Authorization': `Token ${isAuth.access_token}`
				}
			})
		} else {
			response = await apiCall({
				urlDirection: `user/stop_following_to/${user.user_id}/`, 
				method: 'DELETE', 
				headers: {
					'Authorization': `Token ${isAuth.access_token}`
				}
			})
		}		

		setAlreadyFollowing(what)
	}

	return(
		<ProfileContainer theme={theme}>
			<Helmet>
                <title>Instagram | {isAuth.user.username}</title>
				<meta name='description' content={`This is the profile of ${isAuth.user.username}`} />
			</Helmet>
			<Header setShowUserMenu={setShowUserMenu} url={url}/> 

			{loading && <Loading />}

			{showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}

			{showUserList && <UsersList url={url} setShowList={setShowUserList} users={listOfUsers} title={usersListTitle} />}

			<DataProfile>
				<SectionImage>
					{user?.profile ?
						<Image src={`${url}${user.profile.picture}`} alt='image profile' /> :
						<Image src={imageTest} alt='image profile' />
					}
					<GeneralData>
						<Data>
							<Count>{posts.posts.length}</Count>
							<Description onClick={()=>setKindOfView(true)}>{words?.post}</Description>
						</Data>
						<Data>
							<Count>{user.follower || 0}</Count>
							<Description onClick={()=>handleFetchUsers('follower')}>{words?.followers}</Description>
						</Data>
						<Data>
							<Count>{user.following || 0}</Count>
							<Description onClick={()=>handleFetchUsers('following')}>{words?.following}</Description>
						</Data>
					</GeneralData>
				</SectionImage>
				<UserDescription>
					<Username>{username}</Username>
					{user?.profile && <>
						<Information>{user.profile.biography}</Information>
						<Link>{user.profile.website}</Link>
					</>}
				</UserDescription>
			</DataProfile>

			{username === isAuth.user.username ?
				<EditProfile onClick={()=>history.push('/edit/profile')} theme={theme}>{words?.edit_profile}</EditProfile> :				
				<ButtonsContainer>					
					{alreadyFollowing ? 
						<ButtonUserFunction theme={theme} onClick={()=>handleFollowing(false)}>{words?.following}</ButtonUserFunction> :
						<ButtonUserFunction theme={theme} onClick={()=>handleFollowing(true)}>{words?.follow}</ButtonUserFunction>
					}
					<ButtonUserFunction theme={theme} onClick={()=>history.push('/messages')}>{words?.message}</ButtonUserFunction>
					<Down theme={theme}><RiArrowDownSLine /></Down>
				</ButtonsContainer>				
			}

			<Stories add='last' stories={stories} />
			{kindOfView &&
				<HeaderSection>			
					<Close onClick={()=> setKindOfView(false)}>
						<CgArrowLeft size={size}/>
					</Close>
					<Title>{words?.posts}</Title>				
				</HeaderSection>
			}
			<SearchFeed posts={posts.posts} url={url} setKindOfView={setKindOfView} kindOfView={kindOfView} loading={loading}/>						
			<Footer />
		</ProfileContainer>
	)
}

export default Profile