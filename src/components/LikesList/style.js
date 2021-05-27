import styled from 'styled-components' 

export const LikesContainer = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: white;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	z-index: 50;
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 10vh;
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

export const LikeList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 80vh;
	padding: 10px 5vw;
	overflow-y: scroll;
	margin: 0 auto;
`
