// React
import React, { useState, useContext, useEffect } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'

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

// Hooks
import { useGetStoriesByUser } from '../../hooks/useGetStoriesByUser'
import { useGetPosts } from '../../hooks/useGetPosts'
import { useGetWords } from '../../hooks/useGetWords'

const Profile = () => {
	
 	// Context
	const user = useSelector(store => store.user)
 	const { theme, url } = useSelector(store => store.preference) 	
	
	// Variables
	const size = "25px"
	const history = useNavigate()
	const { username } = useParams()		
	const [alreadyFollowing, setAlreadyFollowing] = useState(false)

 	// Language hook
 	const words = useGetWords({ container: 'profile' })
 	
 	// User data
 	const [profile, setProfile] = useState({})

 	// Follower and following users
 	const [showUserList, setShowUserList] = useState(false)
 	const [listOfUsers, setListOfUsers] = useState({})
 	const [usersListTitle, setUsersListTitle] = useState('')

 	const [showUserMenu, setShowUserMenu] = useState(false)

	const [loading, setLoading] = useState(true)

	const [kindOfView, setKindOfView] = useState(false)
	
	// Stories and posts
	let stories = useGetStoriesByUser({ 
		token: user.access_token, 
		user: user.user, 
		url: url,
		idUser: profile.username
	})	
	
	const posts = useGetPosts({ 
		token: user.access_token, 
		user: user.user, 
		url: url, 
		idUser: profile.username
	})

	const handleAsyncSetUser = async () => {		
		const userResponse = await apiCall({
			url: url + `/user/${username}/`,
			headers: {
				'Authorization': `Token ${user.access_token}`
			}
		})
		
		const userData = await userResponse.json()				
		setAlreadyFollowing(userData.already_following)		
		setProfile(userData)		
	}

	useEffect(()=>{				
		handleAsyncSetUser() 
	}, [username])
		

	useEffect(()=>{							
		if (posts.posts.length >= 0 && stories.length >= 0) {			
			setLoading(false)			
		}
	}, [stories, posts.posts])

	const handleFetchUsers = async (lookAt) => {

		setLoading(true)

		const usersResponse = await apiCall({
			url: url + `/user/${lookAt === 'followers' ? 'list-of-followers' : 'list-of-following'}/${profile.user_id}/`,
			headers: {
				'Authorization': `Token ${user.access_token}`
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
				url: url + `/user/follow-to/${profile.user_id}/`, 
				method: 'POST', 
				headers: {
					'Authorization': `Token ${user.access_token}`
				}
			})
		} else {
			response = await apiCall({
				url: url + `/user/stop-following-to/${profile.user_id}/`, 
				method: 'DELETE', 
				headers: {
					'Authorization': `Token ${user.access_token}`
				}
			})
		}		

		setAlreadyFollowing(what)
	}

	return(
		<ProfileContainer theme={theme}>
			<Helmet>
                <title>Instagram | {user.user.username}</title>
				<meta name='description' content={`This is the profile of ${user.user.username}`} />
			</Helmet>
			<Header setShowUserMenu={setShowUserMenu} url={url}/> 

			{loading && <Loading />}

			{showUserMenu && <UserMenu setShowUserMenu={setShowUserMenu} />}

			{showUserList && <UsersList url={url} setShowList={setShowUserList} users={listOfUsers} title={usersListTitle} />}

			<DataProfile>
				<SectionImage>
					{profile?.profile && profile.profile?.picture ?
						<Image src={`${url}${profile.profile.picture}`} alt='image profile' /> :
						<Image src={imageTest} alt='image profile' />
					}
					<GeneralData>
						<Data>
							<Count>{posts.posts.length}</Count>
							<Description onClick={()=>setKindOfView(true)}>{words?.posts}</Description>
						</Data>
						<Data>
							<Count>{profile.follower || 0}</Count>
							<Description onClick={()=>handleFetchUsers('followers')}>{words?.followers}</Description>
						</Data>
						<Data>
							<Count>{profile.following || 0}</Count>
							<Description onClick={()=>handleFetchUsers('following')}>{words?.following}</Description>
						</Data>
					</GeneralData>
				</SectionImage>
				<UserDescription>
					<Username>{username}</Username>
					{profile?.profile && <>
						<Information>{profile.profile.biography}</Information>
						<Link>{profile.profile.website}</Link>
					</>}
				</UserDescription>
			</DataProfile>

			{username === user.user.username ?
				<EditProfile onClick={()=>history('/edit/profile')} theme={theme}>{words?.edit_profile}</EditProfile> :				
				<ButtonsContainer>					
					{alreadyFollowing ? 
						<ButtonUserFunction theme={theme} onClick={()=>handleFollowing(false)}>{words?.following}</ButtonUserFunction> :
						<ButtonUserFunction theme={theme} onClick={()=>handleFollowing(true)}>{words?.follow}</ButtonUserFunction>
					}
					<ButtonUserFunction theme={theme} onClick={()=>history('/messages')}>{words?.message}</ButtonUserFunction>
					<Down theme={theme}><RiArrowDownSLine /></Down>
				</ButtonsContainer>				
			}

			<Stories add='last' stories={stories} isMyProfile={username === user.user.username}/>
			{kindOfView &&
				<HeaderSection>			
					<Close onClick={()=> setKindOfView(false)}>
						<CgArrowLeft size={size}/>
					</Close>
					<Title>{words?.posts}</Title>				
				</HeaderSection>
			}			
			<SearchFeed posts={posts.posts} url={url} setKindOfView={setKindOfView} kindOfView={kindOfView} loading={loading} />
			<Footer />
		</ProfileContainer>
	)
}

export default Profile