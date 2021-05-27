import { useHistory  } from 'react-router-dom'
import { useContext, useState } from 'react'

// Assets
import {
	LoginContainer, MainData, Title, Form, Input, Button, Separator, Line, 
	Element, LinkFacebook, Forgot, Signin, Link, Apps, Description, 
	ImagesContainer, ImageApp, LinkImage, ErrorP, ImageLoading
} from './style'

import { AiFillFacebook } from 'react-icons/ai'

import play from '../../images/play_store.png'
import apple from '../../images/app_store.png'
import circle from '../../images/circle.svg' 

// Components
import Loading from '../../components/Loading'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'

// Context
import UserContext from '../../context/users'

const Login = () => {

	const { activeAuth } = useContext(UserContext)
	const history = useHistory()

	const username = useInputValue('Nombre de usuario')
	const password = useInputValue('Contraseña')

	const [errorResponse, setErrorRespose] = useState({
		error: false,
		listErrors: ''
	})
	const [loading, setLoading] = useState(false)

	const handleSubmit = async e => {
		e.preventDefault()

		setLoading(true)

		const response = await activeAuth({ 
			username: username.value,
			password: password.value
		})

		console.log(response)

		if (response?.access_token) {
			history.push("/")
		} else {
			console.log(response)
			setErrorRespose({
				error: true,
				listErrors: response
			})
			setLoading(false)
		}			
	}


	return(
		<LoginContainer>
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
					<Button type="submit" value="Iniciar sesión" />
				</Form>

				<Separator>
					<Line></Line>
					<Element>o</Element>
					<Line></Line>
				</Separator>

				<LinkFacebook href="Facebook.com"><AiFillFacebook size="20"/> Iniciar sesión con Facebook</LinkFacebook>				

				<Forgot to='/noshe'>¿Olvidaste tu contraseña?</Forgot>
			</MainData>

			<Signin>
				<p>¿No tienes una cuenta? <Link to='/signin'>Registrate</Link></p>
			</Signin>

			<Apps>
				<Description>Descargar app</Description>
				<ImagesContainer>
					<LinkImage href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
						<ImageApp src={apple} alt='app store'/>
					</LinkImage>					
					<LinkImage href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D103DB56E-971E-44EC-9331-858DEA5F3283%26utm_content%3Dlo%26utm_medium%3Dbadge">
						<ImageApp src={play} alt="play store" />
					</LinkImage>
				</ImagesContainer>
			</Apps>			
		</LoginContainer>
	)
}

export default Login 