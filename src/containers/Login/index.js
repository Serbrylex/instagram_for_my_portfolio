// React 
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector, useDispatch } from 'react-redux'

// Assets 
import {
	LoginContainer, MainData, Title, Form, Input, Button, Separator, Line, 
	Element, LinkFacebook, Forgot, Signin, Link, Apps, Description, 
	ImagesContainer, ImageApp, LinkImage, ErrorP, ImageLoading, ImageLeft,
	LoginForm
} from './style' 
 
import { AiFillFacebook } from 'react-icons/ai'

import play from '../../assets/images/play_store.png'
import apple from '../../assets/images/app_store.png'
import circle from '../../assets/images/circle.svg' 
import imageFont from '../../assets/images/agujero-del-tiempo.jpg' 

// Components
import Loading from '../../components/Loading'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'
import { useGetWords } from '../../hooks/useGetWords'

// API
import apiCall from '../../api/apiCall'

// Actions
import { setUser } from '../../actions'


const Login = () => {	

	// Context	
 	const theme = useSelector(store => store.preference.theme) 	
 	const url = useSelector(store => store.preference.url)

 	const dispatch = useDispatch()

 	// Language hook
 	const words = useGetWords({ container: 'login' })

	const history = useNavigate()

	const username = useInputValue('Username')
	const password = useInputValue('Password')

	const [errorResponse, setErrorRespose] = useState({
		error: false,
		listErrors: ''
	})
	const [loading, setLoading] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()

		setLoading(true)

		const response = await apiCall({  
			url: url + '/user/login/',
			method: 'POST',
			headers:  {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username.value,
				password: password.value				
			})
		})
		if (response.ok) {			
			const data = await response.json()			
			dispatch(setUser({
				...data,
				isAuth: true
			}))
			history("/")
		} else {			
			setErrorRespose({
				error: true,
				listErrors: response
			})			
			setLoading(false)
		}			
	}


	return(		
		<LoginContainer>
			<Helmet>
                <title>Instagram | Login</title>
				<meta name='description' content={`Login of instagram`} />
			</Helmet>
			<ImageLeft src={imageFont} />
			<LoginForm>
				<MainData>
					<Title>Instagram</Title>	
					<Form onSubmit={handleSubmit}>
						{errorResponse.listErrors?.username &&
							<ErrorP>{errorResponse.listErrors.username}</ErrorP>
						}
						<Input type="text" {...username}  />
						{errorResponse.listErrors?.password &&
							<ErrorP>{errorResponse.listErrors.password}</ErrorP>
						}
						<Input type="password" {...password} />
						{errorResponse.listErrors?.non_field_errors &&
							<ErrorP>{errorResponse.listErrors?.non_field_errors}</ErrorP>
						}
						{loading && 
							<Loading />
						}
						<Button type="submit" value={words?.start_session ? words.start_session : ''} />
					</Form>

					<Separator>
						<Line></Line>
						<Element>{words?.or}</Element>
						<Line></Line>
					</Separator>

					<LinkFacebook href="Facebook.com"><AiFillFacebook size="20"/>{words?.start_session_facebook}</LinkFacebook>				

					<Forgot to='/noshe'>{words?.did_you_forgot_password}</Forgot>
				</MainData>

				<Signin>
					<p>{words?.dont_have_an_account} <Link to='/signin'>{words?.sign_in}</Link></p>
				</Signin>

				<Apps>
					<Description>{words?.download_app}</Description>
					<ImagesContainer>
						<LinkImage href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
							<ImageApp src={apple} alt='app store'/>
						</LinkImage>					
						<LinkImage 
							href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D103DB56E-971E-44EC-9331-858DEA5F3283%26utm_content%3Dlo%26utm_medium%3Dbadge"
						>
							<ImageApp src={play} alt="play store" />
						</LinkImage>
					</ImagesContainer>
				</Apps>			
			</LoginForm>
		</LoginContainer>
	)
}

export default Login 