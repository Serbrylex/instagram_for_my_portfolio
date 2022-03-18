import styled, { css } from 'styled-components'

// Stories --------------------------------------------
export const ListOfStoriesFor = styled.div`	
	width: 100%;
	height: auto;	
	border-bottom: 1px solid #dbdbdb;		
	position: relative;
	display: flex;
	align-items: center;
	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;
		color: white;
	`}

	@media (min-width: 500px){
	    margin: 10px auto;
	    border: 1px solid #dbdbdb;
	    width: 500px;
    }	
`

export const ListOfStories = styled.div`
	display: flex;
	width: 100%;
	height: 100%; 
	align-items: center;	
	overflow-x: scroll; 
	scrollbar-width: none;
	justify-content: start;	

	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`
export const ArrowsContainer = styled.div`	
	position: absolute;

	top: 0;
	bottom: 0;
	${props => props.orientation === 'left' && css`left: 5px;`}
	${props => props.orientation === 'right' && css`right: 5px;`}	

	display: flex;
	align-items: center;
	justify-content: center;	
	width: 30px;
	height: 100%;

	& > svg {
		cursor: pointer;
		background-color: ${props => props.theme === 'light' ? 'black' : 'white'};
		border-radius: 100%;
		width: 25px;
		height: 25px;
	}
`

export const Stori = styled.div`	
	width: 70px;
	height: auto;
	margin: 5px;
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
	margin-bottom: 2px;
	${props => props.theme === 'light' && css`
		border: 1px solid black;
	`}	
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
	color: ${props => props.theme === 'light' ? 'black'	: 'white'};		
`