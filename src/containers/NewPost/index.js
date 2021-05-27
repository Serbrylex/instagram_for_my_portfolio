// React
import { useRef, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import {
	NewPostContainer, HeaderSection, Close, Title, Publish, ImagesContainer,
	Image, Form, InputText, Button
} from './style'

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

import imageTest from '../../images/agujero-del-tiempo.jpg' 

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useImage } from '../../hooks/useImage'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'

// Components
import Loading from '../../components/Loading'

const NewPost = () => {

	const [loading, setLoading] = useState(false)
	const caption = useInputValue('Descripción')
	const { isAuth } = useContext(UserContext)
	const imagen = useImage([imageTest])
	const hiddenFileInput = useRef(null)
	const history = useHistory()	
	const size = '25px'


	const handleClick = e => {
		hiddenFileInput.current.click();
	}

	const handleChange = e => {
		const fileUploaded = e.target.files
		imagen.setFileImage(fileUploaded)

		let images = []

		for (var i =0; i < fileUploaded.length; i++) {
			images.push(URL.createObjectURL(fileUploaded[i]))
		}

		imagen.setImage(images)		
	}

	const sendPost = async () => {
		setLoading(true)
		const newToken = `Token ${isAuth.access_token}`		

		let response = null

		response = await apiCall({
			urlDirection: 'create-post/', 
			method: 'POST', 
			headers: {
					'Authorization': newToken,
					'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'description': caption.value
			})
		})
		
		if (response.ok) {
			const data = await response.json()			

			for (let i=0; i < imagen.fileImage.length; i++) {
				let objectOne = new FormData()								
				objectOne.append('image', imagen.fileImage[i], imagen.fileImage[i].name)
				objectOne.append('post_id', data.id)

				response = await apiCall({
					urlDirection: 'add-image/', 
					method: 'POST', 
					headers: {
						'Authorization': newToken,
					},
					body: objectOne
				})
			}
			
			setLoading(false)
			history.push("/")
		} else {
			const data = response.json()
			alert(data)
		}
		setLoading(false)

		// Si la respuesta es correcta, comenzamos a mandar todas las imagenes con ese post como referencia
	}

	const handleSubmit = e => {
		e.preventDefault()		
	}
	
	return(
		<NewPostContainer>
			<HeaderSection>			
				<Close onClick={()=> history.goBack()}>
					<AiOutlineClose size={size}/>
				</Close>
				<Title>Nueva publicación</Title>
				<Publish onClick={sendPost}>
					<AiOutlineCheck size={size}/>
				</Publish>
			</HeaderSection>
			<ImagesContainer>
					{imagen.image?.map((eachImage, index)=>(
						<Image src={eachImage} alt='image post' key={index} />
					))}
			</ImagesContainer>
			<Form onSubmit={handleSubmit}>
				<input 
					type="file" 
					ref={hiddenFileInput}
	             	onChange={handleChange}
	             	style={{display:'none'}}
	             	multiple
				/>		
				<Button onClick={handleClick}>Subir Imagen <MdKeyboardArrowDown size={size}/></Button>			
				<InputText 
					type="text"
					{...caption}
				/>					
			</Form>
		</NewPostContainer>
	)
}

export default NewPost 