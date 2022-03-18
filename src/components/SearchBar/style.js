import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
	width: 500px;
	height: auto;	
	
	margin: 20px auto;

	${props => props.fixed === 'bottom' && css`
		bottom: 0;
		left: 0;
		right: 0;
		position: fixed;
	`}

	${props => props.theme === 'light' && css` 
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;
		color: white;
	`}
`

export const Form = styled.div`
	width: 90%;
	height: 100%;
	display: grid;
	grid-template-columns: 50px 400px 50px;
	align-items: center;

	@media (min-width: 500px){
	    margin: 0 auto;
	    width: 500px;	    
	    border-radius: 4px;
    }
`

export const Input = styled.input`
	width: 100%;
	height: 80%;
	color: black;	
	border: none;	
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	padding: 5px 10px; 
	grid-column: 2 / 3;

	${props => props.theme === 'dark' && css`
		background-color: #141414;
		color: white;
	`}
`

export const Close = styled.div`
	cursor: pointer;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding-left: 5px;	
	left: 20px;	
	@media (max-width: 500px){
	    display: none;
    }
`

export const ImageProfile = styled.img`
	height: 30px;
	width: 30px;
	border-radius: 100%;
	object-fit: cover;	
	margin-right: 10px;
`

export const Button = styled.button`
	height: 50px;
	width: 100%;
	border: none;	
	color: black;
	cursor: pointer;	
	right: 5px;
	top: 0;
	bottom: 0;
`
