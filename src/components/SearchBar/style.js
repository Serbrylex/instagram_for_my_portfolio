import styled, { css } from 'styled-components'

export const SearchContainer = styled.div`
	width: 100%;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 2%;
	
	${props => props.fixed === 'bottom' && css`
		bottom: 0;
		position: fixed;
	`}
`

export const Form = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;	
	background-color: grey;
	border-radius: 4px;
	padding: 5px 10px;
	justify-content: space-between;

`

export const Input = styled.input`
	width: 80%;
	height: 100%;
	color: black;
	background-color: gray;
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
	background-color: none;
	color: blue;
`
