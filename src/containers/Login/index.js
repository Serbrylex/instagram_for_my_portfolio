// React 
import { useHistory } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

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

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

const Login = () => {	

	// Context
	const { activeAuth } = useContext(UserContext)	
 	const { theme } = useContext(ThemeContext) 	

 	// Language hook
 	const words = useGetWords({ container: 'login' })

	const history = useHistory()

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

		const response = await activeAuth({  
			urlDirection: 'user/login/',
			body: JSON.stringify({
				username: username.value,
				password: password.value				
			})
		})

		if (response?.access_token) {
			history.push("/")
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