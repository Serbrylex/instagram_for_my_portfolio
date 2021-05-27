import styled from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const HeaderContainer = styled.div`
	width: 100%;
	height: 40px;	
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px 5%;
`
 
export const Title = styled.h1`
	width: 50%;
	font-size: 25px;
`

export const ListIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;	
	width: 35%;
	align-items: center;
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

export const ListIconsProfile = styled.div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Link = styled(Linked)`
	text-decoration: none;
	color: black;
	height: 22px;
`