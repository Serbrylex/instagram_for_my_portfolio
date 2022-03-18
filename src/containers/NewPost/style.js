import styled, { css } from 'styled-components'

export const NewPostContainer = styled.div`
	width: 100%;
	height: 100vh;	
	display: grid;
	grid-template-rows: 7vh 13vh 80vh;
	grid-template-columns: 1fr 500px 1fr;

	${props => props.theme === 'light' && css`
		background-color: white;			
		color: black;		
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;		
		color: white;		
	`}	
` 

export const HeaderSection = styled.div`
	width: 100%;
	height: 100%;
	padding: 5px 2%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	grid-column: 1 / 4;

	${props => props.theme === 'light' && css`
		background-color: white;			
		color: black;
		border-bottom: 1px solid black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;		
		color: white;
		border-bottom: 1px solid white;
	`}
`

export const Close = styled.div`
	cursor: pointer;
`

export const Title = styled.h1`
	
`

export const Publish = styled.div`
	cursor: pointer;	
`

export const ImagesContainer = styled.div`
	display: flex;	
	width: 100%;
	height: 90%;	
	grid-column: 2/3;
	position: relative;		
`

export const Image = styled.img`
	width: 100vw;
	height: auto;	
`

export const Form = styled.form`
	display: flex;	
	width: 500px;
	height: 70%;
	padding: 5px 2vw;	
	grid-column: 2/3;
	margin: auto 0;
	align-items: center;
	justify-content: space-evenly;

	${props => props.theme === 'light' && css`
		background-color: white;			
		color: black;
		border: 1px solid black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;		
		color: white;
		border: 1px solid white;
	`}
`

export const Button = styled.button`
	width: 150px;
	height: 30px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 5px;

	${props => props.theme === 'light' && css`				
		color: black;
		border: 1px solid black;
	`}

	${props => props.theme === 'dark' && css`		
		color: white;	
		border: 1px solid white;
	`}
`

export const InputText = styled.input`
	width: 60%;
	height: 30px;
	border-radius: 5px;

	${props => props.theme === 'light' && css`
		background-color: white;			
		color: black;
		border: 1px solid black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;		
		color: white;
		border: 1px solid white;
	`}
`

export const Count = styled.p`
	position: absolute;
	right: 5px;
	top: 5px;
	padding: 5px 10px;
	border-radius: 5px;
	
	${props => props.theme === 'light' && css`
		background-color: white;		
		color: black;
		border: 1px solid black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: black;		
		color: white;
		border: 1px solid white;
	`}
`

export const ButtonArrow = styled.button`
	cursor: pointer;
	position: absolute;
	top: 50%;
	bottom: 50%;
	${props => props.orientation === 'left' && css `
		left: 5px;
	`}
	${props => props.orientation === 'right' && css `
		right: 5px;
	`}	
	background-color: ${props => props.theme === 'light' ? 'black' : 'white'};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	width: 30px;
	height: 30px;
`