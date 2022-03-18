// React
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

// Assets
import { 
	NewPostContainer, HeaderSection, Close, Title, Publish, ImagesContainer,
	Image, Form, InputText, Button, Count, ButtonArrow
} from './style' 
 
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import imageTest from '../../assets/images/agujero-del-tiempo.jpg' 

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useImage } from '../../hooks/useImage'
import { useGetWords } from '../../hooks/useGetWords'

// API
import apiCall from '../../api/apiCall'

// Components
import Loading from '../../components/Loading'
import ImagesGroup from '../../components/ImagesGroup'

let element

const NewPost = () => {

	// Context
	const user = useSelector(store => store.user)
	const { theme, url } = useSelector(store => store.preference)
	
	// Variables
	const history = useNavigate()	
	const size = '25px'
	const [loading, setLoading] = useState(false)
	const color = theme === 'light' ? 'black' : 'white'
	
 	// Language hook
 	const words = useGetWords({ container: 'new_post' })

 	// Inputs form
	const imagen = useImage([imageTest])
	const caption = useInputValue(words?.description)
	const hiddenFileInput = useRef(null)

	const [imageIndex, setImageIndex] = useState(0)	
	const [referenceId, setReferenceId] = useState(false)

	useEffect(()=>{
		setReferenceId(document.getElementById(`${1}-imagesGroup`))		
	}, [])

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
		const newToken = `Token ${user.access_token}`		

		let response = null

		response = await apiCall({
			url: url + '/create-post/', 
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
					url: url + '/add-image/', 
					method: 'POST', 
					headers: {
						'Authorization': newToken,
					},
					body: objectOne
				})
			}
			
			setLoading(false)
			history("/")
		} else {
			const data = response.json()
			alert(data)
		}
		setLoading(false)		
	}

	const handleSubmit = e => {
		e.preventDefault()		
	} 

	const handleControlScrollImage = e => {				
		element = e.target		
		let division = Math.round(element.scrollLeft/500)
		let forwhile = Math.round(element.scrollWidth/500)

		if (element.clientWidth < 500) {				
			division = Math.round(element.scrollLeft/element.clientWidth)
			forwhile = Math.round(element.scrollWidth/element.clientWidth)
		}
			
		setImageIndex(division)							
	}

	const handleMoveArrow = (whatDoYouWant) => {		
		let actualNotAsyncImageIndex = imageIndex
		if (whatDoYouWant) {
			if (imageIndex > 0) {
				actualNotAsyncImageIndex -= 1 				
			}
		} else {
			if (imageIndex < imagen.image.length - 1) {
				actualNotAsyncImageIndex += 1				
			}
		}


		if (referenceId !== false) {
			if (window.screen.width > 500) {
				referenceId.scroll({
					left: 500 * actualNotAsyncImageIndex
				})
			} else {
				referenceId.scroll({
					left: window.screen.width * actualNotAsyncImageIndex
				})
			}
		}		
	}
	
	return(
		<NewPostContainer theme={theme}>
			<Helmet>
                <title>{user.user.username} | New post</title>
				<meta name='description' content={`${user.user.username} is adding a new post`} />
			</Helmet>
			<HeaderSection theme={theme}>			
				<Close onClick={()=> history(-1)}>
					<AiOutlineClose size={size} color={color} />
				</Close>
				<Title>{words?.new_post}</Title>
				<Publish onClick={sendPost}>
					<AiOutlineCheck size={size}/>
				</Publish>
			</HeaderSection>
			<Form onSubmit={handleSubmit} theme={theme}>
				<input 
					type="file" 
					ref={hiddenFileInput}
	             	onChange={handleChange}
	             	style={{display:'none'}}
	             	multiple
				/>		
				<InputText 
					type="text"
					{...caption}
					theme={theme}
				/>					
				<Button onClick={handleClick} theme={theme}>{words?.upload_image} <MdKeyboardArrowDown size={size}/></Button>			
			</Form>
			<ImagesContainer>
				<Count theme={theme}>{imageIndex+1}/{imagen.image?.length}</Count>
				{imagen.image?.length > 1 &&
					<>
						<ButtonArrow orientation={'left'} theme={theme} onClick={()=>handleMoveArrow(true)}>
							<IoIosArrowBack size={size} color={theme === 'light' ? 'white' : 'black'} />
						</ButtonArrow>
						<ButtonArrow orientation={'right'} theme={theme} onClick={()=>handleMoveArrow(false)}>
							<IoIosArrowForward size={size} color={theme === 'light' ? 'white' : 'black'} />
						</ButtonArrow>
					</>
				}
				<ImagesGroup images={imagen.image} size={'500px'} onScrollEvent={handleControlScrollImage} post_id={1}/>				
			</ImagesContainer>
		</NewPostContainer>
	)
}

export default NewPost 