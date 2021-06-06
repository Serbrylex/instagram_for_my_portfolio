// React
import { useContext, useEffect, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
  
// Assets
import {
	UpdateProfileContainer, Header, BackButton, Title, AcceptEdit, 
	DataUserProfile, ImageDataContainer, Image, ChangeImageButton, 
	FormUserData, Field, Description, Input, IsPublicButtonsContainer, 
	ButtonIsPublic
} from './style'  

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useImage } from '../../hooks/useImage'
import { useGetWords } from '../../hooks/useGetWords'
 
// API
import apiCall from '../../api/apiCall'

// Context 
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'


const UpdateProfile = ({ url }) => {
	
	// Context
 	const { isAuth, setIsAuth } = useContext(UserContext) 		
 	const { theme } = useContext(ThemeContext) 	

	// Variables
	const history = useHistory()	
	const hiddenFileInput = useRef(null);
 	const [loading, setLoading] = useState(true)
 	const color = theme === 'light' ? 'black' : 'white'

 	// Language hook
 	const words = useGetWords({ container: 'update_profile' }) 		 		

 	// Inputs form
 	const imagen = useImage(`${url}${isAuth.user.profile.picture}`) 
 	const first_name = useInputValue('')
 	const last_name = useInputValue('')
 	const username = useInputValue('')
 	const website = useInputValue('')
 	const biography = useInputValue('')
 	const phone_number = useInputValue('')
 	const [isPublic, setIsPublic] = useState(isAuth.user.profile.is_public)

 	useEffect(()=>{
	 	setTimeout(()=>{
			first_name.setValue(isAuth.user.first_name)
	 		last_name.setValue(isAuth.user.last_name)
			username.setValue(isAuth.user.username)
			website.setValue(isAuth.user.profile.website)
			biography.setValue(isAuth.user.profile.biography)
			phone_number.setValue(isAuth.user.profile.phone_number) 			 				 		
	 	}, 1000)
 	}, [])

	const size = '22px'

	const handleClick = e => {
		hiddenFileInput.current.click();
	}

	const handleChange = e => {
		const fileUploaded = e.target.files[0]

		console.log(fileUploaded)

		imagen.setFileImage(fileUploaded)
		imagen.setImage([URL.createObjectURL(fileUploaded)])		
	}

	// Fetch -------------------------------------------------
	const handleFormSubmit = async () => {
		const newToken = `Token ${isAuth.access_token}`				

		let objectOne = new FormData()		
		
		if (imagen.fileImage?.name) {			
			objectOne.append('picture', imagen.fileImage, imagen.fileImage.name)
		}

		if (first_name.value.length > 0) {
			objectOne.append('first_name', first_name.value)
		}
		if (last_name.value.length > 0) {			
			objectOne.append('last_name', last_name.value)
		}
		if (username.value.length > 0) {			
			objectOne.append('username', username.value)
		}
		if (website.value.length > 0) {			
			objectOne.append('website', website.value)		
		}
		if (biography.value.length > 0) {			
			objectOne.append('biography', biography.value)			
		}
		if (phone_number.value.length > 0) {			
			objectOne.append('phone_number', phone_number.value)			
		}
		
		objectOne.append('is_public', isPublic)

		// Form to javascript object
		var object = {};
		objectOne.forEach((value, key) => object[key] = value);		

		const response = await apiCall({
			urlDirection: 'user/me/profile/', 
			method: 'PATCH', 
			headers: {
				'Authorization': newToken,
			},
			body: objectOne
		})		

		if (response.ok) {
			
			const new_data = {...isAuth}			

			if (object?.first_name) {
				new_data.user.first_name = object.first_name
			}
			if (object?.last_name) {
				new_data.user.last_name = object.last_name
			}
			if (object?.username) {
				new_data.user.username = object.username
			}

			if (object?.biography) {
				new_data.user.profile.biography = object.biography
			}
			if (object?.is_public) {
				new_data.user.profile.is_public = object.is_public === 'true' ? true : false
			}
			if (object?.phone_number) {
				new_data.user.profile.phone_number = object.phone_number
			}
			if (object?.picture) {
				new_data.user.profile.picture = object.picture
			}
			if (object?.website) {
				new_data.user.profile.website = object.website
			}
						
			setIsAuth(new_data)
			history.goBack()
		}
	}

	return(
		<UpdateProfileContainer theme={theme}>
			<Helmet>
                <title>@{isAuth.user.username} | Update Profile</title>
				<meta name='description' content={`Update profile of ${isAuth.user.username}`} />
			</Helmet>
			<Header theme={theme}>
				<BackButton onClick={()=>history.goBack()} >
					<AiOutlineClose size={size} color={color} />
				</BackButton>
				<Title>{words?.edit_profile}</Title>
				<AcceptEdit onClick={handleFormSubmit} >
					<AiOutlineCheck size={size} color={color}/>
				</AcceptEdit>
			</Header>
			<DataUserProfile>
				<ImageDataContainer theme={theme}>
					<Image src={imagen.image[0]} alt={isAuth.user.username} />
					<input 
						type="file" 
						ref={hiddenFileInput}
		             	onChange={handleChange}
		             	style={{display:'none'}}		             	
					/>		
					<ChangeImageButton onClick={handleClick} theme={theme}>{words?.change_profile_picture}</ChangeImageButton>			
				</ImageDataContainer>
				<FormUserData theme={theme}>
					<Field>
						<Description>{words?.public_profile}</Description>
						<IsPublicButtonsContainer>
							<ButtonIsPublic onClick={()=>setIsPublic(true)} isPublic={isPublic} theme={theme}>{words?.public}</ButtonIsPublic>
							<ButtonIsPublic onClick={()=>setIsPublic(false)} isPublic={!isPublic} theme={theme}>{words?.no_public}</ButtonIsPublic>
						</IsPublicButtonsContainer>
					</Field>
					<Field>
						<Description>{words?.name}</Description>
						<Input theme={theme} {...first_name} />
					</Field>
					<Field>
						<Description>{words?.last_name}</Description>
						<Input theme={theme} {...last_name} />
					</Field>
					<Field>
						<Description>{words?.username}</Description>
						<Input theme={theme} {...username} />
					</Field>
					<Field>
						<Description>{words?.website}</Description>
						<Input theme={theme} {...website} />
					</Field>
					<Field>
						<Description>{words?.biography}</Description>
						<Input theme={theme} {...biography} />
					</Field>
					<Field>
						<Description>{words?.phone_number}</Description>
						<Input theme={theme} {...phone_number} />
					</Field>
				</FormUserData>
			</DataUserProfile>
		</UpdateProfileContainer>
	)
}

export default UpdateProfile