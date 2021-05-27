import styled from 'styled-components'

import { Link as Linked } from 'react-router-dom'

export const FooterContainer = styled.div`
	height: 10vh;
	width: 100vw;	
	position: fixed;
	bottom: 0;
	left: 0;
	rigth: 0;
	display: flex;
	align-items: center; 
	justify-content: space-evenly;
	background-color: white;
	z-index: 5;
	padding: 5px 2vw;
`

export const Link = styled(Linked)`
	color: black;
	margin: 0 10px;
`

export const ImgageProfile = styled.img`
	width: 30px;
	height: 30px;
	border: ${props => props.border === 'true' ? '2px solid black' : 'none'};
	border-radius: 100%;
`