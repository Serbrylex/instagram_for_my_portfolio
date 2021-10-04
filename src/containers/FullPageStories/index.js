// React
import { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Assets
import { 
	FullPageStoriesContainer, ImageFont, HeaderInfo,
	HeaderData, DataLeft, ImageProfile, Username, Hour, 
	DataRight, BottomData, Input, SendTo
} from './style' 
 
import { AiOutlineSend } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useGetAllStories } from '../../hooks/useGetAllStories'
import { useGetWords } from '../../hooks/useGetWords'

// Components
import Loading from '../../components/Loading'
import TimeLine from '../../components/TimeLine'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'


const FullPageStories = ({ url, byUser = false }) => {
	
	// Variables
	let timer
	const size = '25px'	
	const history = useHistory()		
	const { index } = useParams()
 	
 	// Context
	const { isAuth } = useContext(UserContext) 	
 	const { theme } = useContext(ThemeContext) 	

 	// Language hook
 	const words = useGetWords({ container: 'full_page_stories' }) 	

	try{
		parseInt(index)
	}catch(e){
		history.push('/')
	}

 	// Stories	
	const stories = useGetAllStories({ 
		token: isAuth.access_token, 
		user: isAuth.user,
		url: url,
		byUser: byUser
	})	

	// Variables especificas para algo
	const [time, setTime] = useState(999)
	const message = useInputValue(words?.send_message)

	const [actualUser, setActualUser] = useState({})
	const [userIndex, setUserIndex] = useState(parseInt(index))

	const [actualStorie, setActualStorie] = useState({})
	const [storiesIndex, setStoriesIndex] = useState(0)

	// Settea la información para mostrarla en la pestaña actual
	const setStorie = () => {					
		let data = {						
			id: stories[userIndex].stories[storiesIndex].id,
			image: stories[userIndex].stories[storiesIndex].image,
			created: stories[userIndex].stories[storiesIndex].created			
		}
		
		setActualStorie(data)
	}

	const setUser = () => {		
		let data = {
			id: stories[userIndex].user.id,
			picture: stories[userIndex].user.picture,
			username: stories[userIndex].user.username
		}
	
		setActualUser(data)
	}

	// Cada vez que cambie userIndex esta función seteara el user
	useEffect(()=>{
		if (stories.length > 0) {			
			setUser()
		}
	}, [userIndex])

	// Cada vez que cambie storiesIndex esta función seteara la story
	useEffect(()=>{
		if (stories.length > 0) {			
			setStorie()
		}
	}, [storiesIndex])

	// Actual data cuando el fetch de información termina	
	useEffect(() => {
		if (stories.length > 0) {
			setUser()
			setStorie()	
			setTime(0)
		}
	}, [stories])
	

	// Detecta el lado de la pantalla en donde se dio el click
	// Izquierda regresa y derecha avanza
	const handleClickWindow = async e => {

		clearTimeout(timer)

		const widthScreen = window.screen.width
		const widthClient = e.clientX		
		// Si es menor le dio click del lado izquierdo
		// Si es mayor le dio click del lado derecho
		if ( widthClient < (widthScreen / 2) ) {		
			// Izquierda
			if (storiesIndex > 0) {
				setStoriesIndex(storiesIndex - 1)
			} else if (storiesIndex === 0 && userIndex > 0) {
				setStoriesIndex(stories[userIndex - 1].stories.length - 1)	
				setUserIndex(userIndex - 1)
			}
		} else {			
			// Derecha
			if (storiesIndex < stories[userIndex].stories.length - 1) {
				setStoriesIndex(storiesIndex + 1)
			} else if (storiesIndex === stories[userIndex].stories.length - 1 && userIndex < stories.length - 1) {
				setUserIndex(userIndex + 1)
				setStoriesIndex(0)
			} else {				
				history.goBack()
			}
		}		
		setTime(0)
		//setTime(1)
	}

	// Timer para cada Storie
	useEffect(()=>{		
		if (stories[userIndex]?.user) {
			timer = setTimeout(()=>{
				if (time === 5) {					
					if (storiesIndex < stories[userIndex].stories.length - 1){
						setStoriesIndex(storiesIndex + 1)
					} else {						
						if (userIndex < stories.length - 1) {
							setUserIndex(userIndex + 1)
							setStoriesIndex(0)							
						} else {							
							clearTimeout(timer)
							history.goBack()
						}
					}					
					setTime(0)
				} else {
					setTime(time+1)
				}
			}, 500)
		}
	}, [time])
	

	return(
		<FullPageStoriesContainer onClick={e => handleClickWindow(e)}>
			<Helmet>
                <title>Stories</title> 
				<meta name='description' content={`This is the storie of: ${isAuth.user.username}`} />
			</Helmet>
			{actualStorie?.id ?
				<><ImageFont src={actualStorie.image} alt={actualUser.username}/>
				<HeaderInfo>
					<TimeLine size={stories[userIndex].stories.length} where={storiesIndex} />
					<HeaderData>
						<DataLeft>
							<ImageProfile src={actualUser.picture} alt={actualUser.username} />
							<Username to={`/profile/${actualUser.username}`}>{actualUser.username}</Username>
							<Hour>{actualStorie.created}</Hour>
						</DataLeft>
						<DataRight>
							<MdClose size={size} onClick={()=>history.goBack()}/>
						</DataRight>
					</HeaderData>
				</HeaderInfo>
				<BottomData>
					<Input {...message} />
					<SendTo to=''>
						<AiOutlineSend size={size} />
					</SendTo>
				</BottomData></> :
				<Loading />
			}
		</FullPageStoriesContainer>
	)
}

export default FullPageStories