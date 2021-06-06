// React
import { useState, useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
 
// Assets
import { 
	AddStoriContainer, ImagesContainer, ImageBackground, Header, NavegationBar, 
	Footer, Button, WhatContainer, What, ImageButton, YourStorie, ImageStorie, 
	SendToButton, ContainerForPosition
} from './style'

// Icons
import { BsArrowLeftRight, BsTextLeft, BsArrowRight } from 'react-icons/bs'
// MdKeyboardArrowDown
import { MdClose } from 'react-icons/md'
import { RiLayout2Line, RiLayoutGridLine, RiLayoutRowLine } from "react-icons/ri";
import { AiOutlineMobile } from 'react-icons/ai'

import imageTest from '../../assets/images/agujero-del-tiempo.jpg'

// Hooks
import { useImage } from '../../hooks/useImage'
import { useGetWords } from '../../hooks/useGetWords'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

const AddStorie = ({ url }) => {

	// Context
	const { isAuth } = useContext(UserContext) 	
 	const { theme } = useContext(ThemeContext) 	

	// Variables
	const history = useHistory()	
	const size = '25px'	

 	// Language hook
 	const words = useGetWords({ container: 'add_storie' }) 	

	const [position, setPosition] = useState('left')
	const [imageByDefault, setImageByDefault] = useState(true)

	// All, four, three and two
	const [kindGrid, setKindGrid] = useState('all')
	const hiddenFileInput = useRef(null);	
	const imagen = useImage([imageTest])


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
		setImageByDefault(false)
	}

	useEffect(()=>{
		
		
		let newSizeImages = [...imagen.fileImage]
		let images = []
		const sizeArray = newSizeImages.length			

		if (kindGrid !== 'all') {						

			if (kindGrid === 'two' && sizeArray > 1) {

				newSizeImages = newSizeImages.slice(0, 2)
				imagen.setFileImage(newSizeImages)

			} else if (kindGrid === 'three' && sizeArray > 2) {

				newSizeImages = newSizeImages.slice(0, 3)
				imagen.setFileImage(newSizeImages)

			} else if (kindGrid === 'four' && sizeArray > 3) {
				
				newSizeImages = newSizeImages.slice(0, 4)
				imagen.setFileImage(newSizeImages)

			}			

			for (var i =0; i < newSizeImages.length; i++) {
				images.push(URL.createObjectURL(newSizeImages[i]))
			}

			imagen.setImage(images)		
		}

	}, [kindGrid])


	const handleSendStorie = async () => {		
		const newToken = `Token ${isAuth.access_token}`
		let response = {
			ok: false
		}

		for (let i=0; i < imagen.fileImage.length; i++) {
			let objectOne = new FormData()	    		

			objectOne.append('image', imagen.fileImage[i], imagen.fileImage[i].name)			

			response = await apiCall({
				urlDirection: 'stories/add-storie/', 
				method: 'POST', 
				headers: {
					'Authorization': newToken					
				},
				body: objectOne
			})
		}

		if (response.ok) {
			history.push('/')
		} else {
			alert(words?.something_wrong)
		}

	}
	
	return(
		<AddStoriContainer theme={theme}>
			<Helmet>
                <title>Instagram | Add Storie</title>
				<meta name='description' content={`Add storie`} />
			</Helmet>
			<ContainerForPosition>
				<ImagesContainer kindGrid={kindGrid}>
					{imagen.image?.map((eachImage, index)=>(					
						<ImageBackground src={eachImage} alt='New Storie' key={index} kindGrid={kindGrid} />
					))}
				</ImagesContainer>
				<Header>
					{position === 'right' &&
						<MdClose size={size} onClick={()=>history.goBack()}/>
					}
					<BsArrowLeftRight size={size} onClick={()=>position === 'left' ? setPosition('right') : setPosition('left')} />
					{position === 'left' &&
						<MdClose size={size} onClick={()=>history.goBack()}/>
					}
				</Header>
				<NavegationBar position={position}>		
					<BsTextLeft size={size} />
					<AiOutlineMobile size={size} onClick={()=>setKindGrid('all')}/>
					<RiLayoutRowLine size={size} onClick={()=>setKindGrid('two')}/>
					<RiLayout2Line size={size} onClick={()=>setKindGrid('three')}/>
					<RiLayoutGridLine size={size} onClick={()=>setKindGrid('four')}/>
				</NavegationBar>
				<Footer>
					{imagen.image.length > 0  && !imageByDefault ?
						<>
							<YourStorie onClick={handleSendStorie}>
								<ImageStorie src={imageTest} alt='user Image' />
								<What>{words?.your_storie}</What>
							</YourStorie> 
							<SendToButton onClick={() => console.log('enviar a')}>{words?.send_to}</SendToButton>
						</> :
						<>
							<input 
								type="file" 
								ref={hiddenFileInput}
				             	onChange={handleChange}
				             	style={{display:'none'}}
				             	multiple
							/>		
							<Button onClick={handleClick}><ImageButton src={isAuth.user.profile.picture.length > 0 ? `${url}${isAuth.user.profile.picture}` : imageTest} alt='image by defect'/></Button>
							<WhatContainer onClick={handleClick}>					
								<BsArrowRight size={size}/>
							</WhatContainer>
						</>
					}
				</Footer>			
			</ContainerForPosition>
		</AddStoriContainer>
	)
}

export default AddStorie