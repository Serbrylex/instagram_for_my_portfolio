import styled from 'styled-components'

export const NewPostContainer = styled.div`
	width: 100%;
	height: 100vh;	
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 50px;
	padding: 5px 2vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20%;
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
`

export const Image = styled.img`
	width: 100vw;
	height: auto;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;	
	padding: 5px 2vw;
	text-align: start;
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