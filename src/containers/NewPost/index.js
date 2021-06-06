// React
import { useRef, useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Assets
import { 
	NewPostContainer, HeaderSection, Close, Title, Publish, ImagesContainer,
	Image, Form, InputText, Button
} from './style' 

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

import imageTest from '../../assets/images/agujero-del-tiempo.jpg' 

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useImage } from '../../hooks/useImage'
import { useGetWords } from '../../hooks/useGetWords'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

// Components
import Loading from '../../components/Loading'

const NewPost = () => {

	// Context
	const { isAuth } = useContext(UserContext)	
 	const { theme } = useContext(ThemeContext) 	
	
	// Variables
	const history = useHistory()	
	const size = '25px'
	const [loading, setLoading] = useState(false)
	const color = theme === 'light' ? 'black' : 'white'
	
 	// Language hook
 	const words = useGetWords({ container: 'new_post' })

 	// Inputs form
	const imagen = useImage([imageTest])
	const caption = useInputValue(words?.description)
	const hiddenFileInput = useRef(null)


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
	}

	const handleSubmit = e => {
		e.preventDefault()		
	} 
	
	return(
		<NewPostContainer theme={theme}>
			<Helmet>
                <title>{isAuth.user.username} | New post</title>
				<meta name='description' content={`${isAuth.user.username} is adding a new post`} />
			</Helmet>
			<HeaderSection theme={theme}>			
				<Close onClick={()=> history.goBack()}>
					<AiOutlineClose size={size} color={color} />
				</Close>
				<Title>{words?.new_post}</Title>
				<Publish onClick={sendPost}>
					<AiOutlineCheck size={size}/>
				</Publish>
			</HeaderSection>
			<ImagesContainer>
					{imagen.image?.map((eachImage, index)=>(
						<Image src={eachImage} alt='image post' key={index} />
					))}
			</ImagesContainer>
			<Form onSubmit={handleSubmit} theme={theme}>
				<input 
					type="file" 
					ref={hiddenFileInput}
	             	onChange={handleChange}
	             	style={{display:'none'}}
	             	multiple
				/>		
				<Button onClick={handleClick}>{words?.upload_image} <MdKeyboardArrowDown size={size}/></Button>			
				<InputText 
					type="text"
					{...caption}
				/>					
			</Form>
		</NewPostContainer>
	)
}

export default NewPost 