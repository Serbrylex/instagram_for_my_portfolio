import styled from 'styled-components' 

export const LikesContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	background-color: white;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	z-index: 100;	
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 50px;
	padding: 5px 2vw;
	display: flex;
	align-items: center;
	justify-content: start;	
`

export const Close = styled.div`
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Title = styled.h1`
	margin-left: 10px;
`

export const Publish = styled.div`
	cursor: pointer;	
`

export const CommentList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: auto;	
	margin: 10px 0;
	height: 80vh;	
	overflow-y: scroll;
`
