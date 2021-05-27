import styled from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

` 

export const MainData = styled.div`
	width: 350px;
	height: 65%;	
	border: 1px solid #dbdbdb;
	padding: 3% 5%;
	margin: 1% 5%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;	
`

export const Title = styled.h1`
	margin: 5% 0 10% 0;
`

export const Form = styled.form`
	width: 100%;	
	height: 160px;
	display: flex;
	flex-direction: column;
`

export const Input = styled.input`
	background: #fafafa;		
	margin: 5px 0;	
	padding: 9px 0 7px 8px;
	width: 100%;
	border: 1px solid #dbdbdb;
	border-radius: 2px;
	color: #8e8e8e;	
`

export const Button = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 2px;
	background-color: #b2dffc;
	color: white;
	margin: 10px 0;
	border: none;
	cursor: pointer;
`

export const Separator = styled.div`
	width: 100%;
	height: 0;
	display: flex;
	align-items: center;
	margin: 10px 0;
`

export const Line = styled.div`
	border-bottom: 1px solid #dbdbdb;	
	width: 35%;
`

export const Element = styled.p`
	width: 30%;
	text-align: center;
`


export const LinkFacebook = styled.a`
	color: #385185;
	text-decoration: none;
	width: 100%;
	margin: 10px 0 10px 0;
	display: block;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Forgot = styled(Linked)`
	color: #00376b;
	text-decoration: none;
	width: 100%;	
	display: block;
`

export const Signin = styled.div`
	width: 350px;
	height: 50px;
	padding: 3% 5%;
	margin: 1% 5%;
	border: 1px solid #dbdbdb;
`

export const Link = styled(Linked)`
	color: #0095f6;
	text-decoration: none;	
`

export const Apps = styled.div`
	width: 350px;
	height: 15%;
	padding: 10%;
	padding: 2% 5%;
	margin: 1% 5%;	
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`

export const Description = styled.p`
	
`

export const ImagesContainer = styled.div`
	width: 100%;
	display: flex;	
	justify-content: space-between;
`

export const LinkImage = styled.a`
	height: 40px;
`

export const ImageApp = styled.img`
	height: 40px;
`

export const ErrorP = styled.p`
	color: #ed4956;
`