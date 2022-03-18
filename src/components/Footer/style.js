import styled, { css } from 'styled-components'
import { Link as Linked } from 'react-router-dom'

export const FooterContainer = styled.div` 
	height: 50px;
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
	border-top: 1px solid white;
	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;
		color: white;
	`}

	@media (max-width: 100vw) and (min-width: 500px){
	    display: none;
    }
`

export const Link = styled(Linked)`
	color: black;
	margin: 0 10px;
	cursor: pointer;
`

export const ImgageProfile = styled.img`
	width: 30px;
	height: 30px;
	border: ${props => props.border.length > 0 ? `2px solid ${props.border}` : 'none'};
	border-radius: 100%;
`