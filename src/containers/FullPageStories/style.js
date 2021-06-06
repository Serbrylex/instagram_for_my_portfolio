import styled from 'styled-components'

import { Link as Linked } from 'react-router-dom'


export const FullPageStoriesContainer = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 10;
	position: fixed;
	background-color: #000000e3;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center; 
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;	
`

export const ImageFont = styled.img`	
	width: 100vw;	
	height: auto;
	cursor: pointer;
	@media (min-width: 500px){        
        width: 500px;        
    }
`

export const HeaderInfo = styled.div`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 15vh;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	padding: 2%;	
	@media (min-width: 500px){        
        width: 500px;        
    }
`

export const HeaderData = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90vw;
	@media (min-width: 500px){        
        width: 450px;        
    }
`

export const DataLeft = styled.div`
	display: flex;
	width: auto;
	padding: 2%;
	align-items: center;
	justify-content: space-between;
`

export const DataRight = styled.div`
	display: flex;
	width: auto;
	padding: 2%;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	color: white;
`

export const ImageProfile = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100%;	
	object-fit: cover;
`

export const Username = styled(Linked)`
	cursor: pointer;
	color: white;
	text-decoration: none;
	font-size: 17px;
	margin: 0 10px;
`

export const Hour = styled.div`
	color: white;
`

export const BottomData = styled.div`
	position: fixed;
	bottom: 0; 
	width: 90vw;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 500px){        
        width: 500px;        
    }
`

export const Input = styled.input`
	width: 80%;
	height: 5vh;
	padding: 5px 10px;
	border-radius: 100px;	
`

export const SendTo = styled(Linked)`
	cursor: pointer;
	width: 10%;
	color: white;
	height: 25px;
`