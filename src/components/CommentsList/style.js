import styled, { css } from 'styled-components' 

export const LikesContainer = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	z-index: 100;	
	
	${props => props.theme === 'light' && css`
		background-color: white;			
		color: black;		
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;		
		color: white;		
	`}
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 50px;
	padding: 5px 2vw;
	display: flex;
	align-items: center;
	justify-content: start;	

	@media (min-width: 500px){
	    margin: 0 auto;
	    width: 500px;
	    border: 1px solid #dbdbdb;
	    border-radius: 4px;
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

export const CommentList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: auto;	
	margin: 10px 0;
	height: 80vh;	
	overflow-y: scroll;

	@media (min-width: 500px){
	    margin: 0 auto;
	    width: 500px;
	    border: 1px solid #dbdbdb;
	    border-radius: 4px;
    }
`
