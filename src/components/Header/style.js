import styled, { css } from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const HeaderContainer = styled.div`
	width: 100%;
	height: 50px;	 
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 5%;
	border: 1px solid #dbdbdb;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;	

	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;
		color: white;
	`}
`
 
export const Title = styled.h1`
	width: 50%;
	font-size: 25px;
	font-family: 'ZCOOL KuaiLe', cursive;
	cursor: pointer;
`

export const ListIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;		
	width: 200px;
	height: 100%;
`

export const Form = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Input = styled.div`
	width: 90%;
	height: 80%;
	padding: 5% 2%;
	position: relative;
`

export const Submit = styled.div`
	background-color: none;
	border: 1px solid red;
	position: absolute;	
`

export const ProfileData = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Username = styled.div`
	width: 70%;
`


export const Link = styled(Linked)`
	text-decoration: none;
	color: black;
	height: auto;
`

export const ImageProfile = styled.img`
	width: 30px;
	height: 30px;
	border: ${props => props.border.length > 0 ? `2px solid ${props.border}` : 'none'};
	border-radius: 100%;
`