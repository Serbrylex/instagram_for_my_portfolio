// React
import { useContext, useEffect, useState, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'

// Assets
import {
	UpdateProfileContainer, Header, BackButton, Title, AcceptEdit, 
	DataUserProfile, ImageDataContainer, Image, ChangeImageButton, 
	FormUserData, Field, Description, Input
} from './style' 

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useImage } from '../../hooks/useImage'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'

const UpdateProfile = ({ url }) => {
	
	const history = useHistory()	
	const hiddenFileInput = useRef(null);
	// Context auth
 	const { isAuth } = useContext(UserContext)

 	const imagen = useImage(`${url}${isAuth.user.profile.picture}`) 
 	const first_name = useInputValue('')
 	const last_name = useInputValue('')
 	const username = useInputValue('')
 	const website = useInputValue('')
 	const biography = useInputValue('')

 	useEffect(()=>{
 		first_name.setValue(isAuth.user.first_name)
 		last_name.setValue(isAuth.user.last_name)
		username.setValue(isAuth.user.username)
		website.setValue(isAuth.user.profile.website)
		biography.setValue(isAuth.user.profile.biography)
 	}, [])

	const size = '25px'


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
		objectOne.append('image', imagen.fileImage, imagen.fileImage.name)
		objectOne.append('first_name', first_name.value)
		objectOne.append('last_name', last_name.value)
		objectOne.append('username', username.value)
		objectOne.append('website', website.value)		
		objectOne.append('biography', biography.value)

		await apiCall({
			urlDirection: 'user/me/profile/', 
			method: 'PATCH', 
			headers: {
				'Authorization': newToken,
			},
			body: objectOne
		})
	}

	return(
		<UpdateProfileContainer>
			<Header>
				<BackButton onClick={()=>history.goBack()} >
					<AiOutlineClose size={size} />
				</BackButton>
				<Title>Editar Perfil</Title>
				<AcceptEdit onClick={handleFormSubmit} >
					<AiOutlineCheck size={size} />
				</AcceptEdit>
			</Header>
			<DataUserProfile>
				<ImageDataContainer>
					<Image src={imagen.image[0]} alt={isAuth.user.username} />
					<input 
						type="file" 
						ref={hiddenFileInput}
		             	onChange={handleChange}
		             	style={{display:'none'}}		             	
					/>		
					<ChangeImageButton onClick={handleClick}>Cambiar Foto De Perfil</ChangeImageButton>			
				</ImageDataContainer>
				<FormUserData onSubmit={handleFormSubmit}>
					<Field>
						<Description>Nombres</Description>
						<Input {...first_name} />
					</Field>
					<Field>
						<Description>Apellidos</Description>
						<Input {...last_name} />
					</Field>
					<Field>
						<Description>Nombre de usuario</Description>
						<Input {...username} />
					</Field>
					<Field>
						<Description>Website</Description>
						<Input {...website} />
					</Field>
					<Field>
						<Description>Biografía</Description>
						<Input {...biography} />
					</Field>
				</FormUserData>
			</DataUserProfile>
		</UpdateProfileContainer>
	)
}

export default UpdateProfile