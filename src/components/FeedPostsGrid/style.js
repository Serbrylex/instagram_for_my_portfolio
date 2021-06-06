import styled, { css } from 'styled-components'

export const FeedImages = styled.div`
	display: grid;
	width: 100%;
	height: auto;
	grid-template-columns: repeat(3,30vw);
	grid-template-rows: 30vw;
	grid-gap: 3vw;
	padding: 10px 2%;	

	@media (max-width: 100vw) and (min-width: 500px){
	    width: 500px;
	    grid-template-columns: repeat(3, 150px);
		grid-template-rows: 150px;
		grid-gap: 23px;
		padding: 0;	
		border: 1px solid #dbdbdb;	
		margin: 0 auto;    		
    }

    ${props => props.theme === 'light' && css` 
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;
		color: white;
	`}

`

export const EachImageContainer = styled.div`
	position: relative;
	width: 30vw;
	height: 30vw;
	cursor: pointer;
	object-fit: cover;
	@media (max-width: 100vw) and (min-width: 500px){
	    width: 100%;
	    height: 150px;
    }
`

export const IconContainer = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	color: white;
`

export const ImagePost = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;
	object-fit: cover;	
`