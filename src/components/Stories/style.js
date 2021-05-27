import styled from 'styled-components'

// Stories --------------------------------------------
export const ListOfStories = styled.div`
	display: flex;
	width: 100vw;
	height: 100px;
	align-items: center;
	border-bottom: 1px solid grey;	
	overflow-x: scroll;
	scrollbar-width: none;
	justify-content: start;
`

export const Stori = styled.div`	
	width: 15vw;
	height: 100%;
	margin: 0 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: center;
	text-decoration: none;	
	cursor: pointer;
`

export const StoriContainer = styled.div`
	border-radius: 100%;
	width: 50px;
	height: 50px;	
	display: flex;
	align-items: center;
	justify-content: center;	
`

export const ImgageStorie = styled.img`
	border-radius: 100%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

export const UsernameShort = styled.p`
	width: 15vw;
	color: black;
	font-size: 12px;
	font-weight: bold;
`