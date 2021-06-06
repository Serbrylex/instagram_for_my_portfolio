import styled, { css } from 'styled-components' 

export const LikesContainer = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: white;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	z-index: 100;	
	${props => props.theme === 'light' && css`
		background-color: white;				
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;				
	`}
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 10vh;
	padding: 5px 2vw;
	display: flex;
	align-items: center;
	justify-content: start;	
	border: 1px solid #dbdbdb;

	@media (min-width: 500px){
	    width: 500px;
	    margin: 0 auto;
    }
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
	border: 1px solid #dbdbdb;
	@media (min-width: 500px){
	    width: 500px;
    }
`
