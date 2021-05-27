import styled, { css } from 'styled-components'

export const AddStoriContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	color: white;
`

export const ImagesContainer = styled.div`	
	background-color: black;
	width: 100vw;
	height: 100vh;
	${props => props.kindGrid === 'all' && css`
		display: flex;
		overflow-x: scroll;		
		scroll-behavior: smooth;
	`}

	${props => props.kindGrid === 'two' && css`
		display: grid;				
		grid-template-rows: repeat(2, 1fr);
	`}

	${props => props.kindGrid === 'three' && css`
		display: grid;				
		grid-template-columns: repeat(3, 1fr);
	`}

	${props => props.kindGrid === 'four' && css`
		display: grid;		
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);		
	`}	
`

export const ImageBackground = styled.img`	
	width: 100%;
	height: 100%;
	object-fit: cover;		
	${props => props.kindGrid === 'all' && css`
		width: 100vw;
		height: auto;		
	`}
`
export const Header = styled.div`
	position: absolute;
	top: 0;
	width: 100vw;
	height: 50px;	
	display: flex;
	align-items: center;
	color: white;
	justify-content: space-between;
	padding: 0 2vw; 
`
export const NavegationBar = styled.div`
	position: absolute;
	${props => props.position === 'left' ?
		"left: 0" : "right: 0"
	};
	top: 20%;
	bottom: 20%;	
	width: 50px;		
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 0 2vw;
	color: white;
`
export const Footer = styled.div`
	position: absolute;
	left: 0;	
	bottom: 0;
	right: 0;
	width: 100%;	
	height: 50px;	
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2vw;
`
export const Button = styled.button`	
	display: flex;
	width: 35px;
	height: 35px;
	align-items: center;
	justify-content: space-evenly;
	border: 2px solid white;
	border-radius: 5px;
	margin: 0 20px;
`

export const ImageButton = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 5px;
	object-fit: cover;
`

export const WhatContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 20%;	
	right: 20%;
	width: auto;	
	height: 50px;	
	display: flex;
	align-items: center;
	justify-content: space-evenly;

`
export const What = styled.p`
	color: white;
`

export const YourStorie = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const ImageStorie = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 100%;
	border-radius: 1px solid white;
`

export const SendToButton = styled.button`
	background-color: white;
	color: black;	
	border-radius: 10%;
	padding: 5px 10px;
	border: 1px solid black;
`



