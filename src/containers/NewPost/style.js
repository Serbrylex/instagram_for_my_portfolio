import styled, { css } from 'styled-components'

export const NewPostContainer = styled.div`
	width: 100%;
	height: 100vh;	
	position: relative;
	padding-top: 60px;

	${props => props.theme === 'light' && css`
		background-color: white;			
		color: black;
		border: 1px solid black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;		
		color: white;
		border: 1px solid white;
	`}

	@media (min-width: 500px){
	    display: flex;
	    justify-content: space-evenly;	
	    padding: 60px 20px 0 20px;   	    
    }
` 

export const HeaderSection = styled.div`
	width: 100%;
	height: 50px;
	padding: 5px 2%;
	display: flex;
	align-items: center;
	justify-content: space-between;	
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

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
	overflow-x: scroll;	
	width: 100vw;
	height: auto;
	scroll-behavior: smooth;

	@media (min-width: 500px){
	    width: 45vw;
    }
`

export const Image = styled.img`
	width: 100vw;
	height: auto;
	@media (min-width: 500px){
	    width: 45vw;
    }
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;	
	padding: 5px 2vw;
	text-align: start;

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

	@media (min-width: 500px){
	    width: 45vw;
    }
`

export const Button = styled.button`
	width: 120px;
	height: 50px;
	font-weight: 600;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

export const InputText = styled.textarea`
	width: 100%;
	height: 50px;
	resize: none;
`