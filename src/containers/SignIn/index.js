// React 
import { useHistory  } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

// Assets
import {
	LoginContainer, MainData, Title, Form, Input, Button, Separator, Line, Element,
	LinkFacebook, Signin, Link, Apps, Description, ImagesContainer, ImageApp, 
	LinkImage, ErrorP, PHeader, ImageLeft, SigninForm
} from './style'
 
import { AiFillFacebook } from 'react-icons/ai'

import play from '../../assets/images/play_store.png'
import apple from '../../assets/images/app_store.png'
import imageFont from '../../assets/images/agujero-del-tiempo.jpg' 

import { useInputValue } from '../../hooks/useInputValue'
import { useGetWords } from '../../hooks/useGetWords'

// Context 
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'


const SignIn = () => {

	// Context
	const { activeAuth } = useContext(UserContext)	
 	const { theme } = useContext(ThemeContext) 	

 	// Language hook
 	const words = useGetWords({ container: 'sign_in' }) 		

	const history = useHistory()

	// Inputs form
	const email = useInputValue('Email')
	const username = useInputValue('Username')
	const password = useInputValue('Password')
	const password_confirmation = useInputValue('Password confirmation')
	const first_name = useInputValue('First name')
	const last_name = useInputValue('Last name')

	const [errorResponse, setErrorRespose] = useState({
		error: false,
		listErrors: ''
	})

	const handleSubmit = async e => {
		e.preventDefault()

		const response = await activeAuth({ 
			urlDirection: 'user/signup/', 
			method: "POST", 
			headers:  {
				'Content-Type': 'application/json',
			}, 
			body: JSON.stringify({
				email: email.value,
				username: username.value,
				password: password.value,
				password_confirmation: password_confirmation.value,
				first_name: first_name.value,
				last_name: last_name.value
			})
		})

		if (response?.access_token) {			
			history.push("/login")
		} else {
			setErrorRespose({
				error: true,
				listErrors: response
			})
		}	

		console.log(response)
	}
	
	return(
		<LoginContainer>
			<Helmet>
                <title>Instagram | Sign In</title>
				<meta name='description' content={`Sign in of Instagram`} />
			</Helmet>
			<ImageLeft src={imageFont} />
			<SigninForm>
				<MainData>
					<Title>Instagram</Title>	

					<PHeader>{words?.sign_in_to}</PHeader>

					<LinkFacebook href="Facebook.com"><AiFillFacebook size="20"/> {words?.start_session_facebook}</LinkFacebook>

					<Separator>
						<Line></Line>
						<Element>o</Element>
						<Line></Line>
					</Separator>

					<Form onSubmit={handleSubmit}>

						{errorResponse.listErrors?.email &&
							<ErrorP>{errorResponse.listErrors.email}</ErrorP>
						}
						<Input type="email" {...email}  />

						{errorResponse.listErrors?.username &&
							<ErrorP>{errorResponse.listErrors.username}</ErrorP>
						}
						<Input type="text" {...username} />

						{errorResponse.listErrors?.password &&
							<ErrorP>{errorResponse.listErrors.password}</ErrorP>
						}
						<Input type="password" {...password} />

						{errorResponse.listErrors?.password_confirmation &&
							<ErrorP>{errorResponse.listErrors.password_confirmation}</ErrorP>
						}
						<Input type="password" {...password_confirmation} />

						{errorResponse.listErrors?.first_name &&
							<ErrorP>{errorResponse.listErrors.first_name}</ErrorP>
						}
						<Input type="text" {...first_name} />

						{errorResponse.listErrors?.last_name &&
							<ErrorP>{errorResponse.listErrors.last_name}</ErrorP>
						}
						<Input type="text" {...last_name} />

						<Button type="submit" value="Registrarte" />
					</Form>				

					{errorResponse.listErrors?.non_field_errors &&
						<ErrorP>{errorResponse.listErrors?.non_field_errors}</ErrorP>
					}
					
				</MainData>

				<Signin>
					<p>{words?.you_have_account} <Link to='/login'>{words?.start_session}</Link></p>
				</Signin>

				<Apps>
					<Description>{words?.download_app}</Description>
					<ImagesContainer>
						<LinkImage href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
							<ImageApp src={apple} alt='app store'/>
						</LinkImage>					
						<LinkImage href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D103DB56E-971E-44EC-9331-858DEA5F3283%26utm_content%3Dlo%26utm_medium%3Dbadge">
							<ImageApp src={play} alt="play store" />
						</LinkImage>
					</ImagesContainer>
				</Apps>			
			</SigninForm>
		</LoginContainer>
	)
}

export default SignIn 