import styled, { css } from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const HeaderContainer = styled.div`
	width: 100%;
	height: 60px;	 
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	justify-content: space-between;
	padding: 5px 5%;
	border-bottom: 1px solid #dbdbdb;
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
	width: auto;
	font-size: 25px;
	font-family: 'ZCOOL KuaiLe', cursive;
	cursor: pointer;
`

export const ListIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;		
	width: 80%;
	height: 100%;
	margin-left: auto;
`

export const ProfileData = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 80%;
`

export const Username = styled.div`
	width: auto;
`

export const Link = styled(Linked)`
	text-decoration: none;
	color: black;
	height: auto;
	margin: 5px;
`

export const ImageProfile = styled.img`
	width: 30px;
	height: 30px;
	border: ${props => props.border.length > 0 ? `2px solid ${props.border}` : 'none'};
	border-radius: 100%;
	object-fit: cover;
`

export const FormContainer = styled.div`	
	width: 100%;
	height: 80%;		
	display: flex;
	position: relative;		
	align-items: center;
`

export const LinkSearch = styled(Linked)`
	text-decoration: none;
	height: 22px;	
	color: black;	
	position: absolute;
	right: 2%;
	z-index: 10;	
	top: 0;
	bottom: 0;
	margin: auto 0;
`

export const Input = styled.input`
	width: 100%;
	height: 100%;
	padding: 2px 5px;
	background-color: #141414;
	color: white;
	border: none;
	border-radius: 10px;
`
