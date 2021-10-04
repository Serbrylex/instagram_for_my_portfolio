import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
	width: 100%;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 2%; 
	position: relative;

	${props => props.fixed === 'bottom' && css`
		bottom: 0;
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
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;	
	background-color: white;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	padding: 5px 10px; 
	justify-content: space-between;

	@media (min-width: 500px){
	    margin: 0 auto;
	    width: 500px;	    
	    border-radius: 4px;
    }
`

export const Input = styled.input`
	width: 80%;
	height: 100%;
	color: black;	
	border: none;	
`

export const Close = styled.div`
	cursor: pointer;
	height: 100%;
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding-left: 5px;
	position: absolute;
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
	width: 100px;
	border: none;	
	color: black;
	cursor: pointer;
`
