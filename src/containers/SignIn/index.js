import { useHistory  } from 'react-router-dom'
import { useContext, useState } from 'react'

import {
	LoginContainer, MainData, Title, Form, Input, Button, Separator, Line, Element,
	LinkFacebook, Signin, Link, Apps, Description, ImagesContainer, ImageApp, 
	LinkImage, ErrorP, PHeader
} from './style'

import { AiFillFacebook } from 'react-icons/ai'

import play from '../../images/play_store.png'
import apple from '../../images/app_store.png'

import { useInputValue } from '../../hooks/useInputValue'

import UserContext from '../../context/users'

const SignIn = () => {

	const { activeAuth } = useContext(UserContext)
	const history = useHistory()

	const email = useInputValue('Correo electronico')
	const username = useInputValue('Nombre de usuario')
	const password = useInputValue('Contraseña')
	const password_confirmation = useInputValue('Confirma tu contraseña')
	const first_name = useInputValue('Nombres')
	const last_name = useInputValue('Apellidos')

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
			<MainData>
				<Title>Instagram</Title>	

				<PHeader>Regístrate para ver fotos y videos de tus amigos</PHeader>

				<LinkFacebook href="Facebook.com"><AiFillFacebook size="20"/> Iniciar sesión con Facebook</LinkFacebook>

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
				<p>¿Tienes una cuenta? <Link to='/login'>Inicia sesión</Link></p>
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

export default SignIn 