// React
import { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// Assets 
import {
	ProfileContainer, DataProfile, SectionImage, Image, GeneralData, Data, Count, 
	Description, UserDescription, Username, Information, Link, EditProfile, 
	ButtonsContainer, Following, Message, Down, HeaderSection, Close, Title
} from './style' 

import { RiArrowDownSLine } from 'react-icons/ri'  
import { CgArrowLeft } from 'react-icons/cg'

import imageTest from '../../images/agujero-del-tiempo.jpg' 

// Components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Stories from '../../components/Stories'
import SearchFeed from '../../components/SearchFeed'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'

// Hooks
import { useGetStoriesByUser } from '../../hooks/useGetStoriesByUser'
import { useGetPosts } from '../../hooks/useGetPosts'

const Profile = ({ url }) => {
	
	const size = "25px"
	const history = useHistory()
	const { username } = useParams()	
 	// Context auth
 	const { isAuth } = useContext(UserContext)
 	
 	// User data
 	const [user, setUser] = useState({})

	const [loading, setLoading] = useState(true)
	const [kindOfView, setKindOfView] = useState(false)
	
	// Stories and posts
	let stories = useGetStoriesByUser({ 
		token: isAuth.access_token, 
		user: isAuth.user, 
		url: url,
		idUser: username + '/'
	})	
	const posts = useGetPosts({ 
		token: isAuth.access_token, 
		user: isAuth.user, 
		url: url,
		idUser: username + '/'
	})
		

	useEffect(()=>{
		console.log('stories ', stories)
		console.log('posts ', posts)

		
		//setKindOfView(true)
		

		if ((posts?.length || posts.length === 0) && (stories?.length || stories.length === 0)) {
			setLoading(false)			
		}

	}, [stories, posts])

	return(
		<ProfileContainer>
			<Header />

			<DataProfile>
				<SectionImage>
					{user?.profile ?
						<Image src={`${url}${user.profile.picture}`} alt='image profile' /> :
						<Image src={imageTest} alt='image profile' />
					}
					<GeneralData>
						<Data>
							<Count>999</Count>
							<Description onClick={()=>setKindOfView(true)}>Posts</Description>
						</Data>
						<Data>
							<Count>999</Count>
							<Description to={`/${username}/follower`}>Seguidores</Description>
						</Data>
						<Data>
							<Count>999</Count>
							<Description to={`/${username}/following`}>Siguiendo</Description>
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
				<EditProfile onClick={()=>history.push('/edit/profile')}>Editar Perfil</EditProfile> :				
				<ButtonsContainer>
					<Following>Siguiendo <RiArrowDownSLine /></Following>
					<Message>Mensaje</Message>
					<Down><RiArrowDownSLine /></Down>
				</ButtonsContainer>				
			}

			<Stories add='last' stories={stories} />
			{kindOfView &&
				<HeaderSection>			
					<Close onClick={()=> setKindOfView(false)}>
						<CgArrowLeft size={size}/>
					</Close>
					<Title>Publicaciones</Title>				
				</HeaderSection>
			}
			<SearchFeed posts={posts} url={url} setKindOfView={setKindOfView} kindOfView={kindOfView} loading={loading}/>			

			<Footer />
		</ProfileContainer>
	)
}

export default Profile